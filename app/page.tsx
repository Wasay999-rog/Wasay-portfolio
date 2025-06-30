"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  FaPython,
  FaDatabase,
  FaGithub,
  FaLinkedinIn,
  FaChartBar,
  FaTimes,
  FaAws,
  FaRProject,
  FaSnowflake,
  FaMicrosoft,
} from "react-icons/fa"
import { SiTableau } from "react-icons/si"

// Sample code for each project
const projectSampleCodes = {
  "hr-database": {
    language: "sql",
    code: "-- Query to get employee performance metrics\nSELECT \n    e.employee_id,\n    e.first_name,\n    e.last_name,\n    d.department_name,\n    AVG(p.performance_score) as avg_performance,\n    COUNT(p.review_id) as review_count,\n    MAX(p.review_date) as last_review_date\nFROM \n    employees e\nJOIN \n    departments d ON e.department_id = d.department_id\nLEFT JOIN \n    performance_reviews p ON e.employee_id = p.employee_id\nWHERE \n    e.status = 'Active'\n    AND p.review_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 YEAR)\nGROUP BY \n    e.employee_id, e.first_name, e.last_name, d.department_name\nORDER BY \n    avg_performance DESC;",
  },
  "movie-recommendation": {
    language: "python",
    code: "import pandas as pd\nimport numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\n# Create a user-item matrix\ndef create_user_item_matrix(ratings_df):\n    user_movie_ratings = ratings_df.pivot(\n        index='userId', \n        columns='movieId', \n        values='rating'\n    ).fillna(0)\n    return user_movie_ratings\n\n# Calculate similarity between users\ndef calculate_user_similarity(user_item_matrix):\n    user_similarity = cosine_similarity(user_item_matrix)\n    user_similarity_df = pd.DataFrame(\n        user_similarity,\n        index=user_item_matrix.index,\n        columns=user_item_matrix.index\n    )\n    return user_similarity_df\n\n# Get movie recommendations for a user\ndef get_recommendations(user_id, user_similarity_df, ratings_df, movies_df, n=5):\n    similar_users = user_similarity_df[user_id].sort_values(ascending=False)[1:11]\n    \n    # Get movies the user hasn't seen\n    user_movies = set(ratings_df[ratings_df['userId'] == user_id]['movieId'])\n    recommendations = []\n    \n    # Get top rated movies from similar users\n    for similar_user, similarity in similar_users.items():\n        if similarity <= 0:\n            continue\n            \n        # Get highly rated movies from this similar user\n        similar_user_movies = ratings_df[\n            (ratings_df['userId'] == similar_user) & \n            (ratings_df['rating'] > 4)\n        ]['movieId']\n        \n        # Add movies the target user hasn't seen\n        for movie in similar_user_movies:\n            if movie not in user_movies:\n                movie_title = movies_df[movies_df['movieId'] == movie]['title'].values[0]\n                recommendations.append((movie, movie_title, similarity))\n    \n    # Sort and return top N recommendations\n    recommendations.sort(key=lambda x: x[2], reverse=True)\n    return recommendations[:n]",
  },
  "real-estate-scraper": {
    language: "python",
    code: "import requests\nfrom bs4 import BeautifulSoup\nimport pandas as pd\nimport time\nimport random\n\n# List of user agents to rotate\nuser_agents = [\n    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',\n    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',\n    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'\n]\n\ndef scrape_property_listings(zip_code, page=1):\n    \"\"\"Scrape real estate listings for a given zip code\"\"\"\n    url = f\"https://example-realestate.com/search/{zip_code}/page-{page}\"\n    \n    # Rotate user agents to avoid detection\n    headers = {\n        'User-Agent': random.choice(user_agents),\n        'Accept': 'text/html,application/xhtml+xml,application/xml',\n        'Accept-Language': 'en-US,en;q=0.9',\n    }\n    \n    response = requests.get(url, headers=headers)\n    \n    if response.status_code != 200:\n        print(f\"Failed to retrieve data: {response.status_code}\")\n        return []\n    \n    soup = BeautifulSoup(response.text, 'html.parser')\n    properties = []\n    \n    # Find all property listings on the page\n    listings = soup.select('.property-listing')\n    \n    for listing in listings:\n        try:\n            # Extract property details\n            address = listing.select_one('.property-address').text.strip()\n            price = listing.select_one('.property-price').text.strip()\n            price = int(price.replace('$', '').replace(',', ''))\n            \n            bedrooms = listing.select_one('.property-beds').text.strip()\n            bathrooms = listing.select_one('.property-baths').text.strip()\n            sqft = listing.select_one('.property-sqft').text.strip()\n            sqft = int(sqft.replace(',', '').replace('sqft', '').strip())\n            \n            properties.append({\n                'address': address,\n                'price': price,\n                'bedrooms': bedrooms,\n                'bathrooms': bathrooms,\n                'sqft': sqft,\n                'price_per_sqft': round(price / sqft, 2),\n                'zip_code': zip_code\n            })\n        except Exception as e:\n            print(f\"Error parsing listing: {e}\")\n    \n    return properties",
  },
  "inventory-python-sql": {
    language: "python",
    code: "import pandas as pd\nimport psycopg2\nfrom sqlalchemy import create_engine\n\n# Database connection\ndef get_db_connection():\n    conn = psycopg2.connect(\n        host=\"localhost\",\n        database=\"inventory_db\",\n        user=\"inventory_user\",\n        password=\"password\"\n    )\n    return conn\n\n# Function to get current inventory levels\ndef get_inventory_levels():\n    conn = get_db_connection()\n    query = \"\"\"\n    SELECT \n        p.product_id,\n        p.product_name,\n        p.category,\n        p.supplier_id,\n        i.quantity_on_hand,\n        i.reorder_point,\n        i.reorder_quantity,\n        i.last_restock_date,\n        p.unit_price,\n        p.unit_cost\n    FROM \n        products p\n    JOIN \n        inventory i ON p.product_id = i.product_id\n    \"\"\"\n    inventory_df = pd.read_sql(query, conn)\n    conn.close()\n    return inventory_df\n\n# Identify items that need reordering\ndef identify_reorder_items(inventory_df):\n    reorder_needed = inventory_df[inventory_df['quantity_on_hand'] <= inventory_df['reorder_point']]\n    return reorder_needed.sort_values('quantity_on_hand')\n\n# Calculate inventory value\ndef calculate_inventory_value(inventory_df):\n    inventory_df['value'] = inventory_df['quantity_on_hand'] * inventory_df['unit_cost']\n    total_value = inventory_df['value'].sum()\n    return total_value\n\n# Main function\ndef run_inventory_analysis():\n    # Get data\n    inventory_df = get_inventory_levels()\n    \n    # Identify items needing reorder\n    reorder_items = identify_reorder_items(inventory_df)\n    \n    # Calculate inventory value\n    total_value = calculate_inventory_value(inventory_df)\n    \n    print(f\"Total products: {len(inventory_df)}\")\n    print(f\"Products needing reorder: {len(reorder_items)}\")\n    print(f\"Total inventory value: ${total_value:,.2f}\")\n    \n    return {\n        'inventory': inventory_df,\n        'reorder_items': reorder_items,\n        'total_value': total_value\n    }",
  },
  "data-pipeline": {
    language: "python",
    code: "from airflow import DAG\nfrom airflow.operators.python_operator import PythonOperator\nfrom airflow.providers.snowflake.operators.snowflake import SnowflakeOperator\nfrom datetime import datetime, timedelta\nimport pandas as pd\nimport json\nimport requests\nfrom airflow.hooks.S3_hook import S3Hook\n\n# Default arguments for the DAG\ndefault_args = {\n    'owner': 'data_team',\n    'depends_on_past': False,\n    'start_date': datetime(2023, 1, 1),\n    'email': ['data_alerts@example.com'],\n    'email_on_failure': True,\n    'retries': 3,\n    'retry_delay': timedelta(minutes=5),\n}\n\n# Create the DAG\ndag = DAG(\n    'ecommerce_etl_pipeline',\n    default_args=default_args,\n    description='ETL pipeline for e-commerce data',\n    schedule_interval='0 2 * * *',  # Run daily at 2 AM\n    catchup=False,\n)\n\n# Function to extract data from API\ndef extract_orders_data(**kwargs):\n    \"\"\"Extract order data from the e-commerce API\"\"\"\n    yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')\n    api_url = f\"https://api.ecommerce-platform.com/v1/orders?date={yesterday}\"\n    \n    # API authentication\n    headers = {\n        'Authorization': 'Bearer {{ var.value.ecommerce_api_key }}',\n        'Content-Type': 'application/json'\n    }\n    \n    # Make API request\n    response = requests.get(api_url, headers=headers)\n    \n    if response.status_code != 200:\n        raise Exception(f\"API request failed with status code {response.status_code}\")\n    \n    # Parse response\n    orders_data = response.json()\n    \n    # Save to S3\n    s3_hook = S3Hook(aws_conn_id='aws_default')\n    s3_hook.load_string(\n        json.dumps(orders_data),\n        f'orders/raw/{yesterday}.json',\n        bucket_name='ecommerce-data-lake'\n    )\n    \n    return f's3://ecommerce-data-lake/orders/raw/{yesterday}.json'\n\n# Define the tasks\nextract_task = PythonOperator(\n    task_id='extract_orders_data',\n    python_callable=extract_orders_data,\n    provide_context=True,\n    dag=dag,\n)\n\n# Define task dependencies\nextract_task",
  },
}

const projects = [
  {
    title: "HR Database",
    slug: "hr-database",
    description: "Organize, track, and analyze employee data with SQL and Power BI.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Movie Recommendation System",
    slug: "movie-recommendation",
    description: "Build a recommender using collaborative filtering and Scikit-learn.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Real Estate Web Scraper",
    slug: "real-estate-scraper",
    description: "Scrape property data with Python and automate listing analysis.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Inventory Management (Python & SQL)",
    slug: "inventory-python-sql",
    description: "Automate inventory analysis with Pandas and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "ETL Pipeline for E-Commerce",
    slug: "data-pipeline",
    description: "Extract, transform, and load data into Snowflake using Airflow.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=60",
  },
]

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [codeModalOpen, setCodeModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form fields
    if (!form.name || !form.email || !form.message) {
      return
    }

    setIsSubmitting(true)
    setStatus("Sending...")

    try {
      // Create a simple payload without spreading
      const payload = {
        name: form.name,
        email: form.email,
        message: form.message,
        _replyto: form.email,
        _subject: "Portfolio Contact from " + form.name,
        _cc: "mohammedwasay69@outlook.com",
      }

      // Using formspree to handle the form submission
      const res = await fetch("https://formspree.io/f/xpzvawrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openCodeModal = (slug, e) => {
    e.preventDefault() // Prevent navigation
    e.stopPropagation() // Prevent event bubbling
    setSelectedProject(slug)
    setCodeModalOpen(true)
  }

  const closeCodeModal = () => {
    setCodeModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans">
      <header className="p-5 md:p-10 flex justify-end">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wasaymohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-2xl filter brightness-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/wasay-mubashar-mohammed-4a1468268"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-2xl filter brightness-125" />
          </a>
        </div>
      </header>
      <section className="p-5 md:p-10 max-w-7xl mx-auto animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white hover:text-gray-300 transition-colors duration-300">
          Wasay Mohammed
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-2">Data Enthusiast</p>
        <p className="text-sm sm:text-md text-gray-500 mb-8 italic">
          3+ years of experience in data analysis, business intelligence, and visualization
        </p>

        <p className="mb-6 text-base sm:text-lg max-w-3xl text-gray-300">
          I'm a passionate data enthusiast with a deep love for turning raw data into actionable insights. My focus lies
          in solving real-world problems through data storytelling, visualization, and analytics. I'm constantly
          learning, building, and exploring smarter ways to make data work for businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-12 animate-fadeIn">
          <Link
            href="/resume"
            className="px-5 py-2 border border-gray-600 hover:bg-white hover:text-black transition rounded-xl"
          >
            Resume
          </Link>
          <Link href="/about-me" className="px-5 py-2 bg-green-600 hover:bg-green-700 transition rounded-xl text-white">
            About Me
          </Link>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-4 text-white border-b border-gray-700 pb-2">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaPython className="filter brightness-125" /> Python
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaDatabase className="filter brightness-125" /> SQL
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <SiTableau className="filter brightness-125" /> Tableau
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaChartBar className="filter brightness-125" /> Power BI
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaMicrosoft className="filter brightness-125" /> Excel
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaAws className="filter brightness-125" /> AWS
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaRProject className="filter brightness-125" /> R
          </li>
          <li className="flex items-center gap-2 hover:text-white transition-colors">
            <FaSnowflake className="filter brightness-125" /> Snowflake
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-16 mb-6 text-white border-b border-gray-700 pb-2">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} className="relative">
              <Link href={"/projects/" + project.slug}>
                <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors border border-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <button
                      className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 transition rounded-lg text-white text-sm"
                      onClick={(e) => openCodeModal(project.slug, e)}
                    >
                      Code
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        

        <h2 className="text-3xl font-semibold mt-16 mb-4 text-white border-b border-gray-700 pb-2">Contact</h2>
        <p className="text-gray-300">Feel free to connect with me via LinkedIn or email.</p>
        <ul className="text-gray-400 space-y-1 mb-6">
          <li>Email: mohammedwasay69@outlook.com</li>
          <li>LinkedIn: linkedin.com/in/wasay-mubashar-m</li>
        </ul>

        <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
            required
            disabled={isSubmitting}
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className={"text-sm " + (status.includes("success") ? "text-green-400" : "text-gray-400") + " mt-2"}>
              {status}
            </p>
          )}
        </form>
      </section>

      {/* Code Modal */}
      {codeModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                {projects.find((p) => p.slug === selectedProject)?.title} - Sample Code
              </h3>
              <button onClick={closeCodeModal} className="text-gray-400 hover:text-white" aria-label="Close">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="overflow-auto p-4 flex-grow">
              {projectSampleCodes[selectedProject] && (
                <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="text-white text-sm">{projectSampleCodes[selectedProject].code}</code>
                </pre>
              )}
            </div>
            <div className="p-4 border-t border-gray-700">
              <button
                onClick={closeCodeModal}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 transition rounded text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
