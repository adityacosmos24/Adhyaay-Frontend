'use client';

import React, { useRef } from 'react';
import { cn } from '../../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socialMedia?: {
    linkedin?: string;
    github?: string;
  };
};

export const dami_data: TeamMember[] = [
  {
    id: 1,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
    image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg',
    socialMedia: { linkedin: 'https://linkedin.com/in/kadirmiye' }
  },
  {
    id: 2,
    name: 'Isabella Thompson',
    role: 'Chief Technology Officer',
    image: 'https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg',
    socialMedia: { linkedin: 'https://linkedin.com/in/isabellathompson' }
  },
  {
    id: 3,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    image: 'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg',
    socialMedia: { linkedin: 'https://linkedin.com/in/zainabrahman' }
  },
  {
    id: 4,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    image: 'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg',
    socialMedia: { linkedin: 'https://linkedin.com/in/aidendavis' }
  },
  {
    id: 5,
    name: 'Zainab Rahman',
    role: 'Chief Operations Officer',
    image: 'https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg',
    socialMedia: { linkedin: 'https://linkedin.com/in/zainabrahman' }
  },
  {
    id: 6,
    name: 'Kadir Miye',
    role: 'Chief Executive Officer',
    image: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg',
    socialMedia: { linkedin: 'https://linkedin.com/in/kadirmiye' }
  },
];

interface TeamSectionProps {
  teamMembers: TeamMember[];
  accentColor?: string;
  className?: string;
}

export default function TechTeam({
  teamMembers = dami_data,
  accentColor = '#f97316',
  className,
}: TeamSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={cn('w-full py-12', className)}>
      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8 
                     relative transition-transform duration-300 ease-out transform 
                     hover:scale-105 hover:text-gray-800 cursor-pointer"
        >
          Tech Team
        </h2>

        {/* Cards with arrows */}
        <div className="relative mt-12 w-full  ">
          {/* Gradients */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white z-10 pointer-events-none"></div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full p-2 bg-white shadow-md hover:bg-black transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex gap-4 overflow-x-auto pb-4 scroll-smooth"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative w-64 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-sm transition-all hover:shadow-lg"
              >
                {/* Image with LinkedIn icon */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* LinkedIn Icon */}
                  {member.socialMedia?.linkedin && (
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-[#0A66C2] transition-colors z-20"
                    >
                      <FaLinkedin className="text-black hover:text-white" size={18} />
                    </a>
                  )}

                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Name */}
                  <div className="absolute bottom-2 left-2 text-white font-medium text-lg drop-shadow-lg">
                    {member.name}
                  </div>
                </div>

                {/* Role */}
                <div className="p-4">
                  <p
                    className="text-sm text-black hover:text-gray-500 transition-colors"
                    style={{ minHeight: '2.5rem' }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full p-2 bg-white shadow-md hover:bg-black transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
}
