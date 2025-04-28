# B.C. government GitHub Quick Reference

All BC Government employees working in B.C. government GitHub organizations ('bcgov' or 'bcgov-c') GitHub should be familiar with the [**GitHub in the BC Government**](bc-government-organizations-in-github.md) section of the BC Developer Guide, but we've developed this document as a quick reference for those who are new to GitHub or just need a refresher on the essentials from time to time.

## Joining BC government GitHub organizations
- If you don't already have one, create a GitHub account. Note: If you have an existing personal GitHub account, you do not need to create a new one as you can use your existing account for BC government work.
- Ensure your work email is the primary or an alternative email [associated with your account](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account). 
- Enable [two-factor authentication](https://help.github.com/articles/about-two-factor-authentication/) for your GitHub account
- Ensure you have an IDIR account. More details [here](bc-government-organizations-in-github.md#single-sign-on-).
- Join the `bcgov` organization following [these instructions](bc-government-organizations-in-github.md/#directions-to-sign-up-and-link-your-account-for-bcgov)
- If you have been asked to, or if you will be working on closed-source code, join the `bcgov-c` organization following [these instructions](bc-government-organizations-in-github.md/#directions-to-sign-up-and-link-your-account-for-bcgov-c-). 
- Make sure you have [Git client](https://git-scm.com/downloads/) or a code editor that supports Git installed on your computer.

## Some Resources for Learning Git & GitHub
- [About Git and GitHub](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)
- [Learn Git in 15 minutes](https://try.github.io/levels/1/challenges/1)
- [On-demand course in GitHub basics](https://skills.github.com)

## Creating a Repository (aka "repo")
-  Choose a path based on whether you are [publishing existing code, initiating a new repository or contributing to an outside repository](start-working-in-bcgov-github-organization.md)
-  If you are publishing **existing code**, [evaluate the content to ensure there are no restrictions](start-working-in-bcgov-github-organization.md/#post-existing-code-or-projects) (e.g., Privacy, Copyright, Legal contractual or policy, Security) and confirm [authority to publish](license-your-github-repository.md/#authority-to-license)
-  If you are initiating a **new repository**, follow [GitHub instructions](https://help.github.com/articles/creating-a-new-repository/) and select 'BCGov' as the owner for all new repositories and implement the [required elements](start-working-in-bcgov-github-organization.md/#initiate-new-code-or-projects)
- Pick a repository name that follows best practices, for example following a standard naming convention (e.g., using lowercase with dashes), using short and descriptive names with a prefix/suffix indicating technology stack, use case or team
- Ensure the repo contains the [mandatory files](#mandatory-files-for-all-bcgov-repositories) (LICENSE, README.md, CONTRIBUTING.md, and CODE_OF_CONDUCT.md files)
- Consider adding an About description and Topic tags to the repository details to make it easier for users to learn about the project
- Consider adding a [Project Lifecycle Badge](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

## Mandatory files for all `bcgov` repositories
- Every repository in `bcgov` [must have 4 files](required-pages-for-github-repository.md):
 
	1. LICENSE
	1. README.md
	1. CONTRIBUTING.md
	1. CODE_OF_CONDUCT.md
  
- [Sample templates](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Gov-Org-HowTo/README.md) are available for all of these 'must have' files

## How to License the Contents of a Repository
- Ensure [authority to LICENSE](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/license-your-github-repository/) the code and other non-code content in the repository
- Choose [a LICENSE](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/license-your-github-repository/#preferred-licenses) for your code (.md files are considered code). The default is the Apache 2.0 LICENSE
- Apply the Apache 2.0 LICENSE in 1-2-3 easy steps:
 
	1. Attach appropriate LICENSE file directly in the repository
	1. Add the boilerplate Apache 2.0 LICENSE to the bottom of your README.md
	1. Add the boilerplate Apache 2.0 LICENSE to the comments header of _**every source code file**_

- Choose a license for any other content (e.g. docs, wikis and non-code stuff) &mdash;the default is [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)&mdash;and add to the footer of your README.md
- Repositories can have multiple licenses, for example if there is a mix of code and non-code or if the repo contains open datasets under more than one license

## Privacy, Security & Intellectual Property/Copyright
-  Before publishing any _existing code_ to GitHub, you must [evaluate the code to ensure there are no restrictions to posting the content to GitHub](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/evaluate-open-source-content/) (e.g., Privacy, Copyright, Legal contractual or policy, Security) by ensuring:

	1. The content is free of [Personal Information](http://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy) (Privacy)
	1. The content has been labelled 'Public' using the  [Information Security Classification Framework](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/information-security-classification) (Security)
	1. The content is fully owned by the B.C. government and/or the B.C. government holds the [Intellectual Property and Copyright](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/intellectual-property/intellectual-property-program) for the content
	1. There are no other legal, contractual or policy constraints
   
- Read more about assessing privacy, security and intellectual property in the [BC Developer Guide](evaluate-open-source-content.md)

## Approval Requirements
-  [Approval for publishing to GitHub](start-working-in-bcgov-github-organization.md) are from a deputy minister. Deputy ministers may choose to delegate this authority.
-  BC Government employees are responsible for adhering to any Ministry or project-specific approval processes for working in GitHub

## Appropriate Use
- When you’re consuming, sharing or contributing content to GitHub in your role as a government employee, you must adhere to the [BC Public Service Standards of Conduct](https://www2.gov.bc.ca/gov/content?id=0F130A55BFDD4DA1B0ED7FA0AC8D3041)
- It is essential that [employees avoid any conflicts of interest when using GitHub](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/COI-Priv-IP.md), and personal use of GitHub must never be confused with professional use
- Make sure you're familiar with existing [OCIO policy on information security](http://www2.gov.bc.ca/gov/content?id=BB7D7F3938634BF2973BDE1A899FB755) before downloading or testing any code
