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
    title: "Databricks Spark Pipeline with Unity Catalog",
    category: "Data Engineering",
    description:
      "End-to-end Spark pipeline on Databricks using Unity Catalog for governed, multi-layer data processing.",
    tech: ["PySpark", "Databricks", "Unity Catalog"],
    repo: gh("Databricks-End-to-End-Spark-Project-with-Unity-Catalog"),
  },
  {
    title: "PySpark ETL on Databricks",
    category: "Data Engineering",
    description:
      "ETL pipeline built with PySpark and Databricks covering ingestion, transformation, and Delta Lake storage.",
    tech: ["PySpark", "Databricks", "Delta Lake"],
    repo: gh("end-to-end-pyspark-etl-databricks"),
  },
  {
    title: "Weather API Data ETL",
    category: "Data Engineering",
    description:
      "Automated pipeline that extracts, transforms, and loads weather data from a public REST API.",
    tech: ["Python", "REST APIs", "ETL"],
    repo: gh("weather_api_data_ETL"),
  },
  {
    title: "Hospital Management SQL System",
    category: "Analytics & BI",
    description:
      "Relational database design for a hospital management system, with SQL queries, joins, and normalization.",
    tech: ["SQL", "Database Design"],
    repo: gh("hospital-management-sql-project"),
  },
  {
    title: "Sales Insights — SQL & Tableau",
    category: "Analytics & BI",
    description:
      "Sales performance analysis using SQL for data extraction and Tableau for interactive visualization.",
    tech: ["SQL", "Tableau"],
    repo: gh("Sale-Insights-Data-Analysis-using-SQL-and-Tableau"),
  },
  {
    title: "McDonald's Sales Dashboard",
    category: "Analytics & BI",
    description: "Power BI dashboard analyzing sales performance and business KPIs.",
    tech: ["Power BI", "DAX"],
    repo: gh("McDonalds_Dashboard"),
  },
  {
    title: "HR Employee Analytics Dashboard",
    category: "Analytics & BI",
    description:
      "Power BI dashboard exploring employee demographics, workforce trends, and performance indicators.",
    tech: ["Power BI", "Data Visualization"],
    repo: gh("HR_Employe_Analytics_dashboard"),
  },
  {
    title: "Coffee Order Dashboard",
    category: "Analytics & BI",
    description:
      "Power BI dashboard analyzing coffee sales, purchasing patterns, and revenue trends.",
    tech: ["Power BI", "Data Analysis"],
    repo: gh("coffee_order_Dashboard_Analysis"),
  },
  {
    title: "Bike Shop Sales Analysis",
    category: "Analytics & BI",
    description: "SQL and Power BI analysis of bike shop sales and inventory performance.",
    tech: ["SQL", "Power BI"],
    repo: gh("bike-shop-sql-powerbi-analysis"),
  },
  {
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    description:
      "Classification model built to flag potentially fraudulent credit card transactions.",
    tech: ["Python", "Scikit-learn", "Classification"],
    repo: gh("Credit-Card-Fraud-Detection"),
  },
  {
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    description:
      "Logistic regression model predicting heart disease risk from patient health data.",
    tech: ["Python", "Logistic Regression"],
    repo: gh("Heart-Disease-Prediction-Using-Logistic-Regression"),
  },
  {
    title: "Diabetes Prediction",
    category: "Machine Learning",
    description: "Predictive model classifying diabetes risk from patient health features.",
    tech: ["Python", "Scikit-learn"],
    repo: gh("Diabetes-Prediction-ML"),
  },
];

export const categories: Category[] = ["Analytics & BI", "Data Engineering", "Machine Learning"];
