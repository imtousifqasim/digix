"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Moon, Sun, ChevronDown, BookOpen, ShieldCheck, Search, Menu, X, Layers, Sparkles } from "lucide-react";
import { PHASE_1_SEO_PAGES } from "@/lib/seo-data";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isToolsOpen, setIsToolsOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  const toolsList = Object.values(PHASE_1_SEO_PAGES);

  const filteredTools = toolsList.filter((tool) =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-all">
            <div className="w-full h-full bg-indigo-600 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white dark:text-indigo-400 fill-white dark:fill-indigo-400/20 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
              DigiX<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 -mt-1 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Utility Lab
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
          <Link
            href="/"
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-none hover:shadow-sm"
          >
            Compressor
          </Link>

          {/* Quick Tools Dropdown */}
          <div className="relative" onMouseLeave={() => setIsToolsOpen(false)}>
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              onMouseEnter={() => setIsToolsOpen(true)}
              className="flex items-center gap-1 px-4 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
            >
              <span>Target Optimizers</span>
              <ChevronDown className="w-3.5 h-3.5 text-indigo-500" />
            </button>

            {isToolsOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1 flex items-center justify-between">
                  <span>Preset Target KB Tools</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono">100% Local</span>
                </div>
                {toolsList.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    onClick={() => setIsToolsOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{tool.heading}</span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
                      {tool.targetKb}KB
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/guides"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
            <span>Guides</span>
          </Link>

          <Link
            href="/about"
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 border border-transparent transition-all"
            title="Search Tools"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-500 border border-transparent transition-all"
            title="Toggle Dark/Light Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Quick Search Drawer Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 text-slate-400 w-full">
                <Search className="w-5 h-5 text-indigo-600" />
                <input
                  type="text"
                  placeholder="Search tool by size (e.g. 20kb, 50kb)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-slate-900 dark:text-white outline-none placeholder:text-slate-400 text-sm font-medium"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto space-y-1.5">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/60 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600">
                      {tool.heading}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {tool.targetKb} KB
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200"
          >
            Compressor Engine
          </Link>

          <div className="py-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Preset Target Optimizers
            </span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {toolsList.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>{tool.targetKb}KB Target</span>
                  <span className="text-indigo-600 dark:text-indigo-400">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/guides"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200"
          >
            Guides Hub
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200"
          >
            Support Contact
          </Link>
        </div>
      )}
    </header>
  );
}
