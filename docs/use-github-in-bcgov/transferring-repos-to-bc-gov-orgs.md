# Transferring repositories

This page explains the process to move repositories from a team or ministry's GitHub organization to either [bcgov](https://github.com/bcgov) or [bcgov-c](https://github.com/bcgov-c) GitHub organization.

Learn more about the [bcgov](https://github.com/bcgov) and [bcgov-c](https://github.com/bcgov-c) organizations in the [B.C. Government organizations in GitHub](bc-government-organizations-in-github.md) guide.

# The simplified process

GitHub keeps repository transfers simple. There are a few details you’ll need to take care of for most repositories (e.g. authorizing PATs, updating team access) and some other considerations that won’t apply to everyone (e.g., packages).

The bulk of the work revolves around updating and validating any deployment pipelines that reference your repositories.

Regardless of your repository source, take care to isolate changes to your development/test deployment environment and validate before promoting to production.

# Recommendations before you begin

The GitHub transfer function will:

* Transfer issues, pull requests, wiki, stars, and watchers
* Keep associations for webhooks, services, secrets, forks, and deploy keys
* Automatically redirect links and Git commands from the old repository to the new one
* **Exception:** Packages aren't transferred – see [Package management](#package-management) below

Review GitHub's [Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) documentation for a complete list of things that are transferred. Make note of the items that are not transferred.

## Setup

* Make sure all team members have joined the destination organization:
  * [How to join the bcgov organization](bc-government-organizations-in-github.md/#directions-to-sign-up-and-link-your-account-for-bcgov)
  * [How to join the bcgov-c organization](bc-government-organizations-in-github.md/#directions-to-sign-up-and-link-your-account-for-bcgov-c)
* Note: Outside collaborators aren't allowed in the [bcgov](https://github.com/bcgov) and [bcgov-c](https://github.com/bcgov-c) organizations.
* Users with individual access will retain the same level of access, provided they are members of the destination organization.
  * For transfers to [bcgov](https://github.com/bcgov), make sure at least one individual with 'admin' access on your repository is a member of the [bcgov](https://github.com/bcgov) organization. The access prevents loss of admin access after the transfer.
* Recreate teams in either the [bcgov](https://github.com/bcgov) or [bcgov-c](https://github.com/bcgov-c) organization.
  * Teams from other GitHub organizations won't transfer.
  * Users who only have access through a team in the source organization will lose access unless that team is recreated in the destination organization.
* Review GitHub's [Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) documentation.

## Repository transfer

### Transfer to the bcgov organization

Use the GitHub 'transfer' function on your repository. If you have many repositories to transfer, you can use a script. An example transfer script is available in the [developer-experience-team](https://github.com/bcgov/developer-experience-team/tree/main/utils/github/transfer-repos) repository.

### Transfer to the bcgov-c organization

Only the Developer Experience team has permission to transfer repositories into the [bcgov-c](https://github.com/bcgov-c) organization. Coordinate the transfer by [opening a service request ticket](https://citz-do.atlassian.net/servicedesk/customer/portal/2/group/9/create/294).

### Reverting

You can transfer back to the original organization if needed. If your pipelines are failing and it’s critical to restore the original repository, you can easily transfer back (without the Developer Experience team). Team access and package-repository links might be affected.

## Repository access

* You need to [configure SSO for any Personal Access Tokens (PATs) and SSH keys](github-transition-guide.md#resetting-github-keys) used to interact with the repository or its packages.
* Assign the recreated team(s) to the repository.
  * Teams assigned access through the GitHub transfer process will have 'read' access by default. Assign them the appropriate level of access as needed.

## Package management

* GitHub Packages aren't transferred between organizations.
  * Packages in the previous organization will become unlinked from their repository (if they were linked), and users will no longer inherit access from the repository.
  * Any users (or teams) who were inheriting access prior to de-linking will retain access after the transfer.
* Publishing packages: If you want to [publish to GitHub Packages](https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-docker-images#publishing-images-to-github-packages), use `ghcr.io` over `docker.pkg.github.com`.
* Migrating packages: If you want to migrate images between organizations on a container registry like GHCR, you can do so.
  * This might be necessary if you aren’t able to rebuild the images.
  * You can opt to rebuild all packages anew in either [bcgov](https://github.com/bcgov) or [bcgov-c](https://github.com/bcgov-c).

## GitHub Actions

* GitHub workflows that reference actions with repository redirects might break.
  * Example: A workflow that used `crazy-max/ghaction-docker-meta@v1` needed updating to `docker/metadata-action@v1`.
     * https://www.github.com/crazy-max/ghaction-docker-meta/tree/v1/ redirects to https://github.com/docker/metadata-action/tree/v1
* You may need to explicitly set [workflow permissions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token) if you change the repository's visibility from public to private.

## Repository references

Links and `git` commands to the previous repository will redirect to the new location, but to avoid confusion, [update all references](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories). If you are updating package references, be sure to recreate or migrate the packages first, since these are not transferred.

# Migration checklist

Here are some actions you should consider – not all will apply to everyone.

## Before migration

* Capture repository access
* Make sure team members have joined the destination organization
* Create teams in the destination organization

## Transfer

* Arrange for [transfer with the Developer Experience team](https://citz-do.atlassian.net/servicedesk/customer/portal/2/group/9/create/294), if necessary

## After migration

* Assign team(s) permissions to repository
* Add SSO authorization to PATs/SSH keys
* Rebuild or migrate packages
* Update repository references
* Validate build and deployment pipelines
