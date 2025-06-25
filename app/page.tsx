import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, GraduationCap, Target, Trophy } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="text-white hover:bg-red-900/50" />
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <Target className="w-8 h-8 text-red-500" />
          Portfolio Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Profile Photo Card */}
        <Card className="bg-gray-900/80 border-red-800/50 backdrop-blur-sm hover:border-red-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4 h-full">
            <div className="relative flex items-center justify-center w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 shadow-lg shadow-red-500/30 mx-auto">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">Krishna Sharma</h3>
              <Badge variant="outline" className="border-red-500 text-red-400 bg-red-500/10">
                Student
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Career Objective */}
        <Card className="lg:col-span-2 bg-gray-900/80 border-red-800/50 backdrop-blur-sm hover:border-red-600/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Career Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed text-justify">
              Passionate and dedicated computer science student with a strong foundation in software development, web
              technologies, and problem-solving. Seeking opportunities to apply theoretical knowledge in practical
              scenarios while contributing to innovative projects. Committed to continuous learning and staying updated
              with the latest technological advancements. Eager to leverage programming skills and analytical thinking
              to create efficient solutions and drive technological excellence.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Education */}
        <Card className="bg-gray-900/80 border-red-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-white">Bachelor of Computer Science</h4>
              <p className="text-gray-400">Graphic Era Hill University</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <Calendar className="w-4 h-4" />
                <span>2022 - Present</span>
              </div>
              <p className="text-gray-300 mt-2">
                Specializing in software engineering and web development with focus on modern programming languages and
                frameworks.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-white">Higher Secondary Education</h4>
              <p className="text-gray-400">Raja Ram Mohan Roy Academy</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <Calendar className="w-4 h-4" />
                <span>2015 - 2022</span>
              </div>
              <p className="text-gray-300 mt-2">Science stream with Mathematics, Physics, and Computer Science.</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <Card className="bg-gray-900/80 border-red-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-400">krishnas2304@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-gray-400">(+91) 86309 42033</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-gray-400">Dehradun, Uttarakhand, India</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h4 className="font-medium text-white mb-2">Social Links</h4>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/krishna-sharma-3a9320271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-blue-500 text-blue-400 border px-3 py-1 rounded hover:bg-blue-500/10 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SharmaTechie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-gray-500 text-gray-400 border px-3 py-1 rounded hover:bg-gray-500/10 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
