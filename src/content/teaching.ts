export const teachingIntro =
  "I teach environmental health, exposure assessment, and spatial analysis for public health, and mentor students working across environmental science and population health.";

export type Course = {
  id: string;
  code: string;
  title: string;
  cvTitle?: string;
  institution: string;
  dates: string;
  role: string;
  description: string;
};

export const courses: Course[] = [
  {
    id: "phw200f",
    code: "PHW 200F",
    title: "Introduction to Environmental Health Sciences",
    cvTitle: "Introduction to Environmental Health",
    institution: "UC Berkeley School of Public Health, on-campus / online MPH",
    dates: "Began 2016",
    role: "Teaching faculty; instructor of record",
    description:
      "A graduate introduction to environmental determinants of health and the systems that shape exposure.",
  },
  {
    id: "phw270a",
    code: "PHW 270A",
    title: "Exposure Assessment and Control",
    institution: "UC Berkeley School of Public Health",
    dates: "Began 2025",
    role: "Teaching faculty",
    description:
      "Methods for characterizing and controlling exposures to environmental and occupational hazards.",
  },
  {
    id: "phw272a",
    code: "PHW 272A",
    title: "Introduction to GIS for Public Health Using R",
    institution: "UC Berkeley School of Public Health, on-campus / online MPH",
    dates: "Began 2023",
    role: "Teaching faculty; instructor of record",
    description: "Spatial data and geographic analysis for public health questions, taught in R.",
  },
  {
    id: "ph198",
    code: "PH 198 (026)",
    title:
      "Indoors or Outdoors? Air Pollution Sampling Techniques and the Impact on Human Health",
    institution: "UC Berkeley School of Public Health",
    dates: "2008 – 2009",
    role: "Graduate Student Instructor / Co-Instructor",
    description:
      "An undergraduate seminar on air pollution sampling techniques and their relationship to human health.",
  },
  {
    id: "ph150b",
    code: "PH 150b",
    title: "Introduction to Environmental Health Sciences",
    institution: "UC Berkeley School of Public Health",
    dates: "2007 – 2008",
    role: "Graduate Student Instructor",
    description: "An undergraduate survey of environmental health sciences.",
  },
];

export const coursesNote =
  "Berkeley's current directory lists PHW 200F as “Introduction to Environmental Health Sciences”; the July 2025 CV uses “Introduction to Environmental Health.”";

export const mentoringPeriod = "2016 – 2024";

export const mentoring = [
  "UC Berkeley on-campus / online MPH students",
  "UC Berkeley undergraduate students in Environmental Science, Policy, and Management",
  "UC Berkeley PhD students in Environmental Science / Public Health, as described in the CV",
  "Nepal Open University MS students in Environmental and Occupational Health",
  "UC Davis MPH students",
  "University of Maryland, College Park, MPH students",
  "UC Santa Barbara Environmental Science undergraduate mentoring",
  "Graduate and undergraduate participants in the International Switch Energy Case Competition",
];

export type Presentation = {
  id: string;
  year: string;
  title: string;
  venue: string;
  detail?: string;
  note?: string;
};

export const presentations: Presentation[] = [
  {
    id: "pres-2024",
    year: "2024",
    title:
      "Animal waste management and antibiotic-resistant E. coli in subsistence farming households of rural Nepal",
    venue:
      "36th Annual Conference of the International Society for Environmental Epidemiology, August 25–28, Santiago, Chile",
    detail: "Coauthored abstract",
  },
  {
    id: "pres-2023",
    year: "2023",
    title:
      "Animal ownership and waste management strategy “coverage” in communities and associations with human health",
    venue: "UNC Water and Health Conference, October 23–27, Chapel Hill, North Carolina",
    detail: "Coauthored contribution",
  },
  {
    id: "pres-2022",
    year: "2022",
    title:
      "Biodigester cookstove interventions and child diarrhea in semirural Nepal: a mixed methods approach to characterizing fecal exposure pathways",
    venue: "UNC Water and Health Conference, October 24–28, Chapel Hill",
    detail: "Coauthored contribution",
  },
  {
    id: "pres-2018",
    year: "2018",
    title:
      "Maximizing the health benefits of clean household energy in urban Nepal: replacing traditional biomass cookstoves with gas and electricity-based cooking",
    venue:
      "Electric Power Research Institute workshop on Advanced Energy Communities & Smart Thermostats and Customer Connected Devices, July 10–13, Palo Alto, California",
  },
  {
    id: "pres-2015",
    year: "2015",
    title:
      "PM2.5 exposure-response relationship with child pneumonia in Bhaktapur, Nepal: the importance of fuel type",
    venue: "27th ISEE Annual Conference, August 30 – September 3, São Paulo, Brazil",
    note: "The CV also includes a 2013 citation year; the event year is used for placement.",
  },
  {
    id: "pres-2012",
    year: "2012",
    title: "Childhood acute lower respiratory infection and household fuel use in Bhaktapur, Nepal",
    venue: "24th ISEE Annual Conference, August 26–30, Columbia, South Carolina",
    note: "The CV includes a 2013 citation year, distinct from the event year.",
  },
  {
    id: "pres-2010a",
    year: "2010",
    title: "Pre-clinical measures of eye damage / lens opacity from biomass smoke in Nepalese women",
    venue: "Global Health & Innovation Conference, Yale University, New Haven, April 17–18",
    detail: "Poster presentation",
  },
  {
    id: "pres-2010b",
    year: "2010",
    title: "Tuberculosis and indoor biomass and kerosene use in Nepal: a case-control study",
    venue: "ETHOS conference, Kirkland, Washington, January 29–31",
    detail: "Oral presentation",
    note: "An inconsistent venue wording in the CV is omitted pending confirmation.",
  },
  {
    id: "pres-2009",
    year: "2009",
    title:
      "Kerosene and biomass fuels may be risk factors for pulmonary tuberculosis in developing countries",
    venue: "21st ISEE Annual Conference, Dublin, August 25–29",
    detail: "Oral presentation; abstract in Epidemiology 20(6), S32",
  },
  {
    id: "pres-2006",
    year: "2006",
    title:
      "Investigation of pre-clinical lens damage or opacity from biomass and tobacco smoke exposure in Nepalese women",
    venue: "First Annual Himalayan Policy Research Conference, Madison, Wisconsin, October 19",
    detail: "Oral presentation",
  },
  {
    id: "pres-2004",
    year: "2004",
    title: "South Asian multi-center study of indoor air pollution and tuberculosis: design and protocols",
    venue: "Better Air Quality Seminar, Agra, India",
    detail: "Coauthored poster presentation",
  },
];

export const presentationsNote =
  "A coauthored conference contribution does not establish that I personally presented it.";
