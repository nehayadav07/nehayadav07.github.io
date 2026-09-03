/* ============================================================
   APP.JS — builds each page from content.js.
   You normally never need to edit this file.
   ============================================================ */
(function () {
  "use strict";

  var C = window.SITE_CONTENT || {};

  /* Preview mode: admin.html opens pages with ?preview=1 so unsaved
     edits can be checked before publishing. Never affects the live site. */
  var PREVIEW = false;
  try {
    if (new URLSearchParams(location.search).get("preview") === "1") {
      var raw = localStorage.getItem("portfolio_admin_preview");
      if (raw) { C = JSON.parse(raw); PREVIEW = true; }
    }
  } catch (e) {}

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function has(s) { return typeof s === "string" && s.trim() !== ""; }
  function el(id) { return document.getElementById(id); }
  function paras(arr) {
    return (arr || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }
  function fileName() {
    var p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }
  function qs(key) {
    return new URLSearchParams(location.search).get(key) || "";
  }
  function btns(list) {
    return '<div class="btn-row">' + (list || []).map(function (b) {
      return '<a class="btn btn--' + (b.style === "ghost" ? "ghost" : "primary") +
             '" href="' + esc(b.href) + '">' + esc(b.label) + "</a>";
    }).join("") + "</div>";
  }
  function tags(list) {
    if (!list || !list.length) return "";
    return '<ul class="tags">' + list.map(function (t) {
      return '<li class="tag">' + esc(t) + "</li>";
    }).join("") + "</ul>";
  }
  /* image frame that degrades to a labelled placeholder when src is empty */
  function media(src, alt, placeholder, cls, emptyCls) {
    if (has(src)) {
      return '<div class="' + cls + '"><img src="' + esc(src) + '" alt="' + esc(alt || "") + '"></div>';
    }
    return '<div class="' + cls + (emptyCls ? " " + emptyCls : "") + '">' + esc(placeholder) + "</div>";
  }

  /* ---------- header ---------- */
  function header() {
    var s = C.site || {};
    var here = fileName();

    /* A case study is part of Work, so keep Work marked while reading one —
       otherwise the nav goes blank and you lose your place. Extra pages match
       on their full query string, since they all share page.html. */
    if (here === "case.html") here = "work.html";
    else if (here === "page.html") here = "page.html" + location.search;
    var mark = has(s.logoImage)
      ? '<span class="brand__mark"><img src="' + esc(s.logoImage) + '" alt=""></span>'
      : '<span class="brand__mark" aria-hidden="true">' + esc(s.initials || "") + "</span>";

    var links = (C.nav || []).map(function (n) {
      var cur = (n.href === here) ? ' aria-current="page"' : "";
      return "<li><a href=\"" + esc(n.href) + "\"" + cur + ">" + esc(n.label) + "</a></li>";
    }).join("");

    var aside = (C.navButtons || []).map(function (b) {
      return '<a class="btn btn--' + (b.style === "primary" ? "primary" : "ghost") +
             '" href="' + esc(b.href) + '">' + esc(b.label) + "</a>";
    }).join("");

    return '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-header"><div class="wrap site-header__inner">' +
        '<a class="brand" href="index.html">' + mark + "<span>" + esc(s.name) + "</span></a>" +
        '<button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="nav" aria-label="Menu">' +
          "<span></span><span></span><span></span></button>" +
        '<nav class="nav" id="nav">' +
          '<ul class="nav__links">' + links + "</ul>" +
          '<div class="nav__aside">' + aside + "</div>" +
        "</nav>" +
      "</div></header>";
  }

  /* ---------- footer ---------- */
  function footer() {
    var s = C.site || {};
    var cols = (C.footer || []).map(function (col) {
      var li = (col.links || []).map(function (l) {
        return "<li><a href=\"" + esc(l.href) + "\">" + esc(l.label) + "</a></li>";
      }).join("");
      return "<div><h4>" + esc(col.title) + "</h4><ul>" + li + "</ul></div>";
    }).join("");

    return '<footer class="site-footer"><div class="wrap">' +
      '<div class="footer-grid">' +
        "<div><a class=\"brand\" href=\"index.html\"><span class=\"brand__mark\" aria-hidden=\"true\">" +
          esc(s.initials || "") + "</span><span>" + esc(s.name) + "</span></a>" +
          '<p class="footer-blurb">' + esc(s.footerBlurb) + "</p></div>" +
        cols +
      "</div>" +
      '<p class="footer-legal">' + esc(s.copyright) + "</p>" +
      "</div></footer>";
  }

  /* ---------- shared blocks ---------- */
  function caseCards(list, linked) {
    return (list || []).map(function (c, i) {
      var n = String(i + 1);
      if (n.length < 2) n = "0" + n;
      var href = "case.html?id=" + encodeURIComponent(c.id);
      return '<article class="case-card">' +
        media(c.cover && c.cover.src, c.cover && c.cover.alt,
              "Add a cover image in admin", "case-card__media") +
        "<div>" +
          '<p class="case-card__index">' + n + " · " + esc(c.client || "") + "</p>" +
          '<p class="case-card__sub">' + esc(c.subtitle || "") + "</p>" +
          "<h3><a href=\"" + href + "\">" + esc(c.title) + "</a></h3>" +
          "<p>" + esc(c.summary) + "</p>" +
          tags(c.tags) +
          (linked === false ? "" : '<a class="case-card__link" href="' + href + '">Read case study</a>') +
        "</div></article>";
    }).join("");
  }

  function timeline(list) {
    return '<ul class="timeline">' + (list || []).map(function (e) {
      return "<li><div class=\"timeline__when\">" + esc(e.when) + "</div><div>" +
        '<div class="timeline__role">' + esc(e.role) + "</div>" +
        '<div class="timeline__org">' + esc(e.org) + (has(e.location) ? " · " + esc(e.location) : "") + "</div>" +
        (has(e.note) ? '<p class="timeline__note">' + esc(e.note) + "</p>" : "") +
        "</div></li>";
    }).join("") + "</ul>";
  }

  function ctaBand() {
    var h = C.home || {};
    return '<section class="section"><div class="wrap"><div class="cta">' +
      (has(h.ctaEyebrow) ? '<p class="eyebrow" style="color:inherit;opacity:.65">' + esc(h.ctaEyebrow) + "</p>" : "") +
      "<h2>" + esc(h.ctaTitle) + "</h2>" +
      "<p>" + esc(h.ctaText) + "</p>" +
      '<div style="margin-top:var(--s-6)">' + btns(h.ctaButtons) + "</div>" +
      "</div></div></section>";
  }

  /* ---------- case study blocks ---------- */
  function renderBlock(b) {
    var head = (has(b.eyebrow) ? '<p class="eyebrow">' + esc(b.eyebrow) + "</p>" : "") +
               (has(b.heading) ? "<h2>" + esc(b.heading) + "</h2>" : "");

    switch (b.type) {
      case "text":
        return '<div class="block">' + head + "<p>" + esc(b.body) + "</p></div>";

      case "list":
        return '<div class="block">' + head + "<ul>" +
          (b.items || []).map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") +
          "</ul></div>";

      case "stats":
        return '<div class="block">' + head + '<div class="stats">' +
          (b.items || []).map(function (s) {
            return '<div class="stat"><div class="stat__num">' + esc(s.num) +
                   '</div><div class="stat__label">' + esc(s.label) + "</div></div>";
          }).join("") + "</div></div>";

      case "quote":
        return '<div class="block"><blockquote class="pullquote"><p>“' + esc(b.quote) +
               '”</p><cite>— ' + esc(b.cite) + "</cite></blockquote></div>";

      case "image":
        return '<div class="block"><figure class="figure">' +
          media(b.src, b.alt, "Image placeholder — add a file path in admin", "figure__frame") +
          (has(b.caption) ? "<figcaption>" + esc(b.caption) + "</figcaption>" : "") +
          "</figure></div>";

      case "gallery":
        return '<div class="block">' + head + '<div class="gallery">' +
          (b.items || []).map(function (g) {
            return "<figure>" + media(g.src, g.alt, "Image", "figure__frame") +
              (has(g.caption) ? "<figcaption>" + esc(g.caption) + "</figcaption>" : "") + "</figure>";
          }).join("") + "</div></div>";

      default:
        return "";
    }
  }

  /* ---------- pages ---------- */
  var render = {};

  render.home = function () {
    var h = C.home || {}, s = C.site || {};
    return '<section class="hero"><div class="wrap"><div class="hero__grid"><div>' +
        '<p class="eyebrow">' + esc(h.eyebrow) + "</p>" +
        "<h1>" + esc(h.headline) + "</h1>" +
        '<p class="lead">' + esc(h.intro) + "</p>" +
        btns(h.buttons) +
      "</div>" +
      media(h.portrait && h.portrait.src, h.portrait && h.portrait.alt,
            "Add a portrait image in admin", "hero__portrait", "hero__portrait--empty") +
      "</div></div></section>" +

      '<section class="section"><div class="wrap"><div class="grid grid--3">' +
        (h.facts || []).map(function (f) {
          return '<div class="fact"><h3>' + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></div>";
        }).join("") +
      "</div></div></section>" +

      '<section class="section section--alt"><div class="wrap">' +
        '<div class="section-head"><h2>' + esc(h.workHeading || "Selected work") +
        '</h2><a href="work.html">All case studies →</a></div>' +
        (has(h.workIntro) ? '<p class="lead" style="margin-bottom:var(--s-7)">' + esc(h.workIntro) + "</p>" : "") +
        '<div class="case-list">' + caseCards(C.cases) + "</div>" +
      "</div></section>" +

      '<section class="section"><div class="wrap">' +
        '<div class="section-head"><h2>' + esc(C.experienceTitle || "Career") +
        '</h2><a href="about.html">More about me →</a></div>' +
        timeline((C.experience || []).slice(0, 5)) +
      "</div></section>" +

      ctaBand();
  };

  render.work = function () {
    var w = C.work || {};
    return '<section class="section"><div class="wrap">' +
      "<h1>" + esc(w.title || "Work") + "</h1>" +
      '<p class="lead" style="margin-bottom:var(--s-8)">' + esc(w.intro) + "</p>" +
      '<div class="case-list">' + caseCards(C.cases) + "</div>" +
      "</div></section>" + ctaBand();
  };

  render.about = function () {
    var a = C.about || {};
    return '<section class="section"><div class="wrap">' +
      "<h1>" + esc(a.title || "About") + "</h1>" +
      '<p class="lead" style="margin-bottom:var(--s-7)">' + esc(a.intro) + "</p>" +
      '<div class="grid grid--2" style="align-items:start">' +
        '<div class="stack">' + paras(a.body) + "</div>" +
        media(a.photo && a.photo.src, a.photo && a.photo.alt,
              "Add a photo in admin", "hero__portrait", "hero__portrait--empty") +
      "</div></div></section>" +

      '<section class="section section--alt"><div class="wrap">' +
        '<div class="section-head"><h2>' + esc(C.experienceTitle || "Career") + "</h2></div>" +
        timeline(C.experience) +
      "</div></section>" +

      '<section class="section"><div class="wrap">' +
        '<div class="section-head"><h2>' + esc(a.educationTitle || "Education") + "</h2></div>" +
        timeline((a.education || []).map(function (e) {
          return { when: e.when, role: e.degree, org: e.school, location: "", note: e.note };
        })) +
        '<div class="section-head" style="margin-top:var(--s-9)"><h2>' + esc(a.skillsTitle || "Skills") + "</h2></div>" +
        '<ul class="chips">' + (a.skills || []).map(function (k) {
          return "<li>" + esc(k) + "</li>";
        }).join("") + "</ul>" +
      "</div></section>" + ctaBand();
  };

  render.contact = function () {
    var c = C.contact || {}, f = c.form || {};

    var rows = (c.methods || []).map(function (m) {
      var v = has(m.href)
        ? "<a href=\"" + esc(m.href) + "\">" + esc(m.value) + "</a>"
        : esc(m.value);
      return "<li><div class=\"timeline__when\">" + esc(m.label) + "</div><div>" + v + "</div></li>";
    }).join("");

    var pills = (c.links || []).map(function (l) {
      return '<a class="pill" href="' + esc(l.href) + '">' + esc(l.label) + "</a>";
    }).join("");

    var left = "<div>" +
      (has(c.eyebrow) ? '<p class="eyebrow">' + esc(c.eyebrow) + "</p>" : "") +
      "<h1>" + esc(c.title || "Contact") + "</h1>" +
      '<p class="lead">' + esc(c.intro) + "</p>" +
      (pills ? '<div class="pills">' + pills + "</div>" : "") +
      (rows ? '<ul class="timeline" style="margin-top:var(--s-7)">' + rows + "</ul>" : "") +
      (has(c.note) ? '<p class="contact-note">' + esc(c.note) + "</p>" : "") +
      "</div>";

    /* No endpoint configured → links only, never a form that silently fails. */
    if (!has(f.endpoint)) {
      return '<section class="section"><div class="wrap"><div class="contact-grid">' +
        left + "</div></div></section>";
    }

    var form = '<div class="form-card"><h2 class="form-card__title">' +
      esc(f.heading || "Send a message") + "</h2>" +
      '<form id="contactForm" novalidate>' +
        '<div class="field"><label for="cfName">Name</label>' +
          '<input id="cfName" name="name" type="text" autocomplete="name" required></div>' +
        '<div class="field"><label for="cfEmail">Email</label>' +
          '<input id="cfEmail" name="email" type="email" autocomplete="email" required>' +
          '<p class="field__hint">So I can reply.</p></div>' +
        '<div class="field"><label for="cfMsg">Message</label>' +
          '<textarea id="cfMsg" name="message" rows="6" required></textarea></div>' +
        '<div class="field field--trap" aria-hidden="true">' +
          '<label for="cfSite">Leave this empty</label>' +
          '<input id="cfSite" name="botcheck" type="text" tabindex="-1" autocomplete="off"></div>' +
        '<button class="btn btn--primary btn--block" type="submit" id="cfSubmit">' +
          esc(f.buttonLabel || "Send message") + "</button>" +
        '<p class="form-status" id="cfStatus" role="status" aria-live="polite"></p>' +
      "</form></div>";

    return '<section class="section"><div class="wrap"><div class="contact-grid">' +
      left + form + "</div></div></section>";
  };

  /* Submits without leaving the page. Works with Web3Forms and Formspree. */
  function wireContactForm() {
    var form = el("contactForm");
    if (!form) return;
    var f = (C.contact && C.contact.form) || {};
    var label = el("cfSubmit").textContent;

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      /* looked up per submit, so a re-render never leaves us writing to a detached node */
      var btn = el("cfSubmit"), status = el("cfStatus");
      if (!btn || !status) return;
      status.className = "form-status";

      var fName = el("cfName"), fEmail = el("cfEmail"), fMsg = el("cfMsg");
      var name = fName.value.trim();
      var email = fEmail.value.trim();
      var message = fMsg.value.trim();

      if (!name || !email || !message) {
        status.className = "form-status is-error";
        status.textContent = "Please fill in your name, email and message.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.className = "form-status is-error";
        status.textContent = "That email address doesn't look right.";
        fEmail.focus();
        return;
      }
      if (el("cfSite").value) return;   /* honeypot: silently drop bots */

      var payload = { name: name, email: email, message: message,
                      subject: f.subject || "New message from your portfolio site" };
      if (has(f.accessKey)) payload.access_key = f.accessKey;

      btn.disabled = true;
      btn.textContent = f.sendingLabel || "Sending…";

      fetch(f.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) {
        return r.json().catch(function () { return { ok: r.ok }; });
      }).then(function (data) {
        var ok = data.success === true || data.ok === true || !data.errors;
        if (!ok) throw new Error("rejected");
        form.reset();
        status.className = "form-status is-ok";
        status.textContent = f.successMessage || "Thanks — your message is on its way.";
      }).catch(function () {
        status.className = "form-status is-error";
        status.innerHTML = esc(f.errorMessage || "That didn't send.") +
          (C.site && has(C.site.email)
            ? ' <a href="mailto:' + esc(C.site.email) + '">' + esc(C.site.email) + "</a>"
            : "");
      }).then(function () {
        btn.disabled = false;
        btn.textContent = label;
      });
    });
  }

  render.caseStudy = function () {
    var id = qs("id");
    var list = C.cases || [];
    var i = 0, item = null;
    for (; i < list.length; i++) { if (list[i].id === id) { item = list[i]; break; } }
    if (!item) {
      return '<section class="section"><div class="wrap-n"><h1>Case study not found</h1>' +
             '<p class="lead">This link may be out of date. <a href="work.html">See all work →</a></p></div></section>';
    }
    document.title = item.title + " · " + (C.site && C.site.name || "");

    var next = list[(i + 1) % list.length];
    var meta = (item.meta || []).map(function (m) {
      return "<dt>" + esc(m.label) + "</dt><dd>" + esc(m.value) + "</dd>";
    }).join("");

    return '<section class="case-hero"><div class="wrap">' +
        '<a class="backlink" href="work.html">← Back to work</a>' +
        '<p class="eyebrow">' + esc(item.client) + "</p>" +
        "<h1>" + esc(item.title) + "</h1>" +
        '<p class="lead">' + esc(item.summary) + "</p>" +
        '<div style="margin-top:var(--s-5)">' + tags(item.tags) + "</div>" +
        '<div style="margin-top:var(--s-7)">' +
          media(item.cover && item.cover.src, item.cover && item.cover.alt,
                "Add a hero image in admin", "figure__frame") + "</div>" +
        '<dl class="case-meta">' + meta + "</dl>" +
      "</div></section>" +

      '<section><div class="wrap">' +
        (item.blocks || []).map(renderBlock).join("") +
      "</div></section>" +

      (next && next.id !== item.id
        ? '<section class="section"><div class="wrap"><div class="section-head"><h2>Next case study</h2></div>' +
          '<div class="case-list">' + caseCards([next]) + "</div></div></section>"
        : "") +

      ctaBand();
  };

  render.page = function () {
    var id = qs("id");
    var p = (C.pages || []).filter(function (x) { return x.id === id; })[0];
    if (!p) {
      return '<section class="section"><div class="wrap-n"><h1>Page not found</h1>' +
             '<p class="lead"><a href="index.html">Back home →</a></p></div></section>';
    }
    document.title = p.title + " · " + (C.site && C.site.name || "");

    var body = "";
    if (p.template === "links") {
      body = '<ul class="linklist">' + (p.items || []).map(function (i) {
        return "<li><a href=\"" + esc(i.href) + "\">" + esc(i.label) +
               "<span>" + esc(i.note || "") + "</span></a></li>";
      }).join("") + "</ul>";
    } else if (p.template === "gallery") {
      body = '<div class="gallery">' + (p.items || []).map(function (g) {
        return "<figure>" + media(g.src, g.alt, "Image", "figure__frame") +
          (has(g.caption) ? "<figcaption>" + esc(g.caption) + "</figcaption>" : "") + "</figure>";
      }).join("") + "</div>";
    } else {
      body = '<div class="stack" style="max-width:68ch">' + paras(p.body) + "</div>";
    }

    return '<section class="section"><div class="wrap">' +
      "<h1>" + esc(p.title) + "</h1>" +
      (has(p.intro) ? '<p class="lead" style="margin-bottom:var(--s-8)">' + esc(p.intro) + "</p>" : "") +
      body + "</div></section>";
  };


  /* ---------- motion ----------
     Everything here is opt-in: if the visitor prefers reduced motion,
     or IntersectionObserver is missing, we never add the `motion`
     class and the CSS above stays inert. Content is visible either way. */
  function initMotion() {
    var reduce = window.matchMedia &&
                 window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion");

    var sel = ".hero__grid > *, .fact, .section-head, .case-card, " +
              ".timeline li, .block, .cta, .form-card, .chips, .linklist, .pills";
    var items = Array.prototype.slice.call(document.querySelectorAll(sel));

    /* stagger siblings a little, but never enough to feel slow */
    var lastParent = null, i = 0;
    items.forEach(function (elm) {
      if (elm.parentNode !== lastParent) { lastParent = elm.parentNode; i = 0; }
      elm.classList.add("reveal");
      elm.style.setProperty("--reveal-delay", Math.min(i, 4) * 70 + "ms");
      i++;
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    items.forEach(function (elm) { io.observe(elm); });

    /* header weight on scroll */
    var header = document.querySelector(".site-header");
    if (header) {
      var tick = false;
      window.addEventListener("scroll", function () {
        if (tick) return;
        tick = true;
        window.requestAnimationFrame(function () {
          header.classList.toggle("is-scrolled", window.scrollY > 8);
          tick = false;
        });
      }, { passive: true });
    }
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    var head = el("siteHeader"), main = el("main"), foot = el("siteFooter");

    if (head) head.innerHTML = header();
    if (main && render[page]) main.innerHTML = render[page]();
    if (page === "contact") wireContactForm();
    initMotion();
    if (foot) foot.innerHTML = footer();

    if (PREVIEW) {
      document.body.insertAdjacentHTML("afterbegin",
        '<div style="background:#C2551F;color:#fff;font-size:13px;padding:8px 16px;text-align:center">' +
        "Preview of unpublished edits — download content.js from admin to make these live.</div>");
      Array.prototype.forEach.call(document.querySelectorAll('a[href$=".html"], a[href*=".html?"]'), function (a) {
        var h = a.getAttribute("href");
        if (/^https?:/i.test(h) || h.indexOf("preview=1") > -1) return;
        a.setAttribute("href", h + (h.indexOf("?") > -1 ? "&" : "?") + "preview=1");
      });
    }

    var t = el("navToggle"), n = el("nav");
    if (t && n) {
      t.addEventListener("click", function () {
        var open = n.classList.toggle("is-open");
        t.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  });
})();
