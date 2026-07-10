"use client";
import { countries } from "@/lib/countries";
import Tilt from "react-parallax-tilt";
export default function BackgroundFlags() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden p-1">

      <div className="grid grid-cols-10 gap-2 justify-items-center">

        {countries.slice(0, 190).map((country) => (
          <Tilt
  tiltMaxAngleX={40}
  tiltMaxAngleY={40}
  glareEnable={true}
  glareMaxOpacity={0.5}
  scale={1.05}
  transitionSpeed={1500}
  
>
  <div className=" ">
    <img
      src={country.flag}
      alt={country.name}
      className="w-35 rounded"
    />
  </div>
</Tilt>
        ))}

      </div>

    </div>
  );
}