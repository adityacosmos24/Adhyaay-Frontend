'use client';

import React from 'react';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
    image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg',
  },
  {
    id: 2,
    name: 'Isabella Thompson',
    role: 'Chief Technology Officer',
    image: 'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg',
  },
  {
    id: 3,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    image: 'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg',
  },
  {
    id: 4,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    image: 'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg',
  },
];

interface SocialMediaTeamProps {
  teamMembers: TeamMember[];
}

export default function SocialMediaTeam({ teamMembers }: SocialMediaTeamProps) {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2
  className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8 
             relative transition-transform duration-300 ease-out transform 
             hover:scale-105 hover:text-gray-800 cursor-pointer"
>
  Social Media Team
</h2>
        {/* Grid with 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
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
