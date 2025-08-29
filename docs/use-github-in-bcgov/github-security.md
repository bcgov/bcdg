# Security Features for BC Government GitHub users

The BC government GitHub organizations (`bcgov` and `bcgov-c`) have various security features available to help protect the code and repositories within them. This page will highlight some of these features and provide recommendations on using them for BC government development teams.

## Availability

The features described here are available and enabled in both `bcgov` and `bcgov-c` organizations.

## Cost

In `bcgov` there is no cost to the organization for these security features as all repositories are public, and GitHub makes them available for free for public repositories. In `bcgov-c` there is a cost associated with the use of the features since the repositories are private, for which GitHub charges a fee; however the cost in `bcgov-c` is currently covered by the Developer Experience Team, so there is no cost to individual teams or ministries.

## Features

The following features are some of the major security features available in the BC government GitHub organizations:
 
- [Code scanning](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning): This feature scans code for security vulnerabilities and coding errors.
- [Secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning): This feature scans repositories and commits for sensitive information such as API keys, passwords, and other secrets. 
- [Dependabot](https://docs.github.com/en/code-security/dependabot): This feature scans repositories for outdated or vulnerable dependencies and provides recommendations for fixing problems, including via automated pull requests.

## Recommendations

Application and code security are a complex topics, and the features described above are just a few of the many tools available to help teams secure their code. The Developer Experience Team has the following recommendations specific to these features provided within GitHub:

- Keep the features enabled in your repositories. Even if some features can be reconfigured at the repository level, they are there to help you and your team secure your code.
- Use the Security Overview page for your repositories to see any issues detected by GitHub's security features. The Security Overview page is available in the repository under the "Security" tab.
- If you work on multiple repositories within `bcgov` or `bcgov-c`, you can use the [Security Overview for the organization](https://github.com/orgs/bcgov/security/overview) to see a summary of all security issues across multiple repositories in the organization.
- Take action on any issue surfaced by GitHub security features as soon as possible. The sooner you address issues - even if they are false positives that you dismiss without changes - the less likely they are to become a problem or become "noise" that you ignore.





