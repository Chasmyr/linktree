// ============================================================================
// CONFIG DU SITE — c'est le seul fichier à modifier pour changer le contenu.
// Pour ajouter/enlever une section : voir le tableau `sections` en bas.
// ============================================================================

export const profile = {
  name: "etwahl",
  emoji: "",
  tagline: "DJ / productrice — hyperpop · dubstep · edm · techno",
  backgroundImage: "uploads/1000005570.jpg",
};

// ── ACTU : à modifier à chaque nouvelle sortie / date de concert ──
// Passe `hasDate` à true et remplis `withDate` quand une date est annoncée.
const actu = {
  hasDate: false,
  noDate: {
    label: "🔜 Premier set bientôt",
    title: "Voir / écouter",
    url: "https://soundcloud.com/etwahl-az",
  },
  withDate: {
    eyebrow: "Prochain set",
    dateDay: "14",
    dateMonth: "sept.",
    location: "Rennes",
    ticketLabel: "Billetterie / infos",
    url: "https://soundcloud.com/etwahl",
  },
};

// ── STREAMING : ajoute/enlève une entrée pour Spotify, Apple Music, TikTok, etc ──
const streamingLinks = [
  { name: "SoundCloud", icon: "S", url: "https://soundcloud.com/etwahl-az" },
  { name: "Spotify", icon: "S", url: "https://open.spotify.com/intl-fr/artist/7gwOQ9SoqkSDHjxIWbdCDZ?si=Cf4w8_2kTCKXWJeaxlVqPg"},
  { name: "Apple music", icon : "A", url: "https://music.apple.com/us/artist/etwahl/6800855782"},
  { name: "Deezer", icon: "D", url: "https://www.deezer.com/en/artist/407574012"},
  { name: "Youtube Music", icon: "Y", url: "https://music.youtube.com/channel/UCT70CoANUEZiLzpAMhGNBNA"},
  { name: "Bandcamp", icon: "B", url: "https://etwahl.bandcamp.com/" }
];

// ── CONTACT ──
const contactEmail = "etwahl.contact@gmail.com";
const contactLinks = [
  { name: "@etwahl.az", icon: "IG", url: "https://instagram.com/etwahl.az" },
  { name: contactEmail, icon: "✉", url: "mailto:" + contactEmail },
];

// ── CREDITS : ajoute d'autres collaborateurs ici, même format ──
const credits = [
  { role: "Visuel / DA", name: "Pulsaar", url: "https://instagram.com/pulsaar.t" },
];

// ============================================================================
// SECTIONS — l'ordre du tableau = l'ordre d'affichage sur la page.
// Pour RETIRER une section : commente-la ou mets `enabled: false`.
// Pour en AJOUTER une : duplique un bloc "links" ou "credits" ci-dessous
// et donne-lui un nouveau `id`. Pour un tout nouveau type de section,
// voir le README (partie "Ajouter un nouveau type de section").
// ============================================================================
export const sections = [
  {
    id: "actu",
    type: "actu",
    enabled: true,
    data: actu,
  },
  {
    id: "streaming",
    type: "links",
    enabled: true,
    title: "Écouter",
    links: streamingLinks,
  },
  {
    id: "contact",
    type: "links",
    enabled: true,
    title: "Contact",
    links: contactLinks,
  },
  {
    id: "credits",
    type: "credits",
    enabled: true,
    items: credits,
  },
];
