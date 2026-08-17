import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4f46e5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://digix.com.pk"),
  title: {
    default: "DigiX - High-Performance Client-Side Image Optimizer & Utility Lab",
    template: "%s | DigiX",
  },
  description:
    "Compress JPG, PNG, and WebP images online to exact KB sizes (20KB, 50KB, 100KB, 200KB) with 100% client-side browser privacy. Fast, free, zero server uploads.",
  keywords: [
    "compress image to 20kb",
    "compress image to 50kb",
    "compress image to 100kb",
    "image compressor online",
    "client side image optimizer",
    "convert png to webp",
    "nadra photo compressor",
    "fpsc image compressor",
    "digix image utility"
  ],
  authors: [{ name: "DigiX Engineering Team", url: "https://digix.com.pk/about" }],
  publisher: "DigiX Utility Media",
  verification: {
    google: "rD23ZZgnUZLQTn1gSsigD-kysGY7sPtYXLp8foYVkjY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digix.com.pk",
    siteName: "DigiX",
    title: "DigiX - 100% Client-Side Image Optimizer & Compression Utility",
    description:
      "Compress JPG, PNG, and WebP images to exact target file sizes in your browser memory with zero server uploads.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiX - Ultra-Fast Image Optimizer",
    description: "Compress images online with 100% client-side privacy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DigiX",
    url: "https://digix.com.pk",
    logo: "https://digix.com.pk/logo.png",
    description: "DigiX is a client-side web utility laboratory specializing in browser-native image compression and web performance optimization.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hujra Shah Muqeem, Okara",
      addressCountry: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@digix.com.pk",
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://digix.com.pk" />
        <meta name="google-site-verification" content="rD23ZZgnUZLQTn1gSsigD-kysGY7sPtYXLp8foYVkjY" />
        
        {/* Google AdSense Script Tag */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1334689534917556"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-mesh-light">
        <JsonLd data={organizationSchema} />
        
        {/* Soft Ambient Light Glows */}
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
