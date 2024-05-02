# B.C. government GitHub Enterprise 

>Note: This page is under review as of December 2023 and will be updated for clarity and accuracy early in 2024. 

All code built for B.C. government for staff or contracted developers should be open source by default and stored in the public [`bcgov` organization on GitHub.com](https://github.com/bcgov). If you have closed source code and still want to use GitHub's functionality, you can store your code in a private repository within the B.C. government's [GitHub Enterprise environment](https://github.com/enterprises/bcgov-ent/). This page contains details related to that environment and its use.

For more information about B.C. government GitHub organizations outside of GitHub Enterprise, see [B.C. government organizations in GitHub](bc-government-organizations-in-github.md).

## B.C. government GitHub Enterprise Overview

GitHub Enterprise offers various features beyond those of the Free and Teams tiers. To find out more about the features of GitHub Enterprise, you may wish to review [GitHub's product page](https://github.com/enterprise).

There are certain notable differences between the [public facing `bcgov` GitHub organization](https://github.com/bcgov) and B.C. government's GitHub Enterprise environment. For example, the ability to create public repositories is disabled within GitHb Enterprise since with B.C. government public open source code should be in the [public `bcgov` organization](https://github.com/bcgov). 

Other details of GitHub Enterprise include the following:

* Single sign-on is provided via Azure AD (aka Entra ID)
* Login uses government-issued IDIR identities
* Users will be automatically assigned new GitHub IDs, which will change the login experience for users working in both GitHub.com repositories and B.C. government GitHub Enterprise 
* GitHub Actions is enabled
* Code Dependency Insights is enabled

## GitHub Enterprise account ownership

The B.C. government's GitHub Enterprise account is managed centrally by the Digital Office's [Developer Experience Team](mailto:developer.experience@gov.bc.ca). Ministries or sectors are provided with GitHub "organizations" within the central GitHub Enterprise account. Teams' private repositories are created within these organizations.  Management of ministry or sector organizations within GitHub Enterprise is delegated to staff within the corresponding IMB/ISB. 

Paid licenses are required to use GitHub Enterprise. Licenses must be purchased for each user that will use or administer to the B.C. government GitHub Enterprise organizations or repositories. Each ministry or sector is responsible for acquiring and paying for its own licenses. The process for acquiring licences is described [below](#background-bc-government-github-enterprise-process-map).

## Acquiring GitHub Enterprise user licences

> Note: the process outlined below may be slightly different for some sectors or ministries, but it will be generally similar for all. For example, in some areas, the responsibility for interacting with CSAM may be done by the ministry or sector IMB/ISB staff rather than end users in a business area.

This section outlines what is involved in acquiring the licenses required to use B.C. government GitHub Enterprise.

### Pre-requisites:

- Confirm that your intended use of GitHub Enterprise aligns with its purpose, which is exclusively for storing code that can't be, or isn't currently, open source.
- Confirm whether your ministry or sector is using GitHub Enterprise and know who in your IMB/ISB is responsible for managing access. If you aren't sure who to contact within your IMB/ISB, please contact the [Developer Experience Team](mailto:developer.experience@gov.bc.ca) for assistance.
- Identify who is responsible within your business area for submitting iStore orders.

### Steps

Once you've completed the pre-requisites, follow the steps below to acquire GitHub Enterprise licenses.

- Request a quote via email to  [SoftwareCentral.Management@gov.bc.ca](mailto:SoftwareCentral.Management@gov.bc.ca). Use the subject line "Request for Quotation for GitHub Enterprise"  and indicate in the body the number of users who need GitHub Enterprise licenses. For example, "Could I please get a quote for 10 GitHub Enterprises licenses (Standalone)?".
- Wait for a response by email from CSAM, which will include a quote number and the associated cost for your licenses. This should take 2-3 business days. 
- Work with the person reponsisble for iStore orders in your business area to create and submit an iStore order referencing the quote number to initiate the purchase. This will triggerthe e-approval process.
- Wait for a notification from CSAM indicating that they have made the purchase of GitHub licenses on your behalf. This should take less than 5 business days. Billing back to your expense authority will commence at this point. Billing occurs monthly until you notify CSAM to cancel the user licenses.
- Work with the appropriate individual or team within your ministry or sector IMB/ISB to request access to the corresponding organization within B.C. government's GitHub Enterprise environment. 

Once the above steps are complete, you'll be able to log in (using your IDIR) to the B.C. government GitHub Enterprise at [https://github.com/enterprises/bcgov-ent/](https://github.com/enterprises/bcgov-ent/) and begin working in private repositories within your ministry or sector's organization. 

## Background: BC government GitHub Enterprise process map

The [Developer Experience Team](mailto:developer.experience@gov.bc.ca) has created the artifact below which captures the steps and teams involved in acquiring and mananaging GitHub Enterprise licenses. This version is intended for reference only.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVKTK-fZc=/?embedMode=view_only_without_ui&autoplay=true&moveToViewport=10032,-7336,14121,8957&embedId=841864704736" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
---
Related links:

* [BC Government Organizations in GitHub](bc-government-organizations-in-github.md)

---
