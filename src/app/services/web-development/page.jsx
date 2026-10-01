"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Check,
  Code2,
  Palette,
  MonitorSmartphone,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const FEATURES = [
  {
    title: "Custom Platforms",
    description:
      "From corporate websites to complex customer portals, we build exactly what your roadmap needs—no more, no less.",
    icon: Code2,
    color: "text-blue-600",
  },
  {
    title: "Experience Design",
    description:
      "UX research, UI design, and interactive prototypes ensure every user journey is intuitive and on-brand.",
    icon: Palette,
    color: "text-pink-600",
  },
  {
    title: "Responsive Everything",
    description:
      "Pixel-perfect implementations across desktop, mobile, tablets, and emerging devices.",
    icon: MonitorSmartphone,
    color: "text-blue-700",
  },
  {
    title: "Security & Compliance",
    description:
      "OWASP-hardened code, SOC2-ready processes, and rigorous QA pipelines.",
    icon: ShieldCheck,
    color: "text-teal-700",
  },
  {
    title: "Launch & Optimization",
    description:
      "A/B testing, SEO tuning, and conversion optimization to keep your growth engine running.",
    icon: Rocket,
    color: "text-orange-500",
  },
];

const TECHNOLOGIES = [
  "React, Next.js, Remix",
  "Angular, Vue",
  "Tailwind CSS, Chakra, Radix UI",
  "Node.js, NestJS, GraphQL",
  "Sanity, Contentful, Strapi, headless WordPress",
];
function ServiceCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      className="
        flex
        min-h-[162px]
        items-center
        rounded-[18px]
        border
        border-[#e2dfe4]
        bg-[#fcf5ff]
        px-7
        py-5
        shadow-[0_2px_6px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-[5px]
        hover:shadow-[0_10px_18px_rgba(0,0,0,0.15)]
      "
    >
      <div className="flex w-full items-center gap-7">
        {/* Icon */}
        <Icon
          size={52}
          strokeWidth={2}
          className={`shrink-0 ${feature.color}`}
        />

        {/* Card Content */}
        <div className="min-w-0">
          <h3 className="mb-2 text-[23px] font-medium leading-tight text-[#292929]">
            {feature.title}
          </h3>

          <p className="text-[18px] leading-[1.5] text-[#3c3c3c]">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}
export default function WebDevelopmentPage() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-gray-200 bg-white">
          {/* Pink center glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[18%] top-0 h-full w-[65%] bg-gradient-to-b from-pink-100/70 via-pink-50/80 to-white blur-3xl" />
          </div>

          <div className="relative mx-auto min-h-[610px] max-w-[1450px] px-10 pb-24 pt-16 lg:px-[70px]">
            {/* Breadcrumb */}
            <nav className="mb-12 flex items-center gap-3 text-[27px] font-medium">
              <p
                className="text-gray-800 transition-colors hover:text-violet-700"
              >
                Services
              </p>

              <span className="text-gray-600">»</span>

              <span className="text-violet-800">Web</span>
            </nav>

            {/* Hero Content */}
            <div className="max-w-[1120px]">
              <h1 className="mb-5 text-[38px] font-bold leading-[1.38] tracking-[-1px] text-[#292929] sm:text-[40px]">
                Enterprise-grade web platforms that make every interaction
                <br className="hidden sm:block" />
                count.
              </h1>

              <p className="mb-8 max-w-[1100px] text-[25px] leading-[1.42] text-[#3519d8]">
                We partner with marketing, product, and technology teams to
                ship performant, content-rich web experiences that convert
                visitors into loyal customers.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5">
                <p
                  
                  className="flex h-[72px] items-center justify-center rounded-[14px] border border-gray-500 bg-white px-5 text-[25px] font-semibold text-[#292929] transition-all hover:border-violet-600 hover:text-violet-700"
                >
                  Request a Consultation
                </p>

                <p
                  
                  className="flex h-[72px] items-center justify-center rounded-[14px] bg-[#6d12d8] px-11 text-[25px] font-semibold text-white transition-all hover:bg-[#5b0fba]"
                >
                  View Related Work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            KEY OUTCOMES
        ========================================================= */}
        <section className="relative overflow-hidden bg-white">
          {/* Pink center background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-0 h-full w-[80%] bg-gradient-to-r from-white via-pink-50 to-white" />
          </div>

          <div className="relative mx-auto min-h-[430px] max-w-[1450px] px-10 py-20 lg:px-[70px]">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
              {/* Left */}
              <div className="pl-0 lg:pl-[15px]">
                <h2 className="mb-7 text-[34px] font-bold leading-tight text-[#292929]">
                  What sets our web builds apart
                </h2>

                <p className="max-w-[650px] text-[19px] leading-[1.4] text-[#303030]">
                  From discovery to launch, our teams operate as an extension
                  of your in-house capabilities, embedding modern delivery
                  practices and sharing knowledge along the way.
                </p>
              </div>

              {/* Right Card */}
              <div className="rounded-[18px] bg-white px-12 py-9 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <h3 className="mb-8 text-center text-[31px] font-bold text-[#292929]">
                  Key Outcomes
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Check
                      size={22}
                      strokeWidth={3}
                      className="mt-[3px] shrink-0 text-purple-700"
                    />

                    <p className="text-[19px] leading-[1.4] text-[#292929]">
                      Performance-first builds with Core Web Vitals monitoring
                      baked in.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Check
                      size={22}
                      strokeWidth={3}
                      className="mt-[3px] shrink-0 text-purple-700"
                    />

                    <p className="text-[19px] leading-[1.4] text-[#292929]">
                      Composable architectures that scale with headless CMS or
                      commerce platforms.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Check
                      size={22}
                      strokeWidth={3}
                      className="mt-[3px] shrink-0 text-purple-700"
                    />

                    <p className="text-[19px] leading-[1.4] text-[#292929]">
                      Design systems that keep multi-brand experiences
                      consistent and accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================= */}
 {/* =========================================================
    FEATURES
========================================================= */}
<section className="bg-white px-6 py-10">
  <div className="mx-auto max-w-[1350px]">

    {/* ROW 1 - Cards closer together */}
    <div className="mx-auto grid max-w-[1145px] grid-cols-1 gap-7 md:grid-cols-2">
      {FEATURES.slice(0, 2).map((feature) => (
        <ServiceCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

    {/* ROW 2 - Cards farther apart */}
    <div className="mx-auto mt-7 grid max-w-[1240px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-[148px]">
      {FEATURES.slice(2, 4).map((feature) => (
        <ServiceCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

    {/* ROW 3 - One card centered */}
    <div className="mx-auto mt-7 flex max-w-[1145px] justify-center">
      <div className="w-full md:w-[547px]">
        {FEATURES.slice(4).map((feature) => (
          <ServiceCard
            key={feature.title}
            feature={feature}
          />
        ))}
      </div>
    </div>

  </div>
</section>

        {/* =========================================================
            TECHNOLOGY TOOLKIT
        ========================================================= */}
        <section className="border-t border-gray-200 bg-white px-8 py-16 shadow-[0_-1px_8px_rgba(0,0,0,0.08)] mb-15 ml-1 rounded-[30]">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left */}
            <div className="pl-0 lg:pl-8">
              <h2 className="mb-7 text-[34px] font-bold text-[#292929]">
                Technology toolkit
              </h2>

              <p className="max-w-[570px] text-[20px] leading-[1.4] text-[#292929]">
                We keep your stack modern, maintainable, and ready for
                continuous optimization.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap justify-center gap-7">
              {TECHNOLOGIES.map((technology) => (
                <span
                  key={technology}
                  className="rounded-[14px] bg-gradient-to-b from-[#d47cff] via-[#e6a5fa] to-[#fff0ff] px-6 py-5 text-[18px] font-medium text-[#242424] shadow-[0_3px_8px_rgba(160,70,200,0.15)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="bg-gradient-to-r from-[#075bc8] via-[#0649a7] to-[#06285f] px-8 py-20 mb-15">
          <div className="mx-auto max-w-[1500px] text-center">
            <h2 className="mb-6 text-[34px] font-bold text-white">
              Plan your next sprint with us
            </h2>

            <p className="mx-auto mb-10 max-w-[1450px] text-[22px] leading-[1.4] text-white">
              Whether you need a new marketing site, a headless commerce
              stack, or a complex partner portal, our team is ready to
              collaborate.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <p
                className="flex h-[66px] min-w-[295px] items-center justify-center rounded-[11px] bg-[#c000ff] px-8 text-[18px] font-medium text-white shadow-md transition hover:bg-[#aa00e0]"
              >
                Start a Conversation
              </p>

              <p
                className="flex h-[66px] min-w-[295px] items-center justify-center rounded-[11px] bg-white px-8 text-[18px] font-medium text-[#333] shadow-md transition hover:bg-gray-100"
              >
                Back To Services
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

