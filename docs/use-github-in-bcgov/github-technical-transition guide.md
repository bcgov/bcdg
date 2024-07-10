## Technical Transition Guide

Our technical transition guide helps GitHub users prepare for the upgrade, and confirms if users completed linking successfully. [Our IDIR transition guide](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/use-github-in-bcgov/github-transition-guide/) offers more details about IDIRs. 

After **July 30th, 2024**, users cannot access the bcgov GitHub organization if they didn’t link IDIRs and GitHub IDs. There are mechanisms in the system that force an IDIR login when you use your GitHub to login. 

## Completing authentication

GitHub doesn't offer users a verification of completion yet. There are 3 alternative ways to confirm completion: 

1) The video below shows the linking process from start to finish. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/-cfhUY_or8s?si=q0pjaxYd4FBhNZ0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2) If users **don't** have the "**Authenticate your account**" button on their dashboards, then authentication is complete.
  
3) Another way to check is to: 

    1) Go to your profile by clicking your avatar on the top right
    2) Click "Settings"
    3) Click "Enterprises"
    4) Check if you're a member of "Government of British Columbia
    5) If you are a member, then you've completed authentication


### User impacts 
 
The users impacted are: 

- Users with accounts attached to the [bcgov GitHub organization](https://github.com/bcgov). 
- Users who use GitHub as their authentication method to login to: 
  - [Private Cloud](https://developer.gov.bc.ca/docs/default/component/platform-developer-docs),  
  - [Public Cloud](https://developer.gov.bc.ca/docs/default/component/public-cloud-techdocs), 
  - [Stack Overflow](https://stackoverflow.developer.gov.bc.ca/),  
  - [Rocket.chat](https://chat.developer.gov.bc.ca/),  
  - Any other custom apps owned by the province that use membership in the bcgov organization to authenticate and authorize users 
 - Teams relying on integrations that need access to the bcgov org, for example: 
  - GitHub or OAuth apps to automate the release or testing of your code, including 3rd party security tools 
  - Access tokens and/or SSH keys that your app or team may rely on that will be disconnected when user access is removed, IDE or command line tools and/or automation scripts

### Process  

### Outside Collaborators

We’re starting with enabling SSO for direct government workers and contractors. After completing the transition for them, we’ll focus on enabling SSO for [outside collaborators](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization).

Moving forward, **bcgov** GitHub organization needs mandatory and full membership. An option won’t be available to add outside collaborators anymore. 

#### Distinguishing between outside collaborators and contractors 

Outside collaborators aren’t members of B.C. Government’s GitHub organizations.  If the GitHub banners reminding users to upgrade to SSO doesn’t come up for you, then you’re likely an outside collaborator. 

### IDIRs

#### IDIR expiry

Government employees don’t have expiry dates on their IDIR, only contractor IDIRs do. If you’re a contractor and your IDIR expires, then you won’t have general access anymore. Each ministry must manage contractor IDIRs because our team doesn’t have the capability to change expiry dates.

Our [transition guide about IDIRs](#idirs) has more relevant information.

#### Multiple IDIRs

Developers with multiple IDIRs can link their most permanent IDIR to their GitHub ID. They can change IDIRs at any time. We tested and can confirm that users make changes on their own.

The important things to keep in mind are:

- The IDIR must not be expired
- The Developer Experience team cannot manage IDIR expiry dates for teams

### No new GitHub ID needed

GitHub differs from other tools that use IDIR as the user account to access services.

The reason is due to GitHub’s open source code community ecosystem. A part of our commitment to open government is the bcgov GitHub organization. We set up GitHub accounts to be associated with many different repositories and organizations because throughout their careers, developers contribute to many different open projects and organizations.

With the GitHub SSO upgrade, contractors and developers working in the bcgov GitHub organization will continue to use their GitHub to login to access GitHub. The extra step is the prompt to login to IDIR to comply with security policies. 

### Resetting GitHub Keys

VS Code users get prompts automatically. If you don’t use VS Code, there are 3 GitHub guides that can help:

- [About authentication with SAML SSO](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on#about-authorization-of-ssh-keys)
- [Authorizing a personal access token for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)
- [Authorizing an SSH key for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on#authorizing-an-ssh-key)
- Authorizing the `gh` cli tool: reauthenticate your linked github account with `gh auth login` and following the steps in your terminal

### GitHub bcgov organization removal

After July 30th, 2024, if a contractor IDIR expires, they won’t automatically be removed from the bcgov GitHub organization. This may change in the future.

Although contractors won’t be removed, they won’t have write access the bcgov GitHub organization.

We continue to work towards connecting IDIR expiry to automatic account removal.
