"use client"

import { Bell, User } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-8 z-40">
      <div className="text-foreground">
        <h1 className="text-lg font-semibold">AI Document Processing</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </button>
        <button className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}
