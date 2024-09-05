"use client";
import React from "react";
import { StickyScroll } from "./react-ui/sticky-scroll-reveal";

export function StickyScrollReveal({
  business_list,
}: {
  business_list: any;
}) {
  const content = business_list.map((item: any) => ({
    title: item.title,
    description: item.description,
    image: item.image
  }));

  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
