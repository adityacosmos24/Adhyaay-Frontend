'use client';

import React, { useRef } from 'react';
import { cn } from '../../lib/utils';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


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

// Exported so ManagementTeam.tsx can use it
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
  {
    id: 5,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    image: 'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg',
  },
  {
    id: 6,
    name: 'Aiden Davis',
    role: 'Chief Marketing Officer',
    image: 'https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg',
  },
];

interface TeamSectionProps {
  teamMembers: TeamMember[];
  accentColor?: string;
  className?: string;
  ctaButtons?: Array<{
    label: string;
    href?: string;
    isPrimary?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
  }>;
}

export default function TechTeam({
  teamMembers = dami_data,
  accentColor = '#f97316',
  className,
  ctaButtons = [
    {
      label: 'Book a call',
      isPrimary: false,
      icon: <Phone size={16} className="mr-2" />,
    },
    { label: 'Book a demo', isPrimary: true },
  ],
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
  {/* Centered TECH TEAM heading with animation */}
  <h2
  className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8 
             relative transition-transform duration-300 ease-out transform 
             hover:scale-105 hover:text-gray-800 cursor-pointer"
>
  Tech Team
</h2>


  {/* Team Cards with arrows */}
  <div className="relative mt-12 w-full">
    {/* Left Gradient */}
    <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white z-10 pointer-events-none"></div>
    {/* Right Gradient */}
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
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={member.image || '/placeholder.svg'}
              alt={member.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-2 left-2 text-white font-medium text-lg drop-shadow-lg">
              {member.name}
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-700 hover:text-gray-500 transition-colors" style={{ minHeight: '2.5rem' }}>
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

  {/* Custom animation for heading */}
  <style>
    {`
      @keyframes slideFade {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-slide-fade {
        animation: slideFade 1s ease-out forwards;
      }
    `}
  </style>
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
