---
---

// ^ that up there is frontmatter tags so that Jekyll will process this file and
// replace {{ site.baseurl }} correctly. Without the frontmatter tags, Jekyll
// copies the file unedited.

document.addEventListener(
  "DOMContentLoaded",
  function () {
    PrivateEye({
      defaultMessage: "This link is private to GSA.",
      ignoreUrls: [
        "gsa-tts.slack.com",
        "anywhere.gsa.gov",
        "bookit.gsa.gov",
        "calendar.gsa.gov",
        "connect.gsa.gov",
        "docs.google.com",
        "drive.google.com",
        "ea.gsa.gov",
        "email.gsa.gov",
        "gcims.gsa.gov",
        "github.com/18F/Accessibility_Reviews",
        "github.com/18F/blog-drafts",
        "github.com/18F/codereviews",
        "github.com/18F/DevOps",
        "github.com/18F/Infrastructure",
        "github.com/18F/security-incidents",
        "github.com/18F/staffing-and-resources",
        "github.com/18F/team-api.18f.gov",
        "github.com/18F/writing-lab",
        "gkey.gsa.gov",
        "gsa-tts.slack.com",
        "gsa.my.salesforce.com",
        "gsaolu.gsa.gov",
        "hrprod.hr.gsa.gov",
        "insite.gsa.gov",
        "mail.gsa.gov",
        "meet.gsa.gov",
        "pages-internal.18f.gov",
        "tock.18f.gov",
      ],
    });

    Array.from(document.querySelectorAll("a[href]:not(.private-link"))
      .filter((a) => {
        const href = a.getAttribute("href");
        return (
          !href.startsWith(window.location.origin) &&
          !/^[/#]/.test(a.getAttribute("href"))
        );
      })
      .forEach((a) =>
        a.setAttribute(
          "class",
          [
            ...(a.getAttribute("class") ?? " ").split(" "),
            "usa-link--external",
          ].join(" ")
        )
      );
  },
  false
);
