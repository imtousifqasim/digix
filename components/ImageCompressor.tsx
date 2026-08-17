"use client";

import React, { useRef, useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  FileArchive,
  Download,
  Trash2,
  Lock,
  Eye,
  Sliders,
  CheckCircle2,
  Sparkles,
  Zap,
  X,
  FileImage,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useImageCompressor, ProcessedImage } from "@/hooks/useImageCompressor";
import { formatBytes } from "@/lib/utils";

interface ImageCompressorProps {
  initialTargetKb?: number;
  initialFormat?: "keep" | "webp" | "jpg" | "png";
  headline?: string;
}

export default function ImageCompressor({
  initialTargetKb = 50,
  initialFormat = "keep",
  headline,
}: ImageCompressorProps) {
  const {
    files,
    processedImages,
    targetKb,
    setTargetKb,
    quality,
    setQuality,
    mode,
    setMode,
    outputFormat,
    setOutputFormat,
    isProcessing,
    progress,
    selectedPreviewIndex,
    setSelectedPreviewIndex,
    handleAddFiles,
    handleRemoveFile,
    handleClearAll,
    processImages,
    downloadSingle,
    downloadAllZip,
  } = useImageCompressor(initialTargetKb, initialFormat);

  const [isDragOver, setIsDragOver] = useState(false);
  const [customKb, setCustomKb] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      handleAddFiles(droppedFiles);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      handleAddFiles(selectedFiles);
    }
  };

  const handleCustomKbApply = () => {
    const parsed = parseInt(customKb, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setTargetKb(parsed);
      setMode("targetSize");
    }
  };

  const selectedPreviewImage =
    selectedPreviewIndex !== null ? processedImages[selectedPreviewIndex] : null;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Privacy Guarantee Pill */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
              100% Client-Side In-Browser Security
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                Zero Cloud Uploads
              </span>
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Files are compressed inside your computer's local memory. Photos never touch remote servers.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800/60">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Verified Local RAM Engine</span>
        </div>
      </div>

      {/* Main Tool Container */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
        {/* Glow Top Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

        {/* Header Control Panel */}
        <div className="p-6 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/60 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                {headline || "Compression Control Engine"}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Set target KB limits or fine-tune quality sliders before executing compression.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-950 border border-slate-300/60 dark:border-slate-800 shrink-0">
              <button
                onClick={() => setMode("targetSize")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === "targetSize"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Target KB Mode
              </button>
              <button
                onClick={() => setMode("quality")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === "quality"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Quality Slider Mode
              </button>
            </div>
          </div>

          {/* Controls Parameters Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            {/* Target Size Controls */}
            {mode === "targetSize" ? (
              <div className="lg:col-span-2 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-display flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-indigo-600" /> Target File Size Limit
                  </label>
                  <span className="text-indigo-700 dark:text-indigo-400 font-extrabold text-sm font-display bg-indigo-50 dark:bg-indigo-950 px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    Limit: {targetKb} KB
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[20, 50, 100, 200, 500, 1000].map((kb) => (
                    <button
                      key={kb}
                      onClick={() => setTargetKb(kb)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                        targetKb === kb
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20"
                          : "bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400"
                      }`}
                    >
                      {kb >= 1000 ? `${kb / 1000}MB` : `${kb}KB`}
                    </button>
                  ))}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <input
                      type="number"
                      placeholder="Custom KB"
                      value={customKb}
                      onChange={(e) => setCustomKb(e.target.value)}
                      className="w-24 px-3 py-1.5 rounded-xl text-xs border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:border-indigo-500 font-medium"
                    />
                    <button
                      onClick={handleCustomKbApply}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-indigo-600 transition-colors"
                    >
                      Set
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Quality Slider Controls */
              <div className="lg:col-span-2 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-display">
                    Compression Quality Level
                  </label>
                  <span className="text-indigo-700 dark:text-indigo-400 font-extrabold text-sm font-display bg-indigo-50 dark:bg-indigo-950 px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    {quality}% Quality
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                  <span>Max Compression (Low KB)</span>
                  <span>Balanced (80%)</span>
                  <span>High Fidelity</span>
                </div>
              </div>
            )}

            {/* Output Format Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-display">
                Output Format
              </label>
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-950 border border-slate-300/60 dark:border-slate-800">
                {(["keep", "jpg", "png", "webp"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setOutputFormat(fmt)}
                    className={`py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                      outputFormat === fmt
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-700 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {fmt === "keep" ? "Original" : fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Drag and Drop Zone */}
        <div className="p-6">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col items-center justify-center p-10 sm:p-14 rounded-2xl border-2 border-dashed transition-all cursor-pointer group ${
              isDragOver
                ? "border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 scale-[0.99]"
                : "border-slate-300 dark:border-slate-800 hover:border-indigo-500 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-indigo-50/30"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 mb-4 shadow-md shadow-indigo-500/10 group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 animate-bounce text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white text-center">
              Drag & Drop Images Here, or <span className="text-indigo-600 dark:text-indigo-400 hover:underline">Browse Files</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 text-center max-w-sm">
              Supports JPG, PNG, and WebP images. Multi-file batch optimization supported.
            </p>
          </div>

          {/* Selected Files & Processing Bar */}
          {files.length > 0 && (
            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-display">
                  Loaded Images ({files.length})
                </span>
                <button
                  onClick={handleClearAll}
                  className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear All
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={processImages}
                  disabled={isProcessing}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Compressing Images ({progress}%)...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-white" />
                      <span>Process & Compress {files.length} Image{files.length > 1 ? "s" : ""} Now</span>
                    </>
                  )}
                </button>

                {processedImages.length > 1 && (
                  <button
                    onClick={downloadAllZip}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all border border-slate-800"
                  >
                    <FileArchive className="w-4 h-4 text-indigo-400" />
                    <span>Download All (ZIP)</span>
                  </button>
                )}
              </div>

              {/* Processed Results List */}
              {processedImages.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                    Optimization Results
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {processedImages.map((img, idx) => (
                      <div
                        key={img.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 gap-4 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center gap-3.5 w-full sm:w-auto">
                          <div className="w-14 h-14 rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={img.compressedUrl}
                              alt="Thumbnail"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="truncate">
                            <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[220px]">
                              {img.originalFile.name}
                            </h5>
                            <div className="flex items-center gap-2 text-xs mt-1">
                              <span className="text-slate-400 line-through text-[11px]">{formatBytes(img.originalSize)}</span>
                              <ArrowRight className="w-3 h-3 text-indigo-600" />
                              <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                                {formatBytes(img.compressedSize)}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                -{img.percentSaved}% Saved
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                          <button
                            onClick={() => setSelectedPreviewIndex(idx)}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-800 dark:text-slate-200 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Compare</span>
                          </button>
                          <button
                            onClick={() => downloadSingle(img)}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download</span>
                          </button>
                          <button
                            onClick={() => handleRemoveFile(idx)}
                            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Side-by-Side Comparison Preview Modal */}
      {selectedPreviewImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
                  <Eye className="w-5 h-5 text-indigo-600" />
                  Side-by-Side Visual Inspection
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedPreviewImage.originalFile.name}
                </p>
              </div>
              <button
                onClick={() => setSelectedPreviewIndex(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-200 dark:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Side-by-Side Canvas */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-100 dark:bg-slate-950">
              {/* Original Card */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Original Image</span>
                  <span className="text-slate-500">{formatBytes(selectedPreviewImage.originalSize)}</span>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 h-64 sm:h-80 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedPreviewImage.originalUrl}
                    alt="Original"
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Compressed Card */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-2">
                    Optimized Image
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      -{selectedPreviewImage.percentSaved}% Saved
                    </span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                    {formatBytes(selectedPreviewImage.compressedSize)}
                  </span>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-white dark:bg-slate-900 p-2 h-64 sm:h-80 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedPreviewImage.compressedUrl}
                    alt="Compressed result"
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
              <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Resolution: {selectedPreviewImage.width} x {selectedPreviewImage.height} px
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedPreviewIndex(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => downloadSingle(selectedPreviewImage)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Optimized File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
