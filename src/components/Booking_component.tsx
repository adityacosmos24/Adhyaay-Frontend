import React, { useState, useEffect } from "react";
import { api } from "../lib/axios";

interface Mentor {
  _id: string;
  name: string;
  email: string;
}

interface FormData {
  juniorName: string;   // instead of name
  juniorEmail: string;
  semester: string;
  description: string;
  mentor: string;
  date: string;
}

const BookingComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    juniorName: "",
    juniorEmail: "",
    semester: "",
    description: "",
    mentor: "",
    date: "",
  });

  const [mentors, setMentors] = useState<Mentor[]>([]);

  // fetch mentors from backend
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await api.get("/mentors"); // adjust to your route
        setMentors(res.data);
      } catch (err) {
        console.error("Failed to fetch mentors", err);
      }
    };
    fetchMentors();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (): Promise<void> => {
  try {
    const payload = {
      ...formData,
      date: new Date(formData.date).toISOString(), // 👈 convert
    };

    console.log("Submitting payload:", payload);
    const res = await api.post("/appointments", payload);

    alert("Appointment request submitted successfully!");
    setFormData({
      juniorName: "",
      juniorEmail: "",
      semester: "",
      description: "",
      mentor: "",
      date: "",
    });
  } catch (err) {
    console.error(err);
    alert("Error booking appointment.");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-8">
          Book a Counselling Appointment
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="juniorName"
            placeholder="Your Name"
            value={formData.juniorName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="juniorEmail"
            placeholder="Email"
            value={formData.juniorEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="description"
            placeholder="Describe your issue..."
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <select
            name="mentor"
            value={formData.mentor}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="" disabled>
              Select a Mentor
            </option>
            {mentors.map((mentor) => (
              <option key={mentor._id} value={mentor._id}>
                {mentor.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
