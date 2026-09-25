export const leaders = {
  name: "LEADERS Nepal",
  expandedName: "Society for Legal and Environmental Analysis and Development Research",
  intro:
    "LEADERS Nepal is a Nepal-based nonprofit working across environmental health, human rights, livelihoods, and community development. Its work combines research, training, public awareness, and collaboration with universities and other organizations to address practical environmental and social challenges.",
  email: "info@leadersnepal.org.np",
  links: [
    { label: "Official website", url: "https://leadersnepal.org.np/" },
    { label: "Members and networks", url: "https://leadersnepal.org.np/member/" },
    { label: "About", url: "https://leadersnepal.org.np/about-us/" },
    { label: "Project listing", url: "https://leadersnepal.org.np/category/ongoing-projects/" },
    { label: "Past work", url: "https://leadersnepal.org.np/category/past-projects/" },
  ],
};

export const workAreas = [
  {
    id: "wa-envhealth",
    title: "Environmental health and pollution",
    text: "Air-quality monitoring, exposure assessment, and work on lead hazards and environmental policy.",
  },
  {
    id: "wa-energy",
    title: "Clean energy and climate",
    text: "Household cooking fuels, biogas, cleaner energy adoption, and the environmental implications of energy use.",
  },
  {
    id: "wa-water",
    title: "Water and sanitation",
    text: "Arsenic testing and mitigation, safer drinking water, sanitation, and hygiene education.",
  },
  {
    id: "wa-rights",
    title: "Human rights and livelihoods",
    text: "Community awareness and work addressing social and livelihood concerns.",
  },
  {
    id: "wa-resilience",
    title: "Local risk and resilience",
    text: "Community-oriented responses to environmental risks and disaster recovery.",
  },
];

export const myCollaboration = [
  {
    id: "col-r03",
    text: "Principal Investigator / Project Lead for the school-aged children's air-pollution, respiratory-symptom, and cognitive-ability pilot, initiated in 2023; LEADERS Nepal is the CV-listed grantee.",
    projectSlug: "air-pollution-school-children",
  },
  {
    id: "col-r04",
    text: "Principal Investigator / Project Lead for the 2017–2020 clean-cooking project with LEADERS Nepal and Schatz Energy Research Center.",
    projectSlug: "clean-cooking-urban-nepal",
  },
  {
    id: "col-r07",
    text: "Principal Investigator / Project Lead for the 2014–2017 household dust and childhood lead-exposure project involving LEADERS Nepal and OK International.",
    projectSlug: "lead-household-dust-children",
  },
  {
    id: "col-bear",
    text: "International coordination responsibilities described in the historical Kavre BEAR earthquake-recovery project page, including fundraising, disbursement, and accounting. This is a documented past responsibility, not a current executive title.",
  },
];

export const documentedWork = [
  {
    id: "dw-1",
    title: "Community-wide clean cooking in Panchkhal and Mandandeupur",
    text: "Work on cleaner fuel adoption and household/community air quality, including barriers to sustained use.",
    url: "https://leadersnepal.org.np/community-wide-behavior-change-and-clean-fuel-interventions/",
  },
  {
    id: "dw-2",
    title: "PEER Health research",
    text: "Research on household cooking technologies, exposure, and respiratory illness among young children in Kavre.",
    url: "https://leadersnepal.org.np/peer-health-project/",
  },
  {
    id: "dw-3",
    title: "Lead exposure and prevention",
    text: "Research and awareness work addressing lead hazards, including lead paint and childhood exposure.",
    url: "https://leadersnepal.org.np/environment-3/",
  },
  {
    id: "dw-4",
    title: "Arsenic and safe drinking water",
    text: "Water testing, mitigation, and community education documented by LEADERS Nepal.",
    url: "https://leadersnepal.org.np/water-and-sanitation-2/",
  },
  {
    id: "dw-5",
    title: "Kavre BEAR earthquake recovery",
    text: "Historical support associated with recovery after the 2015 earthquake and household biogas systems.",
    url: "https://leadersnepal.org.np/kavre-bear-biogas-earthquake-assistance-and-recovery-project/",
  },
  {
    id: "dw-6",
    title: "Air pollution and acid-rain monitoring",
    text: "Monitoring and public reporting initiated in 1997, as documented in the organization's project archive.",
    url: "https://leadersnepal.org.np/air-pollution-and-acid-rain-monitoring-1997-clean-air-campaign/",
  },
];

export type UpcomingProject = {
  id: string;
  title: string;
  summary: string;
  location?: string;
  anticipatedStart?: string;
  status?: string;
  partners?: string[];
  myRole?: string;
  sourceUrl?: string;
  dateConfirmed?: string;
};

export const upcomingProjects: UpcomingProject[] = [];

export const upcomingEmptyState = "Details of forthcoming projects will be shared here.";
