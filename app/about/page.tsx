import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { ShieldCheck, Lock, Zap, Award, Users, CheckCircle2, FileText, MapPin, Smartphone, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "About DigiX - Engineering Architecture & Testing Methodology",
  description:
    "Learn about DigiX, our 100% client-side browser compression architecture, browser testing methodology, editorial integrity, and engineering commitments.",
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
          DigiX (<code className="text-indigo-600 dark:text-indigo-400">DigiX.com.pk</code>) is an independent web utility laboratory engineering privacy-first, client-side browser applications for digital image compression, format transcoding, and document optimization.
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
            We believe sensitive identity documents (CNIC, passport photos, digital signatures) should never be uploaded to remote cloud servers. DigiX runs entirely inside your browser&apos;s local HTML5 Canvas memory.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-sm">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Zero Server Latency</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            By eliminating server upload and download cycles, DigiX processes images instantly at native device GPU and RAM speeds directly on your computer or mobile phone.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-sm">
          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Verified Specifications</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Our preset KB targets are rigorously verified against official government e-services guidelines (NADRA, FPSC, PPSC, e-Visas) and cited transparently.
          </p>
        </div>
      </div>

      {/* Engineering Story & Team Credentials */}
      <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" /> Engineering Background & Lab Team
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          DigiX was established to solve a common problem faced by job seekers, students, and citizens: online image converters littered with intrusive pop-up ads, slow server upload delays, and questionable cloud data storage practices for sensitive identity documents.
        </p>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-2">
          <p className="font-semibold text-slate-900 dark:text-white">Engineering Lead & Team Background:</p>
          <p>
            • <strong>Lead Full-Stack Web Architect:</strong> M. Tousif Qasim (Senior Full-Stack Engineer & Specialist in Client-Side Web Application Architecture).
          </p>
          <p>
            • <strong>Engineering Team:</strong> Specializing in HTML5 Canvas 2D Context APIs, WebAssembly binary quantization, and web performance optimization.
          </p>
        </div>
        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <MapPin className="w-4 h-4 text-indigo-600" />
          <span>Registered Office: Hujra Shah Muqeem, Okara, Pakistan</span>
        </div>
      </div>

      {/* Testing Methodology Section */}
      <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Monitor className="w-5 h-5 text-indigo-600" /> Testing Methodology & Cross-Browser Validation
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          To ensure that every compressed image, CNIC scan, and signature upload successfully passes automated validators across official portals (such as PPSC, FPSC, NADRA, and HEC), DigiX rigorously tests its binary quantization engine across hardware and software platforms:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-1">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-indigo-600" /> Desktop Browsers
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Validated on Google Chrome 120+, Apple Safari (macOS Sonoma), Mozilla Firefox 121+, and Microsoft Edge across Windows 10/11 and macOS.
            </p>
          </div>
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-1">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-indigo-600" /> Mobile & Tablet Browsers
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Tested on Mobile Chrome (Android 12/13/14), Mobile Safari (iOS 16/17), and Samsung Internet on 3G, 4G LTE, and Wi-Fi connections.
            </p>
          </div>
        </div>
      </div>

      {/* Support Commitment & Editorial Links */}
      <div className="p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/30 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" /> Direct Support Commitment & Policies
        </h2>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          We are committed to total user support transparency. Our technical support team reviews user inquiries, portal spec update notices, and bug reports daily. <strong>We guarantee a response to all technical and editorial inquiries within 24 to 48 hours.</strong>
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <Link href="/privacy-policy" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Privacy Policy
          </Link>
          <Link href="/editorial-policy" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Editorial Integrity Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Contact Support (24-48h Response)
          </Link>
        </div>
      </div>

      <AdSlot slotId="about-bottom" format="horizontal" />
    </div>
  );
}
