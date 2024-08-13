"use client";

import React from "react";
import { HeroParallax } from "./react-ui/hero-parallax";

export default function ParallaxPanel() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "テスト1",
    link: "#",
    thumbnail:
      "/images/landing_pic1.jpg",
  },
  {
    title: "テスト2",
    link: "#",
    thumbnail:
      "/images/landing_pic2.jpg",
  },
  {
    title: "テスト3",
    link: "#",
    thumbnail:
      "/images/landing_pic3.jpg",
  },
  {
    title: "テスト4",
    link: "#",
    thumbnail:
      "/images/landing_pic4.jpg",
  },
  {
    title: "テスト",
    link: "#",
    thumbnail:
      "https://placehold.jp/600x500.png",
  },
  {
    title: "テスト",
    link: "#",
    thumbnail:
      "https://placehold.jp/600x500.png",
  },

  {
    title: "テスト",
    link: "#",
    thumbnail:
      "https://placehold.jp/600x500.png",
  },
  {
    title: "テスト",
    link: "#",
    thumbnail:
      "https://placehold.jp/600x500.png",
  },
  {
    title: "テスト",
    link: "#",
    thumbnail:
      "https://placehold.jp/600x500.png",
  },
  {
    title: "テスト",
    link: "#",
    thumbnail:
      "https://placehold.jp/600x500.png",
  }
];
