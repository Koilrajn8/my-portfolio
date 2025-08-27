import React, { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/Profilepickoil.jpg"
// Lazy load component for performance
const ProfileSection = ({
  bgStyle = "grid", // options: grid, dots, waves, lines
  name = "M Koilraj",
  title = "Full Stack Web Developer",
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const summary = `Frontend Developer with over 3.5 years of experience specializing in React.js, Redux, and GraphQL. Proven
    track record of developing robust insurance and healthcare portals, enhancing customer engagement and
    operational efficiency. Adopt at building scalable UIs, integrating APIs, and delivering high-performance
    applications. Worked at Tata Consultancy Services as a Senior System Engineer.`;

const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Senior System Engineer",
      period: "March 2022 — July 2025",
      details: [
        "3.5 years of experience in software engineering with strong knowledge of SDLC, system design, andscalable application development.",
        "Expertise in React JS, including functional components, hooks, Context API, and Redux for robust state management.",
        "Designed and implemented end-to-end scalable features, delivering high-quality, business-aligned functionality.",
        "Integrated interactive data visualizations using @nivo library, enabling stakeholders to analyze policies and make data-driven decisions.",
        "Boosted UI performance by 50% through React lifecycle optimization, virtualized lists (e.g., reactwindow), and minimizing re-renders.",
        "Developed custom, reusable components tailored to organizational needs and led frontend POC implementations for client validation.",
        "Applied advanced React optimizations like lazy loading, code splitting, and memoization, reducing initial load time by 40%.",
        "Skilled in TypeScript, using interfaces, generics, and advanced types to ensure clean, maintainable, and type-safe code.",
        "Hands-on experience with React Router, React Query, Formik forms, and Axios library.",
        "Built ADA-compliant components to support accessibility and inclusive design.",
        "Strong understanding of JavaScript fundamentals, including closures and asynchronous programming.",
        "Collaborated in an Agile environment, gaining hands-on experience in code reviews, feature planning, and cross-functional teamwork.",
        "Solved critical production bugs, ensuring 99.9% system uptime and stability.",
        "Maintained version control and continuous integration using GitLab and GitLab CI/CD pipelines."
      ]
    },
    
  ]

const skills = [
    "React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Angular", "Redux", "Tailwind CSS", "Java", "JavaScript", "Python",
    "Redux", "GraphQL", "NgRX (Angular)", "Node.js", "Express", "MongoDB", "REST APIs", "FASTAPI",
    "GitLab", "Postman", "VS Code", "MongoDB Compass", "GitHub"
]

  const toggleExperience = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const bgClasses = {
    grid: "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:40px_40px]",
    dots: "bg-[radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[length:20px_20px]",
    waves: "bg-[url('data:image/svg+xml,%3Csvg_width='100'_height='40'_xmlns='http://www.w3.org/2000/svg'%3E%3Cpath_d='M0_20_Q_25_0_50_20_T_100_20_V40_H0_Z'_fill='%23e0e7ff'/%3E%3C/svg%3E')] bg-repeat-x bg-[length:200px_80px]",
    lines: "bg-[repeating-linear-gradient(45deg,rgba(99,102,241,0.05)_0,rgba(99,102,241,0.05)_2px,transparent_2px,transparent_20px)]"
  };

  return (
   <section
  className={`min-h-screen flex items-start justify-center px-4 sm:px-6 py-8 sm:py-12 bg-fixed ${bgClasses[bgStyle]}`}
>
  <div className="max-w-6xl w-full bg-gradient-to-br from-white/85 to-indigo-50/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-10 space-y-8">

    {/* Profile top: Image left, Summary right */}
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
      
      {/* Profile image */}
      <div className="flex-shrink-0">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          className="relative"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/60">
            <img
              src={profileImage}
              alt={`${name} portrait`}
              className="object-cover w-full h-full"
            />
          </div>

          <motion.div
            initial={{ rotate: 0, opacity: 0.85 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))",
            }}
          />
        </motion.div>
      </div>

      {/* Profile summary and skills */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold">{name}</h2>
        <p className="text-indigo-600 font-medium mt-1">{title}</p>
        <p className="mt-4 text-sm md:text-base text-slate-700">{summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills?.map((data, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs"
            >
              {data}
            </span>
          ))}
        </div>

        {/* <div className="mt-6">
          <a
            href="#experience"
            className="inline-block px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:scale-105 transition-transform"
          >
            See professional experience
          </a>
        </div> */}
      </div>
    </div>

    {/* Professional Experience section (full width) */}
    <div
      id="experience"
      className="bg-white rounded-xl p-4 sm:p-6 shadow-inner"
    >
      <h3 className="text-lg font-semibold">Professional Experience</h3>

      <div className="mt-4 space-y-4">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="w-full p-4 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-indigo-50"
          >
            <button
              onClick={() => toggleExperience(idx)}
              className="flex w-full items-center justify-between text-left"
            >
              <div>
                <h4 className="text-md font-semibold">{exp.role}</h4>
                <p className="text-sm text-slate-500">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <time className="text-xs text-slate-400">{exp.period}</time>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {openIndex === idx && (
              <ul className="mt-3 ml-4 list-disc text-sm text-slate-700 space-y-1">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
        <p className="text-sm text-slate-500 mt-2">
          Click on a role to see detailed responsibilities & achievements
        </p>
      </div>
    </div>
  </div>
</section>


  );
};


export default ProfileSection;
