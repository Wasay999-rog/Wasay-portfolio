import Link from "next/link"
import { FaArrowLeft, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Resume() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen p-5 md:p-10">
      <header className="max-w-4xl mx-auto flex justify-end mb-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wasaymohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/wasay-m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400">
            <FaArrowLeft /> Back to Home
          </Link>
          <a
            href="/Wasay Mohammed_Data_Analyst.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 transition rounded-lg text-white"
          >
            <FaDownload /> Download PDF
          </a>
        </div>

        <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Wasay Mohammed</h1>
          <p className="text-gray-300 mb-2">
            United States of America | +1-773-587-1084 | mohammedwasay69@outlook.com |{" "}
            <a href="https://linkedin.com/in/wasay-m" className="text-green-500 hover:text-green-400">
              LinkedIn
            </a>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 border-b border-gray-700 pb-1">SUMMARY</h2>
          <p className="text-gray-300">
            Analytical and results-driven Data & Analytics Engineer with 3+ years of experience building scalable data pipelines, real-time
            dashboards, and predictive models.Expert in designing ETL workflows and automating data integration using Python, SQL,
            Airflow, Snowflake, and AWS. Known for transforming complex datasets into actionable insights, reducing latency, and
            enabling data-driven decisions across teams.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 border-b border-gray-700 pb-1">EDUCATION</h2>
          <div className="mb-2">
            <div className="flex justify-between">
              <p className="font-medium">Osmania University | Bachelors, Computer Science</p>
              <p>May 2020</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-medium">Trine University | Masters, Business Analytics</p>
              <p>May 2025</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-2 border-b border-gray-700 pb-1">WORK EXPERIENCE</h2>

          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Sutherland | Data Engineer</p>
              <p>Oct 2020 - Oct 2022</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Automated ingestion of multi-source data by designing 15 modular ETL pipelines in Python & Airflow, implemented retry  
                logic, dynamic scheduling, and data validation boosting data accuracy by 40% and shortened reconciliation time by 25%
              </li>
              <li>
                Reviewed and verified financial and operational datasets to ensure compliance with client standards and
                regulatory requirements.
              </li>
              <li>
                Optimized Snowflake pipelines using clustering & partitioning, supporting real-time dashboards and reduced average query
                latency by 30%, improving executive reporting speed.
              </li>
              <li>
                Deployed CI/CD workflows with GitHub Actions and automated testing & deployment, shortening release cycles by 20%
                and enhancing deployment consistency.
              </li>
              <li>
                Developed Python-based data monitoring scripts to detect anomalies and schema drift, proactively addressed data quality
                issues and minimized downtime incidents.
              </li>
              <li>
                Led Agile sprint ceremonies (planning & retrospectives) using Jira, coordinated with engineers, analysts, and PMs to improve
                cross-team alignment and reduced bug resolution time by 18%.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Mahindra Finance |  Credit Risk Analyst</p>
              <p>Oct 2019 - Sep 2020</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Analyzed 80K+ loan applications using Python & SQL, performed scenario & stress testing for risk evaluation.
              </li>
              <li>
                Executed A/B tests on credit scoring models to refine predictive accuracy and supported data-driven lending strategies.
              </li>
              <li>
                Presented dashboards & insights to non-technical stakeholders for data-based decision making.
              </li>
              <li>
                Automated credit risk reporting with Power BI dashboards backed by AWS Redshift to removed manual updates and saved
                30% of reporting effort and improved data freshness.
              </li>
              <li>
                Built and optimized ETL pipelines for extracting, transforming, and loading customer risk data into AWS
                Redshift, improving data processing speed by 30%.
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-2 border-b border-gray-700 pb-1">PROJECT EXPERIENCE</h2>

          <div className="mb-4">
            <p className="font-medium">HR Database Management System | Bachelor's Project</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Developed a centralized HR database system for a university, improving data accessibility and accuracy
                utilizing Java
              </li>
              <li>Implemented structured data storage and validation, reducing HR data entry errors by 30%.</li>
              <li>Integrated SQL databases for efficient record management and reporting.</li>
              <li>Built Power BI dashboards, reducing HR report generation time by 40%.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-medium">Predictive Analytics for Optimizing Inventory Management | Master's Project</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Developed a predictive model that reduced stockouts by 25% and improved inventory turnover by 18%,
                boosting revenue.
              </li>
              <li>Analyzed five years of sales data (500K+ transactions) to identify demand trends.</li>
              <li>Integrated the model into a SQL-based inventory system for automated demand forecasting.</li>
              <li>Created an interactive Power BI dashboard to visualize real-time inventory trends.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-medium">Synthetic Data Generator for Privacy  | Personal Project</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Created a synthetic data tool that mimicked real datasets with 95%+ fidelity, enabling safe use of sensitive data.
              </li>
              <li>Built the solution using Python, CTGAN, and AWS (S3 + Lambda), applying privacy filters that reduced identifiable attributes.</li>
            </ul>
          </div>

          

          <h2 className="text-xl font-semibold mt-6 mb-2 border-b border-gray-700 pb-1">SKILLS & INTERESTS</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>
              <span className="font-medium">Data Analysis & Modeling:</span> SQL(CTE's, Joins, Stored procedures), Data
              manipulation, ETL pipelines, Data Modeling, Data Mining
            </li>
            <li>
              <span className="font-medium">Data Visualization:</span> Power BI, Tableau, Data Visualization
            </li>
            <li>
              <span className="font-medium">Programming & Statistical Tools:</span> Python (pandas, Numpy), R, Java
            </li>
            <li>
              <span className="font-medium">Data Engineering & ETL:</span> Airflow, AWS , Snowflake, Azure, SSIS, REST APIs, CI/CD, ETL, dbt, GIT
            </li>
            <li>
              <span className="font-medium">Additional Tools:</span> Microsoft 365(Powerquery, power pivot, tables,
              VLOOKUP), AWS(RDS,S3), Jira, CRM tool, Project Management, documentation, AD-HOC, Statistics
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
