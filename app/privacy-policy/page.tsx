import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { ShieldCheck, Lock, Cookie, Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - DigiX (100% Client-Side Processing)",
  description:
    "Read the DigiX Privacy Policy. Learn about our 100% client-side browser image processing architecture, Google AdSense cookie disclosures, and user privacy rights.",
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
          <ShieldCheck className="w-3.5 h-3.5" /> Client-Side Privacy Standard
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          Effective Date: August 17, 2026 | Domain: DigiX.com.pk
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 m-0">
            <Lock className="w-5 h-5 text-indigo-600" />
            1. Zero Cloud Uploads: 100% Client-Side Processing Architecture
          </h2>
          <p className="text-slate-700 dark:text-slate-300 m-0">
            At DigiX (`DigiX.com.pk`), your privacy is paramount. Unlike conventional online file converters, DigiX processes all image files 100% client-side inside your web browser’s local memory (using HTML5 Canvas APIs and JavaScript Web Workers).
          </p>
          <p className="text-slate-700 dark:text-slate-300 font-semibold m-0">
            Your uploaded photos, CNIC scans, signatures, and passport documents are never sent over the internet to remote servers, stored on remote hard disks, or shared with third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            2. Google AdSense & Third-Party Advertising Cookies
          </h2>
          <p>
            DigiX utilizes Google AdSense and third-party advertising networks to serve advertisements when you visit our website. Google, as a third-party vendor, uses cookies to serve ads on our site.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Google DART Cookie:</strong> Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visit to DigiX and/or other sites on the Internet.
            </li>
            <li>
              <strong>Opt-Out of Interest-Based Advertising:</strong> Users may opt-out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline"
              >
                Google Ad Settings
              </a>
              .
            </li>
            <li>
              You can also manage third-party cookie preferences via our persistent Cookie Consent Banner or by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline"
              >
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            3. Log Files & Web Analytics
          </h2>
          <p>
            DigiX follows standard log file procedures. These files log visitors when they visit websites. All hosting companies do this as part of hosting services analytics. Information collected includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This data is not linked to any personally identifiable information and is used solely for analyzing traffic trends and managing site performance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            4. User Rights Under GDPR & CCPA
          </h2>
          <p>Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), users possess explicit privacy rights:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Right to Know / Access:</strong> You have the right to request disclosures regarding collected data.</li>
            <li><strong>Right to Deletion:</strong> Because DigiX does not collect or store personal images on servers, there is zero stored user image data to erase.</li>
            <li><strong>Right to Opt-Out:</strong> You can opt-out of analytics and advertising tracking via our cookie management modal at any time.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            5. Contact Information for Privacy Concerns
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our data privacy officer at:
          </p>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-mono text-xs">
            Email: support@digix.com.pk <br />
            Subject: Privacy Policy Inquiry <br />
            Domain: DigiX.com.pk
          </div>
        </section>
      </div>

      <AdSlot slotId="privacy-bottom" format="horizontal" />
    </div>
  );
}
