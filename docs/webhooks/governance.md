# Webhook and workflow governance

Relay is the Developer Experience (DevX) developed app that provides messaging functionality in Microsoft Teams.

It has two principal components:  

1. An API service that validates incoming data and then posts messages to MS Teams
2. A MS Teams app installed on a per-Team basis that functions as a credential for the API

The ability to install the MS Teams app is restricted by security group membership.

This document outlines the governance model and responsibility boundaries for Relay, including app ownership, workflow platform dependencies, support expectations and client responsibilities.

## Responsibilities
### DevX Team
The **DevX team** is responsible for:

* Developing and maintaining Relay application code
* Supporting the Relay API hosted in the OpenShift Gold DR environment
* (dbl check this) Maintaining connectivity to the DevX instance of the workflow service, provided by the Workflows team
* Onboarding clients and managing security group membership
* Maintaining support material including:
  * Keeping support scripts with 77000 service desk current
  * Relay-specific support and user education for workflow integration
  * Related web content on DevHub (developer.gov.bc.ca)

### Digital Workplace team
The **Digital Workplace team** is responsible for:

* Maintaining MS Teams as an enterprise core service
* Gatekeeping, publishing and updating Teams apps, including the Relay app

### Workflows team
The **Workflows** team is responsible for:

* Maintaining the underlying workflow service used by Relay
* Providing and supporting the DevX instance of the workflow service with high availability
* Providing general support and user education for the workflow service
* Supporting DevX team as needed to maintain end-to-end webhook functionality in Teams

### Relay users and clients
**Relay users and clients** are responsible for:

* Maintaining their product listing and keeping current contacts with the DevX team’s client listing
* Using Relay only for agreed-upon Teams and channels, in collaboration with DevX team
* Maintaining their own workflows in the workflow service
* Ensuring webhook payloads and workflow logic are appropriate for the intended Teams channel

## Support model

Relay support follows a shared responsibility model.

The DevX team provides support for Relay onboarding, API service, Teams webhook integration and Relay troubleshooting.

The Workflows team provides support for the underlying workflow platform, including workflow service availability, platform issues and general workflow guidance.

Relay users are responsible for maintaining their own workflow logic, validating payloads from source systems and ensuring messages are posted only to approved Teams channels.

Issues that cannot be neatly attributed to a single area should be triaged collaboratively by DevX and Workflows.

## Related information 

* [Onboarding guide: Microsoft Teams webhook integration](../webhooks/msteams-webhooks.md)
* [Install Relay and create your first workflow](../webhooks/create-workflow.md)
* [Troubleshooting webhook guide](../webhooks/troubleshooting.md)

