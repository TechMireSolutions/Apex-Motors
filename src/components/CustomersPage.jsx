import React, { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  Edit2,
  Trash2,
} from "lucide-react";

const initialCustomers = [
  {
    id: 1,
    name: "Alexander Wright",
    email: "alex.w@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    lifetimeValue: "$185,000",
    lastContact: "2 days ago",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    email: "s.jenkins@corp.net",
    phone: "+1 (555) 987-6543",
    status: "Hot Lead",
    lifetimeValue: "$0",
    lastContact: "Today",
  },
  {
    id: 3,
    name: "Marcus Thompson",
    email: "m.thompson@gmail.com",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    lifetimeValue: "$65,000",
    lastContact: "6 months ago",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    email: "erodriguez@business.co",
    phone: "+1 (555) 234-5678",
    status: "Active",
    lifetimeValue: "$340,000",
    lastContact: "1 week ago",
  },
  {
    id: 5,
    name: "David Chen",
    email: "david.chen@startup.io",
    phone: "+1 (555) 876-5432",
    status: "Hot Lead",
    lifetimeValue: "$0",
    lastContact: "Yesterday",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    email: "jtaylor@outlook.com",
    phone: "+1 (555) 345-6789",
    status: "Active",
    lifetimeValue: "$89,990",
    lastContact: "1 month ago",
  },
];

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = initialCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mt-6 px-2 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Customer Management
          </h2>
          <p className="text-gray-500">
            Manage your leads, active clients, and view purchase histories.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search customers by name or email..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Showing {filteredCustomers.length} clients
          </div>
        </div>

        {/* Customers Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-semibold">Client Name</th>
                <th className="p-4 font-semibold">Contact Info</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Lifetime Value</th>
                <th className="p-4 font-semibold">Last Contact</th>
                <th className="p-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="font-bold text-gray-900">
                        {customer.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center text-sm text-gray-900 mb-1">
                        <Mail size={14} className="mr-1.5 text-gray-400" />{" "}
                        {customer.email}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Phone size={14} className="mr-1.5 text-gray-400" />{" "}
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        customer.status === "Active"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : customer.status === "Hot Lead"
                            ? "bg-orange-50 text-orange-700 border border-orange-200"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-gray-900">
                    {customer.lifetimeValue}
                  </td>
                  <td className="p-4 text-sm text-gray-500">
                    {customer.lastContact}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500">
                    No customers found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
