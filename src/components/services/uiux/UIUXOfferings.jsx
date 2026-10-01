"use client";

export default function UIUXOfferings({ service }) {
  const features = service?.features || [];
  const benefits = service?.benefits || [];
  const process = service?.process || [];
  const images = service?.images || [];

  return (
    <div className="overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#f5f0ff] px-6 py-24 md:px-16 md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wider text-purple-700">
            UI/UX Design Services
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-7xl">
            {service.title}
          </h1>

          <h2 className="mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-purple-700 md:text-4xl">
            {service.subtitle}
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            {service.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm">
              User-Centered Design
            </span>

            <span className="rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm">
              Creative Experiences
            </span>

            <span className="rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm">
              Modern Interfaces
            </span>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
              Introduction
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              Understanding the Design Experience
            </h2>
          </div>

          <div className="rounded-[28px] border border-purple-100 bg-[#faf8ff] p-8 md:p-12">
            <p className="text-lg leading-9 text-gray-600">
              {service.overview}
            </p>
          </div>

        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      {/* <section className="bg-[#f8f7fc] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600">
              Our Expertise
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              What We Design
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore our design capabilities and the different ways we create
              engaging, intuitive, and user-friendly digital experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold tracking-tight text-purple-100 transition-colors duration-300 group-hover:text-purple-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-xl text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold leading-snug text-gray-900 md:text-2xl">
                  {feature}
                </h3>

                <div className="mt-8 h-1 w-12 rounded-full bg-purple-300 transition-all duration-300 group-hover:w-24 group-hover:bg-purple-600" />
              </article>
            ))}
          </div>

        </div>
      </section> */}

      {/* ================= BENEFITS SECTION ================= */}

      <section className="bg-gradient-to-br from-[#f3e8ff] via-[#fdf2f8] to-[#eef2ff] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-5xl">
           

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              The Benefits of Our Design Approach
            </h2>

            <p className="mt-5 text-2xl leading-8 ">
              Discover how thoughtful design improves usability, clarity,
              consistency, and the overall experience of your digital products.
            </p>
          </div>

<div className="grid gap-6 max-w-7xl md:grid-cols-3">
  {benefits.map((benefit, index) => (
    <article
      key={index}
      className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl  bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_65%,#0b3045_65%,#082b3d_100%)] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
    >
      {/* Teal Accent */}
      <div className="absolute right-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#ec4899] to-[#0795a8]" />

      {/* Number */}
      <span className="relative text-4xl font-extrabold text-[#13aabd]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Benefit Text */}
      <p className="relative mt-6 max-w-[90%] text-lg font-semibold leading-8 text-gray-800 md:text-xl">
        {benefit}
      </p>

      {/* Bottom Accent */}
      <div className="relative mt-8 flex items-center justify-between">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#13aabd] to-[#087f95]" />

        <span className="text-xs font-bold uppercase tracking-widest text-white/80">
          Design Benefits
        </span>
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

{/* ================= UI/UX DESIGN APPLICATIONS ================= */}

<section className="bg-gradient-to-br from-[#f3e8ff] via-[#fdf2f8] to-[#eef2ff] px-6 py-20 md:px-16 md:py-28">
  <div className="mx-auto max-w-7xl">

    {/* Main Background */}
   {/* Main Background */}
<div className="relative overflow-hidden bg-[#2e1a5c] px-6 py-16 md:px-12 md:py-24">

  {/* Gradient Circles (exactly like the reference) */}
  {/* Big pink circle - top center */}
  <div className="pointer-events-none absolute left-1/2 top-[2%] h-72 w-72 -translate-x-[10%] rounded-full bg-gradient-to-r from-[#f472b6] via-[#e265ae] to-[#c236a8] md:h-80 md:w-80" />

  {/* Purple -> cyan circle - left */}
  <div className="pointer-events-none absolute -left-10 top-[30%] h-64 w-64 rounded-full bg-gradient-to-b from-[#e857f5] via-[#a98cf5] to-[#22d3ee] md:left-[3%]" />

  {/* Orange circle - right */}
  <div className="pointer-events-none absolute -right-6 bottom-[8%] h-44 w-44 rounded-full bg-gradient-to-l from-[#ff5f6d] to-[#ff9a76] md:right-[3%]" />

  {/* Section Heading */}
  <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">
    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
      Our Applications
    </span>

    <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
      UI/UX Design Applications
    </h2>

    <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">
      Discover how our UI/UX design solutions create intuitive digital
      experiences across websites, mobile applications, dashboards, and
      enterprise platforms. We focus on improving usability, simplifying
      user journeys, and creating interfaces that align with your business goals.
    </p>
  </div>

  {/* Application Cards */}
  <div className="relative z-10 mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Website Design",
        description:
          "Create visually appealing, responsive websites with intuitive navigation and engaging user experiences.",
      },
      {
        title: "Mobile Application Design",
        description:
          "Design user-friendly mobile interfaces with smooth navigation and consistent experiences across devices.",
      },
      {
        title: "Dashboard & SaaS Design",
        description:
          "Simplify complex data and workflows through structured dashboards and easy-to-use interfaces.",
      },
      {
        title: "E-commerce Design",
        description:
          "Improve product discovery, shopping experiences, and checkout flows with user-focused designs.",
      },
      {
        title: "Wireframe & Prototype Design",
        description:
          "Visualize ideas, test user journeys, and validate concepts before development begins.",
      },
      {
        title: "Enterprise Application Design",
        description:
          "Create consistent and scalable interfaces that support business operations and productivity.",
      },
    ].map((item, index) => (
      <article
        key={index}
        className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/30 px-6 pb-6 pt-6 text-center shadow-lg backdrop-blur-[10px] transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Round avatar / icon (replace with <img> if you want a photo) */}
       

        {/* Title */}
        <h3 className="mt-4 font-['Bebas_Neue'] text-2xl uppercase tracking-wide text-white">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-serif text-lg leading-5 text-white">
          {item.description}
        </p>

        
      </article>
    ))}
  </div>
</div>
  </div>
</section>

    </div>
  );
}