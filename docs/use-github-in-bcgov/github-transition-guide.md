# IDIR and technical guide for SSO

The [B.C. Government organizations in GitHub doc](bc-government-organizations-in-github.md#single-sign-on) has an overview of Single Sign-On (SSO). Please read that section before reading these transition guides because the guides are supplementary material. 

The transition guide doc hosts two guides:

- [**IDIR Guide**](#idir-guide): has more detailed information about IDIRs and how they relate to the mandatory SSO feature on `bcgov` and `bcgov`.

- [**Technical Guide**](#technical-guide): helps GitHub users prepare for the SSO feature, and confirms if users completed joining successfully

 If there’s a topic isn’t covered in the guide, please [submit a support request on our Jira Service Manager system](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

## IDIR Guide

### Compatible IDIRs for SSO

Our organization has many different types of IDIRs, such as:

- Primary IDIRs for employees
- Secondary IDIRs for testing
- Generic IDIRs linked to shared inboxes
- Contractor IDIRs

For SSO, we use 2 types:

- Primary IDIRs for employees
- Contractor IDIRs
 
### Primary IDIRs for employees
B.C. Government employees have the default configuration compatible with SSO. The [B.C. Government organizations in GitHub doc's SSO section](bc-government-organizations-in-github.md#single-sign-on-is-coming-to-the-bc-governments-github-organizations) has instructions to link an IDIR to GitHub IDs.
 
### Compatible IDIRs for contractors
If a user is a contracted worker,  the process may be more complex depending on IDIR types. The table below gives an overview between P2 and E5 IDIRs.
We don’t expect any technical issues with SSO if contractors have either IDIR type. If this isn’t the case, please [submit a support request on our Jira Service Manager system](https://citz-do.atlassian.net/servicedesk/customer/portal/2).
 
#### P2 and E5 IDIR comparison table

Column 1 lists IDIR features, column 2 lists P2 features, and column 3 lists E5 features.
 

|                     | P2 IDIR       | E5 IDIR       |
|---------------------|---------------|---------------|
| Cost                | $2 per month  | $57 per month |
| Office 365 license  | No            |  Yes          |
| Expiry date         | Yes           |  Yes          |


Please see [Service Bulletin 1350](https://ociomysc.service-now.com/sp?id=kb_article&sys_id=7a69f65fdbff9d10fa86193813961978&spa=1) for more information.

It’s very likely contractors already with IDIRs have P2. If linking doesn't work, please call 7-7000 or [open a ticket to confirm on MyService Centre](https://ociomysc.service-now.com/sp?id=ocio_sr_incident_management).

#### IDIR expiry

Government employees don’t have expiry dates on their IDIR. Contractor IDIRs do. 

Once a contractor IDIR expires, the contractor loses general access. Contract managers must keep expiry dates updated. Our team doesn’t have the ability to submit orders on behalf of ministries. 


### Contractors without IDIRs
Each ministry has an authorized user who submits orders in [MyService Centre](https://ociomysc.service-now.com/sp?id=ocio_sr_incident_management). Please reach out to them as soon as possible to order an IDIR.

## Multiple IDIRs

Developers with multiple IDIRs can join their most permanent IDIR to their GitHub ID. They can change IDIRs at any time. We tested and can confirm that users can make changes on their own.

The important things to keep in mind are:

- The IDIR must not be expired
- Our team cannot manage IDIR expiry dates
 
If you don’t see information that could be helpful on this guide, please let us know through [submit a support request on our Jira Service Manager system](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

#### P2 IDIR login 

Vendors using both **P2 IDIRs** and external emails (e.g. ggg123@gmail.com) must log in with **<IDIR>@gov.bc.ca**.

## Technical Guide

Users cannot access the `bcgov` nor `bcgov-c` GitHub organization if they don't join their IDIR and GitHub ID. There are mechanisms in the system that force an IDIR login when using GitHub to login. 

### Validating authentication

GitHub doesn't offer users a screen to confirm authentication. There are 2 alternative ways to validate joining GitHub IDs and IDIRS: 

1) The video below shows the process from start to finish. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cfhUY_or8s?si=q0pjaxYd4FBhNZ0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2) Another way to validate joining: 

> 1. (**Mandatory step**) Go to the [`bcgov`](https://github.com/bcgov/) org. 
> 2. Go to your profile by clicking your avatar on the top right.
> 3. Click "Settings".
> 4. Click "[Sessions](https://github.com/settings/sessions)".
> 5. Click "See more" button for the current web session.
> 6. If you're authenticated, GitHub will show details of your current session, inclusive of your device, your last login location, and when you last signed in. Clicking on the three dots by the "Your session expires" section will display the NameID from the linked IDIR. We've included a screenshot as an example:


![Screenshot of a user's current session's SSO details on GitHub. It shows the user's device, their last location, and when they last signed in. At the bottom, it says "You signed in to bcgov via your SSO IdP. Your session expires tomorrow." The word "bcgov" links to the organization.](../images/GitHub-Current-Session-SSO-Details.png)

### Outside Collaborators

We discontinued the option to add outside collaborators. GitHub explains [more about outside collaborators on their doc](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization). GitHub will send invitations to current outside collaborators to become full members on `bcgov`, and IDIRs are needed. 

To create IDIRs or have more information, please read [the IDIR guide section](#idir-transition-guide) of this doc

All accesses will stay the same. 

### No new GitHub ID needed

GitHub differs from other tools that use IDIR as the user account to access services.

The reason is due to GitHub’s open source code community ecosystem. A part of our commitment to open government is the `bcgov` GitHub org. We set up GitHub accounts to be associated with many different repos and orgs because throughout their careers, developers contribute to many different open projects and organizations.

With the GitHub SSO upgrade, contractors and developers working in the `bcgov` GitHub org will continue to use their GitHub to login to access GitHub. The extra step is the prompt to login to IDIR so we comply with security policies. 

### Resetting GitHub Keys

VS Code users get prompts automatically. If you don’t use VS Code, there are 3 GitHub guides that can help:

- [About authentication with SAML SSO](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on#about-authorization-of-ssh-keys)
- [Authorizing a personal access token for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)
- [Authorizing an SSH key for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on#authorizing-an-ssh-key)
- Authorizing the `gh` cli tool: reauthenticate your linked github account with `gh auth login` and following the steps in your terminal

### GitHub bcgov organization removal

We continue to work towards connecting IDIR expiry to automatic account removal.
