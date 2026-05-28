import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@kennbalino/kui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KUI — Minimal Dark React Component Library",
  verification: {
    google: "OPy9HJG3RVh5T7l85XYEaT3kyzlIyl04YUr4glwr0go",
  },
  description:
    "A minimal, dark-first React component library built with TypeScript and Tailwind CSS.",
  openGraph: {
    title: "KUI — Minimal Dark React Component Library",
    description:
      "A minimal, dark-first React component library built with TypeScript and Tailwind CSS.",
    url: "https://kui-v1.vercel.app",
    siteName: "KUI",
    images: [
      {
        url: "https://kui-v1.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUI — Minimal Dark React Component Library",
    description:
      "A minimal, dark-first React component library built with TypeScript and Tailwind CSS.",
    images: ["https://kui-v1.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/kui-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
