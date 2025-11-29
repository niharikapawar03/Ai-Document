"use client"

import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"
import { UploadZone } from "@/components/upload-zone"

export default function UploadPage() {
  return (
    <div className="dark flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="pt-20 pb-8 px-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground">Upload Document</h2>
              <p className="text-muted-foreground mt-2">Upload a document to extract data using AI</p>
            </div>

            <UploadZone />
          </div>
        </main>
      </div>
    </div>
  )
}
