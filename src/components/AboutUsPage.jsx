"use client";

import AboutUs from "./AboutUs";

export default function AboutUsPage() {
  return (
    <main>

      {/* ================= ABOUT HERO ================= */}
      <section className="bg-gradient-to-br from-white via-fuchsia-50 to-pink-50 px-6 pb-16 pt-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <div className="mb-20 flex items-center gap-3 text-lg text-gray-800">
            <span>Home</span>
            <span>»</span>
            <span className="text-purple-800">About</span>
          </div>

          <h1 className="mb-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            About Sowsi Technologies
          </h1>

          <p className="max-w-4xl text-xl leading-relaxed text-indigo-700 sm:text-2xl">
            We're a team of passionate technologists dedicated to creating
            innovative digital solutions.
          </p>

          {/* Statistics */}
          <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

              <div className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-center shadow-md">
                <p className="text-sm font-medium text-gray-800">
                  Years Building Products
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-blue-700">
                  12+
                </h3>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-center shadow-md">
                <p className="text-sm font-medium text-gray-800">
                  Platforms Delivered
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-blue-700">
                  160+
                </h3>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-center shadow-md">
                <p className="text-sm font-medium text-gray-800">
                  Automation Hours Saved
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-blue-700">
                  24000+
                </h3>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-center shadow-md">
                <p className="text-sm font-medium text-gray-800">
                  Client Satisfaction
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-blue-700">
                  98+
                </h3>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= EXISTING ABOUT US ================= */}
      <AboutUs />


      {/* ================= MISSION & VISION ================= */}
      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-purple-800 sm:text-5xl">
              Our Mission & Vision
            </h2>

            <p className="mt-4 text-xl font-medium text-gray-700">
              We're driven by a clear mission and guided by a focused vision.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

    
{/* ================= MISSION CARD ================= */}
<div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-pink-50 shadow-md">
  <div className="relative h-52 overflow-visible">
    <img
      src="/assets/images/mission.png"
      alt="Our Mission"
      className="
        absolute
        -right-16
        top-0
        z-20
        h-32
        w-60
        rounded-2xl
        object-cover
        transition-all
        duration-700
        ease-in-out

        group-hover:h-72
        group-hover:w-80
        group-hover:rounded-bl-3xl
        group-hover:rounded-tr-3xl
        group-hover:rounded-tl-none
        group-hover:rounded-br-none
      "
    />
  
  </div>

  <div className="relative z-30 mx-3 -mt-6 rounded-2xl border border-white bg-white/90 p-7 shadow-sm backdrop-blur-md">
    <h3 className="mb-5 text-2xl font-bold text-blue-700">
      Our Mission
    </h3>
    <p className="text-lg leading-relaxed text-gray-800">
      To empower businesses with innovative technology solutions
      that solve complex problems, improve efficiency, and drive
      growth. We strive to deliver exceptional value through our
      expertise, creativity, and commitment to excellence.
    </p>
  </div>
</div>

{/* ================= VISION CARD ================= */}
<div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-pink-50 shadow-md">
  <div className="relative h-52 overflow-visible">
    <img
      src="/assets/images/vision.png"
      alt="Our Vision"
      className="
        absolute
        right-0
        top-0
        z-20
        h-32
        w-60
        rounded-2xl
        object-cover
        transition-all
        duration-700
        ease-in-out

        group-hover:h-55
        group-hover:w-80
        group-hover:rounded-bl-3xl
        group-hover:rounded-tr-3xl
        group-hover:rounded-tl-none
        group-hover:rounded-br-none
      "
    />
  </div>

  <div className="relative z-30 mx-3 -mt-6 rounded-2xl border border-white bg-white/90 p-7 shadow-sm backdrop-blur-md">
    <h3 className="mb-5 text-2xl font-bold text-blue-700">
      Our Vision
    </h3>
    <p className="text-lg leading-relaxed text-gray-800">
      To empower businesses with innovative technology solutions
      that solve complex problems, improve efficiency, and drive
      growth. We strive to deliver exceptional value through our
      expertise, creativity, and commitment to excellence.
    </p>
  </div>
</div>

          </div>
        </div>
      </section>


      {/* ================= OUR VALUES ================= */}
      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-purple-800 sm:text-5xl">
              Our Values
            </h2>

            <p className="mt-4 text-xl font-medium text-gray-700">
              The core principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Innovation */}
            <div className="rounded-xl bg-teal-400 p-7 shadow-md">
              <h3 className="mb-5 text-3xl font-bold text-blue-900">
                Innovation
              </h3>
              <p className="text-lg leading-relaxed text-black">
                We continuously explore new technologies and approaches to
                deliver cutting-edge solutions for our clients.
              </p>
            </div>

            {/* Quality */}
            <div className="rounded-xl bg-teal-400 p-7 shadow-md">
              <h3 className="mb-5 text-3xl font-bold text-blue-900">
                Quality
              </h3>
              <p className="text-lg leading-relaxed text-black">
                We are committed to delivering high-quality solutions that meet
                and exceed our clients' expectations.
              </p>
            </div>

            {/* Collaboration */}
            <div className="rounded-xl bg-teal-400 p-7 shadow-md">
              <h3 className="mb-5 text-3xl font-bold text-blue-900">
                Collaboration
              </h3>
              <p className="text-lg leading-relaxed text-black">
                We believe in working closely with our clients, fostering open
                communication and partnership.
              </p>
            </div>

            {/* Integrity */}
            <div className="rounded-xl bg-teal-400 p-7 shadow-md">
              <h3 className="mb-5 text-3xl font-bold text-blue-900">
                Integrity
              </h3>
              <p className="text-lg leading-relaxed text-black">
                We conduct our business with honesty, transparency, and ethical
                practices at all times.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}