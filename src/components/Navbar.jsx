

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronDown, Phone, ArrowRight } from "lucide-react";

// function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isNavigating, setIsNavigating] = useState(false);

//   const pathname = usePathname();

//   // Handle navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Remove overlay after navigation
//   useEffect(() => {
//     setIsNavigating(false);
//     setActiveDropdown(null);
//   }, [pathname]);

//   const services = [
//     { name: "Overview", href: "/services" },
//     { name: "Web Development", href: "/services/web-development" },
//     { name: "Mobile Development", href: "/services/mobile-development" },
//     { name: "IoT Solutions", href: "/services/iot-solutions" },
//     { name: "AI & Data", href: "/services/ai-data" },
//     { name: "Cloud & DevOps", href: "/services/cloud-devops" },
//     { name: "Consulting & Strategy", href: "/services/consulting-strategy" },
//     { name: "Invoice & Inventory Suite", href: "/services/invoice-inventory" },
//   ];

//   const handleServicesClick = () => {
//     setActiveDropdown(
//       activeDropdown === "services" ? null : "services"
//     );
//   };

//   // Start background transition
//   const handleNavigation = (href) => {
//     if (href !== pathname) {
//       setIsNavigating(true);
//     }
//   };

//   return (
//     <>
//       {/* Page transition overlay */}
//       {isNavigating && (
//         <div className="page-transition-overlay"></div>
//       )}

//       {/* <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}> */}
//       <header
//   className={`navbar ${
//     isScrolled ? "navbar-scrolled" : ""
//   } ${pathname === "/" ? "home-navbar" : "inner-navbar"}`}
// >
//         <div className="navbar-container">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="logo"
//             onClick={() => handleNavigation("/")}
//           >
//             <img src="/assets/logo.png" alt="Company Logo" />
//           </Link>

//           {/* Navigation */}
//           <nav className="nav-links">

//             {/* Home */}
//             <Link href="/" onClick={() => handleNavigation("/")}>
//               Home
//             </Link>

//             {/* Services Dropdown */}
//             <div className="nav-dropdown">
//               <button
//                 type="button"
//                 className="nav-item"
//                 onClick={handleServicesClick}
//               >
//                 Services
//                 <ChevronDown size={17} />
//               </button>

//               {activeDropdown === "services" && (
//                 <div className="dropdown-menu services-menu">
//                   {services.map((service, index) => (
//                     <React.Fragment key={service.name}>
//                       <Link
//                         href={service.href}
//                         onClick={() => {
//                           handleNavigation(service.href);
//                           setActiveDropdown(null);
//                         }}
//                       >
//                         {service.name}
//                       </Link>

//                       {index === 0 && (
//                         <div className="dropdown-divider"></div>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Products */}
//             <Link
//               href="/products"
//               className="text-[15px] font-medium text-gray-700 transition-colors hover:text-violet-700"
//               onClick={() => handleNavigation("/products")}
//             >
//               Products
//             </Link>

//             {/* About */}
//             <Link href="/about" onClick={() => handleNavigation("/about")}>
//               About
//             </Link>

//             {/* Portfolio */}
//             <Link
//               href="/portfolio"
//               onClick={() => handleNavigation("/portfolio")}
//             >
//               Portfolio
//             </Link>

//             {/* Contact */}
//             <Link
//               href="/contact"
//               className="contact-link"
//               onClick={() => handleNavigation("/contact")}
//             >
//               Contact
//               <Phone size={17} fill="currentColor" />
//             </Link>
//           </nav>

//           {/* Get Started */}
//           <Link
//             href="/contact"
//             className="get-started-btn"
//             onClick={() => handleNavigation("/contact")}
//           >
//             Get Started
//             <ArrowRight size={21} />
//           </Link>

//         </div>
//       </header>
//     </>
//   );
// }

// export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const pathname = usePathname();

  // Navbar scroll effect
  // Navbar shrinks when scrolling down and expands when scrolling up
// Navbar shrinks when scrolling down and expands when scrolling up
useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // At the top, show the original navbar
    if (currentScrollY < 50) {
      setIsScrolled(false);
    }
    // Scrolling down: shrink the navbar
    else if (currentScrollY > lastScrollY + 3) {
      setIsScrolled(true);
    }
    // Scrolling up: expand the navbar
    else if (currentScrollY < lastScrollY - 3) {
      setIsScrolled(false);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  // Reset dropdown and transition after navigation
  useEffect(() => {
    setIsNavigating(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Services mega menu categories
  // const services = [
  //   {
  //     title: "ML & AI SERVICES",
  //     items: [
  //       "Machine Learning Development",
  //       "Predictive Analytics",
  //       "Natural Language Processing (NLP)",
  //       "Computer Vision Solutions",
  //       "Business Intelligence (BI) & Analytics",
  //     ],
  //   },
  //   {
  //     title: "UX & UI DESIGN",
  //     items: [
  //       "Prototypes",
  //       "Wireframe Design",
  //       "Application Design",
  //       "Web Design",
  //     ],
  //   },
  //   {
  //     title: "WEB DESIGN & DEVELOPMENT",
  //     items: [
  //       "Angular Development",
  //       "React JS Development",
  //       "Node JS Development",
  //       "MongoDB Development",
  //       "PHP Development",
  //     ],
  //   },
  //   {
  //     title: "MOBILE APPLICATION DEVELOPMENT",
  //     items: [
  //       "Android Apps Development",
  //       "iOS Apps Development",
  //       "Ionic Apps Development",
  //       "Wearable Apps Development",
  //     ],
  //   },
  //   {
  //     title: "DIGITAL MARKETING",
  //     items: [
  //       "Search Engine Optimization",
  //       "Social Media Marketing",
  //       "Social Media Optimization",
  //       "Search Engine Marketing",
  //       "Pay per click",
  //     ],
  //   },
  //   {
  //     title: "SAP CONSULTING",
  //     items: [
  //       "ABAP Cloud",
  //       "ABAP Development Tools (ADT)",
  //       "ABAP Managed Database Procedures (AMDP)",
  //       "Application Programming Interface (API)",
  //     ],
  //   },
  //   {
  //     title: "IT RESOURCE EXPANSION",
  //     items: [
  //       "Tailored Solutions",
  //       "Quality Assurance",
  //       "Seamless Integration",
  //       "Scalability",
  //       "Continuous Support",
  //     ],
  //   },
  // ];
const services = [
  {
    title: "ML & AI SERVICES",
    items: [
      { name: "Machine Learning Development", slug: "machine-learning-development" },
      { name: "Predictive Analytics", slug: "predictive-analytics" },
      { name: "Natural Language Processing (NLP)", slug: "natural-language-processing" },
      { name: "Computer Vision Solutions", slug: "computer-vision" },
      { name: "Business Intelligence (BI) & Analytics", slug: "business-intelligence" },
    ],
  },
  {
    title: "UX & UI DESIGN",
    items: [
      { name: "Prototypes", slug: "prototypes" },
      { name: "Wireframe Design", slug: "wireframe-design" },
      { name: "Application Design", slug: "application-design" },
      { name: "Web Design", slug: "web-design" },
    ],
  },
  {
    title: "WEB DESIGN & DEVELOPMENT",
    items: [
      { name: "Angular Development", slug: "angular-development" },
      { name: "React JS Development", slug: "react-js-development" },
      { name: "Node JS Development", slug: "node-js-development" },
      { name: "MongoDB Development", slug: "mongodb-development" },
      { name: "PHP Development", slug: "php-development" },
    ],
  },
  {
    title: "MOBILE APPLICATION DEVELOPMENT",
    items: [
      { name: "Android Apps Development", slug: "android-apps-development" },
      { name: "iOS Apps Development", slug: "ios-apps-development" },
      { name: "Ionic Apps Development", slug: "ionic-apps-development" },
      { name: "Wearable Apps Development", slug: "wearable-apps-development" },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    items: [
      { name: "Search Engine Optimization", slug: "search-engine-optimization" },
      { name: "Social Media Marketing", slug: "social-media-marketing" },
      { name: "Social Media Optimization", slug: "social-media-optimization" },
      { name: "Search Engine Marketing", slug: "search-engine-marketing" },
      { name: "Pay per click", slug: "pay-per-click" },
    ],
  },
  {
    title: "SAP CONSULTING",
    items: [
      { name: "ABAP Cloud", slug: "abap-cloud" },
      { name: "ABAP Development Tools (ADT)", slug: "abap-development-tools" },
      { name: "ABAP Managed Database Procedures (AMDP)", slug: "abap-managed-database-procedures" },
      { name: "Application Programming Interface (API)", slug: "application-programming-interface" },
    ],
  },
  {
    title: "IT RESOURCE EXPANSION",
    items: [
      { name: "Tailored Solutions", slug: "tailored-solutions" },
      { name: "Quality Assurance", slug: "quality-assurance" },
      { name: "Seamless Integration", slug: "seamless-integration" },
      { name: "Scalability", slug: "scalability" },
      { name: "Continuous Support", slug: "continuous-support" },
    ],
  },
];
  // Toggle Services dropdown
  const handleServicesClick = () => {
    setActiveDropdown(
      activeDropdown === "services" ? null : "services"
    );
  };

  // Navigation transition
  const handleNavigation = (href) => {
    if (href !== pathname) {
      setIsNavigating(true);
    }
  };

  return (
    <>
      {/* Page transition overlay */}
      {isNavigating && (
        <div className="page-transition-overlay"></div>
      )}

      {/* Navbar */}
      <header
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : ""
        } ${pathname === "/" ? "home-navbar" : "inner-navbar"}`}
      >
        <div className="navbar-container">

          {/* Logo */}
          <Link
            href="/"
            className="logo"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="/assets/logo.png"
              alt="Company Logo"
            />
          </Link>

          {/* Navigation links */}
          <nav className="nav-links">

            {/* Home */}
            <Link
              href="/"
              onClick={() => handleNavigation("/")}
            >
              Home
            </Link>

            {/* Services Mega Menu */}
            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-item"
                onClick={handleServicesClick}
                aria-expanded={activeDropdown === "services"}
              >
                Services
                <ChevronDown
                  size={17}
                  className={
                    activeDropdown === "services"
                      ? "chevron-open"
                      : ""
                  }
                />
              </button>

              {activeDropdown === "services" && (
                <>
                  {/* Background overlay */}
                  <div
                    className="mega-menu-backdrop"
                    onClick={() => setActiveDropdown(null)}
                  ></div>

                  {/* Mega Menu */}
                  {/* <div className="services-mega-menu">
                    <div className="mega-menu-grid">
                      {services.map((category) => (
                        <div
                          className="mega-menu-category"
                          key={category.title}
                        >
                          <h3 className="mega-menu-heading">
                            {category.title}
                          </h3>

                          <ul>
                            {category.items.map((item) => (
                              <li key={item}>
     <Link
  href={`/services/${
    {
      // UX & UI Design
      Prototypes: "prototypes",
      "Wireframe Design": "wireframe-design",
      "Application Design": "application-design",
      "Web Design": "web-design",

      // ML & AI Services
      "Machine Learning Development": "machine-learning-development",
      "Predictive Analytics": "predictive-analytics",
      "Natural Language Processing (NLP)": "natural-language-processing",
      "Computer Vision Solutions": "computer-vision",
      "Business Intelligence (BI) & Analytics": "business-intelligence",
    }[item] || "services"
  }`}
  onClick={() => {
    const slug = {
      Prototypes: "prototypes",
      "Wireframe Design": "wireframe-design",
      "Application Design": "application-design",
      "Web Design": "web-design",

      "Machine Learning Development": "machine-learning-development",
      "Predictive Analytics": "predictive-analytics",
      "Natural Language Processing (NLP)": "natural-language-processing",
      "Computer Vision Solutions": "computer-vision",
      "Business Intelligence (BI) & Analytics": "business-intelligence",
    }[item];

    const href = slug ? `/services/${slug}` : "/services";

    handleNavigation(href);
    setActiveDropdown(null);
  }}
>
  {item}
</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  <div className="services-mega-menu">
  <div className="mega-menu-grid">
    {services.map((category) => (
      <div className="mega-menu-category" key={category.title}>
        <h3 className="mega-menu-heading">{category.title}</h3>

        <ul>
          {category.items.map((item) => {
            const name = typeof item === "string" ? item : item.name;

            const slug =
              typeof item === "string"
                ? item
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")
                : item.slug;

            return (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  onClick={() => {
                    handleNavigation(`/services/${slug}`);
                    setActiveDropdown(null);
                  }}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    ))}
  </div>
</div>
                </>
              )}
            </div>

            {/* Products */}
            <Link
              href="/products"
              className="text-[15px] font-medium text-gray-700 transition-colors hover:text-violet-700"
              onClick={() => handleNavigation("/products")}
            >
              Products
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={() => handleNavigation("/about")}
            >
              About
            </Link>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              onClick={() => handleNavigation("/portfolio")}
            >
              Portfolio
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="contact-link"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
              <Phone
                size={17}
                fill="currentColor"
              />
            </Link>

          </nav>

          {/* Get Started */}
          <Link
            href="/contact"
            className="get-started-btn"
            onClick={() => handleNavigation("/contact")}
          >
            Get Started
            <ArrowRight size={21} />
          </Link>

        </div>
      </header>
    </>
  );
}

export default Navbar;