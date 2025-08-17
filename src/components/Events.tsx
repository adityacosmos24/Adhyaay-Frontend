"use client";
import React from "react";
import { LayouxtGrid } from "../components/ui/layout-grid";

export function Events() {
  return (
    <div className="relative h-screen py-20 w-full">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
      </div>

      <h1
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-black mb-8 
                   transition-transform duration-300 ease-out transform 
                   hover:scale-105 hover:text-gray-800 cursor-pointer text-center"
      >
        Adhyaay Events
      </h1>

      <LayouxtGrid cards={cards} />
    </div>
  );
}

/* ===== Skeleton Card Components ===== */
const SkeletonOne = () => (
  <div className="bg-transparent">
    <p className="font-bold md:text-4xl text-xl text-white">
      House in the woods
    </p>
    <p className="my-4 max-w-lg text-neutral-200">
      A serene and tranquil retreat, this house in the woods offers a peaceful
      escape from the hustle and bustle of city life.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div className="bg-transparent">
    <p className="font-bold md:text-4xl text-xl text-white">
      House above the clouds
    </p>
    <p className="my-4 max-w-lg text-neutral-200">
      Perched high above the world, this house offers breathtaking views and a
      unique living experience. It&apos;s a place where the sky meets home, and
      tranquility is a way of life.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div className="bg-transparent">
    <p className="font-bold md:text-4xl text-xl text-white">
      Greens all over
    </p>
    <p className="my-4 max-w-lg text-neutral-200">
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div className="bg-transparent">
    <p className="font-bold md:text-4xl text-xl text-white">
      Rivers are serene
    </p>
    <p className="my-4 max-w-lg text-neutral-200">
      A house by the river is a place of peace and tranquility. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);

/* ===== Card Data ===== */
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 bg-transparent",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 bg-transparent",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 bg-transparent",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 bg-transparent",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop",
  },
];
