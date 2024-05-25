# `bcgov` GitHub organization SSO Transition

Starting June 30th, 2024 at long last we will begin transitioning OCIO-managed GitHub Organizations to require SSO to log in. 

This already-planned work we know you have been waiting for was accelerated in response to the recent security incidents impacting the province. *There is no evidence that GitHub has been impacted by any security incidents* but we also know that multi-factor authentication is the most effective layer of protection we can quickly and easily add to protect us from any future nefarious actors. 

Your assistance in logging into GitHub as promptly after June 30th to secure your account is greatly appreciated. 

## Why this is better

* Enhanced security with multi-factor authentication.
* Access to an enterprise security reporting dashboard to help monitor in the event of future security concerns.
* Future opportunities to collect our umbrella of code scanning tooling into DevHub to allow you to see the status of your code in one tool instead of many different tools.

## Who is impacted

- Users who have accounts attached to an OCIO-managed GitHub organizations, starting first with the [bcgov org](https://github.org/bcgov).
- Users who use GitHub as their authentication method to:
    - [Open Shift](), 
    - [Stack Overflow](), 
    - [Rocket.chat](), 
    - Any other custom access points linked to the bcgov organization in your ministry or team.

## What's changing

Previously, users used their personal GitHub IDs to log into the bcgov GitHub org at no cost to ministries.

Going forward, users will need to link their person GitHub ID to an IDIR account. The cost to ministries for GitHub user licenses will not change, but for the first phase of roll out, [IDIR accounts will need to be purchased for contracted resources without one already](sso-transition-faqs.md#idir-faqs). 

## Timelines

### Phase 1: SSO is enabled, but not required (June 30th - September 13th)
- Optional: If you are a contractor that does not already have an IDIR with O365 access: 
    - Follow the instructions below to [request a new IDIR](sso-transition-faqs.md#i-am-a-contractor-who-doesnt-already-have-an-idir-account-today-what-kind-do-i-need) or [request an upgrade your existing one](sso-transition-faqs.md#i-am-a-contractor-who-has-an-idir-account-but-it-doesnt-have-an-o365-license-attached). 
    - It may take several days to process this depending on your ministry, so we recommend proceeding with this step as soon as possible to avoid delays in access.
- Log into GitHub and follow the prompts on the pop up to connect your GitHub and IDIR accounts together. Your access is now guaranteed. However, if you have any issues, please submit a support request to [the Developer Experience team]().

### Phase 2: SSO is required (September 13th onwards)
- The first time you log into GitHub after September 13th GitHub will prompt you to [reset your keys](sso-transition-faqs.md#how-do-i-reset-my-github-keys).
- Optional: If you did not link your IDIR to your GitHub account BEFORE September 13th you will have had your account automatically removed from the organization. You will need to [follow these steps to regain access](sso-transition-faqs.md#how-do-i-regain-access-to-the-bcgov-github-org-if-i-was-locked-out-after-september-13th).

### Future phases
- The bcgov-c, BCDevOps organizations will also move to requiring SSO on their own timelines. 
    - If you have already connected your GitHub ID to SSO for the bcgov organization, you will not be impacted by this change
    - If you are only a member of bcgov-c or BCDevOps, you will be required to follow the steps as outlined above. [Sign up to the DevX newsletter]() to stay in touch about these changes.
- If you are part of an existing BC Gov private Enterprise organization, we will be in touch with your IMB/ISB to plan migration. Expect communications from them when it is time for your team to migrate your code.  

## Support

For more information, please see our [FAQs](sso-transition-faqs.md). 

For help with access, please [submit a support request](). 