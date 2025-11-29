"use client"

import Link from "next/link"
import { FileUp, Zap, Database, History } from "lucide-react"

const cards = [
  {
    title: "Upload Document",
    description: "Upload a new document for AI extraction",
    icon: FileUp,
    href: "/upload",
    color: "from-accent to-accent/60",
  },
  {
    title: "Extract Data",
    description: "Process and extract data from documents",
    icon: Zap,
    href: "/extraction",
    color: "from-chart-2 to-chart-2/60",
  },
  {
    title: "Sync Data",
    description: "Configure and run data synchronization",
    icon: Database,
    href: "/sync",
    color: "from-chart-3 to-chart-3/60",
  },
  {
    title: "View Logs",
    description: "Monitor all extraction and sync activities",
    icon: History,
    href: "/logs",
    color: "from-chart-5 to-chart-5/60",
  },
]

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <Link key={card.href} href={card.href}>
            <div className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all cursor-pointer h-full">
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              ></div>
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} mb-4 flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
