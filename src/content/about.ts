export const biography = [
  "I am an environmental health scientist and educator whose work connects environmental exposures, household energy, and population health. My research spans indoor and outdoor air pollution, clean cooking, respiratory and eye health, childhood lead exposure, and the ways environmental risks affect communities in Nepal.",
  "At the University of California, Berkeley School of Public Health, I teach environmental health, exposure assessment, and GIS for public health using R. My professional experience includes field research, grant development, project leadership, data analysis, policy communication, and mentoring students across public health and environmental science programs.",
  "I earned my PhD and MS in Environmental Health Sciences at UC Berkeley. Alongside academic work, I have collaborated with researchers and organizations including LEADERS Nepal on studies of cleaner household energy and environmental health.",
];

export type EducationRecord = {
  id: string;
  degree: string;
  institution: string;
  year: string;
  detail: string;
};

export const education: EducationRecord[] = [
  {
    id: "edu-phd",
    degree: "PhD, Environmental Health Sciences",
    institution: "University of California, Berkeley",
    year: "2010",
    detail:
      "Dissertation on preclinical eye damage / lens opacity, tuberculosis, and indicators of indoor air pollution exposure from biomass smoke.",
  },
  {
    id: "edu-ms",
    degree: "MS, Environmental Health Sciences",
    institution: "University of California, Berkeley",
    year: "2004",
    detail:
      "Thesis: “Exposure to Smoke from Household Cooking Fuel and Risk of Cataract Formation in Women: A Case-Control Study.”",
  },
];

export type Appointment = {
  id: string;
  institution: string;
  role: string;
  dates: string;
  note?: string;
  statusAsOf?: string;
};

export const appointments: Appointment[] = [
  {
    id: "ap-berkeley-teaching",
    institution: "UC Berkeley School of Public Health",
    role: "Teaching faculty, on-campus / online MPH program",
    dates: "Since 2016",
    note: "Current public directory title: Continuing Lecturer. Additional teaching assignments began in 2023 and 2025.",
    statusAsOf: "2025-07-18",
  },
  {
    id: "ap-ucdavis",
    institution: "UC Davis, Department of Public Health Sciences",
    role: "Volunteer Clinical Faculty (CV qualifier: “Associate Professor Equivalent”)",
    dates: "Since 2023",
    statusAsOf: "2025-07-18",
  },
  {
    id: "ap-nou",
    institution: "Nepal Open University, Science, Health, and Technology Faculty",
    role: "Subject Matter Expert and Visiting Faculty",
    dates: "Since 2019",
    statusAsOf: "2025-07-18",
  },
  {
    id: "ap-aps",
    institution: "UC Berkeley School of Public Health",
    role: "Associate Project Scientist, tuberculosis and household fuel study",
    dates: "January 2014 – June 2015",
  },
  {
    id: "ap-as3",
    institution: "UC Berkeley School of Public Health",
    role: "Associate Specialist III, same study",
    dates: "January 2011 – December 2013",
  },
  {
    id: "ap-gsi-co",
    institution: "UC Berkeley School of Public Health",
    role: "Graduate Student Instructor / Co-Instructor",
    dates: "2008 – 2009",
  },
  {
    id: "ap-gsi",
    institution: "UC Berkeley School of Public Health",
    role: "Graduate Student Instructor",
    dates: "2007 – 2008",
  },
  {
    id: "ap-gsr",
    institution: "UC Berkeley, Environmental Health Sciences",
    role: "Graduate Student Researcher",
    dates: "2007 – 2010 and 2001 – 2006",
    note: "Projects detailed on the Research page.",
  },
  {
    id: "ap-worldbank",
    institution: "World Bank, Climate Policy and Finance",
    role: "Short-Term Consultant, health benefits of stove/fuel interventions in Peru and Nepal",
    dates: "August – October 2013",
  },
];

export const appointmentsNote =
  "Appointment dates are based on the July 2025 CV; Berkeley's directory provides the current Berkeley title.";

export const expertise = [
  {
    id: "ex-envhealth",
    group: "Environmental health",
    items: [
      "Indoor and outdoor air pollution monitoring",
      "Exposure assessment",
      "Health risk and hazard assessment",
      "Environmental epidemiology",
      "Household energy, climate, and health",
      "Impact evaluation",
    ],
  },
  {
    id: "ex-data",
    group: "Data and analytical methods",
    items: [
      "R, Stata, Excel",
      "GIS using R",
      "Biostatistics and modeling",
      "Machine learning applications in environmental and public health data",
    ],
  },
  {
    id: "ex-monitoring",
    group: "Monitoring technologies",
    items: [
      "IoT-based household energy monitoring",
      "Assessment of existing Wi-Fi networks for telehealth and remote monitoring applications",
    ],
  },
  {
    id: "ex-leadership",
    group: "Research leadership",
    items: [
      "Research design and proposal development",
      "Grant writing",
      "Field implementation, recruitment, training, and supervision",
      "Budgeting and expense management",
    ],
  },
  {
    id: "ex-teaching",
    group: "Teaching and communication",
    items: [
      "Graduate instruction",
      "Undergraduate and graduate mentoring",
      "Scientific presentations and peer-reviewed writing",
      "Policy briefs and public speaking",
    ],
  },
];

export const fellowships = [
  {
    id: "fs-2010",
    years: "2010 and 2008",
    text: "University Fellowship for Graduate Study in Public Health, UC Berkeley.",
  },
  {
    id: "fs-2007",
    years: "2007",
    text: "New Aid Foundation support for the Nepal tuberculosis and household fuel case-control study.",
  },
  {
    id: "fs-2006",
    years: "2006",
    text: "Dr. Edmund Preston III and Elizabeth J. Preston Scholarships, UC Berkeley.",
  },
  {
    id: "fs-2005",
    years: "2005",
    text: "Dr. William Stiles Fellowship in Public Health, UC Berkeley.",
  },
  {
    id: "fs-2002b",
    years: "2002 – 2004",
    text: "Fogarty International Training and Research in Environmental and Occupational Health Program, UC Berkeley.",
  },
  {
    id: "fs-2002",
    years: "2002",
    text: "Center for Occupational and Environmental Health, Berkeley/Davis/San Francisco — support for the cooking-smoke and cataract study in Nepal and India.",
  },
];

export const service = [
  "Application reviewer, UC Berkeley on-campus / online MPH program.",
  "Subject Matter Expert, Master's in Environmental and Occupational Health program, Nepal Open University.",
  "Review Editor, Frontiers in Environmental Engineering, Air Pollution Management.",
  "Expert Reviewer, SAARC Journal of Tuberculosis, Lung Diseases and HIV/AIDS.",
];
