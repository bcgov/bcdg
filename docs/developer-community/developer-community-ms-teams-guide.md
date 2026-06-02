# Developer Community Microsoft Teams guide

## Purpose of this guide

This guide explains how the [Developer Community](https://teams.microsoft.com/l/team/19%3A6bffce0ac7aa47a1ba9f6d9a7e898db9%40thread.tacv2/conversations?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) on Microsoft Teams works, who it is for and how service or product teams can request new public channels through the Developer Experience (DevX) team.

It replaces the previous Rocket.Chat guidance.

### Who this is for

This space is for service or product teams who need to collaborate with developers and platform users, and foundational technologies in B.C. government through tools or services.

Typical use cases include:

* Supporting adoption of service from common components, platforms and other services
* Providing a shared space for community chats, questions and updates

Coordinating between developers and service or product delivery teams.

### Who this is not for

This space is not intended for:

* One-off project chats
* Private team or only internal collaboration
* Channels with a short-term lifespan

If your use case does not clearly support a developer service or developer audience, your request may be declined.

## How the Developer Community is structured

### Team owners

DevX maintains ownership of the Developer Community Microsoft Teams team.

DevX team is responsible for:

* Overall governance of the Team: Developer Community
* Approving new public channels. Product and Service teams can request new channels  
* Managing naming standards and structure
* Archiving or removing channels when no longer needed
* Adding or removing [moderation settings](https://support.microsoft.com/en-us/office/change-moderator-roles-and-settings-in-a-channel-in-microsoft-teams-6ac54758-3440-4f6a-9bd5-cebf97cb7ea6) capabilities for certain channels (e.g. [OpenShift-alerts](https://teams.microsoft.com/l/channel/19%3A2466087e039143fbb5258ec96ad65fab%40thread.tacv2/OpenShift-alerts?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc))

### Service team channels 

Each public channel has a dedicated service team supporting it. 

Service teams are responsible for:

* Day-to-day moderation of the channel
* Posting clear and up to date channel descriptions and pinned guidance
* Keeping conversations relevant and on topic
* Responding to questions from the community
* Letting DevX know when a channel should be archived
* More information on [moderation and community management](../developer-community/participation-guidelines.md#moderation-and-community-management)

### Channel members

Members include any internal B.C. government individuals who join the channel.

Members are encouraged to:

* Search before posting questions
* Keep discussions professional and inclusive
* Use threads and reactions to reduce noise

## How to request a new public channel

DevX provides a self-service request process for creating new public channels in Microsoft Teams.

### Step 1: Review existing channels

Before requesting a new channel, review the [Developer Community Channel Directory](https://bcgov.sharepoint.com/teams/Developercommunity) to avoid duplication. If a suitable channel already exist, join it instead of creating a new one.

### Step 2: Submit a request

All new public channels must be requested through Jira Service Management JSM form.

!!! abstract "New public channel" 
    You can request a new public channel in the Developer Community by submitting this [form](https://citz-do.atlassian.net/servicedesk/customer/portal/2/group/9/create/528)

In the form, you will be asked to provide:

* Preferred name for the public channel
* Channel description and links to any supporting documentation to include in your channel description or support information so it can be added as a channel tab
* Service team and channel owner(s): Product owner and technical lead as contact names
* If a channel supports a critical application and its public name for example: BC Services Card, BC Wildfire Mobile App, etc.
* If a channel requires any webhook support to post to Microsoft Teams
* The webhook integration's purpose
* If [moderation settings](https://support.microsoft.com/en-us/office/change-moderator-roles-and-settings-in-a-channel-in-microsoft-teams-6ac54758-3440-4f6a-9bd5-cebf97cb7ea6) need to be turned on for the channel

### Step 3: DevX review and setup

DevX reviews requests to ensure they:

* Align to the Developer Community's purpose
* Do not duplicate existing channels
* Meet governance and naming standards
* Support information is available to all members to reach out the service or product team
* Add channel to the [Developer Community Channel Directory](https://bcgov.sharepoint.com/teams/Developercommunity)

Once approved or [declined](../developer-community/acceptance-criteria.md#guidance-when-a-request-is-declined). You will be notified through the same ticket.

## Channel naming guide

This guide explains when creating a new channel: 
```<ServiceOrProduct>-<purpose>-<optional specialized topic>```

### Service or Product (required)

Choose the service, product or platform the channel belongs to. This prefix helps group related channels come together and should be as specific as possible.

A channel may represent a service or product with multiple words, use Pascal Case and remove spaces.

In most cases, this will be a single service, product or platform name like OpenShift, GitHub, CloudAWS.

#### Readability exception

In some cases, strict adherence to ```<ServiceOrProduct>-<purpose>``` can reduce readability, especially when long or compound names are involved.

For example, ProgramServicesAPI is difficult to scan and understand at a glance. In this case reversing the service name order improves clarity and discoverability as API-ProgramServices.

If readability is not improved, follow the standard naming structure.

Examples:

* Cloud AWS to CloudAWS
* Platform Product Registry to PlatformProductRegistry

### Defined purpose (required)

Describe the main use of the channel with a clear, short purpose.

Common purposes include:

* **howto** - Supports questions and guidance
* **operations** - Operational and administration discussions related to running and maintaining a service
* **alerts** - Notices, maintenance updates and planned outages
* **emergencyhelp** - Urgent issues only
* **training** - Training related support
* **communitychat** - Usually only used for non-service channels like General-communitychat-kudos

For self-paced training, use hyphenated purposes such as training-selfpaced.

### Specialized topic (optional)

Add this only when the channel focuses on a specific tool, feature or capability within the service.

Examples include:

* OpenShift-howto-crunchydb
* OpenShift-howto-emerald
* OpenShift-operations-security

If the channel covers the service broadly, do not add a specialized topic.

### Rule of thumb

Channel names sort automatically alphabetically in Microsoft Teams, so related channels naturally group together. Order always matters.

```<ServiceOrProduct>-<purpose>-<optional specialized topic>```

This makes it easier for members to scan the channel list and find what they need.

### Accessibility guidelines

To support accessibility and clarity:

* Use plain text only
* Do not use emojis or symbols in channel names
* Convey meaning through clear words
* Keep the service or product prefix first
* Avoid decoration or other formats to maintain consistency

## Channel descriptions

Every channel must include a description. Your description should explain:

* What the channel is for
* What should be posted here
* What should not be posted
* Any expectations around urgency or behaviour
* Links in the description do not appear formatted properly. It is best to add linked resources as new tabs in the channel

## Channel description template

**Purpose:**
This channel is for (description goes here)

**Post here when:**

* Appropriate use case
* Another use case
* Another use case

**Do not use this channel for:**

* Content that does not belong
* Sensitive or confidential information

**Notes:**

* This is a public channel

## Channel description example

**Purpose:**

This channel is for support, questions and guidance for the **service name**.

**Post here when:**

* You need help using the platform
* You have questions about features or workflows

**Do not use this channel for:**

* Production incidents
* Confidential or sensitive information

**Notes:**
Submit a production incident request by following the tab: Report production incident in the channel.

## Next steps

* Review the [Acceptance criteria of public channels in Developer Community](../developer-community/acceptance-criteria.md)
* Review the [Developer Community participation guidelines](../developer-community/participation-guidelines.md)
* [Microsoft access for contractors](../developer-community/ms-teams-contractors-access.md)