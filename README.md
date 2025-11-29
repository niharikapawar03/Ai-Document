InsightSync AI
AI-powered document extraction, validation & automated data syncing

InsightSync AI is a modern full-stack platform that uses AI to extract structured information from documents (PDFs, invoices, images, forms) and automatically syncs the cleaned data into external systems like Google Sheets, Notion, MySQL, CRMs, ERPs, etc.

It combines AI processing + automation workflows to solve real-world business challenges in data entry, logistics, finance, and operations.
✨ Features
🔹 AI Document Extraction

Upload PDFs, images, or text files and extract structured data like:

Names, dates, addresses

Invoice numbers

Table data

Amounts, totals, taxes

Line items

🔹 Smart Field Mapping

Map extracted fields to destinations:

Google Sheets

MySQL database

Notion

REST APIs

🔹 Automation Engine

Rules-based processing:

“If amount > ₹5000 → raise alert”

“If due date passed → notify user”

“If customer missing → mark as error”

🔹 Sync Anywhere

Send processed data automatically using integrations:

Sheets API

SQL queries

Notion API

Custom Webhooks

🔹 Beautiful UI (V0 + Tailwind)

Includes:

Dashboard

Upload page

Extraction results

Field mapping page

Logs page

🧠 Tech Stack
Frontend

React + TypeScript

V0 UI Framework

Tailwind CSS

Lucide Icons

Fetch API

Drag-and-drop uploader

Backend

Python FastAPI

OpenAI API

Pydantic

Uvicorn

File processing (PDF/Image)

Integrations

Google Sheets API

MySQL

Notion

Custom API Webhooks

📁 Folder Structure
InsightSyncAI/
│── frontend/               
│   ├── app/
│   │   ├── dashboard.tsx
│   │   ├── upload.tsx
│   │   ├── extract.tsx
│   │   ├── sync.tsx
│   │   ├── logs.tsx
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── UploadCard.tsx
│   │   ├── ExtractionTable.tsx
│   │   ├── SyncConfigCard.tsx
│   ├── utils/
│   │   └── api.ts
│   └── styles/
│       └── globals.css
│
│── backend/
│   ├── main.py
│   ├── extract.py
│   ├── sync.py
│   ├── requirements.txt
│   └── .env
│
└── README.md

⚙️ Backend Setup (FastAPI)
1️⃣ Install dependencies
pip install fastapi uvicorn openai python-dotenv Pillow PyMuPDF

2️⃣ Create .env
OPENAI_API_KEY=your_key_here

3️⃣ Start backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000


API URL:

http://localhost:8000

🔌 API Endpoints
POST /extract

Extract structured data from uploaded file.

Request (form-data):

file: PDF/Image

Response:
{
  "data": {
    "invoice_id": "INV-2345",
    "date": "2024-11-12",
    "total": "₹5600",
    "items": [...]
  }
}

POST /sync

Sync extracted data to various targets.

Request:
{
  "data": { ... },
  "target": "sheets"
}

Response:
{
  "status": "Data synced to Google Sheets successfully"
}

🌐 Frontend Setup
1️⃣ Install dependencies
npm install

2️⃣ Create frontend environment file

.env.local

VITE_API_BASE_URL=http://localhost:8000

3️⃣ Run frontend
npm run dev


Runs on:

http://localhost:5173

Upload document UI

Extraction results table

Sync configuration UI

Logs table

🚀 Deployment
Frontend → Vercel

Push to GitHub

Import repo

Add env: VITE_API_BASE_URL

Backend → Render / Railway / AWS

Start command:

uvicorn main:app --host 0.0.0.0 --port 10000


Add env:

OPENAI_API_KEY

🧩 Future Enhancements

Auto-detect document type

OCR improvement

Multi-file batch uploads

Background job processing

Email → document ingestion

Admin authentication

🫶 Author

Niharika Pawar
AI Developer • Automation Engineer • React + Python Full-Stack
