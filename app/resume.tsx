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
            href="https://linkedin.com/in/wasay-mohammed"
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
            United States of America | +1-469-248-5813 | mohammedwasay69@outlook.com |{" "}
            <a href="https://linkedin.com/in/wasay-mohammed" className="text-green-500 hover:text-green-400">
              LinkedIn
            </a>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 border-b border-gray-700 pb-1">SUMMARY</h2>
          <p className="text-gray-300">
            Experienced Data Analyst with over 3 years of experience in automating data processes and driving insights.
            Achieved a 40% improvement in data accuracy and reduced reconciliation time by 25% through innovative SQL
            and Power BI solutions. Adept in Python, SQL, and data modeling, with a proven ability to optimize data
            systems and support strategic decision-making.
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
              <p className="font-medium">Sutherland | Data Analyst</p>
              <p>Oct 2020 - Oct 2022</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Automated routine data processing tasks using SQL and Microsoft Power Automate, reducing manual effort
                by saving 15+ hours per week.
              </li>
              <li>
                Reviewed and verified financial and operational datasets to ensure compliance with client standards and
                regulatory requirements.
              </li>
              <li>
                Developed an automated financial data review and reporting system that enhanced data accuracy by 40% and
                reduced quarterly reconciliation time by 25%, illustrating strong data modeling and mining capabilities.
              </li>
              <li>
                Analyzed over 1 million records to uncover trends and patterns, contributing to a 15% improvement in
                data-driven decision-making and accelerating project delivery by two weeks.
              </li>
              <li>
                Designed and maintained interactive dashboards using Power BI, providing real-time insights and enabling
                agile responses to business needs.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Mahindra Finance | Junior Credit Risk Analyst</p>
              <p>Oct 2019 - Sep 2020</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Extracted and analyzed data from 500+ credit applications using SQL to assess financial risk metrics and
                ensure data integrity.
              </li>
              <li>
                Led an A/B testing campaign utilizing statistical models to evaluate creditworthiness and support
                data-driven risk assessment.
              </li>
              <li>
                Automated risk reporting processes with Power BI and AWS Redshift, enhancing scalability and efficiency
                in cloud-based data warehousing.
              </li>
              <li>
                Collaborated with cross-functional teams, including finance, analytics, and product management, to drive
                strategic, data-driven initiatives.
              </li>
              <li>
                Conducted stress testing and scenario analysis on 80K+ customer records using Python and SQL queries,
                ensuring robust risk evaluation.
              </li>
              <li>
                Built and optimized ETL pipelines for extracting, transforming, and loading customer risk data into AWS
                Redshift, improving data processing speed by 30%.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium">Panzer Technology | Data Analyst-Intern</p>
              <p>May 2019 - Sep 2019</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              <li>
                Executed data extraction and cleaning processes on over 500,000 sales transaction records from SQL
                databases using Python libraries (Pandas, NumPy), achieving a 99% accuracy rate in data integrity and
                consistency which facilitated more reliable analytics.
              </li>
              <li>
                Conducted comprehensive exploratory data analysis (EDA) involving trend analyses of seasonal sales
                patterns and correlation studies across 10 key variables, identifying three primary sales drivers that
                contributed to a forecasted revenue increase of 15% in the next quarter.
              </li>
              <li>
                Tracked and analyzed key performance indicators (KPIs) such as customer acquisition cost, average order
                value, and conversion rates to provide actionable insights.
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
              <span className="font-medium">Additional Tools:</span> Microsoft 365(Powerquery, power pivot, tables,
              VLOOKUP), AWS(RDS,S3), Jira, CRM tool, Project Management, documentation, AD-HOC, Statistics
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
