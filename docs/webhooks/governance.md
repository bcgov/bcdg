# Webhook & workflow governance

The DevX team-developed app that provides webhook functionality in MS Teams will be called “Relay”. This is a Teams app (plugin) that is installed on a per Team basis. The ability to install the app will be restricted by security group membership.

## Responsibilities

**DevX** team is responsible for:

* Developing and maintaining Relay app code
* Supporting API in OpenShift Gold DR hosted environment
* Maintaining connectivity to DevX instance of the workflow instance, provided by the Workflows team
* Onboarding clients and managing security group membership
* Maintaining support material including:
 * Keeping support scripts with 77000 service desk current
 * Relay-specific support and user education for workflow integration
 * Related web content on DevHub (developer.gov.bc.ca)

**Digital Workplace** team is responsible for:

* Maintaining MS Teams as an enterprise core service
* Gatekeeping and publishing Teams apps including updates. In this case, specifically the Relay app

**Workflows** team is responsible for:

* Maintaining the underlying workflow service. In this case, specifically the DevX instance with high availability (Gold DR)
* Generalized support and user education for the workflow service
* Supporting DevX team as needed to maintain end-to-end webhook functionality in Teams

**Relay users / clients** are responsible for:

* Maintaining their product listing and keeping current contacts with the DevX team’s client listing.
* Only using the Relay functionality on agreed channels, in collaboration with DevX team
* Maintaining the workflow within n8n
