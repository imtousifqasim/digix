"use client";

import { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { formatBytes } from "@/lib/utils";

export interface ProcessedImage {
  id: string;
  originalFile: File;
  compressedBlob: Blob;
  compressedUrl: string;
  originalUrl: string;
  originalSize: number;
  compressedSize: number;
  percentSaved: number;
  width: number;
  height: number;
  outputFormat: string;
}

export function useImageCompressor(initialTargetKb: number = 50, initialFormat: "keep" | "webp" | "jpg" | "png" = "keep") {
  const [files, setFiles] = useState<File[]>([]);
  const [processedImages, setProcessedImages] = useState<ProcessedImage[]>([]);
  const [targetKb, setTargetKb] = useState<number>(initialTargetKb);
  const [quality, setQuality] = useState<number>(80);
  const [mode, setMode] = useState<"targetSize" | "quality">("targetSize");
  const [outputFormat, setOutputFormat] = useState<"keep" | "webp" | "jpg" | "png">(initialFormat);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState<number | null>(null);

  const getMimeType = (format: string, originalType: string): string => {
    if (format === "webp") return "image/webp";
    if (format === "jpg") return "image/jpeg";
    if (format === "png") return "image/png";
    return originalType;
  };

  const getFileExtension = (mimeType: string): string => {
    if (mimeType === "image/webp") return ".webp";
    if (mimeType === "image/jpeg") return ".jpg";
    if (mimeType === "image/png") return ".png";
    return ".jpg";
  };

  const compressSingleFile = async (file: File): Promise<ProcessedImage> => {
    const originalUrl = URL.createObjectURL(file);
    const targetMime = getMimeType(outputFormat, file.type);
    
    let compressedBlob: Blob;
    let finalSize = 0;

    if (mode === "targetSize") {
      const maxMb = targetKb / 1024;
      const options = {
        maxSizeMB: maxMb,
        maxWidthOrHeight: 2560,
        useWebWorker: true,
        fileType: targetMime,
        initialQuality: 0.85,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        compressedBlob = compressedFile;
      } catch (e) {
        // Fallback to Canvas API if browser-image-compression fails
        compressedBlob = await fallbackCanvasCompression(file, targetKb, targetMime);
      }
    } else {
      // Quality slider mode
      const options = {
        maxSizeMB: 50,
        initialQuality: quality / 100,
        useWebWorker: true,
        fileType: targetMime,
      };
      try {
        const compressedFile = await imageCompression(file, options);
        compressedBlob = compressedFile;
      } catch (e) {
        compressedBlob = file;
      }
    }

    finalSize = compressedBlob.size;
    const percentSaved = Math.max(0, Math.round(((file.size - finalSize) / file.size) * 100));
    const compressedUrl = URL.createObjectURL(compressedBlob);

    // Get dimensions
    const dims = await getImageDimensions(compressedUrl);

    return {
      id: Math.random().toString(36).substring(2, 9),
      originalFile: file,
      compressedBlob,
      compressedUrl,
      originalUrl,
      originalSize: file.size,
      compressedSize: finalSize,
      percentSaved,
      width: dims.width,
      height: dims.height,
      outputFormat: targetMime,
    };
  };

  const fallbackCanvasCompression = (file: File, targetKb: number, mimeType: string): Promise<Blob> => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
        }
        
        let minQ = 0.05;
        let maxQ = 0.95;
        let bestBlob: Blob | null = null;
        const targetBytes = targetKb * 1024;

        for (let i = 0; i < 6; i++) {
          const midQ = (minQ + maxQ) / 2;
          canvas.toBlob(
            (b) => {
              if (b) {
                bestBlob = b;
                if (b.size > targetBytes) {
                  maxQ = midQ;
                } else {
                  minQ = midQ;
                }
              }
            },
            mimeType,
            midQ
          );
        }
        setTimeout(() => {
          URL.revokeObjectURL(url);
          resolve(bestBlob || file);
        }, 100);
      };
      img.src = url;
    });
  };

  const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = () => resolve({ width: 0, height: 0 });
      img.src = url;
    });
  };

  const handleAddFiles = useCallback((newFiles: File[]) => {
    const validFiles = newFiles.filter((f) => f.type.startsWith("image/"));
    setFiles((prev) => [...prev, ...validFiles]);
  }, []);

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setProcessedImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleClearAll = useCallback(() => {
    files.forEach((f) => URL.revokeObjectURL(URL.createObjectURL(f)));
    processedImages.forEach((img) => {
      URL.revokeObjectURL(img.compressedUrl);
      URL.revokeObjectURL(img.originalUrl);
    });
    setFiles([]);
    setProcessedImages([]);
    setSelectedPreviewIndex(null);
  }, [files, processedImages]);

  const processImages = useCallback(async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProgress(0);
    const results: ProcessedImage[] = [];

    for (let i = 0; i < files.length; i++) {
      const processed = await compressSingleFile(files[i]);
      results.push(processed);
      setProgress(Math.round(((i + 1) / files.length) * 100));
    }

    setProcessedImages(results);
    setIsProcessing(false);
  }, [files, targetKb, quality, mode, outputFormat]);

  const downloadSingle = (image: ProcessedImage) => {
    const nameWithoutExt = image.originalFile.name.substring(0, image.originalFile.name.lastIndexOf(".")) || image.originalFile.name;
    const ext = getFileExtension(image.outputFormat);
    const fileName = `${nameWithoutExt}-digix-compressed${ext}`;
    saveAs(image.compressedBlob, fileName);
  };

  const downloadAllZip = async () => {
    if (processedImages.length === 0) return;
    const zip = new JSZip();
    const folder = zip.folder("digix-compressed-images");

    processedImages.forEach((img, idx) => {
      const nameWithoutExt = img.originalFile.name.substring(0, img.originalFile.name.lastIndexOf(".")) || img.originalFile.name;
      const ext = getFileExtension(img.outputFormat);
      folder?.file(`${nameWithoutExt}-optimized-${idx + 1}${ext}`, img.compressedBlob);
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "digix-compressed-images.zip");
  };

  return {
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
  };
}
