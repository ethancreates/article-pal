import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { STIX_Two_Text } from "next/font/google";
import { Raleway } from "next/font/google";

export const stix = STIX_Two_Text({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ["latin"] });

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
    <html lang="en" className="smooth-scroll">
      <body className={cn("bg-background antialiased", stix.className)}>
        {children}
      </body>
    </html>
  );
}
