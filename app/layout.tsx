import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishan Khadgi — SOC Analyst | Detection & Response",
  description:
    "SOC Analyst portfolio covering security monitoring, alert triage, incident investigation, threat hunting, SIEM/EDR, and incident-response support.",
  applicationName: "Nishan Khadgi SOC Analyst Portfolio",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL?.trim()
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL.trim())
    : undefined,
  openGraph: {
    title: "Nishan Khadgi — SOC Analyst | Detection & Response",
    description:
      "Explore a résumé-aligned SOC Analyst portfolio and an explicitly synthetic alert-triage workbench.",
    type: "website",
    images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Nishan Khadgi — SOC Analyst portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishan Khadgi — SOC Analyst",
    description: "Security monitoring, alert triage, threat detection, threat hunting, and incident response.",
    images: ["/og-card.svg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080c16",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
