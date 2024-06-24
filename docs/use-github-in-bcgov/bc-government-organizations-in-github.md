# B.C. Government organizations in GitHub

Many teams building software for the B.C. government use [GitHub](https://github.com) to host their code. Using GitHub you can:

* Share and control code versions
* Use tools for team and project management
* Track issues
* Collaborate with the open-source community
* Integrate automation tools

The main organization the B.C. government owns in GitHub is [bcgov](https://github.com/bcgov) where we store all open-source code developed by B.C. government teams. The `bcgov` organization includes over 1000 repositories maintained by the B.C. government developer community.

The Developer Experience Team manages the B.C. government's GitHub environments.

## Working in the open

The [Digital Principles for the Government of B.C.](https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/im-it-management#12.1.1.5) urge product teams to work in the open as outlined in principle five. GitHub is the leading platform for open-source projects. It allows the Province to collaborate with the open-source community to build software, support innovation and save time and money.

## Organizations in GitHub

The Province owns several GitHub organizations, which are described below.

| Name | Use for... | User Access Requirements | Cost |
| ---- | ----------- | ----------- | ----- |
| [bcgov](#bcgov) | Repositories should be hosted in this open repo unless you have strong rationale from your MISO otherwise. | GitHub ID | Free |
| [bcgov-c](#bcgov-c) | Code you would like to temporarily host in a closed repo, before moving into the bcgov org. | GitHub ID | Covered by OCIO for up to 12 months |

### `bcgov`

The `bcgov` organization contains public repositories that hold open-source code or public documents developed by B.C. government teams. This organization is **public**.

* Product teams working in the B.C. Gov Private Cloud PaaS OpenShift platform should use this organization unless they are given permission to work in [`bcgov-c`](#bcgov-c).
* Any member of the `bcgov` organization can create repositories.
* Existing members of the `bcgov` organization can invite new users to join the organization using the [Just Ask! tool](https://just-ask.developer.gov.bc.ca/). (***Users requesting membership to `bcgov` for themselves will be reviewed and may be declined***) 

### `bcgov-c`

The `bcgov-c` organization stores temporary (up to 12 months), private repositories with closed-source code and private documents. Closed-source projects must be moved to the `bcgov` organization at the end of the 12 months. This repository is **private**.

* Use this repository if you need a temporary location for code while you collect approvals to make the code public. You must commit to making the code public in the future in order to use this repository.
* Only the Developer Experience team can create repositories in this organization. You can request a repository by [submitting a request](https://github.com/BCDevOps/devops-requests/issues/new?assignees=MonicaG%2C+oomIRL&labels=github-repo%2C+pending&projects=&template=github_repo_request.md&title=).

Your product team can only have a **permanent**, private repository in `bcgov-c` if it is a GitOps repository with ArgoCD manifests. 


## Single sign-on is coming to the B.C. government’s GitHub organizations

We're enabling single sign-on (SSO) for GitHub. We’re starting with the bcgov GitHub organization. After we finish transitioning bcgov, we’ll enable other OCIO-managed GitHub organizations. 
  
To keep access to the bcgov GitHub organization, all users must link their IDIRs to their GitHub IDs between **June 30 and July 30, 2024**. If users don’t complete this by July  30, 2024, they’ll be automatically removed from the bcgov GitHub organization, and by extension, all the code repositories connected to bcgov.   

Contractors without IDIRs must get one to before they can enable SSO. 

[Learn how to order an IDIR](https://dev.developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/github-transition-guide/). 
 
[Learn more about the timelines and instructions](bc-govermentorganizations-in-github.md#the-changes). 
 
### User impacts 
 
Users who have accounts attached to the [bcgov GitHub organization](https://github.com/bcgov). 
 
Users who use GitHub as their authentication method to login to: 

- [Private Cloud](https://developer.gov.bc.ca/docs/default/component/platform-developer-docs),  
- [Public Cloud](https://developer.gov.bc.ca/docs/default/component/public-cloud-techdocs), 
- [Stack Overflow](https://stackoverflow.developer.gov.bc.ca/),  
- [Rocket.chat](https://chat.developer.gov.bc.ca/),  
- Any other custom apps owned by the province that use membership in the bcgov organization to authenticate and authorize users 
 
Teams relying on integrations that need access to the bcgov org, for example: 

- GitHub or OAuth apps 
  - to automate the release or testing of your code, including 3rd party security tools 
- Access tokens and/or SSH keys that your app or team may rely on that will be disconnected when user access is removed 
  - IDE or command line tools and/or automation scripts 
 
### The changes 
 
Before this upgrade, users only needed their personal GitHub IDs to access the bcgov GitHub organization as a member. 
 
By July 30, 2024, users must follow prompts in GitHub to link their personal GitHub ID with their IDIR account.  If not, users will be automatically removed. 
 
[Learn more about how linking works](github-transition-guide.md#technical-information).  
 
Ministries won’t be charged for upgraded GitHub licenses.  However, contractors need IDIRs before they can enable SSO. Ministries may need to seek expense approvals to order [IDIRs for contracted resources without one](github-transition-guide.md#idirs). 
  
### Directions to link your accounts before July 30
 
#### For employees 
 
1. Have any two-factor devices, and personal GitHub login and IDIR login ready for linking 
2. Log into GitHub and follow the prompts on the pop up to connect your GitHub and IDIR accounts together. 
3. Reauthorize your personal access tokens and/or SSH keys so they continue to work with SSO enabled. [Learn more about how to do this](github-transition-guide.md#resetting-github-keys). 
 
That’s it, your accounts are now linked.  
 
#### For contractors 
 
If you don’t have an IDIR account, [we have guidance on ordering a compatible IDIR] ](faq link). It can take several days to complete depending on your ministry.We recommend doing with this step as soon as possible to avoid access disruptions.  
 
After getting an IDIR, follow the steps below: 

1. Have any two-factor device, and personal GitHub login and IDIR login ready for linking 
2. Log into GitHub and follow the prompts on the pop up to connect your GitHub and IDIR accounts together. 
3. If linking fails, your IDIR configuration is not compatible with our GitHub SSO. You must [request an upgrade to a P2 level IDIR account](github-transition-guide.md#idirs).  
4. Reauthorize your personal access tokens and/or SSH keys so they continue to work with SSO enabled. [Learn more about how to do this](github-transition-guide.md#resetting-github-keys). 
 
That’s it, your accounts are now linked.  
 
### Directions to link your account after July 30 

If you are a contractor without an IDIR, follow the steps in the [IDIR transition guide](github-transition-guide.md#idirs) before proceeding. 
 
1. If you have a valid IDIR, ask anyone with access to the organization to re-invite you. [Learn how to request access to the bcgov GitHub organization](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/bc-government-organizations-in-github/#bcgov). 
2. Once you have access again, your teammates with admin access may need to re-invite you to the repositories you had access to before.  
3. Reauthorize your personal access tokens and/or SSH keys so they continue to work with SSO enabled. [Learn more about how to do this](github-transition-guide.md#resetting-github-keys). 
 
### Upgrading other GitHub organizations 
 
The bcgov-c, BCDevOps organizations will transition to SSO on different timelines. It will be the same process moving forward for any organization upgrade.  
  
For current B.C. Government private Enterprise organizations, we’ll work with your respective Information Management Branches and Information Systems Branches to identify next steps  
 
### Support 
 
For more information, please see our [transition guide](github-transition-guide.md).  
 
For help with access, please [submit a support request]( https://citz-do.atlassian.net/servicedesk/customer/portal/2). 

## Security Insights for GitHub Enterprise-linked organizations

The Security Insight feature is available for all organizations linked to the corporate GitHub Enterprise accounts, as well as branch protection and code owners for private repositories. Branch protection only allows specific people to push to the protected branch. The code owners feature allows automated reviews. For example, if a specific user is a code owner of certain files they are automatically added as PR reviewers and their approval is required before the code can be merged.

---
Related links:

* [GitHub](https://github.com)
* [bcgov](https://github.com/bcgov)
* [Digital Principles for B.C. Government](https://digital.gov.bc.ca/resources/digital-principles)
* [Just Ask! tool](https://just-ask.developer.gov.bc.ca/)
* [GitHub Enterprise user licences in the B.C. government](github-enterprise-user-licenses-bc-government.md)
* [Remove a user's BCGov GitHub access](remove-user-bcgov-github-access.md)
* [Common platform requests in the B.C. Gov Private Cloud PaaS](https://digital.gov.bc.ca/cloud/services/private/support/#common)

---
