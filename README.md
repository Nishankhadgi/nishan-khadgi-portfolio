# Nishan Khadgi — Interactive Cybersecurity Portfolio

An editorial, dark-mode portfolio for technology risk, cybersecurity GRC, IT audit, control assurance, and evidence-led remediation. The signature experience is a cursor-responsive topographic field followed by an interactive synthetic ITGC dashboard.

## Run locally

Requirements: Node.js 20.9+ and npm.

    npm install
    cp .env.example .env.local
    npm run dev

Open http://localhost:3000. The predev and prebuild lifecycle scripts prepare preview.html and preview.css in Next.js' public directory. The root route opens the interactive portfolio preview.

## Highlights

- Obsidian, chartreuse, copper, and ultraviolet art direction with procedural topographic visuals.
- Interactive ITGC outcome filters, sample-level record review, risk heatmap, remediation tracker, and fictional vendor comparison.
- Expandable experience timeline, portfolio case studies, skills groups, education, and learning simulations.
- Responsive layout and reduced-motion behavior in the static experience.
- Server-side contact-form validation with optional Resend delivery.
- Configurable email, LinkedIn, and GitHub links served from public profile environment variables.

## Configure the portfolio

Set these values in .env.local for local development and in the deployment provider's environment settings for production. Leave unknown profile links blank rather than inventing them.

    NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.example
    NEXT_PUBLIC_PROFILE_EMAIL=
    NEXT_PUBLIC_LINKEDIN_URL=
    NEXT_PUBLIC_GITHUB_URL=
    NEXT_PUBLIC_STOCK_API_REPO_URL=
    NEXT_PUBLIC_ITGC_REPO_URL=
    NEXT_PUBLIC_VENDOR_RISK_REPO_URL=

    RESEND_API_KEY=
    RESEND_FROM=
    CONTACT_EMAIL=

The public API at /api/site-config exposes only the public email, LinkedIn, and GitHub values. The email-delivery settings are server-side only. To enable contact messages, configure RESEND_API_KEY, RESEND_FROM, and CONTACT_EMAIL; RESEND_FROM must use a sender address verified by Resend. Without these values, the form returns an explicit configuration message rather than claiming a message was sent.

Never commit .env.local or real credentials. .env.local is ignored by Git; .env.example contains blank placeholders.

## Resume

public/resume.pdf is a generated draft based on the supplied portfolio brief, not a substitute for the final resume document. Review it and replace it with the approved resume PDF before publishing. The download link points to /resume.pdf.

## Synthetic data and professional accuracy

The dashboard is labelled **SIMULATED PORTFOLIO DATA — NOT LIVE PRODUCTION TELEMETRY**. Its 20 illustrative ITGC sample records across 10 categories use 12 Pass, 6 Fail, and 2 Needs Follow-up outcomes, eight synthetic findings, and six fictional vendors. The vendor scoring rubric is a custom practice rubric, not a mandatory industry standard. These examples do not represent live threat feeds, real company systems, actual audit findings, or confidential client data.

Career content should be reviewed for accuracy before public release. The ScaleAI start date is displayed as August 2026 to align with the supplied resume.

## Deploy to Vercel

1. Push the repository to GitHub and import it into Vercel.
2. Keep the framework set to Next.js; Vercel will run npm run build, which first prepares the static portfolio files.
3. Add the public profile variables and, if contact delivery is required, the private Resend variables in Project Settings → Environment Variables.
4. Deploy and verify the desktop/mobile layout, navigation, dashboard filters, resume download, and contact-form success/error paths.

## Validation notes

- The preview preparation script is designed to be repeatable and runs before development and production builds.
- The interactive preview is authored in preview.html and preview.css; the Next.js App Router provides deployment, metadata, the contact API, and public configuration.
- Run npm install, npm run lint, and npm run build in a network-enabled environment before treating a deployment as verified. Dependency installation was unavailable in the creation environment because package-registry requests timed out.
