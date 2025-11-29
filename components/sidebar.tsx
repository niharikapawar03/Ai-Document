"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileUp, BarChart3, Database, LogInIcon as LogsIcon, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Dashboard", icon: BarChart3 },
  { href: "/upload", label: "Upload", icon: FileUp },
  { href: "/extraction", label: "Extraction", icon: Database },
  { href: "/sync", label: "Sync", icon: Database },
  { href: "/logs", label: "Logs", icon: LogsIcon },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground flex flex-col">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
            <span className="text-white font-bold text-sm">IS</span>
          </div>
          <div className="flex-1">
            <h1 className="text-sm font-bold text-sidebar-foreground">InsightSync</h1>
            <p className="text-xs text-muted-foreground">AI Extraction</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/10",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border px-4 py-6">
        <Link href="/settings">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/10 transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </Link>
      </div>
    </aside>
  )
}
