import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishan Khadgi — Turning Cyber Risk Into Clarity",
  description:
    "Technology risk, cybersecurity GRC, IT audit, control assurance, and evidence-led remediation in an interactive portfolio.",
  applicationName: "Nishan Khadgi Portfolio",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL?.trim()
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL.trim())
    : undefined,
  openGraph: {
    title: "Nishan Khadgi — Turning Cyber Risk Into Clarity",
    description:
      "Explore technology risk, cybersecurity GRC, IT audit, and a clearly labelled synthetic risk dashboard.",
    type: "website",
    images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: "Nishan Khadgi portfolio — Turning Cyber Risk Into Clarity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishan Khadgi — Technology Risk Consultant",
    description: "Cybersecurity GRC, IT audit, control assurance, and evidence-led risk clarity.",
    images: ["/og-card.svg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10120f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
