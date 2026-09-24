export type Category = "Analytics & BI" | "Data Engineering" | "Machine Learning";

export type Project = {
  title: string;
  category: Category;
  description: string;
  tech: string[];
  repo: string;
};

const gh = (repo: string) => `https://github.com/Adnan040404/${repo}`;

export const projects: Project[] = [
  {
    title: "Dropship Reconciliation Engine",
    category: "Data Engineering",
    description:
      "Invoice-to-payment reconciliation built twice, in pandas and in plain SQL, with identical results. Flags unpaid, short-paid, overpaid and duplicate invoices and unapplied payments.",
    tech: ["Python", "SQL", "pandas", "SQLite"],
    repo: gh("dropship-reconciliation-engine"),
  },
  {
    title: "AR Aging & Collections Analyzer",
    category: "Analytics & BI",
    description:
      "Ages open invoices into buckets and nets credit memos and overpayments against the oldest debt first, then computes DSO. The Excel aging summary is built entirely from live SUMIFS/MAX formulas over the raw data, not pasted-in numbers. 33 tests.",
    tech: ["Python", "SQL", "SQLite", "Excel", "pytest"],
    repo: gh("ar-aging-collections-analyzer"),
  },
  {
    title: "Sales Data ETL Pipeline",
    category: "Data Engineering",
    description:
      "Merges messy sales exports from three systems into one clean SQL database, an Excel report and SQL insights. Every input row is accounted for, and 14 tests cover the checks.",
    tech: ["Python", "pandas", "SQL", "SQLite", "Excel"],
    repo: gh("sales-data-etl-pipeline"),
  },
  {
    title: "PySpark Pizza Analytics (local and Databricks)",
    category: "Data Engineering",
    description:
      "Seven business questions answered in PySpark over 48,620 order lines, with data-quality checks, exact-decimal money and every result verified against pandas. Runs locally with no Databricks account, and as the original Databricks notebooks.",
    tech: ["PySpark", "Databricks", "Unity Catalog", "pytest"],
    repo: gh("Databricks-End-to-End-Spark-Project-with-Unity-Catalog"),
  },
  {
    title: "Sales Analysis: SQL, Excel and Tableau",
    category: "Analytics & BI",
    description:
      "Revenue, store, product and customer analysis of a sample retail database with SQL, an Excel workbook and an interactive Tableau dashboard.",
    tech: ["SQL", "Excel", "Tableau"],
    repo: gh("Sales-Analysis-with-SQL-Excel-and-Tableau"),
  },
  {
    title: "Bike Shop Sales & Profitability Analysis",
    category: "Analytics & BI",
    description:
      "SQL and Power BI analysis of two years of bike-rental data. Found and fixed a real bug in the original profit formula (cost wasn't scaled by rider volume, producing an impossible 99.7% margin); corrected version verified at 68.8%, with a script that rebuilds every number from the raw files.",
    tech: ["SQL", "Power BI", "DAX", "Python"],
    repo: gh("bike-shop-sql-powerbi-analysis"),
  },
  {
    title: "Weather Data ETL Pipeline",
    category: "Data Engineering",
    description:
      "Pulls weather from a public REST API into SQL with retries, validation, safe re-runs and HTML and Excel reports. Runs with no API key or database server.",
    tech: ["Python", "REST APIs", "SQLite", "pytest"],
    repo: gh("weather-data-etl-pipeline"),
  },
  {
    title: "Payout Reconciliation Report",
    category: "Analytics & BI",
    description:
      "A formula-driven Excel report that matches invoices to payments and shows what was paid, what is missing and what doesn't add up.",
    tech: ["Excel", "Formulas", "Python"],
    repo: gh("payout-reconciliation-excel-report"),
  },
  {
    title: "Hospital Database: SQL Practice",
    category: "Analytics & BI",
    description:
      "33 SQL queries on a small hospital database, from filters to window functions and CTEs. I fixed a script that didn't run and a query that gave the wrong answer, and added 17 tests.",
    tech: ["SQL", "SQLite", "Python", "pytest"],
    repo: gh("hospital-management-sql-project"),
  },
  {
    title: "HR Attrition Dashboard",
    category: "Analytics & BI",
    description:
      "an Excel dashboard on employee attrition. I found the first version counted headcount instead of leavers, and that the corrected rates reverse the department conclusion. 11 tests.",
    tech: ["Excel", "Pivot tables", "Python", "pytest"],
    repo: gh("HR_Employe_Analytics_dashboard"),
  },
];

// Only categories that have projects, so no filter button opens an empty list.
export const categories: Category[] = ["Data Engineering", "Analytics & BI"];
