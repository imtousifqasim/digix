import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Disclaimer - DigiX",
  description: "Official legal disclaimer regarding utility usage and authority guidelines on DigiX.",
  alternates: {
    canonical: "https://digix.com.pk/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: "Disclaimer", url: "/disclaimer" }]} />

      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">General Disclaimer</h1>
        <p className="text-xs text-slate-500 mt-1">Last Updated: August 17, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Independence & Affiliation Notice</h2>
          <p>
            DigiX (`DigiX.com.pk`) is an independent private web utility provider. DigiX is NOT affiliated with, endorsed by, or an official portal of NADRA, FPSC, PPSC, HEC, or any government body.
          </p>
          <p>
            All trademarks, brand names, portal names, and official guidelines cited on DigiX belong to their respective government authorities and institution owners and are referenced strictly for educational and instructional purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. File Compression Accuracy</h2>
          <p>
            While our binary search compression algorithm aims for exact KB targets (e.g., under 20KB or 50KB), output file size can vary slightly depending on image content complexity. Users must inspect final file properties prior to submitting applications.
          </p>
        </section>
      </div>

      <AdSlot slotId="disclaimer-bottom" format="horizontal" />
    </div>
  );
}
