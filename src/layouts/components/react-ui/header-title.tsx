"use client";

import React from "react";
import { Highlight } from "./hero-highlight";

export const HeaderTitle = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-20 md:pt-[400px] px-4 w-full left-0 top-0">
      <Highlight className="text-white text-xl md:text-3xl font-bold !leading-[1.3]">
        美しさへの投資<br />健康へのさらなる追求は、<br />久保生医の創立の初志です。
      </Highlight>
      <p className="max-w-2xl text-base md:text-lg mt-8 text-white">
        全ての製品は100%日本国産の原料を使用し、日本で製造されています。<br />日本の純粋な久保生医が、美しさと健康を同時に手に入れるお手伝いをいたします。
      </p>
    </div>
  );
};