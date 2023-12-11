# Commonly Used Container Tools

For modern development practices, using Docker to handle building, running and deploying container images in a predictable way is the standard, and continues to be the recommended path for BC Government developers. This list elaborates on tooling to orchestrate Docker images in your development workflow.

|  Tool |  Licensing | Availability  | 
|---|---|---|---|---|
|  *Docker Desktop* |  While Docker is free, Docker Desktop now requires a license |  Check with your Ministry IMB |
|  *Podman* | RedHat's free alternative to Docker Desktop |  Open Source |
|  *Rancher* | Free alternative to Docker Desktop |  Open Source |

<details>
<summary>This content is open to contributions to improve it</summary>

As the Developer Experience Team, we know that our community knows of way more resources on this topic than we do!
If you know of another internal BC Government resource on this topic, please make a pull request to add it to the list and share with everyone.

</details>

## Docker Desktop

Docker Desktop allows you to seamlessly run linux Docker containers on a Windows or MacOS. 

Unfortunately, as of 2023 Docker Desktop requires a license for Government entities. 

Some ministries have procured licenses for their users. Please contact the CITZ IMB if you wish you re-use the PIA and STRA documentaiton to support your own procurement. 

## Podman

Podman is a drop-in replacement for Docker Desktop. It supports the concept of `pods` to share resources across containers.

It is compatible with Docker Images and compatible with the Docker CLI. 


## Rancher

Rancher is a drop-in replacement for Docker Desktop. 

It is compatible with Docker Images and compatible with the Docker CLI. It also provides support for local testing of Kubernetes.