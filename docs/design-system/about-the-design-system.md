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

The B.C. Design System provides components and resources that help developers and designers build accessible, consistent user interfaces more efficiently.

The design system is in active development. It replaces the [legacy design system](#the-legacy-design-system), which is no longer supported and has been archived.

## The Design System vision

In 2026, the Design System received leadership support from Connected Services BC (CSBC) and additional resources. The team developed the following vision with input from executive sponsors and key partner teams that collaborate with or receive support from the Design System. The vision supports Connected Services goals.

### Purpose of the BC Gov Design System to support CSBC

!!! Note "Purpose"
    **The BC Gov design system makes the right path the easy path so delivery teams can build government services**

These services can be more: 

- 🤝 Trusted
- 🔁 Coherent
- 🔗 Connected
- 💖 Accessible
- 💪  Effective
- 👥 Human-centered
- ☸️ Equitable

So what do we mean by these terms?

#### Design System

The design system provides AI-optimized "ingredients" and "recipes" that designers and developers can use to build user interfaces.

| Ingredients | Recipes |
|--------------|------------|
| •  Design libraries in design tools <br>• Code libraries in front end frameworks <br>• JSON token libraries for sharing styles across systems and technologies | • Kits and tools for reusing common combinations of ingredients that can teams can modify and extend as needed <br>• Rules and best practices for using UI and UX patterns, colours, typography and layouts <br>• Documentation for different roles and audiences to support adoption <br>• Governance and contribution guidelines that support collaboration |

| Right path | Delivery teams | Government systems|
|--------------|------------|------------|
| The design system provides common UI and UX foundations so teams do not have to rethink every small design decision. These foundations help teams create experiences that are: <br>• Branded <br>• Proven <br>• Tested <br>• Supported <br>• Secure <br>• Equitable <br>• Accessible | We support people who design systems or applications for internal and external government services, including: <br>• Front-end developers <br>• Designers <br>• Leadership <br>• Contractors <br>• Technology teams <br>• AI agents | The design system does not support the full spectrum of government services. It supports digital interfaces that form part of a larger service journey. Where relevant, we aim to connect teams with: <br>• Service patterns <br>• Non-digital best practices <br>• Equity and accessibility training and guidedance <br>• Common capabilities <br>• Subject matter experts and related systems |

### Objectives of the system

- Create coherent, trusted and high-quality experiences across government
- Build accessibility, equity and reconciliation into the system
- Support faster digital delivery so teams can focus on better outcomes
- Increase connections between systems and teams that may otherwise work in silos
- Build a culture of reuse, collaboration and continuous improvement

### How we'll know it's working

#### People and businesses in B.C.

| Outcome area | Experience |
|--------------|------------|
| **Coherent, trusted experiences** | • People have greater trust in government services because they are reliable, recognizable and connected<br>• People can access services more easily through intuitive and cohesive experiences, regardless where or or how they start<br>• People can complete tasks with less confusion and repetition |
| **Accessible, equitable and human-centred services** | • People can access services in ways that better meet their needs across channels, cultures and abilities <br>• Components, patterns and guidance align with WCAG Level AA standards and support inclusive, usable experiences for people with disabilities <br>• Supports Indigenous languages and multilingual experiences<br>• Recipes consider how services can be trauma-informed, equitable and culturally respectful<br>• Recipes consider digital and human service touchpoints to support different access needs |

#### Teams adopting the system

| Outcome area | Experience |
|--------------|------------|
| **Shared foundations** | • Teams build on shared, well-maintained foundations instead of starting from scratch for every project<br>• Teams can reuse, adapt and combine parts of the system while maintaining a coherent experience for people and businesses in B.C.<br>• Teams have more capacity to focus on complex service problems instead of basic UI and UX decisions <br> | • The system helps connect and unify service delivery
| **Better collaboration** | • Teams use a common design language and shared tools to improve communication, collaboration and alignment <br>• People who know the design system can move between services with less time spent learning how each team works <br>• Design decisions strengthen connections rather than silos, helping knowledge flow more easily across teams |

#### Shared across both audiences

| Outcome area | Experience |
|--------------|------------|
| **Continuous improvement** | • Research, testing and iteration become standard practices <br>• Teams contribute what they learn from delivering services back to the system helping improve its ingredients and recipes <br>• The system remains sustainable, maintainable and adaptable as needs change <br>• Teams can more easily find and improve standards for ethical and inclusive design as practices and knowledge evolve<br>• AI adoption guidance helps teams use the system more consistently, including when designing for marginalized users |

### How the team intends to show up to support this vision
- **People-first** (accessibility, inclusion, empathy) - We listen closely and act on feedback
- **Trust and integrity** (consistency, transparency, quality) - We use evidence and real user experiences to validate assumptions before we ship
- **Openness and collaboration** (partnerships, community, shared vision) - We have candid conversations when they help us reach better solutions
- **Curiosity and psychological safety** (iterate, experiment, improve) - We make space for learning, failure and growth
- **Pragmatism & impact** (make the right thing easy to do) - We design for long-term sustainability

## How the design system works

The B.C. Design System has 3 core elements:

- [Design tokens](#design-tokens)
- [Figma and React component libraries](#component-library)
- [Documentation hub](https://gov.bc.ca/designsystem)

The design system provides developers and designers with a common set of resources that supports more efficient collaboration.

## Releases

### Design tokens

The B.C. Design System token library gives developers and designers a consistent way to use the basic visual language of the B.C. government's digital look and feel.

Tokens provide flexible, standardized options for common design decisions such as:

- Colour
- Typography
- Spacing
- Sizing

Developers can use tokens as CSS and JavaScript variables. We may support other languages in the future. Designers can use tokens as styles and variables in Figma.

To start using tokens:

- [Install the B.C. Design Tokens package through npm](https://www.npmjs.com/package/@bcgov/design-tokens)
- [Get the B.C. Design System library in Figma](https://www2.gov.bc.ca/gov/content?id=8E36BE1D10E04A17B0CD4D913FA7AC43#designers)

### Component library

The library provides a collection of user interface components, including:

- [Reusable components in Figma](https://www2.gov.bc.ca/gov/content?id=8E36BE1D10E04A17B0CD4D913FA7AC43#designers)
- [Reference implementations in React](https://designsystem.gov.bc.ca/react-components/)
- [A Storybook UI workshop](https://designsystem.gov.bc.ca/react-components/)

Developers can [install and update the React component library through npm](https://www.npmjs.com/package/@bcgov/design-system-react-components).

Support for other languages and frameworks is currently out-of-scope. However, we can support teams that want to reimplement Design System components using other technologies. [Contact us on GitHub](https://github.com/bcgov/design-system/issues) or email [designsystem@gov.bc.ca](mailto:designsystem@gov.bc.ca).

The component library is in active development. We add new components when they meet our definition of done. Each component must have:

- A modular, documented component in Figma
- A reference implementation in React
- Supporting best practice and technical documentation

## Design system management

Service BC and Government Digital Experience, part of the Ministry of Citizens' Services, maintain the B.C. Design System. Contact the Design System team at [designsystem@gov.bc.ca](mailto:designsystem@gov.bc.ca) or through [GitHub](https://github.com/bcgov/design-system).

## Contribute to the design system

The B.C. Design System is an open-source project. Its source code uses the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

## The legacy design system

The legacy B.C. government design system is no longer supported. Its documentation and components are available on [Classic DevHub](https://classic.developer.gov.bc.ca/About-the-Design-System) for reference use only.
