# DevHub Wizards

Welcome to the DevHub Wizard!

Based on the starter application of NRS’ QuickStart for OpenShift , DevHub Wizard reduces time to get an application deployed to OpenShift. After filling the form, users can create a new GitHub repo within ten seconds. 

It works in tandem with Platform Services’ Product Registry. Before deploying a product, users must create an entry in the product registry. The process gives the namespace in OpenShift. Then, users can create an app wireframe that deploys into that name space. Namespaces follow the same convention as the Product Registry, such as your product set licence plate followed by "-dev", "-test", "-prod", or "-tools.
Aside from generated namespaces, we don’t have standardized naming conventions for GitHub repositories.     

We created both a video and a step-by-step walkthrough below, so users feel prepared beforehand. 

## Video demo of DevHub Wizards

<iframe width="560" height="315" src="https://youtu.be/9IiLW1864hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Walkthrough

### Step 1

![Step 1 of Wizards showing fields of metadata fields like Title, Description, Product category and Product lifecycle](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%201.PNG)
 
Mandatory information from the title, description, product category, and product lifecycle become part of the GitHub repository read.me and become metadata. The catalogue .yaml file stores the metadata in the new repository. 

### Step 2

![Step 2 of Wizards showing fields of Ministry, Product metadata fields like Title, Description, Product category and Product lifecycle](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%202.PNG)
 
The Ministry field helps with categorizing government repositories. By doing this, we don’t lose track of repositories. The metadata fields (Product name, acronym and Product owner) give needed information to link GitHub repositories with product teams. 

### Step 3

![Step 3 of Wizards showing fields of Backend stack, OC_Server, OC_Namespace, and OC_Token](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%203.PNG)
 
The ‘Select the backend stack’ field defaults to JavaScript/TypeScript because it’s bundled with the QuickStart for OpenShift project  . There are other alternative backend examples that can offer starting points for your team. Currently, DevHub Wizards is only available for the Gold and Silver clusters. This section for OC_Namespace and OC_Token is for the dev environment.

### Step 4

![Step 4 of Wizards showing fields of test OC_Namespace and OC_Token](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%204.PNG)
 
This section for OC_Namespace and OC_Token is for the test environment.

### Step 5

![Step 5 of Wizards showing fields of prod OC_Namespace and OC_Token](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%205.PNG)
 
This section for OC_Namespace and OC_Token is for the prod environment.

### Step 6

![Step 6 of Wizards showing mandatory single sign-on](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%206.PNG)

If you haven't enabled Single Sign-On (SSO), Step 6 will prompt log in.

![Step 6 of Wizards showing fields of Host, Owner available, Repository, and GitHub team](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%206b.PNG)
 
DevHub Wizards can only create GitHub repositories for the bcgov organization. The Repository field creates the GitHub repo title. Choosing which team the GitHub repo belongs to is for administration.  

### Step 7

![Step 7 of Wizards showing a review of all submitted information](https://github.com/bcgov/bcdg/blob/main/docs/images/Wizards-Step%207.PNG)
 
The Review button takes users to verify the inputted information. At this point, users have the option to go back to any of the steps prior to adjust any information. After clicking the ‘Create’ button, users cannot return to previous fields. 

### Step 8

![Step 8 of Wizards confirming repo creation and link to new repo](https://github.com/bcgov/bcdg/blob/main/docs/wizards/Wizards-Step-8b.png)

After the flash animation, users have the option to visit their repo by clicking the ‘New Repository’ button. Any needed changes can be done directly on GitHub.

