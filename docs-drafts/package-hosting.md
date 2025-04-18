# Commonly Used Package Hosting Tools

|  Tool |  Purpose | Support  | 
|---|---|---|
|  *Artifactory* |  Package hosting and management |  Available within OpenShift |
|  *GitHub Packages*  |  Package hosting and management |  Available for `bcgov-c` and `bcgov-ent` repositories ???? |

## Artifactory

Artifactory is a package management tool that comes with all applications hosted within Open Shift. 

### Why Artifactory

* Caches/proxies for all major public artifact repositories/registries and several private repositories/registries where BC Government owns licensed access, reducing build time and network traffic. 
* Quota-limited storage where teams have full control to push and pull and manage access their own artifacts of any type. 
* Automatic inclsuion of the Xray add-on service for security scanning for all objects in Artifactory.

### Resources

* [Image and artifact management in OpenShift](../docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/image-artifact-management-with-artifactory/)

[comment]: <> This one feels like it could be replaced with generic links to other resources, but that falls into the bucket of "guidance for good documentation for teams" than something I'm worried about at this stage? 
* [Pushing and pulling artifacts](../docs/build-deploy-and-maintain-apps/push-pull-artifacts-artifactory/)
* [Setting up a project](../docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/setup-artifactory-project-repository/)
* [Setting up an account](../docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/setup-artifactory-service-account/)

## Github Packages

Artifactory is a package management tool that is available within GitHub.

### Why Github Packages

GitHub Packages is an alternative to Artifactory, without any limitations or connection to your code being in OpenShift. However, it may come with additional cost to your team to achieve the required storage. Contact the Developer Experience team to learn more. 

<details>
<summary>This content is open to contributions to improve it</summary>

As the Developer Experience Team, we know that our community knows of way more resources on this topic than we do!
If you know of another internal BC Government resource on this topic, please make a pull request to add it to the list and share with everyone.

</details>