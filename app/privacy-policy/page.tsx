import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { ShieldCheck, Lock, Cookie, Eye, UserCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - DigiX (100% Client-Side Browser Security)",
  description:
    "Read the DigiX Privacy Policy. Learn about our 100% client-side browser image processing architecture, mandatory Google AdSense cookie disclosures, and user GDPR/CCPA privacy rights.",
  alternates: {
    canonical: "https://digix.com.pk/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />

      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% Local In-Browser Processing Standard
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          Effective Date: August 17, 2026 | Domain: DigiX.com.pk
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        {/* Core Guarantee: Zero Server Uploads */}
        <section className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 space-y-3 shadow-sm">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 m-0">
            <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            1. Primary Privacy Guarantee: 100% Client-Side Local RAM Processing
          </h2>
          <p className="text-slate-800 dark:text-slate-200 font-medium m-0">
            At DigiX (<code className="text-indigo-600 dark:text-indigo-400">DigiX.com.pk</code>), your visual data privacy is our absolute priority. Unlike conventional online file converters, DigiX processes 100% of your images, passport photos, CNIC identity card scans, educational degrees, and digital signatures locally inside your web browser’s RAM (using HTML5 Canvas APIs and Web Workers).
          </p>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/80 text-xs font-semibold text-emerald-900 dark:text-emerald-200">
            ✓ ZERO SERVER UPLOADS: Your photographic binary data never crosses network sockets, is never saved on remote server hard drives, and is permanently purged from device memory when you close your browser tab.
          </div>
        </section>

        {/* Mandatory Google AdSense & Cookie Disclosures */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-indigo-600" />
            2. Mandatory Google AdSense & Third-Party Advertising Cookie Disclosure
          </h2>
          <p>
            DigiX uses Google AdSense and third-party advertising networks to serve advertisements when you visit our website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to DigiX or other websites on the Internet:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google DART & Advertising Cookies:</strong> Google and its advertising partners use cookies (such as the DART cookie) to serve personalized ads based on your browsing history across the web.
            </li>
            <li>
              <strong>Opt-Out of Personalized Advertising:</strong> You can opt out of personalized Google advertising at any time by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline font-semibold"
              >
                Google Ad Settings (https://adssettings.google.com)
              </a>
              .
            </li>
            <li>
              <strong>Third-Party Opt-Out Tools:</strong> Alternatively, you can opt out of third-party vendor cookies for interest-based advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline font-semibold"
              >
                www.aboutads.info/choices/
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Web Analytics & Log Files */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-indigo-600" />
            3. Server Log Files & Privacy-Preserving Web Analytics
          </h2>
          <p>
            DigiX follows standard hosting log file procedures. Information collected by standard hosting logs includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring pages, and page click counts. This data is non-personally identifiable and is used strictly for technical performance monitoring, server capacity planning, and security threat prevention.
          </p>
        </section>

        {/* User Rights under GDPR & CCPA */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600" />
            4. User Rights Under GDPR (EU) & CCPA (California)
          </h2>
          <p>
            Even though DigiX does not store or collect user image files on remote databases, third-party ad networks (like Google AdSense) collect cookie and device data. Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), users possess the following explicit rights:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Right to Access:</strong> You can request details on what technical log data or ad preferences are recorded.</li>
            <li><strong>Right to Erasure / Deletion:</strong> You can clear browser local storage, cookies, and cached data at any time via your browser settings.</li>
            <li><strong>Right to Opt-Out of Data Sale / Personalization:</strong> Use Google Ad Settings or our cookie consent banner to disable personalized ad tracking.</li>
          </ul>
        </section>

        {/* Contact Privacy Inquiries */}
        <section className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-indigo-600" /> Privacy Questions & Data Requests
          </h3>
          <p>
            If you have questions regarding this Privacy Policy or cookie management, please reach out via our{" "}
            <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">
              Contact Page
            </Link>
            . We respond to all privacy inquiries within 24 to 48 hours.
          </p>
        </section>
      </div>

      <AdSlot slotId="privacy-bottom" format="horizontal" />
    </div>
  );
}
