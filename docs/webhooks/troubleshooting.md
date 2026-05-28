# Troubleshooting

This guide addresses common issues encountered when integrating the Relay app and n8n workflows. It covers workflow execution failures, message delivery problems, and payload format mismatches. Use this reference to diagnose and resolve issues. 

If you have an issue not described here:

* Ask in the [Relay-howto](https://teams.microsoft.com/l/channel/19%3A0ede3fda07ed4c6baedddc729574b668%40thread.tacv2/Relay-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) channel
* Open a PR for this page by clicking the edit button (the page and pencil icon) next to the "Troubleshooting" title above.


## n8n troubleshooting

### View executions

The executions tab lists the status of your workflow runs. Click on an entry to learn more details about the run.

![A screenshot of the n8n overview screen. There are 5 tabs: Workflows, Credentials, Executions, Variables, Data tables. The Executions tab is active. It shows a list of workflow runs. There are two runs order in descending timestamp. The most recent workflow was sucessful, indcated by a checkmark in a green cirle. and the word success under the status column. The other workflow has a status of Error with an 'x' in a red circle.](../images/n8n-executions.png)



### Workflow works in test but fails in production

Possible causes:

* Workflow has not been published
* Production events differ from test payloads
* Relay app is not installed in the target Teams channel

### Integration failures (Sysdig, StatusCake and similar systems)

Common issues:

* Empty payloads
* Non-standard payload formats
* Timestamp formatting differences
* Test payloads may differ from production alerts

Examples: 

* Sysdig may send blank payloads by default
* Test alerts often differ form real event payloads

Recommended solutions:

* Use standard payload templates where available
* Normalize payloads using a Code node
* Explicitly map incoming fields before sending to DevX Message Connector

#### Sysdig

You can either:

1. use the legacy webhook option in sysdig
1. transform the normal (non legacy) webhook schema into what the Connector expects with the SysDig template:

```JavaScript
const raw = $input.first().json.body ?? $input.first().json;
const labels = raw.labels || {};

const sevMap = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, WARNING: 3, LOW: 4, INFO: 6 };
const severityNum = sevMap[(raw.severity || '').toUpperCase()] ?? 6;

const namespace = labels.kube_namespace_name || '';
const isProd = namespace.endsWith('-prod');

const body = {
  alert: {
    severity: severityNum,
    name: labels.alertname || raw.title || 'Alert',
    state: (raw.state || '').toLowerCase(),
    description: raw.description,
    scope: namespace,
    editUrl: raw.alert_link,
  },
  timestamp: raw.triggered_at ? parseInt(raw.triggered_at) : undefined,
};

return { json: { isProd, body } };
 
```
Then the payload becomes `{{ $json.body }}` in the connector node.

### Preview shows success but no Teams message
Preview mode does not send messages. It only displays formatted output and is intended for testing. 

To send messages:

* Switch to Send mode
* Publish the workflow
* Test using Production URL if validating deployed behaviour


### Failed to generate message content

* Does the `Payload` field of the DevX Message Connector match what is expected by the `Template` and `Source` fields? 
  * Refer to [DevX Teams Message](https://github.com/bcgov/common-hosted-workflow/blob/main/docs/workflow-instructions/devx-teams-message.md) documentation for details on what is expected for the various template types.

### Payload and JSON errors

Examples:

* Converting circular structure to JSON
* Cannot read properties of undefined (reading 'severity')

Common causes:

* Payload schema does not match expected format
* Missing required fields
* Empty payloads from test integrations
* Invalid or unexpected payload structures

Recommended solution:

1. Open the [Executions](#view-executions) tab in n8n
1. Inspect the incoming payload
1. Verify required fields exist
1. Add a Code node to transform or normalize payloads


## Relay app troubleshooting

### Relay app not visible

* Ensure you are in the Relay security group
* Wait up to 24 hours for propagation
* Restart Teams or clear cache if needed

### Permission denied when installing

* You must be a Team owner 
* Ask a Team owner to complete installation 

### Relay app behaviour and limitations

**Mentions** (@user, @group)
Mentions are not currently supported. 

Limitations:

* Relay does not process mention attributes
* @user text will not trigger notifications
