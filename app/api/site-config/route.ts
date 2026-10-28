import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const email = (process.env.NEXT_PUBLIC_PROFILE_EMAIL ?? "").trim();
  const linkedin = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim();
  const github = (process.env.NEXT_PUBLIC_GITHUB_URL ?? "").trim();
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
    { email: validEmail, linkedin: validUrl(linkedin), github: validUrl(github) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
