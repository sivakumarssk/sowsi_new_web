
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export const digitalMarketingSlugs = [
  "search-engine-optimization",
  "social-media-marketing",
  "social-media-optimization",
  "search-engine-marketing",
  "pay-per-click",
];

export default function DigitalMarketingPage({ slug }) {

  /* =========================================================
     SEARCH ENGINE OPTIMIZATION
  ========================================================= */

  if (slug === "search-engine-optimization") {
    return (
        <>
      <Navbar />
      <div className="overflow-hidden bg-white text-gray-800">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#f5f0ff] px-6 py-24 md:px-16 md:py-32">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="inline-flex rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wider text-purple-700">
                Digital Marketing
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-950 md:text-7xl">
                Search Engine Optimization
              </h1>

              <h2 className="mt-6 text-2xl font-semibold leading-relaxed text-purple-700 md:text-4xl">
                Improve visibility. Reach the right audience. Grow organically.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                Improve your website visibility, attract relevant visitors,
                and build sustainable organic growth with our strategic
                Search Engine Optimization services.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <h2
                  className="rounded-full bg-violet-600 px-8 py-4 font-semibold text-white hover:bg-violet-700"
                >
                  Let's Talk About Your Project →
                </h2>

                <h2
                  className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:border-violet-400 hover:text-violet-700"
                >
                  Explore SEO Services
                </h2>
              </div>
            </div>

            <div>
              <img
                src="/assets/images/digital-marketing/seo-hero.png"
                alt="Search Engine Optimization"
                className="h-[350px] w-full rounded-[30px] object-cover shadow-2xl md:h-[470px]"
              />
            </div>

          </div>
          
        </section>

        {/* ABOUT */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

            <img
              src="/assets/images/digital-marketing/seo-about.png"
              alt="SEO strategy"
              className="h-[350px] w-full rounded-[28px] object-cover shadow-xl md:h-[450px]"
            />

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
                About SEO
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-950 md:text-5xl">
                Build a Strong Organic Search Presence
              </h2>

              <p className="mt-7 text-lg leading-9 text-gray-600">
                We create practical SEO strategies based on your business,
                target audience, competitors, and search behavior. Our
                approach combines technical SEO, keyword research,
                on-page optimization, content strategy, and authority
                building.
              </p>
            </div>

          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-gradient-to-br from-[#f3e8ff] via-[#fdf2f8] to-[#eef2ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
              Why SEO
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-950 md:text-5xl">
              Why Search Engine Optimization Matters
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <span className="text-4xl font-black text-violet-500">01</span>
                <h3 className="mt-6 text-2xl font-bold">Better Visibility</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Improve your presence for relevant search queries.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <span className="text-4xl font-black text-violet-500">02</span>
                <h3 className="mt-6 text-2xl font-bold">Quality Traffic</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Attract visitors actively searching for your services.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <span className="text-4xl font-black text-violet-500">03</span>
                <h3 className="mt-6 text-2xl font-bold">Long-Term Growth</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Build sustainable organic search visibility.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <span className="text-4xl font-black text-violet-500">04</span>
                <h3 className="mt-6 text-2xl font-bold">Better Experience</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Improve website structure, usability, and performance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="seo-services" className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
              Our Expertise
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-950 md:text-5xl">
              Our SEO Services
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <article className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/seo-1.png"
                  alt="Technical SEO"
                  className="h-60 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold">Technical SEO</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    Improve website structure, speed, indexing, crawlability,
                    and mobile experience.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/seo-2.png"
                  alt="On Page SEO"
                  className="h-60 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold">On-Page SEO</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    Optimize content, headings, metadata, keywords,
                    and internal linking.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/seo-3.png"
                  alt="Off Page SEO"
                  className="h-60 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold">Off-Page SEO</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    Strengthen online authority through relevant external
                    signals and digital presence.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
                How We Work
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Our SEO Process
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-8">
                <b className="text-4xl text-violet-500">01</b>
                <h3 className="mt-6 text-xl font-bold">SEO Audit</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Review your website, technical setup, content, and search
                  presence.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8">
                <b className="text-4xl text-violet-500">02</b>
                <h3 className="mt-6 text-xl font-bold">Strategy</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Identify keywords, content opportunities, and priorities.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8">
                <b className="text-4xl text-violet-500">03</b>
                <h3 className="mt-6 text-xl font-bold">Optimization</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  Implement technical, on-page, content, and off-page
                  improvements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#a855f7] px-8 py-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Improve Your Search Visibility?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
              Let's create an SEO strategy aligned with your business goals.
            </p>

            <h2
             
              className="mt-9 inline-flex rounded-full bg-white px-9 py-4 font-bold text-violet-700"
            >
              Contact Our Team →
            </h2>

          </div>
        </section>

      </div>
      </>
    );
  }


  /* =========================================================
     SOCIAL MEDIA MARKETING
  ========================================================= */

  if (slug === "social-media-marketing") {
    
    return (
         <>
    <Navbar />

      <div className="overflow-hidden bg-white text-gray-800">

        {/* HERO */}
        <section className="bg-[#fff0f8] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-semibold uppercase text-pink-600">
                Digital Marketing
              </span>

              <h1 className="mt-8 text-5xl font-bold text-gray-950 md:text-7xl">
                Social Media Marketing
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-pink-600 md:text-4xl">
                Connect With Your Audience. Build Your Brand.
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Build meaningful connections with your audience through
                creative content, strategic campaigns, community engagement,
                and consistent social media communication.
              </p>

              <h2
                className="mt-9 inline-flex rounded-full bg-pink-600 px-8 py-4 font-semibold text-white hover:bg-pink-700"
              >
                Start Your Campaign →
              </h2>
            </div>

            <img
              src="/assets/images/digital-marketing/smm-hero.png"
              alt="Social Media Marketing"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-2xl md:h-[470px]"
            />

          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

            <img
              src="/assets/images/digital-marketing/smm-about.png"
              alt="Social media marketing"
              className="h-[400px] w-full rounded-[30px] object-cover shadow-xl"
            />

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-pink-600">
                About Social Media Marketing
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Turn Social Platforms Into Business Opportunities
              </h2>

              <p className="mt-7 text-lg leading-9 text-gray-600">
                We create social media strategies that combine content
                planning, creative campaigns, audience targeting, engagement,
                and performance analysis.
              </p>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#fff8fc] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Our Social Media Services
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/smm-1.png"
                  alt="Social media strategy"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Social Media Strategy
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Create a structured social strategy based on your
                    audience, industry, and business objectives.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/smm-2.png"
                  alt="Social media content"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Content Marketing
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Create engaging posts, visuals, captions, campaigns,
                    and content calendars.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/smm-3.png"
                  alt="Social campaigns"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Social Campaigns
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Plan targeted campaigns designed to reach relevant
                    audiences and support business goals.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Benefits of Social Media Marketing
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border p-8">
                <b className="text-4xl text-pink-500">01</b>
                <h3 className="mt-6 text-xl font-bold">Brand Awareness</h3>
                <p className="mt-4 text-gray-600">
                  Build consistent visibility and recognition.
                </p>
              </div>

              <div className="rounded-3xl border p-8">
                <b className="text-4xl text-pink-500">02</b>
                <h3 className="mt-6 text-xl font-bold">Engagement</h3>
                <p className="mt-4 text-gray-600">
                  Create meaningful interactions with customers.
                </p>
              </div>

              <div className="rounded-3xl border p-8">
                <b className="text-4xl text-pink-500">03</b>
                <h3 className="mt-6 text-xl font-bold">Targeted Reach</h3>
                <p className="mt-4 text-gray-600">
                  Reach specific audiences through strategic campaigns.
                </p>
              </div>

              <div className="rounded-3xl border p-8">
                <b className="text-4xl text-pink-500">04</b>
                <h3 className="mt-6 text-xl font-bold">Insights</h3>
                <p className="mt-4 text-gray-600">
                  Use performance data to improve future campaigns.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-5xl">
              Grow Your Brand on Social Media
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-pink-100">
              Let's build a social media strategy that connects your brand
              with the right audience.
            </p>

            <h2
         
              className="mt-9 inline-flex rounded-full bg-white px-9 py-4 font-bold text-pink-600"
            >
              Contact Our Team →
            </h2>

          </div>
        </section>

      </div>
      </>
    );
  }


  /* =========================================================
     SOCIAL MEDIA OPTIMIZATION
  ========================================================= */

  if (slug === "social-media-optimization") {
    return (
         <>
    <Navbar />

      <div className="overflow-hidden bg-white text-gray-800">

        {/* HERO */}
        <section className="bg-[#f3f0ff] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold uppercase text-purple-700">
                Digital Marketing
              </span>

              <h1 className="mt-8 text-5xl font-bold md:text-7xl">
                Social Media Optimization
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-purple-700 md:text-4xl">
                Optimize Your Social Presence for Better Visibility
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Improve your social profiles, content structure, branding,
                discoverability, and engagement with a focused Social Media
                Optimization strategy.
              </p>

              <h2
                href="/contact"
                className="mt-9 inline-flex rounded-full bg-violet-600 px-8 py-4 font-semibold text-white"
              >
                Optimize My Social Presence →
              </h2>
            </div>

            <img
              src="/assets/images/digital-marketing/smo-hero.png"
              alt="Social Media Optimization"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-2xl md:h-[470px]"
            />

          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

            <div>
              <img
                src="/assets/images/digital-marketing/smo-about.png"
                alt="Social media optimization"
                className="h-[420px] w-full rounded-[30px] object-cover shadow-xl"
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
                About SMO
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Create a Stronger Social Media Presence
              </h2>

              <p className="mt-7 text-lg leading-9 text-gray-600">
                We optimize your social profiles and content strategy so
                customers can understand your brand quickly and interact
                with a consistent digital presence.
              </p>
            </div>

          </div>
        </section>

        {/* OPTIMIZATION AREAS */}
        <section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Our SMO Services
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/smo-1.png"
                  alt="Profile optimization"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Profile Optimization
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Improve profile information, descriptions, links,
                    images, and business details.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/smo-2.png"
                  alt="Content optimization"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Content Optimization
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Improve captions, hashtags, content formats, and
                    publishing strategy.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/smo-3.png"
                  alt="Social branding"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Social Branding
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Maintain a recognizable visual identity and consistent
                    communication across social platforms.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Benefits of Social Media Optimization
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl bg-purple-50 p-8">
                <b className="text-4xl text-purple-600">01</b>
                <h3 className="mt-6 text-xl font-bold">
                  Profile Clarity
                </h3>
                <p className="mt-4 text-gray-600">
                  Make your business information clear and easy to understand.
                </p>
              </div>

              <div className="rounded-3xl bg-purple-50 p-8">
                <b className="text-4xl text-purple-600">02</b>
                <h3 className="mt-6 text-xl font-bold">
                  Discoverability
                </h3>
                <p className="mt-4 text-gray-600">
                  Improve the way audiences discover your social profiles.
                </p>
              </div>

              <div className="rounded-3xl bg-purple-50 p-8">
                <b className="text-4xl text-purple-600">03</b>
                <h3 className="mt-6 text-xl font-bold">
                  Consistency
                </h3>
                <p className="mt-4 text-gray-600">
                  Maintain a consistent brand experience across platforms.
                </p>
              </div>

              <div className="rounded-3xl bg-purple-50 p-8">
                <b className="text-4xl text-purple-600">04</b>
                <h3 className="mt-6 text-xl font-bold">
                  Engagement
                </h3>
                <p className="mt-4 text-gray-600">
                  Create content that encourages meaningful interactions.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-5xl">
              Improve Your Social Presence
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
              Let's optimize your profiles and create a stronger social
              media experience.
            </p>

            <h2
              className="mt-9 inline-flex rounded-full bg-white px-9 py-4 font-bold text-violet-700"
            >
              Contact Our Team →
            </h2>

          </div>
        </section>

      </div>
      </>
    );
  }


  /* =========================================================
     SEARCH ENGINE MARKETING
  ========================================================= */

  if (slug === "search-engine-marketing") {
    return (
         <>
    <Navbar />

      <div className="overflow-hidden bg-white text-gray-800">

        {/* HERO */}
        <section className="bg-[#eef6ff] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold uppercase text-blue-700">
                Digital Marketing
              </span>

              <h1 className="mt-8 text-5xl font-bold md:text-7xl">
                Search Engine Marketing
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-blue-700 md:text-4xl">
                Reach Customers When They Are Actively Searching
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Connect your business with high-intent audiences through
                targeted search campaigns, relevant keywords, compelling
                advertisements, and optimized landing experiences.
              </p>

              <h2
                className="mt-9 inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
              >
                Start Search Marketing →
              </h2>
            </div>

            <img
              src="/assets/images/digital-marketing/sem-hero.png"
              alt="Search Engine Marketing"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-2xl md:h-[470px]"
            />

          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

            <img
              src="/assets/images/digital-marketing/sem-about.png"
              alt="Search Engine Marketing"
              className="h-[420px] w-full rounded-[30px] object-cover shadow-xl"
            />

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                About SEM
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Connect With Customers at the Right Moment
              </h2>

              <p className="mt-7 text-lg leading-9 text-gray-600">
                We plan and optimize search marketing campaigns using
                relevant keywords, audience targeting, compelling ad
                messaging, landing pages, and continuous performance
                analysis.
              </p>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#f7fbff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Our SEM Services
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/sem-1.png"
                  alt="Search campaigns"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Search Campaigns
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Build targeted campaigns around relevant keywords and
                    customer search intent.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/sem-2.png"
                  alt="Landing page strategy"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Landing Page Strategy
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Align landing pages with advertisements to create a
                    consistent customer journey.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/sem-3.png"
                  alt="Campaign optimization"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Campaign Optimization
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Monitor performance and improve keywords, advertisements,
                    targeting, and budgets.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Benefits of Search Engine Marketing
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border border-blue-100 p-8">
                <b className="text-4xl text-blue-600">01</b>
                <h3 className="mt-6 text-xl font-bold">High Intent</h3>
                <p className="mt-4 text-gray-600">
                  Reach users actively searching for relevant solutions.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 p-8">
                <b className="text-4xl text-blue-600">02</b>
                <h3 className="mt-6 text-xl font-bold">Targeted Reach</h3>
                <p className="mt-4 text-gray-600">
                  Target campaigns around relevant search behavior.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 p-8">
                <b className="text-4xl text-blue-600">03</b>
                <h3 className="mt-6 text-xl font-bold">Fast Visibility</h3>
                <p className="mt-4 text-gray-600">
                  Paid search can provide immediate advertising visibility.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 p-8">
                <b className="text-4xl text-blue-600">04</b>
                <h3 className="mt-6 text-xl font-bold">Measurable</h3>
                <p className="mt-4 text-gray-600">
                  Monitor campaign activity through measurable metrics.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-5xl">
              Reach More Searchers
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Let's create targeted search campaigns for your business.
            </p>

            <h2
              className="mt-9 inline-flex rounded-full bg-white px-9 py-4 font-bold text-blue-700"
            >
              Contact Our Team →
            </h2>

          </div>
        </section>

      </div>
      </>
    );
  }


  /* =========================================================
     PAY PER CLICK
  ========================================================= */

  if (slug === "pay-per-click") {
    return (
         <>
    <Navbar />

      <div className="overflow-hidden bg-white text-gray-800">

        {/* HERO */}
        <section className="bg-[#f4f1ff] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold uppercase text-violet-700">
                Digital Marketing
              </span>

              <h1 className="mt-8 text-5xl font-bold md:text-7xl">
                Pay Per Click
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-violet-700 md:text-4xl">
                Target the Right Audience With Measurable Advertising
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Create, manage, and optimize paid advertising campaigns
                designed to reach relevant audiences and support measurable
                business goals.
              </p>

              <h2
                className="mt-9 inline-flex rounded-full bg-violet-600 px-8 py-4 font-semibold text-white hover:bg-violet-700"
              >
                Start a PPC Campaign →
              </h2>
            </div>

            <img
              src="/assets/images/digital-marketing/ppc-hero.png"
              alt="Pay Per Click"
              className="h-[350px] w-full rounded-[30px] object-cover shadow-2xl md:h-[470px]"
            />

          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

            <img
              src="/assets/images/digital-marketing/ppc-about.png"
              alt="PPC advertising"
              className="h-[420px] w-full rounded-[30px] object-cover shadow-xl"
            />

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                About PPC
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Make Every Advertising Campaign More Focused
              </h2>

              <p className="mt-7 text-lg leading-9 text-gray-600">
                We manage PPC campaigns with a focus on audience targeting,
                keyword selection, compelling advertisements, landing page
                alignment, budget management, and performance optimization.
              </p>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Our PPC Services
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/ppc-1.png"
                  alt="PPC campaign management"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Campaign Management
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Plan and manage paid campaigns based on your target
                    audience and business objectives.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/ppc-2.png"
                  alt="PPC ad creation"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Ad Creation
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Develop relevant advertising messages designed around
                    customer intent.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src="/assets/images/digital-marketing/ppc-3.png"
                  alt="PPC optimization"
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    Performance Optimization
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Use campaign data to improve targeting, keywords,
                    advertisements, and budgets.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-4xl font-bold md:text-5xl">
              Benefits of PPC Advertising
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl bg-violet-50 p-8">
                <b className="text-4xl text-violet-600">01</b>
                <h3 className="mt-6 text-xl font-bold">
                  Targeted Advertising
                </h3>
                <p className="mt-4 text-gray-600">
                  Reach specific audiences using campaign targeting.
                </p>
              </div>

              <div className="rounded-3xl bg-violet-50 p-8">
                <b className="text-4xl text-violet-600">02</b>
                <h3 className="mt-6 text-xl font-bold">
                  Budget Control
                </h3>
                <p className="mt-4 text-gray-600">
                  Manage campaign budgets according to your priorities.
                </p>
              </div>

              <div className="rounded-3xl bg-violet-50 p-8">
                <b className="text-4xl text-violet-600">03</b>
                <h3 className="mt-6 text-xl font-bold">
                  Measurable
                </h3>
                <p className="mt-4 text-gray-600">
                  Track clicks, impressions, conversions, and campaign data.
                </p>
              </div>

              <div className="rounded-3xl bg-violet-50 p-8">
                <b className="text-4xl text-violet-600">04</b>
                <h3 className="mt-6 text-xl font-bold">
                  Flexible Optimization
                </h3>
                <p className="mt-4 text-gray-600">
                  Continuously test and improve campaign performance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#faf8ff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                Our Process
              </span>

              <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                How We Manage PPC Campaigns
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-8">
                <b className="text-4xl text-violet-500">01</b>
                <h3 className="mt-6 text-xl font-bold">
                  Goal Definition
                </h3>
                <p className="mt-4 text-gray-600">
                  Define campaign goals, audience, and important metrics.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8">
                <b className="text-4xl text-violet-500">02</b>
                <h3 className="mt-6 text-xl font-bold">
                  Campaign Setup
                </h3>
                <p className="mt-4 text-gray-600">
                  Build campaign structures, targeting, ads, and tracking.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8">
                <b className="text-4xl text-violet-500">03</b>
                <h3 className="mt-6 text-xl font-bold">
                  Optimization
                </h3>
                <p className="mt-4 text-gray-600">
                  Analyze performance and continuously improve campaigns.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-violet-700 to-fuchsia-600 px-8 py-16 text-center text-white">

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Launch Your PPC Campaign?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
              Let's create a focused paid advertising strategy for your
              business.
            </p>

            <h2
              className="mt-9 inline-flex rounded-full bg-white px-9 py-4 font-bold text-violet-700"
            >
              Contact Our Team →
            </h2>

          </div>
        </section>

      </div>
      </>
    );
  }

  return null;
}

