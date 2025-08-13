'use client';

import React from 'react';
import { cn } from '../../lib/utils'; // Make sure this exists or replace with regular className concatenation

// Team member data type
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  troubleMaker?: boolean;
};

// Props for the Team section
type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  secondaryColor?: string;
  className?: string;
};

// Additional creative props
export interface CreativeTeamProps extends TeamSectionProps {
  gradientColor?: string;
  accentColor?: string;
  verticalText?: {
    left: string;
    right: string;
  };
}

// Sample 3D-style team members
export const teamMembers3D: TeamMember[] = [
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
  {
    id: 5,
    name: 'Aysha Hussain',
    role: 'UX Designer',
    image: 'https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg',
  },
  {
    id: 6,
    name: 'Samira Shah',
    role: 'Product Manager',
    image: 'https://img.freepik.com/premium-psd/lego-character-with-blue-button-his-chest_1217673-223400.jpg',
  },
  {
    id: 7,
    name: 'Ethan Williams',
    role: 'Backend Developer',
    image: 'https://img.freepik.com/premium-photo/there-is-black-girl-with-headphones-yellow-jacket_1034474-106535.jpg',
  },
  {
    id: 8,
    name: 'Amina Khan',
    role: 'Frontend Developer',
    image: 'https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980030.jpg',
  },
];

// Main component
export default function Coordinator({
  title = 'Meet our team!',
  subtitle,
  teamMembers = teamMembers3D,
  backgroundColor = '#FFFFFF',
  textColor = '#111111',
  accentColor = '#f97316',
  secondaryColor = '#ffffff',
  className,
  gradientColor = 'from-rose-500 to-rose-300',
  verticalText = {
    left: 'Meet',
    right: 'Team',
  },
}: CreativeTeamProps) {
  // Layout positions for grid
  const layoutPositions = [
    { gridArea: '1 / 1 / 3 / 2', className: 'col-span-1 row-span-2' },
    { gridArea: '1 / 2 / 2 / 3', className: 'col-span-1 row-span-1' },
    { gridArea: '2 / 2 / 4 / 3', className: 'col-span-1 row-span-2' },
    { gridArea: '1 / 3 / 3 / 4', className: 'col-span-1 row-span-2' },
  ];

  return (
    <section
      className={cn('relative w-full overflow-hidden rounded-3xl py-16', className)}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="relative container mx-auto px-4">
   

        {/* Title & subtitle */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-lg" style={{ color: secondaryColor }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Team grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.slice(0, 6).map((member, index) => (
            <div
              key={member.id}
              className={cn(
                'relative overflow-hidden',
                index < layoutPositions.length ? layoutPositions[index].className : ''
              )}
              style={{
                gridArea: index < layoutPositions.length ? layoutPositions[index].gridArea : undefined,
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${gradientColor} z-10 opacity-40 mix-blend-multiply`}
                ></div>
                <img src={member.image} alt={member.name} className="object-cover" />
                <div className="absolute right-0 bottom-0 left-0 z-20 p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white opacity-90">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
