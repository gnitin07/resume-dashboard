import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard = () => {
  // Sample data
  const skillsData = [
    { name: "React", value: 30 },
    { name: "Node.js", value: 25 },
    { name: "MongoDB", value: 20 },
    { name: "Express", value: 25 },
  ];

  const experienceData = [
    { year: "2021", projects: 2 },
    { year: "2022", projects: 3 },
    { year: "2023", projects: 5 },
    { year: "2024", projects: 4 },
  ];

  const COLORS = ["#60a5fa", "#34d399", "#fbbf24", "#f87171"];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow-md rounded-xl">
          <h3 className="font-semibold text-gray-700">Experience</h3>
          <p className="text-2xl font-bold mt-2">3+ Years</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-xl">
          <h3 className="font-semibold text-gray-700">Projects</h3>
          <p className="text-2xl font-bold mt-2">10+</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-xl">
          <h3 className="font-semibold text-gray-700">Industries</h3>
          <p className="text-2xl font-bold mt-2">Software, AI, Web</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-xl">
          <h3 className="font-semibold text-gray-700">Location</h3>
          <p className="text-2xl font-bold mt-2">Remote</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Skill Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Experience Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Projects by Year</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={experienceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Download Resume */}
      <div className="flex justify-end">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
