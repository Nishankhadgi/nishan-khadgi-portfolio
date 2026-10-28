import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // These defaults are supported by the supplied resume and the connected
  // GitHub account. LinkedIn remains blank unless the real URL is configured.
  const email = (process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? "").trim() || "nishankhadgi091@gmail.com";
  const linkedin = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim();
  const github = (process.env.NEXT_PUBLIC_GITHUB_URL ?? "").trim() || "https://github.com/Nishankhadgi";
  const itgcRepo = (process.env.NEXT_PUBLIC_ITGC_REPO_URL ?? "").trim() || "https://github.com/Nishankhadgi/it-risk-grc-portfolio/tree/main/ITGC-Control-Testing";
  const vendorRiskRepo = (process.env.NEXT_PUBLIC_VENDOR_RISK_REPO_URL ?? "").trim() || "https://github.com/Nishankhadgi/it-risk-grc-portfolio/tree/main/Third-Party-Vendor-Risk";
  const stockApiRepo = (process.env.NEXT_PUBLIC_STOCK_API_REPO_URL ?? "").trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
  const validUrl = (value: string) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:" ? value : "";
    } catch {
      return "";
    }
  };

  return NextResponse.json(
    {
      email: validEmail,
      linkedin: validUrl(linkedin),
      github: validUrl(github),
      itgcRepo: validUrl(itgcRepo),
      vendorRiskRepo: validUrl(vendorRiskRepo),
      stockApiRepo: validUrl(stockApiRepo),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
