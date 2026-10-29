# Nishan Khadgi — SOC Analyst Portfolio

A cybersecurity portfolio focused on Security Operations Center (SOC) work: security monitoring, alert triage, incident investigation, threat detection, threat hunting, and incident response.

## Professional profile

- **Target role:** SOC Analyst
- **Experience listed on the supplied résumé:** SOC Analyst at Sygnia, USA — May 2025–Present
- **Education:** B.S. in Computer Security, State University of New York (SUNY) at Plattsburgh, NY — August 2022–May 2026
- **Contact:** nishankhadgi091@gmail.com · +1 (518) 335-2680 · NY-11377
- **LinkedIn:** https://www.linkedin.com/in/nishankhadgi
- **GitHub:** https://github.com/Nishankhadgi

## Portfolio features

- Interactive SOC alert-triage workbench with search, severity filters, MITRE ATT&CK references, and investigation notes.
- Synthetic example alerts spanning endpoint, identity, network, and cloud security.
- Experience section reflecting the supplied résumé, including the stated alert, case, detection-rule, and automation metrics.
- Technical skills grouped by SOC operations, SIEM/detection, endpoint/network security, threat intelligence, cloud/identity, scripting, and security tools.
- Certifications and education sections matching the supplied résumé.
- Direct résumé download from public/resume.pdf.
- Server-side contact form with input validation, a honeypot field, and optional Resend delivery.

## Synthetic data notice

The interactive alert-triage workbench is an educational portfolio simulation. Its alert names, hosts, indicators, timestamps, investigation status, and suggested actions are fictional examples created for demonstrating a triage workflow. It is **not** connected to Sygnia, an employer environment, a production SIEM, a live threat feed, or any real security incident. Dashboard metrics sourced from the résumé are identified separately from the synthetic alert data.

## Run locally

Requirements: Node.js 20+ and npm.

    npm install
    cp .env.example .env.local
    npm run dev

Open http://localhost:3000.

For a production check, run:

    npm run lint
    npm run build

The predev and prebuild scripts copy the source preview HTML and CSS into the Next.js public directory before running the app.

## Contact form configuration

Public profile values may be set in .env.local or through the deployment provider's environment settings.

    NEXT_PUBLIC_PROFILE_EMAIL=nishankhadgi091@gmail.com
    NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/nishankhadgi
    NEXT_PUBLIC_GITHUB_URL=https://github.com/Nishankhadgi
    NEXT_PUBLIC_CLOUDGUARD_REPO_URL=https://github.com/Nishankhadgi/cloudguard-dashboard
    NEXT_PUBLIC_GRC_REPO_URL=https://github.com/Nishankhadgi/it-risk-grc-portfolio

Contact delivery is optional. To enable it, configure RESEND_API_KEY, RESEND_FROM, and CONTACT_EMAIL as server-side environment variables. RESEND_FROM must use a verified sender address. Never commit real keys or local environment files.

## Related learning projects

- **CloudGuard AWS/GRC assurance:** a separate cloud security and control-assurance simulation. Treat its content as learning artifacts, not production monitoring or a real audit engagement.
- **IT Risk & GRC portfolio:** a separate self-directed practice area. Its workpapers and scenarios are not employer deliverables.

## Technical implementation and accuracy

The site uses Next.js App Router for the root redirect, metadata, public profile configuration, and contact API. The interactive experience is authored in preview.html and preview.css and served from the public directory after the preparation script runs.

Employment, education, skills, and certifications reflect the résumé supplied for this update. Do not add customer names, real security telemetry, sensitive incident details, credentials, or employer-confidential data.
