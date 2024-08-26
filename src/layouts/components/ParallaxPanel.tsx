"use client";

import React from "react";
import { HeroParallax } from "./react-ui/hero-parallax";

export default function ParallaxPanel() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "日本原料",
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
    title: "MADE IN JAPAN",
    link: "#",
    thumbnail:
      "/images/landing_pic3.jpg",
  },
  {
    title: "美と健康",
    link: "#",
    thumbnail:
      "/images/landing_pic4.jpg",
  },
  {
    title: "安心&信頼",
    link: "#",
    thumbnail:
      "/images/landing_pic5.jpg",
  },
  {
    title: "革新",
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
    title: "社会貢献",
    link: "#",
    thumbnail:
      "/images/landing_pic8.jpg",
  },
  {
    title: "美容ケアのこだわり",
    link: "#",
    thumbnail:
      "/images/landing_pic9.jpg",
  },
  {
    title: "私たちと未来を作る",
    link: "#",
    thumbnail:
      "/images/landing_pic10.jpg",
  }
];
