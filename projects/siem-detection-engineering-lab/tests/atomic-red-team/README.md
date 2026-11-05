# Controlled Atomic Red Team validation

## Safety and scope

Run this procedure only on a disposable Windows VM that you own or are explicitly authorized to test. Take a snapshot first. Never run it on a work laptop, production system, or third-party endpoint.

This starter selects the benign **PowerShell Command Execution** test under **T1059.001**. The upstream Atomic Red Team definition describes the default command as obfuscated PowerShell that prints `Hello, from PowerShell!`. It does not require credential access, persistence, exploitation, or a remote payload download. Always read the upstream Markdown definition before executing; test contents can change.

## Install the execution framework

Open PowerShell as your normal lab user:

```powershell
Install-Module -Name invoke-atomicredteam,powershell-yaml -Scope CurrentUser
```

If prompted about a repository, verify that it is the PowerShell Gallery before accepting. Import the module in the current session if needed:

```powershell
Import-Module Invoke-AtomicRedTeam
```

## Inspect the test before running

- [T1059.001 — upstream Atomic test definitions](https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1059.001/T1059.001.md)
- [Invoke-AtomicRedTeam getting started](https://www.atomicredteam.io/docs/invoke-atomicredteam/getting-started)

List the test and check prerequisites:

```powershell
Invoke-AtomicTest T1059.001 -ShowDetails
Invoke-AtomicTest T1059.001 -TestNames "PowerShell Command Execution" -CheckPrereqs
```

Do not continue if the current upstream test description or command differs materially from the benign behavior described above. Do not select other tests under the same technique for this starter run.

## Run the benign test

After confirming the VM is isolated and the selected test is still the benign command-execution test:

```powershell
Invoke-AtomicTest T1059.001 -TestNames "PowerShell Command Execution"
```

Expected local output in the upstream definition: `Hello, from PowerShell!`. The test is intended to create a PowerShell process with an encoded command-line argument. If Sysmon Event ID 1 is collected and delivered, the KQL query `detections/kql/01-suspicious-powershell-encoded-command.kql` should be able to surface it.

## Verify the detection

1. Verify a matching Event ID 1 record in the local Sysmon Operational channel.
2. Verify that the record arrived in Sentinel's Log Analytics `Event` table.
3. Run the KQL query.
4. Compare timestamp, host, user, and command-line evidence with the test time.
5. Record actual results in `evidence/validation-log.csv`.

Local command completion is not a Sentinel detection pass. Mark **PASS** only when expected telemetry arrived and the query or analytic rule returned the matching event.

## Cleanup and evidence

This selected test is documented as simple command execution and has no cleanup command in the upstream definition. Close the test PowerShell session and revert the VM snapshot after completing evidence collection. If you select a different test later, read and execute that test's specific cleanup steps.

Capture the upstream test name/details, local Sysmon Event ID 1, matching Sentinel `Event` row, KQL result, timestamp, and any query tuning. Redact tenant/subscription/workspace IDs, public IPs, real usernames, machine names, and private information before publishing.
