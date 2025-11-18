import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function ResumeBuilder() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    title: "",
    about: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
    experience: "",
    education: "",
    projects: "",
    skills: "",
    stats: "",
    growthData: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setForm((prev) => ({ ...prev, [name]: ev.target.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert textarea JSON-like strings into arrays
    const parseList = (text) =>
      text
        .split("\n")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    const newUser = {
      name: form.name || "Unnamed User",
      title: form.title || "Full-Stack Developer",
      photo: form.photo,
      about: form.about,
      links: {
        email: form.email,
        linkedin: form.linkedin,
        github: form.github,
      },
      experience: parseList(form.experience).map((line) => ({
        year: line.split("|")[0] || "N/A",
        role: line.split("|")[1] || "",
        company: line.split("|")[2] || "",
        desc: line.split("|").slice(3),
      })),
      education: parseList(form.education).map((line) => ({
        year: line.split("|")[0] || "",
        degree: line.split("|")[1] || "",
        college: line.split("|")[2] || "",
      })),
      projects: parseList(form.projects).map((line) => ({
        name: line.split("|")[0] || "",
        desc: line.split("|")[1] || "",
        tech: (line.split("|")[2] || "").split(","),
      })),
      skills: parseList(form.skills).map((line) => {
        const [name, months, Time] = line.split("|");
        return { name, months: Number(months) || 1, Time: Number(Time) || 1 };
      }),
      stats: parseList(form.stats).map((line) => {
        const [name, value] = line.split("|");
        return { name, value: Number(value) || 1 };
      }),
      growthData: parseList(form.growthData).map((line) => {
        const [year, Cpp, JS, React] = line.split("|");
        return {
          year: Number(year) || 2020,
          Cpp: Number(Cpp) || 0,
          JS: Number(JS) || 0,
          React: Number(React) || 0,
        };
      }),
    };

    setUser(newUser);
  };

  if (user) {
    return <Dashboard user={user} />;
  }

  return (
    <div
      style={{
        background: "#0b132b",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#00C49F" }}>Resume Builder</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "grid",
          gap: "15px",
          background: "#1c2541",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Title:
          <input type="text" name="title" value={form.title} onChange={handleChange}style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }} />
        </label>

        <label>
          About:
          <textarea name="about" rows="3" value={form.about} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Upload Photo:
          <input type="file" name="photo" accept="image/*" onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange}style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }} />
        </label>

        <label>
          LinkedIn:
          <input type="text" name="linkedin" value={form.linkedin} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          GitHub:
          <input type="text" name="github" value={form.github} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Experience (each line: Year | Role | Company | Description1 | Description2):
          <textarea name="experience" rows="3" value={form.experience} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Education (each line: Year | Degree | College):
          <textarea name="education" rows="3" value={form.education} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Projects (each line: Name | Description | Tech1,Tech2,...):
          <textarea name="projects" rows="3" value={form.projects} onChange={handleChange}style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }} />
        </label>

        <label>
          Skills (each line: Skill | Months | Time):
          <textarea name="skills" rows="3" value={form.skills} onChange={handleChange} style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }}/>
        </label>

        <label>
          Stats (each line: Name | Value):
          <textarea name="stats" rows="3" value={form.stats} onChange={handleChange}style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }} />
        </label>

        <label>
          Growth Data (each line: Year | Cpp | JS | React):
          <textarea name="growthData" rows="3" value={form.growthData} onChange={handleChange}style={{
    background: "transparent",
    color: "white",
    border: "3px solid rgba(250, 246, 246, 1)",  // <-- Default border color here
    borderRadius: "8px",
    padding: "10px",
    outline: "none",
    transition: "all 0.2s",
  }} />
        </label>

        <button
          type="submit"
          style={{
            background: "#00C49F",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
}
