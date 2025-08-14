import React, { useState } from "react";
import MentorCard from "../components/MentorCard";
import mentors_27 from "../assets/mentors_27";
import mentors_28 from "../assets/mentors_28";

const Mentors = () => {
  const [selectedBatch, setSelectedBatch] = useState(27);

  const currentMentors =
    selectedBatch === 27 ? mentors_27 : mentors_28;

  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-orange-500 font-semibold text-lg mb-3 uppercase tracking-wide">
          Our Mentors
        </p>

        <h1 className="text-5xl font-extrabold text-black mb-6 leading-tight">
          Meet Our Team
        </h1>

        <h2 className="text-6xl font-extrabold mb-10 tracking-tight">
          <span className="text-orange-500">Passionate.</span>{" "}
          <span className="text-gray-500">Proactive.</span>{" "}
          <span className="text-black">Expert.</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed mb-20">
          We lead with care — our core value — and a shared passion for guiding
          the next generation of innovators, empowering them with knowledge,
          skills, and real-world expertise.
        </p>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentMentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setSelectedBatch(27)}
            className={`px-5 py-2 rounded-full border-2 font-semibold transition 
              ${
                selectedBatch === 27
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-black border-gray-500 hover:bg-gray-100"
              }`}
          >
            1
          </button>
          <button
            onClick={() => setSelectedBatch(28)}
            className={`px-5 py-2 rounded-full border-2 font-semibold transition 
              ${
                selectedBatch === 28
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-black border-gray-500 hover:bg-gray-100"
              }`}
          >
            2
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
