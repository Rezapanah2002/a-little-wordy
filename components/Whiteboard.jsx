"use client";

import React, { useState } from "react";

const Whiteboard = () => {
  const [secretWord, setSecretWord] = useState("");
  const [clues, setClues] = useState("");
  const [guesses, setGuesses] = useState("");

  return (
    <div className="flex-1 p-10 bg-white border-2 border-dotted border-customGreenDark rounded-lg shadow-lg flex flex-col gap-6">
      <h2 className="text-4xl font-serif bg-gradient-to-r from-lime-500 to-black bg-clip-text inline-block text-transparent font-bold mb-6 border-b-2 border-customSoftGreen pb-2">
        My Board
      </h2>

      <div className="flex flex-col gap-28">
        <div className="mb-4">
          <label
            htmlFor="secret-word"
            className="font-semibold mb-2 text-2xl bg-gradient-to-r from-lime-500 to-black bg-clip-text inline-block text-transparent"
          >
            Secret Word:
          </label>
          <input
            type="text"
            id="secret-word"
            value={secretWord}
            onChange={(e) => setSecretWord(e.target.value)}
            className="w-full h-20 p-3 border-2 border-customSoftGreen rounded-md shadow-sm text-3xl font-semibold text-customGreenDark opacity-50"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="clues"
            className="font-semibold mb-2 text-2xl bg-gradient-to-r from-lime-500 to-black bg-clip-text inline-block text-transparent"
          >
            Clues:
          </label>
          <textarea
            id="clues"
            value={clues}
            onChange={(e) => setClues(e.target.value)}
            className="w-full h-96 p-3 border-2 border-customSoftGreen rounded-md shadow-sm resize-none text-3xl font-semibold text-customGreenDark"
          />
        </div>

        <div>
          <label
            htmlFor="guesses"
            className="font-semibold mb-2 text-2xl bg-gradient-to-r from-lime-500 to-black bg-clip-text inline-block text-transparent"
          >
            Guesses:
          </label>
          <textarea
            id="guesses"
            value={guesses}
            onChange={(e) => setGuesses(e.target.value)}
            className="w-full h-96 p-3 border-2 border-customSoftGreen rounded-md shadow-sm resize-none text-3xl font-semibold text-customGreenDark"
          />
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
