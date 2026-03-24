import React from "react";
import {
  TrendingUp,
  Zap,
  Star,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const marketData = [
  { month: "Jan", evSales: 120, luxurySales: 80, suvSales: 150 },
  { month: "Feb", evSales: 135, luxurySales: 85, suvSales: 140 },
  { month: "Mar", evSales: 160, luxurySales: 90, suvSales: 145 },
  { month: "Apr", evSales: 190, luxurySales: 95, suvSales: 155 },
  { month: "May", evSales: 210, luxurySales: 110, suvSales: 160 },
  { month: "Jun", evSales: 250, luxurySales: 125, suvSales: 175 },
];

const trendingCars = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    category: "EV",
    growth: "+12.5%",
    trending: true,
  },
  {
    id: 2,
    name: "Porsche 911 Carrera",
    category: "Luxury",
    growth: "+8.2%",
    trending: true,
  },
  {
    id: 3,
    name: "Rivian R1S",
    category: "EV SUV",
    growth: "+15.3%",
    trending: true,
  },
  {
    id: 4,
    name: "Mercedes G-Class",
    category: "Luxury SUV",
    growth: "-2.1%",
    trending: false,
  },
];

const ExplorePage = () => {
  return (
    <div className="mt-6 px-2 md:px-0">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Market Analytics
        </h2>
        <p className="text-gray-500">
          Track industry trends and regional dealership performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Highlight Cards */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Zap size={24} />
            </div>
            <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight size={16} className="mr-1" />
              18.2%
            </span>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              EV Demand Growth
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">Faster</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Star size={24} />
            </div>
            <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight size={16} className="mr-1" />
              4.1%
            </span>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Luxury Segment Value
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">Stable</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <TrendingUp size={24} />
            </div>
            <span className="flex items-center text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <ArrowDownRight size={16} className="mr-1" />
              1.2%
            </span>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Average Days on Lot
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">42 Days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Category Sales Velocity (YTD)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={marketData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorEv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorLuxury" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  labelStyle={{
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="evSales"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorEv)"
                />
                <Area
                  type="monotone"
                  dataKey="luxurySales"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorLuxury)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trending List */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Trending Models
          </h3>
          <div className="flex flex-col gap-4">
            {trendingCars.map((car) => (
              <div
                key={car.id}
                className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100"
              >
                <div>
                  <p className="font-bold text-gray-900">{car.name}</p>
                  <p className="text-xs text-gray-500">{car.category}</p>
                </div>
                <div
                  className={`px-2 py-1 rounded text-xs font-bold ${car.trending ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  {car.growth}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
