"use client"

import { BarChart3, CheckCircle2, AlertCircle } from "lucide-react"

const stats = [
  {
    label: "Documents Uploaded",
    value: "24",
    change: "+12%",
    icon: BarChart3,
    color: "accent",
  },
  {
    label: "Sync Success Rate",
    value: "98.5%",
    change: "+2.3%",
    icon: CheckCircle2,
    color: "chart-2",
  },
  {
    label: "Errors",
    value: "2",
    change: "-1%",
    icon: AlertCircle,
    color: "destructive",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-card-foreground mt-2">{stat.value}</p>
                <p className="text-xs text-chart-2 mt-2">{stat.change} from last week</p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                <Icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
