"use client"

import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"
import { SyncConfigCard } from "@/components/sync-config-card"

export default function SyncPage() {
  return (
    <div className="dark flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="pt-20 pb-8 px-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground">Configure Sync</h2>
              <p className="text-muted-foreground mt-2">Map fields and configure sync destination</p>
            </div>

            <SyncConfigCard />
          </div>
        </main>
      </div>
    </div>
  )
}
