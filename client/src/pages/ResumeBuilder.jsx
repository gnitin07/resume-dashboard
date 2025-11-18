// src/pages/Dashboard.jsx
import React from "react";
import {
  BarChart,
  LineChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Line, // <-- important: Line must be imported
} from "recharts";

/**
 * Usage:
 *  - Ensure `recharts` is installed: npm install recharts
 *  - This component uses `user` hardcoded example data but will render safely
 *    even if you pass an empty or partial user object.
 */

export default function Dashboard({ user: maybeUser }) {
  // If parent passes user props, use it. Otherwise fall back to the sample below.
  const user = maybeUser && Object.keys(maybeUser).length ? maybeUser : {
    name: "Manisha Bhati",
    title: "Full-Stack Developer | Data Science Enthusiast",
    photo: "https://i.ibb.co/4R6TD6sj/profnew.png",
    about:
      "Software Developer with a solid foundation in C++ and a keen interest in modern web development, particularly with React.js. I am skilled in building robust back-end systems and am eager to apply my coding skills to create dynamic and efficient front-end applications. A collaborative team player with a passion for continuous learning and delivering high-quality, scalable software solutions.",
    links: {
      email: "mannisha@gmail.com",
      linkedin: "https://linkedin.com/in/nitin",
      github: "https://github.com/nitin",
    },
    experience: [
      {
        year: "2025",
        role: "Frontend Developer",
        company: "KPMG",
        desc: ["Built dashboards using React", "Collaborated with data teams for analytics"],
      },
      {
        year: "2022-2024",
        role: "Tech Analyst",
        company: "Denso Automotive",
        desc: ["Worked on automotive IoT systems", "Learned CAE tools like ANSYS"],
      },
    ],
    education: [
      {
        year: "2021 - 2025",
        degree: "B.Tech in Electronics and Communication Engineering",
        college: "ABC Institute of Technology",
      },
      {
        year: "2019 - 2021",
        degree: "Higher Secondary Education",
        college: "XYZ Senior Secondary School",
      },
    ],
    projects: [
      {
        name: "Smart Irrigation System",
        tech: ["ESP32", "Blynk", "IoT", "C++"],
        desc: "IoT-based automated irrigation system using DHT11 and soil moisture sensor.",
      },
      {
        name: "Learnance E-learning Platform",
        tech: ["Node.js", "Express", "MongoDB", "React"],
        desc: "Full-stack platform for hosting and learning digital courses.",
      },
    ],
    // skills for bar chart: each object must have 'name' and a numeric value (I use Time)
    skills: [
      { name: "Learnance", months: 1, Time: 2 },
      { name: "Skillscape", months: 3, Time: 5 },
      { name: "Greenpulse", months: 5, Time: 6 },
    ],
    stats: [
      { name: "Web Design",value:450 },
      { name: "ML/AI", value: 300 },
      { name: "IoT Projects", value: 250 },
      { name: "Others", value: 150 },
    ],
    // growthData is used by the LineChart
    growthData: [
      { year: 2020, Cpp: 50, JS: 0, React: 0 },
      { year: 2021, Cpp: 70, JS: 40, React: 20 },
      { year: 2022, Cpp: 85, JS: 65, React: 55 },
      { year: 2023, Cpp: 90, JS: 80, React: 75 },
      { year: 2024, Cpp: 92, JS: 85, React: 80 },
    ],
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Ensure charts get valid arrays (avoid passing undefined)
  const skillsData = Array.isArray(user.skills) && user.skills.length ? user.skills : [{ name: "N/A", Time: 1 }];
  const pieData = Array.isArray(user.stats) && user.stats.length ? user.stats : [{ name: "N/A", value: 1 }];
  const lineData = Array.isArray(user.growthData) && user.growthData.length ? user.growthData : [
    { year: 2020, Cpp: 10, JS: 5, React: 2 },
    { year: 2021, Cpp: 30, JS: 20, React: 10 },
    { year: 2022, Cpp: 50, JS: 40, React: 30 },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1.2fr",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#0b132b",
        color: "white",
        gap: 20,
        padding: 20,
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* LEFT COLUMN */}
      <div
        style={{
          background: "#1c2541",
          borderRadius: 16,
          padding: 20,
          textAlign: "center",
        }}
      >
        <img
          src={user.photo || "https://via.placeholder.com/120"}
          alt="profile"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            margin: "0 auto 10px",
            display: "block",
          }}
        />
        <h2 style={{ margin: "8px 0" }}>{user.name}</h2>
        <h4 style={{ color: "#00C49F", margin: "4px 0 8px" }}>{user.title}</h4>
        <p style={{ fontSize: 14, lineHeight: 1.3 }}>{user.about}</p>

        <div style={{ marginTop: 56, textAlign: "left" }}>
          <p>📧 {user.links?.email}</p>
          <p>🔗 <a href={user.links?.linkedin} style={{ color: "#00C49F" }}>{user.links?.linkedin}</a></p>
          <p>💻 <a href={user.links?.github} style={{ color: "#00C49F" }}>{user.links?.github}</a></p>
        </div>
      </div>

      {/* MIDDLE COLUMN */}
      <div//
        style={{
          background: "#1c2541",
          borderRadius: 16,
          padding: 20,
          overflow: "hidden",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Work Experience</h3>
        {Array.isArray(user.experience) && user.experience.length ? (
          user.experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: 16, borderLeft: "3px solid #00C49F", paddingLeft: 10 }}>
              <h4 style={{ margin: 0 }}>{exp.year} — {exp.role} @ {exp.company}</h4>
              <ul style={{ marginTop: 6 }}>
                {Array.isArray(exp.desc) ? exp.desc.map((d, i) => (<li key={i} style={{ fontSize: 13 }}>{d}</li>)) : <li>{exp.desc}</li>}
              </ul>
            </div>
          ))
        ) : <p>No experience added.</p>}

        <h3 style={{ marginTop: 10 }}>Education</h3>
        {Array.isArray(user.education) && user.education.length ? (
          user.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: 10, background: "#3a506b", padding: 10, borderRadius: 8 }}>
              <strong>{edu.degree}</strong>
              <div style={{ fontSize: 13 }}>{edu.college}</div>
              <div style={{ fontSize: 12, color: "#00C49F" }}>{edu.year}</div>
            </div>
          ))
        ) : <p>No education added.</p>}

        <h3 style={{ marginTop: 10 }}>Projects</h3>
        {Array.isArray(user.projects) && user.projects.length ? (
          user.projects.map((p, i) => (
            <div key={i} style={{ marginBottom: 10, background: "#3a506b", padding: 10, borderRadius: 8 }}>
              <strong>{p.name}</strong>
              <div style={{ fontSize: 13 }}>{p.desc}</div>
              <div style={{ fontSize: 12, color: "#00C49F" }}>{Array.isArray(p.tech) ? p.tech.join(", ") : p.tech}</div>
            </div>
          ))
        ) : <p>No projects added.</p>}
      </div>

      {/* RIGHT COLUMN */}
      <div
        style={{
          background: "#1c2541",
          borderRadius: 16,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Bar Chart */}
        <div>
          <h4 style={{ margin: 0 }}>Projects (months)</h4>
          <div style={{ height: 150, marginTop: 8 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="Time" fill="#00C49F" radius={[8,8,0,0]} onClick={() => window.open(user.barChartLink || "https://github.com", "_blank")}
/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div>
          <h4 style={{ marginTop: 10 }}>Skill Growth Over Years</h4>
          <div style={{ height: 180, marginTop: 8 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}
                 onClick={() => window.open(user.lineChartLink || "https://example.com", "_blank")}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Line type="monotone" dataKey="Cpp" stroke="#00C49F" strokeWidth={2} />
                <Line type="monotone" dataKey="JS" stroke="#FFBB28" strokeWidth={2} />
                <Line type="monotone" dataKey="React" stroke="#FF8042" strokeWidth={2}
                />
                 
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div>
          <h4 style={{ marginTop: 10 }}>Project Distribution</h4>
          <div style={{ height: 160, marginTop: 10 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart onClick={() => window.open(user.pieChartLink || "https://example.com", "_blank")}
>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={60} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
