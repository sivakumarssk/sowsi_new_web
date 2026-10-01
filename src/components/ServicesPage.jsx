"use client";

import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import {
  ArrowRight,
  CloudCog,
  Database,
  Users,
  Lightbulb,
  Monitor,
  FileText,
  Smartphone,
} from "lucide-react";

const SERVICES = [
  {
    title: "Mobile Development",
    image: "/assets/images/mobile-development.png",
    points: [
      "Native & cross-platform apps",
      "Offline-first architecture",
      "App store launch support",
    ],
  },
  {
    title: "Web Development",
    image: "/assets/images/web-development.png",
    points: [
      "Responsive, high-performance sites",
      "Scalable frontend architecture",
      "SEO-ready foundations",
    ],
  },
  {
    title: "AI & Data",
    image: "/assets/images/ai-data.png",
    points: [
      "Custom model integration",
      "Data pipelines & analytics",
      "AI-assisted product features",
    ],
  },
  {
    title: "IoT Solutions",
    image: "/assets/images/iot-solutions.png",
    points: [
      "Connected device platforms",
      "Real-time monitoring dashboards",
      "Edge-to-cloud integration",
    ],
  },
  {
    title: "Cloud & DevOps",
    image: "/assets/images/cloud-devops.png",
    points: [
      "CI/CD pipeline setup",
      "Infrastructure as code",
      "Monitoring & cost optimization",
    ],
  },
  {
    title: "Consulting & Strategy",
    image: "/assets/images/consulting-strategy.png",
    points: [
      "Product & technology audits",
      "Roadmap planning",
      "Vendor & build guidance",
    ],
  },
];

const PROCESSES = [
  {
    label: "Cloud & DevOps",
    icon: CloudCog,
    color: "bg-blue-500",
  },
  {
    label: "AI & Data",
    icon: Database,
    color: "bg-orange-400",
  },
  {
    label: "Consulting & Strategy",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    label: "IoT Solutions",
    icon: Lightbulb,
    color: "bg-green-500",
  },
  {
    label: "Web Development",
    icon: Monitor,
    color: "bg-blue-500",
  },
  {
    label: "Invoice & Inventory Suite",
    icon: FileText,
    badge: "Beta",
    color: "bg-pink-500",
  },
  {
    label: "Mobile Development",
    icon: Smartphone,
    color: "bg-pink-600",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
       <section className="bg-gradient-to-b from-fuchsia-50 to-white px-6 pt-10 pb-14 sm:px-10 lg:px-16">
       <div className="w-full pl-15 sm:pl-25 lg:pl-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-lg text-gray-500"
          >
            <Link href="/" className="hover:text-violet-700">
              Home
            </Link>
            <span>›</span>
            <span aria-current="page" className="font-medium text-violet-700">
              Services
            </span>
          </nav>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 sm:text-[40px]">
            Our Services
          </h1>
          <p className="mb-1 text-[25px] leading-relaxed text-violet-700">
            Services that turn ideas into scalable results.
          </p>
          <p className="mb-8 text-[28px] leading-relaxed text-violet-700">
            From strategy to execution, we help businesses build, launch, and
            grow.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-purple-800 px-6 py-4 text-[18px] font-semibold text-white transition-colors hover:bg-purple-900 mb-15"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
         </div> 
    </section>

      {/* Service cards */}
      
<section className="bg-sky-50/40 px-6 pb-20 sm:px-10 lg:px-16">
  <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 pt-14 sm:grid-cols-2 lg:grid-cols-3">
    {SERVICES.map((service) => (
      <article
        key={service.title}
        className="flex min-h-[600px] flex-col rounded-3xl border border-gray-200 bg-white p-0 shadow-sm"
      >
        {/* Image */}
        <div className="px-7 pt-10">
          <img
            src={service.image}
            alt={service.title}
            className="h-56 w-full rounded-[30px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-9 pb-8 pt-5">

          {/* Icon */}
          <div className="mb-5 text-2xl text-blue-600">
            {service.icon}
          </div>

          {/* Title */}
          <h2 className="mb-2 text-[20px] font-bold text-gray-900">
            {service.title}
          </h2>

          {/* Description */}
          <p className="mb-2 text-[15px] leading-relaxed text-gray-700">
            {service.description}
          </p>

          {/* Points */}
         <ul className="space-y-1 text-[15px] leading-relaxed text-gray-700">
    {service.points.map((point) => (
      <li key={point}>• {point}</li>
    ))}
  </ul>

  <Link
    href="/contact"
    className="mt-5 text-[16px] font-semibold text-blue-600"
  >
    Learn More →
  </Link>
</div>
      </article>
    ))}
  </div>
</section>
     
      {/* Explore service processes */}
<section className="bg-gradient-to-b from-[#111111] via-[#555555] to-[#111111] px-6 py-20 sm:px-10 lg:px-16 mb-15 mt-25">
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <div className="mb-24">
      <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
        Explore service practices
      </h2>

      <p className="max-w-5xl text-sm leading-relaxed text-white sm:text-base">
        We ship experience-led products that grow with your business.
        <br />
        From early discovery to scale-up, our multidisciplinary team blends
        design, engineering, and strategy to help you launch faster and
        outpace the market.
      </p>
    </div>

    {/* Process Buttons */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-11 lg:gap-y-16">

      {PROCESSES.map((process, index) => {
        const desktopPosition = [
          "lg:col-start-1",
          "lg:col-start-3",
          "lg:col-start-1",
          "lg:col-start-3",
          "lg:col-start-5",
          "lg:col-start-1",
          "lg:col-start-3",
        ][index];

        return (
          <div
            key={process.label}
            className={`flex h-24 w-full items-center justify-between rounded-full bg-[#1c1c1c] px-6 lg:col-span-2 ${desktopPosition}`}
          >
            {/* Icon + Label */}
            <div className="flex min-w-0 items-center gap-4">

            <div
  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${process.color}`}
>
  <process.icon size={25} strokeWidth={2} className="text-white" />
</div>

              <span className="text-center text-lg font-semibold leading-tight text-white">
                {process.label}
              </span>

            </div>

            {/* Arrow / Beta */}
            {process.badge ? (
              <span className="ml-3 shrink-0 text-lg font-semibold text-blue-300">
                {process.badge}
              </span>
            ) : (
              <div className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-300 to-purple-800 text-2xl text-white">
                →
              </div>
            )}

          </div>
        );
      })}

    </div>
  </div>
</section>
    </main>
  );
}