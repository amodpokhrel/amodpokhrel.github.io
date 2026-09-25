export const researchIntro =
  "My research examines environmental exposures and the practical conditions that influence whether public health interventions work in everyday life.";

export const researchTopics = [
  "Air Pollution",
  "Clean Cooking & Energy",
  "Child Health",
  "Lead & Toxic Exposures",
  "Infectious Disease",
  "Monitoring & Data",
] as const;

export type ResearchTopic = (typeof researchTopics)[number];

export type RolePeriod = {
  role: string;
  dates: string;
};

export type ResearchProject = {
  id: string;
  slug: string;
  displayTitle: string;
  fullTitle: string;
  displayDates: string;
  ongoingNote?: string;
  rolePeriods: RolePeriod[];
  location?: string;
  design?: string;
  institutions: string[];
  funding: { source: string; grant?: string; total?: string }[];
  summary: string;
  relatedOutputs?: string[];
  topics: ResearchTopic[];
  datesNote?: string;
};

export const researchProjects: ResearchProject[] = [
  {
    id: "R01",
    slug: "student-induction-stove-distribution",
    displayTitle: "Student induction-stove distribution and cooking preferences",
    fullTitle:
      "Evaluation of Government-Led Student (Induction) Stove Distribution Program & Taste-Based Stove Preferences in Kathmandu Valley, Nepal",
    displayDates: "Began May 27, 2022",
    ongoingNote: "Reported ongoing in July 2025",
    rolePeriods: [{ role: "Co-Principal Investigator", dates: "Since May 2022" }],
    location: "Kathmandu Valley, Nepal",
    institutions: ["Environmental Health Sciences, UC Berkeley (grantee)"],
    funding: [
      {
        source:
          "UC Berkeley Climate Equity and Environmental Justice Roundtable Seed Grant",
        total: "$25,520 total project cost",
      },
    ],
    summary:
      "Evaluates a government-led induction-stove distribution program and the influence of taste preferences on stove choice in Kathmandu Valley.",
    topics: ["Clean Cooking & Energy", "Monitoring & Data"],
  },
  {
    id: "R02",
    slug: "household-biogas-safe-use",
    displayTitle: "Safe and effective household biogas use",
    fullTitle:
      "Understanding Barriers to Safe and Effective Use of Household Biogas Systems in Nepal",
    displayDates: "Began May 1, 2022",
    ongoingNote: "Reported ongoing in July 2025",
    rolePeriods: [{ role: "Co-Principal Investigator", dates: "Since May 2022" }],
    location: "Nepal",
    institutions: ["Environmental Health Sciences, UC Berkeley (grantee)"],
    funding: [
      { source: "UC Berkeley Food Institute Grant", total: "$49,115 total project cost" },
    ],
    summary:
      "Investigates barriers that influence the safe and effective use of domestic biogas systems in Nepal.",
    topics: ["Clean Cooking & Energy", "Child Health"],
  },
  {
    id: "R03",
    slug: "air-pollution-school-children",
    displayTitle: "Air pollution and school-aged children's health",
    fullTitle:
      "Air Pollution, Respiratory Symptoms, and Cognitive Abilities in School-aged Children Residing in Two Rural Municipalities of Nepal with High and Low Industrial Presence (Pilot Study)",
    displayDates: "Began March 1, 2023",
    ongoingNote: "Reported ongoing in July 2025",
    rolePeriods: [{ role: "Project Lead / Principal Investigator", dates: "Since March 2023" }],
    location: "Two rural municipalities, Nepal",
    institutions: ["LEADERS Nepal (grantee)"],
    funding: [
      { source: "Friends Foundation International, Berkeley", total: "$11,000 total project cost" },
    ],
    summary:
      "A pilot study examining air pollution, respiratory symptoms, and cognitive abilities among children in municipalities with different levels of industrial presence.",
    topics: ["Air Pollution", "Child Health"],
  },
  {
    id: "R04",
    slug: "clean-cooking-urban-nepal",
    displayTitle: "Health benefits of clean cooking in urban Nepal",
    fullTitle: "Maximizing the Health Benefits of Clean Cooking (electricity & gas) in Urban Nepal",
    displayDates: "2017 – 2020",
    datesNote:
      "The CV's exact end-date notation is ambiguous; no precise end day is inferred here.",
    rolePeriods: [{ role: "Project Lead / Principal Investigator", dates: "2017 – 2020" }],
    location: "Urban Nepal",
    design: "Longitudinal environmental epidemiology with an impact evaluation component.",
    institutions: [
      "Schatz Energy Research Center, Humboldt State University, California (grantee)",
      "LEADERS Nepal (grantee)",
    ],
    funding: [
      {
        source: "United Nations Foundation / Clean Cooking Alliance",
        grant: "UNF-18-997",
        total: "$598,845 total project cost",
      },
    ],
    summary:
      "Evaluates adoption and health-related implications of cleaner cooking using electricity and gas in Nepal.",
    relatedOutputs: [
      "Moving Toward Cleaner Cooking in Nepal report (2020)",
      "Four Clean Cooking Alliance policy briefs (2021)",
    ],
    topics: ["Clean Cooking & Energy", "Air Pollution"],
  },
  {
    id: "R05",
    slug: "biogas-program-child-respiratory-infection",
    displayTitle: "National biogas program and childhood respiratory infection",
    fullTitle:
      "Investigation of the Effectiveness of National Clean Cookstove (Biogas) Program in Nepal in Reducing Acute Respiratory Tract Infection in Children Aged Five and Younger",
    displayDates: "2014 – 2017",
    rolePeriods: [{ role: "Advisor and Co-Investigator", dates: "2014 – 2017" }],
    location: "Nepal",
    design: "Longitudinal environmental epidemiology with exposure assessment.",
    institutions: [
      "National TB Center (Verma, PI)",
      "UC Berkeley School of Public Health, Environmental Health Sciences (Kirk R. Smith, adviser)",
    ],
    funding: [
      {
        source:
          "PEER Health Program, identified in the CV with the National Academy of Sciences, NIH, and USAID",
        total: "$450,000 total project cost",
      },
    ],
    summary:
      "Evaluates the effectiveness of household biogas interventions in relation to childhood respiratory illness.",
    topics: ["Clean Cooking & Energy", "Child Health", "Air Pollution"],
  },
  {
    id: "R06",
    slug: "black-carbon-biogas-stoves",
    displayTitle: "Black carbon and biogas stove emissions",
    fullTitle: "Black Carbon Measurements and Climate Impacts from Biogas Stoves in Nepal",
    displayDates: "2017 – 2019",
    rolePeriods: [{ role: "Co-Principal Investigator", dates: "2017 – 2019" }],
    location: "Nepal",
    institutions: [
      "Mountain Air Engineering",
      "Civil and Environmental Engineering, University of Illinois Urbana-Champaign",
    ],
    funding: [
      {
        source:
          "Clean Cooking Alliance and Climate and Clean Air Coalition; the CV additionally identifies UNPOS",
        grant: "RFP_93002_2017_01_BOC",
        total: "$95,000 total project cost",
      },
    ],
    summary:
      "Measures emissions from biogas stoves to examine their implications for air quality and climate.",
    relatedOutputs: ["In-field emission measurements from biogas and LPG stoves (2019)"],
    topics: ["Clean Cooking & Energy", "Air Pollution", "Monitoring & Data"],
  },
  {
    id: "R07",
    slug: "lead-household-dust-children",
    displayTitle: "Lead in household dust and childhood exposure",
    fullTitle:
      "Investigation of Lead (Pb) Presence in Household Dust and Evaluation of Lead Poisoning in Children in Nepal",
    displayDates: "2014 – 2017",
    rolePeriods: [{ role: "Project Lead / Principal Investigator", dates: "2014 – 2017" }],
    location: "Nepal",
    institutions: ["OK International, San Francisco", "LEADERS Nepal"],
    funding: [
      {
        source: "United Nations Environment Programme Quick Start Programme",
        grant: "X.23.C.LED",
        total: "$199,260 total project cost",
      },
    ],
    summary:
      "Investigates lead contamination in household dust and lead exposure among children in Nepal.",
    topics: ["Lead & Toxic Exposures", "Child Health"],
  },
  {
    id: "R08-R09",
    slug: "household-fuel-tuberculosis",
    displayTitle: "Household fuel use and tuberculosis",
    fullTitle: "Investigation of Indoor Solid Fuel and Kerosene Use as Tuberculosis Risk Factors",
    displayDates: "2011 – 2015",
    rolePeriods: [
      { role: "Associate Project Scientist", dates: "January 2014 – June 2015" },
      { role: "Associate Specialist III", dates: "January 2011 – December 2013" },
    ],
    location: "Central Nepal",
    design: "Community-based case-control study.",
    institutions: ["UC Berkeley School of Public Health"],
    funding: [
      {
        source: "National Institute of Environmental Health Sciences",
        grant: "R01-ES019624-01A1",
      },
    ],
    summary:
      "A community-based case-control study of indoor solid fuel and kerosene use as risk factors for tuberculosis. Two dated role periods within one study and grant.",
    topics: ["Infectious Disease", "Air Pollution", "Clean Cooking & Energy"],
  },
  {
    id: "R10",
    slug: "household-smoke-pneumonia-children",
    displayTitle: "Household smoke and pneumonia in young children",
    fullTitle:
      "Exposure to Biomass and Kerosene Fuel Smoke and Risk of Pneumonia in Children Under 5 Years of Age",
    displayDates: "2007 – 2010",
    rolePeriods: [{ role: "Graduate Student Researcher", dates: "2007 – 2010" }],
    institutions: ["UC Berkeley, Environmental Health Sciences"],
    funding: [
      { source: "European Commission, EU-INCO-DC", grant: "INCO-FP6-003740" },
      { source: "Danish Council of Developmental Research", grant: "Project 91128" },
      { source: "Research Council of Norway", grant: "Projects 151054 and 172226" },
    ],
    summary:
      "Examines exposure to biomass and kerosene fuel smoke in relation to the risk of pneumonia among children under five.",
    topics: ["Child Health", "Infectious Disease", "Air Pollution"],
  },
  {
    id: "R11",
    slug: "indoor-air-pollution-tb-cataracts",
    displayTitle: "Household air pollution, tuberculosis, and cataracts",
    fullTitle:
      "Exposure to Indoor Air Pollution and Risk of Tuberculosis and Cataracts in Women in Nepal and India",
    displayDates: "2001 – 2006",
    rolePeriods: [{ role: "Graduate Student Researcher", dates: "2001 – 2006" }],
    location: "Nepal and India",
    institutions: ["UC Berkeley, Environmental Health Sciences"],
    funding: [
      { source: "New Aid Foundation" },
      {
        source:
          "Fogarty International Training and Research in Environmental and Occupational Health Program",
      },
    ],
    summary:
      "Examines indoor air pollution exposure in relation to the risk of tuberculosis and cataracts among women in Nepal and India.",
    topics: ["Air Pollution", "Infectious Disease", "Clean Cooking & Energy"],
  },
];

export const methodsNote = {
  heading: "Methods and emerging applications",
  intro:
    "These are areas of expertise and manuscript topics, not evidence of additional funded projects or completed technology deployments.",
  items: [
    "Exposure monitoring for household and ambient air pollution",
    "GIS and spatial analysis using R",
    "Statistical modeling of exposure–response relationships",
    "Machine learning applications for environmental and public health data",
    "IoT-based household energy monitoring",
    "Assessment of existing Wi-Fi networks for health applications",
  ],
};

export function getProjectBySlug(slug: string) {
  return researchProjects.find((p) => p.slug === slug);
}
