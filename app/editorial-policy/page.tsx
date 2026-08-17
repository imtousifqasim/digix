import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import { FileCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy - DigiX",
  description: "Learn about DigiX editorial guidelines, fact-checking process, and content integrity standards.",
  alternates: {
    canonical: "https://digix.com.pk/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: "Editorial Policy", url: "/editorial-policy" }]} />

      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <FileCheck className="w-7 h-7 text-indigo-600" /> Editorial Integrity Policy
        </h1>
        <p className="text-xs text-slate-500 mt-1">Last Updated: August 17, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Our Commitment to E-E-A-T Quality</h2>
          <p>
            At DigiX (`DigiX.com.pk`), we adhere strictly to Google’s Search Quality Rater Guidelines, specifically Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). We reject thin, programmatic template text and auto-generated content.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Research & Primary Source Citation</h2>
          <p>
            Every dimension rule, file size limit, and portal requirement published on DigiX is sourced directly from verified primary authority documentation (e.g. NADRA e-Services portal docs, FPSC guidelines, HEC degree attestation manuals). All sources are cited transparently by name.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Review Process & Regular Content Audits</h2>
          <p>
            All guides and landing page copy are reviewed by senior web performance engineers prior to publication. Articles display explicit author bylines, reviewer metadata, and last-updated timestamps to reflect changing portal standards.
          </p>
        </section>
      </div>

      <AdSlot slotId="editorial-bottom" format="horizontal" />
    </div>
  );
}
