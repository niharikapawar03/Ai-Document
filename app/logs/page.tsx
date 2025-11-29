"use client"

import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"
import { LogsTable } from "@/components/logs-table"

export default function LogsPage() {
  return (
    <div className="dark flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="pt-20 pb-8 px-8">
          <div className="max-w-6xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground">Activity Logs</h2>
              <p className="text-muted-foreground mt-2">Monitor all extractions and syncs</p>
            </div>

            <LogsTable />
          </div>
        </main>
      </div>
    </div>
  )
}
