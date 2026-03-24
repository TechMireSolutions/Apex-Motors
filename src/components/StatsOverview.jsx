import React from "react";
import ReactCountUp from "react-countup";
const CountUp = ReactCountUp.default || ReactCountUp;
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData, mockStats } from "../data";
import { TrendingUp, CarFront, CheckCircle, Wallet } from "lucide-react";

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 mt-6 px-6">
      {/* Counters Left */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <StatCard
          title="Total Inventory"
          value={mockStats.totalVehicles}
          icon={<CarFront className="text-blue-600" size={24} />}
          prefix=""
          color="bg-blue-50"
        />
        <StatCard
          title="Available Now"
          value={mockStats.available}
          icon={<CheckCircle className="text-green-600" size={24} />}
          prefix=""
          color="bg-green-50"
        />
      </div>

      {/* Counters Right */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <StatCard
          title="Sold This Month"
          value={mockStats.soldThisMonth}
          icon={<TrendingUp className="text-amber-600" size={24} />}
          prefix=""
          color="bg-amber-50"
        />
        <StatCard
          title="Est. Revenue"
          value={mockStats.revenue}
          icon={<Wallet className="text-purple-600" size={24} />}
          prefix="$"
          separator=","
          color="bg-purple-50"
        />
      </div>

      {/* Chart Section */}
      <div className="lg:col-span-1 bg-white border border-gray-200 shadow-sm rounded-xl p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Stock vs Sales (Monthly)
          </h3>
        </div>
        <div className="h-48 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#888" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#888" }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                itemStyle={{ fontSize: "14px", fontWeight: 500 }}
              />
              <Line
                type="monotone"
                dataKey="stock"
                stroke="#cbd5e1"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#1a73e8"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#1a73e8",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, prefix, separator, color }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 flex items-center justify-between cursor-default">
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-1">{title}</h4>
        <div className="text-2xl font-bold text-gray-900">
          {prefix}
          <CountUp
            end={value}
            duration={2.5}
            separator={separator || ""}
            useEasing={true}
          />
        </div>
      </div>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatsOverview;
