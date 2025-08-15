'use client';

import React from 'react';

export type Service = {
  id: number;
  title: string;
  description: string;
};

export const services_data: Service[] = [
  {
    id: 1,
    title: 'Therapy',
    description: 'Personalized one-on-one sessions to help you overcome challenges, improve mental health, and achieve emotional balance.',
  },
  {
    id: 2,
    title: 'Remove Negative',
    description: 'Guided techniques to release negative thoughts and emotions, allowing you to focus on positivity and personal growth.',
  },
  {
    id: 3,
    title: 'Relief Stress',
    description: 'Effective stress management methods including mindfulness, relaxation exercises, and breathing practices for a calmer mind.',
  },
  {
    id: 4,
    title: 'Exercise',
    description: 'Customized physical activity plans to boost energy, improve mood, and maintain overall mental and physical well-being.',
  },
];

interface ServicesProps {
  services: Service[];
}

export default function Councellingbenifits({ services }: ServicesProps) {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wide font-semibold">Our Services</p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-black mb-2 
                       transition-transform duration-300 ease-out transform 
                       hover:scale-105 hover:text-gray-800 cursor-pointer"
          >
            What Are We Offering
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-lg shadow-md p-6 flex flex-col items-center text-center 
                         border border-gray-200 bg-white text-black 
                         transition-all duration-300 w-full
                         hover:bg-gray-700 hover:text-white hover:border-gray-700
                         hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
