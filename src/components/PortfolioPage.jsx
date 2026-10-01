

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ---- Project data (9 items) ----
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution for a fashion retailer.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "E-Commerce",
    image: "/assets/images/project-1.png",
    highlighted: true,
  },
  {
    title: "Allonsz Digital Platform",
    description: "Travel booking and planning platform",
    tags: ["Flutter", "Node.js", "Firebase"],
    category: "App Development",
    image: "/assets/images/project-2.png",
  },
  {
    title: "Smart Farm Delivery Platform",
    description: "Farm-to-home delivery platform.",
    tags: ["Flutter", "Node.js", "Firebase"],
    category: "App Development",
    image: "/assets/images/project-3.png",
  },
  {
    title: "IoT Home Automation",
    description: "Smart home automation platform.",
    tags: ["IoT", "React Native", "AWS"],
    category: "IoT",
    image: "/assets/images/project-4.png",
  },
  {
    title: "Healthcare Management System",
    description: "Healthcare management platform.",
    tags: ["Angular", "Java", "Spring", "PostgreSQL"],
    category: "Web Development",
    image: "/assets/images/project-5.png",
    highlighted: true,
  },
  {
    title: "Mobile Banking Solution",
    description: "A secure, feature-rich mobile banking application",
    tags: ["Angular", "Java", "Spring", "PostgreSQL"],
    category: "App Development",
    image: "/assets/images/project-6.png",
  },
  {
    title: "AI Healthcare Platform",
    description: "An AI-powered healthcare platform for health tracking.",
    tags: ["Flutter", "Node.js", "Firebase"],
    category: "App Development",
    image: "/assets/images/project-7.png",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence platform with predictive analytics",
    tags: ["Python", "TensorFlow", "Vue.js"],
    category: "Web Development",
    image: "/assets/images/project-8.png",
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end logistics and inventory management system",
    tags: ["React", "Node.js", "MongoDB", "IoT"],
    category: "IoT",
    image: "/assets/images/project-9.png",
  },
];

const filters = [
  "All",
  "App Development",
  "Web Development",
  "IoT",
  "E-Commerce",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Stores which card cursor is currently on
  const [hoveredCard, setHoveredCard] = useState(null);

  // Stores which card cursor is currently moving on
  const [movingCard, setMovingCard] = useState(null);

  const stopTimer = useRef(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // When mouse enters card
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    setMovingCard(index);
  };

  // When mouse moves inside card
  const handleMouseMove = (index) => {
    setMovingCard(index);

    if (stopTimer.current) {
      clearTimeout(stopTimer.current);
    }

    // If cursor stops moving for 180ms,
    // show complete border
    stopTimer.current = setTimeout(() => {
      setMovingCard(null);
    }, 180);
  };

  // When mouse leaves card
  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMovingCard(null);

    if (stopTimer.current) {
      clearTimeout(stopTimer.current);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-pink-100">
      {/* ================= HERO ================= */}
      <section className="px-6 pb-16 pt-14 md:pl-40 md:pr-8">
       <div className="max-w-5xl text-left">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-lg">
            <Link
              href="/"
              className="text-gray-800 transition-colors hover:text-violet-700"
            >
              Home
            </Link>

            <span className="text-gray-400">»</span>

            <span className="font-medium text-violet-700">
              Portfolio
            </span>
          </div>

          {/* Heading */}
          
         
<h1 className="w-full max-w-5xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
  PCreating Digital Experiences That Drive <br />Real Impact
</h1>
        <p className="mt-6 max-w-4xl text-2xl text-blue-700">
  Explore our collection of innovative solutions, successful projects  that showcase
  <br />
  our expertise and innovation.
</p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] mb-20"
          >
            Have a Project in Mind?
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ================= FILTER TABS ================= */}
     
      <section className="px-6 pb-16 md:px-16">
  <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-10">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        className={`h-[52px] w-[226px] shrink-0 rounded-2xl border text-sm font-semibold transition-colors ${
          activeFilter === filter
            ? "border-violet-700 bg-violet-700 text-white"
            : "border-gray-500 bg-white text-gray-800 hover:border-violet-400"
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
</section>

      {/* ================= PROJECT GRID ================= */}
      <section className="relative z-10 px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card group relative overflow-visible min-h-[450px] rounded-xl bg-white pb-6 transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* =================================================
                  MOVING BORDER
                  Visible only while cursor is moving
              ================================================= */}
              {hoveredCard === index && movingCard === index && (
                <svg
                  className="pointer-events-none absolute -inset-2 z-30 h-[calc(100%+16px)] w-[calc(100%+16px)]"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    rx="2"
                    fill="none"
                    stroke="#e808a1"
                    strokeWidth="0.7"
                    strokeDasharray="75 25"
                    className="moving-border"
                  />
                </svg>
              )}

              {/* =================================================
                  FULL BORDER
                  Visible when cursor stops moving
              ================================================= */}
              {hoveredCard === index && movingCard !== index && (
                <div className="full-hover-border pointer-events-none absolute -inset-2 z-30 rounded-xl" />
              )}

              {/* Image */}
              
              
<img
  src={project.image}
  alt={project.title}
  className="relative z-20 mx-4 mt-3 mb-7 h-[350px] w-[calc(100%-2rem)] max-w-none rounded-xl object-cover"
/>
              {/* Content */}
              <div className="relative z-20 px-4 text-center">
                <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-blue-700">
                  {project.title}
                </h3>

                <p className="mb-4 text-lg text-gray-700">
                  {project.description}
                </p>

                <span className="inline-block rounded-full bg-fuchsia-600 px-4 py-1.5 text-sm font-medium text-white">
                  {project.tags.join(".")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-10 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-black px-6 py-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Create Your Success Story
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Ready to start your next project? Contact us today to discuss how
            we can bring your vision to life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg border border-white/40 bg-purple-800 px-10 py-4 font-semibold text-white transition-colors hover:bg-purple-700"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}

