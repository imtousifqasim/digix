"use client";

import Link from "next/link";
import { Zap, ShieldCheck, Lock, FileCheck, CheckCircle2, Globe, Heart } from "lucide-react";
import { PHASE_1_SEO_PAGES } from "@/lib/seo-data";

export default function Footer() {
  const toolsList = Object.values(PHASE_1_SEO_PAGES);

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors relative z-10">
      {/* Privacy Guarantee Bar */}
      <div className="border-b border-indigo-100 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-800/80 border border-indigo-600/60 shrink-0">
              <Lock className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-display">100% Client-Side Privacy Guarantee</h4>
              <p className="text-xs text-indigo-100">
                Your photos never leave your device. All compression happens locally inside your web browser.
              </p>
            </div>
          </div>
          <Link
            href="/privacy-policy"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold bg-white text-indigo-900 hover:bg-indigo-50 transition-colors shadow-md"
          >
            Read Privacy Architecture &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
                DigiX<span className="text-indigo-600 dark:text-indigo-400">.com.pk</span>
              </span>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              DigiX is a high-performance, client-side digital utility laboratory dedicated to browser-native image compression, format transcoding, and Core Web Vitals optimization.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> AdSense Compliant
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                <Globe className="w-3.5 h-3.5 text-indigo-600" /> Domain: DigiX.com.pk
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" /> ads.txt Active
              </span>
            </div>
          </div>

          {/* Preset Tools Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-display text-slate-900 dark:text-white">
              Target KB Optimizers
            </h4>
            <ul className="space-y-2 text-xs">
              {toolsList.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                  >
                    {tool.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-display text-slate-900 dark:text-white">
              Knowledge Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/guides/understanding-lossy-vs-lossless-compression"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Lossy vs Lossless Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/webp-vs-png-vs-jpg-complete-comparison"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  WebP vs PNG vs JPG
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/how-to-fix-core-web-vitals-image-issues"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Fix Core Web Vitals
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                >
                  Browse All Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-display text-slate-900 dark:text-white">
              Trust & Transparency
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  About DigiX
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial-policy"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                >
                  Support & Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} DigiX.com.pk. All rights reserved. Built for Google AdSense Quality Compliance.</p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:underline">
              Sitemap
            </Link>
            <Link href="/ads.txt" className="hover:underline">
              ads.txt
            </Link>
            <span className="flex items-center gap-1 text-slate-400">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for privacy & speed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
