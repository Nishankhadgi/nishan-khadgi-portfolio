# SIEM Detection Engineering & MITRE ATT&CK Validation Lab

**Status: starter lab committed — not yet executed or validated.**

This is a from-scratch Windows endpoint detection lab using Sysmon, Azure Monitor Agent, Microsoft Sentinel, KQL, Sigma, MITRE ATT&CK, and a benign Atomic Red Team test. Files in this folder are starter content, not proof of completed execution. Capture your own lab evidence before marking any detection as validated.

## Scope

- One disposable Windows test VM that you own or are explicitly authorized to test.
- Sysmon process, network, file, registry, and DNS events.
- Sysmon events sent to the Log Analytics `Event` table through a Windows Event Logs DCR.
- Windows authentication events sent to `SecurityEvent` by the Sentinel Windows Security Events via AMA connector.
- KQL detections, Sigma drafts, ATT&CK mapping, and a documented validation process.

Never run Atomic tests on production or employer devices. Do not use real credentials, customer information, employer telemetry, or confidential incident records.

## Folder guide

- `config/sysmon/sysmon-lab.xml` — starter Sysmon configuration.
- `docs/architecture.md` — event flow and lab boundaries.
- `docs/sentinel-setup.md` — workspace, AMA, DCR, and ingestion checks.
- `docs/mitre-mapping.md` — ATT&CK coverage and limitations.
- `detections/kql/` — three KQL query drafts.
- `detections/sigma/` — two Sigma rule drafts.
- `tests/atomic-red-team/README.md` — benign PowerShell validation procedure.
- `evidence/` — evidence checklist and blank CSV log.
- `reports/validation-report-template.md` — report to complete after the lab runs.

## Build steps

1. Create a dedicated Windows 10/11 or Windows Server VM, take a snapshot, and keep it isolated from production.
2. Download Sysmon from [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon). From an elevated terminal in the folder with Sysmon and this XML file, run:

   ```powershell
   .\Sysmon64.exe -accepteula -i .\sysmon-lab.xml
   ```

3. Verify local events in Event Viewer under `Applications and Services Logs > Microsoft > Windows > Sysmon > Operational`.
4. Follow [docs/sentinel-setup.md](docs/sentinel-setup.md) to connect the Sysmon channel to the `Event` table and Windows Security events to `SecurityEvent`.
5. Verify ingestion before running any Atomic test.
6. Run the KQL queries manually, tune them against observed activity, then create Sentinel analytics rules only after reviewing false positives.
7. Follow [tests/atomic-red-team/README.md](tests/atomic-red-team/README.md) to run the one benign T1059.001 test in the isolated VM.
8. Record actual results in `evidence/validation-log.csv` and complete the report template.

## Initial detections

| Detection | Source | ATT&CK | Key caveat |
|---|---|---|---|
| Encoded / suspicious PowerShell | Sysmon Event ID 1 in `Event` | T1059.001 | Legitimate admin tools can use encoded commands |
| Run-key registry modification | Sysmon Event ID 13 in `Event` | T1547.001 | Installers/updaters may create Run keys |
| Burst of failed logons | Event ID 4625 in `SecurityEvent` | T1110 (investigative lead) | Failed logons alone do not prove password guessing |

## Status checklist

- [x] Starter files, queries, rules, and templates created.
- [ ] Disposable Windows VM created and snapshotted.
- [ ] Sysmon installed and local events verified.
- [ ] AMA/DCR and Sentinel Security Events connector configured.
- [ ] Event and SecurityEvent ingestion verified.
- [ ] KQL query results reviewed and tuned.
- [ ] Atomic test actually executed.
- [ ] Detection pass/fail and false positives recorded.
- [ ] Sanitized screenshots and final report added.

## References

- [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
- [Collect Windows events with AMA](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/data-collection-windows-events)
- [Windows Security Events via AMA](https://learn.microsoft.com/en-us/azure/sentinel/data-connectors/windows-security-events-via-ama)
- [Atomic Red Team getting started](https://www.atomicredteam.io/docs/atomic-red-team)
- [Invoke-AtomicRedTeam getting started](https://www.atomicredteam.io/docs/invoke-atomicredteam/getting-started)
- [ATT&CK T1059.001](https://attack.mitre.org/techniques/T1059/001/), [T1547.001](https://attack.mitre.org/techniques/T1547/001/), [T1110](https://attack.mitre.org/techniques/T1110/)
