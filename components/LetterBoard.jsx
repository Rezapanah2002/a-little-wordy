"use client";

import React, { useState, useEffect } from "react";
import { generateRandomLetters } from "../utils/generateLetters";

const LetterBoard = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(generateRandomLetters());
  }, []);

  const isVowel = (letter) => ["A", "E", "I", "O", "U"].includes(letter);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="border-b border-dashed border-customRed text-3xl font-semibold font-serif bg-gradient-to-l from-customOrange to-customGreenDark bg-clip-text inline-block text-transparent mb-10">
        Your Letters
      </h2>
      <div className="flex flex-col gap-10 mb-10">
        <div className="flex justify-center gap-3">
          {letters
            .filter((letter) => !isVowel(letter))
            .map((letter, index) => (
              <span
                key={index}
                className="w-20 aspect-square text-3xl font-bold p-2 flex justify-center items-center hover:scale-110 cursor-pointer text-white rounded-xl bg-cyan-500"
              >
                {letter}
              </span>
            ))}
        </div>
        <div className="flex justify-center gap-3">
          {letters
            .filter((letter) => isVowel(letter))
            .map((letter, index) => (
              <span
                key={index}
                className="w-20 aspect-square text-3xl font-bold p-2 flex justify-center items-center hover:scale-110 cursor-pointer text-white rounded-xl bg-rose-700"
              >
                {letter}
              </span>
            ))}
        </div>
      </div>
      <button
        className="bg-customMint px-10 py-5 rounded-2xl text-customGreenDark text-2xl hover:scale-105 duration-300 hover:bg-customGreenDark hover:text-white"
        onClick={() => setLetters(generateRandomLetters())}
      >
        Generate New Letters
      </button>
    </div>
  );
};

export default LetterBoard;
