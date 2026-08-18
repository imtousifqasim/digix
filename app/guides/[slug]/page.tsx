import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { GUIDE_ARTICLES } from "@/lib/guides-data";
import {
  UserCheck,
  Calendar,
  Clock,
  BookOpen,
  List,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Share2,
} from "lucide-react";

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(GUIDE_ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const article = GUIDE_ARTICLES[params.slug];
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: {
      canonical: `https://digix.com.pk/guides/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://digix.com.pk/guides/${article.slug}`,
      type: "article",
      publishedTime: article.lastUpdated,
      authors: [article.author],
    },
  };
}

export default function GuideArticlePage({ params }: GuidePageProps) {
  const article = GUIDE_ARTICLES[params.slug];
  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    reviewer: {
      "@type": "Person",
      name: article.reviewer,
    },
    dateModified: article.lastUpdated,
    publisher: {
      "@type": "Organization",
      name: "DigiX",
      url: "https://digix.com.pk",
    },
    mainEntityOfPage: `https://digix.com.pk/guides/${article.slug}`,
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      <JsonLd data={articleSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Guides", url: "/guides" },
          { name: article.title, url: `/guides/${article.slug}` },
        ]}
      />

      {/* Article Header & E-E-A-T Byline */}
      <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {article.summary}
        </p>

        {/* Author / Reviewer E-E-A-T Card */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shrink-0">
              DX
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>Written by: {article.author}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-[11px] text-slate-500">{article.authorRole}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 pt-2 sm:pt-0 sm:pl-4">
            <div>
              <span className="font-semibold text-slate-500">Peer Reviewed by:</span>
              <p className="font-bold text-slate-800 dark:text-slate-200">{article.reviewer}</p>
            </div>
            <div>
              <span className="font-semibold text-slate-500">Last Updated:</span>
              <p className="font-bold text-slate-800 dark:text-slate-200">{article.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reserved AdSlot Top */}
      <AdSlot slotId={`ad-guide-${article.slug}-top`} format="horizontal" />

      {/* Main Content Layout with Table of Contents */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents Sidebar */}
        <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
          <div className="sticky top-20 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <List className="w-4 h-4 text-indigo-600" /> Table of Contents
            </h3>
            <ul className="space-y-2 text-xs">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1"
                  >
                    {toc.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Article Body Sections */}
        <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
          {article.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/80 pb-2">
                {sec.heading}
              </h2>
              <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {sec.content.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, idx) => {
                  const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                  if (match) {
                    const [, text, url] = match;
                    if (url.startsWith('/')) {
                      return (
                        <Link
                          key={idx}
                          href={url}
                          className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-2 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                        >
                          {text}
                        </Link>
                      );
                    }
                    return (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-2 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      >
                        {text}
                      </a>
                    );
                  }
                  return part;
                })}
              </div>

              {/* Comparison Table rendering */}
              {sec.table && (
                <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-indigo-50 dark:bg-indigo-950/60 border-b border-slate-200 dark:border-slate-800">
                        {sec.table.headers.map((h, idx) => (
                          <th
                            key={idx}
                            className="p-3 font-bold text-slate-900 dark:text-white uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-slate-700 dark:text-slate-300 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Navigation Back & Related */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
            >
              Launch Optimizer Tool &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Reserved AdSlot Bottom */}
      <AdSlot slotId={`ad-guide-${article.slug}-bottom`} format="rectangle" />
    </div>
  );
}
