# Nishan Khadgi — Technology Risk, IT Audit & Cloud Security Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel%20Ready-brightgreen?logo=vercel)](https://vercel.com/)
[![Auditor](https://img.shields.io/badge/Auditor-Nishan%20Khadgi-slate.svg)](https://github.com/Nishankhadgi)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An executive-level, interactive technology risk, cybersecurity GRC, and IT audit portfolio website. Designed around a responsive topographic blueprint visualization, an inspectable synthetic ITGC risk observatory, and an end-to-end continuous cloud security audit console.

---

## 📌 Professional Overview

**Nishan Khadgi** is a Technology Risk Consultant and Information Systems Auditor specializing in IT General Controls (ITGC), IT Application Controls (ITAC), Cloud Security Assurance (AWS), and Cybersecurity Governance, Risk & Compliance (GRC).

- **Current Role:** Technology Risk Consultant at ScaleAI (October 2026 — Present, USA)
- **Education:** B.S. in Computer Security, State University of New York at Plattsburgh (August 2022 — May 2026)
- **Prior Experience:** 
  - Cybersecurity Risk & Vendor Assurance at Lumen Tech (May 2022 — July 2022, India)
  - ITGC Risk Assessment & Controls Review at Tata Consultancy Services (January 2022 — April 2022, India)
- **Email:** [`nishankhadgi091@gmail.com`](mailto:nishankhadgi091@gmail.com)
- **GitHub:** [github.com/Nishankhadgi](https://github.com/Nishankhadgi)
- **LinkedIn:** [linkedin.com/in/nishankhadgi](https://www.linkedin.com/in/nishankhadgi)

---

## 🚀 Key Features & Architectural Components

1. **Light / Dark Executive Theme Engine:**
   - Default clean institutional executive light palette (Slate `#f8fafc` / `#ffffff`, deep `#0f172a` typography, cobalt `#2563eb` accents) with an accessible high-contrast dark mode toggle.
2. **Interactive Topographic Risk Field:**
   - Cursor-responsive topographic Canvas mesh simulating risk landscape topography with CAD blueprint aesthetics.
3. **Flagship Cloud Security & GRC Console (Project #01 — CloudGuard):**
   - Live simulated AWS Prowler v4.0.0 audit console mapping 10+ technical findings across IAM, S3, EC2, CloudTrail, KMS, and RDS to **CIS AWS Foundations Benchmark v3.0, NIST CSF 2.0, ISO/IEC 27001:2022, and AICPA SOC 2**.
   - Includes real in-browser CSV audit evidence download (`CloudGuard_AWS_Compliance_Audit_Evidence.csv`).
4. **Interactive Risk & ITGC Observatory:**
   - 5-tab analytical dashboard with outcome filters (Pass / Fail / Follow-up), sample-level workpaper records, Likelihood × Impact 5×5 heatmap, remediation aging tracker, and third-party vendor scoring rubric.
5. **Verified Résumé Integration:**
   - Direct download link for `public/resume.pdf`—the official, two-page professional résumé reflecting verified enterprise experience, technical proficiencies, and education.
6. **Serverless Contact Form:**
   - Server-side input sanitization, RFC 5322 email regex verification, honeypot spam protection, and optional Resend API integration.

---

## 📄 Official Résumé

`public/resume.pdf` is the verified, official two-page professional résumé for **Nishan Khadgi**. It documents:
- **Work History:** ScaleAI (Technology Risk Consultant), Lumen Tech (Cybersecurity Risk Assessment), Tata Consultancy Services (ITGC Review).
- **Education:** B.S. in Computer Security (State University of New York at Plattsburgh).
- **Core Competencies:** ITGC / ITAC, CIS Benchmarks, NIST CSF 2.0, ISO/IEC 27001:2022, SOC 2, Power BI, Python, AWS Prowler.
- **Contact Coordinates:** Consistent with public profiles (`nishankhadgi091@gmail.com`, Queens, New York).

The primary header navigation and hero CTA button ("DOWNLOAD RÉSUMÉ") download `/resume.pdf` directly.

---

## 🌐 Environment Variables Configuration

Public profile URLs and official contact details are configured via `.env.local`:

```dotenv
# Public Profile Information
NEXT_PUBLIC_PROFILE_EMAIL=nishankhadgi091@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/nishankhadgi
NEXT_PUBLIC_GITHUB_URL=https://github.com/Nishankhadgi
NEXT_PUBLIC_ITGC_REPO_URL=https://github.com/Nishankhadgi/it-risk-grc-portfolio
NEXT_PUBLIC_VENDOR_RISK_REPO_URL=https://github.com/Nishankhadgi/it-risk-grc-portfolio
NEXT_PUBLIC_STOCK_API_REPO_URL=https://github.com/Nishankhadgi/nishan-khadgi-portfolio

# Optional Server-Side Email Delivery (Resend)
RESEND_API_KEY=re_your_api_key
RESEND_FROM=Portfolio Contact <contact@your-verified-domain.com>
CONTACT_EMAIL=nishankhadgi091@gmail.com
```
