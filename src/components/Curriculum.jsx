import React, { useState } from "react";

const weekContent = {
  1: {
    title: "Week 1: Entrepreneurial Foundation",
    items: [
      "🧠 Introduction to Entrepreneurial Mindset",
      "💡 Understanding Innovation and Risk-Taking",
      "🔄 Learning from Failure and Building Resilience",
      "🎯 Setting Your Entrepreneurial Goals",
      "📝 Personal Strengths and Skills Assessment",
    ],
  },
  2: {
    title: "Week 2: Opportunity Discovery",
    items: [
      "🔍 Problem Identification Techniques",
      "👥 Customer Interview and Research Methods",
      "✅ Idea Validation Frameworks",
      "📊 Market Research Fundamentals",
      "🎯 Defining Your Target Customer",
    ],
  },
  3: {
    title: "Week 3: Business Model Design",
    items: [
      "🎨 Business Model Canvas Workshop",
      "💰 Value Proposition Design",
      "📈 Revenue Model Planning",
      "🔗 Key Partnerships and Resources",
      "⚙️ Cost Structure Analysis",
    ],
  },
  4: {
    title: "Week 4: Market Strategy",
    items: [
      "🎯 Go-to-Market Strategy Development",
      "🏆 Competitive Analysis",
      "📱 Digital Marketing Basics",
      "🤝 Customer Acquisition Strategies",
      "📊 Metrics and KPIs",
    ],
  },
  5: {
    title: "Week 5: Financial Planning & Launch",
    items: [
      "💵 Financial Planning and Budgeting",
      "📈 Revenue Forecasting",
      "💸 Funding Options Overview",
      "🚀 Launch Preparation",
      "🎓 Next Steps and Continued Learning",
    ],
  },
};

const Curriculum = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  return (
    <section className="bg-gray-50 py-16" id="curriculum">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-2">
          VikaasGarh Startup School
        </h1>
        <h2 className="text-xl text-center text-gray-600 font-medium mb-10">
          Exploration Track – 5-Week Cohort
        </h2>

        {/* Pillars Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10 text-center">
          <div className="bg-gray-200 py-2 px-3 rounded font-medium">Entrepreneurial Mindset</div>
          <div className="bg-gray-200 py-2 px-3 rounded font-medium">Opportunity Recognition</div>
          <div className="bg-gray-200 py-2 px-3 rounded font-medium">Business Model</div>
          <div className="bg-gray-200 py-2 px-3 rounded font-medium">Market Strategy</div>
          <div className="bg-gray-200 py-2 px-3 rounded font-medium">Financial Literacy</div>
        </div>

        {/* Week Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(weekContent).map(([week, data]) => (
            <button
              key={week}
              onClick={() => setSelectedWeek(Number(week))}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedWeek === Number(week)
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {data.title.split(":")[0]} {/* Just "Week 1", etc */}
            </button>
          ))}
        </div>

        {/* Week Content */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            {weekContent[selectedWeek].title}
          </h3>
          <ul className="list-none space-y-2">
            {weekContent[selectedWeek].items.map((item, index) => (
              <li key={index} className="border-b pb-2 text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center mt-10">
          <a
            href="#apply"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-all"
          >
            Apply for Next Cohort
          </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
