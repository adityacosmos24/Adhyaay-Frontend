'use client';

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import TechTeam, { dami_data as techTeamData } from "../components/ui/tech-team";
import SocialMediaTeam, { dami_data as socialTeamData } from "../components/ui/social-media-team";
import Coordinator, { dami_data as coordinatorData } from "../components/ui/cordinator";

export default function ManagementTeam() {
  const words = [
    { text: "Adhyaay" },
    { text: "Management" },
    { text: "Team", className: "text-orange-500 dark:text-orange-500" },
  ];

  const teamProfiles = [
    {
      name: "Kadir Miye",
      role: "CEO",
      quote: "Leadership is unlocking people's potential to become better.",
      src: "../src/assets/Shradha.jpg",
      linkedin: "https://linkedin.com/in/kadirmiye",
    },
    {
      name: "Isabella Thompson",
      role: "CTO",
      quote: "Innovation distinguishes between a leader and a follower.",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/isabellathompson",
    },
    {
      name: "Zainab Rahman",
      role: "COO",
      quote: "Operations is the backbone of any great organization.",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop",
      linkedin: "https://linkedin.com/in/zainabrahman",
    },
  ];

  return (
    <div className="pt-16 flex flex-col items-center gap-10 w-full bg-gray-50">
      {/* Animated Heading */}
      <TypewriterEffectSmooth words={words} />

      {/* Main Profile Cards */}
      <div className="flex flex-col gap-12 w-full px-4 sm:px-8 lg:px-16">
        {teamProfiles.map((profile, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative group rounded-xl overflow-hidden shadow-lg">
              {/* LinkedIn Icon */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-20 text-white hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>

              <img
                src={profile.src}
                alt={profile.name}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-[22rem] object-cover rounded-xl transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-xl"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {profile.name}
                </h3>
                <p className="text-orange-200 opacity-90 text-sm sm:text-base lg:text-lg">
                  {profile.role}
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 border-l-4 border-orange-500 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <p className="text-gray-700 italic text-base sm:text-lg lg:text-xl">
                "{profile.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Other Team Sections */}
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <Coordinator teamMembers={coordinatorData} />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <TechTeam teamMembers={techTeamData} />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <SocialMediaTeam teamMembers={socialTeamData} />
      </div>

      {/* Spacer */}
      <div className="h-24"></div>
    </div>
  );
}
