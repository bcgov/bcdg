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

### `bcgov-c`

The `bcgov-c` organization stores temporary (up to 12 months), private repositories with closed-source code and private documents. Closed-source projects must be moved to the `bcgov` organization at the end of the 12 months. This repository is **private**.

* Use this repository if you need a temporary location for code while you collect approvals to make the code public. You must commit to making the code public in the future in order to use this repository.
* Only the Developer Experience team can create repositories in this organization. You can request a repository by [submitting a request](https://github.com/BCDevOps/devops-requests/issues/new?assignees=MonicaG%2C+oomIRL&labels=github-repo%2C+pending&projects=&template=github_repo_request.md&title=).

Your product team can only have a **permanent**, private repository in `bcgov-c` if it is a GitOps repository with ArgoCD manifests. 


## Single sign-on 

To keep access to the bcgov GitHub organization, all users must be authenticated. Contractors without IDIRs must order one before SSO can be enabled. 

[Learn more about IDIRs](https://dev.developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/github-transition-guide/). 
  
 
### Directions to link your account

If you are a contractor without an IDIR, follow the steps in the [IDIR transition guide](github-transition-guide.md#idirs) before proceeding:
 
1. If you have a valid IDIR, follow the instructions at (https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/bc-government-organizations-in-github/#bcgov) to join the bcgov organization.
    - [Learn how to request access to the bcgov GitHub organization](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/bc-government-organizations-in-github/#bcgov). 
2. Once you have access again, your teammates with admin access may need to re-invite you to the repositories you had access to before.  
3. Reauthorize your personal access tokens and/or SSH keys so they continue to work with SSO enabled.
    - [Learn more about how to do this](github-transition-guide.md#resetting-github-keys). 
 
### Upgrading other GitHub organizations 
 
The [`bcgov-c`](#bcgov-c), BCDevOps organizations will transition to SSO on different timelines. It will be the same process moving forward for any organization upgrade.  
  
For current B.C. Government private Enterprise organizations, we’ll work with your respective Information Management Branches and Information Systems Branches to identify next steps  
 
### Resources 
 
For more supplementary information, please see our [transition guide](github-transition-guide.md).  
 
For help with access, please [submit a support request]( https://citz-do.atlassian.net/servicedesk/customer/portal/2). 

## Security Insights for GitHub Enterprise-linked organizations

The Security Insight feature is available for all organizations linked to the corporate GitHub Enterprise accounts, as well as branch protection and code owners for private repositories. Branch protection only allows specific people to push to the protected branch. The code owners feature allows automated reviews. For example, if a specific user is a code owner of certain files they are automatically added as PR reviewers and their approval is required before the code can be merged.
