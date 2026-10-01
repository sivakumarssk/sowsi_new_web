import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Smartphone,
  Cpu,
  Wifi,
  RefreshCw,
  ChartColumnIncreasing,
  Bluetooth,
} from "lucide-react";

export const metadata = {
  title: "Mobile Development | Sowsi Technologies",
  description:
    "We design and develop high-performance mobile applications for iOS and Android.",
};

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    title: "Product Strategy",
    description:
      "Mobile discovery workshops, user journey mapping, and KPI alignment to validate the right features before we build.",
    icon: Smartphone,
    color: "text-blue-700",
  },
  {
    title: "Native & Cross-Platform",
    description:
      "Swift, Kotlin, React Native, and Flutter specialists deliver experiences tailored to your product goals.",
    icon: Cpu,
    color: "text-purple-700",
  },
  {
    title: "Connected Experiences",
    description:
      "IoT, Bluetooth, geofencing, and real-time data streams to power intelligent, context-aware apps.",
    icon: Wifi,
    color: "text-blue-700",
  },
  {
    title: "CI/CD Automation",
    description:
      "GitOps pipelines, TestFlight, Play Store, and enterprise distribution with release governance.",
    icon: RefreshCw,
    color: "text-pink-700",
  },
  {
    title: "Analytics & Growth",
    description:
      "Feature flags, in-app messaging, and product analytics to learn fast and grow retention.",
    icon: ChartColumnIncreasing,
    color: "text-orange-600",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const TECHNOLOGIES = [
  "React Native, Expo",
  "Flutter",
  "Firebase, AWS Amplify, Supabase",
  "AppCenter, Fastlane, Bitrise",
  "Swift, SwiftUI, Kotlin, Jetpack Compose",
];

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article
      className="
        min-h-[155px]
        rounded-[18px]
        border
        border-[#e2dfe4]
        bg-[#fcf5ff]
        px-8
        py-5
        shadow-[0_2px_7px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-[6px]
        hover:shadow-[0_12px_20px_rgba(0,0,0,0.20)]
      "
    >
      <div className="flex items-center gap-7">
        <Icon
          size={52}
          strokeWidth={2}
          className={`shrink-0 ${feature.color}`}
        />

        <div>
          <h3 className="mb-2 text-[27px] font-medium leading-tight text-[#292929]">
            {feature.title}
          </h3>

          <p className="text-[19px] leading-[1.35] text-[#3c3c3c]">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function MobileDevelopmentPage() {
  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          min-h-[610px]
          border-b
          border-gray-200
          bg-gradient-to-br
          from-white
          via-[#fff0fa]
          to-white
          px-8
          py-16
        "
      >
        <div className="mx-auto max-w-[1520px]">

          {/* Breadcrumb */}
          <div className="mb-12 text-[27px] font-medium">
            <span className="text-[#292929]">Services</span>
            <span className="mx-3 text-[#292929]">»</span>
            <span className="text-[#5d158d]">Mobile</span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[1120px]
              text-[36px]
              font-semibold
              leading-[1.4]
              tracking-[-0.8px]
              text-[#292929]
              md:text-[38px]
            "
          >
            Mobile experiences engineered for performance, adoption,
            <br className="hidden md:block" />
            and scale.
          </h1>

          {/* Description */}
          <p
            className="
              mt-3
              max-w-[1130px]
              text-[24px]
              leading-[1.4]
              text-[#3d20e9]
            "
          >
            We design and deliver mobile products that users love and product
            teams can iterate on quickly,
            <br className="hidden md:block" />
            with observability and growth levers from day one.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-5">
            <p
              className="
                inline-flex
                h-[72px]
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#555]
                bg-white
                px-8
                text-[25px]
                font-semibold
                text-[#292929]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Book a Discovery Call
            </p>

            <p
              className="
                inline-flex
                h-[72px]
                items-center
                justify-center
                rounded-[22px]
                bg-gradient-to-r
                from-[#6512dc]
                to-[#7b12df]
                px-8
                text-[25px]
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Explore Case Studies
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY OUTCOMES
      ===================================================== */}

      <section
        className="
          min-h-[450px]
          bg-gradient-to-r
          from-white
          via-[#fff1fa]
          to-white
          px-8
          py-16
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1440px]
            flex-col
            items-center
            justify-between
            gap-12
            lg:flex-row
          "
        >

          {/* Left */}
          <div className="w-full lg:w-[53%]">
            <h2
              className="
                text-[36px]
                font-semibold
                leading-tight
                text-[#292929]
              "
            >
              From idea to active users
            </h2>

            <p
              className="
                mt-6
                max-w-[680px]
                text-[20px]
                leading-[1.4]
                text-[#333]
              "
            >
              We combine user research, lean product delivery, and secure
              engineering to take your mobile roadmap from zero to
              launch—and beyond.
            </p>
          </div>

          {/* Right Card */}
          <div
            className="
              w-full
              max-w-[585px]
              rounded-[18px]
              bg-white
              px-12
              py-9
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
              What you can expect
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex gap-5">
                <Bluetooth
                  size={23}
                  className="mt-1 shrink-0 text-blue-700"
                />

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Unified codebases for iOS and Android without compromising
                  native polish.
                </p>
              </div>

              <div className="flex gap-5">
                <Bluetooth
                  size={23}
                  className="mt-1 shrink-0 text-blue-700"
                />

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Offline-first architecture, background sync, and secure data
                  storage.
                </p>
              </div>

              <div className="flex gap-5">
                <Bluetooth
                  size={23}
                  className="mt-1 shrink-0 text-blue-700"
                />

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Continuous delivery pipelines with automated testing across
                  devices.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

     

     {/* =====================================================
    FEATURES
===================================================== */}

<section className="bg-white px-6 py-10">
  <div className="mx-auto max-w-[1350px]">

    {/* ROW 1 - Cards closer together */}
    <div className="mx-auto grid max-w-[1145px] grid-cols-1 gap-7 md:grid-cols-2">
      {FEATURES.slice(0, 2).map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

    {/* ROW 2 - Cards farther apart */}
    <div className="mx-auto mt-7 grid max-w-[1240px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-[148px]">
      {FEATURES.slice(2, 4).map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

    {/* ROW 3 - One card centered */}
    <div className="mx-auto mt-7 flex max-w-[1145px] justify-center">
      <div className="w-full md:w-[547px]">
        {FEATURES.slice(4).map((feature) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
          />
        ))}
      </div>
    </div>

  </div>
</section>

      {/* =====================================================
          MOBILE TECH STACK
      ===================================================== */}

      <section className="bg-white px-0 py-10 mb-10">

        <div
          className="
            mx-auto
            min-h-[330px]
            w-full
            rounded-[24px]
            border
            border-[#dedede]
            bg-white
            px-12
            py-14
            shadow-[0_2px_8px_rgba(0,0,0,0.12)]
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[1380px]
              flex-col
              items-center
              justify-between
              gap-10
              lg:flex-row
            "
          >

            {/* Left */}
            <div className="w-full lg:w-[40%]">
              <h2
                className="
                  text-[35px]
                  font-semibold
                  text-[#292929]
                "
              >
                Mobile tech stack
              </h2>

              <p
                className="
                  mt-6
                  text-[20px]
                  leading-[1.4]
                  text-[#333]
                "
              >
                Future-ready engineering that keeps your roadmap flexible.
              </p>
            </div>

            {/* Technology badges */}
            <div
              className="
                flex
                w-full
                flex-wrap
                justify-center
                gap-7
                lg:w-[58%]
              "
            >
              {TECHNOLOGIES.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-[14px]
                    bg-gradient-to-b
                    from-[#d47cff]
                    via-[#e6a5fa]
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
                  {technology}
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
          min-h-[370px]
          bg-gradient-to-r
          from-[#0756c9]
          via-[#06449c]
          to-[#062b67]
          px-8
          py-16
          text-white
          mb-15
        "
      >
        <div className="mx-auto flex max-w-[1500px] flex-col items-center text-center">

          <h2
            className="
              text-[35px]
              font-semibold
            "
          >
            Launch faster with a dedicated pod
          </h2>

          <p
            className="
              mt-5
              max-w-[1500px]
              text-[23px]
              leading-[1.4]
            "
          >
            Designers, developers, QA, and product strategists join forces as
            a single squad. Tap into our expertise to accelerate your next
            release.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

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
              Let’s Build
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
          YOUR EXISTING FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}