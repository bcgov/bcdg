# DevHub Content Syntax Guide

!!! Note

	This page assumes you have read the [Content Partner Guide](../content-partner-guide/) and are generally familiar with writing documentation in Markdown. If you're looking to learn about Markdown, you may wish to start with the [pages from Markdown's creator](https://daringfireball.net/projects/markdown/), the Markdown ["cheat sheet"](https://www.markdownguide.org/cheat-sheet/), [this tutorial](https://commonmark.org/help/tutorial/) or one of the many other online resources on the topic.

Although Markdown is fairly standardized, there can be minor syntax differences between Markdown implementations.
Different Markdown implementations also allow extensions for more complex content such as diagrams or embedded content.
This page is intended to help you write content for DevHub that displays the way you intended by providing examples of
frequently used syntax. This page also aims help you make aware of the extensions provided with DevHub.

DevHub's Markdown implementation is based on [Backstage.io's TechDocs](https://backstage.io/docs/features/techdocs/)
feature. TechDocs includes
a [number of extensions](https://github.com/backstage/mkdocs-techdocs-core?tab=readme-ov-file#mkdocs-plugins-and-extensions)
that allow you to enhance your documentation beyond what is possible with "basic" Markdown. Refer to the linked
documentation for details on using the extensions that aren't covered in this page. DevHub may add additional extensions in the future which will be documented or referenced here.

## Examples

The sections below show example Markdown syntax and the resulting rendered content for a number of common scenarios.

### Links

!!! Note
	If you are migrating content from other Markdown implementations into DevHub, you may need to adjust the syntax of links. See the examples below for syntax that is compatible with DevHub. Notably, links in DevHub  are case-sensitive, unlike GitHub Wiki syntax.
	
	You may also need to replace absolute links to pages within the same repository with relative links to reflect that content has moved to DevHub. For example, an absolute link to `https://bcgov.github.io/mysite/mypage.md` from `my_other_page.md` should be updated to be simply `mypage.md`. 

```markdown
This is a link to the [DevHub Content Partner Guide](content-partner-guide.md) page in the DevHub category.

This is a link to the [mermaid diagrams](#diagrams-with-mermaid) section within this page.

This is a link to the [Get help in Rocket.Chat](rocketchat/get-help-in-rocketchat.md) page in the Rocket.Chat
section.

This is a link to the [meetups](/docs/default/component/mobile-developer-guide/meetups/) page in the Mobile Developer Guide. It is a page
in another guide on DevHub and uses a "root relative" link.

This is also link to the [meetups](../../../mobile-developer-guide/meetups/) page in the Mobile Developer Guide. It is a page
in another guide on DevHub and uses a relative link.

This is also link to the [meetups](../../../mobile-developer-guide/meetups/ "Check out the meetups page!") page in the Mobile Developer Guide. It is a page
in another guide on DevHub and includes a tool tip.
```

This is a link to the [DevHub Content Partner Guide](content-partner-guide.md) page in the DevHub category.

This is a link to the [Diagrams with Mermaid](#diagrams-with-mermaid) section within this page.

This is a link to the [Get help in Rocket.Chat](rocketchat/get-help-in-rocketchat.md) page in the Rocket.Chat
section.

This is a link to the [meetups](/docs/default/component/mobile-developer-guide/meetups/) page in the Mobile Developer Guide. It is a page
in another guide on DevHub and uses a "root relative" link.

This is also link to the [meetups](../../../mobile-developer-guide/meetups/) page in the Mobile Developer Guide. It is a page
in another guide on DevHub and uses a relative link.

This is also link to the [meetups](../../../mobile-developer-guide/meetups/ "Check out the meetups page!") page in the Mobile Developer Guide. It is a page
in another guide on DevHub and includes a tool tip.


### Download Links

If you have content that you would like your users to download, you'll need to use the link format shown below.

```markdown
This is a [download link](images/example.drawio.svg){:download="devhub-image-download.svg} that will download a file to your computer.
```

This is a [download link](images/example.drawio.svg){:download="devhub-image-download.svg} that will download a file to your computer.

### Lists

There must be a line break between the sentence and the start of the list. Use indents for nested lists.

```markdown
This is a numbered list. Using the `1.` for all items will automatically number the list for you.

1. Item 1
1. Item 2
1. Item 2a
1. Item 2b
   1. Item 2bi
1. Item 3
1. Item 3a
```

This is a numbered list. Using the `1.` for all items will automatically number the list for you.

1. Item 1
1. Item 2
1. Item 2a
1. Item 2b
   1. Item 2bi
1. Item 3
1. Item 3a

Unordered lists can use either the `*` or `-` characters.

```markdown
This is an unordered list:

- Item 1
- Item 2
- Item 3
	- Item 3a
	- Item 3b
```

This is an unordered list:

- Item 1
- Item 2
- Item 3
	- Item 3a
	- Item 3b

!!! note
Whitespace at the start of the top level items will prevent the list from being generated.

This list will not display properly because it has whitespace in front of each top level item:

```markdown
  - Item 1
- Item 2
	- Item 2a
- Item 3
```

This list will not display properly because it has whitespace in front of each top level item:

- Item 1
- Item 2
	- Item 2a
- Item 3

### Code

Use three backticks for codeblocks. Provide the language to include syntax highlighting.

````markdown
```python
x = 2
if x == 1:
    print("x is 1.")
else:
    print("x is not 1")
```    
````

```python
x = 2
if x == 1:
    print("x is 1.")
else:
    print("x is not 1")
```

```
Use a single backtick for `inline code blocks`.
```

Use a single backtick for `inline code blocks`.

### Admonitions

Include two tabs of whitespace at the start of the text block for it to be included in the admonition block.

```markdown
!!! note
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus elit vehicula, auctor turpis eget, tempus ligula. Vestibulum at lectus pellentesque magna interdum elementum. Sed luctus erat eget mi accumsan, nec interdum nulla dictum. In commodo ligula a porttitor elementum.

    Sed id dictum massa. Sed dolor libero, imperdiet hendrerit sollicitudin eu, euismod a arcu. Phasellus malesuada sagittis leo at fringilla. 
```

!!! note
	
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus elit vehicula, auctor turpis eget, tempus ligula. Vestibulum at lectus pellentesque magna interdum elementum. Sed luctus erat eget mi accumsan, nec interdum nulla dictum. In commodo ligula a porttitor elementum.

     Sed id dictum massa. Sed dolor libero, imperdiet hendrerit sollicitudin eu, euismod a arcu. Phasellus malesuada sagittis leo at fringilla. 

Text blocks with no or 1 tab of whitspace will not be included in the admonition block.

```markdown
!!! info
This text will not be in the admonition block. It will be below it.
```

!!! info
This text will not be in the admonition block. It will be below it.

### Tabs

```markdown
=== "Tab 1"
Tab 1 markdown content

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus elit vehicula, auctor turpis eget, tempus ligula. Vestibulum at lectus pellentesque magna interdum elementum. Sed luctus erat eget mi accumsan, nec interdum nulla dictum. In commodo ligula a porttitor elementum.

=== "Tab 2"
Tab 2 content.

    Lorem **ipsum** dolor sit amet, consectetur *adipiscing elit*.

    - item a
    - item b

    ```bash
    git commit -m "Initial commit"
    ```
```

=== "Tab 1"
	
	Tab 1 markdown content

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus elit vehicula, auctor turpis eget, tempus ligula. Vestibulum at lectus pellentesque magna interdum elementum. Sed luctus erat eget mi accumsan, nec interdum nulla dictum. In commodo ligula a porttitor elementum.

=== "Tab 2"
	
	Tab 2 content.
	
    Lorem **ipsum** dolor sit amet, consectetur *adipiscing elit*.

    - item a
    - item b

    ```bash
    git commit -m "Initial commit"
    ```

### Images

Generally, you should include your documentation's images in an `images` or `assets` folder in the same repo as your Markdown files. If you have images that are not stored in your documentation repo, elsewhere in GitHub, or on a host within the `gov.bc.ca` domain that you want to include in your documentation, please contact the [Developer Experience team](mailto:developer.experience@gov.bc.ca "Please Contact Us!") to discuss your needs. 

Link to images in your documentation using standard Markdown syntax. Text in the `[]` provides the  image's alt text.

```markdown
![Simple svg image](../images/example.drawio.svg)
```

![Simple svg iage](../images/example.drawio.svg)

In this example the `example.drawio.svg` file was created with
the [draw.io plugin for VSCode](https://www.drawio.com/blog/embed-diagrams-vscode). The format allows for image to be
edited in the VSCode editor while displayed as an svg on the documentation page.

### Diagrams with Mermaid

!!! Note
	Mermaid diagrams won't show when the [devhub-techdocs-publish](https://github.com/bcgov/devhub-techdocs-publish/blob/main/docs/index.md#how-to-use-the-docker-image-to-preview-content-locally) tool is used to preview the documentation locally. They will show up when published to DevHub's preview or production sites.

````
```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```
````

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

### Videos

YouTube videos can be embedded with the `iframe` command. Replace the `src` location with your video's url.

!!! Note

	- Videos do not show when the [devhub-techdocs-publish](https://github.com/bcgov/devhub-techdocs-publish/blob/main/docs/index.md#how-to-use-the-docker-image-to-preview-content-locally) tool is used to preview the documentation locally.
	- DevHub will only display content within an `iframe` from domains that are explicitly allowed in the DevHub configuration. Currently, this is limited to YouTube. If you would like to include videos from sources other than YouTube or other content within an `iframe`, please contact the [Developer Experience team](mailto:developer.experience@gov.bc.ca) to discuss your needs.

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/-Tkqe0lRuE0?si=jixM-ye8j1ey1Lf6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/-Tkqe0lRuE0?si=jixM-ye8j1ey1Lf6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

