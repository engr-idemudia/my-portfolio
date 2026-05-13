import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        {/* Grey — behind blue, creates depth from above */}
        <Spotlight
          className="left-60 -top-30 h-screen w-[50vw]"
          fill="#4b5563"
        />
        {/* White — top left */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* Purple — left cluster accent */}
        <Spotlight
          className="-left-10 top-10 h-[80vh] w-[50vw]"
          fill="#9c40ff"
        />
        {/* Blue */}
        <Spotlight className="left-80 top-20 h-[80vh] w-[50vw]" fill="blue" />

        {/* White — mirrored right */}
        <Spotlight
          className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen w-[80vw]"
          fill="white"
          flip
        />
        {/* Purple — right accent */}
        <Spotlight
          className="-right-10 top-10 h-[80vh] w-[80vw]"
          fill="#9c40ff"
          flip
        />
        {/* Blue — right accent */}
        <Spotlight
          className="right-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
          flip
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient — faded edges */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-none whitespace-nowrap">
            Software Engineer · Backend · Fintech · Security
          </p>

          <TextGenerateEffect
            words="Building Reliable Software with Clean Code and Secure Systems"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Idemudia, a Software Engineer based in Tallinn,
            Estonia, focused on backend development, fintech, and secure
            systems.
          </p>

          <a href="#about">
            <MagicButton
              title="View my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
