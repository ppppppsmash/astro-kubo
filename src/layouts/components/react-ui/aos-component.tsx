"use client";

import React from "react";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosComponent({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      {children}
    </div>
  )
};
