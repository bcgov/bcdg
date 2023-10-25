# How to Select Technology for your Stack

As part of the journey towards modern digital service delivery, the BC Government has opted for much more open choice of technology than it had historically. 

However, there are still processes and compliance required to do your due diligence.

* Evaluate [Open Source ]() options
* For non-Open Source options, follow proper [Procurement policies]()
* Make sure to complete your [Privacy and Security Assessments]()
* ??? 

## Reusable BC Government Services

The BC Government's Open Source ecosystem has produced a number of shared tools that 

[comment]: <> Need to work with Private Cloud to pluck this list out of their docs and move it up a level

### Common Components

Common Components are Open Source tools developed by the BC Government that are owned and maintained by product teams. 

As part of the [Digital Investment Office priorities](https://digital.gov.bc.ca/topics/funding/intro/), teams are required to use these for projects receiving IM/IT capital funding from the OCIO. 

* [BC Address Geocoder]()
* [Common Document Generation Service]()
* [Common Hosted Email Service]()
* [Common Object Management Service]()
* [Get Token]()
* [Pathfinder Single Sign-On Keycloak]()


### Community-Contributed Tools

Open Source tools developed or modified to work within the BC Government Ecosystem. 

The resources on this list are open for use, but may not have dedicate maintainers, and do not have funding. However, with more use and cross-team contributions these may mature to becoming official Common Components in future. 

* [BCDevOps Repo]()
* [Backup Container]()
* [BC Design System (legacy Boostrap)]()
* [FIDIR]()
* [Matomo OpenShift]()
* [OWASP ZAP Security Vulnerability Scanning]()
* [WeasyPrint HTML to PDF/PNG Microservice]()


## Commonly Adopted Tools

This list is not meant to prescribe tooling that is required to use, but to help surface best practices and common patterns already found within the organization to smooth out your exploration, learning and adoption curves. 

Contributions to this list are welcome!

### Application Monitoring

[comment]: <> I had sysdig here, but if it's Open Shift specific that probably doesn't make sense? do we need this section? I suspect teams have other things they're using we could use contributions for here that they're hooking into GH Actions. OR is this just a synonym for quality?

* ? 

### CI/CD Pipeline Automation

Use automation triggers in your delivery process to improve your quality of life as a developer, and/or quality of your application. 

* [ArgoCD](../ci-cd/#argo-cd)
* [GitHub Actions](../)
* [Tekton](../)

### Content Management Systems

Working on an application where the main user needs to contribute content without writing code? A CMS might be for you, and we have a few we are standardizing on.

* [CMS Lite]()
* [Drupal]()

### Databases

Store and retreive your data in a persistent, secure place.

[comment]: <> are there restrictions within Open Shift we need to call out here? Also where do we draw the line betweeen "evangalizing modern things?" 

* []()
* [Patroni]()

### Front-end Frameworks

Display the data from your database in a modern, user-friendly way for end-users. 

* [ReactJS]()
* [VueJS]()

### Package Hosting and Management

Manage and publish your code artifacts to share them between code collaborators easily.

* [Artifactory](../)
* [GitHub Packages](../)

### Security

Protect the data of the citizen of BC with the appropriate tooling to abstract away secrets and access credentials. 

[comment]: <> same as above - do we need a landing page? Is this only within Open Shift? I know there are more things NRM is using. Renovate comes to mind? Is this how we convert Derek to an ally? Sounds like Nick worked with him a lot on this.

* [Vault](../docs/default/component/platform-developer-docs/docs/security-and-privacy-compliance/vault-getting-started-guide/)

### Quality

[comment]: <>  This probably needs an intermediary page, and maybe some of this moves up? The Open Shift stuff is definitely intertwined here...

Monitoring the health of your application to support delivering high-quality applications to citizens. 

Application Quality is the responsibility of individual teams, and not centralized under any other part of Government or any particular role. The Platform Services team has written some [Application Resiliency best practices](../docs/default/component/platform-developer-docs/docs/automation-and-resiliency/app-resiliency-guidelines/) that are largely useful for projects both inside and outside of Open Shift. 

* [OCP4 Backup And Restore]()
* [Persistent Storage Services]()
* [SonarQube Best Practices]()
* [SonarQube in the BC Gov Private Cloud]()
* [SonarQube on OpenShift]()
[comment]: <> why are there three pages here about sonarqube?