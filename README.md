# AutoFlow Pro - Automobile Dealership Dashboard

AutoFlow Pro (Auto Mobile Portal) is a high-fidelity React frontend component dashboard built for automobile dealership inventory management. It features a smart filtering system, an interactive inventory management table with status indicators and quick actions, and a sales analytics overview with dynamic counters and charts.

The application incorporates a sleek, modern visual aesthetic adhering to Google Antigravity style guidelines, utilizing Framer Motion for animations and a seamless slide-out drawer for detailed vehicle views.

## 🚀 Key Features

- **Smart Filtering System**: Effortlessly search and categorize the vehicle inventory with realtime dynamic filters.
- **Inventory Management Table**: Interactive table equipped with status indicators, fast sorting, and quick action abilities.
- **Sales Analytics Overview**: Comprehensive analytics page including dynamic count-up statistics and beautiful chart visualizations powered by Recharts.
- **Detailed Car View Drawer**: A smooth slide-out drawer utilizing Framer Motion to visualize detailed car history, specs, and status without leaving the primary page.
- **Responsive Layout**: A sidebar and top navigation layout strictly ensuring seamless transitions and functionality from mobile devices to desktop monitors.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Visualizations**: [Recharts](https://recharts.org/) & [React-CountUp](https://www.npmjs.com/package/react-countup)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/) (installed with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd "Auto Mobile Portal"
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

## 📁 Key Project Structure

```text
src/
├── components/
│   ├── Sidebar.jsx              # Application global sidebar
│   ├── TopNav.jsx               # Application top navigation
│   ├── FilterBar.jsx            # Dynamic category filtering
│   ├── InventoryTable.jsx       # Vehicle management interface
│   ├── CarDrawer.jsx            # Slide-out detailed view for vehicles
│   ├── StatsOverview.jsx        # Data counters and charts
│   ├── ExplorePage.jsx          # Under-development module
│   ├── CustomersPage.jsx        # Under-development module
│   └── SettingsPage.jsx         # Under-development module
├── App.jsx                      # Main layout container & application state
├── data.js                      # Mock dealership database
├── main.jsx                     # Application entry point
└── index.css                    # Global Tailwind CSS configurations
```

---

_Note: This project is an advanced frontend layout, demonstrating premier responsive layout structures and highly interactive component architectures._
