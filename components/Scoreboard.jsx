"use client";

import React, { useState } from "react";

const Scoreboard = () => {
  const [coins, setCoins] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="border-b border-dashed border-customRed text-3xl font-semibold font-serif bg-gradient-to-l from-customOrange to-customGreenDark bg-clip-text inline-block text-transparent mb-10">
        Berry Coins: {coins}
      </h2>
      <button
        className="mb-10 bg-indigo-300 px-14 py-5 rounded-2xl text-white text-3xl hover:scale-105 duration-300 hover:bg-indigo-600"
        onClick={() => setCoins(coins + 1)}
      >
        + 1 Berry Coin
      </button>
      <button
        className="bg-rose-400 px-14 py-5 rounded-2xl text-white text-3xl hover:scale-105 duration-300 hover:bg-rose-600"
        onClick={() => setCoins(coins > 0 ? coins - 1 : 0)}
      >
        - 1 Berry Coin
      </button>
    </div>
  );
};

export default Scoreboard;
