# Developing better questions

The best support on Rocket.Chat comes when users ask detailed questions. They help the community respond quicker. Here's an example of a clear and detailed user question:

> I've set up a new caddy web server on OpenShift that serves static web pages. I've created a Route for it, but when I go to the URL in my web browser I get an error page with the error message "Application is not available". I confirmed that the URL in the browser matches the route. I've tried with different browsers. I've checked the web server logs and the server is running with no errors. I've include my Route definition below. Does anyone have suggestion on how I might get past this error and see the content I expect in my browser?


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

The user includes the where, when, what, and how of an issue. The community wants to know what they expected, what happened, and in what environment the problem happened. Before connecting with other users, check Jon Skeet's [Stack overflow question checklist](https://codeblog.jonskeet.uk/2012/11/24/stack-overflow-question-checklist/) to confirm that you've done everything possible before posting.

There's more guidance to strengthen a question below. Better questions make it easier to respond quicker.

## The 'how' and 'what'

### How

Please clearly define the problem, include what was expected when doing a task, and the importance of it.

If it’s a sensitive task, please specify confidentiality is necessary. Being forthcoming about confidentiality stops us from expecting more information.  

**Please don’t include** sensitive artifacts like passwords, tokens, API keys, etc. in a question

### What

1. Define the problem's nature, what it looks like and how it’s behaving. For example, if a screen doesn’t load as expected, give a description of what it looks like, and what it should look like. Adding a screenshot can be helpful, but consider that screenshots aren't accessible without alt text.  

2. After detailing the problem, the community wants to know what troubleshooting you tried. Being proactive helps narrow down solutions and stops repetition

    Please give a link to the source if you followed steps on a StackOverflow thread or read documentation about the problem somewhere else

3. Last, please say what type of help you’re looking for. Are you looking for a solution, link to resources, and/or another way to complete a task? Please be very clear so the question isn't misinterpreted.
   
## The 'where'

Describe the environment the problem happened in: 

- In an OpeShift cluster, give the namespace and cluster name (Silver, Gold, Gold DR, Emerald, KLab, CLab)
- With  application code, what stack, languages and libraries you used, including which versions
- With a tool, please specify the platform tool
- With a web application or UI, please specify which browser, browser version, and device
     - Are you using a Mac, a Windows machine, an iPhone, an Android, or another device?
- With a service provided by another team, give the service name and if possible, related URLs and environment (DEV, TEST, PROD)

## The 'when'

 Timestamps help! Please consider letting the community know:
 
- The date
- The time, including time zone if different from P.S.T. 


## Post the question

When you finish writing the detailed question, please revisit [Stack overflow question checklist](https://codeblog.jonskeet.uk/2012/11/24/stack-overflow-question-checklist/) to make sure you're being efficient. Then, post it in the [best Rocket.Chat channel](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/rocketchat/rocketchat-channel-descriptions/) for a quicker response.

If unsure of where to post or other questions and/or concerns, check out the [Rocket.Chat channel descriptions](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/rocketchat/rocketchat-channel-descriptions/). If you still need help choosing the best place to post your question after checking those reference, then connect with us at developer.experience@gov.bc.ca.
