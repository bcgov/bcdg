# Choosing project technology 

Every team and ministry has different needs. Choosing the suitable technology builds the foundation of excellent user experience. 

We offer a wide range of options within B.C. Government systems. The tables below show a cross-section of some technology that developers can use. Each option links to more information about it. 


## Current technology options

Although there's numerous choices displayed, the table below isn't exhaustive, nor represents an endorsement of any particular option. Every team should do its own research before deciding which technology best suits their needs and context.

Please note the following important considerations that can impact choices: 

- [Core Policy and Procedures Manual **(CPPM)**  Chapter 6: Procurement](https://www2.gov.bc.ca/gov/content/governments/policies-for-government/core-policy/policies/procurement)
- Information Management Branch **(IMB)** and/or Security Information Branch **(SIB)** requirements, policies or guidance.
- [Privacy and Security compliance](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/security/security-and-privacy-compliance-and-guidance/)
- [Open-source content evaluation](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/evaluate-open-source-content/) 

### Development Frameworks

|Type| Choice|
|----| ------|
|Programming languages|[Python](https://github.com/bcgov?q=&type=all&language=python&sort=), [Javascript](https://github.com/bcgov?q=&type=all&language=javascript&sort=), [TypeScript](https://github.com/bcgov?q=&type=all&language=typescript&sort=), [Java](https://github.com/bcgov?q=&type=all&language=java&sort=), [R](https://github.com/bcgov?q=&type=all&language=r&sort=), [C#](https://github.com/bcgov?q=&type=all&language=c%23&sort=), [PHP](https://github.com/bcgov?q=&type=all&language=php&sort=)
|Back-end| [Express](https://expressjs.com/), [NestJS](https://nestjs.com/), [Django](https://www.djangoproject.com/), [Flask](https://flask.palletsprojects.com/en/2.2.x/), [.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet), [Laravel](https://laravel.com/)
|Front-end| [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/)|
|Code and artifact management| [GitHub](https://github.com/bcgov), [Artifactory](http://artifacts.developer.gov.bc.ca/), [GitHub Packages](https://docs.github.com/en/packages)
|Automation tools| [GitHub Actions](https://github.com/features/actions), [ArgoCD](https://argoproj.github.io/argo-cd/), [Terraform](https://www.terraform.io/), [Tekton/OpenShift Pipelines](https://tekton.dev/) 

### Hosting and operations
|Type| Choice|
|----| ------|
|Operations support and security| Sysdig, StatusCake, Loki, Splunk, [Vault](https://www.vaultproject.io)          
|Application hosting| [Learn about application hosting options](#application-hosting-services-options)    


### Collaboration
|Type| Choice|
|----| ------|
|Collaboration tools| [JIRA](https://www.atlassian.com/software/jira), [GitHub Discussions](https://github.com/features/discussions), [GitHub Issues](https://github.com/features/issues), [MS Teams](https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software),  [Loop](https://www.microsoft.com/en-us/microsoft-365/loop)
|Common Components| [Digital Trust](https://digital.gov.bc.ca/digital-trust/home/), [Keycloak SSO](docs/default/component/css-docs),[Design System](https://digital.gov.bc.ca/bcgov-common-components/design-system/), [Common Document Generation Service](https://digital.gov.bc.ca/bcgov-common-components/common-document-generation-service/), [Common Hosted Forms Service](https://digital.gov.bc.ca/bcgov-common-components/common-hosted-form-service/), [Common Hosted Email Service](https://digital.gov.bc.ca/bcgov-common-components/common-hosted-email-service/), [Common Object Management Service](https://digital.gov.bc.ca/bcgov-common-components/common-object-management-service/), [BC Address Geocoder](https://digital.gov.bc.ca/bcgov-common-components/bc-address-geocoder/), [BC Route Planner](https://digital.gov.bc.ca/bcgov-common-components/bc-route-planner/), [Simple Map Kit](https://digital.gov.bc.ca/bcgov-common-components/simple-map-kit/)


### Integration and data
|Type| Choice|
|----| ------|
|API and data services| [API Gateway](https://digital.gov.bc.ca/bcgov-common-components/api-program-services/), [BC Data Catalogue](https://catalogue.data.gov.bc.ca)
|Middleware and databases| PostgreSQL, MySQL, MongoDB, Kafka, Redis, NATS                                                                          
## Application hosting services options

Each service offers unique features and capabilities that creates a secure and compliant environment for digital service hosting. Only services supported by Connected Services B.C. **(CSBC)** are listed:

- **Data centre: traditional hosting**: offers traditional managed hosting services for virtual and physical systems. It supports numerous operating systems and techonologies. 
 
- **Private Cloud: Red Hat OpenShift**: combines on-premise and cloud benefits. It offers a self-serve, secure, indepedent and scalable platform for hosting applications.

- **Public Cloud: Amazon Web Services (AWS) and Azure**: offers Enterprise support from AWS and Azure, a centralized and supported environment, rapid scalability, and simplified procurement.

- **Software as a Service (SaaS)**: offers ready-to-use software applications, hosted and managed by third-party providers. 

Technical teams can use the table below compares the three to help choose the best hosting platform for their product. 

**Application hosting services comparison table**

Column 1 lists features, column 2 has Data centre traditional hosting features, column 3 has Private cloud OpenShift platform features, and column 4 has Public cloud Azure and AWS Landing Zones features.

|   | Data centre traditional hosting  |  [Private cloud OpenShift platform](docs/default/component/platform-developer-docs) | [Public cloud Azure and AWS Landing Zones](docs/default/component/public-cloud-techdocs)  |
|---|--------------------------------------|-----------------------------------|--------------------------------|
|Recommended for mission critical applications |Yes|Yes|No|
|Recommended technical skillset| <li> Server administration <br><li> Security operations <br><li> Technical architecture <br><li> Application development <br><li> Database administration |  <li> DevOps <br><li> Full-stack development <br><li> Site reliability engineering <br><li> Security operations <br><li> Database administration | <li> DevOps <br><li> Full-stack development <br><li> Site reliability engineering <br><li> Security operations <br><li> Technical architecture <br><li> Network and infrastructure operations <br><li> Database administration |
|Hosting environment|Virtual machines and physical hardware| Containerized|Containerized and serverless|
|Highest [data classification](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/618_information_security_classification_standard.pdf)  | Protected C|Protected B and C|Protected B|
| Procurement | [iStore order](https://ssbc-client.gov.bc.ca/order/istore.htm) | [Self-serve online](https://registry.developer.gov.bc.ca/login)  | [Self-serve online](https://registry.developer.gov.bc.ca/login)  |
| Elasticity and scalability | <li>Low<br><li>Resource must be pre-purchased | <li>Medium - High<br><li> Maximum allowed by project resource quota | <li>High<br><li> Scale as needed, limited only by product budget|
|Additional services|  <li> Software Defined Network <br><li> S3 Object Store | <li> Software Defined Network <br><li> S3 Object Store <br><li> AI/ML <br><li> Security tools  |  <li> Checkpoint CSPM <br><li> All AWS IaaS/PaaS services available in Canada central region (ca-central-1) and United States east coast (us-east-1). <li>Does not include Marketplace services |
|Expertise available|  <li>High <br><li> Extensive expertise within CSBC | <li> High <br><li> Extensive expertise within CSBC | <li>Medium <br><li> CSBC is developing expertise to support clients  |
| Support assigned to product team|  [Review shared responsibility model](https://digital.gov.bc.ca/technology/cloud/hosting-services/#shared) |[Review shared responsibility model](https://digital.gov.bc.ca/technology/cloud/hosting-services/#shared)|[Review shared responsibility model](https://digital.gov.bc.ca/technology/cloud/hosting-services/#shared)|
