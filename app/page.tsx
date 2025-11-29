"use client"

import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"
import { DashboardCards } from "@/components/dashboard-cards"
import { StatsCards } from "@/components/stats-cards"

export default function DashboardPage() {
  return (
    <div className="dark flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="pt-20 pb-8 px-8">
          {/* Stats Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <StatsCards />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
            <DashboardCards />
          </div>

          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Recent Documents</h3>
            <div className="text-muted-foreground text-sm">
              No documents yet. Start by uploading a document to begin extraction.
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
