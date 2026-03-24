import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, Edit2, Eye, Archive } from "lucide-react";

const InventoryTable = ({ vehicles, onRowClick }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "Reserved":
        return "bg-amber-100 text-amber-700";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      case "Sold":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="px-6 pb-20 relative h-full">
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Mileage
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <motion.tbody layout className="divide-y divide-gray-100">
              <AnimatePresence>
                {vehicles.map((car) => (
                  <motion.tr
                    key={car.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                    onClick={() => onRowClick(car)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden mr-3 border border-gray-200">
                          <img
                            src={car.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <div className="w-4 h-4 rounded px-0.5 py-0.5 border border-gray-100 bg-white shadow-sm flex items-center justify-center">
                              <img
                                src={car.logo}
                                alt={car.brand}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="text-sm font-bold text-gray-900">
                              {car.brand} {car.model}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {car.year} Model
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600 font-medium">
                        {car.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(car.status)}`}
                      >
                        {car.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {car.mileage.toLocaleString()} mi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {formatPrice(car.price)}
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() =>
                          setActiveMenu(activeMenu === car.id ? null : car.id)
                        }
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <MoreVertical size={18} />
                      </button>

                      <AnimatePresence>
                        {activeMenu === car.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            className="absolute right-8 top-10 w-40 bg-white shadow-lg rounded-xl border border-gray-100 py-1 z-10"
                            onMouseLeave={() => setActiveMenu(null)}
                          >
                            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                              <Edit2 size={14} className="mr-2 text-gray-400" />{" "}
                              Edit Detail
                            </button>
                            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                              <Eye size={14} className="mr-2 text-gray-400" />{" "}
                              View Public
                            </button>
                            <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left border-t border-gray-100 mt-1">
                              <Archive
                                size={14}
                                className="mr-2 text-red-400"
                              />{" "}
                              Archive
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </motion.tbody>
          </table>
          {vehicles.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No vehicles found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
