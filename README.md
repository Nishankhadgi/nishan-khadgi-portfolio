# Nishan Khadgi — Technology Risk & GRC Analyst Portfolio

A portfolio aligned to my current résumé and focused on technology risk management, cybersecurity governance, IT audit and controls, compliance, cloud risk, and third-party risk.

## Professional profile

Technology Risk and GRC Analyst with a Computer Security background and experience supporting technology risk management, cybersecurity governance, risk assessments, compliance activities, control-gap analysis, audit readiness, and remediation coordination.

- **Current role:** Technology Risk Analyst, Sygnia, USA — May 2025–Present
- **Education:** B.S. in Computer Security, State University of New York (SUNY) at Plattsburgh, NY — August 2022–May 2026
- **Location:** New York, NY 11377
- **Email:** nishankhadgi091@gmail.com
- **Phone:** +1 (518) 335-2680
- **LinkedIn:** https://www.linkedin.com/in/nishankhadgi
- **GitHub:** https://github.com/Nishankhadgi

## Core skills

- **IT Risk & Governance:** IT Risk Assessment, Technology Risk Analysis, Risk Identification, COBIT, COSO, Risk Control Matrix (RCM), Risk Scoring, Risk Registers
- **IT Audit & Controls:** ITGC, ITAC, SOX 404, Access Control Reviews, Change Management, Segregation of Duties (SoD), Control Testing, Audit Evidence Review
- **Cybersecurity Risk & Compliance:** NIST CSF, NIST 800-53, ISO 27001, ISO 27005, CIS Controls, SOC 2, Compliance Gap Analysis, Vulnerability Assessment
- **Cloud & Infrastructure Security:** AWS, Microsoft Azure, Cloud Risk Assessment, IAM, PAM, CIS Benchmarks, Disaster Recovery, Business Continuity
- **Third-Party Risk & Data Privacy:** TPRM, Vendor Risk Assessment, Vendor Due Diligence, GDPR, HIPAA, Data Privacy, Vendor Compliance Monitoring, Privacy Impact Assessment (PIA)
- **GRC Tools & Analytics:** ServiceNow GRC, RSA Archer, OneTrust, AuditBoard, Advanced Excel, Power BI, SQL

## Professional experience

### Technology Risk Analyst — Sygnia, USA
**May 2025–Present**

- Support technology risk management by identifying, evaluating, and documenting cybersecurity and IT-related risks across business systems, applications, and technology environments.
- Conduct risk assessments and control-gap analyses against organizational requirements and frameworks including NIST and ISO 27001.
- Review IT General Controls covering user access management, change management, system operations, and security configurations.
- Support audit readiness through evidence coordination, documentation review, and maintenance of control records.
- Maintain risk registers, document assessment findings, and monitor remediation with IT, Information Security, and business stakeholders.
- Support governance and compliance through policy reviews, control documentation, risk reporting, and corrective-action monitoring.
- Participate in third-party risk management by reviewing vendor security questionnaires, supporting due diligence, and documenting potential technology and cybersecurity risks.

## Projects listed on the résumé

### 1. SIEM Detection Engineering & MITRE ATT&CK Validation Lab

Designed a security-monitoring lab using Microsoft Sentinel, KQL, and Windows Sysmon to detect suspicious endpoint and authentication activity. Developed custom detection rules, mapped detections to MITRE ATT&CK, and validated detection coverage through controlled Atomic Red Team simulations. Documented detection gaps, false positives, and recommended response actions.

**Tools:** Microsoft Sentinel, KQL, Windows Sysmon, Sigma, Atomic Red Team, MITRE ATT&CK, GitHub.  
**Skills:** SIEM, Detection Engineering, Log Analysis, Threat Hunting, Alert Tuning, ATT&CK Mapping, Incident Investigation.

### 2. Automated Phishing Investigation & IOC Enrichment Pipeline

Developed a Python-based phishing investigation tool to parse email headers, extract suspicious URLs, domains, IP addresses, and file hashes, and enrich indicators through threat-intelligence services. Implemented automated risk scoring and generated structured investigation reports for analyst triage and escalation.

**Tools:** Python, VirusTotal API, URLhaus, urlscan.io, JSON, CSV, MITRE ATT&CK.  
**Skills:** Phishing Investigation, IOC Analysis, Threat Intelligence, Python Automation, Indicator Enrichment, Risk Scoring, Incident Documentation.

## Professional development

The résumé lists the following job simulations under its “Certification” heading. They are presented here as **job simulations**, not as professional certifications:

- Cloud Platform Job Simulation
- Cybersecurity Consulting Simulation
- Cybersecurity Job Simulation

## Additional portfolio projects

The following existing projects are retained as supplementary portfolio work. They are separate from the two projects explicitly listed in the résumé and should be evaluated using each repository’s current contents and limitations.

- [CloudGuard — AWS Security & GRC Assurance](https://github.com/Nishankhadgi/cloudguard-aws-grc-assurance)
- [CloudGuard Dashboard](https://github.com/Nishankhadgi/cloudguard-dashboard)
- [IT Risk & GRC Practice Portfolio](https://github.com/Nishankhadgi/it-risk-grc-portfolio)
- [React + Node.js Stock API learning project](https://github.com/Nishankhadgi/react-and-node-scaffolding-Nishankhadgi)

## Portfolio site

The portfolio site includes an interactive, fictional security-alert workbench and supporting project summaries. The workbench is a demonstration; it is not connected to a live SIEM, employer environment, or real incident data.

## Accuracy and responsible use

All employment details, education, skills, and résumé-listed projects are based on the résumé supplied for this update. Supplementary repositories are identified separately and are not represented as employer deliverables or client engagements. Do not commit employer-confidential information, customer data, real security telemetry, credentials, or private incident records.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

For a production check:

```bash
npm run lint
npm run build
```

The predev and prebuild scripts copy the source preview HTML and CSS into the Next.js public directory before running the app.

## Contact form configuration

Public profile values may be set in .env.local or through deployment environment settings.

```env
NEXT_PUBLIC_PROFILE_EMAIL=nishankhadgi091@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/nishankhadgi
NEXT_PUBLIC_GITHUB_URL=https://github.com/Nishankhadgi
NEXT_PUBLIC_CLOUDGUARD_REPO_URL=https://github.com/Nishankhadgi/cloudguard-dashboard
NEXT_PUBLIC_GRC_REPO_URL=https://github.com/Nishankhadgi/it-risk-grc-portfolio
```

Contact delivery is optional. To enable it, configure RESEND_API_KEY, RESEND_FROM, and CONTACT_EMAIL as server-side environment variables. Never commit real keys or local environment files.
