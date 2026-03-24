import React, { useState } from "react";
import { User, Bell, Shield, Building, Globe, Save } from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    { id: "Profile", icon: User },
    { id: "Dealership", icon: Building },
    { id: "Notifications", icon: Bell },
    { id: "Security", icon: Shield },
  ];

  return (
    <div className="mt-6 px-2 md:px-0 max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
        <p className="text-gray-500">
          Manage your account preferences and dealership information.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[500px]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 border-r border-gray-200 bg-gray-50 p-4 shrink-0">
          <nav className="flex flex-col gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-sm w-full text-left ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon size={18} />
                  {tab.id}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-8">
          {activeTab === "Profile" && (
            <div className="max-w-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">
                Personal Information
              </h3>

              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-2xl">
                  JP
                </div>
                <div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 mb-2 transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-xs text-gray-500">
                    JPG, GIF or PNG. Max size 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Patterson"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="j.patterson@apexmotors.co"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 000-1234"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm">
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "Dealership" && (
            <div className="max-w-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">
                Dealership Details
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Apex Motors HQ"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    defaultValue="123 Innovation Drive"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      defaultValue="Metro City"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      defaultValue="90210"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm">
                  Update Dealership
                </button>
              </div>
            </div>
          )}

          {(activeTab === "Notifications" || activeTab === "Security") && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <Globe size={48} className="mb-4 text-gray-300" />
              <p className="text-lg">
                This section is currently under construction.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
