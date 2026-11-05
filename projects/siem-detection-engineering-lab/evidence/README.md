# Evidence checklist

This folder intentionally begins without screenshots or execution claims. Add only evidence captured from your own lab run.

## Required proof

- [ ] Dedicated Windows VM and OS version (redact identifying details).
- [ ] Sysmon version and installed configuration.
- [ ] Event Viewer showing Sysmon Operational Event ID 1 after a harmless local command.
- [ ] AMA installed and DCR associated with the test VM.
- [ ] DCR XPath showing the selected Sysmon event IDs.
- [ ] Sentinel query showing Sysmon events in `Event`.
- [ ] Sentinel query showing Security Event ID 4625 in `SecurityEvent` (only if safely generated).
- [ ] Exact Atomic Red Team test name and test date.
- [ ] Local output from the benign PowerShell test.
- [ ] Matching Sentinel row and KQL result.
- [ ] False-positive review, tuning notes, and response recommendation.
- [ ] Completed validation report.

## Naming examples

- `01-sysmon-event-viewer-YYYY-MM-DD.png`
- `02-sentinel-event-table-YYYY-MM-DD.png`
- `03-kql-detection-result-YYYY-MM-DD.png`
- `04-atomic-test-output-YYYY-MM-DD.png`

## Publishing hygiene

Redact tenant and subscription IDs, workspace resource IDs, private/public IP addresses, usernames, email addresses, machine names, and employer/customer information. Never publish passwords, tokens, API keys, or private incident details. Do not create placeholder screenshots or represent mock data as actual telemetry. Label diagrams and mock-ups clearly.
