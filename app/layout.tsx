import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Solid Scale Labs — Enterprise Solutions Provider",
  description: "Modern, enterprise-grade websites, systems, integrations, and automation — built to scale.",
  icons: [{ rel: "icon", url: "/logo.png" }],
  openGraph: {
    title: "Solid Scale Labs",
    description: "Enterprise-grade delivery with polished UX and production-ready engineering.",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
