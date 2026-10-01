import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Cloud,
  Boxes,
  MonitorSmartphone,
  GitBranch,
  LifeBuoy,
} from "lucide-react";

export const metadata = {
  title: "Cloud & DevOps | Sowsi Technologies",
  description:
    "We build robust cloud foundations, modernize legacy workloads, and equip your teams with the tooling they need to ship confidently.",
};

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    title: "Cloud Foundations",
    description:
      "AWS, Azure, and GCP architectures with networking, identity, and cost-management baked in.",
    icon: Cloud,
    color: "text-blue-600",
  },
  {
    title: "Platform Engineering",
    description:
      "Container orchestration, CI/CD pipelines, and internal developer platforms that boost productivity.",
    icon: Boxes,
    color: "text-purple-700",
  },
  {
    title: "Modernization & Migration",
    description:
      "Rehost, replatform, or refactor legacy workloads with minimal downtime and improved resilience.",
    icon: MonitorSmartphone,
    color: "text-blue-700",
  },
  {
    title: "Automation & IaC",
    description:
      "Terraform, Pulumi, and CloudFormation stacks that keep environments consistent across regions.",
    icon: GitBranch,
    color: "text-pink-600",
  },
  {
    title: "SRE & Observability",
    description:
      "Incident response playbooks, on-call operations, and telemetry dashboards for proactive reliability.",
    icon: LifeBuoy,
    color: "text-orange-500",
  },
];

/* =========================================================
   TOOLING & AUTOMATIONS
========================================================= */

const TECHNOLOGIES = [
  "AWS, Azure, GCP",
  "Terraform, Pulumi, AWS CDK",
  "GitHub Actions, GitLab CI, Argo CD, Jenkins",
  "Prometheus, Grafana, Datadog, New Relic",
  "GitHub Actions, GitLab CI, Argo CD, Jenkins",
  "Vault, Okta, Azure AD, AWS IAM Identity Center",
];

function GuidingPrincipleIcon() {
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
        ease-out
        hover:-translate-y-[6px]
        hover:shadow-[0_12px_18px_rgba(0,0,0,0.20)]
      "
    >
      <Icon
        size={58}
        strokeWidth={2}
        className={`shrink-0 ${feature.color}`}
      />

      <div>
        <h3 className="text-[27px] font-medium leading-tight text-[#292929]">
          {feature.title}
        </h3>

        <p className="mt-3 text-[20px] leading-[1.4] text-[#3c3c3c]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function CloudDevOpsPage() {
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
              Cloud & DevOps
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
            Reliable infrastructure, automated delivery, and teams
            <br />
            that move faster.
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
            We build robust cloud foundations, modernize legacy workloads,
            and equip your teams with the tooling they need to ship
            <br />
            confidently.
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
              Schedule a Cloud Assessment
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
              See DevOps Transformations
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          ACCELERATE YOUR CLOUD MATURITY
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
              Accelerate your cloud maturity
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
              Whether you are adopting the cloud for the first time or
              optimizing an existing footprint, we deliver secure,
              scalable foundations that unlock velocity.
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
              Guiding principles
            </h3>

            <div className="mt-8 space-y-7">

              {/* Item 1 */}
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[22px] leading-none text-blue-600">
                  <GuidingPrincipleIcon />
                </span>

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Landing zones that blend security guardrails with
                  developer enablement.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[22px] leading-none text-blue-600">
                  <GuidingPrincipleIcon />
                </span>

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Infrastructure as Code blueprints that accelerate
                  provisioning and governance.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-5">
                <span className="mt-1 text-[22px] leading-none text-blue-600">
                  <GuidingPrincipleIcon />
                </span>

                <p className="text-[20px] leading-[1.4] text-[#333]">
                  Site reliability engineering practices tuned to your
                  product metrics.
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

  <div className="mx-auto flex flex-col items-center gap-7">

    {/* ROW 1 — INWARD */}
    <div className="grid w-full max-w-[1145px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-[52px]">
      {FEATURES.slice(0, 2).map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

    {/* ROW 2 — OUTWARD */}
    <div className="grid w-full max-w-[1240px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-[148px]">
      {FEATURES.slice(2, 4).map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

    {/* ROW 3 — CENTERED */}
    <div className="w-full max-w-[550px]">
      {FEATURES.slice(4).map((feature) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
        />
      ))}
    </div>

  </div>

</section>

      {/* =====================================================
          TOOLING & AUTOMATIONS
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
                Tooling & automations
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
                Bring consistency, observability, and resilience to your
                infrastructure with tool stacks we deploy every day.
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

              {TECHNOLOGIES.map((technology, i) => (
                <span
                  key={`${technology}-${i}`}
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
            Operate with confidence
          </h2>

          <p
            className="
              mt-5
              max-w-[1400px]
              text-[23px]
              leading-[1.45]
            "
          >
            Partner with Sowsi to implement cloud governance, DevOps
            automation, and reliability practices tailored to your teams.
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
              Start a Cloud Initiative
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
