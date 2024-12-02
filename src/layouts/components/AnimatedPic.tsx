"use client";

import React from "react";
import { PinContainer } from "./react-ui/3d-pin";

export function AnimatedPic({ feature_list }: { feature_list: any }) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center">
      {
        feature_list.map((item: any) => (
          <div>
            <p className="!m-0 font-bold pl-8">
              {item.title}
            </p>
            <PinContainer
              title={item.list}
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-transparent">
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
