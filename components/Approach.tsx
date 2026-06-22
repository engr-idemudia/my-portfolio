import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// Order in which the card backgrounds reveal. -1 is a short "off" beat
// so they appear one after the other, intermittently.
const SEQUENCE = [0, -1, 1, -1, 2, -1];

const Approach = () => {
  const [step, setStep] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const active = SEQUENCE[step];

  React.useEffect(() => {
    if (paused) return;
    const delay = SEQUENCE[step] === -1 ? 500 : 2600;
    const timer = setTimeout(() => {
      setStep((s) => (s + 1) % SEQUENCE.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [step, paused]);

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span> to{" "}
        <span className="text-purple">work</span>
      </h1>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4"
      >
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="Every project starts with understanding the problem. I work with stakeholders to define requirements, map system architecture, and plan a clean, scalable solution before writing a single line of code."
          auto={!paused && active === 0}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Iteration"
          icon={<AceternityIcon order="Phase 2" />}
          des="I build iteratively, writing clean and well-structured code with regular progress updates. I follow best practices including code reviews, version control, and testing throughout the development cycle."
          auto={!paused && active === 1}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Testing & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="Once the build is stable and tested, I handle deployment, documentation, and handover. I ensure the final product is secure, performant, and maintainable for the long term."
          auto={!paused && active === 2}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  auto,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  auto: boolean;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const show = hovered || auto;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] min-h-[22rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <div className="min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white text-black text-xl sm:text-2xl md:text-3xl
         relative z-10 mt-6 font-bold transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm relative z-10 mt-4 text-center transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
