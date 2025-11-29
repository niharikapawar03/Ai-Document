"use client"

import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"
import { ExtractionTable } from "@/components/extraction-table"

export default function ExtractionPage() {
  return (
    <div className="dark flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="pt-20 pb-8 px-8">
          <div className="max-w-6xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground">Extraction Results</h2>
              <p className="text-muted-foreground mt-2">Review extracted data and proceed to sync</p>
            </div>

            <ExtractionTable />
          </div>
        </main>
      </div>
    </div>
  )
}
