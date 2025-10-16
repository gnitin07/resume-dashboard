import React, { useState } from "react";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">Build Your Resume</h2>

      {/* Form */}
      <div className="grid grid-cols-1 gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border rounded-lg p-2"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border rounded-lg p-2"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border rounded-lg p-2"
        />
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Education"
          className="border rounded-lg p-2"
        />
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="border rounded-lg p-2"
        />
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated)"
          className="border rounded-lg p-2"
        />
      </div>

      {/* Preview */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Resume Preview</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Education:</strong> {formData.education}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
      </div>

      {/* Download Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
