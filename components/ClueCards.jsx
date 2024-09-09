"use client";

import React, { useState, useEffect } from "react";
import { generateClueCards } from "../utils/generateClues";

const ClueCards = () => {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    setClues(generateClueCards());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-10 font-serif">
      <h2 className="border-b border-dashed border-customRed text-3xl font-semibold font-serif bg-gradient-to-l from-customGreenDark to-customOrange bg-clip-text inline-block text-transparent mb-10">
        Clue Cards
      </h2>

      <div className="flex justify-center gap-2 mb-5 text-center">
        {clues
          .filter((_, index) => index < 4)
          .map((clue, index) => (
            <div
              key={index}
              className="p-2 rounded-2xl text-white aspect-square w-64 bg-cyan-500 flex flex-col items-center justify-around cursor-pointer hover:scale-95 duration-300"
            >
              <p className="text-indigo-100 text-4xl font-bold mb-2">
                {clue.cost}$
              </p>
              {/* <img
                src={clue.image}
                alt={clue.title}
                className="mb-2 w-16 h-16 object-contain"
              /> */}
              <h3 className="text-2xl font-semibold">{clue.title}</h3>
              <p className="text-base text-gray-200">{clue.description}</p>
            </div>
          ))}
      </div>

      <div className="flex justify-center gap-2 mb-10 text-center">
        {clues
          .filter((_, index) => index >= 4)
          .map((clue, index) => (
            <div
              key={index}
              className="p-2 rounded-2xl text-white w-64 aspect-square bg-rose-700 flex flex-col items-center justify-around cursor-pointer hover:scale-95 duration-300"
            >
              <p className="text-indigo-100 text-4xl font-bold mb-2">
                {clue.cost}$
              </p>
              {/* <img
                src={clue.image}
                alt={clue.title}
                className="mb-2 w-16 h-16 object-contain"
              /> */}
              <h3 className="text-2xl font-semibold">{clue.title}</h3>
              <p className="text-sm text-gray-200">{clue.description}</p>
            </div>
          ))}
      </div>

      <button
        className="bg-customMint px-10 py-5 rounded-2xl text-customGreenDark text-2xl hover:scale-105 duration-300 hover:bg-customGreenDark hover:text-white"
        onClick={() => setClues(generateClueCards())}
      >
        Generate New Clues
      </button>
    </div>
  );
};

export default ClueCards;
