---
title: About the design system

slug: about-the-design-system

description: Describes the design system for B.C. government projects.

keywords: design, UI, components, interface components, open source, tools, resources

page_purpose: Discusses the design system, who manages it and how teams and developers can contribute to it.

audience: developer

author: Marcus Kernohan

content_owner: Marcus Kernohan

sort_order: 1
---

# About the B.C. Design System

The B.C. Design System provides components and resources to help developers and designers build accessible user interfaces faster and more consistently.

The design system is currently in active development. It replaces the [legacy design system](#the-legacy-design-system), which is no longer supported and has been archived.

## The Design System Vision

In 2026, the Design System received full leadership support from CSBC and additional resources. The following vision was co-created with input from the team, executive sponsors and key partner teams who collaborate with or are being supported by the work of the Design System to support Connected Service goals.

### Purpose of the BC Gov Design System to support CSBC

*The BC Gov design system makes the _right path_ the easy path so  _delivery teams_ can build _government services_ that are more...*
- 🤝  Trusted
- 🔁  Coherent
- 🔗  Connected
- 💖  Accessible
- 💪   Effective
- 👥  Human-centered
- ☸️ Equitable

So what do we mean by those words?

#### Design System
The design system is AI-optimized “ingredients” and “recipes”   that designers and developers use to build user interfaces

| Ingredients | Recipes |
|--------------|------------|
| •  Design libraries in design tools <br>• Code libraries in front end frameworks <br>• JSON token library for sharing styles between systems and technologies | • Kits & tools for easily re-using common combinations of “ingredients” that can be modified and augment as needed <br>• Rules and best practices for when to use different ui, ux, colours, typography & layout <br>• Documentation aimed for different roles and audiences to ease adoption <br>• Governance and contribution rules to guide collaboration |

| Right Path | Delivery Teams | Government Systems|
|--------------|------------|------------|
| Creating common UI/UX at the center so not every team has to re-think every micro decision to ensure things are... <br>• Branded <br>• Proven <br>• Tested <br>• Supported <br>• Secure <br>• Equitable <br>• Accessible | We work to support those folks shipping applications for internal and external government services <br>• Front end development <br>• Design <br>• Leadership <br>• Contractors <br>• Technology Systems <br>• AI Agents | We are not supporting the full spectrum of government services, but we support digital surfaces that hook into a larger service journey <br> We will try to make thoughtful links useful at the point of design & implementation for relevant...  <br>• service patterns <br>• non-digital best practices <br>• equity and accessibility trainings & guides <br>• common capabilities <br>• other SME and related systems |

### Objectives of the System

- Coherent, trusted, high-quality experiences across government
- Accessibility, equity, and reconciliation baked into the system
- Faster digital delivery to enable focus on better outcomes
- Increased sense of connectedness between siloed systems and teams
- A culture of reuse, collaboration, and continuous improvement

### How we'll be able to tell when it's working

#### People & Businesses in BC

| Outcome Area | Experience |
|--------------|------------|
| **Coherent, trusted experiences** | • Greater trust because government services are reliable, recognizable, and feel connected.<br>• Easier access to services through intuitive and cohesive experiences, no matter where or how they enter.<br>• Higher task completion rates with less confusion and repetition. |
| **Accessibility, equitable and human-centred service** | • People can access services in ways that are more equitable for them, across channels, diverse cultures and abilities.<br>• Components, patterns and guidance align with WCAG Level AA standards and support inclusive, usable experiences for people with disabilities.<br>• Supports Indigenous and multiple languages out of the box.<br>• "Recipes" created have thoughtfulness around how they can be trauma-informed, equitable, and culturally respectful.<br>• "Recipes" consider multiple ways to access services across digital and human touch points to allow for diverse access needs. |

#### Teams Adopting the System

| Outcome Area | Experience |
|--------------|------------|
| **Shared foundations** | • Build upon shared, well-stewarded foundations instead of creating foundations from scratch every project.<br>• Find it easy to re-use, adapt and recombine parts of the system to meet their own needs without losing the coherence needed for people and businesses in BC.<br>• Have more capacity to focus on complex service problems, not basic UI and UX decisions.<br>• The system helps by being the "glue" that helps unify service delivery. |
| **Better collaboration** | • Share a common design language and common toolkits to improve communication and collaboration, improving alignment between and within teams.<br>• Teams and people familiar with the design system move and collaborate between services with fewer learning curves about "how we do it here".<br>• Design decisions reinforce connection, not silos, and collaboration increases while isolation reduces as knowledge flows across teams more easily. |

#### Shared Across Both Audiences

| Outcome Area | Experience |
|--------------|------------|
| **Continuous improvement** | • Research, testing, and iteration become more of a standard practice.<br>• Ingredients and recipes improve as learnings from delivering services are contributed back to the system and team.<br>• The system remains sustainable, maintainable, and adaptable as needs evolve.<br>• Standards for ethical and inclusive design are easier to find and improve upon as culture and learning evolves.<br>• AI best practices for adopting the system are part of the system to support more consistency for marginalized users. |

### How the team intends to show up to support this vision
- *People-first* (accessibility, inclusion, empathy) -> We listen deeply and act on feedback
- *Trust & integrity* (consistency, transparency, quality) -> We ship evidence-based and validate assumptions  based on real user experiences
- *Openness & collaboration* (partnerships, community, shared vision) -> We lean into the right level of candid conversations to get to better solutions
- *Curiosity & psychological safety* (iterate, experiment, improve) -> We make space for learning, failure, and growth
- *Pragmatism & impact* (make the right thing easy to do) -> We design for long-term sustainability

## How the design system works

The B.C. Design System comprises 4 core elements:

- [Design tokens](#design-tokens)
- [Figma and React component libraries](#component-library)
- [Documentation hub](https://gov.bc.ca/designsystem)

The goal of the design system is to provide a common set of resources for both developers and designers, to help enable more efficient collaboration.

## Releases

### Design tokens

The B.C. Design System tokens library provides a straightforward way for developers and designers to access and implement the basic visual language of the B.C. government's digital look and feel. Tokens provide flexible, standardised options for basic design decisions like:

- Colour
- Typography
- Spacing
- Sizing

For developers, tokens are exposed as CSS and JavaScript variables. Support for other languages may be provided in the future. For designers, tokens are published as styles and variables in Figma.

To start using tokens:

- [Install the B.C. Design Tokens package via npm](https://www.npmjs.com/package/@bcgov/design-tokens)
- [Get the B.C. Design System library in Figma](https://www2.gov.bc.ca/gov/content?id=8E36BE1D10E04A17B0CD4D913FA7AC43#designers)

### Component library

The library provides an inventory of user interface components, including:

- [Reusable components in Figma](https://www2.gov.bc.ca/gov/content?id=8E36BE1D10E04A17B0CD4D913FA7AC43#designers)
- [Reference implementations in React](https://designsystem.gov.bc.ca/react-components/)
- [A Storybook UI workshop](https://designsystem.gov.bc.ca/react-components/)

Developers can [install and update the React component library via npm](https://www.npmjs.com/package/@bcgov/design-system-react-components).

Support for other languages and frameworks is currently out-of-scope, but we are happy to support teams who may want to reimplement design system components using other technologies. [Reach out on GitHub](https://github.com/bcgov/design-system/issues) or email [designsystem@gov.bc.ca](mailto:designsystem@gov.bc.ca).

The component library is in active development. New components will be added as they meet our definition of done, meaning that they have:

- A modular and documented component in Figma
- A reference implementation in React
- Supporting best practice and technical documentation

## Design system management

The B.C. Design System is maintained by Service BC and Government Digital Experience, part of the Ministry of Citizens' Services. You can contact the design system team at [designsystem@gov.bc.ca](mailto:designsystem@gov.bc.ca) or on [GitHub](https://github.com/bcgov/design-system).

## Contribute to the design system

The design system is an open-source project. Its source code is licensed under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

## The legacy design system

The legacy B.C. government design system is no longer supported. Legacy documentation and components are archived on [Classic DevHub](https://classic.developer.gov.bc.ca/About-the-Design-System) for reference use only.
