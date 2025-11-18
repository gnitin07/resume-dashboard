// src/pages/Home.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  // Demo data for the sample charts
  const lineData = [
    { year: 2020, Projects: 2, Skills: 4 },
    { year: 2021, Projects: 5, Skills: 7 },
    { year: 2022, Projects: 8, Skills: 9 },
    { year: 2023, Projects: 10, Skills: 12 },
    { year: 2024, Projects: 12, Skills: 15 },
  ];

  const pieData = [
    { name: "Web Dev", value: 400 },
    { name: "IoT", value: 300 },
    { name: "ML/AI", value: 300 },
    { name: "Other", value: 200 },
  ];

  const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        background: "#0b132b",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Header Section */}
      <h1 style={{ color: "#00C49F", fontSize: "36px", marginBottom: 10 }}>
        Welcome to SkillScape-
        A Data Driven Resume
      </h1>
      <p style={{ maxWidth: 700, margin: "20px auto", fontSize: "18px" }}>
        Design. Build. Visualize. ✨  
        Create dynamic resumes and interactive dashboards that make your portfolio stand out.
      </p>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        {/* Resume Builder Card */}
        <div
          style={{
            width: 280,
            background: "#1c2541",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            transition: "transform 0.3s ease",
          }}
          onClick={() =>
            window.open("/resumebuilder", "_self")
          }
        >
          <h3>📄 Resume Builder</h3>
          <p style={{ fontSize: 14 }}>
            Generate a clean, professional resume that fits on one screen.
          </p>
        </div>

        {/* Dashboard Card */}
        <div
          style={{
            width: 280,
            background: "#1c2541",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            transition: "transform 0.3s ease",
          }}
          onClick={() =>
            window.open("/dashboard", "_self")
          }
        >
          <h3>📊 Dashboard</h3>
          <p style={{ fontSize: 14 }}>
            View your skills and progress visually with interactive charts.
          </p>
        </div>
      </div>

      {/* Live Chart Demo Section */}
      <h2 style={{ marginTop: 60, color: "#00C49F" }}>
        🔍 Live Preview — Interactive Charts
      </h2>
      <p style={{ fontSize: 15, color: "#ddd" }}>
        Click charts to see how your data visualization works
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 50,
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        {/* Line Chart */}
        <div
          style={{
            width: 400,
            height: 250,
            background: "#1c2541",
            borderRadius: 12,
            padding: 20,
          }}
          onClick={() =>
            window.open("https://www.codechef.com/users/nitingoyal01", "_blank")
          }
        >
          <h4 style={{ marginBottom: 10 }}>Skill Growth</h4>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={lineData}>
              <XAxis dataKey="year" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Projects"
                stroke="#00C49F"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Skills"
                stroke="#FFBB28"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div
          style={{
            width: 300,
            height: 250,
            background: "#1c2541",
            borderRadius: 12,
            padding: 20,
          }}
          onClick={() =>
            window.open("https://github.com/gnitin07/resume-dashboard", "_blank")
          }
        >
          <h4 style={{ marginBottom: 10 }}>Project Distribution</h4>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
