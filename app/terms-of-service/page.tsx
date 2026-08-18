import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { AlertTriangle, ShieldAlert, CheckCircle2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Regulatory Disclaimer - DigiX",
  description:
    "Read the DigiX Terms of Service, non-affiliation regulatory disclaimer for official government portals (NADRA, FPSC, PPSC, HEC), and as-is software usage conditions.",
  alternates: {
    canonical: "https://digix.com.pk/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />

      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Terms of Service & Regulatory Disclaimers
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Effective Date: August 17, 2026 | Domain: DigiX.com.pk
        </p>
      </div>

      {/* PROMINENT DISCLAIMER BLOCK AT VERY TOP */}
      <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/50 border-2 border-amber-300 dark:border-amber-800 space-y-3 shadow-sm">
        <h2 className="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 m-0">
          <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          Mandatory Non-Affiliation & Regulatory Disclaimer
        </h2>
        <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium m-0">
          <strong>DigiX (<code className="text-amber-800 dark:text-amber-300">DigiX.com.pk</code>) is an independent client-side digital web utility laboratory.</strong> DigiX is <strong>NOT</strong> affiliated with, endorsed by, authorized by, sponsored by, or in any way officially connected with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-amber-900 dark:text-amber-300 pt-1">
          <span>• NADRA (Pak-ID)</span>
          <span>• FPSC (Federal PSC)</span>
          <span>• PPSC (Punjab PSC)</span>
          <span>• BPSC (Balochistan PSC)</span>
          <span>• SPSC (Sindh PSC)</span>
          <span>• HEC (e-Services)</span>
          <span>• ICAO (Doc 9303)</span>
          <span>• SBP (State Bank)</span>
          <span>• PMDC (Medical Council)</span>
          <span>• PEC (Engineering Council)</span>
          <span>• NTS (Testing Agency)</span>
          <span>• Any Embassy / Visa Portal</span>
        </div>
        <p className="text-xs text-amber-800 dark:text-amber-300 m-0 pt-1">
          All portal names, government trademarks, and official specs mentioned on this website are cited strictly for educational, informational, and technical guidance purposes.
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using DigiX (<code className="text-indigo-600 dark:text-indigo-400">DigiX.com.pk</code>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our web utility applications immediately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Scope of Service & Local Execution</h2>
          <p>
            DigiX provides browser-native, client-side image compression, format transcoding, and document scaling utilities. All image quantization computations occur locally within your device&apos;s browser RAM. DigiX does not store, host, or transmit your processed image files across external servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. User Responsibilities & Verification Duty</h2>
          <p>You agree to use DigiX in compliance with applicable local laws. As a user:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Pre-Submission Verification Duty:</strong> You are solely responsible for inspecting and verifying that compressed images, passport photos, CNIC scans, and signature uploads meet your target application portal&apos;s exact official rules (file size, dimensions, background color, legibility) before final form submission.
            </li>
            <li>
              <strong>Acceptable Use:</strong> You agree not to attempt to reverse engineer, disrupt, or overload our client-side software architecture or use DigiX for fraudulent document alteration.
            </li>
          </ul>
        </section>

        {/* AS-IS LIABILITY LIMITATION */}
        <section className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 m-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            4. Limitation of Liability (&quot;AS-IS&quot; Software Warranty Disclaimer)
          </h2>
          <p className="text-slate-700 dark:text-slate-300 m-0">
            DigiX provides its software utilities, target KB presets, and technical guides on an <strong>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind</strong>, either express or implied.
          </p>
          <p className="text-slate-700 dark:text-slate-300 m-0">
            DigiX, its developers, and operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from portal application rejections, submission deadline failures, loss of data, or incorrect file preparation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Governing Law & Contact</h2>
          <p>
            These Terms shall be governed by the laws of Pakistan. For inquiries regarding these terms, contact our support team via our{" "}
            <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">
              Contact Page
            </Link>
            . We respond within 24 to 48 hours.
          </p>
        </section>
      </div>

      <AdSlot slotId="terms-bottom" format="horizontal" />
    </div>
  );
}
