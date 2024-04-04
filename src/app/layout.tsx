import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { stix } from "@/components/Fonts";

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
      </body>
    </html>
  );
}
