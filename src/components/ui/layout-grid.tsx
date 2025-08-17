"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type Card = {
  id: number;
  content: React.ReactElement | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayouxtGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full  grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden rounded-xl h-full w-full bg-transparent",
              selected?.id === card.id &&
                "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col",
              lastSelected?.id === card.id && "z-40"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      {selected && (
        <div
          onClick={handleOutsideClick}
          className="absolute h-full w-full left-0 top-0 bg-transparent z-10 pointer-events-auto"
        />
      )}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => (
  <motion.img
    layoutId={`image-${card.id}-image`}
    src={card.thumbnail}
    height="500"
    width="500"
    className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
    alt="thumbnail"
  />
);

const SelectedCard = ({ selected }: { selected: Card | null }) => (
  <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
    <motion.div
      layoutId={`content-${selected?.id}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative px-8 pb-4 z-[70]"
    >
      {selected?.content}
    </motion.div>
  </div>
);
