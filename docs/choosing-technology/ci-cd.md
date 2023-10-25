# Commonly Used CI/CD Tools

|  Tool |  Purpose | Support  | 
|---|---|---|---|---|
|  *Argo CD* |  GitOps continuous delivery tool for Kubernetes |  Availabe within OpenShift |
|  *GitHub Actions*  |  GitOps continuous integration and delivery tool for Github |  Available for all GitHub repositories |
|  *Tekton*  | GitOps continuous integration and delivery tool |  Available within OpenShift |


## Argo CD

[comment]: <> This information is poached fro the Platform Services docs... probably want to edit it out there and link back?

Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes (the foundation of OpenShift). You can use it to implement a GitOps-style deployment service. 

### Why Argo CD

// poached from https://mvp.developer.gov.bc.ca/docs/default/component/platform-developer-docs/docs/automation-and-resiliency/cicd-pipeline-templates-for-private-cloud-teams/#choose-a-technology. Again maybe we need to work with them to move it up a level?

ArgoCD provides more control over the success of the deployment and brings many other benefits of the infrastructure as code/GitOps approach, such as:

* Observability

* Improved stability and consistency

* An improved security model

* It is efficient, well supported, and well documented.

* It can reduce the maintenance overhead of pipelines

* It will help you to reduce resource consumption by using a shared service

### Resources

* [Configuring Argo CD within OpenShift](../docs/default/component/platform-developer-docs/docs/automation-and-resiliency/argo-cd-usage/#enable-argo-cd-for-your-project-set)


## Github Actions

### Why Github Actions

### Resources



## Tekton

### Why Tekton

### Resources

[Integrating Tekton with OpenShift](../docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/deploy-an-application/#1-integrating-the-deployment-process-into-a-cicd-pipeline)