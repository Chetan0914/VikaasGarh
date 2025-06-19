import React from "react";

const pillars = [
  {
    number: 1,
    title: "Entrepreneurial Mindset Development",
    description:
      "Build the mental muscle to embrace innovation, take risks, and bounce back from failures — the mindset every founder needs to thrive.",
  },
  {
    number: 2,
    title: "Opportunity Recognition & Validation",
    description:
      "Learn how to identify real problems in the world around you, and validate your ideas through customer feedback and hands-on research.",
  },
  {
    number: 3,
    title: "Business Model Design",
    description:
      "Master tools like the Business Model Canvas and Value Proposition Canvas to create sustainable, scalable, and customer-focused ventures.",
  },
  {
    number: 4,
    title: "Market Intelligence & Strategy",
    description:
      "Gain deep insights into your target market, analyze competitors, and design a winning go-to-market strategy to make your startup stand out.",
  },
  {
    number: 5,
    title: "Financial Literacy & Resource Management",
    description:
      "Understand business finance, build lean budgets, model revenue, and manage your resources smartly for long-term success.",
  },
];

const Pillars = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          The Foundation: Five Core Pillars
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          The Exploration Track is anchored on five powerful pillars designed to
          build a strong entrepreneurial foundation.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold mb-4">
                {pillar.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
