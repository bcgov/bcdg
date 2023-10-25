# Commonly Used Package Hosting Tools

|  Tool |  Purpose | Support  | 
|---|---|---|---|---|
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

### Why Github Packages

### Resources

