export type PublicationCategory =
  | "Research Articles"
  | "Conference Papers"
  | "Policy & Reports"
  | "Manuscript Archive";

export const publicationCategories: PublicationCategory[] = [
  "Research Articles",
  "Conference Papers",
  "Policy & Reports",
  "Manuscript Archive",
];

export type Publication = {
  id: string;
  category: PublicationCategory;
  year: number | null;
  sortYear: number;
  title: string;
  authors: string;
  venue: string;
  detail?: string;
  url?: string;
  urlLabel?: string;
  status?: string;
  note?: string;
  topics: string[];
};

export const publications: Publication[] = [
  {
    id: "P01",
    category: "Research Articles",
    year: 2023,
    sortYear: 2023,
    title:
      "Characteristics of fine particles from incense burning at temple premises of Kathmandu Valley, Nepal",
    authors: "Maskey S et al., including Pokhrel AK",
    venue: "Environmental Monitoring and Assessment, 195, 1382",
    url: "https://doi.org/10.1007/s10661-023-11918-y",
    topics: ["Air Pollution"],
  },
  {
    id: "P02",
    category: "Research Articles",
    year: 2023,
    sortYear: 2023,
    title:
      "Analysis of surface level PM2.5 measured by low-cost sensor and satellite-based column aerosol optical depth (AOD) over Kathmandu",
    authors: "Regmi J et al., including Pokhrel AK",
    venue: "Aerosol and Air Quality Research, 23(1)",
    url: "https://doi.org/10.4209/aaqr.220311",
    topics: ["Air Pollution", "Monitoring & Data"],
  },
  {
    id: "P03",
    category: "Research Articles",
    year: 2022,
    sortYear: 2022,
    title: "Biodigester cookstove interventions and child diarrhea in semi-rural Nepal",
    authors: "Amato HK et al., including Pokhrel AK",
    venue: "Environmental Health Perspectives, 130(1), 017002",
    url: "https://doi.org/10.1289/EHP9468",
    topics: ["Clean Cooking & Energy", "Child Health"],
  },
  {
    id: "P04",
    category: "Research Articles",
    year: 2022,
    sortYear: 2022,
    title:
      "Prevalence and determinants of hypertension in underrepresented indigenous populations of Nepal",
    authors: "Denekew TW et al., including Pokhrel AK",
    venue: "PLOS Global Public Health, 2(2), e0000133",
    url: "https://doi.org/10.1371/journal.pgph.0000133",
    topics: ["Population Health"],
  },
  {
    id: "P05",
    category: "Research Articles",
    year: 2021,
    sortYear: 2021,
    title: "Technical Assessment of Installed Domestic Biogas Plants in Kavre, Nepal",
    authors: "Lohani SP, Pokhrel D, Bhattarai S, Pokhrel AK",
    venue: "Renewable Energy, 181, 1250–1257",
    url: "https://doi.org/10.1016/j.renene.2021.09.092",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "P06",
    category: "Research Articles",
    year: 2021,
    sortYear: 2021,
    title:
      "Ambient PM2.5 and Daily Hospital Admissions for Acute Respiratory Infections: Effect Modification by Weight Status of Child",
    authors: "Nishikawa H et al., including Pokhrel AK",
    venue: "Atmosphere, 12, 1009",
    url: "https://doi.org/10.3390/atmos12081009",
    topics: ["Air Pollution", "Child Health"],
  },
  {
    id: "P07",
    category: "Research Articles",
    year: 2020,
    sortYear: 2020,
    title: "Investigation of aerosol climatology and long-range transport of aerosols over Pokhara, Nepal",
    authors: "Regmi J et al., including Pokhrel AK",
    venue: "Atmosphere, 11(8), 874",
    url: "https://doi.org/10.3390/atmos11080874",
    topics: ["Air Pollution"],
  },
  {
    id: "P08",
    category: "Research Articles",
    year: 2020,
    sortYear: 2020,
    title:
      "A Hierarchical model for estimating the exposure-response curve by combining multiple studies of acute lower respiratory infections in children and household fine particulate matter air pollution",
    authors: "Keller JP, Katz J, Pokhrel AK, Bates MN, Tielsch J, Zeger SL",
    venue: "Environmental Epidemiology",
    note: "No DOI supplied in the CV.",
    topics: ["Air Pollution", "Child Health"],
  },
  {
    id: "P09",
    category: "Research Articles",
    year: 2019,
    sortYear: 2019,
    title: "Infield emission measurements from biogas and liquid petroleum gas (LPG) stoves",
    authors: "Weyant CL et al., including Pokhrel AK",
    venue: "Atmosphere, 10(12), 729",
    url: "https://doi.org/10.3390/atmos10120729",
    topics: ["Clean Cooking & Energy", "Air Pollution"],
  },
  {
    id: "P10",
    category: "Research Articles",
    year: 2020,
    sortYear: 2020,
    title:
      "Epidemiological trend of COVID-19 in Nepal and the importance of social distancing to contain the virus",
    authors: "Pokhrel AK, Joshi YP, Bhattarai S",
    venue: "Applied Science and Technology Annals, June 2020",
    note: "No DOI supplied.",
    topics: ["Infectious Disease"],
  },
  {
    id: "P11",
    category: "Conference Papers",
    year: 2020,
    sortYear: 2020,
    title: "Instrumentation for Cooking Pattern Analysis in Peri-Urban Nepal",
    authors: "Yin S, Pokhrel AK, Heydariaan M, Gnawali O, Thapa LBR, Regmi S, Pokhrel D",
    venue:
      "IEEE International Conference on Distributed Computing in Sensor Systems (DCOSS), May 25–27, Los Angeles",
    url: "https://www2.cs.uh.edu/~gnawali/papers/cooking-dcoss20.pdf",
    urlLabel: "Author-hosted manuscript",
    topics: ["Monitoring & Data", "Clean Cooking & Energy"],
  },
  {
    id: "P12",
    category: "Research Articles",
    year: 2019,
    sortYear: 2019,
    title: "Household fuel use and pulmonary tuberculosis in central Nepal: a case-control study",
    authors: "Bates MN, Pope K, Sijali TR, Pokhrel AK, Pillarisetti A, Lam N, Verma SC",
    venue: "Environmental Research, 168, 193–205",
    note: "No DOI supplied.",
    topics: ["Infectious Disease", "Clean Cooking & Energy"],
  },
  {
    id: "P13",
    category: "Research Articles",
    year: 2018,
    sortYear: 2018,
    title:
      "Exposure-response relationship between PM2.5 and child acute lower respiratory infection in Bhaktapur, Nepal: the importance of fuel type",
    authors: "Bates MN et al., including Pokhrel AK",
    venue: "Environmental Research, 161, 546–553",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29241064",
    urlLabel: "PubMed record",
    topics: ["Air Pollution", "Child Health"],
  },
  {
    id: "P14",
    category: "Research Articles",
    year: 2015,
    sortYear: 2015,
    title: "PM2.5 in household kitchens of Bhaktapur, Nepal, using four different cooking fuels",
    authors: "Pokhrel AK et al.",
    venue: "Atmospheric Environment, 113",
    note: "The CV's page range is truncated and is omitted until verified.",
    topics: ["Air Pollution", "Clean Cooking & Energy"],
  },
  {
    id: "P15",
    category: "Research Articles",
    year: 2014,
    sortYear: 2014,
    title: "Lead in new paints in Nepal",
    authors: "Gottesfeld P, Pokhrel D, Pokhrel AK",
    venue: "Environmental Research, 132, 70–75",
    topics: ["Lead & Toxic Exposures"],
  },
  {
    id: "P16",
    category: "Research Articles",
    year: 2013,
    sortYear: 2013,
    title: "Acute lower respiratory infection in childhood and household fuel use in Bhaktapur, Nepal",
    authors: "Bates MN et al., including Pokhrel AK",
    venue: "Environmental Health Perspectives, 121(5), 637–642",
    topics: ["Air Pollution", "Child Health"],
  },
  {
    id: "P17",
    category: "Research Articles",
    year: 2013,
    sortYear: 2013,
    title: "Biomass stoves and lens opacity and cataract in Nepalese women",
    authors: "Pokhrel AK, Bates MN, Shrestha SP, Bailey IL, DiMartino RB, Smith KR",
    venue: "Optometry and Vision Science, 90(3), 257–268",
    url: "https://doi.org/10.1097/OPX.0b013e3182820d60",
    topics: ["Air Pollution", "Clean Cooking & Energy"],
  },
  {
    id: "P18",
    category: "Research Articles",
    year: 2012,
    sortYear: 2012,
    title: "Prevalence of Pulmonary Tuberculosis among HIV-infected persons in Pokhara, Nepal",
    authors: "Verma SC, Dhungana GP, Joshi HS, Kunwar HB, Pokhrel AK",
    venue: "Journal of Nepal Health Research Council, 10(20), 32–36",
    topics: ["Infectious Disease"],
  },
  {
    id: "P19",
    category: "Research Articles",
    year: 2011,
    sortYear: 2011,
    title:
      "Review: Lead exposure in battery manufacturing and recycling in developing countries and among children in nearby communities",
    authors: "Gottesfeld P, Pokhrel AK",
    venue: "Journal of Occupational and Environmental Hygiene, 8(9), 520–532",
    topics: ["Lead & Toxic Exposures", "Child Health"],
  },
  {
    id: "P20",
    category: "Research Articles",
    year: 2010,
    sortYear: 2010,
    title: "Tuberculosis and indoor biomass and kerosene use in Nepal: a case-control study",
    authors: "Pokhrel AK, Bates MN, Verma SC, Joshi HS, Sreeramareddy CT, Smith KR",
    venue: "Environmental Health Perspectives, 118(4), 558–564",
    url: "https://pubmed.ncbi.nlm.nih.gov/20368124/",
    urlLabel: "PubMed record",
    topics: ["Infectious Disease", "Air Pollution"],
  },
  {
    id: "P21",
    category: "Research Articles",
    year: 2010,
    sortYear: 2010,
    title: "Prevalence of pulmonary tuberculosis among HIV-infected drug users in Pokhara, Kaski, Nepal",
    authors: "Verma SC, Dhungana GP, Joshi HS, Kunwar HB, Jha RK, Pokhrel AK",
    venue: "SAARC Journal of Tuberculosis, Lung Diseases and HIV/AIDS, VII(2), 19–25",
    topics: ["Infectious Disease"],
  },
  {
    id: "P22",
    category: "Research Articles",
    year: 2005,
    sortYear: 2005,
    title: "Case-control study of indoor cooking smoke exposure and cataract in Nepal and India",
    authors: "Pokhrel AK, Smith KR, Khalakdina A, Deuja A, Bates MN",
    venue: "International Journal of Epidemiology, 34, 702–708",
    url: "https://pubmed.ncbi.nlm.nih.gov/15737974/",
    urlLabel: "PubMed record",
    topics: ["Air Pollution", "Clean Cooking & Energy"],
  },

  // Policy briefs and technical reports
  {
    id: "B01",
    category: "Policy & Reports",
    year: 2021,
    sortYear: 2021,
    title:
      "Collaborating with Female Community Health Volunteers in Support of Clean Cooking Programs in Nepal",
    authors: "Contribution",
    venue: "Clean Cooking Alliance, September 2021",
    url: "https://cleancooking.org/wp-content/uploads/2021/08/CCA-FCHV-Nepal.pdf",
    urlLabel: "Read brief (PDF)",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "B02",
    category: "Policy & Reports",
    year: 2021,
    sortYear: 2021,
    title: "Increasing the Potential for Biogas to Satisfy Household Cooking Needs in Nepal",
    authors: "Contribution",
    venue: "Clean Cooking Alliance, September 2021",
    url: "https://cleancooking.org/wp-content/uploads/2021/05/CCA-Biogas-Nepal.pdf",
    urlLabel: "Read brief (PDF)",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "B03",
    category: "Policy & Reports",
    year: 2021,
    sortYear: 2021,
    title:
      "Electric Cooking in Peri-Urban Nepal: Part 1 — Impacts of Clean Cookstove Adoption on Household Energy Use",
    authors: "Contribution",
    venue: "Clean Cooking Alliance, May 2021",
    url: "https://cleancooking.org/reports-and-tools/electric-cooking-in-peri-urban-nepal-part-1-impacts-of-clean-cookstove-adoption-on-household-energy-use/",
    urlLabel: "Read brief",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "B04",
    category: "Policy & Reports",
    year: 2021,
    sortYear: 2021,
    title:
      "Electric Cooking in Peri-Urban Nepal: Part 2 — Energy Access Needs for Clean Cookstove Adoption",
    authors: "Contribution",
    venue: "Clean Cooking Alliance, May 2021",
    url: "https://cleancooking.org/reports-and-tools/electric-cooking-in-peri-urban-nepal-part-2nenergy-access-needs-for-clean-cookstove-adoption/",
    urlLabel: "Read brief",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "B05",
    category: "Policy & Reports",
    year: 2020,
    sortYear: 2020,
    title: "Moving Toward Cleaner Cooking in Nepal: Results from a Two-Year Research Project",
    authors: "Contribution",
    venue: "Clean Cooking Alliance, November 2020",
    url: "https://cleancooking.org/news/nepal-health-demonstration-project-policy-briefs/",
    urlLabel: "Clean Cooking Alliance collection",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "B06",
    category: "Policy & Reports",
    year: 2016,
    sortYear: 2016,
    title:
      "Situation Analysis of Ambient Air Pollution and Respiratory Health Effects in Kathmandu Valley 2015",
    authors: "Contribution",
    venue: "November 2016",
    note: "The CV reference is a legacy short link that has not been verified; the citation is shown without a document link.",
    topics: ["Air Pollution"],
  },
  {
    id: "B07",
    category: "Policy & Reports",
    year: 2013,
    sortYear: 2013,
    title: "On Thin Ice: How Cutting Pollution Can Slow Warming and Save Lives",
    authors: "Contribution",
    venue: "World Bank, November 2013",
    detail:
      "Associated consultancy: Health Benefits of Stove/Fuel Interventions in Peru and Nepal, August–October 2013.",
    note: "The CV reference is a legacy short link that has not been verified; the citation is shown without a document link.",
    topics: ["Air Pollution", "Clean Cooking & Energy"],
  },
  {
    id: "B08",
    category: "Policy & Reports",
    year: 2007,
    sortYear: 2007,
    title: "Mac Arthur BART Transit Village: Health Impact Assessment",
    authors: "Contribution",
    venue: "UC Berkeley Health Impact Group, January 2007",
    note: "The CV reference is a legacy short link that has not been verified; the citation is shown without a document link.",
    topics: ["Population Health"],
  },

  // Manuscript archive
  {
    id: "M01",
    category: "Manuscript Archive",
    year: null,
    sortYear: 2024,
    title:
      "Comparison of Surface Level Particulate Matter (PM2.5) and Atmospheric Column Aerosol Optical Depth over Kathmandu Valley",
    authors: "Regmi J et al., including Amod K. Pokhrel",
    venue: "Journal named in CV: Asia-Pacific Journal of Atmospheric Sciences",
    status: "Listed as submitted / in review in the CV's 2024 section",
    topics: ["Air Pollution", "Monitoring & Data"],
  },
  {
    id: "M02",
    category: "Manuscript Archive",
    year: null,
    sortYear: 2024,
    title: "Comparison of Air Quality in Kathmandu, Nepal before and during COVID-19 Lockdown",
    authors: "Maharjan B, Joshi Y, Marahatta S, Pokhrel AK",
    venue: "Journal submission reference in CV: Aerosol and Air Quality Research, AAQR-21-11-COVID2-0323",
    status: "Listed as submitted / in review in the CV's 2024 section",
    topics: ["Air Pollution"],
  },
  {
    id: "M03",
    category: "Manuscript Archive",
    year: null,
    sortYear: 2023,
    title:
      "Assessing the use of existing Wi-Fi networks in healthcare facilities for remote monitoring and telehealth applications",
    authors:
      "Yarahmadi A, Ansaripour A, Roy S, Gnawali O, Amod K. Pokhrel, Dhiraj Pokhrel, Thapa LBR",
    venue: "—",
    status: "Status needs clarification",
    note: "The CV's section heading says in preparation, while the entry says submitted.",
    topics: ["Monitoring & Data"],
  },
  {
    id: "M04",
    category: "Manuscript Archive",
    year: null,
    sortYear: 2022,
    title: "Solid fuel use for cooking as a risk factor for cataract: a systematic review and meta-analysis",
    authors: "Adair-Rohani H, Bates MN, Pokhrel AK, Bruce NG, Smith KR",
    venue: "—",
    status: "Listed as in preparation",
    topics: ["Clean Cooking & Energy"],
  },
  {
    id: "M05",
    category: "Manuscript Archive",
    year: null,
    sortYear: 2022,
    title:
      "Indoor NO2 pollution from biomass fuel combustion and its effect on pulmonary function and respiratory symptoms in Nepalese women",
    authors: "Sherpa L, Pokhrel AK, Bates MN, Chandyo RK, Balmes J",
    venue: "—",
    status: "Listed as in preparation",
    topics: ["Air Pollution"],
  },
  {
    id: "M06",
    category: "Manuscript Archive",
    year: null,
    sortYear: 2022,
    title: "Perceived benefits and risks of cow dung use and cow dung management in rural Nepal",
    authors: "Islam M, Gramling S, Nepal S, Pokhrel AK, Thomas E, Kwong LH",
    venue: "—",
    status: "Listed as in preparation",
    topics: ["Clean Cooking & Energy"],
  },
];

export const manuscriptArchiveNote =
  "Statuses below reflect the CV record and may have changed.";

export const policyReportsNote =
  "The CV establishes contribution to these documents, not sole authorship.";

export const publicationTopics = Array.from(
  new Set(publications.flatMap((p) => p.topics)),
).sort();

export const publicationYears = Array.from(
  new Set(publications.map((p) => p.year).filter((y): y is number => y !== null)),
).sort((a, b) => b - a);
