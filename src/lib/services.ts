export type Service = {
  title: string;
  shortDescription: string;
  whoItIsFor: string;
  whatItIncludes: string[];
  outcome: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    title: "Business Clarity Audit",
    shortDescription:
      "A focused strategic review to identify bottlenecks, blind spots, and highest-leverage next moves.",
    whoItIsFor:
      "Founders and operators navigating complexity, stalled growth, or misalignment in execution.",
    whatItIncludes: [
      "Current-state business model assessment",
      "Growth constraint mapping",
      "Decision framework for next 90 days",
    ],
    outcome:
      "A clear strategic direction with prioritized actions and sharper operating focus.",
    ctaLabel: "Book an Audit",
  },
  {
    title: "AI Implementation Sprint",
    shortDescription:
      "A hands-on sprint to embed practical AI workflows into core business functions.",
    whoItIsFor:
      "Small teams that want immediate productivity gains without bloated transformation projects.",
    whatItIncludes: [
      "Workflow opportunity audit",
      "Tool and process selection",
      "Implementation roadmap with quick wins",
    ],
    outcome:
      "A deployed, team-ready AI workflow stack that saves time and compounds output.",
    ctaLabel: "Start a Sprint",
  },
  {
    title: "Growth Strategy Retainer",
    shortDescription:
      "Ongoing advisory support for strategic execution, systems design, and growth planning.",
    whoItIsFor:
      "Leaders who need a strategic thought partner to maintain momentum through scaling stages.",
    whatItIncludes: [
      "Monthly strategic planning sessions",
      "Execution scorecards and KPI review",
      "Asynchronous advisory support",
    ],
    outcome:
      "Stronger execution rhythm, tighter strategic alignment, and sustained growth momentum.",
    ctaLabel: "Discuss Retainer",
  },
];
