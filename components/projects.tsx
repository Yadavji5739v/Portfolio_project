import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Visual Search Engine using VLMs",
    description:
      "An AI-powered visual search engine that retrieves relevant images using natural language or image input. Built with Vision-Language Models and features a user-friendly Streamlit interface for seamless interaction.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/Yadavji5739v/Visual_Sesrch_Engine_using_VLMs",
    live: null,
    tags: ["Python", "Vision-Language Models", "Streamlit", "AI", "Computer Vision"],
  },
  {
    title: "Cryptocurrency Liquidity Prediction",
    description:
      "Advanced machine learning project that predicts cryptocurrency liquidity using historical market data. Supports market stability through intelligent forecasting by modeling and anticipating shifts in liquidity patterns.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/Yadavji5739v/Cryptocurrency-liquidity-Prediction",
    live: null,
    tags: ["Jupyter Notebook", "Machine Learning", "Cryptocurrency", "Data Analysis", "Forecasting"],
  },
  {
    title: "AI-Powered Stock Analysis",
    description:
      "Machine learning model that analyzes stock market trends and provides investment insights. Features technical indicators, sentiment analysis, and predictive modeling for informed trading decisions.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/Yadavji5739v",
    live: null,
    tags: ["Python", "Pandas", "Scikit-learn", "Financial Analysis", "ML"],
  },
  {
    title: "Natural Language Processing Suite",
    description:
      "Comprehensive NLP toolkit featuring text classification, sentiment analysis, and language generation capabilities. Built with modern transformer models and deployed with an intuitive web interface.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/Yadavji5739v",
    live: null,
    tags: ["Python", "NLP", "Transformers", "BERT", "Text Analysis"],
  },
  {
    title: "Deep Learning Image Classifier",
    description:
      "Convolutional Neural Network for image classification with high accuracy. Features data augmentation, transfer learning, and real-time prediction capabilities through a web-based interface.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/Yadavji5739v",
    live: null,
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "Computer Vision"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in AI, ML, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github}>
                      <Github size={16} className="mr-2" />
                      Code
                    </Link>
                  </Button>
                  {project.live && (
                    <Button asChild size="sm">
                      <Link href={project.live}>
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
