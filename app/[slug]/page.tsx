import { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageCompressor from "@/components/ImageCompressor";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { PHASE_1_SEO_PAGES } from "@/lib/seo-data";
import {
  CheckCircle2,
  FileText,
  ShieldCheck,
  Zap,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  BookOpen,
  AlertCircle,
  Calendar,
  UserCheck,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(PHASE_1_SEO_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageData = PHASE_1_SEO_PAGES[params.slug];
  if (!pageData) return {};

  return {
    title: pageData.title,
    description: pageData.metaDescription,
    alternates: {
      canonical: `https://digix.com.pk/${pageData.slug}`,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.metaDescription,
      url: `https://digix.com.pk/${pageData.slug}`,
      siteName: "DigiX",
      type: "website",
    },
  };
}

export default function SeoToolPage({ params }: PageProps) {
  const pageData = PHASE_1_SEO_PAGES[params.slug];
  if (!pageData) {
    notFound();
  }

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: pageData.heading,
    url: `https://digix.com.pk/${pageData.slug}`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All (Browser-based)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: pageData.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: pageData.heading, url: `/${pageData.slug}` }]} />

      {/* Hero Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" /> Target Preset: {pageData.targetKb} KB Max Ceiling
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {pageData.heading}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {pageData.subheading}
        </p>

        {/* E-E-A-T Signal Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
            Last Updated: {pageData.lastUpdated}
          </span>
          <span className="flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
            Author: {pageData.author}
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            Peer Reviewer: {pageData.reviewer}
          </span>
        </div>
      </div>

      {/* Tool Component Pre-Configured */}
      <ImageCompressor
        initialTargetKb={pageData.targetKb}
        initialFormat={pageData.defaultFormat}
        headline={`Pre-Set Engine: ${pageData.targetKb} KB Target Limit`}
      />

      {/* Reserved AdSlot Top */}
      <AdSlot slotId={`ad-${pageData.slug}-top`} format="horizontal" />

      {/* Authority Specs Sidebar & Requirements Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main 800+ Words Structured Content */}
          <div className="space-y-6">
            {pageData.contentSections.map((section, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-sm"
              >
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  {section.heading}
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-2">
                  {section.body}
                </div>
              </div>
            ))}
          </div>

          {/* Unique FAQ Accordion */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              Frequently Asked Questions for {pageData.targetKb}KB Optimization
            </h2>
            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-1.5"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Specifications & Related Tools */}
        <div className="space-y-6">
          {/* Authority Citation Card */}
          <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/80 to-purple-50/50 dark:from-indigo-950/40 dark:to-slate-900 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Official Submission Standards
              </h3>
            </div>
            <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-slate-500">Cited Authority:</span>
                <span className="font-bold text-right text-indigo-700 dark:text-indigo-300">
                  {pageData.authoritySource}
                </span>
              </div>
              {pageData.authorityUrl && (
                <a
                  href={pageData.authorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:underline pt-1"
                >
                  <span>Verify Portal Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/60 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Key Portal Criteria:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {pageData.officialRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Tools Internal Linking Matrix */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Related Size Optimizers
            </h3>
            <div className="space-y-2">
              {pageData.relatedSlugs.map((relSlug) => {
                const relData = PHASE_1_SEO_PAGES[relSlug];
                if (!relData) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/${relSlug}`}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-400 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all text-xs font-medium group"
                  >
                    <span className="text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {relData.heading}
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {relData.targetKb}KB
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Privacy Box */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
              <AlertCircle className="w-4 h-4 text-indigo-500" />
              <span>Data Protection Notice</span>
            </div>
            <p>
              Your images are processed directly in your browser using local Canvas buffers. No data is stored or transmitted over any network.
            </p>
          </div>
        </div>
      </div>

      {/* Reserved AdSlot Bottom */}
      <AdSlot slotId={`ad-${pageData.slug}-bottom`} format="rectangle" />
    </div>
  );
}
