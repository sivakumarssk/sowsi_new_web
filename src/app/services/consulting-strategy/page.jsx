import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Compass,
  Monitor,
  Target,
  Database,
  Handshake,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Consulting | Sowsi Technologies",
  description:
    "We help product, technology, and operations teams make confident decisions, align on priorities, and deliver measurable outcomes.",
};

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    title: "Product & Innovation Strategy",
    description:
      "Define vision, prioritize features, and establish north-star metrics to guide investment.",
    icon: Compass,
    color: "text-blue-600",
  },
  {
    title: "Digital Transformation",
    description:
      "Bridge business and technology with pragmatic modernization, change management, and capability building.",
    icon: Monitor,
    color: "text-purple-700",
  },
  {
    title: "Value Stream Mapping",
    description:
      "Illuminate bottlenecks across teams, tooling, and processes to unlock sustainable velocity.",
    icon: Target,
    color: "text-blue-700",
  },
  {
    title: "Platform & Architecture Advisory",
    description:
      "Evaluate architectures, integrations, and vendor ecosystems to de-risk critical decisions.",
    icon: Database,
    color: "text-pink-600",
  },
  {
    title: "Embedded Leadership",
    description:
      "Fractional CPO/CTO engagements bring experienced leaders into your organization when you need them most.",
    icon: Handshake,
    color: "text-orange-500",
  },
  {
    title: "Go-to-Market Enablement",
    description:
      "Align product, marketing, and revenue teams with messaging, enablement, and launch playbooks.",
    icon: Globe,
    color: "text-purple-700",
  },
];

/* =========================================================
   ENGAGEMENT FORMATS
========================================================= */

const ENGAGEMENT_FORMATS = [
  "Strategy sprints (1-3 weeks)",
  "Process and tooling audits",
  "Embedded product leadership",
  "Training & capability uplift",
  "Quarterly roadmap partnerships",
  "Design thinking & ideation workshops",
];

function WhatYoullGainIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 shrink-0"
    >
      <path
        d="M11.5 2L20 6.5V16.5L11.5 21L3 16.5V6.5L11.5 2Z"
        stroke="#1769E0"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 6.5L11.5 11L20 6.5"
        stroke="#1769E0"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 11V21"
        stroke="#1769E0"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

/* =========================
   FEATURE CARD
========================= */

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      className="
        flex
        min-h-[150px]
        items-center
        gap-7
        rounded-[18px]
        border
        border-[#e5dfe8]
        bg-[#fcf5ff]
        px-7
        py-6
        shadow-[0_2px_8px_rgba(0,0,0,0.10)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
      "
    >
      <div className="shrink-0">
        <Icon
          size={58}
          strokeWidth={1.75}
          className={feature.color}
        />
      </div>

      <div>
        <h3
          className="
            text-[27px]
            font-medium
            leading-tight
            text-[#292929]
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-3
            text-[20px]
            leading-[1.45]
            text-[#444]
          "
        >
          {feature.description}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ConsultingPage() {
  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          min-h-[580px]
          border-b
          border-[#e8e8e8]
          bg-gradient-to-br
          from-white
          via-[#fff0fa]
          to-white
          px-8
          py-14
        "
      >
        <div className="mx-auto max-w-[1530px]">

          {/* Breadcrumb */}
          <div className="mb-12 text-[27px] font-medium">
            <span className="text-[#292929]">
              Services
            </span>

            <span className="mx-4 text-[#292929]">
              »
            </span>

            <span className="text-[#64158f]">
              Consulting
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[1100px]
              text-[38px]
              font-semibold
              leading-[1.35]
              tracking-[-0.8px]
              text-[#292929]
            "
          >
            Strategic partners for leaders navigating their next
            <br />
            transformation.
          </h1>

          {/* Description */}
          <p
            className="
              mt-3
              max-w-[1100px]
              text-[23px]
              leading-[1.45]
              text-[#4028e9]
            "
          >
            We help product, technology, and operations teams make
            confident decisions, align on priorities,
            <br />
            and deliver measurable outcomes.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-5">

            <p
              className="
                inline-flex
                h-[72px]
                min-w-[335px]
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#555]
                bg-white
                px-8
                text-[24px]
                font-semibold
                text-[#292929]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Schedule a Strategy Session
            </p>

            <p
             
              className="
                inline-flex
                h-[72px]
                min-w-[325px]
                items-center
                justify-center
                rounded-[22px]
                bg-gradient-to-r
                from-[#6a13db]
                to-[#7717db]
                px-8
                text-[24px]
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Meet Our Leadership
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          CLARITY TODAY. MOMENTUM TOMORROW.
      ===================================================== */}

      <section
        className="
          min-h-[500px]
          bg-gradient-to-r
          from-white
          via-[#fff0fa]
          to-white
          px-8
          py-14
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1480px]
            items-start
            justify-between
            gap-16
          "
        >

          {/* LEFT */}
          <div className="w-[53%] pt-16">

            <h2
              className="
                text-[36px]
                font-semibold
                leading-tight
                text-[#292929]
              "
            >
              Clarity today. Momentum tomorrow.
            </h2>

            <p
              className="
                mt-6
                max-w-[700px]
                text-[20px]
                leading-[1.45]
                text-[#333]
              "
            >
              Our consultants bring deep product and engineering
              experience to help your teams launch initiatives,
              optimize operations, and scale sustainably.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              w-full
              max-w-[585px]
              rounded-[18px]
              bg-white
              px-10
              py-8
              shadow-[0_4px_18px_rgba(0,0,0,0.08)]
            "
          >

            <h3
              className="
                text-center
                text-[30px]
                font-semibold
                text-[#292929]
              "
            >
              What you'll gain
            </h3>

            <div className="mt-8 space-y-7">

              {/* Item 1 */}
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[22px] leading-none text-blue-600">
                  <WhatYoullGainIcon />
                </span>

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Workshops that align stakeholders, clarify vision,
                  and convert goals into actionable roadmaps.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[22px] leading-none text-blue-600">
                  <WhatYoullGainIcon />
                </span>

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Fractional product leadership to accelerate
                  discovery, validation, and delivery outcomes.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[22px] leading-none text-blue-600">
                  <WhatYoullGainIcon />
                </span>

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Technology assessments that balance innovation
                  with operational excellence.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

    {/* ================= FEATURES ================= */}

<section className="bg-white px-0 pb-10 mt-10">

  {/* ROW 1 - INNER CARDS */}

  <div
    className="
      mx-auto
      grid
      max-w-[1145px]
      grid-cols-2
      gap-[52px]
    "
  >
    {FEATURES.slice(0, 2).map((feature) => (
      <FeatureCard
        key={feature.title}
        feature={feature}
      />
    ))}
  </div>

  {/* ROW 2 - OUTER CARDS */}

  <div
    className="
      mx-auto
      mt-7
      grid
      w-full
      max-w-[1240px]
      grid-cols-2
      gap-[148px]
    "
  >
    {FEATURES.slice(2, 4).map((feature) => (
      <FeatureCard
        key={feature.title}
        feature={feature}
      />
    ))}
  </div>

  {/* ROW 3 - INNER CARDS */}

  <div
    className="
      mx-auto
      mt-7
      grid
      max-w-[1145px]
      grid-cols-2
      gap-[52px]
    "
  >
    {FEATURES.slice(4, 6).map((feature) => (
      <FeatureCard
        key={feature.title}
        feature={feature}
      />
    ))}
  </div>

</section>
      {/* =====================================================
          ENGAGEMENT FORMATS
      ===================================================== */}

      <section
        className="
          bg-white
          px-0
          py-10
          mb-10
        "
      >

        <div
          className="
            mx-auto
            min-h-[350px]
            w-full
            rounded-[24px]
            border
            border-[#e2e2e2]
            bg-white
            px-12
            py-14
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-[1530px]
              items-center
              justify-between
              gap-12
            "
          >

            {/* LEFT */}
            <div className="w-[43%]">

              <h2
                className="
                  text-[35px]
                  font-semibold
                  text-[#292929]
                "
              >
                Engagement formats
              </h2>

              <p
                className="
                  mt-6
                  max-w-[650px]
                  text-[20px]
                  leading-[1.45]
                  text-[#333]
                "
              >
                Choose the partnership model that fits your pace and
                priorities. We adapt quickly as your needs evolve.
              </p>

            </div>

            {/* RIGHT BADGES */}
            <div
              className="
                flex
                w-[55%]
                flex-wrap
                justify-center
                gap-7
              "
            >

              {ENGAGEMENT_FORMATS.map((format, i) => (
                <span
                  key={`${format}-${i}`}
                  className="
                    min-w-[275px]
                    rounded-[14px]
                    bg-gradient-to-b
                    from-[#d16fff]
                    via-[#e6a0fa]
                    to-[#fff0ff]
                    px-6
                    py-5
                    text-center
                    text-[18px]
                    font-medium
                    text-[#242424]
                    shadow-[0_3px_8px_rgba(160,70,200,0.15)]
                  "
                >
                  {format}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          min-h-[365px]
          bg-gradient-to-r
          from-[#075bcf]
          via-[#064aa8]
          to-[#052b67]
          px-8
          py-16
          text-white
          mb-15
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            flex-col
            items-center
            text-center
          "
        >

          <h2
            className="
              text-[35px]
              font-semibold
            "
          >
            Let's plot your next move
          </h2>

          <p
            className="
              mt-5
              max-w-[1400px]
              text-[23px]
              leading-[1.45]
            "
          >
            Whether you're launching, scaling, or transforming, Sowsi
            Technologies brings the clarity and leadership to help you
            deliver.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-5
            "
          >

            <p
             
              className="
                flex
                h-[66px]
                w-[295px]
                items-center
                justify-center
                rounded-[10px]
                bg-gradient-to-r
                from-[#c000ff]
                to-[#a800ff]
                text-[18px]
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Talk to an Advisor
            </p>

            <p
              className="
                flex
                h-[66px]
                w-[295px]
                items-center
                justify-center
                rounded-[10px]
                border
                border-[#777]
                bg-white
                text-[18px]
                font-medium
                text-[#333]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Back to Services
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXISTING FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}