import { Home, FolderOpen, Calendar, Video, User, Trophy, Flag } from "lucide-react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Weekly Sessions",
    url: "/weekly",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-red-800/30">
      <SidebarHeader className="border-b border-red-800/30 bg-gradient-to-r from-red-950 to-gray-900">
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full">
            <Flag className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">E Portfolio</h2>
            <p className="text-xs text-red-200">Racing to Excellence</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-gray-900 to-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-red-400 font-semibold">
            <Trophy className="w-4 h-4 mr-2" />
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-red-900/50 text-gray-200 hover:text-white">
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-red-800/30 bg-gradient-to-r from-gray-900 to-red-950">
        <div className="flex items-center gap-2 px-2 py-4">
          <User className="w-4 h-4 text-red-400" />
          <span className="text-sm text-gray-300">Practical Exams 2025</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
