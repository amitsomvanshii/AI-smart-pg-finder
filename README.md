# Smart PG Finder

**Smart PG Finder** is an end-to-end ecosystem designed to revolutionize the way students and working professionals find, book, and live in Paying Guest (PG) accommodations. Unlike traditional listing sites, it bridges the gap between discovery and daily management by offering features like digital check-ins, automated rent tracking, maintenance requests, and even social lifestyle matching for roommates.

## 🚀 Features

- **Multi-Role Support:** Dedicated dashboards for Students, Owners, and Admins.
- **Smart Discovery:** Search and filter PGs by city, state, rent, and facilities.
- **Lifestyle Matching:** ML-powered matching based on habits (sleep, cleanliness, etc.).
- **Digital Booking:** Seamless booking process with Aadhar verification and digital check-ins.
- **Finance Management:** Automated rent tracking, payment confirmation, and expense splitting.
- **Real-time Chat:** Direct messaging between tenants and owners.
- **Maintenance Hub:** Ticketing system for maintenance issues (Plumbing, WiFi, etc.).

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, TypeScript, Express.js
- **Database:** PostgreSQL with Prisma ORM
- **ML Service:** Python, FastAPI
- **Real-time:** Socket.io
- **Mailing:** Nodemailer (OTP & Alerts)

## 📁 Project Structure

- `frontend/`: React application for the user interface.
- `backend/`: Node.js server handling business logic and API.
- `ml-service/`: Python service for intelligent matching and recommendations.

## 🏁 Getting Started

### Prerequisites

- Node.js & npm
- Python 3.x
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   npx prisma generate
   npm run dev
   ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Setup ML Service:**
   ```bash
   cd ../ml-service
   # Create and activate venv
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   python main.py
   ```

---
Developed with ❤️ by Amit Singh.
