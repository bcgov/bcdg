# B.C. Government organizations in GitHub

The [Digital Principles for B.C. Government](https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/im-it-management#12.1.1.5) urge product teams to work in the open. GitHub is the leading platform for open-source projects. It lets our organization work with the open-source community to build software, support innovation and save time and money. 

Using GitHub, teams can:

* Collaborate with the open-source community
* Share and control code versions
* Use tools for team and project management
* Integrate automation tools
* Track issues

B.C. Government's main organization is [bcgov](https://github.com/bcgov), where we store open code developed by government teams. It includes projects that have open-source and inner-source contribution models. `bcgov` has over 1000 repositories. 

We also have the `bcgov-c` organization, where developers can store confidential code.

On behalf of the B.C. Government, the Developer Experience Team manages government GitHub environments. For any questions or concerns, please [submit a support request]( https://citz-do.atlassian.net/servicedesk/customer/portal/2).

## Organizations in GitHub

!!! Note

    In July 2024, we enabled [Single Sign-On (SSO)](#single-sign-on) for `bcgov` and in August 2024, `bcgov-c`. To keep access to repositories in the `bcgov` and `bcgov-c` organizations, all users must be authenticated with IDIRs. Contractors and employees without IDIRs must order one before SSO can be enabled. 

We use GitHub Enterprise Cloud, and it hosts the `bcgov` and `bcgov-c` GitHub organizations: 

```mermaid
  graph TD;
A[GitHub Enterprise Cloud] --> B[bcgov]
A --> C[bcgov-c]
```

### `bcgov`

The `bcgov` organization contains public repositories that hold open-source code or public documents developed by B.C. government teams. This organization is **public**.  To align with our Digital Principles, repositories should be hosted in this open repo. The only exception is strong rationale from your Ministry Security Information Officer.

* Any member of the `bcgov` organization can create repositories.

* To join this organization, follow [these instructions](#directions-to-sign-up-and-link-your-account-for-bcgov).

### `bcgov-c`

The `bcgov-c` organization stores private repositories with confidential source code and documents. This repository is **private**.

* Use this repository if you need a location for private code, or if you're working towards making the code public.
* Only the Developer Experience team can create repositories in this organization.
    * Request a repository by [submitting a request](https://github.com/BCDevOps/devops-requests/issues/new?assignees=MonicaG%2C+oomIRL&labels=github-repo%2C+pending&projects=&template=github_repo_request.md&title=).
* To join this organization, follow [these instructions](#directions-to-sign-up-and-link-your-account-for-bcgov-c).


## Single Sign-On 

!!! Warning
    Contractors without an IDIR must follow the steps in the [our guide](github-transition-guide.md#idirs) before proceeding. **Please note** this can take several days to complete depending on your ministry. We recommend doing with this step as soon as possible to avoid access disruptions.  

Learn more about IDIRs and post-authentication steps in [our guide](github-transition-guide.md). 
  
### Directions to sign up and link your account for 'bcgov'

1. Have any two-factor devices, and personal GitHub login and IDIR login ready.
1. Log into GitHub with your personal login. 
1. [Authenticate your IDIR](https://github.com/orgs/bcgov/sso)
1. You'll get an email with an invitation to join the **bcgov** GitHub organization. The invitation will be sent to the email address associated with your GitHub account.
    - Refer to the [troubleshooting](#troubleshooting) section if you didn't receive an email.
1. Your teammates can add you to your team's repositories. We recommend teams use [GitHub teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams) to manage access.
1. [Authorize your personal access tokens and/or SSH keys](github-transition-guide.md#resetting-github-keys).

That’s it, your accounts are now joined. 

[Learn more about IDIRs](github-transition-guide.md). 
 
### Directions to sign up and link your account for 'bcgov-c' 

A similar process applies for 'bcgov-c'.

1. Have any two-factor devices, and personal GitHub login and IDIR login ready.
1. Log into GitHub with your personal login. 
1. [Authenticate your IDIR](https://github.com/orgs/bcgov-c/sso)
1. You'll get an email with an invitation to join the **bcgov-c** GitHub organization. The invitation will be sent to the email address associated with your GitHub account.
    - Refer to the [troubleshooting](#troubleshooting) section if you didn't receive an email.
1. Your teammates can add you to your team's repositories. We recommend teams use [GitHub teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams) to manage access.
1. [Re-authorize your personal access tokens and/or SSH keys](github-transition-guide.md#resetting-github-keys).

That’s it, your accounts are now joined.  

[Learn more about IDIRs](github-transition-guide.md)

#### Video demo'ing joining GitHub ID and IDIR

The video shows the process, starting from the banner link on the `bcgov` GitHub organization, to the end:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cfhUY_or8s?si=q0pjaxYd4FBhNZ0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### SSO timelines for 'bcgov-ent'

For current B.C. Government private organizations part of the legacy `bcgov-ent` Enterprise implementation, we’ll work with your respective Information Management Branches and Information Systems Branches to identify next steps.
 
### Resources 
 
For more supplementary information, please see [our guide](github-transition-guide.md).  
 
For help with access, please [submit a support request]( https://citz-do.atlassian.net/servicedesk/customer/portal/2). 

## Security Insights for GitHub Enterprise-linked organizations

The Security Insight feature is available for all organizations linked to the corporate GitHub Enterprise accounts, as well as branch protection and code owners for private repositories. Branch protection only allows specific people to push to the protected branch. The code owners feature allows automated reviews. For example, if a specific user is a code owner of certain files they are automatically added as PR reviewers and their approval is required before the code can be merged.

## Troubleshooting

### I didn't receive an email invitation to join the bcgov or bcgov-c organization

You can check your organization status and invites:

1. Go to [https://github.com](https://github.com)
1. Sign in with the account used to join the [bcgov](#directions-to-sign-up-and-link-your-account-for-bcgov) or [bcgov-c](#directions-to-sign-up-and-link-your-account-for-bcgov-c) organization
1. Click on your profile picture
1. Choose the "Your organizations" option from the menu
1. Confirm the bcgov and/or bcgov-c organization is listed under the "Organizations" page
1. Click the "Accept" button next to the organization

![Screenshot of a user's organizations. The screen displays the bcgov-c organization with "Member" beside it. Next to it is "Invitation expires in 7 days" with Accept and Decline buttons.](../images/invitation.png)
