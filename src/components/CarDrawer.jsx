import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, DollarSign, Activity, FileText } from "lucide-react";

const CarDrawer = ({ car, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-900/50 z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl border-l border-gray-100 z-50 overflow-y-auto"
          >
            {car && (
              <div className="pb-10">
                {/* Header Image */}
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white border border-gray-200 p-2 rounded-full text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
                        car.status === "Available"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : car.status === "Reserved"
                            ? "bg-amber-100 text-amber-700 border border-amber-200"
                            : car.status === "In Transit"
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {car.status}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-center p-1">
                      <img
                        src={car.logo}
                        alt={car.brand}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900">
                      {car.brand}
                    </h2>
                  </div>
                  <h3 className="text-xl text-gray-500 font-medium mb-6">
                    {car.model}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <InfoBox
                      icon={<DollarSign size={18} />}
                      label="Price"
                      value={`$${car.price.toLocaleString()}`}
                    />
                    <InfoBox
                      icon={<Activity size={18} />}
                      label="Mileage"
                      value={`${car.mileage.toLocaleString()} mi`}
                    />
                    <InfoBox
                      icon={<Calendar size={18} />}
                      label="Year"
                      value={car.year}
                    />
                    <InfoBox
                      icon={<CarIcon size={18} />}
                      label="Category"
                      value={car.category}
                    />
                  </div>

                  <hr className="border-gray-100 mb-6" />

                  {/* Service History */}
                  <div>
                    <h4 className="flex items-center text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                      <FileText size={16} className="mr-2 text-blue-600" />
                      Service History
                    </h4>

                    {car.serviceHistory && car.serviceHistory.length > 0 ? (
                      <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                        {car.serviceHistory.map((service, idx) => (
                          <li
                            key={idx}
                            className="relative flex items-center justify-between ml-2"
                          >
                            <div className="w-2 h-2 rounded-full border-2 border-white bg-blue-500 absolute -left-1.5 ring-4 ring-white"></div>
                            <div className="ml-6 bg-white border border-gray-200 rounded-xl py-3 px-4 shadow-sm text-sm text-gray-700 w-full z-10">
                              {service}
                              <div className="text-xs text-gray-400 mt-0.5">
                                Verified logged service
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                        No service history recorded yet.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Dummy simple icon
const CarIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const InfoBox = ({ icon, label, value }) => (
  <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
    <div className="text-gray-400 mb-1 flex items-center gap-1 text-xs font-semibold uppercase">
      {icon} {label}
    </div>
    <div className="text-gray-900 font-bold text-lg">{value}</div>
  </div>
);

export default CarDrawer;
