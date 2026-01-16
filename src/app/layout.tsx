import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pastport.no"),
  title: {
    default: "PastPort – Utforsk Fortiden | Historieapp & Kunnskapsplattform",
    template: "%s | PastPort",
  },
  description:
    "Oppdag historiske steder i nærheten din med PastPort-appen. Løs gåter, samle historiekort, og lær gjennom interaktive opplevelser. PastHive-plattformen gjør fagkunnskap tilgjengelig for alle.",
  keywords: [
    "historieapp",
    "norsk historie",
    "kulturarv",
    "historiske steder Norge",
    "lokal historie",
    "historieoppdagelse",
    "museumsapp",
    "kulturformidling",
    "historisk læring",
    "gamification historie",
    "PastPort",
    "PastHive",
    "historiekort",
    "interaktiv historie",
  ],
  authors: [{ name: "PastPort Team" }],
  creator: "PastPort",
  publisher: "PastPort",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://pastport.no",
    siteName: "PastPort",
    title: "PastPort – Utforsk Fortiden Gjennom Spill og Læring",
    description:
      "Din portal til lokal historie. Oppdag skjulte historiske steder, løs gåter, og bygg din egen samling av fortiden.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PastPort - Historieapp for oppdagelse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PastPort – Utforsk Fortiden",
    description:
      "Oppdag historiske steder i nærheten med interaktive opplevelser.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pastport.no",
    languages: {
      "nb-NO": "https://pastport.no",
    },
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PastPort",
    url: "https://pastport.no",
    logo: "https://pastport.no/images/logo.png",
    description:
      "PastPort gjør lokal historie tilgjengelig gjennom en gamifisert app og en kunnskapsplattform for fagfolk.",
    sameAs: [
      "https://www.facebook.com/pastport",
      "https://www.instagram.com/pastport",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@pasthive.no",
      contactType: "customer service",
      availableLanguage: "Norwegian",
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PastPort",
    operatingSystem: "iOS, Android",
    applicationCategory: "EducationalApplication",
    description:
      "En kartbasert historieapp som lar deg oppdage historiske steder, løse gåter, og samle unike historiekort.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NOK",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "120",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PastPort",
    url: "https://pastport.no",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pastport.no/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="nb" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4c463c" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KDL2BFJS8H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KDL2BFJS8H');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
