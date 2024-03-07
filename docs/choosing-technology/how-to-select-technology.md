# How to Select Technology for your Stack

As part of the journey towards [modern digital service delivery](https://digital.gov.bc.ca/policies-standards/digital-plan/), the BC Government has opted for much more open choice of technology than it had historically. 

However, there are still processes and compliance required to do your due diligence.

* [Evaluate Open Source](/docs/default/component/bc-developer-guide/use-github-in-bcgov/evaluate-open-source-content/) options
* For non-Open Source options, follow proper [Procurement policies](https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/procurement)
* Make sure to complete the obligatory [Privacy](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/privacy/privacy-impact-assessments) and [Security](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/security-threat-and-risk-assessment) Assessments.
* Consult with your Ministry's ISB / IMB group to learn of any additional guidance or policies you may be required to follow. 

|                        | Choices for your project  | Compliance Responsibility | 
|------------------------|---------------------------|---------------------------|
| <td colspan=3> ## Open choice                                                  |
| ### Front-end frameworks    | ReactJS, VueJS, Angular                     | Team   | 
| ### Back-end frameworks     | Django, Express, NodeJS                     | Team   |
| <td colspan=3> ## Recommended                                                      | 
| ### Common Components       | [CHEFS](/docs/default/component/chefs-techdocs), [Keycloak SSO](/docs/default/component/css-docs), Digital Trust, [BC Address Geocoder](https://digital.gov.bc.ca/bcgov-common-components/bc-address-geocoder/), [Common Document Generation Service](https://digital.gov.bc.ca/bcgov-common-components/common-document-generation-service/), [Common Hosted Forms Service](https://digital.gov.bc.ca/bcgov-common-components/common-hosted-form-service/), [Common Hosted Email Service](https://digital.gov.bc.ca/bcgov-common-components/common-hosted-email-service/), [Common Object Management Service](https://digital.gov.bc.ca/bcgov-common-components/common-object-management-service/), [Get Token](https://github.com/bcgov/nr-get-token) | Shared | 
| ## Community tools         | [Backup Container](https://github.com/BCDevOps/backup-container), [Matomo OpenShift](https://github.com/BCDevOps/matomo-openshift/blob/master/README.md), [SonarQube](https://github.com/BCDevOps/sonarqube)  | Shared | 
| ### Database infrastructure | Mongo, Postgres, MySQL                        | Team   | 
| ### CI/CD                   |  GitHub Actions, ArgoCD, Tekton               | Team   | 
| ### Container tooling       |  Docker, Rancher, Podman                      | Team   |
| ### Package hosting         |  Artifactory, GitHub Packages                 | Team   | 
| <td colspan=3> ## Closed choice                                                      |
| ### Collaboration           | GitHub, Jira, Miro                            | OCIO   | 
| ### Hosting infrastructure  | [Private Cloud](/docs/default/component/platform-developer-docs), [Public Cloud](https://digital.gov.bc.ca/cloud/services/public/), [Managed Hosting](https://www2.gov.bc.ca/gov/content/bc-procurement-resources/buy-for-government/goods-and-services-catalogue/managed-hosting-services/data-centre-services?keyword=data&keyword=centre)  | Shared | 

## Reusable BC Government Services

The BC Government's Open Source ecosystem has produced a number of shared tools that are meant to be re-used across government projects to:

1. improve consistency for citizens 
2. decrease the cost to developing new services
3. increase the speed at which new services are delivered

* [Common Components](choosing-technology/common-components.md) 
* [Community-Contributed Tools](choosing-technology/community-contributed-tools.md)

## Commonly Adopted Tools

This list is not meant to prescribe tooling that is required to use, but to help surface best practices and common patterns already found within the organization to smooth out your exploration, learning and adoption curves. 

### CI/CD Pipeline Automation

Use automation triggers in your delivery process to improve your quality of life as a developer, and/or quality of your application. 

* [ArgoCD](../ci-cd/#argo-cd)
* [GitHub Actions](../ci-cd/#github-actions)
* [Tekton](../ci-cd/#tekton)

### Container Tooling

Improve your Docker workflow with orchestration tooling. 

* [Docker Desktop](../container-tooling#docker-desktop)
* [Podman](../container-tooling#podman)
* [Rancher](../container-tooling#rancher)

### Content Management Systems

Working on an application where the main user needs to contribute content without writing code? A CMS might be for you. Unless you have successfully made a business case otherwise, CMS Lite is the compliant option. 

* [CMS Lite](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/cms-lite-manual/cms-lite-access)

### Databases

Store and retreive your data in a persistent, secure place.

* [Patroni](/docs/default/component/platform-developer-docs/docs/database-and-api-management/postgres-how-to/)

### Front-end Frameworks

Display the data from your database in a modern, user-friendly way for end-users. These are the most commonly used.

* [ReactJS](https://react.dev)
* [VueJS](https://vuejs.org)

### Package Hosting and Management

Manage and publish your code artifacts to share them between code collaborators easily.

* [Artifactory](../package-hosting#artifactory)
* [GitHub Packages](../package-hosting#github-packages)

### Security

Protect the data of the citizen of BC with the appropriate tooling to abstract away secrets and access credentials. 

* [Vault](/docs/default/component/platform-developer-docs/docs/security-and-privacy-compliance/vault-getting-started-guide/)
* [ZAP](https://www.zaproxy.org)

<details>
<summary>This content is open to contributions to improve it</summary>

As the Developer Experience Team, we know that our community knows of way more resources on this topic than we do!
If you know of another internal BC Government resource on this topic, please make a pull request to add it to the list and share with everyone.

</details>