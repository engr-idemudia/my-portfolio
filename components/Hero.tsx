import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-5 pt-20 sm:pt-28 md:pt-36">
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

      <div className="flex justify-center relative my-10 sm:my-16 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80vw] sm:max-w-none sm:whitespace-nowrap">
            Software Engineer · Backend · Fintech · Security
          </p> */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "#CBACF9" }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ backgroundColor: "#CBACF9" }}
              ></span>
            </span>
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "#CBACF9" }}
            >
              Open to Work
            </span>
          </div>

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80vw] sm:max-w-none sm:whitespace-nowrap">
            Software Engineer · Backend · Full-Stack · Fintech · Security
          </p>

          <TextGenerateEffect
            words="Software Engineer Building Reliable, Secure Web Applications"
            className="text-center text-[26px] sm:text-[36px] md:text-5xl lg:text-6xl"
          />

          <div className="flex flex-col items-center gap-4 mb-4">
            <img
              src="/avatar.jpg"
              alt="Idemudia M. Osaghae"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#CBACF9] shadow-lg"
            />
            <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Idemudia — a Software Engineer based in Tallinn,
              Estonia. I build secure, full-stack applications with a focus on
              backend and application security, bringing a defensive mindset
              from over a decade keeping mission-critical systems running.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="View my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="/Idemudia_Osaghae_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
