# Rocket.Chat help: developing stronger questions
Last updated: **April 16, 2023**

## On this page
* [**The 'how' and 'what'**](#the-'how'-and-'what')
* [**How**](#how)
* [**What**](#what)
* [**The 'where'**](#the-'where')
* [**The 'when'**](#the-'when')
* [**Post the question**](#post-the-question)
* [**Related pages**](#related-pages)
<!-- ### End of "On this page" -->
---

The best support on Rocket.Chat comes when users ask detailed questions. They help us, the platform community on Rocket.Chat, to respond quicker. An ideal user question looks like the example below:

> I've setup a new caddy webserver on OpenShift. I've created a route for it. But when I go to the url in my web browser I get an error page with "Application is not available". I confirmed the URL in the browser matches the route. I've tried with different browsers. I've checked the web server logs and the server is running with no errors. Here is my route:


> **route.yml YAML**

    kind: Route
    apiVersion: route.openshift.io/v1
    metadata:
     name: my-web-server
     namespace: abcd12-dev
     labels:
      app: my-web-server
      group: my-project
    spec:
     host: my-web-server-abcd12-dev.apps.silver.devops.gov.bc.ca
     to:
      kind: service
      name: my-web-server
      weight: 100
     port:
      targetPort: web
     tls:
      termination: edge
      insecureEdgeTerminalPolicy: Redirect
     wildcardPolicy: None

The user tells us the where, when, what, and how of an issue. We want to know what you expected, what happened, and in what environment, the problem happened. Before connecting with the community, check [Jon Skeet's checklist](https://codeblog.jonskeet.uk/2012/11/24/stack-overflow-question-checklist/) if you've done everything possible before posting to Rocket.Chat.

Below, we offer more guidance to strengthen a question. Strong questions simplify the response time from a platform community member. 

## The 'how' and 'what'

### How

Please tell us the problem, what you expected when doing a task, and the importance of it.

If it’s a sensitive task, please specify confidentiality is necessary. Being forthcoming about confidentiality stops us from expecting more information.  

**Please don’t include** sensitive artifacts, like passwords, tokens, API keys, etc.

### What

1. Tell us about the nature of the problem, what it looks like and how it’s behaving. For example, if a screen doesn’t load as you expected, give us a description of what it looks like, and what it should look like.

    **Please note:** Screenshots, while helpful, won’t be accessible without alt text.  

2. After detailing the problem, we want to know what troubleshooting you tried. Being proactive helps us narrow down solutions and stops repetition.  

    Please give us a link to the source if you followed steps on a StackOverflow thread or read documentation about the problem.

3. Last, please tell us what type of help you’re looking for. A solution, link to resources, and/or another way to complete a task? Please be very clear so we don’t resort to guessing. 

## The 'where'

Tell us about the environment the problem happened in: 
-	In a cluster, let us know the namespace and cluster name. 
- With a stack, let us know what languages and libraries you used, including which versions.  
- With a tool, please specify which platform tool. 
- With a web application, please specify which browser, browser version, and device.
     - A Mac, a Windows machine, an iPhone, an Android, or another device?

 ## The 'when'

 Timestamps help! Please consider letting us know: 
- The date
- The time, including time zone if different from P.S.T. 
- If working on a legacy task, the timestamp of the original work


## Post the question

When you finish writing the detailed question, please revisit [Jon Skeet's checklist](https://codeblog.jonskeet.uk/2012/11/24/stack-overflow-question-checklist/) to make sure you're being efficient. Then, post it in the best Rocket.Chat channel. 

If you're not being proactive about your steps, then the community might miss the question in favour of responding to the ones specific for the channel. 

If unsure of where to post or other questions and/or concerns, connect with us at developer.experience@gov.bc.ca.

---
## Related pages

- [Steps to join Rocket.Chat](steps-to-join-rocketchat.md)
- [Rocket.Chat etiquette](rocketchat-etiquette.md)
- [Rocket.Chat channel descriptions](rocketchat-channel-descriptions.md)
- [Official Rocket.Chat documentation](https://docs.rocket.chat/)
