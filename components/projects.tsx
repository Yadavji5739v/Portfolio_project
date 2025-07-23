"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  image: string
  github: string
  live: string | null
  tags: string[]
}

interface ProjectsData {
  projects: Project[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)

        // Try to fetch from GitHub raw URL first
        const githubUrl = "https://raw.githubusercontent.com/Yadavji5739v/portfolio-data/main/projects.json"

        let response
        try {
          response = await fetch(githubUrl)
          if (!response.ok) {
            throw new Error("GitHub fetch failed")
          }
        } catch (githubError) {
          // Fallback to local JSON file
          console.log("Fetching from GitHub failed, using local file")
          response = await fetch("/projects.json")
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: ProjectsData = await response.json()
        setProjects(data.projects)
      } catch (err) {
        console.error("Error fetching projects:", err)
        setError("Failed to load projects. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">My Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in AI, ML, and web development
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-slate-600 dark:text-slate-300">Loading projects...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">My Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in AI, ML, and web development
            </p>
          </div>
          <div className="text-center py-20">
            <p className="text-red-500 dark:text-red-400">{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4 bg-blue-600 hover:bg-blue-700">
              Retry
            </Button>
          </div>
        </div>
      </section>
    )
  }

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
