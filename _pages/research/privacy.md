---
# permalink: /research/privacy/
layout: post
title: Privacy
sidenav: research
sticky_sidenav: true
subnav:
  - text: Guidelines
    href: '#guidelines'
  - text: Refrences
    href: '#references'
  - text: Additional reading
    href: '#additional-reading'
---

18F’s research practices are grounded in building and maintaining trust; people who trust us (for example, to keep their information confidential) are more likely to share comprehensive and accurate accounts of their experience.

Protecting participant privacy means respecting people’s ability to control access to information about themselves. The Federal government [defines](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf) personally identifiable information (PII) as “information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other information that is linked or linkable to a specific individual.” This definition is contextually dependent. Recordings of people’s voices and photos and videos of people—including recorded interviews or usability tests—are always considered PII. Email addresses, phone numbers, and mailing addresses are *sometimes* considered PII, and when presented in combination with a first name often become PII. Because every collection of PII increases the risk of privacy violations, it’s best to refrain from collecting PII at all (for example, by analyzing data collected via the [Digital Analytics Program](https://digital.gov/dap/)).

[The Privacy Act of 1974](https://www.justice.gov/opcl/privacy-act-1974) provides protection to individuals by ensuring that Federal agencies: 
- Collect PII only when it is both legally authorized and necessary
- Present [Privacy Act Notices](https://github.com/18F/ux-guide/blob/master/_pages/resources/privacy-act-notice.md) whenever they collect PII (in order to allow for informed consent)
- Protect agency-held PII against anticipated threats to security or integrity which could result in substantial harm, embarrassment, inconvenience or unfairness to the individual.

18F complies with the Privacy Act by following the data practices outlined in our [Privacy Impact Assessment for Design Research](https://www.gsa.gov/cdnstatic/20181022%20-%20Design%20Research%20PIA_posted%20version.pdf). The [TTS Research Guild](https://github.com/18F/g-research) works with the GSA Privacy Office to annually review this assessment.

## Guidelines

18F teams should protect research participant privacy while also encouraging the broader team’s involvement. This is a balancing act. If you were to broadly share—that is, outside your core team—recordings of every interview conducted during a round of stakeholder interviews (note: we don’t do this), for example, you would risk violating your stakeholders’ privacy (and trust). 

The following guidelines, drawn from our Privacy Impact Assessment for Design Research, help us build trust and protect privacy. This list isn’t exhaustive, but it’s a good place to start:


- Ask key stakeholders to introduce you before conducting interviews with their team
- Build rapport with research participants in advance of the research activity (for example, by emailing participants to see if they have any questions about the research, or briefly meeting with participants before the fieldwork begins to go over any logistical requirements) 
- Whenever you collect PII, store it digitally on [agency-approved systems for PII](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act); actively remove access to PII from anyone not on your project team; and always place paper documents with PII in locked file cabinets
- Store design research administrative data (for example, contact information collected during research participant recruiting) separate from study data (for example, recorded video of a usability test); share research-related records on a [need-to-know](https://en.wikipedia.org/wiki/Need_to_know) basis
- [Collect the informed consent]({{site.baseurl}}/research/plan#collect-informed-consent) of anyone who participates in moderated research; we generally do this with a [participant agreement](https://github.com/18F/ux-guide/blob/master/_pages/resources/participant-agreement.md)
- When scheduling research sessions via Google calendar, set the event visibility to “Private” (since invitations include the participant’s name and email address)
- Read websites’ terms of service and privacy policies before collecting data through them (for example, monitoring forum traffic is a great way to learn about users, but our use of these systems must comply with applicable privacy policies)
- Use pseudonyms or participant codes (for example, “Participant 1”) when naming your recordings, transcribing audio files, or writing reports 
- De-identify research data before subjecting it to shared analysis, synthesis and sharing
  - Ensure that any included quotes could be attributable to multiple participants so no one person can be identified as the person that said it
  - If attribution is important, request the participant’s permission before incorporating personally identifying information or directly attributable information (for example, quotes with attribution) into shared analysis, reports or presentations
  - Be mindful of [contextual integrity when presenting research](https://thesocietypages.org/cyborgology/2017/03/12/context-integrity-and-consent-in-presenting-research/)
- Periodically inventory and confirm need-to-know access to study data (as defined in our Privacy Impact Assessment for Design Research)
- GSA’s Privacy Office welcomes questions and feedback anytime at [privacy.office@gsa.gov](mailto:privacy.office@gsa.gov)

### References
- *Privacy in Context* by Helen Nissenbaum
- The Health, Education, and Welfare (HEW) Advisory Committee’s *Records, Computers, and the Rights of Citizens*

### Additional reading
- GSA Staff, see 
  - [The GSA Privacy Office's presentation to the TTS Research Guild](https://gsa-tts.slack.com/files/U9KLLKS4W/FCSFWBZD3/researchguildprivacytalk091218.mp4)
  - [6 tips for protecting PII in design research](https://drive.google.com/a/gsa.gov/open?id=1MM6tNlFc-Iwgw_cCUw_0KS8oQMS-FEN7sYftPQLmLAg)

- [OMB’s Circular A-130, The Fair Information Practice Principles](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf)
- [Daniel Solove’s Taxonomy of Privacy](https://www.researchgate.net/figure/Daniel-Soloves-visual-model-of-his-taxonomy-of-informational-privacy-10_fig1_312061072)
