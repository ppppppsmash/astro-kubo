"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./react-ui/infinite-moving-cards";

export function InfiniteMovingCardsComponent({ service_list }: { service_list: any }) {
  return (
    <div className="relative overflow-hidden mb-14">
      <InfiniteMovingCards
        items={service_list}
        direction="right"
        speed="slow"
      />
    </div>
  );
}