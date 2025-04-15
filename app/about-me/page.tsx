import Link from "next/link"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"

export default function AboutMe() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <div className="flex items-center text-gray-400 hover:text-white mb-8">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </div>
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000837451f68d8e96039be16b2d_conversation_id%3D67f696ad-5634-8001-a8e8-a9210691be02%26message_id%3D8fdfce7b-51c7-4416-bc7a-013c59afe706.PNG-ZSI8h564OP0VTTxqUfFBgLfBDM4BvH.png"
              alt="Wasay Mohammed"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>

            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm Wasay Mohammed, a data enthusiast with a passion for transforming raw data into meaningful
                insights. With over 3 years of experience in data analysis and visualization, I've developed a strong
                foundation in Python, SQL, and various BI tools.
              </p>

              <p>
                My journey in data began during my undergraduate studies where I discovered my love for finding patterns
                and stories hidden within datasets. Since then, I've worked on numerous projects ranging from HR
                analytics to recommendation systems, always focusing on delivering actionable insights that drive
                business decisions.
              </p>

              <p>
                I believe that data is most valuable when it's accessible and understandable to everyone. That's why I'm
                passionate about data visualization and creating intuitive dashboards that help stakeholders make
                informed decisions without needing to understand the complex analysis behind them.
              </p>

              <p>
                When I'm not working with data, you can find me exploring new hiking trails, experimenting with cooking
                recipes, or diving into a good book. I'm also an avid learner, constantly taking online courses to
                expand my knowledge and skills in the ever-evolving field of data science.
              </p>

              <p>
                I'm always open to connecting with like-minded professionals and discussing potential collaborations.
                Feel free to reach out through the contact form or connect with me on LinkedIn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
