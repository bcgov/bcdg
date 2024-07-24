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
