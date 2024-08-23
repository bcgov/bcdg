# Transition Guides

The IDIR guide offers more detailed information about IDIRs and how they relate to the mandatory SSO feature on 'bcgov' and 'bcgov-c'. If there’s a topic isn’t covered in the guide, please submit a ticket on our [service manager](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

We published an SSO overview [on DevHub](bc-government-organizations-in-github.md#single-sign-on-is-coming-to-the-bc-governments-github-organizations).

## IDIR Guide

### Compatible IDIRs for SSO

Our organization has many different types of IDIRs, such as:

- Primary IDIRs for employees
- Secondary IDIRs for testing
- Generic IDIRs linked to shared inboxes
- Contractor IDIRs

For SSO, we focus on 2 types of IDIRs:

- Primary IDIRs for employees
- Contractor IDIRs
 
### Primary IDIRs for employees
B.C. Government employees have the default configuration compatible with SSO. [DevHub has instructions to link your IDIR to GitHub](bc-government-organizations-in-github.md#single-sign-on-is-coming-to-the-bc-governments-github-organizations).
 
### Compatible IDIRs for contractors
If a user is a contracted worker, then the process may be more complex depending on IDIR types. The table below gives an overview between P2 and E5, IDIRs compatible with the GitHub SSO feature.
We don’t foresee any technical issues with SSO if contractors have either IDIR type. If this isn’t the case, please fill out a form to open a ticket on [service manager](https://citz-do.atlassian.net/servicedesk/customer/portal/2).
 
P2 and E5 IDIR comparison
Column 1 lists IDIR features, column 2 has P2 features, and column 3 has E5 features.
 

|                     | P2 IDIR       | E5 IDIR       |
|---------------------|---------------|---------------|
| Cost                | $2 per month  | $57 per month |
| Office 365 license  | No            |  Yes          |
| Expiry date         | Yes           |  Yes          |


Please see [Service Bulletin 1350](https://ociomysc.service-now.com/sp?id=kb_article&sys_id=7a69f65fdbff9d10fa86193813961978&spa=1) for more information.

Contract managers must keep expiry dates updated because our team doesn’t have the ability to submit orders on behalf of ministries. 

It’s very likely contractors already with IDIRs have P2. If linking doesn't work, please call 7-7000 or open a ticket to confirm through [MyService Centre](https://ociomysc.service-now.com/sp?id=ocio_sr_incident_management).
 
### Contractors without IDIRs
Each ministry has an authorized user who submits orders in [MyService Centre](https://ociomysc.service-now.com/sp?id=ocio_sr_incident_management). Please reach out to them as soon as possible to order an IDIR.

## Multiple IDIRs.

Developers with multiple IDIRs can join their most permanent IDIR to their GitHub ID. They can change IDIRs at any time. We tested and can confirm that users make changes on their own.

The important things to keep in mind are:

- The IDIR must not be expired
- Our team cannot manage IDIR expiry dates
 
If you don’t see information that could be helpful on this guide, please let us know through [our service manager](https://citz-do.atlassian.net/servicedesk/customer/portal/2).

## Technical Guide

Our technical guide helps GitHub users prepare for the SSO feature, and confirms if users completed joining successfully. [Our IDIR guide](#idir-transition-guide) offers more details about IDIRs. 

Users cannot access the bcgov GitHub organization if they don't join their GitHub ID and IDIR. There are mechanisms in the system that force an IDIR login when you use your GitHub to login. 

### Validating authentication

GitHub doesn't offer users a screen to confirm authentication. There are 2 alternative ways to validate joining GitHub IDs and IDIRS: 

1) The video below shows the process from start to finish. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cfhUY_or8s?si=q0pjaxYd4FBhNZ0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2) Another way to validate joining: 

> 1. (**Mandatory step**) Go to https://github.com/bcgov/ 
> 2. Got to your profile by clicking your avatar on the top right
> 3. Click "Settings"
> 4. Click "[Sessions](https://github.com/settings/sessions)"
> 5. Click "See more" button for the current web session
> 6. If you're authenticated, GitHub will show details of your current session, inclusive of your device, your last login location, and when you last signed in. Clicking on the three dots by the "Your session expires" section will display the NameID from the linked IDIR. We've included a screenshot as an example:


![Screenshot of a user's current session's SSO details on GitHub. It shows the user's device, their last location, and when they last signed in. At the bottom, it says "You signed in to bcgov via your SSO IdP. Your session expires tomorrow." The word "bcgov" links to the organization.](../images/GitHub-Current-Session-SSO-Details.png)

### Outside Collaborators

Government employees and contractors can be outside collaborators. We're ending the option to add [outside collaborators](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization). GitHub will send invitations to current outside collaborators to become full members on 'bcgov', and IDIRs are needed. If you need an IDIR, please follow the instructions on [our IDIR guide](#idir-transition-guide).

## ZenHub

If you lost access to ZenHub during linking, please follow these directions to re-authenticate: 

1. Log out of Zenhub
1. Revoke Zenhub as an authorized OAuth app from your GitHub account.
  1. Refer to [GitHub's documentation for details on how to revoke an OAuth app](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps).
1. Log out of GitHub
1. Clear browser cache and cookies
1. Completely close and reopen your browser
1. Log back into GitHub
1. Log back into Zenhub using "Continue with Github"

If needed, Zenhub has [more support](https://help.zenhub.com/support/solutions/articles/43000636925-re-authenticating-zenhub-if-your-team-is-using-saml) available.

### IDIRs

### P2 IDIR login 

Vendors using both **P2 IDIRs** and external emails (e.g. ggg123@gmail.com) must log in with **\<IDIR\>@gov.bc.ca**.

#### IDIR expiry

Government employees don’t have expiry dates on their IDIR, only contractor IDIRs do. If you’re a contractor and your IDIR expires, then you won’t have general access anymore. Each ministry must manage contractor IDIRs because our team doesn’t have the capability to change expiry dates.

[Our guide about IDIRs](#idirs) has more relevant information.

#### Multiple IDIRs

Developers with multiple IDIRs can link their most permanent IDIR to their GitHub ID. They can change IDIRs at any time. We tested and can confirm that users make changes on their own.

The important things to keep in mind are:

- The IDIR must not be expired
- The Developer Experience team cannot manage IDIR expiry dates for teams

### No new GitHub ID needed

GitHub differs from other tools that use IDIR as the user account to access services.

The reason is due to GitHub’s open source code community ecosystem. A part of our commitment to open government is the bcgov GitHub organization. We set up GitHub accounts to be associated with many different repositories and organizations because throughout their careers, developers contribute to many different open projects and organizations.

With the GitHub SSO upgrade, contractors and developers working in the bcgov GitHub organization will continue to use their GitHub to login to access GitHub. The extra step is the prompt to login to IDIR to comply with security policies. 

### Resetting GitHub Keys

VS Code users get prompts automatically. If you don’t use VS Code, there are 3 GitHub guides that can help:

- [About authentication with SAML SSO](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on#about-authorization-of-ssh-keys)
- [Authorizing a personal access token for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)
- [Authorizing an SSH key for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on#authorizing-an-ssh-key)
- Authorizing the `gh` cli tool: reauthenticate your linked github account with `gh auth login` and following the steps in your terminal

### GitHub bcgov organization removal

We continue to work towards connecting IDIR expiry to automatic account removal.
