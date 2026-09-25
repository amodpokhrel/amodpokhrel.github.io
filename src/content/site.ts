export const profile = {
  name: "Amod K. Pokhrel, PhD, MS",
  shortName: "Amod K. Pokhrel",
  descriptor: "Environmental Health Scientist and Educator",
  affiliation: "Continuing Lecturer · UC Berkeley School of Public Health",
  intro:
    "I study how environmental exposures and household energy use affect health, with a particular focus on Nepal. My work brings together exposure assessment, epidemiology, data analysis, and community research to inform cleaner cooking, healthier environments, and public health practice.",
  email: "amod@berkeley.edu",
  contactCopy:
    "For research collaboration, teaching, or speaking inquiries, please connect by email or LinkedIn.",
} as const;

export const approvedLinks = {
  linkedin: "https://www.linkedin.com/in/amodpokhrel/",
  berkeleyProfile: "https://publichealth.berkeley.edu/people/amod-pokhrel",
  googleScholarSearch:
    "https://scholar.google.com/scholar?start=20&q=Amod+Pokhrel&hl=en&as_sdt=0,5",
  pubmedSearch: "https://pubmed.ncbi.nlm.nih.gov/?term=Amod+Pokhrel",
} as const;

export const campusPhoto = {
  alt: "UC Berkeley campus, with the East Asian Library and surrounding buildings viewed from Sather Tower.",
  photographer: "Firstcultural",
  rights: "CC0 1.0 public-domain dedication",
  sourcePage:
    "https://commons.wikimedia.org/wiki/File:UC-Berkeley-024-east-asian-library-college-of-natural-resources.jpg",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  { label: "Teaching", to: "/teaching" },
  { label: "Publications", to: "/publications" },
  { label: "Writing & Media", to: "/writing-media" },
  { label: "LEADERS Nepal", to: "/leaders-nepal" },
] as const;
