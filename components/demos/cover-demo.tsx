import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-450 to-neutral-450 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Career Support. Job Search Strategy. Interview Preparation
        <br />
        <Cover>Talentra Recruitment Solutions</Cover>
      </h1>
    </div>
  );
}