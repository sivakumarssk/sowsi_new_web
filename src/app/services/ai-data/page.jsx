"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

/* =========================
   EXACT FEATURE ICONS
========================= */

function EdgeEngineeringIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="16"
        r="9"
        stroke="#0057D9"
        strokeWidth="3"
      />

      <path
        d="M20 16H31C34 16 36 18 36 21V28C36 31 38 33 41 33H46"
        stroke="#242424"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="47"
        cy="41"
        r="9"
        stroke="#0057D9"
        strokeWidth="3"
      />

      <path
        d="M36 28V34C36 38 39 41 43 41H38"
        stroke="#242424"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConnectivityIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="29"
        cy="12"
        r="9"
        stroke="#6B2492"
        strokeWidth="4"
      />

      <circle
        cx="11"
        cy="45"
        r="7"
        stroke="#6B2492"
        strokeWidth="4"
      />

      <circle
        cx="29"
        cy="45"
        r="7"
        stroke="#6B2492"
        strokeWidth="4"
      />

      <circle
        cx="47"
        cy="45"
        r="7"
        stroke="#6B2492"
        strokeWidth="4"
      />

      <path
        d="M24 19L13 38"
        stroke="#6B2492"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M29 21V38"
        stroke="#6B2492"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M34 19L45 38"
        stroke="#6B2492"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 43H45C51 43 55 39 55 33C55 27 51 23 45 23C44 16 39 11 32 11C25 11 20 15 18 21C17 21 16 21 15 21C8 21 3 26 3 33C3 39 9 43 17 43Z"
        stroke="#1553A5"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 42L22 27L34 38L50 20"
        stroke="#C50073"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="7" cy="42" r="5" fill="#C50073" />
      <circle cx="22" cy="27" r="5" fill="#C50073" />
      <circle cx="34" cy="38" r="5" fill="#C50073" />
      <circle cx="50" cy="20" r="5" fill="#C50073" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 5L51 12V27C51 40 42 50 29 55C16 50 7 40 7 27V12L29 5Z"
        stroke="#FF5A1F"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <path
        d="M18 29L25 36L41 20"
        stroke="#FF5A1F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================
   HOW WE DELIVER ICON
========================= */

function DeliveryIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 shrink-0"
    >
      <circle
        cx="11.5"
        cy="11.5"
        r="2"
        stroke="#0067E8"
        strokeWidth="1.5"
      />

      <path
        d="M11.5 3V8"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M11.5 15V20"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M3 11.5H8"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M15 11.5H20"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M5.5 5.5L9 9"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M14 14L17.5 17.5"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M17.5 5.5L14 9"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M9 14L5.5 17.5"
        stroke="#0067E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
/* =========================
   AI & DATA FEATURE ICONS
========================= */

function DataPlatformIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="29"
        cy="15"
        rx="18"
        ry="8"
        stroke="#0057D9"
        strokeWidth="4"
      />

      <path
        d="M11 15V29C11 33.5 19 37 29 37C39 37 47 33.5 47 29V15"
        stroke="#0057D9"
        strokeWidth="4"
      />

      <path
        d="M11 29V43C11 47.5 19 51 29 51C39 51 47 47.5 47 43V29"
        stroke="#0057D9"
        strokeWidth="4"
      />

      <path
        d="M11 15C11 19.5 19 23 29 23C39 23 47 19.5 47 15"
        stroke="#0057D9"
        strokeWidth="4"
      />
    </svg>
  );
}


function MachineLearningIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain */}
      <path
        d="M27 11C22 7 15 10 15 16C10 16 7 20 8 25C4 29 6 36 11 38C10 44 15 48 20 47C22 52 28 52 30 47V12C29 12 28 11 27 11Z"
        stroke="#6B2492"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M31 12V47"
        stroke="#6B2492"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Connections */}
      <path
        d="M31 19H43"
        stroke="#6B2492"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M31 29H43"
        stroke="#6B2492"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M31 39H43"
        stroke="#6B2492"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="48" cy="19" r="3" fill="#6B2492" />
      <circle cx="48" cy="29" r="3" fill="#6B2492" />
      <circle cx="48" cy="39" r="3" fill="#6B2492" />
    </svg>
  );
}


function GenerativeAIIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main AI stroke */}
      <path
        d="M8 39C16 28 22 19 29 18C35 17 32 25 27 29C22 34 20 40 25 42C30 44 37 35 43 28"
        stroke="#0057D9"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M38 11L40 17L46 19L40 21L38 27L36 21L30 19L36 17L38 11Z"
        fill="#0057D9"
      />

      <path
        d="M49 8L50 11L53 12L50 13L49 16L48 13L45 12L48 11L49 8Z"
        fill="#0057D9"
      />
    </svg>
  );
}


function BusinessIntelligenceIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sparkle */}
      <path
        d="M11 7L13 13L19 15L13 17L11 23L9 17L3 15L9 13L11 7Z"
        fill="#C50073"
      />

      {/* Bars */}
      <rect
        x="16"
        y="29"
        width="7"
        height="18"
        fill="#C50073"
      />

      <rect
        x="27"
        y="22"
        width="7"
        height="25"
        fill="#C50073"
      />

      <rect
        x="38"
        y="27"
        width="7"
        height="20"
        fill="#C50073"
      />

      {/* Base */}
      <path
        d="M13 51H49"
        stroke="#C50073"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Small sparkle */}
      <path
        d="M45 8L47 13L52 15L47 17L45 22L43 17L38 15L43 13L45 8Z"
        fill="#C50073"
      />
    </svg>
  );
}


function MLOpsIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon */}
      <path
        d="M29 5L48 16V39L29 50L10 39V16L29 5Z"
        stroke="#FF5A1F"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Central connection */}
      <circle
        cx="29"
        cy="28"
        r="5"
        stroke="#FF5A1F"
        strokeWidth="3"
      />

      <circle
        cx="19"
        cy="20"
        r="4"
        stroke="#FF5A1F"
        strokeWidth="3"
      />

      <circle
        cx="40"
        cy="20"
        r="4"
        stroke="#FF5A1F"
        strokeWidth="3"
      />

      <circle
        cx="40"
        cy="37"
        r="4"
        stroke="#FF5A1F"
        strokeWidth="3"
      />

      <path
        d="M23 23L26 26"
        stroke="#FF5A1F"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M35 23L32 26"
        stroke="#FF5A1F"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M33 31L37 35"
        stroke="#FF5A1F"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}


function ExperimentationIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 29C5 21 11 16 18 16C25 16 28 22 29 29C30 36 33 42 40 42C47 42 53 37 53 29C53 21 47 16 40 16C33 16 30 22 29 29C28 36 25 42 18 42C11 42 5 37 5 29Z"
        stroke="#6B2492"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
/* =========================
   FEATURE CARD
========================= */


function FeatureCard({ icon, title, description }) {
  return (
    <div
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
        {icon}
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
          {title}
        </h3>

        <p
          className="
            mt-3
            text-[20px]
            leading-[1.45]
            text-[#444]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================
   FEATURES
========================= */

const FEATURES = [
  {
    title: "Modern Data Platforms",
    description:
      "Data lakes, warehouses, and lakehouses that centralize your sources and enable self-service analytics.",
    icon: <DataPlatformIcon />,
  },

  {
    title: "Machine Learning & AI",
    description:
      "Predictive models, recommendation engines, conversational AI, and computer vision tailored to your domain.",
    icon: <MachineLearningIcon />,
  },

  {
    title: "Generative AI",
    description:
      "Responsible implementation of LLMs, embeddings, and RAG pipelines for knowledge-intensive workflows.",
    icon: <GenerativeAIIcon />,
  },

  {
    title: "Business Intelligence",
    description:
      "Interactive dashboards, KPI tracking, and executive reporting that accelerate decision-making.",
    icon: <BusinessIntelligenceIcon />,
  },

  {
    title: "MLOps & Automation",
    description:
      "CI/CD for ML, feature stores, monitoring, and alerting keep your models accurate in production.",
    icon: <MLOpsIcon />,
  },

  {
    title: "Continuous Experimentation",
    description:
      "A/B testing, uplift modeling, and growth experiments to reveal what drives revenue and retention.",
    icon: <ExperimentationIcon />,
  },
];

/* =========================
   TECHNOLOGIES
========================= */

const TECHNOLOGIES = [
  "Power BI, Tableau, Looker, Superset",
  "Python, R, Scala",
  "TensorFlow, PyTorch, scikit-learn",
  "Snowflake, BigQuery, Redshift, Databricks",
  "DBT, Airflow, Dagster",
  "LangChain, LlamaIndex, OpenAI, Azure OpenAI",
];

/* =========================
   PAGE
========================= */

export default function AIDataPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section
        className="
          min-h-[580px]
          border-b
          border-[#e5e5e5]
          bg-gradient-to-b
          from-white
          via-[#ffe8f8]
          to-white
          px-6
          py-14
        "
      >
        <div
          className="
            mx-auto
            max-w-[1450px]
            pt-2
          "
        >
          {/* Breadcrumb */}

          <div
            className="
              mb-12
              text-[26px]
              font-medium
            "
          >
            <span className="text-[#292929]">
              Services
            </span>

            <span className="mx-3 text-[#555]">
              »
            </span>

            <span className="text-[#58158B]">
              AI & Data
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-[1050px]
              text-[38px]
              font-semibold
              leading-[1.35]
              text-[#292929]
            "
          >
            Transform data into intelligent products and predictive
            insights.
          </h1>

          {/* Description */}

          <p
            className="
              mt-2
              max-w-[1100px]
              text-[25px]
              leading-[1.4]
              text-[#3219D8]
            "
          >
            From data engineering foundations to AI-driven automation,
            we help teams unlock new value streams and empower
            decision-makers.
          </p>

          {/* Buttons */}

          <div className="mt-7 flex gap-5">
            <p
              className="
                rounded-[14px]
                border
                border-[#555]
                bg-white
                px-4
                py-3
                text-[25px]
                font-semibold
                text-[#292929]
                transition
                hover:bg-gray-50
              "
            >
              Book an AI Strategy Session
            </p>

            <p
              className="
                rounded-[14px]
                bg-[#6814D8]
                px-5
                py-3
                text-[25px]
                font-semibold
                text-white
                transition
                hover:bg-[#5810BA]
              "
            >
              Review AI Case Studies
            </p>
          </div>
        </div>
      </section>

      {/* ================= DELIVERY ================= */}

      <section
        className="
          bg-gradient-to-b
          from-[#fff7fc]
          to-white
          px-6
          py-12
          mb-10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1450px]
            items-center
            justify-between
            gap-16
          "
        >
          {/* Left */}

          <div className="w-[48%]">
            <h2
              className="
                max-w-[620px]
                text-[34px]
                font-semibold
                leading-[1.35]
                text-[#292929]
              "
            >
              Where data meets measurable outcomes
            </h2>

            <p
              className="
                mt-6
                max-w-[650px]
                text-[20px]
                leading-[1.5]
                text-[#292929]
              "
            >
              We don’t just ship models—we integrate data, AI, and
              analytics into your product workflows and business
              processes.
            </p>
          </div>

          {/* Right Card */}

          <div
            className="
              w-[38%]
              rounded-[18px]
              bg-white
              px-8
              py-7
            "
          >
            <h3
              className="
                mb-8
                text-center
                text-[30px]
                font-semibold
                text-[#292929]
              "
            >
              How we deliver
            </h3>

            <div className="space-y-7">

              <div className="flex gap-4">
                <DeliveryIcon />

                <p
                  className="
                    text-[20px]
                    leading-[1.45]
                    text-[#292929]
                  "
                >
                  Product discovery that pinpoints automation,
                  prediction, and personalization opportunities.
                </p>
              </div>

              <div className="flex gap-4">
                <DeliveryIcon />

                <p
                  className="
                    text-[20px]
                    leading-[1.45]
                    text-[#292929]
                  "
                >
                  Production-ready ML pipelines with observability,
                  retraining, and governance.
                </p>
              </div>

              <div className="flex gap-4">
                <DeliveryIcon />

                <p
                  className="
                    text-[20px]
                    leading-[1.45]
                    text-[#292929]
                  "
                >
                  Human-in-the-loop experiences that keep domain
                  experts empowered.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      

{/* ================= FEATURES ================= */}

<section
  className="
    bg-white
    px-0
    pb-10
  "
>
  {/* Row 1 - inward */}
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
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>

  {/* Row 2 - outward */}
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
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>

  {/* Row 3 - inward */}
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
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
</section>

      {/* ================= ECOSYSTEM ================= */}

      <section className="bg-white px-0 py-12">

        <div
          className="
            mx-auto
            w-full
            rounded-[18px]
            border
            border-[#e5e5e5]
            bg-white
            px-16
            py-16
            shadow-[0_1px_6px_rgba(0,0,0,0.07)]
            mb-10
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-16
            "
          >

            {/* Left */}

            <div className="w-[42%]">

              <h2
                className="
                  text-[32px]
                  font-semibold
                  text-[#292929]
                  ml-14
                "
              >
                Ecosystem expertise
              </h2>

              <p
                className="
                  mt-3
                  max-w-[750px]
                  text-[21px]
                  leading-[1.5]
                  ml-10
                "
              >
                Partner with a team that understands the nuances of
                modern data tooling and governance.
              </p>

            </div>

            {/* Technology badges */}

            <div
              className="
                grid
                w-[52%]
                grid-cols-2
                gap-7
              "
            >

             
{TECHNOLOGIES.map((technology, index) => (
  <span
    key={technology}
    className={`
      flex
      min-h-[62px]
      items-center
      justify-center
      rounded-[14px]
      bg-gradient-to-b
      from-[#d678ff]
      via-[#e8a6fa]
      to-[#fff1ff]
      px-5
      py-3
      text-center
      text-[17px]
      font-medium
      leading-[1.35]
      text-[#242424]
      shadow-[0_2px_5px_rgba(160,70,200,0.12)]
      ${index === 1 ? "w-[180px]" : ""}
      ${index === 4 ? "w-[220px]" : ""}
    `}
  >
    {technology}
  </span>
))}
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        className="
          bg-gradient-to-r
          from-[#0758C8]
          to-[#062B68]
          px-6
          py-24
          text-center
          text-white
          mb-15
        "
      >

        <h2
          className="
            text-[34px]
            font-semibold
          "
        >
          Make confident moves with your data
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-[1250px]
            text-[22px]
          "
        >
          Schedule a workshop to uncover the highest-impact use cases
          for AI, automation, and analytics across your business.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <p
            className="
              rounded-[10px]
              bg-[#B000FF]
              px-12
              py-4
              text-[18px]
              font-medium
              text-white
              shadow-md
            "
          >
            Uncover Opportunities
          </p>

          <p
            className="
              rounded-[10px]
              bg-white
              px-12
              py-4
              text-[18px]
              font-medium
              text-[#333]
              shadow-md
            "
          >
            Back to Services
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}