import React from "react";

export const IntroHeader: React.FC = () => (
  <div className="font-semibold leading-tight tracking-tight">
    <span className="text-5xl">Hey, I'm Giuseppe</span>

    <div className="text-2xl mt-4 flex gap-3 flex-wrap">
      <span className="text-[var(--text-gray)]">
        Full Stack Typescript Developer
      </span>

      <span>Frontend-leaning</span>
    </div>
  </div>
);
