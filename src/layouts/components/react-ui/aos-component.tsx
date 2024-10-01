"use client";

import React,{ useEffect } from "react";

import 'aos/dist/aos.css';

// @ts-ignore
import AOS from 'aos';
// @ts-ignore
import 'aos/dist/aos.css';

export default function AosComponent({
  children,
  aosType="fade-up"
}: {
  children: React.ReactNode,
  aosType?: string,
}) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      data-aos={aosType}
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {children}
    </div>
  )
};
