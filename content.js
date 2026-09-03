/* ============================================================
   CONTENT.JS — ALL WORDS AND LINKS ON THE SITE LIVE HERE.
   ------------------------------------------------------------
   Edit here directly, or use admin.html and download a new copy.
   Anything wrapped in [[ ]] is a placeholder to replace.
   ============================================================ */

window.SITE_CONTENT = {

  /* ---------- SITE-WIDE ---------- */
  site: {
    name:        "Neha",
    initials:    "N",
    logoImage:   "",
    role:        "Product designer & founder",
    tagline:     "Fifteen years of UX. Now designing and shipping my own products.",
    email:       "growgently.co@gmail.com",
    location:    "Pune, India",
    linkedin:    "[[https://www.linkedin.com/in/your-handle]]",
    resumeUrl:   "[[resume.pdf]]",
    footerBlurb: "Product designer, NID graduate and iF Design Award winner. I design and build bilingual tools and books for neurodiverse children under the Grow Gently brand.",
    copyright:   "© 2026 Neha. All rights reserved."
  },

  /* ---------- NAVIGATION ---------- */
  nav: [
    { label: "Home",    href: "index.html" },
    { label: "Work",    href: "work.html" },
    { label: "About",   href: "about.html" },
    { label: "Contact", href: "contact.html" }
  ],
  navButtons: [
    { label: "Résumé",   href: "[[resume.pdf]]", style: "ghost" },
    { label: "LinkedIn", href: "[[https://www.linkedin.com/in/your-handle]]", style: "primary" }
  ],

  /* ---------- FOOTER COLUMNS ---------- */
  footer: [
    { title: "Navigation", links: [
      { label: "Work",    href: "work.html" },
      { label: "About",   href: "about.html" },
      { label: "Contact", href: "contact.html" }
    ]},
    { title: "Work", links: [
      { label: "Visual Schedules",  href: "case.html?id=visual-schedules" },
      { label: "Grow Gently Books", href: "case.html?id=grow-gently-books" },
      { label: "Intentyx",          href: "case.html?id=intentyx" }
    ]},
    { title: "Elsewhere", links: [
      { label: "visualschedule.app ↗", href: "https://visualschedule.app" },
      { label: "books.growgently.in ↗", href: "https://books.growgently.in" },
      { label: "Instagram ↗",           href: "https://www.instagram.com/growgently_co/" }
    ]}
  ],

  /* ---------- HOME PAGE ---------- */
  home: {
    eyebrow:  "Neha · Product designer & founder, Pune",
    headline: "I design for the people software usually forgets.",
    intro:    "Fifteen years in UX, an NID degree and an iF Design Award — now spent building bilingual tools and books for neurodiverse children, and design systems for teams working on genuinely hard problems.",
    buttons: [
      { label: "View work", href: "work.html",  style: "primary" },
      { label: "About me",  href: "about.html", style: "ghost" }
    ],
    portrait: { src: "", alt: "Portrait of Neha" },

    facts: [
      { title: "Designer who ships",
        text: "I don't hand off. Visual Schedules and Grow Gently Books are live products I researched, designed, built and took to market myself — from card rendering to pricing to launch." },
      { title: "Built for two languages",
        text: "Everything I make works in Hindi and English at the same time, with Devanagari properly supported. Bilingual isn't a translation layer bolted on at the end." },
      { title: "Systems, not screens",
        text: "Fifteen years of enterprise UX behind the products — design systems, documentation and the unglamorous architecture that keeps a product coherent as it grows." }
    ],

    workHeading: "Selected work",
    workIntro:   "Three projects: a live product, a publishing system, and a design system for an agentic AI platform.",

    ctaEyebrow: "Get in touch",
    ctaTitle:   "Working on something difficult?",
    ctaText:    "I'm open to conversations about product design, design systems, and accessibility work — especially where the users are underserved.",
    ctaButtons: [
      { label: "Get in touch", href: "contact.html", style: "primary" },
      { label: "See the work", href: "work.html",    style: "ghost" }
    ]
  },

  /* ---------- WORK PAGE ---------- */
  work: {
    title: "Work",
    intro: "Products I've designed and built, and systems I've designed for other teams. Each one covers the problem, the decisions, and what I'd do differently."
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    title: "About",
    intro: "Product designer with fifteen years in UX, an MDes from the National Institute of Design, and an iF Design Award. Based in Pune.",
    body: [
      "I spent most of my career doing UX inside product teams — research, systems, the long unglamorous work of making complicated software make sense. Somewhere along the way I got tired of designing things and handing them off, so I started building instead.",
      "Grow Gently is what came out of that. Two products so far: Visual Schedules, a free bilingual schedule builder for neurodiverse children, and Grow Gently Books, a bilingual ebook store and a growing curriculum of language-learning material. I do the research, the design, the writing, the build and the launch. It's a strange skill set for a designer to have, and it turns out to be the most useful one I own.",
      "I still take on design systems work for other teams — most recently a dark-first system for an agentic AI security platform. The two halves feed each other: the enterprise work keeps my systems thinking sharp, and building my own products keeps me honest about what actually ships.",
      "[[Add a line or two here about why this work matters to you — as much or as little as you want to share.]]"
    ],
    photo: { src: "", alt: "Neha" },

    skillsTitle: "What I do",
    skills: [
      "Product design", "Design systems", "UX research", "Information architecture",
      "Accessibility", "Bilingual & multilingual UX", "Content & curriculum design",
      "Design documentation", "Front-end build", "Product launch"
    ],

    educationTitle: "Education & recognition",
    education: [
      { when: "[[year]]", degree: "iF Design Award", school: "International Forum Design",
        note: "[[Which project, and what the award was for.]]" },
      { when: "[[years]]", degree: "[[MDes / degree]]", school: "National Institute of Design",
        note: "[[Discipline and anything worth noting.]]" }
    ]
  },

  /* ---------- CAREER TIMELINE ---------- */
  experienceTitle: "Career",
  experience: [
    { when: "[[year]] – Present", role: "Founder & product designer", org: "Grow Gently",
      location: "Pune, India",
      note: "Designing and building bilingual products for neurodiverse children: Visual Schedules (visualschedule.app) and Grow Gently Books (books.growgently.in)." },
    { when: "[[dates]]", role: "Design systems consultant", org: "Intentyx",
      location: "Remote",
      note: "Dark-first design system, agentic AI UX and documentation for the SMARE security platform." },
    { when: "[[dates]]", role: "[[Role]]", org: "[[Company]]", location: "[[City]]",
      note: "[[What you did there. Add one entry per role — you have fifteen years to draw on, but three or four of the strongest is plenty.]]" }
  ],

  /* ---------- CONTACT PAGE ---------- */
  contact: {
    title: "Contact",
    eyebrow: "Get in touch",
    intro: "Open to product design and design systems work, collaborations on accessibility and bilingual products, or a conversation about anything above.",

    links: [
      { label: "Résumé",    href: "[[resume.pdf]]" },
      { label: "LinkedIn",  href: "[[https://www.linkedin.com/in/your-handle]]" },
      { label: "Instagram", href: "https://www.instagram.com/growgently_co/" }
    ],

    methods: [
      { label: "Email",    value: "growgently.co@gmail.com", href: "mailto:growgently.co@gmail.com" },
      { label: "Based in", value: "Pune, India", href: "" }
    ],
    note: "",

    /* Set an endpoint to switch the form on. See README. */
    form: {
      endpoint:  "",
      accessKey: "",
      subject:   "New message from your portfolio site",
      heading:   "Send a message",
      buttonLabel: "Send message",
      sendingLabel: "Sending…",
      successMessage: "Thanks — your message is on its way. I'll reply to the email address you gave.",
      errorMessage: "That didn't send. Please email me directly instead."
    }
  },

  /* ============================================================
     CASE STUDIES
     ============================================================ */
  cases: [
    {
      id: "visual-schedules",
      title: "A visual schedule builder that works in two languages at once",
      client: "Grow Gently",
      subtitle: "Live product · design, build and launch",
      summary: "A free bilingual Hindi-English visual schedule creator for neurodiverse children — researched, designed, built and taken to market solo.",
      tags: ["Product Design", "Accessibility", "Bilingual UX", "Front-end"],
      cover: { src: "", alt: "Visual Schedules app interface" },
      meta: [
        { label: "Role",     value: "Designer, builder, founder" },
        { label: "Product",  value: "visualschedule.app" },
        { label: "Stack",    value: "Next.js, Cloudflare D1/R2, Razorpay" },
        { label: "Status",   value: "Live, in active development" }
      ],
      blocks: [
        { type: "text", eyebrow: "Context", heading: "Why this exists",
          body: "Visual schedules are a well-established support for neurodiverse children — a sequence of picture cards showing what happens next, which reduces the anxiety of an unpredictable day. The tools available are overwhelmingly English-only, priced for Western households, and assume a parent comfortable with design software. For a Hindi-speaking family in India, none of that holds." },

        { type: "text", eyebrow: "The problem", heading: "Bilingual is not a translation layer",
          body: "The obvious build is an English app with a language toggle. That fails immediately: a card in a family's home often needs both scripts at once, because the child, a grandparent and a therapist may not share a language. Devanagari also sets at a different optical size to Latin, so a label that fits in English overflows in Hindi. Bilingual had to be the default state of a card, not a setting." },

        { type: "list", eyebrow: "Decisions", heading: "Choices that shaped the product",
          items: [
            "A Card Type system — Visual, Equal and Text Focus — so the same card can be mostly-picture for a pre-reader or mostly-text for an older child, without maintaining three separate card sets.",
            "A First/Then board as a separate, simpler mode. Full-day schedules overwhelm some children; two cards is often the whole intervention.",
            "Export to PDF and JPEG as a first-class feature, not an afterthought. Most of these schedules end up printed and stuck on a fridge, not on a screen.",
            "Pricing at ₹399, ₹699 and ₹1,199 for three, six and twelve months, with no auto-renewal — because families in this situation should not have to remember to cancel something."
          ]},

        { type: "image", src: "", alt: "The schedule builder on mobile",
          caption: "[[Add a screenshot of the builder — the mobile view is the more interesting one.]]" },

        { type: "text", eyebrow: "Building it", heading: "Designing and shipping alone",
          body: "I built this myself: canvas rendering for the cards, the export pipeline, auto-translation, the subscription architecture, an admin panel for card management, and the mobile builder. Doing both jobs changes the design work. You stop drawing states you can't afford to build, and you start noticing the ones you'd never have specced — what the card looks like mid-export, what happens when a translation comes back longer than the box." },

        { type: "stats", eyebrow: "Where it stands", heading: "By the numbers",
          items: [
            { num: "[[00]]", label: "[[Schedules created]]" },
            { num: "[[00]]", label: "[[Registered families]]" },
            { num: "2",      label: "Languages, always on" },
            { num: "₹0",     label: "To start — core builder is free" }
          ]},

        { type: "text", eyebrow: "Closing", heading: "What I'd do differently",
          body: "[[Write this one honestly — it's the section hiring managers read most closely. What did you get wrong first? What did you cut? What surprised you once real families used it?]]" }
      ]
    },

    {
      id: "grow-gently-books",
      title: "Designing a curriculum, not a book",
      client: "Grow Gently",
      subtitle: "Publishing system & content design",
      summary: "A bilingual ebook store and a 34-book language curriculum, built on an evidence-based repetition framework rather than a page count.",
      tags: ["Content Design", "Curriculum", "Publishing", "Bilingual UX"],
      cover: { src: "", alt: "Grow Gently Books" },
      meta: [
        { label: "Role",     value: "Designer, author, builder" },
        { label: "Product",  value: "books.growgently.in" },
        { label: "Scope",    value: "Store, curriculum, print files" },
        { label: "Status",   value: "Live" }
      ],
      blocks: [
        { type: "text", eyebrow: "Context", heading: "The gap on the shelf",
          body: "Language-learning material for neurodiverse children is mostly Western, mostly English, and mostly built around objects and situations that don't appear in an Indian home. A child learning to answer 'where' questions is better served by a picture of a family they recognise than a stock photo of a suburban kitchen." },

        { type: "text", eyebrow: "The problem", heading: "A book is the wrong unit",
          body: "The first instinct was to make a good workbook. That's the wrong shape. Language acquisition here depends on repetition across contexts — the same concept met again and again in slightly different framings. One book can't carry that. So the design problem became a curriculum architecture problem: how do you sequence thirty-four books so that concepts recur at the right interval without the child noticing they're doing the same thing again?" },

        { type: "list", eyebrow: "The system", heading: "How it's structured",
          items: [
            "A repetition framework targeting 12–20 exposures per concept, spread across books rather than stacked inside one.",
            "One protagonist, Ria, running through the whole series — so each new book starts with a familiar character instead of a new cast to learn.",
            "A five-sentence describing framework applied consistently per object, giving parents and therapists a predictable script to follow.",
            "100 culturally Indian items in the First 100 Words book, chosen for what's actually in the house.",
            "Full Devanagari support in the print files, which is less trivial than it sounds once you're generating print-ready PDFs."
          ]},

        { type: "quote",
          quote: "In testing, children started pointing at the star markers instead of processing the question. The stars came out.",
          cite: "A design decision from user testing" },

        { type: "text", eyebrow: "Why that mattered", heading: "The cheapest lesson in the project",
          body: "The stars were an accessibility feature — a visual marker to show where the answer went. They were also, to a child scanning for the reward, the most interesting thing on the page. The intervention had quietly become a find-the-star game. Removing them cost nothing and fixed the book. It's the clearest example I have of why you test with the actual user rather than the parent buying the book." },

        { type: "image", src: "", alt: "Interior page spread",
          caption: "[[Add a spread from the WH-questions series or First 100 Words.]]" },

        { type: "text", eyebrow: "Closing", heading: "Reflection",
          body: "[[What did designing a publishing system teach you that product work didn't? Worth being specific.]]" }
      ]
    },

    {
      id: "intentyx",
      title: "A dark-first design system for agentic AI",
      client: "Intentyx",
      subtitle: "Design systems · client work",
      summary: "Design system, agentic AI interaction patterns and documentation for SMARE, an AI security platform.",
      tags: ["Design Systems", "Agentic AI UX", "Documentation", "B2B"],
      cover: { src: "", alt: "Intentyx design system" },
      meta: [
        { label: "Role",     value: "Design systems consultant" },
        { label: "Client",   value: "Intentyx (SMARE platform)" },
        { label: "Scope",    value: "System, product UX, marketing site" },
        { label: "Duration", value: "[[dates]]" }
      ],
      blocks: [
        { type: "text", eyebrow: "Context", heading: "Designing for the security operations centre",
          body: "SMARE is an agentic AI security platform. Its users are SOC analysts, who work long shifts in dark rooms watching for things that are almost never happening — and then, occasionally, need to understand a serious incident very fast. That shapes everything: dark-first isn't an aesthetic preference here, and alert colour is a functional decision, not a brand one." },

        { type: "list", eyebrow: "What I built", heading: "The pieces",
          items: [
            "A full dark-first design system — Intentyx Purple and Alert Amber, set in IBM Plex Sans and Mono.",
            "Interactive HTML styleguides rather than static specs, so the team could see states behave instead of reading about them.",
            "A redesign of agent run detail navigation — the screen where an analyst reconstructs what an autonomous agent actually did.",
            "SMARTE Conversations, the SOC-facing AI chat UX.",
            "A marketing site with animated network topology and a hexagonal network-shield logomark."
          ]},

        { type: "text", eyebrow: "The interesting problem", heading: "Making an agent's reasoning inspectable",
          body: "The hard part of agentic AI UX isn't the chat window. It's the audit trail. When an autonomous agent has taken a series of actions on your infrastructure, an analyst needs to reconstruct what it did, in what order, and on what evidence — under time pressure, and with enough clarity to defend the conclusion afterwards. That's an information architecture problem wearing an AI costume. [[Expand on how you solved it, at whatever level of detail your NDA allows.]]" },

        { type: "text", eyebrow: "Beyond design", heading: "Writing for two audiences",
          body: "I also debugged the team's spec environment and wrote the documentation for it twice — a non-technical cheat sheet and a formal spec document. Design systems fail at the handoff more often than at the design, and two audiences usually need two documents." },

        { type: "image", src: "", alt: "Design system styleguide",
          caption: "[[A styleguide screen or a before/after of the agent run navigation.]]" },

        { type: "text", eyebrow: "Closing", heading: "Reflection",
          body: "[[What you'd carry forward from this into the next systems project.]]" }
      ]
    }
  ],

  /* ============================================================
     EXTRA PAGES
     ============================================================ */
  pages: [
    {
      id: "also",
      title: "Also built",
      template: "links",
      intro: "Smaller projects and things that don't need a full case study.",
      items: [
        { label: "Meopel ↗", href: "[[url]]",
          note: "Brand and website for an availability-based meetup app" },
        { label: "growgently.in ↗", href: "https://growgently.in",
          note: "Grow Gently main site — schedule builder, social stories library, downloads" },
        { label: "Grow Gently identity", href: "[[url or #]]",
          note: "Editorial Organic brand system — seedling logomark, Forest Ink / Grow Teal / Heritage Gold" }
      ]
    }
  ]
};
