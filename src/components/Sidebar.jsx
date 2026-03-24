import React from "react";
import { Home, Compass, Car, Users, Settings, LogOut, X } from "lucide-react";

const Sidebar = ({ activePage, setActivePage, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`w-64 h-screen fixed left-0 top-0 bg-white border-r border-[#e0e0e0] flex flex-col justify-between py-6 transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col items-start w-full px-6">
          {/* Logo Section */}
          <div className="flex items-center justify-between gap-3 mb-10 w-full cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 relative">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="apexGrad1"
                      x1="18"
                      y1="2"
                      x2="18"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1E3A8A" />
                      <stop offset="1" stopColor="#2563EB" />
                    </linearGradient>
                    <linearGradient
                      id="apexGrad2"
                      x1="18"
                      y1="18"
                      x2="18"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M18 2L2 30H10L18 16L26 30H34L18 2Z"
                    fill="url(#apexGrad1)"
                  />
                  <path d="M18 18L11 30H25L18 18Z" fill="url(#apexGrad2)" />
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Apex<span className="text-blue-600">Motors</span>
              </h1>
            </div>

            {/* Close button for mobile inside sidebar header */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 w-full">
            <NavItem
              icon={<Home />}
              label="Dashboard"
              active={activePage === "Dashboard"}
              onClick={() => {
                setActivePage("Dashboard");
                onClose && onClose();
              }}
            />
            <NavItem
              icon={<Compass />}
              label="Explore"
              active={activePage === "Explore"}
              onClick={() => {
                setActivePage("Explore");
                onClose && onClose();
              }}
            />
            <NavItem
              icon={<Car />}
              label="Inventory"
              active={activePage === "Inventory"}
              onClick={() => {
                setActivePage("Inventory");
                onClose && onClose();
              }}
            />
            <NavItem
              icon={<Users />}
              label="Customers"
              active={activePage === "Customers"}
              onClick={() => {
                setActivePage("Customers");
                onClose && onClose();
              }}
            />
          </nav>
        </div>

        <div className="flex flex-col gap-2 w-full px-6">
          <NavItem
            icon={<Settings />}
            label="Settings"
            active={activePage === "Settings"}
            onClick={() => {
              setActivePage("Settings");
              onClose && onClose();
            }}
          />
          <NavItem
            icon={<LogOut />}
            label="Log Out"
            className="text-red-500 hover:bg-red-50 hover:text-red-600"
          />
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, label, active, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start w-full p-3 rounded-2xl transition-all duration-200 group ${
        active
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
      } ${className}`}
    >
      <div
        className={`${active ? "text-blue-600" : "text-gray-500 group-hover:text-gray-900"} transition-colors`}
      >
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <span className="block ml-4 text-[15px]">{label}</span>
    </button>
  );
};

export default Sidebar;
