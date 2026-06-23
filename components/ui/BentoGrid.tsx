import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaLock, FaShieldAlt, FaDatabase } from "react-icons/fa";

import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techStackColumns = [
    ["Java", "TypeScript", "JavaScript", "Python"],
    ["Spring Boot", "Node.js", "Next.js", "React"],
    ["PostgreSQL", "MySQL", "MongoDB"],
    ["Docker", "Render", "CI/CD", "Vercel"],
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "admin@idemudia.dev";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Main background image */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover transition duration-500",
                id === 1
                  ? "object-center object-right-top group-hover/bento:scale-105"
                  : "object-center",
                id === 5 &&
                  "brightness-[1.2] contrast-[1.1] drop-shadow-[0_0_18px_rgba(203,172,249,0.35)]",
              )}
            />
          )}
        </div>

        {/* Card 1: gradient fade at bottom so text is always readable */}
        {id === 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-[rgba(4,7,29,1)] via-[rgba(4,7,29,0.85)] to-transparent z-10 pointer-events-none" />
        )}

        {/* Spare image (card 4 and card 5) */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Card 6 — gradient background animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-lg sm:text-2xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Title / description container */}
        <div
          className={cn(
            titleClassName,
            "transition duration-200 relative h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 1 && "!justify-end !items-center !text-center",
            id !== 1 && "group-hover/bento:translate-x-2",
            // Card 2 (globe): anchored top-left, tight padding
            id === 2 && "!justify-end !items-start !p-2 !px-2",
            // Card 3 (tech stack): title row across the top, pills fill below
            id === 3 &&
              "!flex-row !flex-wrap !items-baseline !justify-start gap-x-2 !p-4 lg:!p-5",
            // Card 5 (code snippet): push text to bottom-left, leave right side for code
            id === 5 && "!justify-start !pt-4 !pl-4 !pr-4",
          )}
        >
          {/* Description label */}
          <div
            className={cn(
              "font-sans font-extralight text-xs md:text-xs lg:text-sm text-[#C1C2D3] z-10",
              id === 1 && "!text-white !opacity-100",
              id === 2 && "!text-[9px]",
              id === 3 && "whitespace-nowrap",
              // Card 5: constrain to left half so it doesn't cover the code
              id === 5 &&
                "text-xs md:text-xs lg:text-sm max-w-[38%] md:max-w-full lg:max-w-[45%] bg-[rgba(4,7,29,0.8)] backdrop-blur-sm rounded-xl p-2 border-r-2 border-purple-500/40",
            )}
          >
            {description}
          </div>

          {/* Title */}
          <div
            className={cn(
              "font-sans z-20 font-bold",
              // Card 1: readable over gradient overlay
              id === 1 &&
                "text-xs sm:text-xs md:text-sm lg:text-2xl max-w-[88%] !text-white !opacity-100",
              // Card 2 (globe): frosted pill background
              id === 2 &&
                "text-sm sm:text-base max-w-[10rem] relative bg-transparent rounded-lg px-1 py-0 backdrop-blur-sm leading-tight",
              // Card 5: constrained left half, frosted bg, subtle right accent border
              id === 5 &&
                "text-xs sm:text-sm md:text-base lg:text-xl max-w-[38%] md:max-w-full lg:max-w-[35%] bg-[rgba(4,7,29,0.8)] backdrop-blur-sm rounded-xl p-2 border-r-2 border-purple-500/40",
              // Card 3 (tech stack): single horizontal line, no width clamp
              id === 3 &&
                "text-sm sm:text-base lg:text-xl !max-w-none whitespace-nowrap",
              // All other cards (4, 6)
              id !== 1 &&
                id !== 2 &&
                id !== 3 &&
                id !== 5 &&
                id !== 6 &&
                "text-xs sm:text-sm md:text-base lg:text-2xl max-w-[55%] !items-start !justify-start",
            )}
          >
            {title}
          </div>

          {/* Card 2 — 3D globe */}
          {id === 2 && (
            <>
              <GridGlobe />
              <p className="absolute top-3 right-4 z-50 text-[10px] text-white/60 tracking-widest uppercase whitespace-nowrap">
                drag to rotate
              </p>
            </>
          )}

          {/* Card 3 — Tech stack pills (four columns, centred below the title) */}
          {id === 3 && (
            <div className="absolute inset-x-4 lg:inset-x-5 top-14 lg:top-16 bottom-4 lg:bottom-5 grid grid-cols-4 content-center gap-x-1.5 lg:gap-x-3 z-10">
              {techStackColumns.map((column, ci) => (
                <div key={ci} className="flex flex-col gap-1.5 lg:gap-2.5">
                  {column.map((item, i) => (
                    <span
                      key={i}
                      className="py-1 px-1.5 lg:py-2 lg:px-3 text-[8px] sm:text-[10px] lg:text-sm leading-tight rounded-lg text-center bg-[#10132E] border border-[#CBACF9]/30 hover:border-[#CBACF9] transition duration-200 whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Card 4 — Security & fintech icons */}
          {id === 4 && (
            <div className="absolute bottom-8 right-14 flex gap-5">
              <div className="flex flex-col items-center gap-2">
                <FaShieldAlt className="text-[#CBACF9] text-4xl" />
                <span className="text-[10px] text-[#C1C2D3]">Security</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaLock className="text-[#CBACF9] text-4xl" />
                <span className="text-[10px] text-[#C1C2D3]">Fintech</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaDatabase className="text-[#CBACF9] text-4xl" />
                <span className="text-[10px] text-[#C1C2D3]">Backend</span>
              </div>
            </div>
          )}

          {/* Card 6 — Copy email button */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
