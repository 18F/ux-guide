---
permalink: /research/privacy/
layout: post
title: Privacy
sidenav: research
sticky_sidenav: true
---


Privacy raises a number of [legal](/research/legal), [ethical](/research/ethical), and pragmatic considerations for design researchers. 18F primarily addresses these considerations through building and maintaining trust: people who trust us (to keep their information confidential, for example) are more likely to provide us with more comprehensive and accurate accounts of their experience.

In addition to building and maintaining trust, 18F’s approach to privacy is shaped by two concepts: personally identifiable information (PII), which has legal implications; and contextual integrity, which is a helpful framework for thinking about privacy.

## PII

[OMB Circular A-130](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf) defines PII as “information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other information that is linked or linkable to a specific individual.” What constitutes PII is context dependent (see below). Social Security Numbers, driver’s license numbers, and recorded photos and videos are always considered PII because of their unique nature; email addresses, phone numbers, and mailing addresses are sometimes considered PII, and when presented in combination with a first name often become PII.

The best (low risk) place to store PII is not to store it at all. Whenever you store PII, store it digitally on agency-approved systems for PII (for example, Google Apps at GSA), to control access to it — actively remove access to anyone who’s not on your project team. (Always place paper documents with PII in locked file cabinets.) Do not store participants’ PII in any system not approved for handling PII.

The Privacy Act of 1974 requires that Federal agencies present Privacy Act Notices (also called Privacy Act Statements) whenever they collect PII from individuals. To account for this, provide links to a [Privacy Act Statement for Design Research](https://www.gsa.gov/reference/gsa-privacy-program/privacy-act-statement-for-design-research) in both your research participant recruiters as well as your [participant agreement](https://methods.18f.gov/participant-agreement/). Be careful to store administrative data (for example, contact information collected during research participant recruiting) separate from study data (for example, recorded video of a usability test). GSA Staff: [see this presentation](https://drive.google.com/a/gsa.gov/open?id=1MM6tNlFc-Iwgw_cCUw_0KS8oQMS-FEN7sYftPQLmLAg) for tips for protecting PII in design research.

## Contextual integrity

[Contextual integrity](https://en.wikipedia.org/wiki/Contextual_Integrity) is a theory of privacy developed by professor Helen Nissenbaum that provides a useful way of thinking about privacy: data that’s freely shared on one context is not always readily shared outside of that context. For example, you might share information with a friend at a bar that you wouldn’t repeat to a colleague at work.

Nissenbaum’s theory of contextual integrity has five component parts: (1) the data subject (that is, who or what the information is about), (2) the sender of the data, (3) the recipient of the data, (4) the information type, and (5) the transmission principle (that is, under what conditions is this information being shared). For example:

1. Data Subject: A US resident
1. Sender: The same US resident
1. Recipient: The US Internal Revenue Service
1. Information type: tax information
1. Transmission principle: the recipient will hold the information in strict confidentiality

Design research-data practices should both maintain contextual integrity while also allowing (even encouraging) the team’s involvement. This is a balancing act. If we were to broadly publish the records we made in conducting stakeholder interviews, for example, we’d certainly have some angry stakeholders on our hands. 

In addition to contextual integrity, other helpful tools for thinking about privacy include [The Fair Information Practice Principles in OMB’s Circular A-130, Appendix II, Section 3](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf); and [Daniel Solove’s Taxonomy of Privacy](https://www.researchgate.net/figure/Daniel-Soloves-visual-model-of-his-taxonomy-of-informational-privacy-10_fig1_312061072). For a project-based, rather than a research-based, approach to privacy see [18F's Before You Ship guide](https://before-you-ship.18f.gov/privacy/).

## Tactics

The following list is not meant to be exhaustive, but to indicate approaches that have worked for us so far. 18F builds trust, safeguards PII, and maintains contextual integrity, by:

- Seeking [introductions from key stakeholders](https://docs.google.com/document/d/1AEq-h3wuOxl8CCR9Gg4RPO7NaHJnedC4UbXN0UFQ24Y/edit) before conducting interviews with stakeholders, as appropriate
- Building rapport with research participants in advance of the research activity (for example, by emailing or telephoning participants to answer questions and conduct tech checks) 
- Informing and collecting the voluntary consent of anyone who participates in moderated design research. For example, disclosing the purposes of our research, our sponsor, etc. — while being mindful not to prime participants and introduce [bias](/research/bias)
- As much as possible, meeting at times and locations convenient for our research participants
- Respecting people’s confidentiality, only sharing research records (for example,  recorded videos of usability tests) on a need-to-know basis
- Ensuring that our use of unmoderated forms of design research (for example, using web analytics or monitoring forum traffic) are covered by or comply with applicable privacy policies
- Using pseudonyms (for example, “Participant 1”) when naming our recordings, transcribing audio files, or writing reports
- De-identifying recordings before subjecting them to broadly shared analysis or synthesis
- Requesting research participant permission before incorporating PII or attributable information (for example, quotes with attribution) into our reports or presentations. (In general, we are [mindful of contextual integrity when presenting research](https://thesocietypages.org/cyborgology/2017/03/12/context-integrity-and-consent-in-presenting-research/).)
- Deleting research data whenever we conclude a round of research, and asking that anyone we’ve shared recordings with to do the same
- Maintaining an annually updated Privacy Impact Assessment for Design Research in close collaboration with our Privacy Office and Office of General Counsel. GSA Staff: see [this presentation](https://gsa-tts.slack.com/files/U9KLLKS4W/FCSFWBZD3/researchguildprivacytalk091218.mp4) from GSA Privacy Office’s to our Research Guild.

### References

- *Privacy in Context* by Helen Nissenbaum
- *Little Book of Design Research Ethics* by IDEO
- The Health, Education, and Welfare (HEW) Advisory Committee’s Code of Fair Information Practices.
