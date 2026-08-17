import Link from "next/link";
import { Zap, Home, Search, Layers, ArrowLeft } from "lucide-react";
import { PHASE_1_SEO_PAGES } from "@/lib/seo-data";

export default function NotFound() {
  const toolsList = Object.values(PHASE_1_SEO_PAGES);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-6 w-full">
        <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center text-2xl font-black shadow-inner">
          404
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Page or Utility Route Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The image optimizer slug or guide article you are looking for may have been moved or updated. Use our direct links below to return to available tools.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to DigiX Homepage</span>
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-50 transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Browse Knowledge Hub</span>
          </Link>
        </div>

        {/* Quick Tools Grid on 404 */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 justify-center">
            <Layers className="w-4 h-4 text-indigo-500" /> Active Size Optimizers
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {toolsList.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between group transition-all"
              >
                <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{tool.heading}</span>
                <span className="text-[10px] font-bold text-indigo-500">{tool.targetKb}KB</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
