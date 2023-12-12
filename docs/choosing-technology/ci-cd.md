# Commonly Used CI/CD Tools

|  Tool |  Purpose | Support  | 
|---|---|---|
|  *Argo CD* |  GitOps continuous delivery tool for Kubernetes |  Availabe within OpenShift |
|  *GitHub Actions*  |  GitOps continuous integration and delivery tool for Github |  Available for all GitHub repositories |
|  *Tekton*  | GitOps continuous integration and delivery tool |  Available within OpenShift |

## Argo CD

Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes (the foundation of OpenShift). You can use it to implement a GitOps-style deployment service. 

### Why Argo CD

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

GitHub Actions is available within our BCGov and BCGov Enterprise GitHub organizations to assist with automation of your build and deployment pipelines

### Why Github Actions

* Lots of community support

* Easy to learn

* Easy to integrate with your code already in GitHub


## Tekton

Tekton is the RedHat flavour of GitOps, available within your OpenShift Private Cloud Environment.

### Why Tekton

* No limitations on runners

* Integration with our RedHat tooling

### Resources

[Integrating Tekton with OpenShift](../docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/deploy-an-application/#1-integrating-the-deployment-process-into-a-cicd-pipeline)

<details>
<summary>This content is open to contributions to improve it</summary>

As the Developer Experience Team, we know that our community knows of way more resources on this topic than we do!
If you know of another internal BC Government resource on this topic, please make a pull request to add it to the list and share with everyone.

</details>