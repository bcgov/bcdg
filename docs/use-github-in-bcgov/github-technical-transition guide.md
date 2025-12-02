# IDIR and technical guide for Single-Sign On 

The IDIR guide offers more detailed information about how IDIRs relate to the mandatory Single Sign-On **(SSO)** feature on `bcgov` and `bcgov-c`. If a topic isn’t covered in the guide, please [submit a ticket on our service manager](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

## IDIR Guide

### Compatible IDIRs for SSO
Our organization has many different types of IDIRs, such as:

* Primary IDIRs for employees

* Secondary IDIRs for testing

* Generic IDIRs linked to shared inboxes

* Contractor IDIRs

For SSO, we focus on 2 types of IDIRs:

* Primary IDIRs for employees

* Contractor IDIRs

#### Primary IDIRs for employees

B.C. Government employees have the default configuration compatible with SSO. The [B.C. Government organizations in GitHub](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/bc-government-organizations-in-github/#single-sign-on-is-coming-to-the-bc-governments-github-organizations) doc has instructions to link an IDIR to GitHub.

#### Compatible IDIRs for contractors

The process can be more complicated for contracted workers, depending on IDIR types. The table below gives an overview between P2 and E5 IDIRs. We don’t foresee any technical issues with SSO if contractors have either IDIR type. If this isn’t the case, please [submit a ticket on service manager](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

**P2 and E5 IDIR comparison table** 

Column 1 lists IDIR features, column 2 has P2 features, and column 3 has E5 features.

|                     | P2 IDIR       | E5 IDIR       |
|---------------------|---------------|---------------|
| Cost                | $2 per month  | $57 per month |
| Office 365 license  | No            |  Yes          |
| Expiry date         | Yes           |  Yes          |

Contract managers must keep expiry dates updated because our team doesn’t have the ability to submit orders on behalf of ministries.

It’s very likely contractors already with IDIRs have P2. If linking doesn't work, please call 7-7000 or open a ticket to confirm through [MyService Centre](https://ociomysc.service-now.com/sp?id=ocio_sr_incident_management).

#### Contractors without IDIRs

Each ministry has an authorized user who submits orders in [MyService Centre](https://ociomysc.service-now.com/sp?id=ocio_sr_incident_management). Please reach out to them as soon as possible to order an IDIR..

### Multiple IDIRs
Developers with multiple IDIRs can join their most permanent IDIR to their GitHub ID. They can change IDIRs at any time. We tested and can confirm that users make changes on their own.

The important things to keep in mind are:

* The IDIR must not be expired
* We cannot manage IDIR expiry dates

If there's helpful information that could be added to this guide, please [submit a ticket on service manager](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

## Technical Guide

Our technical guide helps GitHub users prepare for the SSO feature, and confirms if users completed joining successfully. 

Users cannot access  `bcgov` nor `bc-gov-c` if they don't join their GitHub ID and IDIR. There are mechanisms in the system that force an IDIR login when users go through GitHub to login.

### Validating authentication
GitHub doesn't offer users a screen to confirm authentication. There are 2 alternative ways to validate joining GitHub IDs and IDIRS:

1) The video below shows the process from start to finish.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cfhUY_or8s?si=q0pjaxYd4FBhNZ0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2) If users **don't** have the "**Authenticate your account**" button on their dashboards, then authentication is complete.
  
3) Another way to validate linking: 

    1) Go to user profile by clicking the avatar on the top right
    2) Click "Settings"
    3) Click "Enterprises"
    4) Check if a member of "Government of British Columbia
    5) If a member, then authentication has been successful.

    ![image of when user clicks three dots  by the "your session expires"](image.png)

### Outside Collaborators

During the transition to SSO, we ended the option to add outside collaborators.
