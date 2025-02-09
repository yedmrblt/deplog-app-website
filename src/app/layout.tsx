import "./main.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import cx from "@/lib/cx";
import { META } from "@/lib/meta";

const fontText = Inter({
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const fontDisplay = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(META.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: META.title,
    template: `%s | ${META.title}`,
  },
  description: META.description,
  icons: {
    icon: "/icons/icon-android-chrome-192x192.png",
    apple: "/icons/icon-apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cx("scroll-smooth", fontText.variable, fontDisplay.variable)}
    >
      <body className="text-default flex min-h-svh bg-[#fefefe] text-sm text-stone-800 antialiased sm:text-base">
        <main className="sm:pt-42 xl:max-w-screen-lg xl:max-w-screen-lg flex flex-1 justify-center px-8 pt-24 pb-16 sm:pt-32 sm:pb-28 xl:px-36">
          {children}
        </main>
      </body>
    </html>
  );
}
