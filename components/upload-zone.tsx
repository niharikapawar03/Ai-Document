"use client"

import type React from "react"

import { useState } from "react"
import { FileUp, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function UploadZone() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) setFile(droppedFile)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) setFile(selectedFile)
  }

  const handleExtract = async () => {
    if (!file) return
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const response = await fetch("/api/extract", { method: "POST", body: formData })
      if (response.ok) {
        router.push("/extraction")
      }
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Upload Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-12 transition-colors ${
          isDragging ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/50"
        }`}
      >
        <input
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          id="file-input"
          accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg"
        />
        <label htmlFor="file-input" className="flex flex-col items-center justify-center cursor-pointer">
          <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            <FileUp className="w-8 h-8 text-accent" />
          </div>
          <p className="text-lg font-semibold text-foreground">{file ? file.name : "Drop your document here"}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {file ? "Ready to extract" : "or click to select (PDF, DOCX, XLSX, PNG, JPG)"}
          </p>
        </label>
      </div>

      {/* File Preview */}
      {file && (
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <CheckCircle2 className="w-6 h-6 text-chart-2" />
          </div>
        </div>
      )}

      {/* Extract Button */}
      {file && (
        <button
          onClick={handleExtract}
          disabled={isLoading}
          className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-accent-foreground font-semibold py-3 rounded-lg transition-colors"
        >
          {isLoading ? "Extracting..." : "Extract with AI"}
        </button>
      )}
    </div>
  )
}
