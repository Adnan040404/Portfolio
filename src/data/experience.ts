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
      "Reconcile invoices, purchase orders, credit/debit memos, remittance files, and bank deposits across 50+ retail and marketplace accounts (Amazon, Walmart, Target, Home Depot, Lowe's, and others)",
      "Built Python and Pandas automation that matches invoices to payments using configurable, account-specific matching logic, replacing manual line-by-line reconciliation",
      "Investigate payment discrepancies and deduction or chargeback claims across vendor portals, remittance data, and bank records to identify and resolve unpaid or misapplied amounts",
      "Use Excel and Power Query to process and validate large financial datasets, and produce aging and reconciliation reports for stakeholders",
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
