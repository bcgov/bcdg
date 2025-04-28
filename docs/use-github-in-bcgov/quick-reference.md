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

!!! note
	If you are creating a repository to host code for an app that will run on OpenShift, you may want to use our [QuickStart for OpenShift Wizard](../../wizards/quickstart-for-openshift-wizard/#devhub-wizards), which will save you some steps.
 
-  Choose a path based on whether you are [publishing existing code, initiating a new repository or contributing to an outside repository](start-working-in-bcgov-github-organization.md)
-  If you are publishing **existing code**, [evaluate the content to ensure there are no restrictions](start-working-in-bcgov-github-organization.md/#post-existing-code-or-projects) (e.g., Privacy, Copyright, Legal contractual or policy, Security) and confirm [authority to publish](license-your-github-repository.md/#authority-to-license)
-  If you are initiating a **new repository**, follow [GitHub instructions](https://help.github.com/articles/creating-a-new-repository/) and select 'BCGov' as the owner for all new repositories and implement the [required elements](start-working-in-bcgov-github-organization.md/#initiate-new-code-or-projects)
- Pick a repository name that follows best practices, for example following a standard naming convention (e.g., using lowercase with dashes), using short and descriptive names with a prefix/suffix indicating technology stack, use case or team
- Ensure the repo contains the [mandatory files](#mandatory-files-for-all-bcgov-repositories) (LICENSE, README.md, CONTRIBUTING.md, and CODE_OF_CONDUCT.md files)
- Consider adding an About description and Topic tags to the repository details to make it easier for users to learn about the project
- Consider adding a [Project Lifecycle Badge](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

## Mandatory files for all `bcgov` repositories
- Every repository in `bcgov` [must have 4 files](required-pages-for-github-repository.md): 
  - LICENSE
  - README.md
  - CONTRIBUTING.md
  - CODE_OF_CONDUCT.md
- [Sample templates](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Gov-Org-HowTo/README.md) are available for all of these 'must have' files

### Samples of mandatory files

Below are examples for each of the mandatory files that can be used when creating a new repository. Note the content can be copied to the clipboard using the clickable copy icon.

=== "LICENSE"
 
	```markdown
		Apache License
		Version 2.0, January 2004
		http://www.apache.org/licenses/
	```

=== "README.md"

	```markdown
		# Sample Readme File
		---
		This readme serves as an example readme for a government open source project. A brief description of your project would go here.
		
		## Features
		
		## Usage
		
		## Requirements
		
		## Installation
		
		## Project Status
		
		## Goals/Roadmap
		
		## Getting Help or Reporting an Issue
		
		## How to Contribute
		
		*If you are including a Code of Conduct, make sure that you have a [CODE_OF_CONDUCT.md](SAMPLE-CODE_OF_CONDUCT.md) file, and include the following text in here in the README:*
		"Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms."
		
		## License
		
		Detailed guidance around licenses is available
		[here](/BC-Open-Source-Development-Employee-Guide/Licenses.md)
		
		Attach the appropriate LICENSE file directly into your repository before you do anything else!
		
		The default license For code repositories is: Apache 2.0
		
		Here is the boiler-plate you should put into the comments header of every source code file as well as the bottom of your README.md:
		
			Copyright 2019 Province of British Columbia
		
			Licensed under the Apache License, Version 2.0 (the "License");
			you may not use this file except in compliance with the License.
			You may obtain a copy of the License at 
		
			   http://www.apache.org/licenses/LICENSE-2.0
		
			Unless required by applicable law or agreed to in writing, software
			distributed under the License is distributed on an "AS IS" BASIS,
			WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
			See the License for the specific language governing permissions and
			limitations under the License.
		
		For repos that are made up of docs, wikis and non-code stuff it's Creative Commons Attribution 4.0 International, and should look like this at the bottom of your README.md:
		
		<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">YOUR REPO NAME HERE</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">the Province of British Columbia</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
		
		and the code for the cc 4.0 footer looks like this:
		
			<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence"
			style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span
			xmlns:dct="http://purl.org/dc/terms/" property="dct:title">YOUR REPO NAME HERE</span> by <span
			xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">the Province of British Columbia
			</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
			Creative Commons Attribution 4.0 International License</a>.
	```

=== "CONTRIBUTING.md"
	```markdown	
		# Sample Contributing File
		
		## How to contribute
		
		Government employees, public and members of the private sector are encouraged to contribute to the repository by **forking and submitting a pull request**.
		
		(If you are new to GitHub, you might start with a [basic tutorial](https://help.github.com/articles/set-up-git) and  check out a more detailed guide to [pull requests](https://help.github.com/articles/using-pull-requests/).)
		
		Pull requests will be evaluated by the repository guardians on a schedule and if deemed beneficial will be committed to the master.
		
		All contributors retain the original copyright to their stuff, but by contributing to this project, you grant a world-wide, royalty-free, perpetual, irrevocable, non-exclusive, transferable license to all users **under the terms of the license under which this project is distributed.**
	```

=== "CODE_OF_CONDUCT.md"
	```markdown
		
		# Sample Code of Conduct
		
		## Contributor Covenant Code of Conduct
		
		## Our Pledge
		
		In the interest of fostering an open and welcoming environment, we as
		contributors and maintainers pledge to making participation in our project and
		our community a harassment-free experience for everyone, regardless of age, body
		size, disability, ethnicity, gender identity and expression, level of experience,
		nationality, personal appearance, race, religion, or sexual identity and
		orientation.
		
		## Our Standards
		
		Examples of behavior that contributes to creating a positive environment
		include:
		
		* Using welcoming and inclusive language
		  * Being respectful of differing viewpoints and experiences
		  * Gracefully accepting constructive criticism
		  * Focusing on what is best for the community
		  * Showing empathy towards other community members
		
		Examples of unacceptable behavior by participants include:
		
		* The use of sexualized language or imagery and unwelcome sexual attention or
		  advances
		  * Trolling, insulting/derogatory comments, and personal or political attacks
		  * Public or private harassment
		  * Publishing others' private information, such as a physical or electronic
			address, without explicit permission
		  * Other conduct which could reasonably be considered inappropriate in a
			professional setting
		
		## Our Responsibilities
		
		Project maintainers are responsible for clarifying the standards of acceptable
		behavior and are expected to take appropriate and fair corrective action in
		response to any instances of unacceptable behavior.
		
		Project maintainers have the right and responsibility to remove, edit, or
		reject comments, commits, code, wiki edits, issues, and other contributions
		that are not aligned to this Code of Conduct, or to ban temporarily or
		permanently any contributor for other behaviors that they deem inappropriate,
		threatening, offensive, or harmful.
		
		## Scope
		
		This Code of Conduct applies both within project spaces and in public spaces
		when an individual is representing the project or its community. Examples of
		representing a project or community include using an official project e-mail
		address, posting via an official social media account, or acting as an appointed
		representative at an online or offline event. Representation of a project may be
		further defined and clarified by project maintainers.
		
		## Enforcement
		
		Instances of abusive, harassing, or otherwise unacceptable behavior may be
		reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
		complaints will be reviewed and investigated and will result in a response that
		is deemed necessary and appropriate to the circumstances. The project team is
		obligated to maintain confidentiality with regard to the reporter of an incident.
		Further details of specific enforcement policies may be posted separately.
		
		Project maintainers who do not follow or enforce the Code of Conduct in good
		faith may face temporary or permanent repercussions as determined by other
		members of the project's leadership.
		
		## Attribution
		
		This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
		available at [http://contributor-covenant.org/version/1/4][version]
		
		[homepage]: http://contributor-covenant.org
		[version]: http://contributor-covenant.org/version/1/4/
	```

## How to License the Contents of a Repository
- Ensure [authority to LICENSE](license-your-github-repository.md) for the code and other non-code content in the repository
- Choose a [LICENSE](license-your-github-repository.md/#preferred-licenses) for your code (.md files are considered code). The default is the Apache 2.0 LICENSE
- Apply the Apache 2.0 LICENSE in 1-2-3 easy steps:
  - Attach appropriate LICENSE file directly in the repository
  - Add the boilerplate Apache 2.0 LICENSE to the bottom of your README.md
  - Add the boilerplate Apache 2.0 LICENSE to the comments header of _**every source code file**_
- Choose a license for any other content (e.g. docs, wikis and non-code stuff) &mdash;the default is [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)&mdash;and add to the footer of your README.md
- Repositories can have multiple licenses, for example if there is a mix of code and non-code or if the repo contains open datasets under more than one license

## Privacy, Security & Intellectual Property/Copyright
-  Before publishing any _existing code_ to GitHub, you must [evaluate the code to ensure there are no restrictions to posting the content to GitHub](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/evaluate-open-source-content/) (e.g., Privacy, Copyright, Legal contractual or policy, Security) by ensuring:
  - The content is free of [Personal Information](http://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy) (Privacy)	- The content has been labelled 'Public' using the  [Information Security Classification Framework](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/information-security-classification) (Security)
  - The content is fully owned by the B.C. government and/or the B.C. government holds the [Intellectual Property and Copyright](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/intellectual-property/intellectual-property-program) for the content
  - There are no other legal, contractual or policy constraints
- Read more about assessing privacy, security and intellectual property in the [BC Developer Guide](evaluate-open-source-content.md)

## Approval Requirements
-  [Approval for publishing to GitHub](start-working-in-bcgov-github-organization.md) are from a deputy minister. Deputy ministers may choose to delegate this authority.
-  BC Government employees are responsible for adhering to any Ministry or project-specific approval processes for working in GitHub

## Appropriate Use
- When you’re consuming, sharing or contributing content to GitHub in your role as a government employee, you must adhere to the [BC Public Service Standards of Conduct](https://www2.gov.bc.ca/gov/content?id=0F130A55BFDD4DA1B0ED7FA0AC8D3041)
- It is essential that [employees avoid any conflicts of interest when using GitHub](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/COI-Priv-IP.md), and personal use of GitHub must never be confused with professional use
- Make sure you're familiar with existing [OCIO policy on information security](http://www2.gov.bc.ca/gov/content?id=BB7D7F3938634BF2973BDE1A899FB755) before downloading or testing any code
