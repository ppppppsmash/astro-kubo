"use client";

import React from "react";
import { HeroParallax } from "./hero-parallax";

export default function ParallaxPanel() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "日本國原料",
    link: "#",
    thumbnail:
      "/images/landing_pic1.jpg",
  },
  {
    title: "日本製",
    link: "#",
    thumbnail:
      "/images/landing_pic2.jpg",
  },
  {
    title: "頂尖研究所",
    link: "#",
    thumbnail:
      "/images/landing_pic3.jpg",
  },
  {
    title: "美麗與健康",
    link: "#",
    thumbnail:
      "/images/landing_pic4.jpg",
  },
  {
    title: "安心與信頼",
    link: "#",
    thumbnail:
      "/images/landing_pic5.jpg",
  },
  {
    title: "創新",
    link: "#",
    thumbnail:
      "/images/landing_pic6.jpg",
  },

  {
    title: "職人精神",
    link: "#",
    thumbnail:
      "/images/landing_pic7.jpg",
  },
  {
    title: "貢獻社會",
    link: "#",
    thumbnail:
      "/images/landing_pic8.jpg",
  },
  {
    title: "永占保養巔峰",
    link: "#",
    thumbnail:
      "/images/landing_pic9.jpg",
  },
  {
    title: "一同共創美麗與健康的未來",
    link: "#",
    thumbnail:
      "/images/landing_pic10.jpg",
  }
];
