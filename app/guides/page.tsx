import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import { GUIDE_ARTICLES } from "@/lib/guides-data";
import { BookOpen, Calendar, Clock, UserCheck, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "DigiX Technical Guides & Web Performance Lab",
  description:
    "Explore in-depth technical guides on lossy vs lossless compression algorithms, WebP vs PNG vs JPG benchmarks, and fixing Core Web Vitals image issues.",
  alternates: {
    canonical: "https://digix.com.pk/guides",
  },
};

export default function GuidesIndexPage() {
  const articlesList = Object.values(GUIDE_ARTICLES);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <Breadcrumbs items={[{ name: "Knowledge Hub", url: "/guides" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" /> Technical Knowledge Hub & E-E-A-T Insights
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Image Processing & Web Performance Guides
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Comprehensive, peer-reviewed engineering articles detailing discrete cosine transforms, perceptual quantization, WebP next-gen image standards, and Google PageSpeed Core Web Vitals optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articlesList.map((article) => (
          <Link
            key={article.slug}
            href={`/guides/${article.slug}`}
            className="group flex flex-col justify-between p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.lastUpdated}
                </span>
              </div>

              <div className="flex items-center justify-end text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>Read Full Guide &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdSlot slotId="guides-hub-bottom" format="horizontal" />
    </div>
  );
}
