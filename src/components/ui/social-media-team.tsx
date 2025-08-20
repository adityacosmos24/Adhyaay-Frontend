'use client';

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

export const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
     image: '../src/assets/Shradha.jpg',
    linkedin: 'https://www.linkedin.com/in/kadirmiye',
  },
  {
    id: 2,
    name: 'Isabella Thompson',
    role: 'Chief Technology Officer',
    image: 'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg',
    linkedin: 'https://www.linkedin.com/in/isabellathompson',
  },
  {
    id: 3,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    image: 'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg',
    linkedin: 'https://www.linkedin.com/in/zainabrahman',
  },
];

interface SocialMediaTeamProps {
  teamMembers: TeamMember[];
}

export default function SocialMediaTeam({ teamMembers }: SocialMediaTeamProps) {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8 
                     relative transition-transform duration-300 ease-out transform 
                     hover:scale-105 hover:text-gray-800 cursor-pointer"
        >
          Social Media Team
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center 
                         border border-gray-200 transition-all hover:-translate-y-2 
                         hover:shadow-2xl hover:border-orange-400"
            >
              {/* LinkedIn Icon */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin size={24} />
                </a>
              )}

              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border border-gray-300"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
