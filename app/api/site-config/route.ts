import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const email = (process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? "").trim() || "nishankhadgi091@gmail.com";
  const phone = (process.env.NEXT_PUBLIC_PROFILE_PHONE ?? "").trim() || "+1 (518) 335-2680";
  const location = (process.env.NEXT_PUBLIC_PROFILE_LOCATION ?? "").trim() || "NY-11377";
  const linkedin = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim() || "https://www.linkedin.com/in/nishankhadgi";
  const github = (process.env.NEXT_PUBLIC_GITHUB_URL ?? "").trim() || "https://github.com/Nishankhadgi";
  const cloudGuardRepo = (process.env.NEXT_PUBLIC_CLOUDGUARD_REPO_URL ?? "").trim() || "https://github.com/Nishankhadgi/cloudguard-dashboard";
  const grcRepo = (process.env.NEXT_PUBLIC_GRC_REPO_URL ?? "").trim() || "https://github.com/Nishankhadgi/it-risk-grc-portfolio";
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
      phone: phone.slice(0, 40),
      location: location.slice(0, 80),
      linkedin: validUrl(linkedin),
      github: validUrl(github),
      cloudGuardRepo: validUrl(cloudGuardRepo),
      grcRepo: validUrl(grcRepo),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
