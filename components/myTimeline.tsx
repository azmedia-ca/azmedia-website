import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Discover",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Define goals, constraints, and success metrics.
          </p>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Iterate on concepts, prototypes, and motion.
          </p>
        </div>
      ),
    },
    {
      title: "Develop",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Build accessible, performant, SEO-friendly experiences.
          </p>
        </div>
      ),
    },
    {
      title: "Deliver",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Launch and optimize with analytics & A/B testing.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
