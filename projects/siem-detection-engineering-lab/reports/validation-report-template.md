# Detection validation report

> Replace every bracketed field with observed results. Do not mark a test PASS unless expected telemetry and the detection were both verified in your own Sentinel workspace.

## 1. Test summary

- **Analyst:** [Your name]
- **Test date (UTC):** [YYYY-MM-DD]
- **Lab host alias:** [Redacted VM alias]
- **Windows version/build:** [Observed version]
- **Sysmon version:** [Observed version]
- **Sentinel workspace region:** [Region only; do not publish workspace identifiers]
- **Atomic Red Team technique/test:** [Exact upstream technique and test name]
- **Test status:** [PASS / PARTIAL / FAIL / NOT RUN]

## 2. Objective

[Describe the behavior you intended to generate and the detection you wanted to validate.]

## 3. Test procedure

[Document VM snapshot state, prerequisites, exact test name, execution time, and cleanup/revert actions. Do not paste secrets.]

## 4. Expected telemetry

- **Expected source:** [Sysmon / Windows Security]
- **Expected event channel and ID:** [Observed channel and ID]
- **Expected Sentinel table:** [Event / SecurityEvent]
- **Expected ATT&CK technique:** [Technique ID and name]

## 5. Observed result

| Check | Result | Evidence |
|---|---|---|
| Test executed on isolated VM | [Yes / No] | [File] |
| Local event written | [Yes / No] | [File] |
| AMA/DCR ingestion confirmed | [Yes / No] | [File] |
| KQL detection returned expected row | [Yes / No] | [File] |
| Alert generated (if configured) | [Yes / No / Not configured] | [File] |
| Cleanup / snapshot revert completed | [Yes / No] | [File] |

## 6. Detection analysis

- **What the rule detected:** [Observed fields and values, redacted]
- **What it did not detect:** [Missing events, fields, or telemetry]
- **False positives:** [Observed legitimate matches; do not invent any]
- **False negatives / gaps:** [Known test or telemetry gaps]
- **Tuning performed:** [Exact query/filter change and reason]

## 7. ATT&CK mapping

[Explain why the observed behavior aligns with the mapped technique. A technique tag is not proof of malicious activity.]

## 8. Recommended response

[Describe appropriate triage steps, including process ancestry, user context, related events, and whether activity was authorized.]

## 9. Conclusion

[State PASS, PARTIAL, FAIL, or NOT RUN. Include the evidence that supports the conclusion and the next improvement.]
