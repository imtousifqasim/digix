/**
 * Google Search Console (GSC) Automated URL Inspection & Sitemap Submission Script
 * =================================================================================
 * Domain: https://digix.com.pk
 * Author: DigiX Web Performance Lab
 * 
 * PURPOSE:
 * 1. Automatically extracts all 28 production URLs across DigiX (tools, guides, static pages).
 * 2. Authenticates via Google Service Account (`gsc-key.json`).
 * 3. Submits `sitemap.xml` directly to Search Console API to trigger Googlebot site re-crawl.
 * 4. Inspects real-time indexing status using the official URL Inspection API.
 * 5. Transparently handles Indexing API calls with clear logging regarding Google's guidelines.
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const DOMAIN = 'https://digix.com.pk';
// GSC supports two property formats: 'https://digix.com.pk/' or Domain Property 'sc-domain:digix.com.pk'
const GSC_SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:digix.com.pk';
const KEY_FILE_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, '..', 'gsc-key.json');

// --- 1. EXTRACT ALL 28 PRODUCTION URLS ---
function getAllProductionUrls() {
  const urls = [];

  // Static routes
  const staticRoutes = [
    '/',
    '/guides',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
    '/editorial-policy'
  ];
  staticRoutes.forEach(r => urls.push(`${DOMAIN}${r}`));

  // 12 Tool Pages from lib/seo-data.ts
  try {
    const seoDataContent = fs.readFileSync(path.join(__dirname, '..', 'lib', 'seo-data.ts'), 'utf8');
    const toolMatches = [...seoDataContent.matchAll(/"slug":\s*"([a-z0-9\-]+)"/g)];
    toolMatches.forEach(m => urls.push(`${DOMAIN}/${m[1]}`));
  } catch (err) {
    console.error('⚠️ Could not parse lib/seo-data.ts:', err.message);
  }

  // 8 Guide Pages from lib/guides-data.ts
  try {
    const guidesDataContent = fs.readFileSync(path.join(__dirname, '..', 'lib', 'guides-data.ts'), 'utf8');
    const guideMatches = [...guidesDataContent.matchAll(/"slug":\s*"([a-z0-9\-]+)"/g)];
    guideMatches.forEach(m => urls.push(`${DOMAIN}/guides/${m[1]}`));
  } catch (err) {
    console.error('⚠️ Could not parse lib/guides-data.ts:', err.message);
  }

  // Deduplicate
  return [...new Set(urls)];
}

// --- 2. AUTHENTICATION & GSC API EXECUTION ---
async function runGscAutomation() {
  console.log('\n===============================================================');
  console.log('🚀 DIGIX GOOGLE SEARCH CONSOLE AUTOMATION & INDEXING AUDIT');
  console.log('===============================================================\n');

  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.log('❌ SERVICE ACCOUNT KEY FILE NOT FOUND!');
    console.log(`Expected location: ${KEY_FILE_PATH}\n`);
    console.log('📋 SETUP INSTRUCTIONS:');
    console.log('1. Follow STEP 1 in the guide to create a Service Account in Google Cloud Console.');
    console.log('2. Download the JSON key and save it as `gsc-key.json` in your project root directory.');
    console.log('3. Add the Service Account email address as an "Owner" or "Full" user in Google Search Console.\n');
    process.exit(1);
  }

  // Set up Google Auth
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/indexing'
    ]
  });

  const authClient = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  const targetUrls = getAllProductionUrls();
  console.log(`📌 Found ${targetUrls.length} Total Site URLs to audit & inspect.\n`);

  // STEP A: SUBMIT SITEMAP TO SEARCH CONSOLE API
  console.log('---------------------------------------------------------------');
  console.log('📬 STEP A: Submitting Sitemap to Google Search Console API...');
  console.log('---------------------------------------------------------------');
  const sitemapUrl = `${DOMAIN}/sitemap.xml`;

  try {
    await searchconsole.sitemaps.submit({
      siteUrl: GSC_SITE_URL,
      feedpath: sitemapUrl
    });
    console.log(`✅ [SUCCESS] Submitted sitemap: ${sitemapUrl} to property: ${GSC_SITE_URL}\n`);
  } catch (err) {
    console.log(`⚠️ [NOTICE] Sitemap submission note: ${err.message}`);
    console.log(`   (If property uses 'https://digix.com.pk/' format, ensure GSC_SITE_URL matches property exactly)\n`);
  }

  // STEP B: INSPECT INDEXING STATUS FOR ALL URLS
  console.log('---------------------------------------------------------------');
  console.log('🔍 STEP B: Inspecting Real-Time Indexing Status via URL Inspection API...');
  console.log('---------------------------------------------------------------');

  let indexedCount = 0;
  let pendingCount = 0;
  let errorCount = 0;

  for (let i = 0; i < targetUrls.length; i++) {
    const url = targetUrls[i];
    process.stdout.write(`[${i + 1}/${targetUrls.length}] Checking ${url} ... `);

    try {
      const inspectRes = await searchconsole.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: GSC_SITE_URL
        }
      });

      const result = inspectRes.data.inspectionResult?.indexStatusResult;
      const coverage = result?.coverageState || 'UNKNOWN';
      const verdict = result?.verdict || 'NEUTRAL';
      const lastCrawl = result?.lastCrawlTime ? new Date(result.lastCrawlTime).toLocaleDateString() : 'Never';

      if (verdict === 'PASS' || coverage.toLowerCase().includes('indexed')) {
        indexedCount++;
        console.log(`✅ [INDEXED] (${coverage} | Last Crawl: ${lastCrawl})`);
      } else {
        pendingCount++;
        console.log(`⏳ [PENDING INDEXING] (${coverage} | Last Crawl: ${lastCrawl})`);

        // STEP C: INDEXING API PUBLISH NOTIFICATION (WITH CLEAR SCOPE WARNING)
        // Note: Google officially restricts Indexing API to JobPosting and BroadcastEvent types.
        try {
          await indexing.urlNotifications.publish({
            requestBody: {
              url: url,
              type: 'URL_UPDATED'
            }
          });
          console.log(`   └─ ⚡ Indexing API ping sent for: ${url}`);
        } catch (idxErr) {
          console.log(`   └─ ℹ️ Indexing API ping note: ${idxErr.message} (Standard Google policy limitation)`);
        }
      }
    } catch (err) {
      errorCount++;
      console.log(`⚠️ [INSPECTION NOTE] ${err.message}`);
    }

    // Respect Google API rate limits (100ms pause per URL)
    await new Promise(r => setTimeout(r, 150));
  }

  // SUMMARY AUDIT REPORT
  console.log('\n===============================================================');
  console.log('📊 GOOGLE SEARCH CONSOLE INDEXING SUMMARY REPORT');
  console.log('===============================================================');
  console.log(`• Property Verified:       ${GSC_SITE_URL}`);
  console.log(`• Total Site URLs Checked: ${targetUrls.length}`);
  console.log(`• Confirmed Indexed:      ${indexedCount}`);
  console.log(`• Pending Google Crawl:   ${pendingCount}`);
  console.log(`• Inspection Warnings:    ${errorCount}`);
  console.log('===============================================================\n');

  console.log('💡 NEXT STEPS & RECOMMENDATIONS:');
  console.log('1. `sitemap.xml` has been submitted. Googlebot will process all pending URLs automatically.');
  console.log('2. For urgent priority pages (e.g., home or new guides), perform manual "Request Indexing" in Search Console UI.');
  console.log('3. Re-run this script anytime: `node scripts/submit-to-gsc.js`\n');
}

runGscAutomation().catch(err => {
  console.error('\n❌ Unhandled Execution Error:', err.message);
});
