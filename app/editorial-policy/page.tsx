import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { FileCheck, RefreshCw, AlertCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy - DigiX Editorial Integrity & Research Standards",
  description:
    "Learn about DigiX editorial standards, official portal requirement cross-referencing, content verification schedules, and correction request procedures.",
  alternates: {
    canonical: "https://digix.com.pk/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: "Editorial Policy", url: "/editorial-policy" }]} />

      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> Editorial Integrity & Fact-Checking Standard
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Editorial Policy & Fact-Checking Standards
        </h1>

        <p className="text-xs text-slate-500 font-medium">
          Last Updated: August 17, 2026 | DigiX Editorial Board
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        {/* Core Principles */}
        <section className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 m-0">
            <FileCheck className="w-5 h-5 text-indigo-600" />
            1. Empirical Research & Official Source Cross-Referencing
          </h2>
          <p className="text-slate-700 dark:text-slate-300 m-0">
            At DigiX (<code className="text-indigo-600 dark:text-indigo-400">DigiX.com.pk</code>), our mission is to deliver accurate, non-templated technical guidance for digital document optimization. Every file dimension, KB target ceiling, DPI requirement, and aspect ratio published across our tool pages and guides is directly cross-referenced against primary official documentation—including NADRA Pak-ID rules, PPSC, FPSC, BPSC, SPSC application notices, HEC e-Services user manuals, SBP KYC directives, and ICAO Doc 9303 international standards.
          </p>
        </section>

        {/* Regular Audits */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-indigo-600" />
            2. Regular Portal Specification Audit Schedule
          </h2>
          <p>
            Government e-services portals, banking applications, and testing agencies periodically update their candidate profile upload rules and file weight ceilings. To maintain total data accuracy:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Quarterly Automated & Manual Audits:</strong> Our engineering team reviews official portal upload guidelines every quarter to capture any changes in document ceilings or pixel dimensions.
            </li>
            <li>
              <strong>Immediate Hotfix Protocol:</strong> Whenever a regulatory body (such as NADRA, FPSC, or HEC) updates its file upload parameters, affected tool pages are updated within 48 hours.
            </li>
            <li>
              <strong>Explicit Verification Flags:</strong> Unverified or changing portal figures are clearly annotated with <code className="text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950 px-1 py-0.5 rounded">[VERIFY]</code> tags until confirmed by official notices.
            </li>
          </ul>
        </section>

        {/* Correction Requests */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-indigo-600" />
            3. Reader Feedback & Correction Request Process
          </h2>
          <p>
            We welcome feedback from applicants, recruiters, and administrative users. If you discover a discrepancy between a published spec on DigiX and an official application portal:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Submit a correction request via our{" "}
              <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">
                Contact Technical Support Page
              </Link>
              .
            </li>
            <li>Include the official portal URL, screenshot of the error, or official pdf guidelines.</li>
            <li>Our team will investigate and update the site within 24–48 hours upon verification.</li>
          </ol>
        </section>

        {/* Independence Disclaimer */}
        <section className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          <strong>Independent Laboratory Notice:</strong> DigiX is an independent client-side digital web utility laboratory. DigiX is not affiliated with, endorsed by, or sponsored by any government agency, testing service, or university. All portal names and trademarks are used strictly for educational guidance.
        </section>
      </div>

      <AdSlot slotId="editorial-bottom" format="horizontal" />
    </div>
  );
}
