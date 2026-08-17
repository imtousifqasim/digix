"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Cookie, X, Settings2 } from "lucide-react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("digix_cookie_consent");
    if (!savedConsent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("digix_cookie_consent", JSON.stringify(consent));
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("digix_cookie_consent", JSON.stringify(preferences));
    setIsOpen(false);
  };

  const handleRejectNonEssential = () => {
    const consent = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("digix_cookie_consent", JSON.stringify(consent));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-all animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-start gap-3 max-w-3xl">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
            <Cookie className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              Privacy & Cookie Preferences
              <span className="inline-flex items-center gap-1 text-xs font-normal text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3 h-3" /> GDPR & CCPA Compliant
              </span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              DigiX operates 100% in your browser without storing your uploaded images. We use minimal cookies to analyze website performance and display relevant non-intrusive advertisements. You can customize your preferences anytime.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0 w-full lg:w-auto justify-end">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
            {showDetails ? "Hide Options" : "Customize"}
          </button>
          <button
            onClick={handleRejectNonEssential}
            className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
          >
            Accept All
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Necessary</span>
              <span className="text-xs font-medium text-slate-400">Always Active</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Essential for basic site security, theme preferences, and functional performance.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Analytics</span>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences((p) => ({ ...p, analytics: e.target.checked }))}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Helps us measure traffic metrics and optimize client-side compression speeds.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Marketing & Ads</span>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences((p) => ({ ...p, marketing: e.target.checked }))}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Allows Google AdSense to show customized ads relevant to your preferences.
            </p>
          </div>

          <div className="md:col-span-3 flex justify-end mt-2">
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white transition-colors"
            >
              Save Selected Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
