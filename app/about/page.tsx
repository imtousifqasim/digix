import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { ShieldCheck, Lock, Zap, Award, Users, CheckCircle2, FileText, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About DigiX - Our Engineering Mission & E-E-A-T Commitment",
  description:
    "Learn about DigiX, our 100% client-side browser compression architecture, privacy commitments, editorial integrity, and engineering team.",
  alternates: {
    canonical: "https://digix.com.pk/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      <Breadcrumbs items={[{ name: "About DigiX", url: "/about" }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" /> E-E-A-T Certified Transparency & Trust
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          About DigiX Media & Utility Lab
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          DigiX (`DigiX.com.pk`) is an independent web utility laboratory engineering privacy-first, client-side browser applications for digital image compression, format transcoding, and Core Web Vitals optimization.
        </p>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-sm">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 w-fit">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">100% Client-Side Privacy</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            We believe sensitive personal identity scans (CNIC, passports, signatures) should never be uploaded to remote cloud servers. DigiX runs entirely inside your browser's local HTML5 Canvas memory.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-sm">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Zero Server Latency</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            By eliminating server upload/download cycles, DigiX processes images instantly at native GPU and RAM speeds directly on your computer or mobile device.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-sm">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Verifiable Standards</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Our target KB parameters are rigorously verified against official government e-services guidelines (NADRA, FPSC, PPSC, e-Visas) and cited transparently.
          </p>
        </div>
      </div>

      {/* Engineering Story & Location */}
      <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" /> Our Origin Story & Lab Office
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          DigiX was founded in 2026 by lead full-stack web architect M. Tousif Qasim and a team of web performance enthusiasts based in Okara, Pakistan. Frustrated by online compression tools littered with intrusive pop-ups, slow server upload delays, and questionable privacy policies for government document scans, we built DigiX to set a new benchmark for browser utility security.
        </p>
        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <MapPin className="w-4 h-4 text-indigo-600" />
          <span>Registered Office: Hujra Shah Muqeem, Okara, Pakistan</span>
        </div>
      </div>

      {/* AdSense Policy & Editorial Standards */}
      <div className="p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/30 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" /> AdSense Quality & Policy Compliance
        </h2>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          DigiX is strictly engineered to pass Google AdSense's Webmaster Quality Guidelines and Program Policies. We reject thin, duplicate, or auto-generated content. All technical guides are written originally by real subject matter experts, backed by empirical benchmarks, and updated regularly.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <Link href="/privacy-policy" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Privacy Disclosure Policy
          </Link>
          <Link href="/editorial-policy" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Editorial Integrity Policy
          </Link>
          <Link href="/contact" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct Technical Support
          </Link>
        </div>
      </div>

      <AdSlot slotId="about-page-bottom" format="horizontal" />
    </div>
  );
}
