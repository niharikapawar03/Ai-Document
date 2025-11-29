"use client"

import { useState } from "react"

const syncTargets = [
  { value: "sheets", label: "Google Sheets" },
  { value: "mysql", label: "MySQL Database" },
  { value: "notion", label: "Notion Database" },
]

const fieldMappings = [
  { extracted: "Invoice Number", sync: "invoice_id" },
  { extracted: "Date", sync: "date" },
  { extracted: "Customer Name", sync: "customer_name" },
  { extracted: "Total Amount", sync: "amount" },
  { extracted: "Status", sync: "status" },
]

export function SyncConfigCard() {
  const [syncTarget, setSyncTarget] = useState("sheets")
  const [isLoading, setIsLoading] = useState(false)

  const handleSync = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: syncTarget, mappings: fieldMappings }),
      })
      if (response.ok) {
        // Handle success
        console.log("Sync successful")
      }
    } catch (error) {
      console.error("Sync error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Sync Target Selection */}
      <div className="bg-card border border-border rounded-lg p-6">
        <label className="block text-sm font-semibold text-foreground mb-4">Sync Destination</label>
        <select
          value={syncTarget}
          onChange={(e) => setSyncTarget(e.target.value)}
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {syncTargets.map((target) => (
            <option key={target.value} value={target.value}>
              {target.label}
            </option>
          ))}
        </select>
      </div>

      {/* Field Mapping */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Field Mapping</h3>
        <div className="space-y-3">
          {fieldMappings.map((mapping, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{mapping.extracted}</p>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{mapping.sync}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sync Button */}
      <button
        onClick={handleSync}
        disabled={isLoading}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-accent-foreground font-semibold py-3 rounded-lg transition-colors"
      >
        {isLoading ? "Syncing..." : "Run Sync"}
      </button>
    </div>
  )
}
