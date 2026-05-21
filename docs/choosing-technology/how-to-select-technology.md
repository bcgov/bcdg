# Choosing project technology 

Every team and ministry has different needs, but in CSBC we are working towards finding, supporting and improving standard tools to be widely adopted across our technology ecosystem. Choosing the widely adopted technology makes it easier for us to build the foundation of excellent user experience, and support applications in the long term. 

We offer many options within B.C. government systems. The tables below show a cross-section of some technology that developers should try to use. Users can click each option to get more information about it.  

``` Pull requests to improve this documentation are welcome. Click the "edit" button at the top right, fork the repo and make a pull request back into the base branch. ```

## Current technology options

Although there's numerous choices, the options in the table below aren't exhaustive. Every team should do its own research before deciding which technology best suits their needs and context.

Please note the following important considerations: 

- The [Core Policy and Procedures Manual **(CPPM)**  Chapter 6: Procurement](https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/procurement)
- Information Management Branch **(IMB)** and/or Security Information Branch **(SIB)** requirements, policies or guidance.
- [Privacy and Security compliance](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/security/security-and-privacy-compliance-and-guidance/)
- Our [open-source content evaluation doc](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/evaluate-open-source-content/) 

### Development Frameworks
Column 1 lists the technology type. Column 2 lists the documentation for the choices under that type. 

|Type| Documentation |
|----| ------|
|Programming languages|[Python](https://github.com/bcgov?q=&type=all&language=python&sort=), [Javascript](https://github.com/bcgov?q=&type=all&language=javascript&sort=), [TypeScript](https://github.com/bcgov?q=&type=all&language=typescript&sort=), [Java](https://github.com/bcgov?q=&type=all&language=java&sort=), [R](https://github.com/bcgov?q=&type=all&language=r&sort=), [C#](https://github.com/bcgov?q=&type=all&language=c%23&sort=), [PHP](https://github.com/bcgov?q=&type=all&language=php&sort=)
|Back-end| [Django](https://www.djangoproject.com/), [Flask](https://flask.palletsprojects.com/en/2.2.x/), [Express](https://expressjs.com/), [NestJS](https://nestjs.com/), [Spring Boot](https://spring.io/projects/spring-boot)[.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet), [Laravel](https://laravel.com/)
|Front-end| [React](https://reactjs.org/), [Vue](https://vuejs.org/)|


### Application Development Tooling
Column 1 lists the technology type. Column 2 lists the documentation for the choices under that type. Column 3 lists information for BC Government related support channels, if applicable.

|Type| Documentation | Support |
|----| ------|------|
| Artifact & Package Management | [Artifactory*](https://developer.gov.bc.ca/docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/setup-artifactory-project-repository/), [GitHub Packages](https://docs.github.com/en/packages) | [OpenShift-howto-artifactory](https://teams.microsoft.com/l/channel/19%3A81e5eb5e92254e47badf383502bd3447%40thread.tacv2/OpenShift-howto-artifactory?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
| CI/CD (Continuous Integration / Continuous Delivery) & Gitops | [GitHub Actions](https://github.com/features/actions), [ArgoCD*](/docs/default/component/platform-developer-docs/docs/automation-and-resiliency/argo-cd-usage/), [Tekton/OpenShift Pipelines](/docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/deploy-an-application/#1-integrate-deployment-into-a-cicd-pipeline) | [DevX Team Support Requests](https://citz-do.atlassian.net/servicedesk/customer/portal/2), [GitHub-howto](https://teams.microsoft.com/l/channel/19%3Aae5f84cbecd3430793841f3944632767%40thread.tacv2/GitHub-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) [OpenShift-howto-argocd](https://teams.microsoft.com/l/channel/19%3A5d971c5af20d4c6dbab8f7213671aaaf%40thread.tacv2/OpenShift-howto-argocd?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
| Infrastructure as Code (IaC) | [Terraform](https://www.terraform.io/) | 
| Logging & Observability | [Loki](/docs/default/component/platform-developer-docs/docs/app-monitoring/best-practices-for-application-logging-in-openshift/#console-logs-in-loki)| 
| Performance Monitoring |[Sysdig*](/docs/default/component/platform-developer-docs/docs/app-monitoring/sysdig-monitor-setup-team/) | [OpenShift-howto-sysdig](https://teams.microsoft.com/l/channel/19%3A93dff023d40c4440b26cf9c0b236a93f%40thread.tacv2/OpenShift-howto-sysdig?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) | [OpenShift-howto-sysdig](https://teams.microsoft.com/l/channel/19%3A93dff023d40c4440b26cf9c0b236a93f%40thread.tacv2/OpenShift-howto-sysdig?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
| Secrets Management |[Vault*](/docs/default/component/platform-developer-docs/docs/secrets-management/vault-getting-started-guide/)| [OpenShift-howto-vault](https://teams.microsoft.com/l/channel/19%3A0ed86e1a6dd74b62a7d965f1a6954c56%40thread.tacv2/OpenShift-howto-vault?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
| Status & Alerts | Known gap
| Source Control & Collaboration | [GitHub](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/quick-reference/) | [DevX Team Support Requests](https://citz-do.atlassian.net/servicedesk/customer/portal/2), [GitHub-howto](https://teams.microsoft.com/l/channel/19%3Aae5f84cbecd3430793841f3944632767%40thread.tacv2/GitHub-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)


\* these tools are currently only corporately available only within the Private Cloud ecosystem

### Collaboration & Knowledge Sharing
Column 1 lists the technology type. Column 2 lists the documentation for the choices under that type. Column 3 lists information for BC Government related support channels, if applicable.

|Type| Documentation | Support |
|----| ------|------|
| Chat & Video | [MS Teams](https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software)
| Design & mockups | Figma
| Technical Documentation | [DevHub Techdocs](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/content-partner-guide/) 
| Technical Q&A | [GitHub Discussions](https://github.com/features/discussions), 
|Ticketing and backlog| [JIRA](https://www.atlassian.com/software/jira) 


### Common Components
Column 1 lists the technology type. Column 2 lists the documentation for the choices under that type. Column 3 lists information for BC Government related support channels, if applicable.

|Type| Documentation | Support |
|----| ------|------|
|Address Geocoding| [BC Address Geocoder](https://digital.gov.bc.ca/bcgov-common-components/bc-address-geocoder/)
| Analytics| BC Gov Managed Snowplow
| Design System | [Design System](https://digital.gov.bc.ca/bcgov-common-components/design-system/)
| Document Generation| [Common Document Generation Service](https://digital.gov.bc.ca/bcgov-common-components/common-document-generation-service/)
|Email generation| [Common Hosted Email Service](https://digital.gov.bc.ca/bcgov-common-components/common-hosted-email-service/)
|Forms | [Common Hosted Forms Service](https://digital.gov.bc.ca/bcgov-common-components/common-hosted-form-service/)
| Grants | Unity
| Identity verification | [Digital Trust](https://digital.gov.bc.ca/digital-trust/home/)
|Maps | [Simple Map Kit](https://digital.gov.bc.ca/bcgov-common-components/simple-map-kit/)
| Notifications | Notifications Team
| Object Management | [Common Object Management Service](https://digital.gov.bc.ca/bcgov-common-components/common-object-management-service/)
| Pay Authorizization | Pay Auth
| Permitting | Permit Connect Navigator Service (PCNS)
|Route planning | [BC Route Planner](https://digital.gov.bc.ca/bcgov-common-components/bc-route-planner/)
| Single sign on | [Keycloak SSO](docs/default/component/css-docs)
| Workflow | BC Gov managed n8n

### Integration and data
Column 1 lists the technology type. Column 2 lists the documentation for the choices under that type. Column 3 lists information for BC Government related support channels, if applicable.

|Type| Documentation | Support |
|----| ------|------|
|API Gateway & Secure Data Exchange| [API Gateway](https://digital.gov.bc.ca/bcgov-common-components/api-program-services/)
| Data Catalogue | [BC Data Catalogue](https://catalogue.data.gov.bc.ca)
| Data & Analytics Platform | [Microsoft Fabric](https://developer.gov.bc.ca/docs/default/component/public-cloud-techdocs/azure/azure-services/external-fabric/) | 
|Middleware and databases| PostgreSQL, MySQL, MongoDB, Kafka, Redis, NATS                                                                          

### AI Services
Column 1 lists the technology type. Column 2 lists the documentation for the choices under that type. Column 3 lists information for BC Government related support channels, if applicable.

|Type| Documentation | Support |
|----| ------|------|
| Secure AI Models as a service | AI Services Hub
| Forms validation | AI Forms Assist
| Chatbot | AI Chatbot

## Application hosting services options

Each service offers unique features and capabilities that creates a secure and compliant environment for digital service hosting. Only services supported by Connected Services B.C. **(CSBC)** are listed:

- **Data centre: traditional hosting**: offers traditional managed hosting services for virtual and physical systems. It supports numerous operating systems and techonologies. 
 
- **Private Cloud: Red Hat OpenShift**: combines on-premise and cloud benefits. It offers a self-serve, secure, indepedent and scalable platform for hosting applications.

- **Public Cloud: Amazon Web Services (AWS) and Azure**: offers Enterprise support from AWS and Azure, a centralized and supported environment, rapid scalability, and simplified procurement.

- **Software as a Service (SaaS)**: offers ready-to-use software applications, hosted and managed by third-party providers. 

Technical teams can use the table below for comparing Data centres, Private and Public cloud platforms.  

**Application hosting services comparison table**

Column 1 lists features, column 2 lists Data centre traditional hosting features, column 3 lists Private cloud OpenShift platform features, and column 4 lists Public cloud Azure and AWS Landing Zones features.

|   | Data centre traditional hosting  |  [Private cloud OpenShift platform](docs/default/component/platform-developer-docs) | [Public cloud Azure and AWS Landing Zones](docs/default/component/public-cloud-techdocs)  |
|---|--------------------------------------|-----------------------------------|--------------------------------|
|Plaform recommended for mission critical applications? |Yes|Yes|No|
|The recommended technical skillsets| <li> Server administration <br><li> Security operations <br><li> Technical architecture <br><li> Application development <br><li> Database administration |  <li> DevOps <br><li> Full-stack development <br><li> Site reliability engineering <br><li> Security operations <br><li> Database administration | <li> DevOps <br><li> Full-stack development <br><li> Site reliability engineering <br><li> Security operations <br><li> Technical architecture <br><li> Network and infrastructure operations <br><li> Database administration |
|The hosting environment|Virtual machines and physical hardware| Containerized|Containerized and serverless|
|The highest [data classification](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/618_information_security_classification_standard.pdf)  | Protected C|Protected B and C|Protected B|
| The procurement process | [iStore order](https://ssbc-client.gov.bc.ca/order/istore.htm) | [Registry (a self-serve system](https://registry.developer.gov.bc.ca/login)  | [Registry (a self-serve system)](https://registry.developer.gov.bc.ca/login)  |
| The elasticity and scalability potential | <li>Low<br><li>Resource must be pre-purchased | <li>Medium - High<br><li> Maximum allowed by project resource quota | <li>High<br><li> Scale as needed, limited only by product budget|
|Additional services offered |  <li> Software Defined Network <br><li> S3 Object Store | <li> Software Defined Network <br><li> S3 Object Store <br><li> AI/ML <br><li> Security tools  |  <li> Checkpoint CSPM <br><li> All AWS IaaS/PaaS services available in Canada central region (ca-central-1) and United States east coast (us-east-1). <li>Does not include Marketplace services |
|The expertise available|  <li>High <br><li> Extensive expertise within CSBC | <li> High <br><li> Extensive expertise within CSBC | <li>Medium <br><li> CSBC is developing expertise to support clients  |
| The support assigned to product team|  [Review shared responsibility model](https://digital.gov.bc.ca/technology/cloud/hosting-services/#shared) |[Review shared responsibility model](https://digital.gov.bc.ca/technology/cloud/hosting-services/#shared)|[Review shared responsibility model](https://digital.gov.bc.ca/technology/cloud/hosting-services/#shared)|
