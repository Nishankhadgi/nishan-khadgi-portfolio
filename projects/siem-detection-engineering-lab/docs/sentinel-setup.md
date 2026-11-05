# Microsoft Sentinel and AMA setup

This guide follows the current Azure Monitor Agent (AMA) collection model. Portal labels can change; use the current Microsoft Learn pages linked below if a label differs.

## 1. Create the workspace

1. Create a Log Analytics workspace in your Azure subscription.
2. Enable Microsoft Sentinel on that workspace.
3. Review current Azure Monitor / Sentinel ingestion pricing and limits. Start with one VM and only the selected Sysmon event IDs. Do not publish tenant, subscription, workspace resource IDs, or credentials.

## 2. Prepare one test VM

Use a dedicated Windows 10/11 or Windows Server VM that you own or are explicitly authorized to administer. Take a snapshot before testing. For an Azure VM, associate it with the DCR. For a non-Azure VM, use the currently supported Azure Arc onboarding path before deploying AMA. Do not install agents on an employer-managed system without authorization.

## 3. Install Sysmon locally

Download Sysmon from [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon). Copy `config/sysmon/sysmon-lab.xml` to the VM. From an elevated terminal in the directory containing `Sysmon64.exe` and the XML file:

```powershell
.\Sysmon64.exe -accepteula -i .\sysmon-lab.xml
```

Verify local event collection:

```powershell
Get-WinEvent -LogName 'Microsoft-Windows-Sysmon/Operational' -MaxEvents 10 |
  Select-Object TimeCreated, Id, ProviderName, Message
```

Open PowerShell and run `whoami` to generate a harmless process event. Confirm Event ID 1 appears locally.

## 4. Create the Sysmon Windows Event Logs DCR

In Azure Monitor, create a Data Collection Rule (DCR):

1. Choose **Windows Event Logs** as the data source.
2. Select the **Custom** event collection option.
3. Add this XPath query as one line:

```text
Microsoft-Windows-Sysmon/Operational!*[System[(EventID=1 or EventID=3 or EventID=11 or EventID=12 or EventID=13 or EventID=22)]]
```

4. Associate the DCR with your Windows test VM.
5. Set the Azure Monitor Logs destination to the Log Analytics workspace where Sentinel is enabled.
6. Save and allow time for data to arrive.

The generic Windows Event Logs DCR uses the `Microsoft-Event` stream and sends Windows event data to the `Event` table. This XPath limits collection to event IDs configured in the starter Sysmon XML.

## 5. Configure Windows authentication events separately

In Microsoft Sentinel, open Data connectors and select **Windows Security Events via AMA**. Follow its current connector instructions to configure the DCR and collect the Security events needed for this lab. The failed-logon query requires Security Event ID 4625 (Audit Failure).

This connector writes Windows Security events to `SecurityEvent`. Do not assume a generic Windows Event Logs DCR writes to the same table.

## 6. Verify ingestion in Sentinel Logs

### Sysmon events in Event

```kusto
Event
| where TimeGenerated > ago(30m)
| where EventLog =~ "Microsoft-Windows-Sysmon/Operational"
| summarize Events = count() by EventID
| order by Events desc
```

Expected: rows for events actually generated on the VM. If empty, check the local channel, AMA status, DCR association, exact XPath channel name, workspace destination, and time filter.

### Failed logons in SecurityEvent

```kusto
SecurityEvent
| where TimeGenerated > ago(30m)
| where EventID == 4625
| summarize Events = count() by Computer
```

Rows appear only if failed logons were generated and the connector collects them. Do not intentionally create repeated failures against a real account. Use a dedicated test account in the isolated VM if you need to exercise this detection.

## Troubleshooting

- Sysmon Operational channel has local events.
- AMA is installed and running.
- Test VM is associated with the intended DCR.
- DCR uses the exact channel name and a valid XPath query.
- DCR destination is the Sentinel Log Analytics workspace.
- Windows Security Events via AMA is configured separately for Security events.
- The query time range includes the event timestamps.
- KQL table and column names match the selected collection path.

## Official references

- [Collect Windows events with Azure Monitor Agent](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/data-collection-windows-events)
- [Windows Security Events via AMA](https://learn.microsoft.com/en-us/azure/sentinel/data-connectors/windows-security-events-via-ama)
- [Windows security event sets for Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/windows-security-event-id-reference)
- [Sysmon documentation](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
