"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    name: "Invoice & Inventory Suite",
    badge: "Beta",
    description:
      "A modular finance and operations platform that synchronizes invoicing, stock, procurement, and analytics for fast-scaling SMEs.",
    cta: "Join Early Access",
    // href: "/contact",
  },
  {
    name: "Sowsi Meet",
    badge: "Coming soon",
    description:
      "An AI-assisted meeting workspace that automatically writes notes, cuts busywork, and secures recordings before the team forgets a thing.",
    cta: "Preview Roadmap",
    // href: "/contact",
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-fuchsia-50 to-white pl-16 pr-6 pt-10 pb-14 sm:pl-24 sm:pr-10 lg:pl-32 lg:pr-16">
        <div className="w-full">
          <nav
            aria-label="Breadcrumb"
            className="mb-15 flex items-center gap-2 text-lg text-gray-600"
          >
            <Link href="/" className="hover:text-violet-700">
              Home
            </Link>
            <span>›</span>
            <span aria-current="page" className="font-medium text-violet-700">
              Products
            </span>
          </nav>

          <h1 className="mb-2 text-6xl font-bold leading-tight text-gray-900 sm:text-[45px]">
            Products in the Sowsi pipeline
          </h1>
          <p className="w-[68%] text-[28px] leading-relaxed text-violet-700 mb-15">
            We are channeling years of delivery experience into
            ready-to-launch platforms.<br/> Partner with us early to shape the
            roadmap and unlock early adopter
            <br /> advantages.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="pl-16 pr-6 pb-20 sm:pl-24 sm:pr-10 lg:pl-32 lg:pr-16">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="flex min-h-[320px] flex-col rounded-2xl border border-gray-200 bg-white p-10 shadow-sm mb-10"
            >
              <div className="mb-8 flex items-start justify-between gap-3">
                <h2 className="text-3xl font-bold text-[#1e2a5e]">
                  {product.name}
                </h2>
                <span className="whitespace-nowrap rounded-md bg-blue-600 px-2.5 py-1 text-sm font-semibold text-white">
                  {product.badge}
                </span>
              </div>

              <p className="mb-8 text-[19px] leading-relaxed text-gray-600">
                {product.description}
              </p>

              <p
                className="inline-block w-fit rounded-lg bg-purple-800 px-8 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-purple-900"
              >
                {product.cta}
              </p>
            </article>
          ))}
        </div>
      </section>
      {/* CTA banner */}
<section className="bg-gradient-to-r from-violet-600 to-fuchsia-800 px-6 py-24 text-center mb-25">
  <div className="mx-auto max-w-2xl">
    <h2 className="mb-4 text-3xl font-bold text-white">
      Have a product idea we should explore next?
    </h2>
    <p className="mb-7 -ml-40 whitespace-nowrap text-2xl leading-relaxed text-violet-100">
      Share the pain points holding your teams back. We love
      co-innovating with customers and industry leaders.
    </p>

    <div className="flex flex-wrap items-center justify-center gap-3">
      <p
        
        className="inline-flex items-center gap-1.5 rounded-lg bg-[#631D86] px-5 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#4f1669]"
      >
        Start a Conversation
      </p>
      <p
       
        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-4 text-[15px] font-semibold text-violet-700 transition-colors hover:bg-violet-50"
      >
        See How We Built
        <ArrowRight size={16} />
      </p>
    </div>
  </div>
</section>
    </main>
  );
}