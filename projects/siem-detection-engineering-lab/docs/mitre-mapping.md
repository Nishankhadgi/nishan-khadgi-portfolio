# Detection mapping to MITRE ATT&CK

| Detection | ATT&CK technique | Reason | Limitation |
|---|---|---|---|
| Encoded / suspicious PowerShell process | [T1059.001 — PowerShell](https://attack.mitre.org/techniques/T1059/001/) | PowerShell is a command and scripting interpreter; encoded or obfuscated commands may warrant review | Administrative and deployment tooling can use encoded commands legitimately |
| Registry Run-key modification | [T1547.001 — Registry Run Keys / Startup Folder](https://attack.mitre.org/techniques/T1547/001/) | Run-key values can launch programs at user logon | Installers and legitimate apps can modify Run keys; validate writer, value, signer, and context |
| Burst of failed logons | [T1110 — Brute Force](https://attack.mitre.org/techniques/T1110/) (investigative lead only) | A short burst can be consistent with password guessing | Failed logons alone do not prove brute force; inspect source, target, subsequent success, lockouts, and expected services |

## Review checklist

- Host, user, timestamp, and ingestion time.
- Parent process, image, command line, and signer where available.
- Network / registry / file context where available.
- Whether the event was produced by your test or normal administration.
- Related events before and after the alert.
- False positives, missed telemetry, and query changes.
- Recommended response action.

A technique tag is not proof of malicious activity. Do not claim a confirmed incident from a single detection result.
