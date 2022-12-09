---
layout: post
title: Build a prototype
description: "18F encourages building something that will help you answer your questions with the least investment."
permalink: /design/build-a-prototype/
sidenav: design
sticky_sidenav: true
subnav:
- text: Communicating with prototypes
  href: '#communicating-with-prototypes'
- text: Building prototypes with Federalist
  href: '#building-prototypes-with-federalist'
- text: Getting started with Federalist
  href: '#getting-started-with-federalist'
- text: Authorized prototyping tools
  href: '#authorized-prototyping-tools'
---

Prototypes are useful to inform a new concept, identify how to refactor an existing product feature, service, or process, and help uncover current development unknowns.

Use prototypes to:

- Align the team (“What problem are we solving?”)
- Further specify elements of the design (“Should it look like this, or that?”)
- Demonstrate that your ideas are technically possible
- Explore/set up the deployment process
- Demonstrate a collaborative design process
- Reduce risk
- Validate a [design hypothesis](https://methods.18f.gov/decide/design-hypothesis/)

Prototypes can range in fidelity from basic paper prototypes to fully functional software. The idea is to build something that will help you answer your questions with the least investment. Prototyping can take many different forms depending on what you are trying to do. For example:

- Paper sketches are fast to make and to change, and easy for the whole team to participate in designing
- [Wireframes](https://methods.18f.gov/make/wireframing/) are preliminary blueprints that can help teams align on structure, placement, and hierarchy for a product or service
- Static visual mock-ups can help communicate and test things like brand identity and tone
- Clickable prototypes can help test usability by finding out if users can complete the needed tasks


## Communicating with prototypes

[Prototypes](https://methods.18f.gov/make/prototyping/) provide realistic depictions of a user experience, so it’s important to carefully consider the elements that go into yours. Prototypes can help you convey several things:

### 1. Elements of the design system

**Visually** the prototype can include design patterns, color palettes, and font styles to communicate the general look of the final design system. This provides an opportunity for discussion if anything in the aesthetic style needs to be refined or is missing.

### 2. Information architecture

The **information** hierarchy gets communicated in the prototype. Global navigation menu, contextual navigation, and content hierarchy and structure are laid out in the prototype. Using real content is important, rather than grabbing placeholders like lorem ipsum, so the product team can determine if the proposed content works in the proposed design layout. Testing assumptions or [hypotheses](https://methods.18f.gov/decide/design-hypothesis/) with real content will validate and identify if the content is appropriate and if changes are needed.

### 3. System behavior

A prototype is a great way to communicate system behavior through interaction design. Adding drop-down menus, transitions, and/or gestures doesn’t just make the prototype slick; depicting interaction behaviors helps engineers assess the work to implement the design and identifies potential blockers. Also, [usability tests](https://methods.18f.gov/validate/usability-testing/) will uncover if any of the interactions pose problems for your users or could be served better by a different design.


## Building prototypes with Federalist

[Federalist](https://federalist.18f.gov/) is a product built by 18F to help manage and deploy static websites. While many organizations may use Federalist to host and deploy their production code, Federalist is also a great tool for automatically creating and deploying preview versions of websites.

If your project is hosted on Federalist, you may configure the platform to build a custom version of the site for every branch on Github. This makes it easy for designers to make changes in their content and code and see what they would look like as rendered HTML. Federalist is set up to constantly monitor Github for any changes so when you create a new git commit Federalist will start building a new version of the site.

Federalist also provides a number of [templates](https://federalist.18f.gov/pages/using-federalist/templates/) you can use to kick start your new project or idea. The templates are built with the [U.S. Web Design System](https://designsystem.digital.gov/) so you have a library of additional components at your disposal.


## Getting started with Federalist
When you’re ready to get started with Federalist, you’ll want to jump into the [#federalist-support room on Slack](https://chat.18f.gov/) and ask the team to add your Github account to Federalist.

Once they’ve added your account, you can [sign in](https://federalistapp.18f.gov/) by authorizing access to your Github account and checking out the [Using Federalist guide](https://federalist.18f.gov/pages/using-federalist/).


## Authorized prototyping tools

Depending where you worked prior to joining 18F, you are probably accustomed to having some flexibility around your design toolset. Working for the government means only using tools that have been granted an [Authority to Operate (ATO)](https://before-you-ship.18f.gov/ato/): due to security compliance, we are only allowed to use GSA IT-approved tools.

Don’t fret! 18F has done a great job of getting us licenses to standard prototyping [tools](https://handbook.18f.gov/design/#tools). To request licenses, [review the 18F Handbook](https://handbook.18f.gov/design/#tools). Ensure you review the usage parameters for each tool.  

The team is always exploring other tool options for the 18F toolbox. You can investigate whether someone has already submitted an ATO for a new prototyping tool in these (18F/GSA access only) [#design](https://gsa-tts.slack.com/messages/design) or [#ux](https://gsa-tts.slack.com/messages/ux) slack channels, or you can look it up at (18F/GSA access only)[GEAR](https://ea.gsa.gov/#!/itstandards), the IT standards list.
