
"use client";

import Link from "next/link";

import {
  Cloud,
  Code2,
  Database,
  Plug,
  CheckCircle2,
  ArrowRight,
  Settings,
  ShieldCheck,
  Zap,
  BarChart3,
  Settings2,
  Layers3,
  RefreshCw,
  Bookmark,
} from "lucide-react";

import Navbar from "@/components/Navbar";

export const sapConsultingSlugs = [
  "abap-cloud",
  "abap-development-tools",
  "abap-managed-database-procedures",
  "application-programming-interface",
];

export default function SAPConsultingPage({ slug }) {
  // =========================================================
  // 1. ABAP CLOUD
  // =========================================================
if (slug === "abap-cloud") {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">

        {/* HERO */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>
                <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
                  <Cloud size={18} />
                  SAP Consulting
                </div>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  ABAP Cloud
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Build modern, scalable and cloud-ready business applications
                  with ABAP Cloud and SAP's clean-core approach.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <h2 className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
                    Talk to Our Experts
                    <ArrowRight size={18} />
                  </h2>

                  <h2 className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-800">
                    Explore Services
                  </h2>
                </div>
              </div>

              <div className="rounded-[30px] bg-purple-100 p-10 shadow-xl mt-20">
                <div className="rounded-3xl bg-white p-10">
                  <Cloud className="h-20 w-20 text-purple-600" />

                  <h3 className="mt-6 text-2xl font-bold">
                    Cloud-Ready ABAP
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Modern application development designed for SAP cloud
                    environments.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ABOUT */}
        {/* <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="font-semibold text-purple-600">
                ABAP CLOUD
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Modernize SAP Development with ABAP Cloud
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                ABAP Cloud enables organizations to create cloud-ready
                applications while following SAP's clean-core principles.
                It helps businesses extend SAP solutions without creating
                unnecessary dependencies on the core system.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {[
                {
                  icon: Cloud,
                  title: "Cloud Ready",
                  text: "Develop applications designed for modern SAP cloud environments.",
                },
                {
                  icon: ShieldCheck,
                  title: "Clean Core",
                  text: "Keep the SAP core stable while building business extensions.",
                },
                {
                  icon: Zap,
                  title: "Scalable",
                  text: "Create flexible applications that can grow with your business.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl bg-purple-50 p-8"
                  >
                    <Icon className="h-10 w-10 text-purple-600" />

                    <h3 className="mt-5 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section> */}

          <section className="py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="max-w-3xl">
      <p className="font-semibold text-purple-600">ABAP CLOUD</p>

      <h2 className="mt-3 text-4xl font-bold">
        Modernize SAP Development with ABAP Cloud
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        ABAP Cloud enables organizations to create cloud-ready
        applications while following SAP's clean-core principles.
        It helps businesses extend SAP solutions without creating
        unnecessary dependencies on the core system.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[
        {
          icon: Cloud,
          title: "Cloud Ready",
          text: "Develop applications designed for modern SAP cloud environments.",
          bg: "bg-[#C13BFF]",
        },
        {
          icon: ShieldCheck,
          title: "Clean Core",
          text: "Keep the SAP core stable while building business extensions.",
          bg: "bg-[#2EC4FF]",
        },
        {
          icon: Zap,
          title: "Scalable",
          text: "Create flexible applications that can grow with your business.",
          bg: "bg-[#00F5D0]",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl p-6 min-h-[200px] ${item.bg}`}
          >
            {/* Big circle - top right */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/20" />

            {/* Second circle - bottom right (overlap looks lighter) */}
            <div className="absolute -bottom-12 -right-6 h-40 w-40 rounded-full bg-white/20" />

            {/* Content */}
            <div className="relative z-10">
              <Icon className="h-10 w-10 text-black" strokeWidth={2.5} />

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 font-bold leading-6 text-black">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


        {/* KEY BENEFITS */}
        {/* <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-purple-600">
                KEY BENEFITS
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Benefits of ABAP Cloud
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Build modern SAP applications that are flexible, maintainable,
                secure and ready for cloud environments.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: Cloud,
                  title: "Cloud Ready",
                  text: "Develop applications that are designed to work with modern SAP cloud environments.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Development",
                  text: "Follow supported SAP development practices and create maintainable business solutions.",
                },
                {
                  icon: Zap,
                  title: "Faster Innovation",
                  text: "Use modern development approaches to deliver new business capabilities faster.",
                },
                {
                  icon: Settings2,
                  title: "Flexible Extensions",
                  text: "Extend SAP functionality without unnecessary modifications to the core system.",
                },
                {
                  icon: Layers3,
                  title: "Scalable Architecture",
                  text: "Create applications that can adapt to changing business requirements.",
                },
                {
                  icon: RefreshCw,
                  title: "Modernization",
                  text: "Move traditional ABAP development toward modern cloud-ready approaches.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section> */}
<section className="relative overflow-hidden py-20">

  {/* Background */}
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1000 800"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
      <linearGradient id="orangeLeft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F7B070" />
        <stop offset="55%" stopColor="#E2803F" />
        <stop offset="100%" stopColor="#B84F1E" />
      </linearGradient>
      <linearGradient id="orangeHorn" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FBC48A" />
        <stop offset="60%" stopColor="#EE9550" />
        <stop offset="100%" stopColor="#D3642A" />
      </linearGradient>
      <linearGradient id="yellowBlob" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDD08A" />
        <stop offset="100%" stopColor="#F28A3E" />
      </linearGradient>
      <linearGradient id="purpleBlob" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F4CBE6" />
        <stop offset="50%" stopColor="#D3A2EC" />
        <stop offset="100%" stopColor="#9B62D8" />
      </linearGradient>
    </defs>

    <rect width="1000" height="800" fill="#DCC1A6" />
    <ellipse cx="860" cy="170" rx="200" ry="200" fill="#EBCDB0" opacity="0.8" filter="url(#soft)" />
    <ellipse cx="230" cy="400" rx="170" ry="330" fill="url(#orangeLeft)" filter="url(#soft)" transform="rotate(20 230 400)" />
    <ellipse cx="520" cy="260" rx="120" ry="300" fill="url(#orangeHorn)" filter="url(#soft)" transform="rotate(-8 520 260)" />
    <circle cx="540" cy="680" r="170" fill="url(#yellowBlob)" filter="url(#soft)" />
    <ellipse cx="900" cy="640" rx="230" ry="270" fill="url(#purpleBlob)" filter="url(#soft)" />
  </svg>

  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold text-purple-700">KEY BENEFITS</p>

      <h2 className="mt-3 text-4xl font-bold text-black">
        Benefits of ABAP Cloud
      </h2>

      <p className="mt-5 text-lg leading-8 text-black/70">
        Build modern SAP applications that are flexible, maintainable,
        secure and ready for cloud environments.
      </p>
    </div>

    <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icon: Cloud,
          tag: "Benefit 01",
          title: "Cloud Ready",
          chips: ["Cloud", "Modern"],
          text: "Develop applications designed for modern SAP cloud environments.",
          bottom: "SAP BTP",
          sub: "Cloud environment",
          saved: false,
        },
        {
          icon: ShieldCheck,
          tag: "Benefit 02",
          title: "Secure Development",
          chips: ["Secure", "Supported"],
          text: "Follow supported SAP practices and build maintainable solutions.",
          bottom: "Clean Core",
          sub: "SAP standard",
          saved: true,
        },
        {
          icon: Zap,
          tag: "Benefit 03",
          title: "Faster Innovation",
          chips: ["Fast", "Agile"],
          text: "Deliver new business capabilities faster with modern approaches.",
          bottom: "Faster delivery",
          sub: "Modern development",
          saved: false,
        },
        {
          icon: Settings2,
          tag: "Benefit 04",
          title: "Flexible Extensions",
          chips: ["Extensible", "Flexible"],
          text: "Extend SAP functionality without modifying the core system.",
          bottom: "Extensions",
          sub: "Side-by-side",
          saved: true,
        },
        {
          icon: Layers3,
          tag: "Benefit 05",
          title: "Scalable Architecture",
          chips: ["Scalable", "Adaptable"],
          text: "Create applications that adapt to changing business needs.",
          bottom: "Scalable",
          sub: "Architecture",
          saved: false,
        },
        {
          icon: RefreshCw,
          tag: "Benefit 06",
          title: "Modernization",
          chips: ["Modern", "Cloud-ready"],
          text: "Move traditional ABAP toward modern cloud-ready development.",
          bottom: "Modern ABAP",
          sub: "Cloud-ready",
          saved: true,
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex min-h-[270px] flex-col rounded-2xl bg-white p-5 shadow-sm"
          >
            {/* Top: icon + save */}
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm">
                <Icon className="h-5 w-5 text-black" />
              </div>

              <span
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-medium ${
                  item.saved
                    ? "bg-gray-200 text-black"
                    : "border border-gray-200 bg-white text-gray-400"
                }`}
              >
                {item.saved ? "Saved" : "Save"}
                <Bookmark
                  className="h-3 w-3"
                  fill={item.saved ? "currentColor" : "none"}
                />
              </span>
            </div>

            {/* Label */}
            <p className="mt-5 text-xs font-semibold text-black">
              ABAP Cloud
              <span className="ml-2 font-normal text-gray-400">{item.tag}</span>
            </p>

            {/* Title */}
            <h3 className="mt-1.5 text-[22px] font-medium leading-tight text-black">
              {item.title}
            </h3>

            {/* Chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {item.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-3 text-xs leading-5 text-gray-500">{item.text}</p>

            {/* Bottom */}
            <div className="mt-auto border-t border-gray-100 pt-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold text-black">{item.bottom}</p>
                  <p className="text-[10px] text-gray-400">{item.sub}</p>
                </div>

                <button
                  type="button"
                  className="rounded-md bg-black px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  </div>
</section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-purple-600">
                OUR SERVICES
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Our ABAP Cloud Services
              </h2>

              <p className="mt-5 text-lg text-gray-600">
                End-to-end ABAP Cloud services to help organizations
                modernize and extend their SAP landscape.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {[
                "Cloud application development",
                "SAP S/4HANA Cloud extensions",
                "Clean-core development",
                "Custom business logic",
                "ABAP RESTful Application Programming",
                "Application modernization",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-4 rounded-2xl bg-gray-50 p-6 transition hover:bg-purple-50"
                >
                  <CheckCircle2 className="shrink-0 text-purple-600" />

                  <span className="font-medium">
                    {service}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* DEVELOPMENT APPROACH */}
        {/* <section className="bg-purple-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-purple-600">
                OUR APPROACH
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                ABAP Cloud Development Approach
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                A structured development process helps create reliable,
                scalable and maintainable SAP cloud applications.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">

              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Understand business requirements and objectives.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "Create the application architecture and solution design.",
                },
                {
                  number: "03",
                  title: "Develop",
                  text: "Build applications using modern ABAP Cloud practices.",
                },
                {
                  number: "04",
                  title: "Integrate",
                  text: "Connect SAP applications with required systems and APIs.",
                },
                {
                  number: "05",
                  title: "Test",
                  text: "Validate application functionality and performance.",
                },
                {
                  number: "06",
                  title: "Deploy",
                  text: "Release the application into the target cloud environment.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <span className="text-3xl font-bold text-purple-600">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section> */}
<section className="bg-gradient-to-br from-[#737CA3] via-[#A9B1C9] to-[#DDE3EE] py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold tracking-wide text-[#A81D1D]">
        OUR APPROACH
      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-900">
        ABAP Cloud Development Approach
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        A structured development process helps create reliable,
        scalable and maintainable SAP cloud applications.
      </p>
    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

      {[
        {
          number: "1",
          title: "Discover",
          text: "Understand business requirements and objectives.",
          top: "bg-gradient-to-br from-[#E8344A] to-[#A81D1D]",
          pill: "bg-gradient-to-r from-[#E8344A] to-[#B52222]",
        },
        {
          number: "2",
          title: "Design",
          text: "Create the application architecture and solution design.",
          top: "bg-gradient-to-br from-[#B524D4] to-[#5B14A8]",
          pill: "bg-gradient-to-r from-[#B524D4] to-[#6A18B5]",
        },
        {
          number: "3",
          title: "Develop",
          text: "Build applications using modern ABAP Cloud practices.",
          top: "bg-gradient-to-br from-[#4A63E0] to-[#2A14A0]",
          pill: "bg-gradient-to-r from-[#4A63E0] to-[#2F1BAA]",
        },
        {
          number: "4",
          title: "Integrate",
          text: "Connect SAP applications with required systems and APIs.",
          top: "bg-gradient-to-br from-[#2EE09A] to-[#0A7A62]",
          pill: "bg-gradient-to-r from-[#2EE09A] to-[#0E8A6C]",
        },
        {
          number: "5",
          title: "Test",
          text: "Validate application functionality and performance.",
          top: "bg-gradient-to-br from-[#E8344A] to-[#A81D1D]",
          pill: "bg-gradient-to-r from-[#E8344A] to-[#B52222]",
        },
        {
          number: "6",
          title: "Deploy",
          text: "Release the application into the target cloud environment.",
          top: "bg-gradient-to-br from-[#B524D4] to-[#5B14A8]",
          pill: "bg-gradient-to-r from-[#B524D4] to-[#6A18B5]",
        },
      ].map((step) => (
        <div
          key={step.number}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)]"
        >
          {/* Curved coloured top with number */}
          <div
            className={`flex h-36 items-center justify-center rounded-bl-[100%_55%] ${step.top}`}
          >
            <span className="font-serif text-5xl font-light text-white">
              {step.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center px-4 pb-6 pt-5 text-center">
            <h3 className="font-serif text-sm font-bold text-slate-800">
              {step.title}
            </h3>

            <p className="mt-3 font-serif text-[11px] leading-4 text-slate-700">
              {step.text}
            </p>

            <span
              className={`mt-auto rounded-full px-6 py-1.5 text-[11px] text-white shadow-md ${step.pill}`}
            >
              Step {step.number}
            </span>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

        {/* TECHNOLOGIES */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-purple-600">
                TECHNOLOGIES
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Technologies & Capabilities
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We use modern SAP technologies and development approaches
                to build cloud-ready business applications.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              {[
                "ABAP Cloud",
                "SAP S/4HANA Cloud",
                "RAP",
                "CDS Views",
                "OData Services",
                "SAP BTP",
                "SAP Fiori",
                "REST APIs",
                "Clean Core",
                "Cloud Extensibility",
              ].map((technology) => (
                <div
                  key={technology}
                  className="rounded-full border border-purple-200 bg-purple-50 px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  {technology}
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* USE CASES */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-purple-600">
                USE CASES
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                ABAP Cloud Use Cases
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                ABAP Cloud can support a wide range of SAP modernization,
                extension and application development requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "S/4HANA Extensions",
                  text: "Extend SAP S/4HANA functionality while maintaining a clean and stable core.",
                },
                {
                  title: "Custom Applications",
                  text: "Build business applications tailored to specific organizational requirements.",
                },
                {
                  title: "Business Process Extensions",
                  text: "Add new capabilities to existing SAP business processes.",
                },
                {
                  title: "SAP Integrations",
                  text: "Connect SAP solutions with external applications and business platforms.",
                },
                {
                  title: "Legacy Modernization",
                  text: "Modernize traditional ABAP solutions for cloud-ready development.",
                },
                {
                  title: "Workflow Automation",
                  text: "Create applications that improve and automate repetitive business processes.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="bg-purple-700 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">

            <h2 className="text-4xl font-bold">
              Build Your Next SAP Cloud Application
            </h2>

            <p className="mt-5 text-lg text-purple-100">
              Talk to our SAP experts about your cloud development
              requirements.
            </p>

            <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-purple-700">
              Contact Us
              <ArrowRight size={18} />
            </h2>

          </div>
        </section>

      </main>
    </>
  );
}



  // =========================================================
  // 2. ABAP DEVELOPMENT TOOLS
  // =========================================================

 
// if (slug === "abap-development-tools") {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-white text-gray-900">
//         {/* HERO */}
//         <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="grid items-center gap-12 lg:grid-cols-2">
//               <div>
//                 <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
//                   <Code2 size={18} />
//                   SAP Consulting
//                 </div>

//                 <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//                   ABAP Development Tools
//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
//                   Accelerate SAP development with Eclipse-based ABAP
//                   Development Tools designed for modern SAP environments.
//                   Build, test and maintain ABAP applications faster using a
//                   single, powerful development workspace.
//                 </p>

//                 {/* NEW: quick highlights */}
//                 <ul className="mt-6 space-y-2 text-gray-700">
//                   {[
//                     "Eclipse-based modern ABAP IDE",
//                     "Supports ABAP Cloud and S/4HANA development",
//                     "Built-in debugging, testing and code analysis",
//                   ].map((point) => (
//                     <li key={point} className="flex items-center gap-2">
//                       <ShieldCheck className="h-5 w-5 text-blue-600" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white">
//                   Talk to Our Experts
//                   <ArrowRight size={18} />
//                 </h2>
//               </div>

//               <div className="rounded-[30px] bg-blue-100 p-10 shadow-xl">
//                 <div className="rounded-3xl bg-white p-10">
//                   <Code2 className="h-20 w-20 text-blue-600" />
//                   <h3 className="mt-6 text-2xl font-bold">
//                     Modern ABAP Development
//                   </h3>
//                   <p className="mt-3 text-gray-600">
//                     Develop, test and maintain SAP applications using ADT.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* ABOUT */}
//         <section className="py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="grid gap-12 lg:grid-cols-2">
//               <div>
//                 <p className="font-semibold text-blue-600">
//                   ABAP DEVELOPMENT TOOLS
//                 </p>
//                 <h2 className="mt-3 text-4xl font-bold">
//                   Efficient SAP Development with ADT
//                 </h2>

//                 {/* NEW: checklist */}
//                 <ul className="mt-8 space-y-3">
//                   {[
//                     "Work with source code, CDS views and database objects in one place",
//                     "Use code completion, quick fixes and refactoring to write cleaner code",
//                     "Debug applications and analyze runtime behavior efficiently",
//                     "Run ABAP Unit tests and ABAP Test Cockpit checks",
//                   ].map((point) => (
//                     <li key={point} className="flex items-start gap-3">
//                       <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
//                       <span className="text-gray-700">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="space-y-5 text-lg leading-8 text-gray-600">
//                 <p>
//                   ABAP Development Tools provide an Eclipse-based environment
//                   for developing and maintaining modern ABAP applications.
//                   Developers can work with source code, CDS views, database
//                   objects, debugging and other development capabilities from a
//                   single environment.
//                 </p>
//                 {/* NEW paragraphs */}
//                 <p>
//                   ADT is the recommended development environment for modern
//                   SAP solutions, including SAP S/4HANA and the ABAP
//                   environment on SAP BTP. It supports newer approaches such as
//                   CDS-based data models and the RESTful ABAP Programming Model
//                   (RAP).
//                 </p>
//                 <p>
//                   With the right setup and guidance, teams can improve code
//                   quality, shorten development cycles and move confidently
//                   toward clean-core, cloud-ready SAP development.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FEATURES */}
//         <section className="bg-gray-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <h2 className="text-center text-4xl font-bold">
//               ADT Development Services
//             </h2>
//             {/* NEW: intro text */}
//             <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
//               From new development to performance tuning, we help your team
//               get the most out of ABAP Development Tools.
//             </p>

//             <div className="mt-12 grid gap-6 md:grid-cols-3">
//               {[
//                 {
//                   icon: Code2,
//                   title: "ABAP Development",
//                   text: "Build and maintain modern ABAP applications, classes, interfaces and function modules with productivity features like code completion and quick fixes.",
//                 },
//                 {
//                   icon: Settings,
//                   title: "Debugging",
//                   text: "Identify and resolve application issues efficiently using breakpoints, watchpoints, variable inspection and runtime analysis.",
//                 },
//                 {
//                   icon: BarChart3,
//                   title: "CDS Development",
//                   text: "Create modern data models and CDS-based solutions, including views, annotations and associations for analytics and apps.",
//                 },
//                 {
//                   icon: Database,
//                   title: "Data Modeling",
//                   text: "Design efficient data structures for SAP applications and expose them cleanly through services and APIs.",
//                 },
//                 {
//                   icon: Zap,
//                   title: "Performance",
//                   text: "Improve application performance and processing using tracing, profiling and code-pushdown to the database.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Best Practices",
//                   text: "Follow structured SAP development practices with ABAP Unit testing, ATC checks and clean-core guidelines.",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//                   >
//                     <Icon className="h-10 w-10 text-blue-600" />
//                     <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
//                     <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* NEW: BENEFITS */}
//         <section className="py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto max-w-3xl text-center">
//               <p className="font-semibold text-blue-600">WHY ADT</p>
//               <h2 className="mt-3 text-4xl font-bold">
//                 Benefits of Using ABAP Development Tools
//               </h2>
//               <p className="mt-5 text-lg leading-8 text-gray-600">
//                 A modern toolset helps developers work faster and deliver
//                 higher-quality SAP solutions.
//               </p>
//             </div>

//             <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {[
//                 {
//                   icon: Zap,
//                   title: "Higher Productivity",
//                   text: "Code completion, templates and refactoring reduce manual effort.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Better Code Quality",
//                   text: "Built-in checks and unit testing help catch issues early.",
//                 },
//                 {
//                   icon: Database,
//                   title: "Modern Data Access",
//                   text: "Work natively with CDS views and SAP HANA capabilities.",
//                 },
//                 {
//                   icon: Settings,
//                   title: "Future Ready",
//                   text: "Prepare your landscape for ABAP Cloud and clean-core strategy.",
//                 },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="rounded-3xl bg-blue-50 p-8"
//                   >
//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
//                       <Icon className="h-6 w-6 text-white" />
//                     </div>
//                     <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
//                     <p className="mt-3 text-sm leading-6 text-gray-600">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* NEW: WORKFLOW */}
//         <section className="bg-gray-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <h2 className="text-center text-4xl font-bold">
//               How We Work With ADT
//             </h2>
//             <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
//               A simple, structured process from setup to delivery.
//             </p>

//             <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
//               {[
//                 { step: "1", title: "Connect", text: "Set up ADT and connect to your SAP system." },
//                 { step: "2", title: "Develop", text: "Build ABAP code, CDS views and services." },
//                 { step: "3", title: "Debug", text: "Analyze and fix issues with debugging tools." },
//                 { step: "4", title: "Test", text: "Run ABAP Unit tests and ATC quality checks." },
//                 { step: "5", title: "Transport", text: "Release changes through your transport landscape." },
//               ].map((item) => (
//                 <div
//                   key={item.step}
//                   className="rounded-3xl bg-white p-6 text-center shadow-sm"
//                 >
//                   <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
//                     {item.step}
//                   </div>
//                   <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
//                   <p className="mt-2 text-sm leading-6 text-gray-600">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* NEW: FAQ */}
//         <section className="py-20">
//           <div className="mx-auto max-w-3xl px-6">
//             <h2 className="text-center text-4xl font-bold">
//               Frequently Asked Questions
//             </h2>

//             <div className="mt-10 space-y-4">
//               {[
//                 {
//                   q: "What are ABAP Development Tools (ADT)?",
//                   a: "ADT is an Eclipse-based development environment for creating, testing and maintaining ABAP applications, including CDS views and RAP-based services.",
//                 },
//                 {
//                   q: "Is ADT required for ABAP Cloud development?",
//                   a: "Yes. ABAP Cloud development is done in ADT, which supports the tools needed for clean-core, cloud-ready SAP development.",
//                 },
//                 {
//                   q: "Can ADT be used with SAP S/4HANA?",
//                   a: "Yes. ADT works with SAP S/4HANA and with the ABAP environment on SAP BTP, helping teams build modern extensions and applications.",
//                 },
//                 {
//                   q: "Do you provide training and support?",
//                   a: "Yes. Our experts can help with ADT setup, developer onboarding, best practices and ongoing development support.",
//                 },
//               ].map((item) => (
//                 <details
//                   key={item.q}
//                   className="group rounded-2xl bg-gray-50 p-6"
//                 >
//                   <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
//                     {item.q}
//                     <span className="ml-4 text-blue-600 transition group-open:rotate-45">
//                       +
//                     </span>
//                   </summary>
//                   <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-blue-700 py-20 text-white">
//           <div className="mx-auto max-w-4xl px-6 text-center">
//             <h2 className="text-4xl font-bold">
//               Modernize Your SAP Development
//             </h2>
//             <p className="mt-5 text-lg text-blue-100">
//               Get professional support for your ABAP development requirements,
//               from ADT setup and developer enablement to full application
//               delivery.
//             </p>

//             <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-blue-700">
//               Get Started
//               <ArrowRight size={18} />
//             </h2>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

if (slug === "abap-development-tools") {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">

        {/* HERO - soft blue/purple gradient with glow circles */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-200 py-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-300/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                  <Code2 size={18} />
                  SAP Consulting
                </div>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  ABAP Development Tools
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Accelerate SAP development with Eclipse-based ABAP
                  Development Tools designed for modern SAP environments.
                  Build, test and maintain ABAP applications faster using a
                  single, powerful development workspace.
                </p>

                <ul className="mt-6 space-y-2 text-gray-700">
                  {[
                    "Eclipse-based modern ABAP IDE",
                    "Supports ABAP Cloud and S/4HANA development",
                    "Built-in debugging, testing and code analysis",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg">
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </h2>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-blue-200 to-purple-200 p-10 shadow-xl">
                <div className="rounded-3xl bg-white p-10">
                  <Code2 className="h-20 w-20 text-blue-600" />
                  <h3 className="mt-6 text-2xl font-bold">
                    Modern ABAP Development
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Develop, test and maintain SAP applications using ADT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS - strong blue gradient */}
        <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              { value: "1", label: "Unified development environment" },
              { value: "CDS", label: "Modern data model support" },
              { value: "RAP", label: "RESTful ABAP Programming ready" },
              { value: "Cloud", label: "ABAP Cloud compatible" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT - white to light sky */}
        <section className="bg-gradient-to-b from-white to-sky-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-blue-600">
                  ABAP DEVELOPMENT TOOLS
                </p>
                <h2 className="mt-3 text-4xl font-bold">
                  Efficient SAP Development with ADT
                </h2>

                <ul className="mt-8 space-y-3">
                  {[
                    "Work with source code, CDS views and database objects in one place",
                    "Use code completion, quick fixes and refactoring to write cleaner code",
                    "Debug applications and analyze runtime behavior efficiently",
                    "Run ABAP Unit tests and ABAP Test Cockpit checks",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  ABAP Development Tools provide an Eclipse-based environment
                  for developing and maintaining modern ABAP applications.
                  Developers can work with source code, CDS views, database
                  objects, debugging and other development capabilities from a
                  single environment.
                </p>
                <p>
                  ADT is the recommended development environment for modern
                  SAP solutions, including SAP S/4HANA and the ABAP
                  environment on SAP BTP. It supports newer approaches such as
                  CDS-based data models and the RESTful ABAP Programming Model
                  (RAP).
                </p>
                <p>
                  With the right setup and guidance, teams can improve code
                  quality, shorten development cycles and move confidently
                  toward clean-core, cloud-ready SAP development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES - soft lavender gradient */}
        <section className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              ADT Development Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              From new development to performance tuning, we help your team
              get the most out of ABAP Development Tools.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: "ABAP Development",
                  text: "Build and maintain modern ABAP applications, classes, interfaces and function modules with productivity features like code completion and quick fixes.",
                },
                {
                  icon: Settings,
                  title: "Debugging",
                  text: "Identify and resolve application issues efficiently using breakpoints, watchpoints, variable inspection and runtime analysis.",
                },
                {
                  icon: BarChart3,
                  title: "CDS Development",
                  text: "Create modern data models and CDS-based solutions, including views, annotations and associations for analytics and apps.",
                },
                {
                  icon: Database,
                  title: "Data Modeling",
                  text: "Design efficient data structures for SAP applications and expose them cleanly through services and APIs.",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  text: "Improve application performance and processing using tracing, profiling and code-pushdown to the database.",
                },
                {
                  icon: ShieldCheck,
                  title: "Best Practices",
                  text: "Follow structured SAP development practices with ABAP Unit testing, ATC checks and clean-core guidelines.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS - dark navy gradient with glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-20 text-white">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-blue-300">WHY ADT</p>
              <h2 className="mt-3 text-4xl font-bold">
                Benefits of Using ABAP Development Tools
              </h2>
              <p className="mt-5 text-lg leading-8 text-blue-100">
                A modern toolset helps developers work faster and deliver
                higher-quality SAP solutions.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Zap,
                  title: "Higher Productivity",
                  text: "Code completion, templates and refactoring reduce manual effort.",
                },
                {
                  icon: ShieldCheck,
                  title: "Better Code Quality",
                  text: "Built-in checks and unit testing help catch issues early.",
                },
                {
                  icon: Database,
                  title: "Modern Data Access",
                  text: "Work natively with CDS views and SAP HANA capabilities.",
                },
                {
                  icon: Settings,
                  title: "Future Ready",
                  text: "Prepare your landscape for ABAP Cloud and clean-core strategy.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-blue-100">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORKFLOW - warm peach/pink gradient */}
        <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              How We Work With ADT
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              A simple, structured process from setup to delivery.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { step: "1", title: "Connect", text: "Set up ADT and connect to your SAP system." },
                { step: "2", title: "Develop", text: "Build ABAP code, CDS views and services." },
                { step: "3", title: "Debug", text: "Analyze and fix issues with debugging tools." },
                { step: "4", title: "Test", text: "Run ABAP Unit tests and ATC quality checks." },
                { step: "5", title: "Transport", text: "Release changes through your transport landscape." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-xl font-bold text-white shadow">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - light sky/cyan gradient */}
        <section className="bg-gradient-to-b from-sky-100 via-cyan-50 to-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What are ABAP Development Tools (ADT)?",
                  a: "ADT is an Eclipse-based development environment for creating, testing and maintaining ABAP applications, including CDS views and RAP-based services.",
                },
                {
                  q: "Is ADT required for ABAP Cloud development?",
                  a: "Yes. ABAP Cloud development is done in ADT, which supports the tools needed for clean-core, cloud-ready SAP development.",
                },
                {
                  q: "Can ADT be used with SAP S/4HANA?",
                  a: "Yes. ADT works with SAP S/4HANA and with the ABAP environment on SAP BTP, helping teams build modern extensions and applications.",
                },
                {
                  q: "Do you provide training and support?",
                  a: "Yes. Our experts can help with ADT setup, developer onboarding, best practices and ongoing development support.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {item.q}
                    <span className="ml-4 text-xl text-blue-600 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - vibrant gradient with glow circles */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-20 text-white">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">
              Modernize Your SAP Development
            </h2>
            <p className="mt-5 text-lg text-blue-100">
              Get professional support for your ABAP development requirements,
              from ADT setup and developer enablement to full application
              delivery.
            </p>

            <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg">
              Get Started
              <ArrowRight size={18} />
            </h2>
          </div>
        </section>

      </main>
    </>
  );
}

  // =========================================================
  // 3. AMDP
  // =========================================================

  // if (slug === "abap-managed-database-procedures") {
  //   return (
  //       <>
  //       <Navbar/>
  //     <main className="bg-white text-gray-900">
  //       {/* HERO */}
  //       <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //           <div className="grid items-center gap-12 lg:grid-cols-2">
  //             <div>
  //               <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 mt-20">
  //                 <Database size={18} />
  //                 SAP Consulting
  //               </div>

  //               <h1 className="text-4xl font-bold leading-tight md:text-6xl">
  //                 ABAP Managed Database Procedures
  //               </h1>

  //               <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
  //                 Improve SAP application performance with database-focused
  //                 processing using AMDP and SAP HANA.
  //               </p>

  //               <h2
  //                 className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white"
  //               >
  //                 Talk to Our Experts
  //                 <ArrowRight size={18} />
  //               </h2>
  //             </div>

  //             <div className="rounded-[30px] bg-green-100 p-10 shadow-xl">
  //               <div className="rounded-3xl bg-white p-10">
  //                 <Database className="h-20 w-20 text-green-600" />
  //                 <h3 className="mt-6 text-2xl font-bold">
  //                   SAP HANA Performance
  //                 </h3>
  //                 <p className="mt-3 text-gray-600">
  //                   Process complex data operations closer to the database.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* ABOUT */}
  //       <section className="py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //           <div className="max-w-3xl">
  //             <p className="font-semibold text-green-600">AMDP</p>

  //             <h2 className="mt-3 text-4xl font-bold">
  //               High-Performance SAP HANA Processing
  //             </h2>

  //             <p className="mt-6 text-lg leading-8 text-gray-600">
  //               AMDP allows ABAP developers to implement database procedures
  //               that execute directly on the SAP HANA database. This approach
  //               can help process large volumes of data efficiently and reduce
  //               unnecessary data transfer between application and database
  //               layers.
  //             </p>
  //           </div>
  //         </div>
  //       </section>

  //       {/* SERVICES */}
  //       <section className="bg-gray-50 py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //           <h2 className="text-center text-4xl font-bold">
  //             Our AMDP Services
  //           </h2>

  //           <div className="mt-12 grid gap-6 md:grid-cols-2">
  //             {[
  //               "AMDP procedure development",
  //               "SQLScript development",
  //               "SAP HANA optimization",
  //               "Complex data processing",
  //               "Performance optimization",
  //               "Database-focused application development",
  //             ].map((service) => (
  //               <div
  //                 key={service}
  //                 className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm"
  //               >
  //                 <CheckCircle2 className="shrink-0 text-green-600" />
  //                 <span className="font-medium">{service}</span>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* BENEFITS */}
  //       <section className="py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //           <h2 className="text-center text-4xl font-bold">
  //             Benefits of AMDP
  //           </h2>

  //           <div className="mt-12 grid gap-6 md:grid-cols-3">
  //             {[
  //               "Faster data processing",
  //               "Efficient SAP HANA utilization",
  //               "Better handling of large datasets",
  //               "Reduced application-layer processing",
  //               "Improved performance",
  //               "Scalable data solutions",
  //             ].map((benefit) => (
  //               <div
  //                 key={benefit}
  //                 className="rounded-2xl border border-gray-100 p-6"
  //               >
  //                 <CheckCircle2 className="text-green-600" />
  //                 <p className="mt-4 font-semibold">{benefit}</p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* CTA */}
  //       <section className="bg-green-700 py-20 text-white">
  //         <div className="mx-auto max-w-4xl px-6 text-center">
  //           <h2 className="text-4xl font-bold">
  //             Improve Your SAP HANA Performance
  //           </h2>

  //           <p className="mt-5 text-lg text-green-100">
  //             Discuss your database performance and AMDP requirements with our
  //             team.
  //           </p>

  //           <h2
  //             className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-green-700"
  //           >
  //             Contact Us
  //             <ArrowRight size={18} />
  //           </h2>
  //         </div>
  //       </section>
  //     </main>
  //     </>
  //   );
  // }
  if (slug === "abap-managed-database-procedures") {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">

        {/* HERO - soft green/teal gradient with glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 py-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                  <Database size={18} />
                  SAP Consulting
                </div>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  ABAP Managed Database Procedures
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Improve SAP application performance with database-focused
                  processing using AMDP and SAP HANA. Move heavy data logic
                  to the database layer and get faster, more scalable results.
                </p>

                {/* NEW: quick highlights */}
                <ul className="mt-6 space-y-2 text-gray-700">
                  {[
                    "Code-to-data approach on SAP HANA",
                    "SQLScript written and managed inside ABAP classes",
                    "Ideal for large data volumes and complex calculations",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg">
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </h2>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-emerald-200 to-cyan-200 p-10 shadow-xl">
                <div className="rounded-3xl bg-white p-10">
                  <Database className="h-20 w-20 text-green-600" />
                  <h3 className="mt-6 text-2xl font-bold">
                    SAP HANA Performance
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Process complex data operations closer to the database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: STATS STRIP - deep green gradient */}
        <section className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              { value: "AMDP", label: "Database procedures in ABAP" },
              { value: "HANA", label: "Built for SAP HANA" },
              { value: "SQL", label: "SQLScript based logic" },
              { value: "Fast", label: "Code-to-data performance" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT - white to soft green */}
        <section className="bg-gradient-to-b from-white to-green-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-green-600">AMDP</p>

                <h2 className="mt-3 text-4xl font-bold">
                  High-Performance SAP HANA Processing
                </h2>

                {/* NEW: checklist */}
                <ul className="mt-8 space-y-3">
                  {[
                    "Write database procedures directly inside ABAP classes",
                    "Run logic on the SAP HANA database instead of the application server",
                    "Reduce data transfer between database and application layers",
                    "Manage and transport procedures together with ABAP code",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  AMDP allows ABAP developers to implement database procedures
                  that execute directly on the SAP HANA database. This approach
                  can help process large volumes of data efficiently and reduce
                  unnecessary data transfer between application and database
                  layers.
                </p>
                {/* NEW paragraphs */}
                <p>
                  Instead of reading large datasets into the application
                  server, AMDP pushes the logic down to the database. This
                  follows the code-to-data principle and takes full advantage
                  of in-memory processing in SAP HANA.
                </p>
                <p>
                  AMDP is a strong fit for complex calculations, aggregations,
                  data transformations and CDS table functions, where standard
                  ABAP processing would be slower or more resource-intensive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES - light teal/cyan gradient */}
        <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              Our AMDP Services
            </h2>
            {/* NEW: intro */}
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              End-to-end support for building, tuning and maintaining
              database-focused SAP solutions.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "AMDP procedure development",
                  text: "Design and build AMDP methods and classes for your business logic.",
                },
                {
                  title: "SQLScript development",
                  text: "Write clean, efficient SQLScript for calculations and data processing.",
                },
                {
                  title: "SAP HANA optimization",
                  text: "Tune queries and procedures to make full use of HANA capabilities.",
                },
                {
                  title: "Complex data processing",
                  text: "Handle aggregations, joins and transformations on large datasets.",
                },
                {
                  title: "Performance optimization",
                  text: "Analyze slow programs and move heavy logic to the database.",
                },
                {
                  title: "Database-focused application development",
                  text: "Build applications and CDS table functions backed by AMDP.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-600">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: USE CASES - dark green gradient with glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 py-20 text-white">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-emerald-300">USE CASES</p>
              <h2 className="mt-3 text-4xl font-bold">
                Where AMDP Makes a Difference
              </h2>
              <p className="mt-5 text-lg leading-8 text-green-100">
                AMDP works best when large volumes of data need heavy
                processing.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BarChart3,
                  title: "Analytics & Reporting",
                  text: "Fast aggregations and calculations for large reports.",
                },
                {
                  icon: Database,
                  title: "CDS Table Functions",
                  text: "Back CDS views with SQLScript logic where needed.",
                },
                {
                  icon: Zap,
                  title: "Mass Data Processing",
                  text: "Process millions of records without heavy data transfer.",
                },
                {
                  icon: Settings,
                  title: "Data Transformation",
                  text: "Cleanse, merge and reshape data close to the source.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-green-100">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS - clean white to mint */}
        <section className="bg-gradient-to-b from-white to-emerald-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              Benefits of AMDP
            </h2>
            {/* NEW: intro */}
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              Faster processing, lower load on the application server and
              solutions that scale with your data.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Faster data processing",
                  text: "Run heavy logic directly where the data lives.",
                },
                {
                  title: "Efficient SAP HANA utilization",
                  text: "Use in-memory and parallel processing capabilities.",
                },
                {
                  title: "Better handling of large datasets",
                  text: "Work with big data volumes without performance drops.",
                },
                {
                  title: "Reduced application-layer processing",
                  text: "Lower memory and CPU load on the application server.",
                },
                {
                  title: "Improved performance",
                  text: "Cut runtimes for reports, interfaces and batch jobs.",
                },
                {
                  title: "Scalable data solutions",
                  text: "Build solutions that keep up as your data grows.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                  <p className="mt-4 font-semibold">{benefit.title}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: PROCESS - soft sky/blue tint */}
        <section className="bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              Our AMDP Approach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              A clear process to move your heavy logic to the database safely.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { step: "1", title: "Analyze", text: "Find slow, data-heavy programs." },
                { step: "2", title: "Design", text: "Plan the AMDP and data flow." },
                { step: "3", title: "Develop", text: "Build AMDP classes with SQLScript." },
                { step: "4", title: "Test", text: "Validate results and measure speed." },
                { step: "5", title: "Optimize", text: "Fine-tune for best HANA performance." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-xl font-bold text-white shadow">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: FAQ - white clean */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What is AMDP?",
                  a: "ABAP Managed Database Procedures (AMDP) let you write database procedures in SQLScript inside ABAP classes, so the logic runs directly on the SAP HANA database.",
                },
                {
                  q: "When should I use AMDP instead of regular ABAP?",
                  a: "Use AMDP when you process large data volumes or run complex calculations, where moving the logic to the database avoids heavy data transfer and improves speed.",
                },
                {
                  q: "Does AMDP work only with SAP HANA?",
                  a: "AMDP is designed mainly for SAP HANA, where it delivers the best results through in-memory, code-to-data processing.",
                },
                {
                  q: "Do you help optimize existing programs?",
                  a: "Yes. We analyze slow programs, identify bottlenecks and move suitable logic to AMDP or CDS to improve performance.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl bg-green-50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {item.q}
                    <span className="ml-4 text-xl text-green-600 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - vibrant green gradient with soft circles */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 py-20 text-white">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">
              Improve Your SAP HANA Performance
            </h2>

            <p className="mt-5 text-lg text-green-100">
              Discuss your database performance and AMDP requirements with our
              team. We will help you find the right approach and deliver
              faster, more scalable SAP solutions.
            </p>

            <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-green-700 shadow-lg">
              Contact Us
              <ArrowRight size={18} />
            </h2>
          </div>
        </section>

      </main>
    </>
  );
}

  // =========================================================
  // 4. APPLICATION PROGRAMMING INTERFACE
  // =========================================================

//   if (slug === "application-programming-interface") {
//     return (
//         <>
//         <Navbar/>
      
//       <main className="bg-white text-gray-900">
//         {/* HERO */}
//         <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="grid items-center gap-12 lg:grid-cols-2">
//               <div>
//                 <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700 mt-20">
//                   <Plug size={18} />
//                   SAP Consulting
//                 </div>

//                 <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//                   Application Programming Interface
//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
//                   Connect SAP applications with external platforms and
//                   enterprise systems through secure and scalable APIs.
//                 </p>

//                 <h2
//                   className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-semibold text-white"
//                 >
//                   Talk to Our Experts
//                   <ArrowRight size={18} />
//                 </h2>
//               </div>

//               <div className="rounded-[30px] bg-pink-100 p-10 shadow-xl">
//                 <div className="rounded-3xl bg-white p-10">
//                   <Plug className="h-20 w-20 text-pink-600" />

//                   <h3 className="mt-6 text-2xl font-bold">
//                     Connected SAP Ecosystems
//                   </h3>

//                   <p className="mt-3 text-gray-600">
//                     Enable secure communication between SAP and external
//                     applications.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="grid gap-12 lg:grid-cols-2">
//               <div>
//                 <p className="font-semibold text-pink-600">
//                   SAP API SERVICES
//                 </p>

//                 <h2 className="mt-3 text-4xl font-bold">
//                   Connect SAP With Your Business Ecosystem
//                 </h2>
//               </div>

//               <p className="text-lg leading-8 text-gray-600">
//                 APIs enable SAP systems to exchange data and functionality
//                 with other applications and platforms. Our API services help
//                 organizations build secure integrations for modern digital
//                 ecosystems.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="bg-gray-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <h2 className="text-center text-4xl font-bold">
//               Our SAP API Services
//             </h2>

//             <div className="mt-12 grid gap-6 md:grid-cols-3">
//               {[
//                 {
//                   icon: Plug,
//                   title: "API Development",
//                   text: "Build APIs for SAP and enterprise applications.",
//                 },
//                 {
//                   icon: Settings,
//                   title: "API Integration",
//                   text: "Connect SAP with third-party applications and platforms.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Secure APIs",
//                   text: "Implement secure and controlled API communication.",
//                 },
//                 {
//                   icon: Zap,
//                   title: "REST APIs",
//                   text: "Develop modern REST-based integration solutions.",
//                 },
//                 {
//                   icon: Code2,
//                   title: "OData Services",
//                   text: "Create and integrate OData services for SAP applications.",
//                 },
//                 {
//                   icon: Database,
//                   title: "Data Exchange",
//                   text: "Enable reliable data exchange between business systems.",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="rounded-3xl bg-white p-8 shadow-sm"
//                   >
//                     <Icon className="h-10 w-10 text-pink-600" />

//                     <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

//                     <p className="mt-3 leading-7 text-gray-600">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* PROCESS */}
//         <section className="py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <h2 className="text-center text-4xl font-bold">
//               Our API Integration Process
//             </h2>

//             <div className="mt-12 grid gap-6 md:grid-cols-4">
//               {[
//                 "Understand Requirements",
//                 "Design API Architecture",
//                 "Develop & Integrate",
//                 "Test & Deploy",
//               ].map((step, index) => (
//                 <div
//                   key={step}
//                   className="rounded-3xl border border-gray-100 p-7"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
//                     {index + 1}
//                   </div>

//                   <h3 className="mt-5 font-bold">{step}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-pink-700 py-20 text-white">
//           <div className="mx-auto max-w-4xl px-6 text-center">
//             <h2 className="text-4xl font-bold">
//               Connect Your SAP Systems
//             </h2>

//             <p className="mt-5 text-lg text-pink-100">
//               Build secure and scalable integrations for your business.
//             </p>

//             <h2
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-pink-700"
//             >
//               Start a Conversation
//               <ArrowRight size={18} />
//             </h2>
//           </div>
//         </section>
//       </main>
//         </>
//     );
//   }

//   return null;
// }
if (slug === "application-programming-interface") {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">

        {/* HERO - soft pink/purple gradient with glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 py-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm">
                  <Plug size={18} />
                  SAP Consulting
                </div>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                  Application Programming Interface
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Connect SAP applications with external platforms and
                  enterprise systems through secure and scalable APIs. Enable
                  real-time data exchange and build a connected digital
                  ecosystem around your SAP landscape.
                </p>

                {/* NEW: quick highlights */}
                <ul className="mt-6 space-y-2 text-gray-700">
                  {[
                    "REST and OData APIs for SAP applications",
                    "Secure, controlled and well-documented integrations",
                    "Works with cloud, on-premise and third-party systems",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-pink-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg">
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </h2>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-pink-200 to-purple-200 p-10 shadow-xl">
                <div className="rounded-3xl bg-white p-10">
                  <Plug className="h-20 w-20 text-pink-600" />

                  <h3 className="mt-6 text-2xl font-bold">
                    Connected SAP Ecosystems
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Enable secure communication between SAP and external
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: STATS STRIP - deep pink/purple gradient */}
        <section className="bg-gradient-to-r from-pink-700 via-fuchsia-700 to-purple-700 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              { value: "REST", label: "Modern API standards" },
              { value: "OData", label: "SAP-native services" },
              { value: "Secure", label: "Controlled access" },
              { value: "Scalable", label: "Built to grow with you" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-pink-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT - white to soft pink */}
        <section className="bg-gradient-to-b from-white to-pink-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-pink-600">
                  SAP API SERVICES
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  Connect SAP With Your Business Ecosystem
                </h2>

                {/* NEW: checklist */}
                <ul className="mt-8 space-y-3">
                  {[
                    "Expose SAP data and business logic as reusable APIs",
                    "Integrate SAP with CRM, e-commerce, mobile and cloud platforms",
                    "Apply authentication, authorization and monitoring",
                    "Keep integrations stable, documented and easy to maintain",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-pink-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  APIs enable SAP systems to exchange data and functionality
                  with other applications and platforms. Our API services help
                  organizations build secure integrations for modern digital
                  ecosystems.
                </p>
                {/* NEW paragraphs */}
                <p>
                  Instead of building point-to-point connections that are hard
                  to maintain, well-designed APIs give every application a
                  clear, standard way to access SAP data and processes. This
                  reduces integration effort and speeds up new projects.
                </p>
                <p>
                  Whether you need to connect SAP S/4HANA with a web store, a
                  mobile app, a partner portal or another enterprise system,
                  we design and deliver APIs that are secure, reliable and
                  ready to scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES - light lavender gradient */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              Our SAP API Services
            </h2>
            {/* NEW: intro */}
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              From design to deployment, we cover every step of building and
              connecting SAP APIs.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Plug,
                  title: "API Development",
                  text: "Build APIs for SAP and enterprise applications, designed for reuse, clear documentation and long-term maintenance.",
                },
                {
                  icon: Settings,
                  title: "API Integration",
                  text: "Connect SAP with third-party applications and platforms such as CRM, e-commerce, HR and logistics systems.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure APIs",
                  text: "Implement secure and controlled API communication with authentication, authorization and access policies.",
                },
                {
                  icon: Zap,
                  title: "REST APIs",
                  text: "Develop modern REST-based integration solutions that are lightweight, fast and easy for other teams to consume.",
                },
                {
                  icon: Code2,
                  title: "OData Services",
                  text: "Create and integrate OData services for SAP applications, including Fiori apps and external consumers.",
                },
                {
                  icon: Database,
                  title: "Data Exchange",
                  text: "Enable reliable data exchange between business systems with proper mapping, validation and error handling.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEW: BENEFITS - dark plum gradient with glow */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-fuchsia-900 py-20 text-white">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold text-pink-300">WHY API INTEGRATION</p>
              <h2 className="mt-3 text-4xl font-bold">
                Benefits of a Strong API Strategy
              </h2>
              <p className="mt-5 text-lg leading-8 text-pink-100">
                Well-built APIs make your SAP landscape more flexible, more
                secure and easier to connect.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Zap,
                  title: "Faster Integration",
                  text: "Reuse standard APIs instead of building every connection from scratch.",
                },
                {
                  icon: ShieldCheck,
                  title: "Better Security",
                  text: "Control who can access which data, with full visibility.",
                },
                {
                  icon: Database,
                  title: "Reliable Data Flow",
                  text: "Keep systems in sync with consistent, validated data exchange.",
                },
                {
                  icon: Settings,
                  title: "Easy Maintenance",
                  text: "Clear interfaces make changes and upgrades simpler.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-pink-100">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS - clean white to soft rose */}
        <section className="bg-gradient-to-b from-white to-rose-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold">
              Our API Integration Process
            </h2>
            {/* NEW: intro */}
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              A simple, structured approach that takes you from requirements
              to a working integration.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Understand Requirements",
                  text: "Identify systems, data and business goals.",
                },
                {
                  title: "Design API Architecture",
                  text: "Plan endpoints, security and data flow.",
                },
                {
                  title: "Develop & Integrate",
                  text: "Build the APIs and connect the systems.",
                },
                {
                  title: "Test & Deploy",
                  text: "Validate, release and monitor the solution.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white shadow">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: FAQ - white clean with light pink boxes */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What is an SAP API?",
                  a: "An SAP API is an interface that lets other applications read, create or update data in SAP in a secure and standard way, commonly using REST or OData.",
                },
                {
                  q: "What is the difference between REST and OData?",
                  a: "REST is a general architectural style for web APIs. OData is a standardized protocol built on REST that adds common rules for querying and updating data, widely used in SAP.",
                },
                {
                  q: "How do you keep SAP APIs secure?",
                  a: "We apply authentication, authorization, access control and monitoring so only approved users and systems can access the right data.",
                },
                {
                  q: "Can you integrate SAP with third-party systems?",
                  a: "Yes. We connect SAP with CRM, e-commerce, mobile apps, partner portals and other enterprise platforms using secure, scalable APIs.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl bg-pink-50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {item.q}
                    <span className="ml-4 text-xl text-pink-600 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - vibrant gradient with soft circles */}
        <section className="relative overflow-hidden bg-gradient-to-r from-pink-700 via-fuchsia-700 to-purple-700 py-20 text-white">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">
              Connect Your SAP Systems
            </h2>

            <p className="mt-5 text-lg text-pink-100">
              Build secure and scalable integrations for your business. Tell
              us about your systems and goals, and we will design the right
              API solution for you.
            </p>

            <h2 className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-pink-700 shadow-lg">
              Start a Conversation
              <ArrowRight size={18} />
            </h2>
          </div>
        </section>

      </main>
    </>
  );
}

return null;
}