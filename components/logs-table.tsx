"use client"

import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

const logs = [
  {
    id: 1,
    document: "invoice_q4_2024.pdf",
    fields: 6,
    status: "completed",
    target: "Google Sheets",
    timestamp: "2024-11-29 14:32:00",
  },
  {
    id: 2,
    document: "receipt_001.jpg",
    fields: 4,
    status: "completed",
    target: "MySQL",
    timestamp: "2024-11-29 13:15:00",
  },
  {
    id: 3,
    document: "contract_draft.docx",
    fields: 12,
    status: "in_progress",
    target: "Notion",
    timestamp: "2024-11-29 12:45:00",
  },
  {
    id: 4,
    document: "form_submission.pdf",
    fields: 8,
    status: "failed",
    target: "Google Sheets",
    timestamp: "2024-11-29 11:20:00",
  },
]

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-chart-2", bg: "bg-chart-2/20" },
  in_progress: { icon: Clock, color: "text-chart-4", bg: "bg-chart-4/20" },
  failed: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/20" },
}

export function LogsTable() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted border-b border-border">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Document</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Fields</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Sync Target</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Timestamp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {logs.map((log) => {
            const config = statusConfig[log.status as keyof typeof statusConfig]
            const StatusIcon = config.icon
            return (
              <tr key={log.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 text-sm text-foreground font-medium">{log.document}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{log.fields} fields</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{log.target}</td>
                <td className="px-6 py-4 text-sm">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${config.bg}`}>
                    <StatusIcon className={`w-4 h-4 ${config.color}`} />
                    <span className={`text-xs font-medium ${config.color}`}>
                      {log.status === "completed"
                        ? "Completed"
                        : log.status === "in_progress"
                          ? "In Progress"
                          : "Failed"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{log.timestamp}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
