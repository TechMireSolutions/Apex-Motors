# PulseLine - Digital Healthcare Core

PulseLine is a modern, high-fidelity Doctor-Patient Interaction System built with **React 19**, **Vite**, and **Tailwind CSS**. It provides a seamless, professional experience for both healthcare providers and patients through a dual-view dashboard.

## 🚀 Key Features

### 👤 Patient Experience

- **Smart Dashboard**: Overview of upcoming visits and medical status.
- **Appointment Management**: Interactive calendar to find availability and book appointments.
- **Easy Check-in**: Streamlined digital check-in process for upcoming visits.
- **Secure Records & Inbox**: Dedicated sections for medical records and secure communication with providers.

### 🩺 Doctor Experience

- **Daily Roster**: Comprehensive schedule of all appointments for the day.
- **Patient Search**: Quickly find patient charts by name or Provider ID (MRN).
- **Encounter Management**: Update patient status (Waiting, In Progress, Scheduled) and open clinical charts.
- **KPI Analytics**: Real-time tracking of roster capacity, waiting count, and pending lab reviews.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/) (installed with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd doctor-dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📁 Project Structure

```text
src/
├── components/
│   ├── PatientView.jsx   # Dashboard and tools for patients
│   └── DoctorView.jsx    # Professional interface for healthcare providers
├── App.jsx               # Main container with view switching logic
├── main.jsx              # Entry point
└── index.css             # Global styles and Tailwind directives
```

---

_Note: This project was developed as a high-end UI/UX demonstration of modern healthcare software._
