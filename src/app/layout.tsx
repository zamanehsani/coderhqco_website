import type React from "react";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";
import { FloatingCursor } from "@/components";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CODERHQ.CO",
  description:
    "We create your digital experiences that make an impact. Raw, unfiltered, and straight to the point.",
  generator: "zaman ehsani",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CODERHQ.CO",
    description:
      "We create your digital experiences that make an impact. Raw, unfiltered, and straight to the point.",
    url: "https://your-website-url.com",
    siteName: "CODERHQ.CO",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "CODERHQ.CO Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODERHQ.CO",
    description:
      "We create your digital experiences that make an impact. Raw, unfiltered, and straight to the point.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black mx-auto max-w-[1440px]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <FloatingCursor />
      </body>
    </html>
  );
}
