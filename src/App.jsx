import React, { useState, useMemo } from "react";
import { Compass, Users, Settings } from "lucide-react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import StatsOverview from "./components/StatsOverview";
import FilterBar from "./components/FilterBar";
import InventoryTable from "./components/InventoryTable";
import CarDrawer from "./components/CarDrawer";
import ExplorePage from "./components/ExplorePage";
import CustomersPage from "./components/CustomersPage";
import SettingsPage from "./components/SettingsPage";
import { mockInventory } from "./data";

const PlaceholderPage = ({ title, icon: Icon, description }) => (
  <div className="flex flex-col items-center justify-center py-24 text-gray-400">
    <Icon size={48} className="mb-4 text-gray-300" />
    <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
    <p>{description || "This module is currently under development."}</p>
  </div>
);

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter Logic
  const filteredVehicles = useMemo(() => {
    return mockInventory.filter((car) => {
      const matchSearch =
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory =
        activeCategory === "All" ? true : car.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <StatsOverview />
            <div className="px-6 mb-4 mt-6 flex justify-between items-end">
              <h3 className="text-lg font-bold text-gray-900">
                Recent Inventory
              </h3>
              <button
                onClick={() => setActivePage("Inventory")}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                View All
              </button>
            </div>
            <InventoryTable
              vehicles={filteredVehicles.slice(0, 5)}
              onRowClick={(car) => setSelectedCar(car)}
            />
          </>
        );
      case "Inventory":
        return (
          <div className="mt-8">
            <FilterBar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              totalResults={filteredVehicles.length}
            />
            <InventoryTable
              vehicles={filteredVehicles}
              onRowClick={(car) => setSelectedCar(car)}
            />
          </div>
        );
      case "Explore":
        return <ExplorePage />;
      case "Customers":
        return <CustomersPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative text-gray-800 antialiased selection:bg-blue-200">
      {/* Fixed Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Layout Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative w-full overflow-x-hidden transition-all duration-300">
        {/* Fixed Topbar */}
        <TopNav
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        {/* Scrollable Main Content */}
        <main className="flex-1 pb-12 w-full max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>

      {/* Slide-out Drawer */}
      <CarDrawer
        car={selectedCar}
        isOpen={!!selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </div>
  );
}

export default App;
