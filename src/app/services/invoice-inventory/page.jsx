import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ReceiptText,
  Boxes,
  Layers,
  ShieldCheck,
  SquareCheckBig,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

/* =========================================================
   METADATA
========================================================= */

export const metadata = {
  title: "Invoice & Inventory Suite | Sowsi Technologies",
  description:
    "We're building a modular platform that closes the gap between finance, sales, and fulfillment—so your teams stay aligned, cash flow stays healthy, and customers stay delighted.",
};

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    title: "Intelligent Invoicing",
    description:
      "Automate billing flows, approvals, and payment reminders with configurable templates and jurisdiction-aware tax rules.",
    icon: ReceiptText,
    color: "text-blue-600",
  },
  {
    title: "Inventory Without Silos",
    description:
      "Track stock in real time across warehouses, sales channels, and manufacturing—with smart reorder alerts and batch controls.",
    icon: Boxes,
    color: "text-purple-700",
  },
  {
    title: "Integrated Operations",
    description:
      "Connect procurement, CRM, and accounting tools to create a single source of truth for orders, suppliers, and customers.",
    icon: Layers,
    color: "text-blue-700",
  },
  {
    title: "Compliance & Audit Ready",
    description:
      "Role-based access, audit trails, and e-invoicing compliance for GST, VAT, and region-specific mandates.",
    icon: ShieldCheck,
    color: "text-pink-600",
  },
  {
    title: "Workflow Automation",
    description:
      "Drag-and-drop workflows orchestrate approvals, fulfillment, and handoffs with reminders and escalation paths.",
    icon: SquareCheckBig,
    color: "text-orange-500",
  },
  {
    title: "Predictive Insights",
    description:
      "AI-powered dashboards forecast cash flow, demand, and supplier performance so you can act before issues arise.",
    icon: ChartNoAxesColumnIncreasing,
    color: "text-purple-700",
  },
];

/* =========================================================
   WHAT MAKES IT DIFFERENT
========================================================= */

const DIFFERENTIATORS = [
  "Modular architecture that scales from SMB to mid-market operations.",
  "Data residency options across regions with encryption in transit and at rest.",
  "Offline-capable mobile apps for field sales and warehouse teams.",
  "Embedded analytics and AI-assisted recommendations powered by our data platform.",
  "APIs and connectors for QuickBooks, Zoho Books, Tally, Shopify, WooCommerce, and leading ERPs.",
];

/* =========================================================
   EARLY ACCESS STEPS
========================================================= */

const STEPS = [
  {
    number: 1,
    text: "Share your current invoicing and inventory pain points",
  },
  {
    number: 2,
    text: "Co-design target workflows with our product team",
  },
  {
    number: 3,
    text: "Access private betas and migration toolkits",
  },
  {
    number: 4,
    text: "Receive priority onboarding and success support",
  },
];

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
   STEP CARD
========================================================= */

function StepCard({ step }) {
  return (
    <div
      className="
        flex
        min-h-[230px]
        flex-col
        items-center
        justify-center
        gap-5
        rounded-[18px]
        border
        border-[#d9d9d9]
        bg-white
        px-6
        py-8
        text-center
        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
      "
    >
      <span
        className="
          flex
          h-[54px]
          w-[54px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#2878ed]
          text-[20px]
          font-semibold
          text-white
          shadow-[0_4px_10px_rgba(37,99,235,0.35)]
        "
      >
        {step.number}
      </span>

      <p
        className="
          text-[20px]
          leading-[1.45]
          text-[#292929]
        "
      >
        {step.text}
      </p>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function InvoiceInventorySuitePage() {
  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          min-h-[520px]
          border-b
          border-[#e8e8e8]
          bg-gradient-to-br
          from-white
          via-[#fff0fa]
          to-white
          px-6
          py-14
          md:px-8
        "
      >
        <div className="mx-auto max-w-[1530px]">

          {/* Breadcrumb */}

          <div className="mb-12 text-[22px] font-medium md:text-[27px]">
            <span className="text-[#292929]">
              Services
            </span>

            <span className="mx-4 text-[#292929]">
              »
            </span>

            <span className="text-[#64158f]">
              Beta · Early Access
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-[1100px]
              text-[30px]
              font-semibold
              leading-[1.35]
              tracking-[-0.8px]
              text-[#292929]
              md:text-[38px]
            "
          >
            The unified invoice & inventory engine for modern SMEs.
          </h1>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-[1150px]
              text-[19px]
              leading-[1.45]
              text-[#4028e9]
              md:text-[23px]
            "
          >
            We're building a modular platform that closes the gap between
            finance, sales, and fulfillment—so your teams stay aligned,
            cash flow stays healthy, and customers stay delighted.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-5">

            <p
              className="
                inline-flex
                min-h-[64px]
                min-w-[280px]
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#555]
                bg-white
                px-7
                py-4
                text-[20px]
                font-semibold
                text-[#292929]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                md:min-h-[72px]
                md:min-w-[400px]
                md:text-[24px]
              "
            >
              Join the Early Access List
            </p>

            <p
              className="
                inline-flex
                min-h-[64px]
                min-w-[280px]
                items-center
                justify-center
                rounded-[22px]
                bg-gradient-to-r
                from-[#6a13db]
                to-[#7717db]
                px-7
                py-4
                text-[20px]
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                md:min-h-[72px]
                md:min-w-[400px]
                md:text-[24px]
              "
            >
              See our Product Builds
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          PURPOSE-BUILT FOR OPERATIONS
      ===================================================== */}

      <section
        className="
          bg-gradient-to-r
          from-[#fff0fa]
          via-[#fce8f8]
          to-white
          px-6
          py-12
          md:px-8
          md:py-14
        "
      >
        <div className="mx-auto max-w-[1480px]">

          <h2
            className="
              max-w-[820px]
              text-[28px]
              font-semibold
              leading-tight
              text-[#292929]
              md:text-[36px]
            "
          >
            Purpose-built for operations that never sleep
          </h2>

          <p
            className="
              mt-5
              max-w-[760px]
              text-[17px]
              leading-[1.45]
              text-[#333]
              md:text-[20px]
            "
          >
            The suite blends lessons from hundreds of custom implementations
            into a ready-to-launch platform you can tailor without starting
            from scratch.
          </p>

        </div>

        {/* ================= FEATURES ================= */}

        <div className="mt-12">

          {/* Row 1 - inward */}

          <div
            className="
              mx-auto
              grid
              max-w-[1145px]
              grid-cols-1
              gap-7
              md:grid-cols-2
              md:gap-[52px]
            "
          >
            {FEATURES.slice(0, 2).map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
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
              grid-cols-1
              gap-7
              md:grid-cols-2
              md:gap-[148px]
            "
          >
            {FEATURES.slice(2, 4).map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
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
              grid-cols-1
              gap-7
              md:grid-cols-2
              md:gap-[52px]
            "
          >
            {FEATURES.slice(4, 6).map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT MAKES IT DIFFERENT
      ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-12
          md:px-8
          md:py-14
        "
      >
        <div className="mx-auto max-w-[1480px]">

          <h2
            className="
              text-[29px]
              font-semibold
              text-[#292929]
              md:text-[35px]
            "
          >
            What makes it different
          </h2>

          <p
            className="
              mt-5
              max-w-[850px]
              text-[17px]
              leading-[1.45]
              text-[#333]
              md:text-[20px]
            "
          >
            Built on top of our proven service accelerators, the suite
            delivers enterprise capabilities with the simplicity of SaaS.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-5
            "
          >
            {DIFFERENTIATORS.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="
                  inline-block
                  w-fit
                  max-w-full
                  rounded-[14px]
                  bg-gradient-to-b
                  from-[#d16fff]
                  via-[#e6a0fa]
                  to-[#fff0ff]
                  px-6
                  py-4
                  text-[15px]
                  font-medium
                  leading-[1.45]
                  text-[#242424]
                  shadow-[0_3px_8px_rgba(160,70,200,0.15)]
                  md:px-7
                  md:text-[16px]
                "
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          BECOME AN EARLY DESIGN PARTNER
      ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-12
          md:px-8
          md:py-16
        "
      >
        <div className="mx-auto max-w-[1480px]">

          <h2
            className="
              text-[29px]
              font-semibold
              text-[#292929]
              md:text-[35px]
            "
          >
            Become an early design partner
          </h2>

          <p
            className="
              mt-5
              max-w-[700px]
              text-[17px]
              leading-[1.45]
              text-[#333]
              md:text-[20px]
            "
          >
            Early access gives you a direct line to our product, design, and
            engineering teams so we can tailor the roadmap to your
            operations.
          </p>

          {/* Step Cards */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-7
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {STEPS.map((step) => (
              <StepCard
                key={step.number}
                step={step}
              />
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <p
              className="
                flex
                min-h-[66px]
                min-w-[260px]
                items-center
                justify-center
                rounded-[10px]
                bg-[#a800ff]
                px-8
                py-4
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
              Apply for Early Access
            </p>

            <p
              className="
                flex
                min-h-[66px]
                min-w-[220px]
                items-center
                justify-center
                rounded-[10px]
                border
                border-[#777]
                bg-white
                px-8
                py-4
                text-[18px]
                font-medium
                text-[#333]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Back to Services
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}