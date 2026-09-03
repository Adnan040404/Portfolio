export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
  primary?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst",
    org: "Easy Solutionz",
    period: "June 2025 — Present",
    primary: true,
    points: [
      "Develop reports, dashboards, and business insights for stakeholders",
      "Clean, transform, and validate data using SQL, Excel, and Python",
      "Build KPI reports that support data-driven decision making",
      "Support reporting automation and business analytics initiatives",
    ],
  },
  {
    role: "Customer Service Representative",
    org: "Digital Telemarketing Solutions",
    location: "Sargodha, Pakistan",
    period: "Dec 2023 — Jun 2024",
    points: [
      "Supported U.S.-based clients in a fast-paced, target-driven environment",
      "Developed communication and problem-solving skills through direct client interaction",
    ],
  },
];

export const education = {
  degree: "BS Information Technology",
  school: "University of Sargodha, Pakistan",
  period: "2021 — 2025",
  cgpa: "3.41 / 4.00",
};

export const certifications = [
  { name: "Data Science", issuer: "Simplilearn" },
  { name: "Power BI", issuer: "Simplilearn" },
  { name: "Database Management", issuer: "Simplilearn" },
];
