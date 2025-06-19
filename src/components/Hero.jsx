import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Explore. Learn. Launch.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Learn the basics of startups and business with the VikaasGarh Startup School Certification Program on Startup and Business Exploration and take your first step toward becoming a future startup founder or a successful businessman.
        </p>
        <a
          href="#apply"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Apply Now to Join the Cohort
        </a>
      </div>
    </section>
  );
}
