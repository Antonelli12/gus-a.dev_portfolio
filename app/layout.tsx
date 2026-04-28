import type { Metadata } from "next";
import "./globals.css";
import { SiteBackground } from "@/components/layout/site-background";
import { bodyFont } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Gus A. Dev",
  description: "Portfolio of Gustavo Antonelli",
};

const themeScript = `
  try {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : prefersLight
        ? "light"
        : "dark";

    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body
        className={`${bodyFont.className} relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]`}
      >
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}