import React from "react";

import { education, certifications } from "@/data";
import { Button } from "./ui/MovingBorders";

const Education = () => {
  return (
    <div className="py-20 w-full" id="education">
      <h1 className="heading">
        <span className="text-purple">Education</span> &{" "}
        <span className="text-purple">Certifications</span>
      </h1>

      {/* Education — two columns, side by side like Experience */}
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {education.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-8">
              <p className="text-start text-purple text-sm font-semibold tracking-wide">
                {item.period}
              </p>
              <h1 className="text-start text-white text-lg md:text-xl font-bold mt-2">
                {item.degree}
              </h1>
              <p className="text-start text-white-100 mt-2 font-semibold">
                {item.institution}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              {item.note ? (
                <p className="text-start text-white-100 opacity-80 mt-3 text-sm">
                  {item.note}
                </p>
              ) : null}
            </div>
          </Button>
        ))}
      </div>

      {/* Certifications — two columns, side by side */}
      <div className="w-full mt-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {certifications.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-8">
              <h1 className="text-start text-white text-lg md:text-xl font-bold">
                {item.name}
              </h1>
              <p className="text-start text-white-100 mt-2 font-semibold">
                {item.issuer} · {item.year}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
