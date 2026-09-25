export type MediaCategory = "Op-eds" | "Interviews & Documentary" | "Research Coverage";

export const mediaCategories: MediaCategory[] = [
  "Op-eds",
  "Interviews & Documentary",
  "Research Coverage",
];

export type MediaItem = {
  id: string;
  category: MediaCategory;
  title: string;
  byline?: string;
  publisher: string;
  date?: string;
  summary: string;
  url: string;
  urlLabel: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  detail?: string;
  tags?: string[];
};

export const mediaItems: MediaItem[] = [
  {
    id: "W01",
    category: "Op-eds",
    title: "Natural Debt and Climate Justice: Why Nepal Needs Climate Compensation",
    byline: "Amod Pokhrel",
    publisher: "Desh Sanchar",
    date: "September 8, 2026",
    summary:
      "Argues for climate compensation and investment in resilient infrastructure and community preparedness, connecting Nepal's climate risks with the unequal historical contribution to emissions.",
    url: "https://english.deshsanchar.com/natural-debt-and-climate-justice-why-nepal-needs-climate-compensation/",
    urlLabel: "Read at Desh Sanchar",
    tags: ["Climate Justice", "Nepal", "Disaster Resilience"],
  },
  {
    id: "W02",
    category: "Op-eds",
    title: "Why Nepal must not close its San Francisco consulate",
    byline: "Rachit Poudel and Amod Pokhrel",
    publisher: "Desh Sanchar",
    date: "August 20, 2026",
    summary:
      "Makes the case for retaining Nepal's San Francisco consulate through its role in diaspora services, trade, investment, tourism, and connections between Nepal and the U.S. West Coast.",
    url: "https://english.deshsanchar.com/why-nepal-must-not-close-its-san-francisco-consulate/",
    urlLabel: "Read at Desh Sanchar",
    tags: ["Diaspora", "Public Policy", "Nepal–United States"],
  },
  {
    id: "M01",
    category: "Interviews & Documentary",
    title: "Environmental Impacts of Energy on Air",
    publisher: "Energy Switch, PBS — Season 2, Episode 5",
    date: "May 14, 2023",
    detail: "26 minutes 46 seconds · Featured guest with Angel Hsu",
    summary:
      "A conversation about air pollution associated with energy use and approaches to reducing exposure.",
    url: "https://www.pbs.org/video/environmental-impacts-of-energy-on-air-kip5nw/",
    urlLabel: "Watch at PBS",
  },
  {
    id: "M02",
    category: "Interviews & Documentary",
    title: "Modern Cooking Fuels",
    publisher: "Switch On: The Series, Switch Energy Alliance",
    detail: "Documentary participant / interviewee",
    summary: "A documentary segment exploring cleaner cooking and household energy in Nepal.",
    url: "https://www.youtube.com/watch?v=fZupWaF-moA",
    urlLabel: "Watch the episode",
    secondaryUrl: "https://switchon.org/docs/films/switchon-episode-1-transcript.pdf",
    secondaryLabel: "Transcript (PDF)",
  },
  {
    id: "M03",
    category: "Research Coverage",
    title: "Biodigester cookstoves linked to increase in child diarrhea in Nepal",
    publisher: "UC Berkeley Public Health",
    date: "February 22, 2022",
    detail: "Research coverage / Q&A",
    summary:
      "A research discussion examining the relationship between biogas interventions, fecal exposure pathways, and child health in Nepal.",
    url: "https://publichealth.berkeley.edu/articles/spotlight/research/biodigester-cookstoves-linked-to-increase-in-child-diarrhea-in-nepal",
    urlLabel: "Read at Berkeley Public Health",
  },
];

export const mediaIntro =
  "Op-eds are pieces I wrote. Interviews, documentary appearances, and research coverage are work by others in which I took part or which discusses my research.";
