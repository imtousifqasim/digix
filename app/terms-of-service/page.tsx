import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Terms of Service - DigiX",
  description: "Terms of Service and client-side usage conditions for DigiX image optimization utilities.",
  alternates: {
    canonical: "https://digix.com.pk/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />

      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Terms of Service</h1>
        <p className="text-xs text-slate-500 mt-1">Last Updated: August 17, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using DigiX (`DigiX.com.pk`), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our web utility services immediately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Scope of Service & Local Execution</h2>
          <p>
            DigiX provides browser-native, client-side image compression and document scaling utilities. All computations occur within your device's browser local RAM. DigiX does not store, host, or transmit your processed image files.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. User Responsibilities & Acceptable Use</h2>
          <p>You agree not to use DigiX for any unlawful purpose or to attempt to reverse engineer, disrupt, or overload our client-side software architecture.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Limitation of Liability</h2>
          <p>
            DigiX provides its utilities on an "AS IS" and "AS AVAILABLE" basis. While we strive for extreme precision, users are responsible for verifying compressed image compliance before submitting files to official government or academic portals.
          </p>
        </section>
      </div>

      <AdSlot slotId="terms-bottom" format="horizontal" />
    </div>
  );
}
