# FAQ: Microsoft Teams Webhook Integration


## 1. How do I get access to the n8n instance?

- [Open a ticket](https://citz-do.atlassian.net/servicedesk/customer/portal/2/group/9/create/561) to request access to the Relay app and the [https://n8n.developer.gov.bc.ca](https://n8n.developer.gov.bc.ca/) instance.


**Important:**
- You may need to log in once to [https://n8n.developer.gov.bc.ca](https://n8n.developer.gov.bc.ca/) before roles can be assigned

## 2. How are n8n workflows and webhooks managed across a team?

**Current limitation:**
- n8n is running on the Community (free) edition
- Each workflow is owned by one individual and tied to their personal workspace
- Workflows cannot be shared

**Workarounds:**
- Export the workflow as a JSON file
- Import it into another user's workspace
- After import:
  - Fix webhook path conflicts
  - Recreate credentials (they are not shared)
- Admins can export and recreate workflows for another user in urgent situations

**Is this long-term?**
- No decision yet on an Enterprise license

**How was this handled in Rocket.Chat?**
- Rocket.Chat webhooks were generally only manageable by the creator
- In some cases, multiple channel admins could manage them, but this was considered an edge case

## 3. Can we create and manage workflows using a team mailbox instead of an individual account?

Yes

**Setup:**
1. DevX or Workflow team will add the team mailbox IDIR email to the n8n workspace
2. Export workflows from personal accounts
3. Import them into the team mailbox account

**Things to watch out for:**
- Webhook paths can conflict and must be reviewed
- Old workflows need to be unpublished and the new workflows published. Simply deleting old workflows does not remove them.
- Credentials must be recreated

## 4. Is there documentation on how to finish or complete webhook workflows?

Yes. Documentation is available, and common patterns are supported.

- To replicate an old Rocket.Chat webhook:
  - You usually only need two nodes:
    - Webhook
    - DevX Message Connector
- If the Rocket.Chat webhook used scripts for processing:
  - Add a Code node between the Webhook and DevX Message Connector.
- The DevX Message Connector:
  - Is a custom n8n node
  - Translates incoming webhook data
  - Sends the message to the Teams Relay app
- The target Teams channel is configured via the DevX Message Connector credentials by pasting the full Teams channel URL.

**Official documentation:**
https://github.com/bcgov/common-hosted-workflow/blob/main/docs/workflow-instructions/devx-teams-message.md

## 5. How do I install the Relay app on a MS Teams channel?

- [Open a ticket](https://citz-do.atlassian.net/servicedesk/customer/portal/2/group/9/create/561) to request access to the Relay app and the [https://n8n.developer.gov.bc.ca](https://n8n.developer.gov.bc.ca/) instance.
- It can take up to 24 hours for the security group permissions to be applied
- The app will not appear at all until security group access is applied
- After the permissions are applied:
  - Click the "Apps" button in MS Teams side menu
  - Click "Add" on the Relay app
  - Select which channel(s) where the app should be installed

![A screenshot of the MS Teams app. The "Apps" menu is located on the bottom of the left side menu. It is circled in red in this screenshot. The Relay app appears in the main panel of MS Team. It is located under the "Built for your organisation" section. The relay app's icon is a chat bubble with the word "Relay" in the bubble. The relay app is also circled in red in the screenshot. ](../images/relay_app.png)

## 6. I get "permission denied" when adding the Relay app to a Teams channel. What should I do?

- You need to be an owner of the Team to install the app
- Ask the team owner to install the app

## 7. Why don't I see the Relay app in Microsoft Teams?

- You must be in the Relay app security group
- It may take up to ~24 hours after being added to appear

**If still not visible:**
- Restart Teams
- Clear Teams cache

## 8. How do I set the Teams channel URL in the DevX Message Connector node?

- In n8n Double click on DevX Message Connector node
- Click the "Credential" drop down box
- Select the "+ Create new credential" option
- In MS Teams click on the three dots next to your channel name and select the copy link option
- Paste in the link to your Teams channel
- Save and exit
- Rename the credential to reflect the actual channel name to avoid confusion

## 9. What is the difference between the Test URL and Production URL for webhooks?

**Test URL**
- Active when:
  - Clicking "Listen for test events"
  - Clicking "Execute workflow"
- Used for interactive debugging
- Execution is visible in the editor

**Production URL**
- Only active after publishing
- Runs as a background job
- Intended for real integrations

**Preview Mode**
- Used to review generated message payload
- Does not send messages to Teams
- Only used for testing

**Best practice:**
- Use Preview Mode and Test URL during development
- Use Production URL once the workflow is finalized

## 10. Can Test and Production URLs be used to separate Prod and Non-Prod notifications?

Not directly—but separation is still possible and recommended.

**Best practice:**
- Create separate Teams channels for:
  - Production alerts
  - Non-production alerts
- Create separate workflows/webhooks for each
- Publish both and configure sources to use the appropriate Production URL

## 11. Is the Relay app open source?

Short answer: Partially.

- The Relay app itself is a Microsoft Teams manifest file stored in a private repository in bcgov-c.
- The DevX Message Connector API is open source and available on GitHub:
  - https://github.com/bcgov/devx-teams-connector

## 12. Can the DevX connector send mentions (@user, @group)?

- No, this is not currently supported
- The Relay service does not process mention attributes
- Simply including @user text will not trigger a notification
- Proper mentions require Graph API structures not currently implemented

## 13. Why am I seeing payload or JSON errors?

**Examples seen during testing:**
- "Converting circular structure to JSON"
- "Cannot read properties of undefined (reading 'severity')"

**Common causes:**
- Payload format not matching expected schema
- Missing fields
- Empty payloads from test integrations

**Recommended approach:**
- Inspect payload in n8n Executions tab
- Use Code node to transform payload

## 14. Why does my workflow work in test mode but fail in production?

**Possible causes:**
- Payload differences between test and real events
- Workflow not published
- Relay app not installed in target channel

## 15. How do I test webhooks without triggering real systems?

Use curl, Postman etc to simulate payloads.

Example:

```bash
curl -X POST https://n8n.developer.gov.bc.ca/webhook/<your-id> \
-H "Content-Type: application/json" \
-d '{ 
  "Name":"My service",
  "Status":"Down",
  "StatusCode":"503"
}'
```

## 16. Are all Teams channels pre-configured with the Relay app?

- No
- You are responsible for installing Relay on your channels

## 17. Why are integrations like Sysdig or StatusCake failing?

**Common issues:**
- Empty or non-standard payloads
- Different formats between test payload and real payload
- Timestamp formatting issues

**Examples:**
- Sysdig may send blank payloads by default
- Test payloads may differ from real alerts

**Solutions:**
- Use standard payload templates where available
- Use Code node to map payloads to expected structure

## 18. Why does Preview show success but no message appears in Teams?

- Preview mode does not send messages
- It only shows the formatted payload

**To send messages:**
- Switch to Send mode
- Ensure workflow is published
