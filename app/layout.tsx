import type { Metadata } from "next";
import "./globals.css";
import { SiteBackground } from "@/components/layout/site-background";
import { ThemeInitializer } from "@/components/layout/theme-initializer";
import { bodyFont } from "@/app/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://gus-a.dev"),
  title: {
    default: "Gus' Portfolio",
    template: "%s | Gustavo Antonelli",
  },
  description:
    "Developer turned designer focused on UX engineering, technical product design, and product-minded frontend work.",
  applicationName: "Gustavo Antonelli Portfolio",
  authors: [{ name: "Gustavo Antonelli" }],
  creator: "Gustavo Antonelli",
  keywords: [
    "Gustavo Antonelli",
    "Developer turned designer",
    "UX engineer",
    "Technical product designer",
    "Product-minded frontend developer",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gus' Portfolio",
    description:
      "UX engineering, technical product design, and product-minded frontend work with implementation depth.",
    url: "/",
    siteName: "Gustavo Antonelli Portfolio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Gus' Portfolio",
    description:
      "UX engineering, technical product design, and product-minded frontend work with implementation depth.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body
        className={`${bodyFont.className} relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeInitializer />
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
