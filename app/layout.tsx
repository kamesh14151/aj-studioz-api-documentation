import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.ajstudioz.dev'),
  title: "AJ STUDIOZ & NEXARIQ API Documentation",
  description: "Complete API documentation for AJ STUDIOZ Multi-Model Platform and NEXARIQ Lynxa Pro",
  generator: "v0.app",
  keywords: ["AJ STUDIOZ", "NEXARIQ", "API", "Documentation", "AI Models", "Multi-Model Platform"],
  authors: [{ name: "AJ STUDIOZ" }],
  creator: "AJ STUDIOZ",
  publisher: "AJ STUDIOZ",
  icons: {
    icon: [
      {
        url: "/AJ.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/AJ.svg",
  },
  openGraph: {
    title: "AJ STUDIOZ & NEXARIQ API Documentation",
    description: "Complete API documentation for AJ STUDIOZ Multi-Model Platform and NEXARIQ Lynxa Pro",
    url: "https://docs.ajstudioz.dev",
    siteName: "AJ STUDIOZ Docs",
    images: [
      {
        url: "/AJ.svg",
        width: 300,
        height: 300,
        alt: "AJ STUDIOZ Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ STUDIOZ & NEXARIQ API Documentation",
    description: "Complete API documentation for AJ STUDIOZ Multi-Model Platform and NEXARIQ Lynxa Pro",
    images: ["/AJ.svg"],
    creator: "@ajstudioz",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="overflow-x-hidden min-w-0">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
