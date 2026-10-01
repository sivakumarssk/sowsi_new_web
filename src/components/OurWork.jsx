     "use client";
import { useState ,useRef} from "react";
const projects = [
  {
    image: "/assets/images/project-1.png",
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution for a fashion retailer.",
    tag: "React.Node.js.MongoDB",
  },
  {
    image:  "/assets/images/project-2.png",
    title: "Allonsz Digital Platform",
    description: "Travel booking and planning platform.",
    tag: "Flutter.Node.js.Firebase",
  },
  {
    image: "/assets/images/project-3.png",
    title: "Smart Farm Delivery Platform",
    description: "Farm-to-home delivery platform.",
    tag: "Flutter.Node.js.Firebase",
  },
  {
    image:  "/assets/images/project-4.png",
    title: "IoT Home Automation",
    description: "Smart home automation platform.",
    tag: "IoT.Node.js.AWS",
  },
  {
    image:  "/assets/images/project-5.png",
    title: "Healthcare Management System",
    description: "Healthcare management platform.",
    tag: "React.Spring Boot.PostgreSQL",
  },
];

export default function OurWork() {
 
const [hoveredCard, setHoveredCard] = useState(null);
const [movingCard, setMovingCard] = useState(null);

const moveTimer = useRef(null);

const handleMouseEnter = (index) => {
  setHoveredCard(index);
  setMovingCard(index);
};

const handleMouseMove = (index) => {
  setHoveredCard(index);
  setMovingCard(index);

  clearTimeout(moveTimer.current);

  moveTimer.current = setTimeout(() => {
    setMovingCard(null);
  }, 150);
};

const handleMouseLeave = () => {
  clearTimeout(moveTimer.current);
  setHoveredCard(null);
  setMovingCard(null);
};
  return (
    <section className="our-work">
      <div className="our-work__inner">
        <h2 className="our-work__eyebrow">Our Work</h2>
        <p className="our-work__heading">Featured Projects</p>
        <p className="our-work__lead">
          Explore our portfolio of successful projects and see how we&apos;ve
          helped businesses across various industries.
        </p>

        <div className="our-work__grid">
          {projects.map((project, index) => (
  <div
    className="our-work__card"
    key={project.title}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseMove={() => handleMouseMove(index)}
    onMouseLeave={handleMouseLeave}
  >
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
{hoveredCard === index && movingCard !== index && (
  <div className="full-hover-border pointer-events-none absolute -inset-2 z-30 rounded-xl" />
)}
              <img
                src={project.image}
                alt={project.title}
                className="our-work__card-img"
              />
              <h3 className="our-work__card-title">{project.title}</h3>
              <p className="our-work__card-desc">{project.description}</p>
              <span className="our-work__card-tag">{project.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}