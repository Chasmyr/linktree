import { profile, sections } from "./config.js";

const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "html") node.innerHTML = value;
    else node.setAttribute(key, value);
  });
  children.forEach((child) => child && node.appendChild(child));
  return node;
};

function renderPill({ href, icon, label, variant = "secondary" }) {
  return el(
    "a",
    {
      class: `pill pill--${variant}`,
      href,
      target: "_blank",
      rel: "noopener",
    },
    [
      el("span", { class: `pill-icon pill-icon--${variant}` }, [
        document.createTextNode(icon),
      ]),
      el("span", { class: "pill-label" }, [document.createTextNode(label)]),
    ]
  );
}

// ── Renderers par type de section. Ajoute une entrée ici pour un nouveau type. ──
const renderers = {
  actu(section) {
    const { hasDate, withDate, noDate } = section.data;
    const wrap = el("section", { class: "section", "data-section": section.id });

    if (hasDate) {
      wrap.appendChild(
        el("div", { class: "actu-date" }, [
          el("p", { class: "actu-eyebrow" }, [document.createTextNode(withDate.eyebrow)]),
          el("div", { class: "actu-day-row" }, [
            el("span", { class: "actu-day" }, [document.createTextNode(withDate.dateDay)]),
            el("span", { class: "actu-month" }, [document.createTextNode(withDate.dateMonth)]),
          ]),
          el("p", { class: "actu-location" }, [document.createTextNode(withDate.location)]),
          renderPill({
            href: withDate.url,
            icon: "▶",
            label: withDate.ticketLabel,
            variant: "primary",
          }),
        ])
      );
    } else {
      wrap.appendChild(el("p", { class: "actu-label" }, [document.createTextNode(noDate.label)]));
      wrap.appendChild(
        renderPill({ href: noDate.url, icon: "▶", label: noDate.title, variant: "primary" })
      );
    }
    return wrap;
  },

  links(section) {
    const wrap = el("section", { class: "section", "data-section": section.id });
    if (section.title) {
      wrap.appendChild(el("h2", { class: "section-title" }, [document.createTextNode(section.title)]));
    }
    const list = el("div", { class: "pill-list" });
    section.links.forEach((link) => {
      list.appendChild(
        renderPill({ href: link.url, icon: link.icon, label: link.name, variant: "secondary" })
      );
    });
    wrap.appendChild(list);
    return wrap;
  },

  credits(section) {
    const wrap = el("section", { class: "section credits", "data-section": section.id });
    const p = el("p", { class: "credits-text" });
    section.items.forEach((credit) => {
      p.appendChild(document.createTextNode(`${credit.role} : `));
      p.appendChild(
        el("a", { href: credit.url, target: "_blank", rel: "noopener" }, [
          document.createTextNode(credit.name),
        ])
      );
      p.appendChild(el("br"));
    });
    wrap.appendChild(p);
    return wrap;
  },
};

function renderProfile() {
  document.getElementById("bg-image").setAttribute("src", profile.backgroundImage);
  document.getElementById("site-title").textContent = `${profile.name} `;
  document.getElementById("site-title").appendChild(
    el("span", { class: "title-emoji" }, [document.createTextNode(profile.emoji)])
  );
  document.getElementById("site-tagline").textContent = profile.tagline;
  document.title = `${profile.name} — liens`;
}

function renderSections() {
  const root = document.getElementById("sections");
  sections
    .filter((section) => section.enabled)
    .forEach((section) => {
      const renderer = renderers[section.type];
      if (!renderer) {
        console.warn(`Type de section inconnu : "${section.type}" (id: ${section.id})`);
        return;
      }
      root.appendChild(renderer(section));
    });
}

renderProfile();
renderSections();
