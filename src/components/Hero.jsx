// "use client";

// import React, { useEffect, useState } from "react";

// function Hero() {
// const headings = [
// {
// line1: "Build. Innovate.",
// line2: "Grow with Technology.",
// },
// {
// line1: "Turning Ideas Into Digital",
// line2: "Success",
// },
// {
// line1: "Where Innovation Meets",
// line2: "Impact",
// },
// ];

// const [currentHeading, setCurrentHeading] = useState(0);

// useEffect(() => {
// const interval = setInterval(() => {
// setCurrentHeading((prev) => (prev + 1) % headings.length);
// }, 3000);


// return () => clearInterval(interval);


// }, []);

// return (
// <section
// className="hero-section"
// style={{
// backgroundImage: "url('/assets/hero.gif')",
// }}
// > 
// <div className="hero-overlay">
//    <div className="hero-container">
// {/* LEFT CONTENT */} <div className="hero-content"> <h1 key={currentHeading}>
// {headings[currentHeading].line1} <br />
// {headings[currentHeading].line2} </h1>


//         <p>
//           SOWSI Technologies helps businesses build scalable digital
//           solutions across Web, Mobile, AI, IoT, and Cloud...
//         </p>

//         <div className="hero-buttons">
//           <button type="button" className="explore-btn">
//             Explore Our Work
//           </button>

//           <button type="button" className="project-btn">
//             Start a project
//           </button>
//         </div>
//       </div>

//       {/* DASHBOARD IMAGE */}
//       <img
//         src="/assets/dashboard.png"
//         alt="Dashboard Analytics"
//         className="dashboard-image"
//       />

//       {/* CHART IMAGE */}
//       <img
//         src="/assets/chart.png"
//         alt="Analytics Chart"
//         className="chart-image"
//       />

//       {/* STATISTICS CARDS */}
//       <div className="stats-container">
//         <div className="stat-card">
//           <p>Years Building Products</p>
//           <h3>12+</h3>
//         </div>

//         <div className="stat-card">
//           <p>Platforms Delivered</p>
//           <h3>160+</h3>
//         </div>

//         <div className="stat-card">
//           <p>Automation Hours Saved</p>
//           <h3>24000+</h3>
//         </div>

//         <div className="stat-card">
//           <p>Client Satisfaction</p>
//           <h3>98+</h3>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// );
// }

// export default Hero;

"use client";

import React, { useEffect, useState } from "react";

function Hero() {
  const headings = [
    {
      line1: "Build. Innovate.",
      line2: "Grow with Technology.",
    },
    {
      line1: "Turning Ideas Into Digital",
      line2: "Success",
    },
    {
      line1: "Where Innovation Meets",
      line2: "Impact",
    },
  ];

  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* BACKGROUND VIDEO */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay">
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">
            <h1 key={currentHeading}>
              {headings[currentHeading].line1}
              <br />
              {headings[currentHeading].line2}
            </h1>

            <p>
              SOWSI Technologies helps businesses build scalable digital
              solutions across Web, Mobile, AI, IoT, and Cloud...
            </p>

            <div className="hero-buttons">
              <button type="button" className="explore-btn">
                Explore Our Work
              </button>

              <button type="button" className="project-btn">
                Start a project
              </button>
            </div>
          </div>

          {/* DASHBOARD IMAGE */}
          <img
            src="/assets/dashboard.png"
            alt="Dashboard Analytics"
            className="dashboard-image"
          />

          {/* CHART IMAGE */}
          <img
            src="/assets/chart.png"
            alt="Analytics Chart"
            className="chart-image"
          />

          {/* STATISTICS CARDS */}
          <div className="stats-container">
            <div className="stat-card">
              <p>Years Building Products</p>
              <h3>12+</h3>
            </div>

            <div className="stat-card">
              <p>Platforms Delivered</p>
              <h3>160+</h3>
            </div>

            <div className="stat-card">
              <p>Automation Hours Saved</p>
              <h3>24000+</h3>
            </div>

            <div className="stat-card">
              <p>Client Satisfaction</p>
              <h3>98+</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;