# Nishan Khadgi — Interactive Cybersecurity Portfolio

A dark, editorial cybersecurity and technology-risk portfolio designed around one signature interaction: a living topographic risk field that leads into an inspectable synthetic ITGC dashboard.

## Included

- Next.js App Router + TypeScript application.
- Obsidian / chartreuse / oxidized-copper design system with responsive layout and reduced-motion support.
- Cursor-responsive topographic Canvas visualization with a non-WebGL fallback by design.
- Interactive dashboard with outcome filters, sample-level record inspection, a likelihood × impact map, remediation tracker, and fictional vendor comparison.
- Expandable experience and project case studies, interactive skill groups, and an API request/response learning demo.
- Contact form with server-side validation, honeypot field, delivery feedback, and optional Resend integration.
- A generated resume PDF based only on the details in the supplied portfolio brief. Replace it with your approved resume PDF before publishing if you have the original document.
- `preview.html` — dependency-free visual preview; its dashboard and navigation interactions work locally, but static preview form delivery is intentionally disabled.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Configure personal links

The portfolio intentionally does not invent contact details or repository URLs. Add the correct values to `.env.local`:

```dotenv
NEXT_PUBLIC_PROFILE_EMAIL=you@example.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile/
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-account
NEXT_PUBLIC_ITGC_REPO_URL=https://github.com/your-account/your-itgc-project
NEXT_PUBLIC_VENDOR_RISK_REPO_URL=https://github.com/your-account/your-vendor-risk-project
NEXT_PUBLIC_STOCK_API_REPO_URL=https://github.com/your-account/your-stock-api-project
```

Leave any value blank until the exact URL is known. Contact email, LinkedIn, GitHub, and repository actions only render when configured.

## Enable contact delivery

The API route validates input but does not claim delivery when the provider is not configured. To enable actual email delivery, create a Resend account, verify the sender domain, then add these server-side values to `.env.local` and your Vercel project settings:

```dotenv
RESEND_API_KEY=re_your_key
RESEND_FROM=Portfolio Contact <contact@your-verified-domain.example>
CONTACT_EMAIL=your-inbox@example.com
```

Keep `RESEND_API_KEY` private. Do not use a made-up sender address; it must be verified with your mail provider. Deploying without these variables returns a clear “not configured” message instead of a fake success state.

## Resume

`public/resume.pdf` is a generated, two-page resume draft based on the career, education, skills, and project details available in the supplied brief. It omits unprovided phone, email, and profile URLs. Replace it with your final approved resume PDF before publishing if you have a source document. The web button downloads `/resume.pdf`.

## Synthetic data and claims

The dashboard is explicitly labelled **SIMULATED PORTFOLIO DATA — NOT LIVE PRODUCTION TELEMETRY**. It uses 20 illustrative sample-level ITGC records across 10 control categories, 12 Pass / 6 Fail / 2 Needs follow-up outcomes, eight synthetic findings, and six fictional vendor profiles. All illustrative vendor names, risk scores, findings, and remediation statuses are examples only. The vendor scoring rubric is a custom practice rubric, not a mandatory industry standard. No live threat feed, real audit dataset, client finding, or production system is represented.

Career and education content reflects the supplied brief. Review titles, dates, quantities, and descriptions for accuracy before public launch. The source project URLs are intentionally configurable rather than fabricated.

## Deploy to Vercel

1. Push the project to your Git repository.
2. Import the repository in Vercel.
3. Set the public profile/repository variables and (if needed) the private Resend variables in Project Settings → Environment Variables.
4. Deploy. Vercel detects Next.js and uses the `npm run build` script.
5. Verify the live page on desktop and mobile, click all navigation sections, inspect synthetic dashboard filters, test the resume download, and send a contact test only after configuring email delivery.

## Validation notes

- Source syntax was parsed with the installed TypeScript transpiler.
- The generated resume PDF was rendered and inspected in a PDF renderer.
- Installing Next.js dependencies could not be completed in the generation environment because npm registry requests returned a DNS/network resolution error. Run `npm install` in a network-enabled environment, then `npm run build` before deployment.
- No browser test or production deployment is claimed for the Next.js app in this environment.

## Structure

```text
app/
  api/contact/route.ts      # server-side validation + optional Resend delivery
  globals.css               # design system and responsive styling
  layout.tsx                # metadata, Open Graph, viewport
  not-found.tsx             # custom 404
  page.tsx                  # portfolio entry point
components/
  contact-form.tsx
  portfolio-app.tsx
  reveal.tsx
  risk-dashboard.tsx
  terrain-canvas.tsx
lib/
  site-data.ts              # editable profile, experience, skills and synthetic datasets
public/
  favicon.svg
  og-card.svg
  resume.pdf
preview.html                # dependency-free local preview
preview.css
```
