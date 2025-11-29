"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

const extractedData = [
  { key: "Invoice Number", value: "INV-2024-001" },
  { key: "Date", value: "2024-11-29" },
  { key: "Customer Name", value: "Acme Corporation" },
  { key: "Total Amount", value: "$5,240.00" },
  { key: "Status", value: "Paid" },
  { key: "Due Date", value: "2024-12-29" },
]

export function ExtractionTable() {
  return (
    <div className="space-y-6">
      {/* Data Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Field</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Value</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {extractedData.map((row, idx) => (
              <tr key={idx} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 text-sm text-foreground font-medium">{row.key}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{row.value}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-block px-3 py-1 rounded-full bg-chart-2/20 text-chart-2 text-xs font-medium">
                    99%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sync Button */}
      <Link href="/sync">
        <button className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-colors">
          Proceed to Sync <ChevronRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  )
}
