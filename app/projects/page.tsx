import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderOpen, ExternalLink, Github, Calendar, Code, TrendingUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "A web-based job portal that connects job seekers with employers. Includes features like job listings, advanced search filters, resume uploads, company profiles, and an admin dashboard for managing postings.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/SharmaTechie/Job-Portal",
  },
  {
    id: 2,
    title: "Custom Shell",
    description:
      "A custom-built Unix shell implemented in C that supports basic commands, piping, redirection, and background execution. Focuses on process control, system calls, and command parsing.",
    technologies: ["C", "Linux System Calls", "Process Management", "Shell Scripting"],
    githubUrl: "https://github.com/SharmaTechie/Custom-Shell",
  },
  {
    id: 3,
    title: "Compile AI",
    description:
      "An AI-powered code assistant and compiler tool that uses large language models to analyze, debug, and optimize code. Supports real-time syntax checking, intelligent suggestions, and execution of C programs. ",
    technologies: ["C", "Python", "OpenAI API", "LLM", "Flask", "Docker", "WebSocket"],
    githubUrl: "https://github.com/SharmaTechie/CompileAI",
  },  
  {
    id: 4,
    title: "Book Recommendation System",
    description:
      "A machine learning-based recommendation system that suggests books based on user preferences, reading history, and collaborative filtering. Integrates with a user interface for personalized recommendations.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Collaborative Filtering", "HTML/CSS"],
    githubUrl: "https://github.com/SharmaTechie/book-recommendation-system",
  },
];


export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="text-white hover:bg-red-900/50 transition-colors" />
        <div>
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <FolderOpen className="w-10 h-10 text-red-500" />
            Projects Portfolio
          </h1>
          <p className="text-gray-400 mt-2">Showcase of my technical projects and achievements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 border-red-800/50 backdrop-blur-sm hover:border-red-600/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.02] group"
          >
            <CardHeader className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-start justify-between relative z-10">
                <CardTitle className="text-white flex items-center gap-3 text-xl group-hover:text-red-400 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  {project.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <p className="text-gray-300 leading-relaxed text-justify">{project.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-red-400 mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${
                        techIndex % 3 === 0
                          ? "border-blue-500 text-blue-400 bg-blue-500/10"
                          : techIndex % 3 === 1
                            ? "border-green-500 text-green-400 bg-green-500/10"
                            : "border-purple-500 text-purple-400 bg-purple-500/10"
                      } hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-500 text-red-400 hover:bg-red-900/50 hover:border-red-400 transition-all duration-300 flex-1"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 border-red-800/50 backdrop-blur-sm hover:border-red-600/70 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
        <CardHeader>
          <CardTitle className="text-red-400 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Project Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg p-4 border border-blue-600/30">
              <div className="text-3xl font-bold text-white mb-1">{projects.length}</div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-4 border border-purple-600/30">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}
              </div>
              <div className="text-sm text-gray-400">Technologies Used</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
