import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "Web Perdana - Jasa Pembuatan Website, Web App & Mobile App Terpercaya",
  description:
    "Web Perdana menyediakan jasa pembuatan website, web app, dan mobile app (Android/iOS) dengan tampilan menarik, loading cepat, dan keamanan terjamin. Hubungi kami sekarang!",
  keywords: "jasa website, pembuatan website, web app, mobile app, android, ios, web development, indonesia",
  authors: [{ name: "Web Perdana" }],
  creator: "Web Perdana",
  publisher: "Web Perdana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://webperdana.com"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    title: "Web Perdana - Jasa Pembuatan Website, Web App & Mobile App Terpercaya",
    description:
      "Web Perdana menyediakan jasa pembuatan website, web app, dan mobile app (Android/iOS) dengan tampilan menarik, loading cepat, dan keamanan terjamin.",
    url: "https://webperdana.com",
    siteName: "Web Perdana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Perdana - Jasa Pembuatan Website Terpercaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Perdana - Jasa Pembuatan Website, Web App & Mobile App Terpercaya",
    description:
      "Web Perdana menyediakan jasa pembuatan website, web app, dan mobile app (Android/iOS) dengan tampilan menarik, loading cepat, dan keamanan terjamin.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "ID",
    "geo.country": "Indonesia",
    "geo.placename": "Indonesia",
    sponsored: "false",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Web Perdana",
              url: "https://webperdana.com",
              logo: "https://webperdana.com/logo.png",
              description:
                "Web Perdana menyediakan jasa pembuatan website, web app, dan mobile app (Android/iOS) dengan tampilan menarik, loading cepat, dan keamanan terjamin.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressRegion: "Indonesia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-xxx-xxxx-xxxx",
                contactType: "customer service",
                availableLanguage: "Indonesian",
              },
              sameAs: [
                "https://www.facebook.com/webperdana",
                "https://www.instagram.com/webperdana",
                "https://www.linkedin.com/company/webperdana",
                "https://twitter.com/webperdana",
                "https://www.youtube.com/webperdana",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Pembuatan Website",
                  description: "Jasa pembuatan website responsif dan load super cepat",
                },
                {
                  "@type": "Service",
                  name: "Pengembangan Web App",
                  description: "Jasa pengembangan aplikasi web modern dan fungsional",
                },
                {
                  "@type": "Service",
                  name: "Pengembangan Mobile App",
                  description: "Jasa pembuatan aplikasi mobile Android dan iOS",
                },
              ],
            }),
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppChat />
        <GoogleAnalytics gaId="G-31TSQ7MPC2" />
        <Analytics />
      </body>
    </html>
  )
}
