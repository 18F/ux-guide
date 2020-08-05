---
layout: post
title: Privacy
permalink: /research/privacy/
sidenav: research
sticky_sidenav: true
subnav:
  - text: Personally Identifiable Information (PII)
    href: '#personally-identifiable-information-pii'
  - text: Guidelines
    href: '#guidelines'
  - text: Additional reading
    href: '#additional-reading'
---
[//]: make it possible to put a class on a ul tag
{::options parse_block_html="true" /}

18F’s research practices are grounded in building and maintaining trust.  When participants trust us they are more likely to share full and accurate accounts of their experiences. A large part of maintaining participant trust involves protecting participant privacy.

***Disclaimer:*** *This page is intended for internal use. It is shared in the spirit of open source, to prompt conversations around design research as it relates to privacy. GSA has no regulatory authority over any of the laws discussed in this section, so don’t just take our word for it.*


## Personally Identifiable Information (PII)

We protect participants’ privacy by giving them a say whenever we seek to collect  identifying information about them. The Federal government [defines](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf) personally identifiable information (PII) as “information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other information that is linked or linkable to a specific individual.”

What is considered PII depends on context. Recordings of people’s voices and photos and videos of people are always considered PII. This includes recorded interviews and usability tests. Email addresses, phone numbers, and mailing addresses are sometimes considered PII; and when collected, stored, or presented in combination with a first name they often become PII.
Each piece of collected or stored PII increases the risk of privacy violations. When possible, it’s best to refrain from collecting or storing PII at all (if you or your agency partner have questions about storing PII on third-party systems that have not been approved by GSA, you should consult with your partner agency’s Privacy Office). One way to do this is analyzing data collected via the [Digital Analytics Program](https://digital.gov/dap/).

[The Privacy Act of 1974](https://www.justice.gov/opcl/privacy-act-1974) provides protection to individuals by ensuring that Federal agencies:

{:.list-item--margin-bottom-extra}
- Collect PII only when it is both legally authorized and necessary
- Present [Privacy Act Notices](https://github.com/18F/ux-guide/blob/master/_pages/resources/privacy-act-notice.md) whenever they collect PII (in order to allow for informed consent)
- Protect agency-held PII against anticipated threats to security or integrity which could result in substantial harm, embarrassment, inconvenience, or unfairness to the participant.

18F complies with the Privacy Act by following the information practices outlined in our [Privacy Impact Assessment for Design Research](https://www.gsa.gov/cdnstatic/20200401_-_Design_Research_PIA_for%20posting.pdf). The [TTS Research Guild](https://github.com/18F/g-research) works with the [GSA Privacy Office](https://www.gsa.gov/reference/gsa-privacy-program) to annually review this assessment.


## Guidelines

18F teams should protect participant privacy while also encouraging the broader team’s involvement. This is a balancing act. For example, if you were to share recordings of every stakeholder interview outside of the core project team, you would risk violating your stakeholders’ privacy (and trust).

The following guidelines, drawn from our Privacy Impact Assessment for Design Research, help us build trust and protect privacy. This list isn’t exhaustive, but it’s a good place to start:

{:.list-item--margin-bottom-extra}
- Ask key stakeholders to [introduce you before conducting interviews](https://github.com/18F/ux-guide/blob/master/_pages/resources/email-templates/stakeholder-introduces-researcher.md) with their team
- Build rapport with research participants in advance of the research session — for example, [by emailing participants](https://github.com/18F/ux-guide/blob/master/_pages/resources/email-templates/researcher-sends-agreement.md) to see if they have any questions about the research, or briefly meeting with participants before the session begins to go over any logistical requirements
- Whenever you collect PII, store it digitally on [GSA’s approved systems for PII](https://www.gsa.gov/reference/gsa-privacy-program/systems-of-records-privacy-act/system-of-records-notices-sorns-privacy-act) actively remove access to PII from anyone not on your project team; and always place paper documents with PII in locked file cabinets
- Store design research administrative data (for example, contact information collected during research participant recruiting) separate from study data (for example, recorded video of a usability test); share research-related records on a need-to-know basis
- Collect the [informed consent]({{site.baseurl}}/research/do/#getting-informed-consent) of anyone who participates in moderated research; we generally do this with a [participant agreement](https://methods.18f.gov/participant-agreement/)
- When scheduling research sessions via Google calendar, set the event visibility to “Private” (since invitations include the participant’s name and email address)
- Read each website’s terms of service and privacy policy before collecting data through it (for example, monitoring forum traffic is a great way to learn about users, but our use of these systems must comply with applicable privacy policies)
- Use pseudonyms or participant codes (for example, “Participant 1”) when naming your recordings, transcribing audio files, or writing reports
- De-identify research data before subjecting it to shared analysis, synthesis and sharing
  - Ensure that any included quotes could be attributable to multiple participants so no one person can be identified as the person that said it
  - If attribution is important, request the participant’s permission before incorporating personally identifying information or directly attributable information (for example, quotes with attribution) into shared analysis, reports or presentations. Be mindful of who might see the information. Don’t attribute information that could pose any personal or professional risks for the participant (for example, a negative comment about executive leadership included in a report shared with their organization).
  - Be mindful of information norms before sharing and presenting research. For example, if you were to shadow an agency's acquisitions team, and notice that the team had freely discussed information about a particular vendor (such as reputation), that doesn't imply that your research artifacts (such as reports) could name the vendor in question or even the nature of the conversations you observed. In this case, you might ask members of the acquisitions team whether or not it's okay to include information about the conversation you observed.
- Periodically inventory and confirm need-to-know access to study data (as defined in our [Privacy Impact Assessment for Design Research](https://www.gsa.gov/cdnstatic/20181022%20-%20Design%20Research%20PIA_posted%20version.pdf))
- GSA’s Privacy Office welcomes questions and feedback anytime at [privacy.office@gsa.gov](mailto:privacy.office@gsa.gov)

## Additional reading

{:.list-item--margin-bottom-extra}
- GSA Staff: see [the GSA Privacy Office's presentation to the TTS Research Guild](https://gsa-tts.slack.com/files/U9KLLKS4W/FCSFWBZD3/researchguildprivacytalk091218.mp4) and [6 tips for protecting PII in design research](https://drive.google.com/a/gsa.gov/open?id=1MM6tNlFc-Iwgw_cCUw_0KS8oQMS-FEN7sYftPQLmLAg)
- [OMB’s Circular A-130, The Fair Information Practice Principles](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf)
