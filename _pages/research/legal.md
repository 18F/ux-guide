---
# permalink: /research/legal/
layout: post
title: Legal
sidenav: research
sticky_sidenav: true
---

18F designs our research to account for the Antideficiency Act and the Paperwork Reduction Act of 1995 (PRA), among other laws. This page summarizes what we’ve learned through ongoing conversations with our Privacy Office and Office of General Counsel.

**Disclaimer:** This page is intended for internal use. It is shared (in the spirit of open source) to prompt conversations around design research as it relates to the law. GSA has no regulatory authority over any of the laws discussed in this section. Don’t take our word for it.

## The Antideficiency Act

The Antideficiency Act prevents federal agencies from accidentally obligating themselves to pay for products or services. Mitigate this risk by clarifying with potential participants, throughout your recruiting and informed consent processes, that their participation is made without expectation of payment or compensation. For example, to account for the Antideficiency Act, 18F’s standard [participant agreement](https://methods.18f.gov/participant-agreement/) includes the following language:

> You will not receive payment or compensation for your participation. You agree to perform all duties associated with your participation in this study during the period of `<project start date>` – `<project end date>` without expectation of payment or compensation.

The Antideficiency Act will also shape your use of [incentives](https://methods.18f.gov/fundamentals/incentives/). Each government agency approaches incentives differently: GSA’s Office of General Counsel (OGC), for example, asks that we not directly pay incentives to research participants; some of our partner agencies, like the Centers for Medicare & Medicaid Services, have [offered incentives in the past](https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/QualityInitiativesGenInfo/Downloads/Consumer-Usability-Testing-in-Five-State-based-Marketplaces.pdf). 

## The Paperwork Reduction Act of 1995

The Paperwork Reduction Act of 1995 is designed to “maximize the practical utility of and public benefit from information collected by or for the Federal Government,” and applies whenever agencies ([though some agencies are exempt](https://www.law.cornell.edu/uscode/text/44/3502)) pose a given set of questions to 10 or more people in a 12-month period. The PRA is administered by the Office of Information and Regulatory Affairs (OIRA) within the Office of Management and Budget (OMB).

18F generally complies with the PRA as a result of our overall approach to research: we conduct high-frequency qualitative research, and it usually takes us fewer than ten unstructured [interviews](https://methods.18f.gov/discover/stakeholder-and-user-interviews/) to reach saturation. Moreover, 18F deliberately chooses research methods and modes and participant recruiting processes that are PRA compliant by design. (Work with your partner agency’s PRA desk officer if you need structured data.)
### Research methods and modes

In OIRA’s [Flexibilities under the Paperwork Reduction Act for Compliance with Information Collection Requirements memo](https://obamawhitehouse.archives.gov/sites/default/files/omb/inforeg/pra_flexibilities_memo_7_22_16_finalI.pdf), OIRA says that (emphasis added) “OMB does not generally consider facts or opinions obtained through **direct observation** by an employee or agent of the sponsoring agency or through **non-standardized oral communications** in connection with such direct observations to be information under the PRA.” You should default to modes of research where you can directly observe, or collect unstructured data from, stakeholders and users such as in-person or remote interviews and usability tests.

### Research participant recruiting

Screeners or intercepts that do not ask people for any information other than their contact information (such as name, email address, mailing address, and/or phone number) are PRA-compliant by design (per OIRA’s [Social Media, Web-Based Interactive Technologies, and the Paperwork Reduction Act](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/inforeg/SocialMediaGuidance_04072010.pdf) memo). This has some interesting downstream effects: screeners cannot include language that asks a respondent to disclose information as a consequence of their responding to them (for example, “Oh, yes, I’m a parent of a 4th grader”). In other words, your screeners should either target everyone or a specific individual.

Some tweet-length examples:

> **Good:** We’d love to hear your feedback on www.gsa.gov! Email 18F-research@gsa.gov to participate in a usability test. Here’s how we’ll use the information we collect: Here’s how we’ll use the information we collect: [Link to Privacy Act Statement for Design Research]

> **Good:** Hey @username, we’d love to hear your feedback on www.gsa.gov. Email 18F-research@gsa.gov to participate in a usability test. Here’s how we’ll use the information we collect: [Link to Privacy Act Statement for Design Research]

> **Bad:** Are you the parent of a 4th grader? We’d love your feedback on everykidinapark.gov! Email 18F-research@gsa.gov to participate in a usability test. Here’s how we’ll use the information we collect: [Link to Privacy Act Statement for Design Research]

(In the last example, “Are you the parent of a 4th grader?” is an information collection.)

Form-based screeners can be useful in cases where a tweet, email, etc. cannot guarantee that the people who sign up to participate in your research will meet your recruitment criteria. GSA staff interested in creating a screener should see [this PRA flowchart]() as a starting point, and be sure to consult with GSA’s PRA desk officer. GSA Staff should also note that [we've built our own remote recruiting tool](https://18f.gsa.gov/2017/11/08/four-lessons-we-learned-while-building-our-own-design-research-recruiting-tool/); ping #research-tools in Slack for more information.
