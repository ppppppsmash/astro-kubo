"use client";

import React from "react";
import { PinContainer } from "./react-ui/3d-pin";

export function AnimatedPic({ feature_list }: { feature_list: any }) {
  return (
    <div className="w-full md:flex items-center justify-center">
      {
        feature_list.map((item: any) => (
          <div>
            <p className="sm:!m-0 !mt-10 font-bold sm:pl-8 pl-0">
              {item.title}
            </p>
            <PinContainer
              title={item.list}
              href=""
            >
              <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] bg-transparent">
                <div className="text-base !m-0 !p-0 font-normal">
                </div>
                <div className="flex flex-1 w-full">
                  <img
                    className="w-full"
                    alt="features"
                    width="473"
                    height="286"
                    src={item.image}
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))
      }

    </div>
  );
}
