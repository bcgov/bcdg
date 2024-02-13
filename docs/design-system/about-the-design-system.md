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

# About the design system
The B.C. Design System provides components and resources to help developers and designers build accessible user interfaces faster and more consistently.

As of February 2024, the design system is currently in active development. It will replace the [legacy design system](#the-legacy-design-system), previously hosted on DevHub. The legacy design system is no longer supported, and will eventually be deprecated and archived.

## How the design system works
The B.C. Design System will comprise 4 core elements:

* [Design tokens](https://www.npmjs.com/package/@bcgov/design-tokens?activeTab=versions) (currently in beta)
* React component library (in development)
* Design library in Figma (in development)
* Documentation hub (in development)

The goal of the design system is to provide a common set of resources for both developers and designers, to help enable more efficient collaboration. 

## Releases

### Design tokens
The B.C. Design Tokens package provides a straightforward way for developers and designers to access and implement the basic visual language of the B.C. government's digital look and feel. Tokens provide flexible, standardised options for basic design decisions like:

* Colour
* Typography
* Spacing
* Sizing

For developers, tokens are exposed as CSS and JavaScript variables. Support for other languages may be provided in the future. For designers, tokens are published as styles and variables in Figma.

To start using tokens:

* [Install the B.C. Design Tokens package via npm](https://www.npmjs.com/package/@bcgov/design-tokens?activeTab=readme)
* [Get the B.C. Design Tokens library via Figma Community](https://www.figma.com/community/file/1326994583954765832)

### Component library
The component library will provide an inventory of reusable user interface components, including:

* Components in Figma
* Reference implementations in React

Support for other languages and frameworks is currently out-of-scope.

The component library is currently in active development. 

A [proof-of-concept/preview of the React library](https://www.npmjs.com/package/@bcgov/design-system-react-components) is published on npm.

## Design system management
The B.C. Design System is maintained by Government Digital Experience (GDX), a division of the Ministry of Citizens' Services. You can contact the design system team at [designsystem@gov.bc.ca](mailto:designsystem@gov.bc.ca) or on [GitHub](https://github.com/bcgov/design-system).

## Contribute to the design system
The design system is an open-source project. Its source code is licensed under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

## The legacy design system
The previous B.C. government design system is not actively supported. Legacy documentation and components are available on [Classic DevHub](https://classic.developer.gov.bc.ca/About-the-Design-System) for reference. These resources will be officially deprecated and archived after the new BCDS component library is released.

