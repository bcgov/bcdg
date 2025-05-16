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

!!! Note
	If you are creating a repository to host code that will run on OpenShift, you may want to use our [QuickStart for OpenShift Wizard](../../wizards/quickstart-for-openshift-wizard/#devhub-wizards), which will save you some steps.
 
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
- Samples templates are available for all of these 'must have' files below

### Samples of mandatory files

Below are examples for each of the mandatory files that can be used when creating a new repository. Note the content can be copied to the clipboard using the clickable copy icon.

=== "LICENSE"
 
	```markdown
								Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

		TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
		
		1. Definitions.
		
		   "License" shall mean the terms and conditions for use, reproduction,
		   and distribution as defined by Sections 1 through 9 of this document.
		
		   "Licensor" shall mean the copyright owner or entity authorized by
		   the copyright owner that is granting the License.
		
		   "Legal Entity" shall mean the union of the acting entity and all
		   other entities that control, are controlled by, or are under common
		   control with that entity. For the purposes of this definition,
		   "control" means (i) the power, direct or indirect, to cause the
		   direction or management of such entity, whether by contract or
		   otherwise, or (ii) ownership of fifty percent (50%) or more of the
		   outstanding shares, or (iii) beneficial ownership of such entity.
		
		   "You" (or "Your") shall mean an individual or Legal Entity
		   exercising permissions granted by this License.
		
		   "Source" form shall mean the preferred form for making modifications,
		   including but not limited to software source code, documentation
		   source, and configuration files.
		
		   "Object" form shall mean any form resulting from mechanical
		   transformation or translation of a Source form, including but
		   not limited to compiled object code, generated documentation,
		   and conversions to other media types.
		
		   "Work" shall mean the work of authorship, whether in Source or
		   Object form, made available under the License, as indicated by a
		   copyright notice that is included in or attached to the work
		   (an example is provided in the Appendix below).
		
		   "Derivative Works" shall mean any work, whether in Source or Object
		   form, that is based on (or derived from) the Work and for which the
		   editorial revisions, annotations, elaborations, or other modifications
		   represent, as a whole, an original work of authorship. For the purposes
		   of this License, Derivative Works shall not include works that remain
		   separable from, or merely link (or bind by name) to the interfaces of,
		   the Work and Derivative Works thereof.
		
		   "Contribution" shall mean any work of authorship, including
		   the original version of the Work and any modifications or additions
		   to that Work or Derivative Works thereof, that is intentionally
		   submitted to Licensor for inclusion in the Work by the copyright owner
		   or by an individual or Legal Entity authorized to submit on behalf of
		   the copyright owner. For the purposes of this definition, "submitted"
		   means any form of electronic, verbal, or written communication sent
		   to the Licensor or its representatives, including but not limited to
		   communication on electronic mailing lists, source code control systems,
		   and issue tracking systems that are managed by, or on behalf of, the
		   Licensor for the purpose of discussing and improving the Work, but
		   excluding communication that is conspicuously marked or otherwise
		   designated in writing by the copyright owner as "Not a Contribution."
		
		   "Contributor" shall mean Licensor and any individual or Legal Entity
		   on behalf of whom a Contribution has been received by Licensor and
		   subsequently incorporated within the Work.
		
		   2. Grant of Copyright License. Subject to the terms and conditions of
			  this License, each Contributor hereby grants to You a perpetual,
			  worldwide, non-exclusive, no-charge, royalty-free, irrevocable
			  copyright license to reproduce, prepare Derivative Works of,
			  publicly display, publicly perform, sublicense, and distribute the
			  Work and such Derivative Works in Source or Object form.
		
		   3. Grant of Patent License. Subject to the terms and conditions of
			  this License, each Contributor hereby grants to You a perpetual,
			  worldwide, non-exclusive, no-charge, royalty-free, irrevocable
			  (except as stated in this section) patent license to make, have made,
			  use, offer to sell, sell, import, and otherwise transfer the Work,
			  where such license applies only to those patent claims licensable
			  by such Contributor that are necessarily infringed by their
			  Contribution(s) alone or by combination of their Contribution(s)
			  with the Work to which such Contribution(s) was submitted. If You
			  institute patent litigation against any entity (including a
			  cross-claim or counterclaim in a lawsuit) alleging that the Work
			  or a Contribution incorporated within the Work constitutes direct
			  or contributory patent infringement, then any patent licenses
			  granted to You under this License for that Work shall terminate
			  as of the date such litigation is filed.
		
		   4. Redistribution. You may reproduce and distribute copies of the
			  Work or Derivative Works thereof in any medium, with or without
			  modifications, and in Source or Object form, provided that You
			  meet the following conditions:
		
			  (a) You must give any other recipients of the Work or
			  Derivative Works a copy of this License; and
		
			  (b) You must cause any modified files to carry prominent notices
			  stating that You changed the files; and
		
			  (c) You must retain, in the Source form of any Derivative Works
			  that You distribute, all copyright, patent, trademark, and
			  attribution notices from the Source form of the Work,
			  excluding those notices that do not pertain to any part of
			  the Derivative Works; and
		
			  (d) If the Work includes a "NOTICE" text file as part of its
			  distribution, then any Derivative Works that You distribute must
			  include a readable copy of the attribution notices contained
			  within such NOTICE file, excluding those notices that do not
			  pertain to any part of the Derivative Works, in at least one
			  of the following places: within a NOTICE text file distributed
			  as part of the Derivative Works; within the Source form or
			  documentation, if provided along with the Derivative Works; or,
			  within a display generated by the Derivative Works, if and
			  wherever such third-party notices normally appear. The contents
			  of the NOTICE file are for informational purposes only and
			  do not modify the License. You may add Your own attribution
			  notices within Derivative Works that You distribute, alongside
			  or as an addendum to the NOTICE text from the Work, provided
			  that such additional attribution notices cannot be construed
			  as modifying the License.
		
			  You may add Your own copyright statement to Your modifications and
			  may provide additional or different license terms and conditions
			  for use, reproduction, or distribution of Your modifications, or
			  for any such Derivative Works as a whole, provided Your use,
			  reproduction, and distribution of the Work otherwise complies with
			  the conditions stated in this License.
		
		   5. Submission of Contributions. Unless You explicitly state otherwise,
			  any Contribution intentionally submitted for inclusion in the Work
			  by You to the Licensor shall be under the terms and conditions of
			  this License, without any additional terms or conditions.
			  Notwithstanding the above, nothing herein shall supersede or modify
			  the terms of any separate license agreement you may have executed
			  with Licensor regarding such Contributions.
		
		   6. Trademarks. This License does not grant permission to use the trade
			  names, trademarks, service marks, or product names of the Licensor,
			  except as required for reasonable and customary use in describing the
			  origin of the Work and reproducing the content of the NOTICE file.
		
		   7. Disclaimer of Warranty. Unless required by applicable law or
			  agreed to in writing, Licensor provides the Work (and each
			  Contributor provides its Contributions) on an "AS IS" BASIS,
			  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
			  implied, including, without limitation, any warranties or conditions
			  of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
			  PARTICULAR PURPOSE. You are solely responsible for determining the
			  appropriateness of using or redistributing the Work and assume any
			  risks associated with Your exercise of permissions under this License.
		
		   8. Limitation of Liability. In no event and under no legal theory,
			  whether in tort (including negligence), contract, or otherwise,
			  unless required by applicable law (such as deliberate and grossly
			  negligent acts) or agreed to in writing, shall any Contributor be
			  liable to You for damages, including any direct, indirect, special,
			  incidental, or consequential damages of any character arising as a
			  result of this License or out of the use or inability to use the
			  Work (including but not limited to damages for loss of goodwill,
			  work stoppage, computer failure or malfunction, or any and all
			  other commercial damages or losses), even if such Contributor
			  has been advised of the possibility of such damages.
		
		   9. Accepting Warranty or Additional Liability. While redistributing
			  the Work or Derivative Works thereof, You may choose to offer,
			  and charge a fee for, acceptance of support, warranty, indemnity,
			  or other liability obligations and/or rights consistent with this
			  License. However, in accepting such obligations, You may act only
			  on Your own behalf and on Your sole responsibility, not on behalf
			  of any other Contributor, and only if You agree to indemnify,
			  defend, and hold each Contributor harmless for any liability
			  incurred by, or claims asserted against, such Contributor by reason
			  of your accepting any such warranty or additional liability.
		
		END OF TERMS AND CONDITIONS
		
		APPENDIX: How to apply the Apache License to your work.
		
			  To apply the Apache License to your work, attach the following
			  boilerplate notice, with the fields enclosed by brackets "[]"
			  replaced with your own identifying information. (Don't include
			  the brackets!)  The text should be enclosed in the appropriate
			  comment syntax for the file format. We also recommend that a
			  file or class name and description of purpose be included on the
			  same "printed page" as the copyright notice for easier
			  identification within third-party archives.
		
		Copyright [yyyy] [name of copyright owner]
		
		Licensed under the Apache License, Version 2.0 (the "License");
		you may not use this file except in compliance with the License.
		You may obtain a copy of the License at
		
			   http://www.apache.org/licenses/LICENSE-2.0
		
		Unless required by applicable law or agreed to in writing, software
		distributed under the License is distributed on an "AS IS" BASIS,
		WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		See the License for the specific language governing permissions and
		limitations under the License.
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
