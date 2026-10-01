
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Users,
  Target,
  ShieldCheck,
  Workflow,
  TrendingUp,
  Headphones,
  Code2,
  Bug,
  Cloud,
  UsersRound,
  CheckCircle2,
  ArrowRight,Wrench,GitBranch,MessageSquare,ArrowUpRight,CalendarClock,
  ClipboardCheck,Bot,Gauge,Smartphone,Lock,Layers,ArrowDownRight,
  Search, ClipboardList, UserCheck, Rocket, Clock, RefreshCw,
  Zap, Wallet, ChevronDown,
} from "lucide-react";

export default function ITResourceExpansionPage({ slug }) {
  // =========================================================
  // 1. TAILORED SOLUTIONS
  // =========================================================
// if (slug === "tailored-solutions") {
//   const stats = [
//     { value: "100+", label: "Projects Supported" },
//     { value: "50+", label: "Skilled Professionals" },
//     { value: "48 hrs", label: "Average Profile Turnaround" },
//     { value: "95%", label: "Client Satisfaction" },
//   ];

//   const resourceTypes = [
//     { icon: Code2, title: "Developers", text: "Frontend, backend and full-stack developers.", image: "developers.png" },
//     { icon: Bug, title: "QA Engineers", text: "Manual, automation and performance testing specialists.", image: "qa-engineers.png" },
//     { icon: Cloud, title: "DevOps Engineers", text: "Cloud, CI/CD, infrastructure and deployment specialists.", image: "devops.png" },
//     { icon: UsersRound, title: "Dedicated Teams", text: "Complete technology teams aligned with your project.", image: "dedicated-teams.png" },
//   ];

//   const steps = [
//     { icon: Search, title: "Understand Requirements", text: "We learn your project scope, tech stack, timeline and budget." },
//     { icon: ClipboardList, title: "Shortlist Profiles", text: "We match and share profiles that fit your skill and experience needs." },
//     { icon: UserCheck, title: "Interview & Select", text: "You interview the candidates and choose the people you want." },
//     { icon: Rocket, title: "Onboard & Deliver", text: "Your resources get started quickly, with ongoing support from us." },
//   ];

//   const models = [
//     { icon: Clock, title: "Hourly / Short-Term", text: "Ideal for quick tasks, audits, or filling a temporary skill gap." },
//     { icon: UserCheck, title: "Dedicated Resource", text: "Full-time professionals who work as an extension of your team." },
//     { icon: UsersRound, title: "Dedicated Team", text: "A complete team of developers, QA and DevOps for end-to-end delivery." },
//   ];

//   const techStack = [
//     "React", "Next.js", "Node.js", "Java", "Python", ".NET",
//     "Angular", "Vue.js", "AWS", "Azure", "Docker", "Kubernetes",
//     "Selenium", "Cypress", "Jenkins", "Terraform",
//   ];

//   const benefits = [
//     { icon: Zap, title: "Faster Hiring", text: "Skip long recruitment cycles and start building sooner." },
//     { icon: Wallet, title: "Cost Effective", text: "Pay only for the resources and duration you need." },
//     { icon: ShieldCheck, title: "Pre-Vetted Talent", text: "Every professional is screened for skills and communication." },
//     { icon: Target, title: "Scalable Teams", text: "Scale up or down as your project demands change." },
//   ];

//   const faqs = [
//     { q: "How quickly can resources join my project?", a: "In most cases we share suitable profiles within 48 hours, and onboarding can start within a few days of selection." },
//     { q: "Can I scale the team up or down later?", a: "Yes. Our models are flexible, so you can add or release resources as your project needs change." },
//     { q: "Do I get to interview the professionals?", a: "Absolutely. You review profiles and interview candidates before anyone is finalized." },
//     { q: "Do you support both short and long-term engagements?", a: "Yes. We offer everything from short-term support to long-term dedicated teams." },
//   ];

//   return (
//     <>
//       <Navbar />
//       <main className="bg-white text-gray-900">

//         {/* HERO */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-white to-pink-100 pb-20 pt-32">
//           <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
//           <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />

//           <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="grid items-center gap-12 lg:grid-cols-2">
//               <div>
//                 <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
//                   <Target size={18} />
//                   IT Resource Expansion
//                 </span>

//                 <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
//                   Tailored Solutions
//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
//                   Get the right technology professionals and resources based
//                   on your project requirements, technology stack and business
//                   goals. From a single specialist to a complete team, we
//                   build around what you need.
//                 </p>

//                 <Link
//                   href="/contact"
//                   className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 font-semibold text-white transition hover:bg-purple-700"
//                 >
//                   Talk to Our Experts
//                   <ArrowRight size={18} />
//                 </Link>
//               </div>

//               {/* Fixed ratio box keeps the image sharp and consistent */}
//               <div className="aspect-[4/3] w-full overflow-hidden rounded-[30px] shadow-xl">
//                 <img
//                   src="/assets/images/it-resource-expansion/resource-hero.png"
//                   alt="IT Resource Expansion"
//                   loading="eager"
//                   decoding="async"
//                   className="h-full w-full object-cover object-center"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="border-y border-purple-100 bg-white py-12">
//           <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4 lg:px-8">
//             {stats.map((s) => (
//               <div key={s.label}>
//                 <p className="text-4xl font-bold text-purple-600">{s.value}</p>
//                 <p className="mt-2 text-sm font-medium text-gray-600">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="bg-white py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="grid items-center gap-12 lg:grid-cols-2">
//               <div className="aspect-[4/3] w-full overflow-hidden rounded-[30px] shadow-lg">
//                 <img
//                   src="/assets/images/it-resource-expansion/tailored-solutions.png"
//                   alt="Tailored IT Solutions"
//                   loading="lazy"
//                   decoding="async"
//                   className="h-full w-full object-cover object-center"
//                 />
//               </div>

//               <div>
//                 <p className="font-semibold text-purple-600">TAILORED SOLUTIONS</p>
//                 <h2 className="mt-3 text-4xl font-bold">
//                   Resources Built Around Your Requirements
//                 </h2>
//                 <p className="mt-6 text-lg leading-8 text-gray-600">
//                   Every project has different technology requirements, team
//                   structures and delivery timelines. Our tailored resource
//                   solutions help you access professionals according to the
//                   skills and experience your project requires, without the
//                   overhead of lengthy hiring cycles.
//                 </p>

//                 <div className="mt-8 space-y-4">
//                   {[
//                     "Project-specific technical expertise",
//                     "Flexible resource models",
//                     "Technology-stack aligned professionals",
//                     "Short-term and long-term support",
//                     "Quick onboarding and smooth collaboration",
//                   ].map((item) => (
//                     <div key={item} className="flex items-center gap-3">
//                       <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600" />
//                       <span className="font-medium">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* RESOURCE TYPES */}
//         <section className="bg-purple-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="text-center">
//               <p className="font-semibold text-purple-600">OUR EXPERTISE</p>
//               <h2 className="mt-3 text-4xl font-bold">
//                 IT Professionals You Can Add to Your Team
//               </h2>
//             </div>

//             <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {resourceTypes.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={item.title}
//                     className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//                   >
//                     <div className="aspect-[16/10] w-full overflow-hidden">
//                       <img
//                         src={`/assets/images/it-resource-expansion/${item.image}`}
//                         alt={item.title}
//                         loading="lazy"
//                         decoding="async"
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>
//                     <div className="p-7">
//                       <Icon className="h-9 w-9 text-purple-600" />
//                       <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
//                       <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* HOW IT WORKS */}
//         <section className="bg-white py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="text-center">
//               <p className="font-semibold text-purple-600">HOW IT WORKS</p>
//               <h2 className="mt-3 text-4xl font-bold">
//                 A Simple Process From Requirement to Delivery
//               </h2>
//             </div>

//             <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {steps.map((s, i) => {
//                 const Icon = s.icon;
//                 return (
//                   <div
//                     key={s.title}
//                     className="relative rounded-3xl border border-purple-100 bg-purple-50/60 p-7"
//                   >
//                     <span className="absolute right-6 top-5 text-5xl font-bold text-purple-200">
//                       {i + 1}
//                     </span>
//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
//                       <Icon className="h-6 w-6 text-purple-600" />
//                     </div>
//                     <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
//                     <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ENGAGEMENT MODELS */}
//         <section className="bg-purple-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="text-center">
//               <p className="font-semibold text-purple-600">ENGAGEMENT MODELS</p>
//               <h2 className="mt-3 text-4xl font-bold">Flexible Ways to Work With Us</h2>
//             </div>

//             <div className="mt-12 grid gap-6 md:grid-cols-3">
//               {models.map((m) => {
//                 const Icon = m.icon;
//                 return (
//                   <div
//                     key={m.title}
//                     className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm"
//                   >
//                     <Icon className="h-10 w-10 text-purple-600" />
//                     <h3 className="mt-5 text-xl font-bold">{m.title}</h3>
//                     <p className="mt-3 leading-7 text-gray-600">{m.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section className="bg-white py-20">
//           <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
//             <p className="font-semibold text-purple-600">TECHNOLOGIES</p>
//             <h2 className="mt-3 text-4xl font-bold">Skills Across Modern Technology Stacks</h2>
//             <div className="mt-10 flex flex-wrap justify-center gap-3">
//               {techStack.map((t) => (
//                 <span
//                   key={t}
//                   className="rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-sm font-semibold text-purple-700"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BENEFITS */}
//         <section className="bg-purple-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="text-center">
//               <p className="font-semibold text-purple-600">WHY CHOOSE US</p>
//               <h2 className="mt-3 text-4xl font-bold">Benefits of Tailored Resource Solutions</h2>
//             </div>

//             <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {benefits.map((b) => {
//                 const Icon = b.icon;
//                 return (
//                   <div
//                     key={b.title}
//                     className="rounded-3xl border border-purple-100 bg-white p-7 text-center shadow-sm"
//                   >
//                     <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
//                       <Icon className="h-7 w-7 text-purple-600" />
//                     </div>
//                     <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
//                     <p className="mt-3 leading-7 text-gray-600">{b.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="bg-white py-20">
//           <div className="mx-auto max-w-3xl px-6">
//             <div className="text-center">
//               <p className="font-semibold text-purple-600">FAQ</p>
//               <h2 className="mt-3 text-4xl font-bold">Frequently Asked Questions</h2>
//             </div>

//             <div className="mt-10 space-y-4">
//               {faqs.map((f) => (
//                 <details
//                   key={f.q}
//                   className="group rounded-2xl border border-purple-100 bg-purple-50/50 p-6"
//                 >
//                   <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
//                     {f.q}
//                     <ChevronDown className="h-5 w-5 shrink-0 text-purple-600 transition group-open:rotate-180" />
//                   </summary>
//                   <p className="mt-4 leading-7 text-gray-600">{f.a}</p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 py-20 text-white">
//           <div className="mx-auto max-w-4xl px-6 text-center">
//             <h2 className="text-4xl font-bold">Build the Right Team for Your Project</h2>
//             <p className="mt-5 text-lg text-purple-100">
//               Tell us what skills you need and we can help you expand your
//               technology team.
//             </p>
//             <Link
//               href="/contact"
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-purple-700 transition hover:bg-purple-50"
//             >
//               Get Started
//               <ArrowRight size={18} />
//             </Link>
//           </div>
//         </section>

//       </main>
//     </>
//   );
// }
if (slug === "tailored-solutions") {
  const stats = [
    { value: "100+", label: "Projects Supported" },
    { value: "50+", label: "Skilled Professionals" },
    { value: "48 hrs", label: "Average Profile Turnaround" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  const resourceTypes = [
    {
      icon: Code2,
      title: "Developers",
      text: "Frontend, backend and full-stack developers for modern application development.",
      image: "developers.png",
    },
    {
      icon: Bug,
      title: "QA Engineers",
      text: "Manual, automation and performance testing specialists focused on quality.",
      image: "qa-engineers.png",
    },
    {
      icon: Cloud,
      title: "DevOps Engineers",
      text: "Cloud, CI/CD, infrastructure and deployment specialists for reliable delivery.",
      image: "devops.png",
    },
    {
      icon: UsersRound,
      title: "Dedicated Teams",
      text: "Complete technology teams aligned with your project goals and delivery needs.",
      image: "dedicated-teams.png",
    },
  ];

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Understand Requirements",
      text: "We learn your project scope, technology stack, timeline and budget.",
    },
    {
      icon: ClipboardList,
      number: "02",
      title: "Shortlist Profiles",
      text: "We match and share professionals based on your skill and experience requirements.",
    },
    {
      icon: UserCheck,
      number: "03",
      title: "Interview & Select",
      text: "Review the candidates, conduct interviews and select the right professionals.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Onboard & Deliver",
      text: "Your selected resources get started quickly with continued support from us.",
    },
  ];

  const models = [
    {
      icon: Clock,
      title: "Hourly / Short-Term",
      text: "Ideal for quick tasks, audits, urgent requirements or temporary skill gaps.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Resource",
      text: "Full-time professionals who work as an extension of your internal team.",
    },
    {
      icon: UsersRound,
      title: "Dedicated Team",
      text: "A complete team of developers, QA and DevOps professionals for end-to-end delivery.",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Python",
    ".NET",
    "Angular",
    "Vue.js",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Selenium",
    "Cypress",
    "Jenkins",
    "Terraform",
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Hiring",
      text: "Skip lengthy recruitment cycles and start building your project sooner.",
    },
    {
      icon: Wallet,
      title: "Cost Effective",
      text: "Pay for the resources and engagement duration that your project actually needs.",
    },
    {
      icon: ShieldCheck,
      title: "Pre-Vetted Talent",
      text: "Professionals are screened for technical skills and communication.",
    },
    {
      icon: Target,
      title: "Scalable Teams",
      text: "Increase or reduce resources as your project requirements change.",
    },
  ];

  const faqs = [
    {
      q: "How quickly can resources join my project?",
      a: "In most cases, we share suitable profiles within 48 hours, and onboarding can begin within a few days after selection.",
    },
    {
      q: "Can I scale the team up or down later?",
      a: "Yes. Our engagement models are flexible, allowing you to add or release resources as your project needs change.",
    },
    {
      q: "Do I get to interview the professionals?",
      a: "Absolutely. You review profiles and interview candidates before making the final selection.",
    },
    {
      q: "Do you support both short and long-term engagements?",
      a: "Yes. We support short-term requirements, dedicated resources and long-term dedicated technology teams.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 pb-20 pt-32">

          <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* HERO CONTENT */}
              <div>

                <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2.5 text-sm font-semibold text-purple-700">
                  <Target size={18} />
                  IT Resource Expansion
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                  Tailored
                  <span className="block text-purple-600">
                    Solutions
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Get the right technology professionals and resources based
                  on your project requirements, technology stack and business
                  goals.
                </p>

                <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
                  From a single specialist to a complete technology team,
                  we provide flexible resources designed around your
                  specific project needs.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700"
                >
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </Link>

              </div>


              {/* HERO IMAGE */}
              <div className="relative">

                <div className="absolute inset-6 rounded-[40px] bg-purple-200/40 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl shadow-purple-100">

                  <img
                    src="/assets/images/it-resource-expansion/resource-hero.png"
                    alt="IT Resource Expansion"
                    loading="eager"
                    decoding="async"
                    className="h-[450px] w-full rounded-[25px] object-cover object-center"
                  />

                </div>

                {/* FLOATING CARD */}
                <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-purple-100 bg-white px-6 py-4 shadow-xl sm:block">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                      <ShieldCheck className="h-6 w-6 text-purple-600" />
                    </div>

                    <div>
                      <p className="font-bold">
                        Pre-Vetted Professionals
                      </p>

                      <p className="text-sm text-gray-500">
                        Ready for your project
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= STATS ================= */}
        <section className="border-b border-gray-100 bg-white py-10">

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">

            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-gray-50 px-5 py-5 text-center transition hover:bg-purple-50"
              >

                <p className="text-3xl font-bold text-purple-600 md:text-4xl">
                  {s.value}
                </p>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  {s.label}
                </p>

              </div>
            ))}

          </div>
        </section>


        {/* ================= ABOUT ================= */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* IMAGE */}
              <div className="relative">

                <div className="absolute -inset-4 rounded-[40px] bg-purple-50" />

                <div className="relative overflow-hidden rounded-[30px] border border-purple-100 bg-white p-3 shadow-xl">

                  <img
                    src="/assets/images/it-resource-expansion/tailored-solutions.png"
                    alt="Tailored IT Solutions"
                    loading="lazy"
                    decoding="async"
                    className="h-[430px] w-full rounded-[24px] object-cover object-center"
                  />

                </div>

              </div>


              {/* CONTENT */}
              <div>

                <p className="font-semibold tracking-wide text-purple-600">
                  TAILORED SOLUTIONS
                </p>

                <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
                  Resources Built Around
                  <span className="block text-purple-600">
                    Your Requirements
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Every project has different technology requirements,
                  team structures and delivery timelines. Our tailored
                  resource solutions help you access professionals with
                  the right skills and experience.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    "Project-specific expertise",
                    "Flexible resource models",
                    "Technology aligned talent",
                    "Quick onboarding",
                    "Short-term support",
                    "Long-term teams",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 transition hover:bg-orange-100"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600" />

                      <span className="text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= RESOURCE TYPES ================= */}
        <section className="relative overflow-hidden bg-[#faf8ff] py-24">

          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">

              <p className="font-semibold tracking-wide text-purple-600">
                OUR EXPERTISE
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                IT Professionals You Can
                <span className="text-purple-600">
                  {" "}Add to Your Team
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Access specialized professionals who can seamlessly
                integrate with your existing development and delivery teams.
              </p>

            </div>


            {/* RESOURCE CARDS */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {resourceTypes.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-[28px] bg-gradient-to-br from-purple-50 via-white to-pink-50 shadow-sm ring-1 ring-purple-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-100"
                  >

                    {/* IMAGE */}
                    <div className="relative aspect-[16/10] overflow-hidden">

                      <img
                        src={`/assets/images/it-resource-expansion/${item.image}`}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    </div>


                    {/* CONTENT */}
                    <div className="p-7">

                      <div className="flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                          <Icon className="h-5 w-5 text-purple-600" />
                        </div>

                        <ArrowRight
                          className="h-5 w-5 text-gray-300 transition group-hover:translate-x-1 group-hover:text-purple-600"
                        />

                      </div>

                      <h3 className="mt-5 text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.text}
                      </p>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>
        </section>


        {/* ================= PROCESS ================= */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">

              <p className="font-semibold tracking-wide text-blue-600">
                HOW IT WORKS
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                From Requirement to Delivery
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                A straightforward process designed to help you find,
                select and onboard the right professionals quickly.
              </p>

            </div>


            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {steps.map((s) => {

                const Icon = s.icon;

                return (
                  <div
                    key={s.title}
                    className="group relative rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>

                      <span className="text-4xl font-bold text-blue-100">
                        {s.number}
                      </span>

                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {s.text}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-blue-500 transition-all group-hover:w-16" />

                  </div>
                );

              })}

            </div>

          </div>
        </section>


        {/* ================= ENGAGEMENT MODELS ================= */}
        <section className="relative overflow-hidden bg-[#faf8ff] py-24">

          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">

              <p className="font-semibold tracking-wide text-violet-600">
                ENGAGEMENT MODELS
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Flexible Ways to Work With Us
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Choose an engagement model that fits your project size,
                timeline and resource requirements.
              </p>

            </div>


            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">

              {models.map((m) => {

                const Icon = m.icon;

                return (
                  <div
                    key={m.title}
                    className="group rounded-[28px] bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-8 shadow-sm ring-1 ring-violet-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-violet-600">

                      <Icon className="h-7 w-7 text-violet-600 transition group-hover:text-white" />

                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {m.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {m.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">

                      Learn More

                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                    </div>

                  </div>
                );

              })}

            </div>

          </div>
        </section>


        {/* ================= TECH STACK ================= */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

            <p className="font-semibold tracking-wide text-purple-600">
              TECHNOLOGIES
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Skills Across Modern Technology Stacks
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Find professionals experienced with the technologies
              your project already uses.
            </p>


            <div className="mt-12 flex flex-wrap justify-center gap-3">

              {techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-purple-200 bg-purple-50 px-5 py-2.5 text-sm font-semibold text-purple-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-100"
                >
                  {t}
                </span>
              ))}

            </div>

          </div>
        </section>


        {/* ================= BENEFITS ================= */}
        <section className="relative overflow-hidden bg-[#f9fbfa] py-24">

          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">

              <p className="font-semibold tracking-wide text-emerald-600">
                WHY CHOOSE US
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Benefits of Tailored Resource Solutions
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Flexible resources can help your organization respond
                quickly to changing project requirements.
              </p>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {benefits.map((b) => {

                const Icon = b.icon;

                return (
                  <div
                    key={b.title}
                    className="group rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:bg-emerald-600">

                      <Icon className="h-7 w-7 text-emerald-600 transition group-hover:text-white" />

                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {b.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {b.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>
        </section>


        {/* ================= FAQ ================= */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-3xl px-6">

            <div className="text-center">

              <p className="font-semibold tracking-wide text-purple-600">
                FAQ
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Frequently Asked Questions
              </h2>

            </div>


            <div className="mt-12 space-y-4">

              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 px-6 py-5 transition hover:border-purple-100 hover:bg-purple-50/40"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">

                    <span>{f.q}</span>

                    <ChevronDown className="h-5 w-5 shrink-0 text-purple-600 transition duration-300 group-open:rotate-180" />

                  </summary>

                  <p className="mt-4 pr-8 leading-7 text-gray-600">
                    {f.a}
                  </p>

                </details>
              ))}

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 py-24 text-white">

          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">

            <p className="font-semibold tracking-wide text-purple-100">
              BUILD YOUR TEAM
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Build the Right Team
              <span className="block">
                for Your Project
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
              Tell us what skills you need and we can help you find
              the right professionals to move your project forward.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-purple-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-purple-50"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}

  // =========================================================
  // 2. QUALITY ASSURANCE
  // =========================================================
if (slug === "quality-assurance") {
  const stats = [
    { value: "100+", label: "Releases Validated" },
    { value: "30+", label: "QA Professionals" },
    { value: "48 hrs", label: "Average Profile Turnaround" },
    { value: "90%", label: "Defects Caught Before Release" },
  ];

  const services = [
    { icon: ClipboardCheck, title: "Manual Testing", text: "Functional, exploratory and regression testing for reliable releases." },
    { icon: Bot, title: "Automation Testing", text: "Automated test suites that give you faster, repeatable validation." },
    { icon: Gauge, title: "Performance Testing", text: "Load and stress testing to measure speed, stability and scalability." },
    { icon: Smartphone, title: "Mobile Testing", text: "Testing across devices, screen sizes and operating systems." },
    { icon: Lock, title: "Security Testing", text: "Basic vulnerability checks to protect your application and user data." },
    { icon: Bug, title: "API Testing", text: "Validate endpoints, data flow and integrations between services." },
  ];

  const steps = [
    { icon: Search, title: "Understand Your Product", text: "We review your application, release cycle and quality goals." },
    { icon: ClipboardList, title: "Plan Test Strategy", text: "We define test scope, coverage and the right mix of manual and automation." },
    { icon: UserCheck, title: "Add QA Resources", text: "Matched QA engineers join your team and start testing quickly." },
    { icon: Rocket, title: "Report & Improve", text: "You get clear defect reports and steady improvements to release quality." },
  ];

  const tools = [
    "Selenium", "Cypress", "Playwright", "Appium", "Postman", "JMeter",
    "TestNG", "JUnit", "Jira", "Jenkins", "BrowserStack", "Cucumber",
  ];

  const benefits = [
    { icon: Bug, title: "Earlier Defect Detection", text: "Catch issues in development, when they are cheaper to fix." },
    { icon: Target, title: "Better Test Coverage", text: "Cover more scenarios, devices and edge cases." },
    { icon: Zap, title: "Faster Release Validation", text: "Shorter test cycles help you ship with confidence." },
    { icon: ShieldCheck, title: "Consistent Quality", text: "Standard processes keep quality steady across releases." },
  ];

  const faqs = [
    { q: "Can your QA engineers work with our existing developers?", a: "Yes. They join your workflow, tools and sprints, and work alongside your developers like any other team member." },
    { q: "Do you provide both manual and automation testers?", a: "Yes. You can add manual testers, automation engineers, or a mix of both depending on your needs." },
    { q: "How quickly can a QA engineer start?", a: "We usually share suitable profiles within 48 hours, and onboarding can begin soon after you select someone." },
    { q: "Can we scale the QA team during busy release periods?", a: "Yes. You can add resources for a release and scale back afterwards." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-indigo-100 pb-20 pt-32">
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  <ShieldCheck size={18} />
                  IT Resource Expansion
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                  Quality Assurance
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Strengthen your development team with skilled QA
                  professionals who help validate functionality, performance
                  and overall product quality, so every release is one you
                  can trust.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Fixed ratio box keeps the image sharp and consistent */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[30px] shadow-xl">
                <img
                  src="/assets/images/it-resource-expansion/quality-assurance.png"
                  alt="Quality Assurance"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-blue-100 bg-white py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-blue-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT / SERVICES */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-semibold text-blue-600">QUALITY ASSURANCE</p>
              <h2 className="mt-3 text-4xl font-bold">
                Build Quality Into Every Stage
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our QA professionals can work alongside your development
                teams to identify defects, validate requirements and improve
                release confidence throughout the development lifecycle.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-sky-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-blue-600">HOW IT WORKS</p>
              <h2 className="mt-3 text-4xl font-bold">
                How We Add QA Support to Your Team
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="relative rounded-3xl border border-sky-100 bg-white p-7 shadow-sm"
                  >
                    <span className="absolute right-6 top-5 text-5xl font-bold text-sky-100">
                      {i + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="font-semibold text-blue-600">TOOLS &amp; FRAMEWORKS</p>
            <h2 className="mt-3 text-4xl font-bold">
              Testing Tools Our Engineers Use
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-indigo-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-indigo-600">WHY CHOOSE US</p>
              <h2 className="mt-3 text-4xl font-bold">QA Resource Benefits</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-3xl border border-indigo-100 bg-white p-7 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
                      <Icon className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{b.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="font-semibold text-blue-600">FAQ</p>
              <h2 className="mt-3 text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-blue-600 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 leading-7 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">Strengthen Your QA Team</h2>
            <p className="mt-5 text-lg text-blue-100">
              Add experienced QA professionals to your development workflow.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
  // =========================================================
  // 3. SEAMLESS INTEGRATION
  // =========================================================

  // if (slug === "seamless-integration") {
  //   return (
  //       <>
  //       <Navbar/>
  //     <main className="bg-white text-gray-900 ">

  //       {/* HERO */}
  //       <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">

  //           <div className="grid items-center gap-12 lg:grid-cols-2">

  //             <div>
  //               <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 mt-20">
  //                 <Workflow size={18} />
  //                 IT Resource Expansion
  //               </span>

  //               <h1 className="mt-6 text-4xl font-bold md:text-6xl">
  //                 Seamless Integration
  //               </h1>

  //               <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
  //                 Extend your existing team with professionals who adapt to
  //                 your tools, workflows, communication practices and delivery
  //                 processes.
  //               </p>

  //               <h2
  //                 className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3 font-semibold text-white"
  //               >
  //                 Talk to Our Experts
  //                 <ArrowRight size={18} />
  //               </h2>
  //             </div>

  //             <img
  //               src="/assets/images/it-resource-expansion/seamless-integration.png"
  //               alt="Seamless Integration"
  //               className="h-[600px] w-full rounded-[30px] object-contain shadow-xl mt-20"
  //             />

  //           </div>
  //         </div>
  //       </section>

  //       {/* ABOUT */}
  //       <section className="py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">

  //           <div className="grid gap-12 lg:grid-cols-2">

  //             <div>
  //               <p className="font-semibold text-pink-600">
  //                 SEAMLESS INTEGRATION
  //               </p>

  //               <h2 className="mt-3 text-4xl font-bold">
  //                 Your Extended Technology Team
  //               </h2>
  //             </div>

  //             <p className="text-lg leading-8 text-gray-600">
  //               Effective resource expansion depends on more than technical
  //               skills. Professionals need to understand your processes,
  //               tools, communication methods and project expectations.
  //               Our resources can operate as an extension of your existing
  //               team.
  //             </p>

  //           </div>

  //           <div className="mt-12 grid gap-6 md:grid-cols-3">

  //             {[
  //               {
  //                 icon: Workflow,
  //                 title: "Existing Workflows",
  //                 text: "Adapt to your development and delivery processes.",
  //               },
  //               {
  //                 icon: Users,
  //                 title: "Team Collaboration",
  //                 text: "Work closely with your internal developers and managers.",
  //               },
  //               {
  //                 icon: Target,
  //                 title: "Project Alignment",
  //                 text: "Focus resources on your specific business objectives.",
  //               },
  //             ].map((item) => {
  //               const Icon = item.icon;

  //               return (
  //                 <div
  //                   key={item.title}
  //                   className="rounded-3xl bg-pink-50 p-8"
  //                 >
  //                   <Icon className="h-10 w-10 text-pink-600" />

  //                   <h3 className="mt-5 text-xl font-bold">
  //                     {item.title}
  //                   </h3>

  //                   <p className="mt-3 leading-7 text-gray-600">
  //                     {item.text}
  //                   </p>
  //                 </div>
  //               );
  //             })}

  //           </div>
  //         </div>
  //       </section>

  //       {/* PROCESS */}
  //       <section className="bg-gray-50 py-20">
  //         <div className="mx-auto max-w-7xl px-6 lg:px-8">

  //           <h2 className="text-center text-4xl font-bold">
  //             Our Integration Approach
  //           </h2>

  //           <div className="mt-12 grid gap-6 md:grid-cols-4">

  //             {[
  //               "Understand Your Workflow",
  //               "Match the Right Resources",
  //               "Onboard & Collaborate",
  //               "Deliver & Improve",
  //             ].map((step, index) => (
  //               <div
  //                 key={step}
  //                 className="rounded-3xl bg-white p-7 shadow-sm"
  //               >
  //                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
  //                   {index + 1}
  //                 </div>

  //                 <h3 className="mt-5 font-bold">{step}</h3>
  //               </div>
  //             ))}

  //           </div>
  //         </div>
  //       </section>

  //       {/* CTA */}
  //       <section className="bg-pink-700 py-20 text-white">
  //         <div className="mx-auto max-w-4xl px-6 text-center">

  //           <h2 className="text-4xl font-bold">
  //             Extend Your Team Seamlessly
  //           </h2>

  //           <p className="mt-5 text-lg text-pink-100">
  //             Add skilled professionals who fit naturally into your existing
  //             delivery environment.
  //           </p>

  //           <h2
  //             className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-pink-700"
  //           >
  //             Get Started
  //             <ArrowRight size={18} />
  //           </h2>

  //         </div>
  //       </section>

  //     </main>
  //     </>
  //   );
  // }

if (slug === "seamless-integration") {
  const stats = [
    { value: "100+", label: "Teams Extended" },
    { value: "50+", label: "Skilled Professionals" },
    { value: "48 hrs", label: "Average Profile Turnaround" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  const highlights = [
    { icon: Workflow, title: "Existing Workflows", text: "Adapt to your development and delivery processes from day one." },
    { icon: Users, title: "Team Collaboration", text: "Work closely with your internal developers, managers and stakeholders." },
    { icon: Target, title: "Project Alignment", text: "Focus resources on your specific business objectives and milestones." },
  ];

  const adaptAreas = [
    { icon: Wrench, title: "Your Tools", text: "Jira, Git, Slack, Teams, Confluence and the other tools your team already uses." },
    { icon: GitBranch, title: "Your Dev Process", text: "Agile, Scrum, Kanban or your own custom delivery methodology." },
    { icon: MessageSquare, title: "Your Communication", text: "Daily stand-ups, sprint reviews and regular progress updates." },
    { icon: Clock, title: "Your Time Zone", text: "Flexible working hours with overlap that suits your team." },
  ];

  const steps = [
    { icon: Search, title: "Understand Your Workflow", text: "We study your tools, processes, team structure and delivery goals." },
    { icon: UserCheck, title: "Match the Right Resources", text: "We select professionals whose skills and working style fit your team." },
    { icon: Rocket, title: "Onboard & Collaborate", text: "Resources join your channels and meetings and start contributing quickly." },
    { icon: RefreshCw, title: "Deliver & Improve", text: "We review progress regularly and keep improving how the team works together." },
  ];

  const benefits = [
    { icon: Zap, title: "Quick Ramp-Up", text: "Resources get productive faster because they adapt to your setup." },
    { icon: ShieldCheck, title: "Low Disruption", text: "Your existing processes stay in place, with no big changes needed." },
    { icon: TrendingUp, title: "Easy to Scale", text: "Add or reduce team members as your project grows or slows." },
    { icon: Users, title: "True Team Fit", text: "Professionals work as part of your team, not as outsiders." },
  ];

  const faqs = [
    { q: "Will your professionals use our tools and processes?", a: "Yes. They work inside your tools, sprints and communication channels, so nothing about your workflow has to change." },
    { q: "How do you make sure they fit our team culture?", a: "We consider communication style and working approach as well as technical skills, and you can interview candidates before selecting anyone." },
    { q: "How quickly can integrated resources start contributing?", a: "Most resources are productive within the first week or two of onboarding, depending on project complexity." },
    { q: "Can we manage them directly?", a: "Yes. You can manage them day to day just like your in-house team, and we stay available for support." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 pb-20 pt-32">
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                  <Workflow size={18} />
                  IT Resource Expansion
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                  Seamless Integration
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Extend your existing team with professionals who adapt to
                  your tools, workflows, communication practices and delivery
                  processes, so new resources feel like part of the team from
                  day one.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3 font-semibold text-white transition hover:bg-pink-700"
                >
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Fixed ratio box keeps the image sharp and consistent */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[30px] shadow-xl">
                <img
                  src="/assets/images/it-resource-expansion/seamless-integration.png"
                  alt="Seamless Integration"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-pink-100 bg-white py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-pink-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-pink-600">SEAMLESS INTEGRATION</p>
                <h2 className="mt-3 text-4xl font-bold">
                  Your Extended Technology Team
                </h2>
              </div>

              <p className="text-lg leading-8 text-gray-600">
                Effective resource expansion depends on more than technical
                skills. Professionals need to understand your processes,
                tools, communication methods and project expectations.
                Our resources can operate as an extension of your existing
                team, contributing from the start without slowing anyone down.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-pink-100 bg-pink-50/60 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100">
                      <Icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHAT WE ADAPT TO */}
        <section className="bg-rose-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-rose-600">WHAT WE ADAPT TO</p>
              <h2 className="mt-3 text-4xl font-bold">
                We Fit Into the Way You Already Work
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {adaptAreas.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.title}
                    className="rounded-3xl border border-rose-100 bg-white p-7 shadow-sm"
                  >
                    <Icon className="h-9 w-9 text-rose-600" />
                    <h3 className="mt-4 text-xl font-bold">{a.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{a.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-pink-600">OUR PROCESS</p>
              <h2 className="mt-3 text-4xl font-bold">Our Integration Approach</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="relative rounded-3xl border border-pink-100 bg-pink-50/60 p-7"
                  >
                    <span className="absolute right-6 top-5 text-5xl font-bold text-pink-200">
                      {i + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100">
                      <Icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-fuchsia-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-fuchsia-600">WHY CHOOSE US</p>
              <h2 className="mt-3 text-4xl font-bold">
                Benefits of Seamless Integration
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-3xl border border-fuchsia-100 bg-white p-7 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-100">
                      <Icon className="h-7 w-7 text-fuchsia-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{b.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="font-semibold text-pink-600">FAQ</p>
              <h2 className="mt-3 text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-pink-100 bg-pink-50/50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-pink-600 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 leading-7 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-pink-700 via-pink-600 to-fuchsia-600 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">Extend Your Team Seamlessly</h2>
            <p className="mt-5 text-lg text-pink-100">
              Add skilled professionals who fit naturally into your existing
              delivery environment.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-pink-700 transition hover:bg-pink-50"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
  // =========================================================
  // 4. SCALABILITY
  // =========================================================

if (slug === "scalability") {
  const stats = [
    { value: "100+", label: "Teams Scaled" },
    { value: "50+", label: "Skilled Professionals" },
    { value: "48 hrs", label: "Average Profile Turnaround" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  const highlights = [
    { icon: TrendingUp, title: "Scale Up", text: "Add professionals when project workload increases." },
    { icon: Users, title: "Flexible Teams", text: "Build teams according to changing technology requirements." },
    { icon: Target, title: "Project Focus", text: "Align resources with specific project phases." },
  ];

  const scenarios = [
    { icon: ArrowUpRight, title: "Rapid Growth", text: "Add developers and QA quickly when your product or customer base grows." },
    { icon: CalendarClock, title: "Tight Deadlines", text: "Bring in extra capacity to hit a launch date without burning out your team." },
    { icon: Layers, title: "Specialized Skills", text: "Access niche expertise for a specific phase without a permanent hire." },
    { icon: ArrowDownRight, title: "Scale Back Smoothly", text: "Reduce team size after a peak period, with no long-term commitment." },
  ];

  const steps = [
    { icon: Search, title: "Assess Your Demand", text: "We review your workload, timelines and the skills you need next." },
    { icon: UserCheck, title: "Add the Right Resources", text: "We match professionals to the phase of your project and your tech stack." },
    { icon: Rocket, title: "Deliver at Higher Capacity", text: "Your expanded team ramps up quickly and starts delivering." },
    { icon: RefreshCw, title: "Adjust as Needed", text: "Add more or release resources as your requirements change." },
  ];

  const benefits = [
    { icon: Gauge, title: "Respond to Workload", text: "Match team size to changing project demand." },
    { icon: Layers, title: "Specialized Expertise", text: "Bring in the exact skills each project phase needs." },
    { icon: Zap, title: "Faster Delivery", text: "More capacity means shorter timelines and earlier releases." },
    { icon: Wallet, title: "Cost Control", text: "Pay for capacity only while you need it." },
  ];

  const faqs = [
    { q: "How quickly can we scale the team up?", a: "In most cases we share suitable profiles within 48 hours, and additional resources can join soon after you select them." },
    { q: "Can we reduce the team size later?", a: "Yes. Our engagement models are flexible, so you can release resources when the workload drops." },
    { q: "Can we scale across different roles?", a: "Yes. You can add developers, QA engineers, DevOps specialists or a complete team, depending on what each phase needs." },
    { q: "Is there a minimum engagement period?", a: "Engagement terms depend on the model you choose. Talk to our team and we will suggest the option that fits your project." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-100 via-white to-teal-100 pb-20 pt-32">
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  <TrendingUp size={18} />
                  IT Resource Expansion
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                  Scalability
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Scale your technology workforce according to changing
                  project demands, delivery timelines and business growth.
                  Add capacity when you need it and adjust when you don't.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Talk to Our Experts
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Fixed ratio box keeps the image sharp and consistent */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[30px] shadow-xl">
                <img
                  src="/assets/images/it-resource-expansion/scalability.png"
                  alt="IT Scalability"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-green-100 bg-white py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-green-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-semibold text-green-600">FLEXIBLE SCALING</p>
              <h2 className="mt-3 text-4xl font-bold">
                Scale Your Team When You Need It
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Project requirements can change over time. Resource
                augmentation allows organizations to increase technical
                capacity during high-demand periods and adjust team size as
                project requirements evolve, without the cost and delay of
                permanent hiring.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-green-100 bg-green-50/60 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHEN TO SCALE */}
        <section className="bg-emerald-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-emerald-600">WHEN TO SCALE</p>
              <h2 className="mt-3 text-4xl font-bold">
                Situations Where Flexible Scaling Helps
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {scenarios.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"
                  >
                    <Icon className="h-9 w-9 text-emerald-600" />
                    <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-green-600">HOW IT WORKS</p>
              <h2 className="mt-3 text-4xl font-bold">
                A Simple Way to Grow Your Team
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="relative rounded-3xl border border-green-100 bg-green-50/60 p-7"
                  >
                    <span className="absolute right-6 top-5 text-5xl font-bold text-green-200">
                      {i + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-teal-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-teal-600">WHY CHOOSE US</p>
              <h2 className="mt-3 text-4xl font-bold">
                Benefits of Flexible Resource Scaling
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-3xl border border-teal-100 bg-white p-7 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
                      <Icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{b.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="font-semibold text-green-600">FAQ</p>
              <h2 className="mt-3 text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-green-100 bg-green-50/50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-green-600 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 leading-7 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-teal-600 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold">Scale Your Technology Team</h2>
            <p className="mt-5 text-lg text-green-100">
              Get the additional technical capacity you need for your next
              project phase.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}


  // =========================================================
  // 5. CONTINUOUS SUPPORT
  // =========================================================

//   if (slug === "continuous-support") {
//     return (
//         <>
//         <Navbar/>
//       <main className="bg-white text-gray-900 ">

//         {/* HERO */}
//         <section className="bg-gradient-to-br from-orange-50 via-white to-pink-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">

//             <div className="grid items-center gap-12 lg:grid-cols-2">

//               <div>
//                 <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 mt-20">
//                   <Headphones size={18} />
//                   IT Resource Expansion
//                 </span>

//                 <h1 className="mt-6 text-4xl font-bold md:text-6xl">
//                   Continuous Support
//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
//                   Keep your technology initiatives moving with ongoing
//                   technical support, resource continuity and performance
//                   monitoring.
//                 </p>

//                 <h2
//                   className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 font-semibold text-white"
//                 >
//                   Talk to Our Experts
//                   <ArrowRight size={18} />
//                 </h2>
//               </div>

//               <img
//                 src="/assets/images/it-resource-expansion/continuous-support.png"
//                 alt="Continuous IT Support"
//                  className="h-[600px] w-full rounded-[30px] object-contain shadow-xl mt-20"
//               />

//             </div>
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">

//             <div className="grid gap-12 lg:grid-cols-2">

//               <div>
//                 <p className="font-semibold text-orange-600">
//                   CONTINUOUS SUPPORT
//                 </p>

//                 <h2 className="mt-3 text-4xl font-bold">
//                   Support That Continues Beyond Deployment
//                 </h2>
//               </div>

//               <p className="text-lg leading-8 text-gray-600">
//                 Technology projects require ongoing maintenance, monitoring,
//                 troubleshooting and optimization. Continuous support helps
//                 teams maintain operational continuity while addressing new
//                 technical requirements.
//               </p>

//             </div>

//             <div className="mt-12 grid gap-6 md:grid-cols-3">

//               {[
//                 {
//                   icon: Headphones,
//                   title: "Technical Support",
//                   text: "Ongoing assistance for technical issues and project needs.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Performance Monitoring",
//                   text: "Monitor systems and identify areas requiring attention.",
//                 },
//                 {
//                   icon: TrendingUp,
//                   title: "Continuous Improvement",
//                   text: "Improve solutions as requirements and technologies evolve.",
//                 },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="rounded-3xl bg-orange-50 p-8"
//                   >
//                     <Icon className="h-10 w-10 text-orange-600" />

//                     <h3 className="mt-5 text-xl font-bold">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 leading-7 text-gray-600">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </section>

//         {/* SUPPORT AREAS */}
//         <section className="bg-gray-50 py-20">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">

//             <h2 className="text-center text-4xl font-bold">
//               Our Support Areas
//             </h2>

//             <div className="mt-12 grid gap-6 md:grid-cols-2">

//               {[
//                 "Application maintenance",
//                 "Technical troubleshooting",
//                 "Cloud and infrastructure support",
//                 "Development support",
//                 "QA and testing support",
//                 "Resource continuity",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm"
//                 >
//                   <CheckCircle2 className="shrink-0 text-orange-600" />

//                   <span className="font-medium">
//                     {item}
//                   </span>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-orange-600 py-20 text-white">
//           <div className="mx-auto max-w-4xl px-6 text-center">

//             <h2 className="text-4xl font-bold">
//               Keep Your Technology Moving Forward
//             </h2>

//             <p className="mt-5 text-lg text-orange-100">
//               Get reliable technical resources and ongoing support for your
//               projects.
//             </p>

//             <h2
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-orange-600"
//             >
//               Get Started
//               <ArrowRight size={18} />
//             </h2>

//           </div>
//         </section>

//       </main>
//       </>
//     );
//   }

//   return null;
// }
if (slug === "continuous-support") {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-rose-50 py-24">
          {/* Decorative background */}
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}
              <div>
                <span className="mt-16 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2.5 text-sm font-semibold text-orange-700">
                  <Headphones size={18} />
                  IT Resource Expansion
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                  Continuous
                  <span className="block text-orange-600">
                    Support
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Keep your technology initiatives moving with dependable
                  technical support, resource continuity, system monitoring,
                  maintenance, and continuous optimization.
                </p>

                <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
                  Our support teams work alongside your organization to
                  resolve technical challenges, maintain applications,
                  improve performance, and ensure your technology continues
                  to deliver business value after deployment.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700">
                    Talk to Our Experts
                    <ArrowRight size={18} />
                  </button>

                  <button className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-orange-400 hover:text-orange-600">
                    Explore Services
                  </button>
                </div>

                {/* Small stats */}
                <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-7">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">24/7</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Support Availability
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-gray-900">360°</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Technical Assistance
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-gray-900">Long-Term</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Technology Partnership
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div className="absolute inset-5 rounded-[40px] bg-orange-200/40 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white bg-white/80 p-4 shadow-2xl shadow-orange-100">
                  <img
                    src="/assets/images/it-resource-expansion/continuous-support.png"
                    alt="Continuous IT Support"
                    className="h-[480px] w-full rounded-[24px] object-cover"
                  />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 p-3">
                      <ShieldCheck className="h-6 w-6 text-orange-600" />
                    </div>

                    <div>
                      <p className="font-bold text-gray-900">
                        Reliable Support
                      </p>
                      <p className="text-sm text-gray-500">
                        Built for continuity
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ABOUT */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-2">

              <div>
                <p className="font-semibold tracking-wide text-orange-600">
                  CONTINUOUS SUPPORT
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                  Support That Continues
                  <span className="block text-orange-600">
                    Beyond Deployment
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-gray-600">
                  Technology does not stop evolving after a project goes live.
                  Applications need maintenance, infrastructure requires
                  monitoring, and business requirements continue to change.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Our continuous support services provide the technical
                  expertise and resources needed to keep your systems stable,
                  secure, and aligned with your business objectives.
                </p>
              </div>

            </div>


            {/* FEATURE CARDS */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">

              {[
                {
                  icon: Headphones,
                  title: "Technical Support",
                  text: "Get ongoing assistance for application issues, technical challenges, maintenance requirements, and project needs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Performance Monitoring",
                  text: "Monitor applications and infrastructure continuously to identify potential issues before they affect operations.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Improvement",
                  text: "Enhance your technology solutions as business requirements, user expectations, and technologies evolve.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-600">
                      <Icon className="h-7 w-7 text-orange-600 transition group-hover:text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>


        {/* WHY CONTINUOUS SUPPORT */}
        <section className="relative overflow-hidden bg-[#fff8f5] py-24">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="font-semibold tracking-wide text-orange-600">
                WHY CONTINUOUS SUPPORT?
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Keep Your Technology
                <span className="text-orange-600"> Reliable & Ready</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                A dedicated support approach helps organizations reduce
                downtime, address technical challenges quickly, and maintain
                the performance of critical technology systems.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Reduce Downtime",
                  text: "Identify and resolve technical problems before they become major disruptions.",
                },
                {
                  number: "02",
                  title: "Improve Stability",
                  text: "Keep applications and infrastructure performing consistently.",
                },
                {
                  number: "03",
                  title: "Scale Resources",
                  text: "Access additional technical expertise whenever your projects require it.",
                },
                {
                  number: "04",
                  title: "Optimize Systems",
                  text: "Continuously improve technology based on performance and business needs.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-orange-500">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* SUPPORT AREAS */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">
              <p className="font-semibold tracking-wide text-orange-600">
                WHAT WE SUPPORT
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Our Support Areas
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                From application maintenance to cloud infrastructure,
                our teams provide support across the technology lifecycle.
              </p>
            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Application maintenance",
                "Technical troubleshooting",
                "Cloud and infrastructure support",
                "Development support",
                "QA and testing support",
                "Resource continuity",
                "Application performance",
                "Security monitoring",
                "Technology optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                  </div>

                  <span className="font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* PROCESS */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">
              <p className="font-semibold tracking-wide text-orange-600">
                OUR APPROACH
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                A Simple Support Process
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">

              {[
                {
                  step: "01",
                  title: "Understand",
                  text: "We understand your technology environment, current challenges, and ongoing requirements.",
                },
                {
                  step: "02",
                  title: "Support",
                  text: "Our technical resources work with your team to resolve issues and maintain operational continuity.",
                },
                {
                  step: "03",
                  title: "Improve",
                  text: "We continuously identify opportunities to improve performance, reliability, and scalability.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-600 to-rose-600 py-24 text-white">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">

            <p className="font-semibold tracking-wide text-orange-100">
              LET'S KEEP YOUR TECHNOLOGY MOVING
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Reliable Support for
              <span className="block">
                Long-Term Technology Success
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
              Get dependable technical resources, ongoing maintenance,
              monitoring, and support to keep your projects performing
              at their best.
            </p>

            <button className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-orange-600 shadow-xl transition hover:bg-orange-50">
              Get Started
              <ArrowRight size={18} />
            </button>

          </div>
        </section>

      </main>
    </>
  );
}

return null;
}

