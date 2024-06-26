import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { stix } from "@/components/Fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Article Pal",
  description:
    "By Writers, For Writers. Write better, faster, and more confidently with Article Pal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn("bg-background antialiased", stix.className)}>
        {children}
        <Script
          defer
          src="https://umami.ethancreates.dev/script.js"
          data-website-id="ff242665-7a83-4e6b-a38c-c0dcdb7458ed"
        />
      </body>
    </html>
  );
}
