const fs = require('fs');
const path = require('path');

// Helper to count words in string
function countWords(str) {
  if (!str) return 0;
  // Strip code syntax, HTML tags, punctuation, and split by whitespace
  const cleanStr = str.replace(/<[^>]*>/g, ' ').replace(/```[\s\S]*?```/g, ' ');
  const words = cleanStr.trim().split(/\s+/);
  return words.filter(w => w.length > 0).length;
}

// We will read lib/seo-data.ts and lib/guides-data.ts directly
const seoDataPath = path.join(__dirname, '..', 'lib', 'seo-data.ts');
const guidesDataPath = path.join(__dirname, '..', 'lib', 'guides-data.ts');

const seoContent = fs.readFileSync(seoDataPath, 'utf8');
const guidesContent = fs.readFileSync(guidesDataPath, 'utf8');

// Parse text for each slug using TS output compilation or JSON regex parsing
console.log("=== PROGRAMMATIC WORD COUNT & FAQ AUDIT ===");

// We can compile TS using ts-node or plain node after inline evaluation
const { PHASE_1_SEO_PAGES } = require('../lib/seo-data');
const { GUIDE_ARTICLES } = require('../lib/guides-data');

console.log("\n--- TOOL LANDING PAGES ---");
let allFaqs = [];

Object.values(PHASE_1_SEO_PAGES).forEach((tool, idx) => {
  let totalText = `${tool.title} ${tool.metaDescription} ${tool.heading} ${tool.subheading} `;
  tool.officialRequirements.forEach(req => totalText += `${req} `);
  tool.contentSections.forEach(sec => totalText += `${sec.heading} ${sec.body} `);
  tool.faqs.forEach(faq => {
    totalText += `${faq.question} ${faq.answer} `;
    allFaqs.push({ article: `#${idx + 1} (${tool.slug})`, question: faq.question });
  });

  const wc = countWords(totalText);
  console.log(`Article #${idx + 1} [${tool.slug}]: Real Word Count = ${wc} words`);
});

console.log("\n--- ENGINEERING GUIDES ---");
Object.values(GUIDE_ARTICLES).forEach((guide, idx) => {
  let totalText = `${guide.title} ${guide.metaDescription} ${guide.summary} `;
  guide.sections.forEach(sec => {
    totalText += `${sec.heading} ${sec.content} `;
    if (sec.table) {
      sec.table.headers.forEach(h => totalText += `${h} `);
      sec.table.rows.forEach(row => row.forEach(c => totalText += `${c} `));
    }
  });

  const wc = countWords(totalText);
  console.log(`Article #${idx + 13} [${guide.slug}]: Real Word Count = ${wc} words`);
});

console.log(`\nTotal Unique FAQs extracted: ${allFaqs.length}`);
