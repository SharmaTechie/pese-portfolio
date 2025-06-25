import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Target, TrendingUp } from "lucide-react"

const weeklyData = [
  {
    week: 1,
    title: "Introduction to PESE",
    date: "2025-02-13",
    topics: ["Self-Assessment", "Career Planning", "Goal Setting", "SWOT Analysis"],
    description:
      "This week marked the beginning of my career development journey. We started with comprehensive self-assessment exercises to understand our strengths, weaknesses, and interests. Learning about career planning frameworks was eye-opening - it helped me realize the importance of structured goal setting. The SWOT analysis exercise was particularly insightful as it made me reflect deeply on my personal and professional attributes. I discovered new aspects about myself and gained clarity on potential career paths.",
    achievements: ["Completed personality assessment", "Identified core strengths", "Set SMART career goals"],
    status: "Completed",
  },
  {
    week: 2,
    title: "SMART GOALS",
    date: "2025-02-20",
    topics: ["Goal Structuring", "Measurable Milestones", "Time Management", "Accountability"],
    description:
      "This week emphasized the importance of setting clear and achievable goals using the SMART framework. We learned how to structure goals that are Specific, Measurable, Achievable, Relevant, and Time-bound. Exercises in time management and prioritization helped me break down long-term goals into manageable steps. Discussions around accountability and motivation strategies taught me how to stay committed to personal development plans.",
    achievements: ["Defined short and long-term SMART goals", "Improved time management", "Created goal tracking plan"],
    status: "Completed",
  },
  {
    week: 3,
    title: "Resume Building & Personal Branding",
    date: "2025-02-27",
    topics: ["Resume Writing", "Cover Letters", "LinkedIn Optimization", "Personal Brand"],
    description:
      "This week was all about creating a strong professional presence. Learning the art of resume writing was challenging but rewarding - understanding how to highlight achievements and tailor content for specific roles. Cover letter writing taught me storytelling techniques to connect my experiences with job requirements. LinkedIn optimization sessions were incredibly valuable for building an online professional presence. Developing my personal brand helped me understand how to present myself consistently across platforms.",
    achievements: ["Created professional resume", "Optimized LinkedIn profile", "Developed personal brand"],
    status: "Completed",
  },
  {
    week: 4,
    title: "Extempore",
    date: "2025-03-06",
    topics: ["Impromptu Speaking", "Thinking on Your Feet", "Public Speaking", "Confidence Building"],
    description:
      "This week focused on extempore speaking exercises that improved my ability to think on the spot and communicate effectively. We engaged in various speaking drills on random topics, which helped me structure my thoughts quickly and speak with clarity. Feedback sessions highlighted areas like voice modulation, clarity, and poise. This experience greatly enhanced my confidence in public speaking situations.",
    achievements: ["Improved impromptu speaking", "Gained confidence on stage", "Received feedback for growth"],
    status: "Completed",
  },
  {
    week: 5,
    title: "Leadership Qualities",
    date: "2025-03-13",
    topics: ["Leadership Styles", "Team Dynamics", "Conflict Resolution", "Project Management"],
    description:
      "Leadership week opened my eyes to different leadership styles and their applications. Understanding team dynamics and how to work effectively in diverse groups was enlightening. Conflict resolution techniques taught me how to handle disagreements professionally and constructively. Project management fundamentals provided a framework for organizing and executing tasks efficiently. The group activities and role-playing exercises made the learning experience interactive and practical.",
    achievements: ["Identified leadership style", "Led team project", "Resolved group conflicts"],
    status: "Completed",
  },
  {
    week: 6,
    title: "PESE Mid Term Examinations",
    date: "2025-03-20",
    topics: ["Review of Previous Modules", "Case Studies", "Applied Skills Assessment", "Presentation Evaluation"],
    description:
      "This week was focused on consolidating our learning through practical assessments. We participated in written tests, case studies, and presentations that tested our grasp on communication, personal branding, goal setting, and leadership. It was an intense but rewarding experience to apply the knowledge gained in real-life scenarios. Peer reviews and instructor feedback helped identify both strengths and growth areas.",
    achievements: ["Completed midterm assessments", "Presented group project", "Received constructive feedback"],
    status: "Completed",
  },
  {
    week: 7,
    title: "Industry Insights & Career Exploration",
    date: "2025-04-03",
    topics: ["Emerging Careers", "Industry Trends", "Job Market Research", "Skill Alignment"],
    description:
      "We explored a variety of industries to understand current job market trends and opportunities. Sessions focused on how to research industries, assess skill requirements, and plan accordingly. I discovered new fields that align with my interests and learned how to tailor my career path to match market demands. Guest lectures from professionals provided real-world perspectives on different career journeys.",
    achievements: ["Explored multiple industries", "Mapped interests to job roles", "Analyzed job market trends"],
    status: "Completed",
  },
  {
    week: 8,
    title: "Shark Tank (Presenting our Product)",
    date: "2025-04-17",
    topics: ["Entrepreneurship", "Pitching Ideas", "Product Development", "Market Strategy"],
    description:
      "This was an exciting and competitive week where we formed teams to create a product and pitch it in a Shark Tank-style presentation. We applied business planning, design thinking, and communication skills to develop a viable concept. The final presentations tested our ability to articulate value propositions, handle tough questions, and collaborate under pressure.",
    achievements: ["Built a mock startup", "Delivered product pitch", "Practiced business storytelling"],
    status: "Completed",
  },
  {
    week: 9,
    title: "Group Discussion Part 1",
    date: "2025-04-24",
    topics: ["GD Etiquette", "Critical Thinking", "Team Communication", "Persuasive Speaking"],
    description:
      "We began preparing for group discussions by learning how to engage in structured debates and express opinions effectively. This week focused on critical thinking and collaboration—how to build on others’ ideas, remain respectful, and persuade with logic. Practice sessions involved diverse topics and required strategic communication.",
    achievements: ["Participated in mock GDs", "Improved argument structure", "Practiced respectful debate"],
    status: "Completed",
  },
  {
    week: 10,
    title: "Group Discussion Part 2",
    date: "2025-05-08",
    topics: ["Advanced GD Techniques", "Leadership in Groups", "Time Management", "Real-time Evaluation"],
    description:
      "Building on the previous week, this session emphasized handling pressure during GDs, managing time, and demonstrating leadership. We practiced strategies like redirecting discussions, summarizing points, and encouraging quieter members. The feedback from peers and evaluators helped sharpen our approach for real-world discussions.",
    achievements: ["Demonstrated leadership in GD", "Handled critical topics", "Received evaluator feedback"],
    status: "Completed",
  },
  {
    week: 11,
    title: "Interview Planning",
    date: "2025-05-15",
    topics: ["Interview Research", "Behavioral Questions", "Interview Etiquette", "Follow-up Strategies"],
    description:
      "This week focused on preparing for job interviews. We learned how to research companies, anticipate behavioral questions, and practice answers using frameworks like STAR. Sessions also covered pre-interview preparation, professional etiquette, and post-interview follow-ups. Mock interviews with feedback helped refine delivery and content.",
    achievements: ["Prepared interview toolkit", "Practiced STAR responses", "Built follow-up email templates"],
    status: "In Progress",
  },
  {
    week: 12,
    title: "Last Insights on Personal Development",
    date: "2025-05-22",
    topics: ["Self-Reflection", "Growth Mindset", "Long-term Vision", "Lifelong Learning"],
    description:
      "In this final week, we reflected on our growth throughout the program. We evaluated our progress, discussed long-term personal and professional goals, and explored how to maintain momentum through continuous learning. Journaling exercises and vision board creation helped visualize the future and reinforce the importance of self-improvement.",
    achievements: ["Completed personal growth reflection", "Created vision board", "Set learning goals for future"],
    status: "In Progress",
  }
];


export default function WeeklyPage() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <SidebarTrigger className="text-white hover:bg-red-900/50 transition-colors" />
        <div>
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <Calendar className="w-10 h-10 text-red-500" />
            Career Skills Journey
          </h1>
          <p className="text-gray-400 mt-2">Weekly sessions documenting my professional development</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {weeklyData.map((week, index) => (
          <Card
            key={week.week}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 border-red-800/50 backdrop-blur-sm hover:border-red-600/70 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.02]"
          >
            <CardHeader className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <CardTitle className="text-white flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{week.week}</span>
                    </div>
                    {week.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(week.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <Badge
                  variant={week.status === "Completed" ? "default" : "secondary"}
                  className={`${
                    week.status === "Completed"
                      ? "bg-gradient-to-r from-green-600 to-green-700 shadow-lg shadow-green-500/30"
                      : "bg-gradient-to-r from-yellow-600 to-yellow-700 shadow-lg shadow-yellow-500/30"
                  } border-0 text-white font-semibold`}
                >
                  {week.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5" />
                  Topics Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {week.topics.map((topic, topicIndex) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className={`border-blue-500 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors ${
                        topicIndex % 2 === 0
                          ? "hover:border-blue-400"
                          : "hover:border-cyan-400 border-cyan-500 text-cyan-400"
                      }`}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5" />
                  Week's Journey
                </h4>
                <p className="text-gray-300 leading-relaxed text-justify">{week.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5" />
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {week.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-600/30 rounded-lg p-3 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
