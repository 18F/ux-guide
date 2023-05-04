---
layout: post
title: Make research actionable
description: "Analysis, synthesis, and sharing helps 18F user experience (UX) designers reflect on the data we’ve collected and determine a course of action."
permalink: /research/make-research-actionable/
sidenav: research
sticky_sidenav: true
subnav:
  - text: From data to insights
    href: '#from-data-to-insights'
  - text: Insights into action
    href: '#insights-into-action'
  - text: Sharing
    href: '#sharing'
  - text: Publishing on GitHub
    href: '#publishing-on-github'
  - text: Handing off research responsibly
    href: '#handing-off-research-responsibly'
  - text: Additional reading
    href: '#additional-reading'
---
[//]: make it possible to put a class on a ul tag
{::options parse_block_html="true" /}

Design research is most valuable when it leads to shared understanding. Analysis, synthesis, and sharing help us reflect on the data we’ve collected and determine a course of action that involves the broader team.


## From data to insights
Articulating insights can involve different activities, but it’s primarily a time for everyone on the project team to work together to begin to map out larger patterns and themes.

At 18F this generally involves:

{:.list-item--margin-bottom-extra}
1. Highlighting key quotes in transcripts (based on your research goals) and from other research such as quantitative analysis and secondary research
2. Gathering quotes and other data into a shared document/space
3. [Affinity diagramming [18F design methods]](https://methods.18f.gov/decide/affinity-mapping/) to identify emergent themes, patterns, and insights
4. Developing a shared understanding as a group

Making meaning always happens in relation to the research questions and/or problem statements identified during [research planning]({{site.baseurl}}/research/plan). Some questions you might ask:

{:.list-item--margin-bottom-extra}
- What notable experiences did people share? What were outliers?
- What is the root cause of those experiences?
- What is the context of their use of the product or service?
- What is their mindset and/or emotional state while using the product or service?
- What is their mental model of using the product or service?
- Were there any differences between what people said and what they actually did?

### Involving the team
Finding patterns in research is a great time to involve partners and team members, especially people who were not involved in conducting the research. A collaborative approach helps to:

{:.list-item--margin-bottom-extra}
- Create an inclusive team where everyone’s feedback is heard. 
- Build consensus within the team with frequent check-ins and showing how data turns into insights.
- Correct for[bias]({{site.baseurl}}/research/bias) by ensuring research insights aren’t influenced by individual preferences and including reviews from multiple perspectives.
- Increase the value of research for your teammates by making research visible and involving them in the review of data.

When inviting partners, think about how exposed they were to the research process and set clear expectations on how you would like them to engage. Be mindful of power dynamics and your [ethical obligation]({{site.baseurl}}/research/ethics) to respect the people who participated in your research.

### De-identifying data

Before conducting shared analysis or synthesis, make sure that any quote could be attributable to multiple participants so no one person can be identified as the person that said it. This is especially important if your stakeholders know your participants or you are working with people from [vulnerable communities]({{site.baseurl}}/research/plan) who might be negatively impacted if they can be identified. For example, you might want to be careful when involving a CIO in analyzing data you collected while interviewing their employees.

### Choosing methods

Making meaning out of research can involve any number of different [methods [18F design methods]](https://methods.18f.gov). The most basic method is writing a summary of what you found. Write a brief summary of the data you collected that, when read together with your [research plan]({{ site.baseurl }}/resources/research-plan)documents the research itself: the questions you started with, how you went about answering them, what you learned, and why it matters. Aim for true and useful, rather than comprehensive.

Outside of writing a summary, you should choose your methods based on the desired outputs and outcomes of your research. For example:

{:.list-item--margin-bottom-extra}
- To build empathy for users and inform future design strategy, you might create a [mental model [18F design methods]](https://methods.18f.gov/decide/mental-modeling/) diagram, by combing through transcripts looking for reasonings, reactions, and guiding principles
- To create reusable archetypes for grounding user stories and scenarios, you might create a [persona [18F design methods]](https://methods.18f.gov/decide/personas/), by reviewing transcripts for goals, behaviors, and pain points
- To find themes in your data via a bottom-up process, try [affinity diagramming [18F design methods]](https://methods.18f.gov/decide/affinity-mapping/). Record ideas, quotes, or observations from your research on sticky notes (one idea per sticky note), place them on a wall or whiteboard, and then move the sticky notes into related groups. If working virtually, you can use digital whiteboarding tools such as Mural. Once you have the groupings, you can label them according to a theme or pattern.
- To make the complexities of a work process or service visible, you might use [task flow analysis [18F design methods]](https://methods.18f.gov/decide/task-flow-analysis/), service blueprints, or [journey mapping [18F design methods]](https://methods.18f.gov/decide/journey-mapping/): these show connections between stakeholders or across organizational silos. Once you’ve visualized the process or journey, you can analyze for key interactions, pain points, and dependencies.
- To get buy-in from agency stakeholders or to validate insights and opportunities further with groups most impacted by the work, consider storytelling approaches within reporting, blog posts or press releases, presentations, or sharing sessions. 

Whichever method you use, introduce it to your partner as well so they can build their research skills.

Any approved tool can be used. We’ve listed some of our [approved, commonly used tools](https://docs.google.com/document/d/1re2dDFboR80IbNZire0H3eaZ11YgLeMy5urtD6Ecn8I/edit).


## Insights into action

Turning insights into action helps us answer and communicate:  

- What can we do to address the issues we identified?
- What impact do we think our changes will make?
- What do we need to do next?


Artifacts that we use to do this include:

- [Research findings presentation template](https://docs.google.com/presentation/d/1hB0tX65pHGRESHc2e_tGlO65Q4AGwSWFuqhSNImNuRk/edit#slide=id.g9af2006e6a_1_238)
- [Design hypotheses [18F design methods]](https://methods.18f.gov/decide/design-hypothesis/)
- [Design principles [18F design methods]](https://methods.18f.gov/decide/design-principles/)
- [Personas [18F design methods]](https://methods.18f.gov/decide/personas/)
- [Mental models [18F design methods]](https://methods.18f.gov/decide/mental-modeling/)
- [User scenarios [18F design methods]](https://methods.18f.gov/decide/user-scenarios/)
- User stories
- [Storyboards [18F design methods]](https://methods.18f.gov/decide/storyboarding/)
- [Journey maps [18F design methods]](https://methods.18f.gov/decide/journey-mapping/)
- Service blueprints 
- [Prototypes [18F design methods]](https://methods.18f.gov/make/prototyping/)
- Other creative outputs

These artifacts are tools for communicating the answers to your research questions and prioritizing opportunities for action. When choosing which artifacts to make, consider your audience and think about what will best create a shared understanding of your findings. For example, imagine you are describing an experience that is often a challenge for a specific group of users. In this case, personas accompanied by a journey map may be more effective than a set of design principles.

### Making decisions based on the research

After each round of research, the whole team should identify how the research findings change the work planned for the next sprint. After discovery research, this could include prioritized areas for further exploration or prototyping. For a new or existing product, this could include new bugs identified, new features to explore, or a different design focus.

## Sharing research

Communicating your proposals is critical to seeing them come to life; even the most beautiful artifact loses its power if it’s left on a shelf. Here are some good guideposts for sharing and socializing research in government.

### Before you share

At this point it is a good practice to delete any recordings from the sessions to further protect the privacy of your participants (and be sure to ask that anyone you shared recordings with to do the same).

We always try to make sure we are on the same page as the partner in protecting [PII before publishing]({{site.baseurl}}/research/privacy)!

### Understanding your audience

Our research often gets shared far beyond the project team. Depending on the project, stakeholders that care about our research could include:

{:.list-item--margin-bottom-extra}
- The broader 18F organization (chapters, guilds, business development, etc.)
- Managers and employees above and across our partner’s organization (managers, engineers, press offices, steering committees, legislative bodies, etc.)
- Other government agencies
- Policymakers
- Members of the public (vendors, press, curious citizens)

Sharing research is all about storytelling. When packaging research, think about what role the audience plays in that story and what the outcomes will be for them. Being clear about who the audience is, what they need to understand, and how they might best understand it, helps us communicate our findings more effectively.

### Presenting the work

We most commonly share our research findings via presentations. These presentations can vary widely based on the audience. Here are a few presentation-building tips:

* Utilize our [18F-branded templates found on the 18F brand site](https://brand.18f.gov/templates/) to maintain consistency and save time. You may want to use this [GSA-only: Research findings presentation template](https://docs.google.com/presentation/d/1hB0tX65pHGRESHc2e_tGlO65Q4AGwSWFuqhSNImNuRk/edit#slide=id.g9af2006e6a_1_238) as a starting point.
* The presentation deck should tell a compelling story and be easy to read. Make sure to include enough content so those not able to attend the presentation can view the deck later and understand what you’re aiming to communicate. Refer to this presentation on [GSA-only: How to design a better deck](https://docs.google.com/presentation/d/1WMbN1feG1bMhaFx5YbXoYUTE7xgZdMewMaQBZeL3YmA/edit#slide=id.g58dd554fac_0_397) for additional pointers and guidance.
* Check out the [GSA-only: Project resources folder](https://drive.google.com/drive/folders/1L9qqS6-b-emvlWJ4JPCG58LW62bbV361) for reusable content and templates; browse [project artifacts from previous 18F engagements on GitHub](https://github.com/18F/project-artifacts/blob/master/projects.md) for inspiration; or view the [Design wiki on GitHub](https://github.com/18F/Design-Wiki/wiki) for additional examples.
* Feel free to include references or links to further reading at the end of your presentation.

### Avoiding stereotypes and generalizations

Avoid stereotyping and generalizing in how you present findings, especially when talking about underserved communities and historically marginalized groups. Critically look at the quotes and information collected to determine if a quote may reinforce stereotypes.

{:.list-item--margin-bottom-extra}
- Contextualize quotes from participants. You should not assume identity based on appearance, rely solely on a participant’s self-identification.
  - Instead of “LGBT+ people felt included with our new form design.” Try something like, “The two participants who selected the non-binary gender option remarked this addition made them feel included.”
  - Methodological triangulation (using multiple data sets; for example, augmenting qualitative interview data with quantitative statistical data) can help minimize the risk of unintentionally perpetuating biases expressed by individual interview participants

### Lightweight sharing

Keep in mind that a researcher’s job doesn’t end with a formal presentation. Insights from a research sprint should be used to inform decisions for the rest of a project and to revisit on an ongoing basis. Always look for lightweight ways to share research and advocate for the voice of users.

One of the ways we do this at 18F is sharing a “weekly ship” of what the team has worked on each week. This could be an opportunity to share a compelling quote or pain point uncovered between rounds of research synthesis.

### Tribal data sovereignty and sharing with participants

While it’s not always relevant or practical to shareback primary data collected with all research participants, it’s crucial to the efforts of [Tribal data sovereignty]([https://18f.gsa.gov/2017/10/11/pulling-back-the-curtain-on-it-procurement/](https://bja.ojp.gov/doc/tribal-data-sovereignty-presentation.pdf). Indigenous data sovereignty is the right of a nation to govern the collection, ownership, and application of its own data. 

Tribal Nations have not historically had complete control or autonomy over their data and knowledge. In order to fulfill [Federal trust and treaty responsibilities to Tribal Nations](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/26/memorandum-on-tribal-consultation-and-strengthening-nation-to-nation-relationships/), federal employees should promote [ethical research]({{site.baseurl}}/research/ethics) and enhance the research capacity of Tribal governments by providing people who participate in research with the opportunity to have the data collected from them. 


## Publishing on GitHub

While it is not mandatory, we often use GitHub to manage our projects. GitHub also allows us to keep the public up to date on our research findings. It is also a useful tool for communicating with potential vendors who may work on our projects in the future. Publishing findings can help vendors and the public better understand the problem a partner is trying to solve and how they are approaching it. It also signals that the partner wants to work with a vendor who is also willing to work in the open.

This is part of 18F’s approach to [modern software acquisition](https://18f.gsa.gov/2017/10/11/pulling-back-the-curtain-on-it-procurement/). The [Forest Service project repository](https://github.com/18F/fs-open-forest/wiki) is a great example.


## Handing off research responsibly

Research handoffs occur when wrapping up a round of research or an engagement, when vendors onboard, or when staffing arrangements change. Managing handoffs thoughtfully can help future researchers get up and running faster. At this point, ask:

{:.list-item--margin-bottom-extra}
- Who will lead the research moving forward?
- What will the next research team who picks this up need to know?
- Are the notes, recordings, and findings properly organized? ([GSA-only: List of things to catalog](https://docs.google.com/document/d/1m4Q98Ah8XdUs4kfJk7n9vwAEhNApoXMWib_jptMF63Y/edit).
- Where and how do files containing PII need to be stored in order to maintain privacy? Was all identifying information removed from data that hasn’t been stored securely?
- Who should have access to what data? How will we get it to them?
- Can this information be used to generalize or stereotype groups? What can be done to prevent misuse? 
- How can I support [US Indigenous and Tribal data sovereignty](#tribal-data-sovereignty-and-sharing-with-participants)? 

In addition to the above considerations, providing an introduction or tour of the work is a helpful way to transfer knowledge to new team members or vendors. Consider writing a [GitHub README](https://github.com/ONRR/doi-extractives-data/blob/dev/README.md) document which new team members can read and refer to for project background, context, history, and quick links to important files or resources.  


## Additional reading

- [GOV.UK Blog: How we do research analysis in agile](https://userresearch.blog.gov.uk/2014/06/05/how-we-do-research-analysis-in-agile/)
