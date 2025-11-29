// API utilities for connecting to FastAPI backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export const api = {
  // Extract document
  extract: async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    const response = await fetch(`${API_BASE_URL}/api/extract`, {
      method: "POST",
      body: formData,
    })
    return response.json()
  },

  // Sync data to target
  sync: async (target: string, mappings: any[]) => {
    const response = await fetch(`${API_BASE_URL}/api/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target, mappings }),
    })
    return response.json()
  },

  // Get extraction status
  getExtractionStatus: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/extraction/${id}`)
    return response.json()
  },

  // Get logs
  getLogs: async (limit = 50) => {
    const response = await fetch(`${API_BASE_URL}/api/logs?limit=${limit}`)
    return response.json()
  },
}
