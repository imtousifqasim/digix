import React from "react";
import ImageCompressor from "@/components/ImageCompressor";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Lock,
  Layers,
  Sparkles,
  CheckCircle2,
  FileText,
  BookOpen,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { PHASE_1_SEO_PAGES } from "@/lib/seo-data";

export default function HomePage() {
  const toolsList = Object.values(PHASE_1_SEO_PAGES);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "DigiX Image Optimizer",
    url: "https://digix.com.pk",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All (Browser-based)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Compress JPG, PNG, and WebP images online to exact KB target file sizes directly inside browser local memory.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does 100% client-side image compression work on DigiX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DigiX uses HTML5 Canvas APIs and Web Workers inside your browser. Your images are processed in your local computer RAM and are never uploaded to remote servers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compress images to exact KB limits for government portals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! DigiX includes preset target buttons for 20KB, 50KB, 100KB, and 200KB, as well as a custom KB input field designed for portals like NADRA, FPSC, PPSC, and e-Visas.",
        },
      },
      {
        "@type": "Question",
        name: "Does DigiX charge any fee or limit daily uploads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DigiX is completely free to use with unlimited file uploads, zero watermarks, and no mandatory registration.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <div className="text-center space-y-5 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> Next-Gen In-Browser Compression Engine
        </div>

        <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-slate-900 dark:text-white">
          Ultra-Fast Client-Side <br className="hidden sm:inline" />
          <span className="text-gradient-purple">
            Image Optimizer & Utility Lab
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
          Compress JPG, PNG, and WebP images to exact KB limits (20KB, 50KB, 100KB, 200KB) in milliseconds. <span className="text-indigo-600 dark:text-indigo-400 font-bold">100% private:</span> your files never leave your device.
        </p>
      </div>

      {/* Core Tool Engine */}
      <ImageCompressor initialTargetKb={50} initialFormat="keep" />

      {/* Reserved AdSlot Container 1 */}
      <AdSlot slotId="homepage-top-slot" format="horizontal" />

      {/* Quick Target Tools Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2.5">
            <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Specialized Target KB Optimizers
          </h2>
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            Phase 1 Active Tools
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolsList.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="glass-card-light glass-card-hover p-6 rounded-3xl flex flex-col justify-between space-y-4 group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-xl text-xs font-extrabold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80">
                  Target: {tool.targetKb} KB
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors flex items-center gap-1 font-bold">
                  Launch Tool <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {tool.heading}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {tool.metaDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Authority Standard:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{tool.authoritySource.split('&')[0]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Value Proposition & Architecture */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 dark:from-slate-900 dark:to-slate-950 border border-indigo-100 dark:border-slate-800 shadow-sm space-y-8 relative overflow-hidden">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2.5">
            <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            Why DigiX is Built for Privacy & Speed
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Traditional online image converters upload your personal identity documents to cloud servers, introducing network latency and security risks. DigiX shifts 100% of processing into your browser RAM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 w-fit">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">Zero Server Uploads</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Your identity scans, passport photos, and signatures remain in your local browser memory. No binary data ever leaves your computer.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">Binary Search Precision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our iterative Canvas quantization engine calculates the maximum allowable visual quality that fits strictly under your target KB size limit.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-sm">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">Official Portal Compliance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pre-configured with specific size parameters matching NADRA, FPSC, PPSC, HEC, and global e-Visa portal criteria.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Everything you need to know about DigiX image compression architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Is my image data stored anywhere?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              No. All operations run locally inside HTML5 Canvas memory. Once you refresh or close the tab, all image buffers are completely wiped from your browser memory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Why do government portals reject photos over 20KB or 50KB?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Administrative portals handle millions of submissions. Strict KB ceilings keep database sizes manageable and maintain fast server response times for candidates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Which image format gives the best quality at 50KB?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              WebP offers 25-35% superior quality compared to JPEG at identical file sizes. However, standard JPG is most universally accepted across legacy administrative portals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Can I compress multiple files and download them as a ZIP?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes! You can drag and drop multiple files simultaneously. Once processed, click the 'Download All (ZIP)' button to get a consolidated archive.
            </p>
          </div>
        </div>
      </div>

      {/* Reserved AdSlot Container 2 */}
      <AdSlot slotId="homepage-bottom-slot" format="rectangle" />
    </div>
  );
}
