import type { Metadata } from "next";
import "./globals.css";
import { SiteBackground } from "@/components/layout/site-background";
import { bodyFont } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Gus A. Dev",
  description: "Portfolio of Gustavo Antonelli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} relative min-h-screen overflow-x-hidden bg-[#0D0C10] text-white`}
      >
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}