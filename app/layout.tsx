import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Practical Exams",
  description: "Portfolio website for practical exams"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 min-h-screen bg-gradient-to-br from-red-950 via-gray-900 to-black relative overflow-hidden">
            {/* F1 Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-20 w-24 h-24 border-2 border-yellow-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-green-500 rounded-full animate-pulse delay-2000"></div>
              <div className="absolute bottom-32 right-1/3 w-28 h-28 border-2 border-blue-500 rounded-full animate-pulse delay-3000"></div>
            </div>

            {/* Racing stripes */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-red-500 to-transparent transform -skew-x-12"></div>
              <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-yellow-500 to-transparent transform -skew-x-12"></div>
              <div className="absolute top-0 left-3/4 w-2 h-full bg-gradient-to-b from-green-500 to-transparent transform -skew-x-12"></div>
            </div>

            <div className="relative z-10">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
