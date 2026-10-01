import Link from "next/link";
import Navbar from "@/components/Navbar";


// ===================== ANGULAR =====================

// ===================== ANGULAR =====================

function HeroIllustration() {
  const bars = [60, 95, 75, 120, 100, 140];
  return (
    <svg viewBox="0 0 520 390" className="w-full" role="img" aria-label="Angular dashboard illustration">
      <rect x="34" y="34" width="480" height="340" fill="#dd0031" />
      <rect x="20" y="20" width="480" height="340" fill="#ffffff" stroke="#171717" strokeWidth="3" />
      <rect x="20" y="20" width="480" height="36" fill="#171717" />
      <circle cx="42" cy="38" r="5" fill="#dd0031" />
      <circle cx="60" cy="38" r="5" fill="#737373" />
      <circle cx="78" cy="38" r="5" fill="#737373" />
      <rect x="20" y="56" width="110" height="304" fill="#262626" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="36" y={80 + i * 38} width={i === 0 ? 78 : 60} height="10" fill={i === 0 ? "#dd0031" : "#525252"} />
      ))}
      {[148, 260, 372].map((x, i) => (
        <g key={x}>
          <rect x={x} y="76" width="104" height="62" fill="#fff5f6" stroke="#dd0031" strokeWidth="2" />
          <text x={x + 12} y="106" fontSize="22" fontWeight="800" fill="#171717">{["2.4k", "86%", "128"][i]}</text>
          <text x={x + 12} y="126" fontSize="11" fill="#737373">{["Users", "Uptime", "Orders"][i]}</text>
        </g>
      ))}
      <rect x="148" y="152" width="328" height="192" fill="#fafafa" stroke="#e5e5e5" />
      {bars.map((b, i) => (
        <rect key={i} x={172 + i * 48} y={330 - b} width="30" height={b} fill={i === 5 ? "#dd0031" : "#262626"} />
      ))}
    </svg>
  );
}

function ArchitectureDiagram() {
  const box = { fill: "#ffffff", stroke: "#171717", strokeWidth: 3 };
  return (
    <svg viewBox="0 0 560 320" className="w-full" role="img" aria-label="Angular architecture diagram">
      <rect x="210" y="16" width="140" height="44" fill="#dd0031" />
      <text x="280" y="43" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">AppComponent</text>
      {[60, 220, 380].map((x, i) => (
        <g key={x}>
          <line x1="280" y1="60" x2={x + 60} y2="110" stroke="#171717" strokeWidth="2" />
          <rect x={x} y="110" width="120" height="44" {...box} />
          <text x={x + 60} y="137" textAnchor="middle" fontSize="13" fontWeight="600" fill="#171717">{["Header", "Dashboard", "Sidebar"][i]}</text>
          <line x1={x + 60} y1="154" x2="200" y2="216" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="5 4" />
        </g>
      ))}
      <rect x="130" y="216" width="140" height="44" fill="#171717" />
      <text x="200" y="243" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">UserService</text>
      <line x1="270" y1="238" x2="350" y2="238" stroke="#dd0031" strokeWidth="3" />
      <polygon points="350,231 362,238 350,245" fill="#dd0031" />
      <rect x="362" y="216" width="120" height="44" {...box} />
      <text x="422" y="243" textAnchor="middle" fontSize="14" fontWeight="700" fill="#171717">REST API</text>
      <text x="280" y="300" textAnchor="middle" fontSize="12" fill="#737373">Components show data. Services fetch it.</text>
    </svg>
  );
}

function DevicesIllustration() {
  return (
    <svg viewBox="0 0 520 300" className="w-full" role="img" aria-label="Laptop and phone showing an app">
      <rect x="46" y="46" width="300" height="190" fill="#dd0031" />
      <rect x="34" y="34" width="300" height="190" fill="#fff" stroke="#171717" strokeWidth="3" />
      <rect x="34" y="34" width="300" height="24" fill="#171717" />
      <rect x="50" y="76" width="120" height="14" fill="#171717" />
      <rect x="50" y="100" width="200" height="8" fill="#d4d4d4" />
      <rect x="50" y="118" width="170" height="8" fill="#d4d4d4" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={50 + i * 96} y="146" width="84" height="64" fill={i === 1 ? "#dd0031" : "#f5f5f5"} stroke="#171717" strokeWidth="2" />
      ))}
      <rect x="14" y="224" width="340" height="14" fill="#171717" />
      <rect x="380" y="50" width="116" height="220" rx="16" fill="#171717" />
      <rect x="390" y="72" width="96" height="176" fill="#fff" />
      <rect x="400" y="84" width="76" height="12" fill="#171717" />
      <rect x="400" y="106" width="76" height="46" fill="#fff5f6" stroke="#dd0031" strokeWidth="2" />
      <rect x="400" y="162" width="76" height="46" fill="#f5f5f5" stroke="#171717" strokeWidth="2" />
      <rect x="400" y="218" width="76" height="20" fill="#dd0031" />
    </svg>
  );
}

function AngularPage() {
  const stats = [
    { n: "2016", l: "Modern Angular launched by Google" },
    { n: "100%", l: "TypeScript based" },
    { n: "6 mo", l: "Regular release cycle" },
    { n: "Enterprise", l: "Built for large teams" },
  ];

  const why = [
    { title: "Complete Framework", text: "Routing, forms, HTTP, testing and animations are all included. No hunting for third-party libraries." },
    { title: "TypeScript by Default", text: "Static typing catches mistakes while you code and makes big codebases easier to understand." },
    { title: "Clear Structure", text: "Every developer follows the same patterns, so new team members become productive quickly." },
    { title: "Built-in Security", text: "Angular sanitizes data by default and helps protect against cross-site scripting attacks." },
    { title: "Long-Term Support", text: "Backed by Google with predictable releases and clear upgrade paths." },
    { title: "Great Tooling", text: "The Angular CLI generates, builds, tests and updates your project with simple commands." },
  ];

  const features = [
    {
      title: "Components",
      text: "Every screen is built from small, reusable components. Each one has its own template, styles and logic, so a change in one place never breaks another.",
      file: "user-card.component.ts",
      code: `@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
})
export class UserCardComponent {
  @Input() user!: User;
}`,
    },
    {
      title: "Services & Dependency Injection",
      text: "Business logic and API calls live in services. Angular injects them wherever they are needed, which keeps components clean and easy to test.",
      file: "user.service.ts",
      code: `@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}`,
    },
    {
      title: "RxJS & Reactive Data",
      text: "Live data, search-as-you-type and real-time updates are handled with observables, so screens react to changes without manual refreshing.",
      file: "search.component.ts",
      code: `this.results$ = this.search.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.find(term))
);`,
    },
  ];

  const tools = [
    { name: "Angular Router", text: "Multi-page navigation, lazy loading and route guards." },
    { name: "Reactive Forms", text: "Complex forms with validation and dynamic fields." },
    { name: "Angular Material", text: "Ready-made, accessible UI components." },
    { name: "NgRx", text: "Predictable state management for large apps." },
    { name: "Angular Universal", text: "Server-side rendering for speed and SEO." },
    { name: "Jasmine & Karma", text: "Unit and end-to-end testing built into the workflow." },
  ];

  const services = [
    { title: "Custom Angular Application Development", text: "Business web apps designed around your workflow, from CRMs and ERPs to booking systems." },
    { title: "Enterprise Dashboards & Portals", text: "Data-heavy admin panels with charts, tables, filters and role-based access." },
    { title: "Angular Migration & Upgrade", text: "Move from AngularJS or older Angular versions to the latest release safely." },
    { title: "Progressive Web Apps (PWA)", text: "Installable, offline-capable apps that work like native mobile apps." },
    { title: "API & Backend Integration", text: "Connect to Node, .NET, Java or PHP backends, payment gateways and third-party services." },
    { title: "Testing, Support & Maintenance", text: "Automated tests, bug fixes, performance tuning and ongoing updates." },
  ];

  const process = [
    { title: "Discovery", text: "We study your goals, users and existing systems." },
    { title: "Architecture", text: "We plan modules, routing, state and API structure." },
    { title: "UI Development", text: "We build reusable components and responsive screens." },
    { title: "Integration & Testing", text: "We connect APIs and test every feature." },
    { title: "Launch & Support", text: "We deploy, monitor and keep improving." },
  ];

  const industries = [
    { title: "Banking & Finance", text: "Secure portals, trading dashboards and reporting tools." },
    { title: "Healthcare", text: "Patient portals, appointment systems and records viewers." },
    { title: "E-commerce", text: "Admin panels, inventory tools and order management." },
    { title: "Logistics", text: "Live tracking dashboards and fleet management systems." },
    { title: "Education", text: "Learning platforms, student portals and exam systems." },
    { title: "Manufacturing", text: "Production monitoring and supply chain dashboards." },
  ];

  const compare = [
    ["Type", "Full framework", "UI library"],
    ["Language", "TypeScript", "JavaScript or TypeScript"],
    ["Built-in routing & forms", "Yes", "Needs extra libraries"],
    ["Best for", "Large, long-term enterprise apps", "Flexible apps of any size"],
    ["Learning curve", "Steeper, more structured", "Gentler at the start"],
  ];

  const faqs = [
    { q: "What is Angular used for?", a: "Angular is used to build single-page web applications such as dashboards, portals, CRMs and SaaS products that need to stay organized as they grow." },
    { q: "Is Angular better than React?", a: "Neither is better everywhere. Angular gives more structure out of the box, which suits large teams and long projects. React is lighter and more flexible. We help you choose." },
    { q: "Can you upgrade my old AngularJS application?", a: "Yes. We audit your code, plan an upgrade path and migrate step by step so your app keeps running during the move." },
    { q: "Is Angular good for SEO?", a: "Yes, with Angular server-side rendering (Angular Universal), pages are rendered on the server so search engines can read them." },
    { q: "How long does an Angular project take?", a: "A simple portal can take 4 to 6 weeks. Larger enterprise systems take a few months. We give you a clear timeline after discovery." },
    { q: "Do you provide support after launch?", a: "Yes. We offer maintenance plans that cover bug fixes, security updates and new features." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-neutral-800">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#fff7f7] px-6 py-24 md:px-16 md:py-32">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rotate-45 bg-[#dd0031]/10" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-[#dd0031]">Web Design & Development</p>
              <h1 className="mt-4 text-5xl font-black leading-tight text-neutral-900 md:text-7xl">
                Angular Development
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                We build fast, secure and well-structured web applications with Angular, from customer portals and admin dashboards to full enterprise platforms.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <h1 className="bg-[#dd0031] px-8 py-4 font-bold text-white transition hover:bg-[#b80028]">
                  Start your project
                </h1>
                <a  className="border-2 border-neutral-900 px-8 py-4 font-bold text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
                  See how we build
                </a>
              </div>
            </div>

            <HeroIllustration />
          </div>
        </section>

        {/* STATS */}
        <section className="bg-neutral-900 px-6 py-10 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="border-l-4 border-[#dd0031] pl-5">
                <p className="text-3xl font-black text-white">{s.n}</p>
                <p className="mt-1 text-sm text-neutral-400">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY ANGULAR */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-2xl text-3xl font-black text-neutral-900 md:text-5xl">Why companies choose Angular</h2>
            <div className="mt-12 grid gap-px bg-neutral-200 md:grid-cols-3">
              {why.map((w) => (
                <article key={w.title} className="bg-white p-8 transition hover:bg-[#dd0031] hover:text-white">
                  <h3 className="text-xl font-bold">{w.title}</h3>
                  <p className="mt-3 leading-7 opacity-80">{w.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES WITH CODE */}
        <section id="features" className="bg-neutral-100 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl space-y-20">
            <h2 className="max-w-2xl text-3xl font-black text-neutral-900 md:text-5xl">How Angular apps are built</h2>
            {features.map((f, i) => (
              <div key={f.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 md:text-3xl">{f.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-neutral-600">{f.text}</p>
                </div>
                <div className="bg-neutral-900 shadow-[8px_8px_0_#dd0031]">
                  <p className="border-b border-neutral-700 px-5 py-3 text-xs text-neutral-400">{f.file}</p>
                  <pre className="overflow-x-auto p-6 text-sm leading-7 text-neutral-200">{f.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <ArchitectureDiagram />
            <div>
              <h2 className="text-3xl font-black text-neutral-900 md:text-5xl">A clear structure that scales</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                We split every app into components for what users see and services for data and business rules. Each part can be changed or tested on its own.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700">
                <li className="border-l-4 border-[#dd0031] pl-4">Feature modules loaded only when needed</li>
                <li className="border-l-4 border-[#dd0031] pl-4">Shared services for API calls and state</li>
                <li className="border-l-4 border-[#dd0031] pl-4">Route guards for secure, role-based pages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="bg-neutral-100 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-neutral-900 md:text-5xl">Tools and libraries we use</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((t) => (
                <div key={t.name} className="border-2 border-neutral-900 bg-white p-6">
                  <p className="text-lg font-black text-[#dd0031]">{t.name}</p>
                  <p className="mt-2 text-neutral-600">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-neutral-900 px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-black md:text-5xl">Our Angular services</h2>
            <div className="mt-12 divide-y divide-neutral-700 border-y border-neutral-700">
              {services.map((s) => (
                <div key={s.title} className="grid gap-3 py-7 md:grid-cols-[1fr_1.2fr]">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <p className="leading-7 text-neutral-400">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIVE & PWA */}
        <section className="bg-neutral-100 px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div className="md:order-2">
              <DevicesIllustration />
            </div>
            <div>
              <h2 className="text-3xl font-black text-neutral-900 md:text-5xl">Works on every screen</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Your Angular app adapts to laptops, tablets and phones. As a Progressive Web App it can also be installed on a phone and keep working with a weak connection.
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700">
                <li className="border-l-4 border-[#dd0031] pl-4">Responsive layouts for every device</li>
                <li className="border-l-4 border-[#dd0031] pl-4">Installable app with offline support</li>
                <li className="border-l-4 border-[#dd0031] pl-4">Fast loading with lazy-loaded modules</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black text-neutral-900 md:text-5xl">Our development process</h2>
            <ol className="mt-12 border-l-4 border-[#dd0031]">
              {process.map((p, i) => (
                <li key={p.title} className="relative pb-10 pl-10 last:pb-0">
                  <span className="absolute -left-[18px] top-0 flex h-8 w-8 items-center justify-center bg-[#dd0031] text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900">{p.title}</h3>
                  <p className="mt-1 text-neutral-600">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-neutral-100 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-neutral-900 md:text-5xl">Industries we build for</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((d) => (
                <article key={d.title} className="border-t-8 border-[#dd0031] bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-neutral-900">{d.title}</h3>
                  <p className="mt-2 leading-7 text-neutral-600">{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-black text-neutral-900 md:text-5xl">Angular vs React at a glance</h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="bg-neutral-900 text-white">
                    <th className="p-4"> </th>
                    <th className="p-4 text-[#ff6b87]">Angular</th>
                    <th className="p-4">React</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row) => (
                    <tr key={row[0]} className="border-b border-neutral-200">
                      <td className="p-4 font-bold">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4 text-neutral-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-100 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl space-y-3">
            <h2 className="mb-10 text-3xl font-black text-neutral-900 md:text-5xl">Frequently asked questions</h2>
            {faqs.map((f) => (
              <details key={f.q} className="group border border-neutral-300 bg-white p-6 open:border-[#dd0031]">
                <summary className="cursor-pointer text-lg font-bold text-neutral-900">{f.q}</summary>
                <p className="mt-4 leading-7 text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#dd0031] px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-black md:text-5xl">Ready to build with Angular?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Tell us about your project and we will suggest the right architecture, timeline and team.
          </p>
          <h2 className="mt-8 inline-flex bg-white px-9 py-4 font-bold text-[#dd0031] transition hover:bg-neutral-100">
            Contact our team
          </h2>
        </section>

      </main>
    </>
  );
}

// ===================== REACT JS =====================
// function ReactPage() {
//   const features = [
//     { title: "Component-Based UI", text: "Build interfaces from small reusable pieces so large products stay consistent and easy to change.", wide: true },
//     { title: "Fast Rendering", text: "React updates only the parts of the screen that changed." },
//     { title: "Huge Ecosystem", text: "Routing, state and testing libraries for every need." },
//     { title: "Next.js Ready", text: "Add server rendering and SEO-friendly pages when your project needs them.", wide: true },
//   ];

//   const services = [
//     "Custom React web applications",
//     "Single page app development",
//     "Next.js websites and portals",
//     "React dashboards and admin panels",
//     "Migration from jQuery or legacy code",
//     "Performance tuning and code audits",
//   ];

//   const steps = [
//     { title: "Plan", text: "We define screens, data and user flows." },
//     { title: "Design", text: "We create the component structure and UI." },
//     { title: "Build", text: "We develop in short, reviewable sprints." },
//     { title: "Launch", text: "We test, deploy and support you after go-live." },
//   ];

//   const faqs = [
//     { q: "Should I choose React or Angular?", a: "React is flexible and light; Angular is a full framework. We help you pick based on team size and project scope." },
//     { q: "Can you build a mobile app too?", a: "Yes. We can reuse your React knowledge for React Native mobile apps." },
//     { q: "Will my site be SEO friendly?", a: "Yes. With Next.js we render pages on the server so search engines can read them." },
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="bg-[#0b1220] text-slate-200">

//         {/* HERO */}
//         <section className="relative overflow-hidden px-6 py-24 md:px-16 md:py-32">
//           <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
//           <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
//             <div>
//               <p className="text-sm font-semibold text-cyan-400">Web Design & Development</p>
//               <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
//                 React JS Development
//               </h1>
//               <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
//                 Fast, interactive web applications that feel smooth on every device, built by developers who ship React to production every day.
//               </p>
//               <Link href="/contact" className="mt-9 inline-flex rounded-lg bg-cyan-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-300">
//                 Start your project
//               </Link>
//             </div>

//             <div className="rounded-2xl border border-slate-700 bg-[#111a2e] shadow-2xl">
//               <div className="flex gap-2 border-b border-slate-700 px-5 py-3">
//                 <span className="h-3 w-3 rounded-full bg-red-400" />
//                 <span className="h-3 w-3 rounded-full bg-yellow-400" />
//                 <span className="h-3 w-3 rounded-full bg-green-400" />
//                 <span className="ml-3 text-xs text-slate-500">App.jsx</span>
//               </div>
//               <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
// {`function Dashboard() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers().then(setUsers);
//   }, []);

//   return <UserTable rows={users} />;
// }`}
//               </pre>
//             </div>
//           </div>
//         </section>

//         {/* BENTO FEATURES */}
//         <section className="px-6 pb-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">Why teams choose React</h2>
//             <div className="mt-10 grid gap-5 md:grid-cols-3">
//               {features.map((f) => (
//                 <article
//                   key={f.title}
//                   className={`rounded-3xl border border-slate-700 bg-gradient-to-br from-[#16213a] to-[#0f172a] p-8 ${f.wide ? "md:col-span-2" : ""}`}
//                 >
//                   <h3 className="text-xl font-bold text-cyan-300">{f.title}</h3>
//                   <p className="mt-3 leading-7 text-slate-400">{f.text}</p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="bg-[#0f172a] px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">What we build with React</h2>
//             <div className="mt-10 grid gap-4 md:grid-cols-2">
//               {services.map((s) => (
//                 <div key={s} className="flex items-center gap-4 rounded-xl border border-slate-700 bg-[#111a2e] px-6 py-5">
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">✓</span>
//                   <span>{s}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* PROCESS */}
//         <section className="px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">How we work</h2>
//             <div className="mt-10 grid gap-5 md:grid-cols-4">
//               {steps.map((s, i) => (
//                 <div key={s.title} className="rounded-2xl border border-slate-700 p-7">
//                   <span className="text-4xl font-bold text-cyan-400/60">{i + 1}</span>
//                   <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
//                   <p className="mt-2 text-sm leading-6 text-slate-400">{s.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="bg-[#0f172a] px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-4xl space-y-4">
//             <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Common questions</h2>
//             {faqs.map((f) => (
//               <details key={f.q} className="rounded-xl border border-slate-700 bg-[#111a2e] p-6">
//                 <summary className="cursor-pointer text-lg font-semibold text-white">{f.q}</summary>
//                 <p className="mt-4 leading-7 text-slate-400">{f.a}</p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-6 py-24 text-center md:px-16">
//           <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to build with React?</h2>
//           <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-cyan-400 px-9 py-4 font-semibold text-slate-900 hover:bg-cyan-300">
//             Contact our team
//           </Link>
//         </section>

//       </main>
//     </>
//   );
// }
// ===================== REACT JS =====================

function ReactHeroIllustration() {
  return (
    <svg viewBox="0 0 520 400" className="w-full" role="img" aria-label="React app illustration">
      <rect x="10" y="10" width="500" height="380" rx="24" fill="#111a2e" stroke="#334155" strokeWidth="2" />
      <rect x="10" y="10" width="500" height="44" rx="24" fill="#16213a" />
      <circle cx="38" cy="32" r="6" fill="#f87171" />
      <circle cx="58" cy="32" r="6" fill="#facc15" />
      <circle cx="78" cy="32" r="6" fill="#4ade80" />
      <g transform="translate(260 215)" fill="none" stroke="#22d3ee" strokeWidth="6">
        <ellipse rx="130" ry="50" />
        <ellipse rx="130" ry="50" transform="rotate(60)" />
        <ellipse rx="130" ry="50" transform="rotate(120)" />
        <circle r="18" fill="#22d3ee" stroke="none" />
      </g>
      <rect x="40" y="330" width="120" height="30" rx="8" fill="#0f172a" stroke="#334155" />
      <text x="100" y="350" textAnchor="middle" fontSize="12" fill="#94a3b8">useState()</text>
      <rect x="360" y="330" width="120" height="30" rx="8" fill="#0f172a" stroke="#334155" />
      <text x="420" y="350" textAnchor="middle" fontSize="12" fill="#94a3b8">useEffect()</text>
      <rect x="360" y="76" width="120" height="30" rx="8" fill="#0f172a" stroke="#22d3ee" />
      <text x="420" y="96" textAnchor="middle" fontSize="12" fill="#22d3ee">{"<Component />"}</text>
      <rect x="40" y="76" width="120" height="30" rx="8" fill="#0f172a" stroke="#22d3ee" />
      <text x="100" y="96" textAnchor="middle" fontSize="12" fill="#22d3ee">props</text>
    </svg>
  );
}

function ReactTreeDiagram() {
  const node = (x, y, label, hot) => (
    <g key={label}>
      <rect x={x} y={y} width="120" height="40" rx="10" fill={hot ? "#22d3ee" : "#111a2e"} stroke={hot ? "#22d3ee" : "#475569"} strokeWidth="2" />
      <text x={x + 60} y={y + 25} textAnchor="middle" fontSize="13" fontWeight="700" fill={hot ? "#0b1220" : "#e2e8f0"}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 560 320" className="w-full" role="img" aria-label="React component tree">
      <g stroke="#475569" strokeWidth="2" fill="none">
        <path d="M280 56 L110 110" />
        <path d="M280 56 L280 110" />
        <path d="M280 56 L450 110" />
        <path d="M280 150 L200 210" />
        <path d="M280 150 L360 210" />
      </g>
      {node(220, 16, "App", true)}
      {node(50, 110, "Header")}
      {node(220, 110, "Main")}
      {node(390, 110, "Footer")}
      {node(140, 210, "ProductList", true)}
      {node(300, 210, "Cart")}
      <text x="280" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8">Data flows down as props. Events flow up.</text>
    </svg>
  );
}

function ReactNativeIllustration() {
  return (
    <svg viewBox="0 0 520 320" className="w-full" role="img" aria-label="Web and mobile app from one codebase">
      <rect x="20" y="40" width="270" height="180" rx="14" fill="#111a2e" stroke="#334155" strokeWidth="2" />
      <rect x="20" y="40" width="270" height="26" rx="14" fill="#16213a" />
      <rect x="38" y="84" width="110" height="12" rx="6" fill="#22d3ee" />
      <rect x="38" y="106" width="190" height="8" rx="4" fill="#334155" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={38 + i * 82} y="132" width="72" height="64" rx="8" fill="#0f172a" stroke="#334155" />
      ))}
      <rect x="6" y="220" width="298" height="12" rx="6" fill="#334155" />
      <rect x="350" y="20" width="130" height="260" rx="22" fill="#0f172a" stroke="#22d3ee" strokeWidth="3" />
      <rect x="362" y="48" width="106" height="204" rx="6" fill="#111a2e" />
      <rect x="374" y="62" width="82" height="12" rx="6" fill="#22d3ee" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="374" y={86 + i * 52} width="82" height="42" rx="8" fill="#0f172a" stroke="#334155" />
      ))}
      <path d="M296 130 L340 130" stroke="#22d3ee" strokeWidth="3" strokeDasharray="6 5" />
      <text x="260" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8">One team, shared logic, web and mobile</text>
    </svg>
  );
}

function ReactPage() {
  const stats = [
    { n: "2013", l: "Created and open sourced by Meta" },
    { n: "#1", l: "Most used UI library among web developers" },
    { n: "Millions", l: "Of websites and apps built with React" },
    { n: "Web + Mobile", l: "With React and React Native" },
  ];

  const features = [
    { title: "Component-Based UI", text: "Build interfaces from small reusable pieces so large products stay consistent and easy to change.", wide: true },
    { title: "Fast Rendering", text: "React updates only the parts of the screen that changed." },
    { title: "Huge Ecosystem", text: "Routing, state and testing libraries for every need." },
    { title: "Next.js Ready", text: "Add server rendering and SEO-friendly pages when your project needs them.", wide: true },
    { title: "Easy to Hire For", text: "React is widely known, so growing your team is simple." },
    { title: "Backed by Meta", text: "Actively maintained with a strong open-source community.", wide: true },
  ];

  const code = [
    {
      title: "Reusable components",
      text: "A button, a card or a whole table is written once and used everywhere. When the design changes, you edit one file and the whole app updates.",
      file: "ProductCard.jsx",
      code: `function ProductCard({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to cart</button>
    </div>
  );
}`,
    },
    {
      title: "State with hooks",
      text: "Hooks keep screens in sync with data. When a value changes, React redraws only what is needed, so your app feels instant.",
      file: "Counter.jsx",
      code: `function Cart() {
  const [items, setItems] = useState([]);

  function add(product) {
    setItems([...items, product]);
  }

  return <p>{items.length} items</p>;
}`,
    },
    {
      title: "Server rendering with Next.js",
      text: "Pages can be prepared on the server, so they load fast and search engines can read them. This is how we build SEO-friendly React sites.",
      file: "app/products/page.js",
      code: `export default async function Products() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return <ProductList items={products} />;
}`,
    },
  ];

  const tools = [
    { name: "Next.js", text: "Server rendering, routing and SEO." },
    { name: "Redux Toolkit", text: "Predictable state for large apps." },
    { name: "React Query", text: "Fetching, caching and syncing server data." },
    { name: "React Router", text: "Navigation for single page apps." },
    { name: "Tailwind CSS", text: "Fast, consistent styling." },
    { name: "Jest & Testing Library", text: "Reliable automated tests." },
    { name: "TypeScript", text: "Safer code in bigger projects." },
    { name: "Vite", text: "Very fast builds and dev server." },
  ];

  const services = [
    "Custom React web applications",
    "Single page app development",
    "Next.js websites and portals",
    "React dashboards and admin panels",
    "E-commerce storefronts",
    "React Native mobile apps",
    "Migration from jQuery or legacy code",
    "Performance tuning and code audits",
  ];

  const steps = [
    { title: "Plan", text: "We define screens, data and user flows." },
    { title: "Design", text: "We create the component structure and UI." },
    { title: "Build", text: "We develop in short, reviewable sprints." },
    { title: "Test", text: "We check every feature on real devices." },
    { title: "Launch", text: "We deploy and support you after go-live." },
  ];

  const industries = [
    { title: "E-commerce", text: "Fast storefronts, carts and checkout flows." },
    { title: "SaaS", text: "Multi-user dashboards and subscription products." },
    { title: "Fintech", text: "Live charts, transaction tables and secure portals." },
    { title: "Healthcare", text: "Booking systems and patient portals." },
    { title: "Media", text: "Content-heavy sites with instant page changes." },
    { title: "Education", text: "Learning platforms and interactive lessons." },
  ];

  const compare = [
    ["Page updates", "Only changed parts redraw", "Manual DOM changes"],
    ["Code reuse", "Reusable components", "Copy and paste scripts"],
    ["Large projects", "Stays organized", "Becomes hard to manage"],
    ["Mobile apps", "Shared logic with React Native", "Not possible"],
    ["Community", "Very large, active", "Mostly legacy"],
  ];

  const faqs = [
    { q: "Should I choose React or Angular?", a: "React is flexible and light; Angular is a full framework. We help you pick based on team size and project scope." },
    { q: "Can you build a mobile app too?", a: "Yes. We can reuse your React knowledge for React Native mobile apps." },
    { q: "Will my site be SEO friendly?", a: "Yes. With Next.js we render pages on the server so search engines can read them." },
    { q: "Can you move my old website to React?", a: "Yes. We migrate page by page, so your site stays live during the move." },
    { q: "How long does a React project take?", a: "A marketing site can take 2 to 4 weeks. A full web app usually takes 2 to 4 months. You get a clear plan after discovery." },
    { q: "Do you offer support after launch?", a: "Yes. We offer maintenance plans for updates, bug fixes and new features." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#0b1220] text-slate-200">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 py-24 md:px-16 md:py-32">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-cyan-400">Web Design & Development</p>
              <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
                React JS Development
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Fast, interactive web applications that feel smooth on every device, built by developers who ship React to production every day.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <h1 className="rounded-lg bg-cyan-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-300">
                  Start your project
                </h1>
                <a  className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-white transition hover:border-cyan-400">
                  See how we build
                </a>
              </div>
            </div>
            <ReactHeroIllustration />
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 pb-20 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-700 bg-[#111a2e] p-6">
                <p className="text-2xl font-bold text-cyan-300 md:text-3xl">{s.n}</p>
                <p className="mt-2 text-sm text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENTO FEATURES */}
        <section className="px-6 pb-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Why teams choose React</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className={`rounded-3xl border border-slate-700 bg-gradient-to-br from-[#16213a] to-[#0f172a] p-8 ${f.wide ? "md:col-span-2" : ""}`}
                >
                  <h3 className="text-xl font-bold text-cyan-300">{f.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CODE SECTIONS */}
        <section id="how" className="bg-[#0f172a] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl space-y-20">
            <h2 className="text-3xl font-bold text-white md:text-4xl">How React apps are built</h2>
            {code.map((c, i) => (
              <div key={c.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300">{c.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-400">{c.text}</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-[#111a2e] shadow-2xl">
                  <p className="border-b border-slate-700 px-5 py-3 text-xs text-slate-500">{c.file}</p>
                  <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">{c.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPONENT TREE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <ReactTreeDiagram />
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">A structure that grows with you</h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                A React app is a tree of small components. Each one does one job, so it is easy to test, reuse and change without breaking the rest.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="rounded-lg border border-slate-700 bg-[#111a2e] px-5 py-3">Shared UI kit for consistent design</li>
                <li className="rounded-lg border border-slate-700 bg-[#111a2e] px-5 py-3">Clear data flow with props and state</li>
                <li className="rounded-lg border border-slate-700 bg-[#111a2e] px-5 py-3">Code splitting for faster first load</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="bg-[#0f172a] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Tools and libraries we use</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((t) => (
                <div key={t.name} className="rounded-2xl border border-slate-700 bg-[#111a2e] p-6">
                  <p className="font-bold text-cyan-300">{t.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">What we build with React</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-4 rounded-xl border border-slate-700 bg-[#111a2e] px-6 py-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REACT NATIVE */}
        <section className="bg-[#0f172a] px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div className="md:order-2">
              <ReactNativeIllustration />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">From web to mobile with React Native</h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Once your web app is in React, your team can build iOS and Android apps with React Native and share much of the logic, saving time and cost.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="rounded-lg border border-slate-700 bg-[#111a2e] px-5 py-3">One team for web and mobile</li>
                <li className="rounded-lg border border-slate-700 bg-[#111a2e] px-5 py-3">Native performance on iOS and Android</li>
                <li className="rounded-lg border border-slate-700 bg-[#111a2e] px-5 py-3">Faster releases and lower cost</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">How we work</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-5">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-slate-700 p-7">
                  <span className="text-4xl font-bold text-cyan-400/60">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-[#0f172a] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Industries we build for</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((d) => (
                <article key={d.title} className="rounded-3xl border border-slate-700 bg-gradient-to-br from-[#16213a] to-[#0f172a] p-8">
                  <h3 className="text-xl font-bold text-cyan-300">{d.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">React vs a jQuery-style website</h2>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-700">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#16213a]">
                    <th className="p-4"> </th>
                    <th className="p-4 text-cyan-300">React</th>
                    <th className="p-4 text-slate-400">jQuery / plain scripts</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row) => (
                    <tr key={row[0]} className="border-t border-slate-700">
                      <td className="p-4 font-semibold text-white">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4 text-slate-400">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0f172a] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Common questions</h2>
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-slate-700 bg-[#111a2e] p-6">
                <summary className="cursor-pointer text-lg font-semibold text-white">{f.q}</summary>
                <p className="mt-4 leading-7 text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 text-center md:px-16">
          <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to build with React?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Tell us about your idea and we will suggest the right stack, timeline and team.
          </p>
          <h2 className="mt-8 inline-flex rounded-lg bg-cyan-400 px-9 py-4 font-semibold text-slate-900 hover:bg-cyan-300">
            Contact our team
          </h2>
        </section>

      </main>
    </>
  );
}

// ===================== NODE JS =====================

function NodeHeroIllustration() {
  return (
    <svg viewBox="0 0 520 400" className="w-full" role="img" aria-label="Node.js server illustration">
      <rect x="10" y="10" width="500" height="380" rx="12" fill="#0d1f14" />
      <rect x="10" y="10" width="500" height="36" rx="12" fill="#173424" />
      <circle cx="34" cy="28" r="5" fill="#4ade80" />
      <circle cx="52" cy="28" r="5" fill="#166534" />
      <circle cx="70" cy="28" r="5" fill="#166534" />
      <text x="96" y="32" fontSize="12" fill="#86efac">server.js</text>
      <polygon points="260,90 330,130 330,210 260,250 190,210 190,130" fill="none" stroke="#22c55e" strokeWidth="6" />
      <text x="260" y="192" textAnchor="middle" fontSize="44" fontWeight="800" fill="#22c55e">JS</text>
      {[
        [50, 290, "GET /users"],
        [190, 310, "POST /orders"],
        [340, 290, "GET /products"],
      ].map(([x, y, label]) => (
        <g key={label}>
          <rect x={x} y={y} width="130" height="34" rx="6" fill="#173424" stroke="#22c55e" />
          <text x={x + 65} y={y + 22} textAnchor="middle" fontSize="12" fill="#86efac">{label}</text>
          <line x1={x + 65} y1={y} x2="260" y2="250" stroke="#166534" strokeWidth="2" strokeDasharray="5 4" />
        </g>
      ))}
      <text x="260" y="378" textAnchor="middle" fontSize="12" fill="#4ade80">One event loop. Thousands of requests.</text>
    </svg>
  );
}

function NodeArchitectureDiagram() {
  const box = (x, y, w, label, dark) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height="44" rx="8" fill={dark ? "#14532d" : "#ffffff"} stroke="#16a34a" strokeWidth="2" />
      <text x={x + w / 2} y={y + 27} textAnchor="middle" fontSize="13" fontWeight="700" fill={dark ? "#ffffff" : "#14532d"}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 560 320" className="w-full" role="img" aria-label="Node.js backend architecture">
      {box(20, 16, 130, "Web App")}
      {box(215, 16, 130, "Mobile App")}
      {box(410, 16, 130, "Partner API")}
      <g stroke="#16a34a" strokeWidth="2" fill="none">
        <path d="M85 60 L280 120" />
        <path d="M280 60 L280 120" />
        <path d="M475 60 L280 120" />
      </g>
      {box(190, 120, 180, "API Gateway (Node.js)", true)}
      <g stroke="#16a34a" strokeWidth="2" fill="none">
        <path d="M280 164 L85 220" />
        <path d="M280 164 L280 220" />
        <path d="M280 164 L475 220" />
      </g>
      {box(20, 220, 130, "Auth Service")}
      {box(215, 220, 130, "Orders Service")}
      {box(410, 220, 130, "Payments")}
      <text x="280" y="300" textAnchor="middle" fontSize="12" fill="#4b5563">Small services, one clear entry point.</text>
    </svg>
  );
}

function NodeRealtimeIllustration() {
  return (
    <svg viewBox="0 0 520 300" className="w-full" role="img" aria-label="Real-time messages between users and server">
      <rect x="200" y="100" width="120" height="100" rx="10" fill="#14532d" />
      <text x="260" y="145" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">Node.js</text>
      <text x="260" y="168" textAnchor="middle" fontSize="12" fill="#86efac">WebSocket</text>
      {[
        [30, 40, "Chat"],
        [30, 210, "Tracking"],
        [400, 40, "Alerts"],
        [400, 210, "Dashboard"],
      ].map(([x, y, label]) => (
        <g key={label}>
          <rect x={x} y={y} width="90" height="50" rx="10" fill="#ffffff" stroke="#16a34a" strokeWidth="2" />
          <text x={x + 45} y={y + 30} textAnchor="middle" fontSize="13" fontWeight="600" fill="#14532d">{label}</text>
          <line x1={x + 45} y1={y + 25} x2="260" y2="150" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 5" />
        </g>
      ))}
      <text x="260" y="285" textAnchor="middle" fontSize="12" fill="#4b5563">Data is pushed instantly, no page refresh.</text>
    </svg>
  );
}

function NodePage() {
  const stats = [
    { n: "2009", l: "Node.js first released" },
    { n: "V8", l: "Same engine that powers Chrome" },
    { n: "npm", l: "One of the largest package registries" },
    { n: "Real-time", l: "Built for live, connected apps" },
  ];

  const benefits = [
    { title: "One Language Everywhere", text: "JavaScript on both frontend and backend means faster teamwork and less context switching." },
    { title: "Built for Speed", text: "Non-blocking I/O handles thousands of connections at the same time." },
    { title: "Real-Time Ready", text: "Chat, live tracking and notifications work naturally with WebSockets." },
    { title: "Massive npm Library", text: "Reuse trusted packages instead of writing everything from scratch." },
    { title: "Easy to Scale", text: "Split your app into microservices and scale only the parts under load." },
    { title: "Great for JSON APIs", text: "JSON is native to JavaScript, so data moves between server and browser without conversion." },
  ];

  const code = [
    {
      title: "Build a REST API in minutes",
      text: "With Express, each route is a few lines. Your web and mobile apps call these endpoints to read and save data.",
      file: "routes/orders.js",
      code: `router.get("/orders", async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});

router.post("/orders", async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
});`,
    },
    {
      title: "Protect every request",
      text: "Middleware runs before your routes. We use it for login checks, rate limiting and validation so bad requests never reach your data.",
      file: "middleware/auth.js",
      code: `function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Please log in" });
  }
}`,
    },
    {
      title: "Push live updates with Socket.IO",
      text: "Instead of asking the server again and again, clients stay connected and receive new data the moment it exists.",
      file: "socket.js",
      code: `io.on("connection", (socket) => {
  socket.on("chat:message", (msg) => {
    io.to(msg.room).emit("chat:message", msg);
  });
});`,
    },
  ];

  const tools = [
    { name: "Express", text: "Fast, minimal web framework." },
    { name: "NestJS", text: "Structured framework for large backends." },
    { name: "Socket.IO", text: "Real-time two-way communication." },
    { name: "Prisma & Mongoose", text: "Database access for SQL and MongoDB." },
    { name: "JWT & OAuth", text: "Secure login and access control." },
    { name: "Docker", text: "Same setup on every machine and server." },
    { name: "Jest", text: "Automated testing for APIs." },
    { name: "PM2 & Nginx", text: "Process management and load balancing." },
  ];

  const services = [
    { title: "REST & GraphQL APIs", text: "Clean, documented APIs for your web and mobile apps." },
    { title: "Real-Time Applications", text: "Chat, live dashboards and instant notifications." },
    { title: "Microservices", text: "Small independent services that scale on their own." },
    { title: "Third-Party Integrations", text: "Payments, CRMs, email and SMS connected to your system." },
    { title: "Cloud Deployment", text: "Docker, CI/CD and hosting on AWS or Azure." },
    { title: "API Security", text: "Authentication, rate limiting and data protection." },
    { title: "Backend for Mobile Apps", text: "Login, push notifications and data sync for iOS and Android." },
    { title: "Performance Tuning", text: "Caching, query tuning and load testing." },
  ];

  const steps = ["Requirements", "API Design", "Development", "Testing", "Deployment"];

  const useCases = [
    { title: "Chat & Messaging", text: "Instant messages, typing indicators and group rooms." },
    { title: "Live Tracking", text: "Delivery, fleet and ride tracking on a map." },
    { title: "E-commerce Backends", text: "Carts, orders, payments and inventory." },
    { title: "Streaming & Media", text: "Handle large files and video without blocking." },
    { title: "IoT Platforms", text: "Receive data from thousands of devices at once." },
    { title: "SaaS Products", text: "Multi-tenant APIs with billing and roles." },
  ];

  const compare = [
    ["Handling many users", "Non-blocking, handles many at once", "One thread per request, heavier"],
    ["Language", "JavaScript / TypeScript", "PHP, Java, Python and others"],
    ["Real-time features", "Native and easy", "Needs extra setup"],
    ["Best for", "APIs, real-time, microservices", "CPU-heavy or legacy systems"],
  ];

  const faqs = [
    { q: "Is Node.js good for large applications?", a: "Yes. Many large platforms use Node.js with microservices to scale reliably." },
    { q: "Which database do you pair it with?", a: "Most often MongoDB or PostgreSQL, depending on how structured your data is." },
    { q: "Is Node.js secure?", a: "Yes, when built correctly. We use input validation, authentication, rate limiting, HTTPS and regular dependency updates." },
    { q: "Can Node.js power my mobile app?", a: "Yes. Node.js is a common backend for iOS and Android apps, handling login, data and notifications." },
    { q: "Node.js or PHP: which is better?", a: "Node.js suits real-time and API-driven products. PHP is great for content sites and quick business tools. We help you choose." },
    { q: "Do you offer maintenance after launch?", a: "Yes. We offer monitoring, updates and support plans." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#f3faf3] text-gray-800">

        {/* HERO */}
        <section className="px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <span className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                Web Design & Development
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-green-950 md:text-6xl">
                Node JS Development
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Fast, scalable backends and APIs that power your web and mobile products, from a simple service to a full real-time platform.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <p className="rounded-md bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
                  Get a free consultation
                </p>
                <a  className="rounded-md border-2 border-green-700 px-8 py-4 font-semibold text-green-800 transition hover:bg-green-700 hover:text-white">
                  See how we build
                </a>
              </div>
            </div>
            <NodeHeroIllustration />
          </div>
        </section>

        {/* STATS */}
        <section className="bg-green-950 px-6 py-10 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="border-l-4 border-green-400 pl-5">
                <p className="text-3xl font-extrabold text-white">{s.n}</p>
                <p className="mt-1 text-sm text-green-200">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">Why choose Node.js</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {benefits.map((b) => (
                <article key={b.title} className="border-l-8 border-green-500 bg-[#f3faf3] p-8">
                  <h3 className="text-xl font-bold text-green-900">{b.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CODE SECTIONS */}
        <section id="how" className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl space-y-20">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">How Node.js backends are built</h2>
            {code.map((c, i) => (
              <div key={c.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold text-green-900">{c.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-gray-600">{c.text}</p>
                </div>
                <div className="overflow-hidden rounded-xl bg-[#0d1f14] shadow-2xl">
                  <p className="bg-[#173424] px-5 py-3 text-xs text-green-300">{c.file}</p>
                  <pre className="overflow-x-auto p-6 text-sm leading-7 text-green-400">{c.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <NodeArchitectureDiagram />
            <div>
              <h2 className="text-3xl font-bold text-green-950 md:text-4xl">One backend for every app</h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Your website, mobile app and partners all talk to the same API. Behind it, separate services handle login, orders and payments, so each can grow on its own.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="border-l-8 border-green-500 bg-[#f3faf3] px-5 py-3">API gateway with rate limiting and logging</li>
                <li className="border-l-8 border-green-500 bg-[#f3faf3] px-5 py-3">Independent services that deploy separately</li>
                <li className="border-l-8 border-green-500 bg-[#f3faf3] px-5 py-3">Central authentication with JWT</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">Tools and frameworks we use</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((t) => (
                <div key={t.name} className="rounded-xl bg-white p-6 ring-1 ring-green-200">
                  <p className="font-bold text-green-700">{t.name}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">Our Node.js services</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.title} className="rounded-2xl bg-[#f3faf3] p-7 ring-1 ring-green-100 transition hover:ring-green-500">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-xl font-bold text-white">
                    {s.title[0]}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REAL-TIME */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div className="md:order-2">
              <NodeRealtimeIllustration />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-950 md:text-4xl">Real-time features that feel instant</h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                With WebSockets, the server sends data the moment something changes. Users see new messages, order updates and live numbers without refreshing the page.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="border-l-8 border-green-500 bg-white px-5 py-3">Live chat and notifications</li>
                <li className="border-l-8 border-green-500 bg-white px-5 py-3">Order and delivery tracking</li>
                <li className="border-l-8 border-green-500 bg-white px-5 py-3">Dashboards that update on their own</li>
              </ul>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">What Node.js is used for</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((u) => (
                <article key={u.title} className="border-t-8 border-green-500 bg-[#f3faf3] p-7">
                  <h3 className="text-xl font-bold text-green-900">{u.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{u.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-green-950 px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold md:text-4xl">Our process</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {steps.map((s, i) => (
                <div key={s} className="rounded-lg border border-green-700 p-6 text-center">
                  <p className="text-3xl font-bold text-green-400">{i + 1}</p>
                  <p className="mt-2 font-semibold">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">Node.js vs traditional backends</h2>
            <div className="mt-10 overflow-x-auto rounded-xl ring-1 ring-green-200">
              <table className="w-full min-w-[520px] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="p-4"> </th>
                    <th className="p-4">Node.js</th>
                    <th className="p-4">Traditional server</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row) => (
                    <tr key={row[0]} className="border-t border-green-100">
                      <td className="p-4 font-semibold text-green-950">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4 text-gray-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="mb-8 text-3xl font-bold text-green-950 md:text-4xl">Frequently asked questions</h2>
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg bg-[#f3faf3] p-6 ring-1 ring-green-100">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">{f.q}</summary>
                <p className="mt-4 leading-7 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Need a fast, reliable backend?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-50">
            Tell us what you are building and we will suggest the right architecture and timeline.
          </p>
          <p className="mt-8 inline-flex rounded-md bg-white px-9 py-4 font-bold text-green-700 hover:bg-green-50">
            Talk to our team
          </p>
        </section>

      </main>
    </>
  );
}
// ===================== MONGODB =====================


/* ============================================================
   INLINE SVG ILLUSTRATIONS
   (self-contained, no image files needed, scale on any screen)
   ============================================================ */

function ReplicaSetDiagram() {
  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" role="img" aria-label="MongoDB replica set with one primary and two secondary nodes">
      <rect width="520" height="320" fill="#02303f" />
      {/* App */}
      <rect x="190" y="20" width="140" height="44" rx="10" fill="#0b4a5e" stroke="#34d399" strokeOpacity="0.5" />
      <text x="260" y="47" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">Application</text>
      {/* arrow app -> primary */}
      <line x1="260" y1="64" x2="260" y2="112" stroke="#34d399" strokeWidth="2" />
      <polygon points="254,108 266,108 260,120" fill="#34d399" />
      <text x="272" y="94" fill="#94a3b8" fontSize="11">reads &amp; writes</text>
      {/* Primary */}
      <rect x="170" y="120" width="180" height="70" rx="14" fill="#34d399" />
      <text x="260" y="150" textAnchor="middle" fill="#00212f" fontSize="16" fontWeight="700">Primary</text>
      <text x="260" y="172" textAnchor="middle" fill="#00212f" fontSize="12">accepts all writes</text>
      {/* replication lines */}
      <path d="M215 190 L120 240" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 5" fill="none" />
      <path d="M305 190 L400 240" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 5" fill="none" />
      <text x="88" y="222" fill="#94a3b8" fontSize="11">replication</text>
      <text x="380" y="222" fill="#94a3b8" fontSize="11">replication</text>
      {/* Secondaries */}
      <rect x="30" y="240" width="180" height="60" rx="14" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="120" y="268" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="600">Secondary 1</text>
      <text x="120" y="287" textAnchor="middle" fill="#94a3b8" fontSize="11">copy of data</text>
      <rect x="310" y="240" width="180" height="60" rx="14" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="400" y="268" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="600">Secondary 2</text>
      <text x="400" y="287" textAnchor="middle" fill="#94a3b8" fontSize="11">copy of data</text>
    </svg>
  );
}

function ShardingDiagram() {
  const shard = (x, label) => (
    <g key={label}>
      <rect x={x} y="220" width="140" height="70" rx="12" fill="#0b4a5e" stroke="#34d399" strokeOpacity="0.6" />
      <ellipse cx={x + 70} cy="242" rx="34" ry="8" fill="#34d399" fillOpacity="0.85" />
      <rect x={x + 36} y="242" width="68" height="20" fill="#34d399" fillOpacity="0.55" />
      <ellipse cx={x + 70} cy="262" rx="34" ry="8" fill="#34d399" fillOpacity="0.85" />
      <text x={x + 70} y="282" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" role="img" aria-label="MongoDB sharded cluster with a query router and three shards">
      <rect width="520" height="320" fill="#02303f" />
      <rect x="190" y="14" width="140" height="40" rx="10" fill="#0b4a5e" stroke="#34d399" strokeOpacity="0.5" />
      <text x="260" y="39" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">Application</text>
      <line x1="260" y1="54" x2="260" y2="82" stroke="#34d399" strokeWidth="2" />
      <rect x="170" y="82" width="180" height="46" rx="12" fill="#34d399" />
      <text x="260" y="110" textAnchor="middle" fill="#00212f" fontSize="14" fontWeight="700">mongos (query router)</text>
      {/* config servers */}
      <rect x="392" y="82" width="110" height="46" rx="10" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="447" y="103" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">Config</text>
      <text x="447" y="118" textAnchor="middle" fill="#94a3b8" fontSize="10">cluster metadata</text>
      <line x1="350" y1="105" x2="392" y2="105" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* routes */}
      <path d="M215 128 L100 220" stroke="#34d399" strokeWidth="2" fill="none" />
      <line x1="260" y1="128" x2="260" y2="220" stroke="#34d399" strokeWidth="2" />
      <path d="M305 128 L420 220" stroke="#34d399" strokeWidth="2" fill="none" />
      {shard(30, "Shard A")}
      {shard(190, "Shard B")}
      {shard(350, "Shard C")}
      <text x="260" y="312" textAnchor="middle" fill="#94a3b8" fontSize="11">Data is split by shard key across servers</text>
    </svg>
  );
}

function PipelineDiagram() {
  const stages = [
    ["$match", "Filter"],
    ["$group", "Summarize"],
    ["$sort", "Order"],
    ["$project", "Shape"],
  ];
  return (
    <svg viewBox="0 0 760 170" className="h-full w-full" role="img" aria-label="Aggregation pipeline: match, group, sort, project">
      <rect width="760" height="170" fill="#02303f" />
      <rect x="14" y="55" width="96" height="60" rx="12" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="62" y="82" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="600">Raw</text>
      <text x="62" y="100" textAnchor="middle" fill="#94a3b8" fontSize="11">documents</text>
      {stages.map(([name, text], i) => {
        const x = 150 + i * 145;
        return (
          <g key={name}>
            <line x1={x - 40} y1="85" x2={x} y2="85" stroke="#34d399" strokeWidth="2" />
            <polygon points={`${x - 6},79 ${x - 6},91 ${x + 2},85`} fill="#34d399" />
            <rect x={x + 2} y="50" width="112" height="70" rx="12" fill="#34d399" fillOpacity={0.95 - i * 0.12} />
            <text x={x + 58} y="82" textAnchor="middle" fill="#00212f" fontSize="15" fontWeight="700">{name}</text>
            <text x={x + 58} y="102" textAnchor="middle" fill="#00212f" fontSize="11">{text}</text>
          </g>
        );
      })}
      <text x="380" y="150" textAnchor="middle" fill="#94a3b8" fontSize="11">Each stage transforms the output of the previous stage</text>
    </svg>
  );
}

function MigrationDiagram() {
  const box = (x, y, w, title, sub, fill, stroke, dark) => (
    <g key={title}>
      <rect x={x} y={y} width={w} height="64" rx="12" fill={fill} stroke={stroke} />
      <text x={x + w / 2} y={y + 28} textAnchor="middle" fill={dark ? "#00212f" : "#e2e8f0"} fontSize="14" fontWeight="700">{title}</text>
      <text x={x + w / 2} y={y + 47} textAnchor="middle" fill={dark ? "#00212f" : "#94a3b8"} fontSize="11">{sub}</text>
    </g>
  );
  const arrow = (x) => (
    <g key={x}>
      <line x1={x} y1="90" x2={x + 34} y2="90" stroke="#34d399" strokeWidth="2" />
      <polygon points={`${x + 30},84 ${x + 30},96 ${x + 40},90`} fill="#34d399" />
    </g>
  );
  return (
    <svg viewBox="0 0 800 180" className="h-full w-full" role="img" aria-label="Data migration flow from source systems to MongoDB">
      <rect width="800" height="180" fill="#02303f" />
      {box(16, 20, 130, "MySQL", "tables & rows", "#0b4a5e", "#22d3ee")}
      {box(16, 96, 130, "SQL Server / Excel", "legacy data", "#0b4a5e", "#22d3ee")}
      <path d="M146 52 L200 88" stroke="#34d399" strokeWidth="2" fill="none" />
      <path d="M146 128 L200 92" stroke="#34d399" strokeWidth="2" fill="none" />
      {box(200, 58, 130, "Analyze", "map the schema", "#0b4a5e", "#34d399")}
      {arrow(334)}
      {box(376, 58, 130, "Transform", "clean & reshape", "#0b4a5e", "#34d399")}
      {arrow(510)}
      {box(552, 58, 110, "Validate", "counts & checks", "#0b4a5e", "#34d399")}
      {arrow(666)}
      {box(708, 58, 84, "MongoDB", "live", "#34d399", "#34d399", true)}
    </svg>
  );
}

function ModelingDiagram() {
  return (
    <svg viewBox="0 0 760 300" className="h-full w-full" role="img" aria-label="Embedded documents versus referenced documents in MongoDB">
      <rect width="760" height="300" fill="#02303f" />
      {/* Embedded */}
      <text x="180" y="30" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="700">Embedding</text>
      <rect x="40" y="46" width="280" height="200" rx="14" fill="#0b4a5e" stroke="#34d399" />
      <text x="60" y="74" fill="#e2e8f0" fontSize="13" fontWeight="600">order</text>
      <text x="60" y="96" fill="#94a3b8" fontSize="12">_id, customer, total</text>
      <rect x="60" y="112" width="240" height="46" rx="8" fill="#34d399" fillOpacity="0.9" />
      <text x="72" y="140" fill="#00212f" fontSize="12" fontWeight="600">items[0]: Laptop × 1</text>
      <rect x="60" y="168" width="240" height="46" rx="8" fill="#34d399" fillOpacity="0.7" />
      <text x="72" y="196" fill="#00212f" fontSize="12" fontWeight="600">items[1]: Mouse × 2</text>
      <text x="180" y="272" textAnchor="middle" fill="#94a3b8" fontSize="11">One read returns everything</text>
      {/* Referenced */}
      <text x="580" y="30" textAnchor="middle" fill="#22d3ee" fontSize="14" fontWeight="700">Referencing</text>
      <rect x="430" y="46" width="140" height="90" rx="14" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="500" y="76" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="600">orders</text>
      <text x="500" y="98" textAnchor="middle" fill="#94a3b8" fontSize="11">customerId: 42</text>
      <text x="500" y="116" textAnchor="middle" fill="#94a3b8" fontSize="11">productIds: [...]</text>
      <rect x="610" y="46" width="130" height="40" rx="12" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="675" y="71" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">customers</text>
      <rect x="610" y="100" width="130" height="40" rx="12" fill="#0b4a5e" stroke="#22d3ee" />
      <text x="675" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">products</text>
      <path d="M570 70 L610 66" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M570 110 L610 120" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 4" />
      <text x="580" y="176" textAnchor="middle" fill="#94a3b8" fontSize="12">Shared data lives in one place</text>
      <text x="580" y="196" textAnchor="middle" fill="#94a3b8" fontSize="12">and is linked by id</text>
      <text x="580" y="272" textAnchor="middle" fill="#94a3b8" fontSize="11">Better for data that is reused or grows without limit</text>
    </svg>
  );
}

function MongoDbPage() {
  const benefits = [
    {
      title: "Flexible Document Model",
      text: "Store application data in JSON-like documents that can evolve as your product and business requirements change.",
    },
    {
      title: "Horizontal Scalability",
      text: "MongoDB supports horizontal scaling through sharding, allowing large workloads to be distributed across multiple servers.",
    },
    {
      title: "Powerful Queries",
      text: "Indexes, filtering and aggregation pipelines help applications search, transform and analyze data efficiently.",
    },
    {
      title: "High Availability",
      text: "Replica sets provide redundancy and automatic failover so applications can continue operating when a server becomes unavailable.",
    },
    {
      title: "Multi-Document Transactions",
      text: "When your business logic needs all-or-nothing updates across several documents, MongoDB supports ACID transactions.",
    },
    {
      title: "Rich Ecosystem",
      text: "Official drivers, Mongoose, MongoDB Compass and Atlas tooling make development, inspection and deployment faster.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "MongoDB Database Design",
      text: "Design collections, documents, relationships and indexes around your application's actual access patterns.",
    },
    {
      number: "02",
      title: "MongoDB Atlas Setup",
      text: "Configure managed MongoDB Atlas environments, backups, monitoring, security and deployment settings.",
    },
    {
      number: "03",
      title: "Data Migration",
      text: "Move application data from MySQL, SQL Server, Excel or existing systems into MongoDB with structured migration planning.",
    },
    {
      number: "04",
      title: "Performance Optimization",
      text: "Identify inefficient queries, analyze indexes and optimize database operations for better application performance.",
    },
    {
      number: "05",
      title: "Aggregation & Reporting",
      text: "Build aggregation pipelines that transform application data into useful dashboards, reports and analytics.",
    },
    {
      number: "06",
      title: "Security & Backup",
      text: "Implement access control, secure connections, backup strategies and recovery processes for production systems.",
    },
    {
      number: "07",
      title: "API & Backend Development",
      text: "Build Node.js and Express REST APIs with Mongoose models, validation and authentication on top of MongoDB.",
    },
    {
      number: "08",
      title: "Support & Maintenance",
      text: "Ongoing monitoring, index reviews, version upgrades and troubleshooting for databases already in production.",
    },
  ];

  const useCases = [
    {
      title: "E-commerce Applications",
      text: "Manage products, customers, carts, orders and inventory using flexible document structures.",
      image: "/assets/images/mongodb-ecommerce.png",
    },
    {
      title: "SaaS Platforms",
      text: "Build scalable application databases for users, subscriptions, organizations and business workflows.",
      image: "/assets/images/mongodb-saas.png",
    },
    {
      title: "Real-Time Applications",
      text: "Support applications that work with continuously changing data and dynamic user experiences.",
      image: "/assets/images/mongodb-realtime.png",
    },
    {
      title: "Analytics Platforms",
      text: "Use aggregation pipelines to transform application data into meaningful reports and dashboards.",
      image: "/assets/images/mongodb-analytics.png",
    },
    {
      title: "Content & CMS Platforms",
      text: "Store articles, pages, media metadata and custom fields whose structure differs from one content type to the next.",
      image: "/assets/images/mongodb-cms.png",
    },
    {
      title: "Mobile App Backends",
      text: "Power user profiles, notifications, preferences and activity feeds for iOS and Android applications.",
      image: "/assets/images/mongodb-mobile.png",
    },
  ];

  const comparison = [
    ["Table", "Collection", "A group of related records"],
    ["Row", "Document", "One record, stored as JSON-like data (BSON)"],
    ["Column", "Field", "Fields can differ between documents"],
    ["JOIN", "$lookup / embedding", "Related data can live inside the document"],
    ["Index", "Index", "Single-field, compound, text, geospatial and more"],
    ["Schema", "Flexible schema + validation", "Optional JSON Schema rules when you need them"],
  ];

  const features = [
    {
      title: "Indexing",
      text: "Single-field, compound, multikey, text and geospatial indexes make common queries fast.",
    },
    {
      title: "Aggregation Framework",
      text: "Multi-stage pipelines for grouping, joining, reshaping and analyzing data inside the database.",
    },
    {
      title: "Change Streams",
      text: "Listen to data changes as they happen to power notifications, syncing and live dashboards.",
    },
    {
      title: "Transactions",
      text: "Multi-document ACID transactions for operations that must succeed or fail together.",
    },
    {
      title: "Atlas Search",
      text: "Full-text search built into Atlas, without running a separate search engine.",
    },
    {
      title: "Time Series Collections",
      text: "Purpose-built storage for sensor readings, metrics and other time-stamped data.",
    },
  ];

  const process = [
    {
      title: "Discovery",
      text: "We learn about your application, users, data volume and growth plans.",
    },
    {
      title: "Data Modeling",
      text: "We decide what to embed, what to reference and which indexes the queries need.",
    },
    {
      title: "Build & Integrate",
      text: "We set up the database, connect it to your API and load initial data.",
    },
    {
      title: "Test & Optimize",
      text: "We check query plans, load-test critical paths and tune indexes.",
    },
    {
      title: "Deploy & Support",
      text: "We launch on Atlas or your own infrastructure with monitoring and backups in place.",
    },
  ];

  const security = [
    "Authentication and role-based access control",
    "Encryption in transit (TLS) and at rest",
    "IP allow-lists and private network connections",
    "Automated backups and point-in-time recovery",
    "Audit logging for sensitive environments",
    "Field-level validation with JSON Schema",
  ];

  const faqs = [
    {
      q: "What is MongoDB?",
      a: "MongoDB is a document database that stores records as flexible JSON-like documents. This model allows application data to evolve without requiring every document to have exactly the same structure.",
    },
    {
      q: "MongoDB or SQL: which should we use?",
      a: "MongoDB can be a strong fit for flexible document-oriented data and applications where schemas evolve frequently. Relational databases can be preferable when highly structured relationships and complex joins are central to the application. The right choice depends on the application's data model and access patterns.",
    },
    {
      q: "Can you build a complete MERN application?",
      a: "Yes. MongoDB can be combined with Express, React and Node.js to build complete full-stack applications.",
    },
    {
      q: "Can you migrate our existing database to MongoDB?",
      a: "Yes. We can analyze your existing database structure, map the data model, plan the migration and validate the migrated data.",
    },
    {
      q: "Can MongoDB handle large applications?",
      a: "MongoDB supports horizontal scaling through sharding and high availability through replication. The appropriate architecture depends on workload, data size and application requirements.",
    },
    {
      q: "Does MongoDB support transactions?",
      a: "Yes. MongoDB supports multi-document ACID transactions on replica sets and sharded clusters. Good data modeling often reduces how often you need them, but they are available when your business logic requires them.",
    },
    {
      q: "Should we host on MongoDB Atlas or manage our own servers?",
      a: "Atlas removes most of the operational work such as provisioning, patching, backups and monitoring. Self-hosting can make sense when you have specific compliance, networking or cost requirements. We can help you compare both for your situation.",
    },
    {
      q: "Can you speed up a slow MongoDB database?",
      a: "Usually, yes. We review slow queries, examine explain plans, add or adjust indexes and revisit the data model where needed.",
    },
  ];

  const stack = [
    "MongoDB",
    "MongoDB Atlas",
    "Express.js",
    "React",
    "Node.js",
    "Mongoose",
    "Next.js",
    "MongoDB Compass",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-800">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#00212f] px-6 py-24 text-white md:px-16 md:py-32">

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            {/* LEFT */}
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Web Design & Development
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                MongoDB Development
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Build flexible, scalable and reliable data systems for modern
                web and mobile applications. We design MongoDB architectures
                that are aligned with your application's data and business
                requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <p
                  className="inline-flex rounded-full bg-emerald-400 px-8 py-4 font-semibold text-[#00212f] transition hover:bg-emerald-300"
                >
                  Talk to a database expert
                </p>

                <p
                
                  className="inline-flex rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore services
                </p>
              </div>
            </div>

            {/* RIGHT CODE CARD */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-[#02303f] shadow-2xl">

                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400">
                    user.json
                  </span>
                </div>

                <pre className="overflow-x-auto p-7 text-sm leading-7 text-emerald-300">
{`{
  "_id": "64f1a2b3c4d5",
  "name": "Ravi Kumar",
  "email": "ravi@example.com",
  "plan": "premium",
  "orders": [
    {
      "item": "Laptop",
      "qty": 1
    },
    {
      "item": "Mouse",
      "qty": 2
    }
  ],
  "active": true
}`}
                </pre>
              </div>
            </div>

          </div>
        </section>


        {/* ================= TECH STACK ================= */}
        <section className="border-b border-gray-200 bg-white px-6 py-8 md:px-16">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {stack.map((item) => (
              <span
                key={item}
                className="text-sm font-semibold text-gray-500 md:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </section>


        {/* ================= INTRO + IMAGE ================= */}
        <section className="px-6 py-24 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Modern Data Architecture
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#00212f] md:text-5xl">
                A database designed around your application
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                MongoDB's document model allows application data to be stored
                in structures that closely resemble objects used by modern
                applications.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                This makes MongoDB useful for applications where data
                structures change over time, where nested information is common,
                or where teams need to iterate quickly.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Instead of splitting one business object across many tables and
                joining them back together, related information can be kept
                together in a single document. This often means fewer queries,
                simpler code and a data layer that mirrors the way your
                developers already think about the application.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <p className="text-3xl font-bold text-emerald-600">JSON</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Flexible document model
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-5">
                  <p className="text-3xl font-bold text-cyan-600">Scale</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Built for growing workloads
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl">
              <img
                src="/assets/images/mongodb-data-model.png"
                alt="MongoDB data model"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </section>


        {/* ================= SQL vs MONGODB ================= */}
        <section className="bg-gray-50 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Coming From SQL?
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Familiar ideas, different names
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                If your team already knows relational databases, most concepts
                carry over. Here is how they map to MongoDB.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[560px] text-left">
                <thead className="bg-[#00212f] text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">SQL</th>
                    <th className="px-6 py-4 text-sm font-semibold">MongoDB</th>
                    <th className="px-6 py-4 text-sm font-semibold">What it means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparison.map(([sql, mongo, note]) => (
                    <tr key={sql}>
                      <td className="px-6 py-4 font-semibold text-gray-500">{sql}</td>
                      <td className="px-6 py-4 font-bold text-emerald-600">{mongo}</td>
                      <td className="px-6 py-4 text-gray-600">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>


        {/* ================= BENEFITS ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Why MongoDB
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Built for modern application data
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                MongoDB combines a flexible document model with querying,
                aggregation, replication and horizontal scaling capabilities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-600">
                    ✓
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#00212f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* ================= DATA MODELING ================= */}
        <section className="bg-gray-50 px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Data Modeling
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Embed or reference? The answer shapes performance
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Good MongoDB design starts with how your application reads and
                writes data. There are two core patterns, and most real
                projects use a mix of both.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <h3 className="font-bold text-[#00212f]">Embedding</h3>
                  <p className="mt-1 text-gray-600">
                    Keep related data inside one document, such as order line
                    items inside an order. Reads are fast because one query
                    returns everything.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#00212f]">Referencing</h3>
                  <p className="mt-1 text-gray-600">
                    Store an id that points to another collection. Use this
                    when data is shared across many documents or can grow
                    without a clear limit.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-emerald-400/20 shadow-xl">
              <ModelingDiagram />
            </div>

          </div>
        </section>


        {/* ================= ATLAS IMAGE SECTION ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

            <div className="order-2 overflow-hidden rounded-3xl border border-gray-200 shadow-xl md:order-1">
              <img
                src="/assets/images/mongodb-atlas.png"
                alt="MongoDB Atlas cloud database"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                MongoDB Atlas
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Cloud database infrastructure without the operational burden
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                MongoDB Atlas is MongoDB's managed cloud database platform.
                It provides deployment, monitoring, scaling and security
                capabilities for applications running in the cloud.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Managed database deployment",
                  "Monitoring and performance visibility",
                  "Backup and recovery options",
                  "Security controls",
                  "Cloud-based scaling",
                  "Built-in full-text search with Atlas Search",
                  "Deployment on AWS, Google Cloud or Azure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>


        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="bg-[#00212f] px-6 py-24 text-white md:px-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-400">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Our MongoDB services
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                From database design to optimization and cloud deployment,
                we help teams build MongoDB systems that are ready for
                production.
              </p>
            </div>

            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">

              {services.map((service) => (
                <div
                  key={service.number}
                  className="grid gap-5 py-8 md:grid-cols-[80px_1fr_1.4fr] md:items-center"
                >
                  <span className="text-3xl font-bold text-emerald-400">
                    {service.number}
                  </span>

                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {service.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= CAPABILITIES ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Capabilities
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                More than a place to store data
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                MongoDB includes features that let your application search,
                react to changes and analyze data without extra systems.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 border-l-4 border-l-emerald-400 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#00212f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>

          </div>
        </section>


        {/* ================= AGGREGATION ================= */}
        <section className="bg-gray-50 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Aggregation
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Turn raw documents into reports
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Aggregation pipelines pass documents through a series of
                stages. Each stage filters, groups, sorts or reshapes the data,
                so reports and dashboards can be computed inside the database.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-emerald-400/20 shadow-xl">
              <PipelineDiagram />
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-emerald-400/30 bg-[#02303f] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400">
                  monthly-revenue.js
                </span>
              </div>

              <pre className="overflow-x-auto p-7 text-sm leading-7 text-emerald-300">
{`db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: {
      _id: { $month: "$createdAt" },
      revenue: { $sum: "$total" },
      orders: { $sum: 1 }
  } },
  { $sort: { _id: 1 } },
  { $project: { month: "$_id", revenue: 1, orders: 1, _id: 0 } }
])`}
              </pre>
            </div>

          </div>
        </section>


        {/* ================= ARCHITECTURE ================= */}
        <section className="px-6 py-24 md:px-16 md:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Architecture
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                From application to database
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                A typical MERN application connects the React frontend with
                Node.js and Express APIs, which communicate with MongoDB.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl">
              <img
                src="/assets/images/mongodb-architecture.png"
                alt="MongoDB application architecture"
                className="w-full object-cover"
              />
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">

              {[
                ["01", "React", "User interface"],
                ["02", "Express", "API layer"],
                ["03", "Node.js", "Application server"],
                ["04", "MongoDB", "Data layer"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-bold text-emerald-600">
                    {number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#00212f]">
                    {title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= USE CASES ================= */}
        <section className="bg-gray-50 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Applications
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Where MongoDB fits
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                MongoDB can support many application patterns, from commerce
                and SaaS products to analytics and data-driven platforms.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {useCases.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-56 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#00212f]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* ================= SCALING ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Scale With Confidence
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Prepare your data architecture for growth
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                MongoDB supports replication for redundancy and sharding for
                horizontal scaling. The appropriate architecture depends on
                your workload, data size and access patterns.
              </p>
            </div>

            {/* Replication */}
            <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-[#00212f]">
                  Replication
                </h3>
                <p className="mt-4 leading-8 text-gray-600">
                  A replica set keeps several copies of your data on different
                  servers. One member is the primary and handles writes, while
                  secondaries copy its changes. If the primary becomes
                  unavailable, the remaining members elect a new one
                  automatically.
                </p>
                <ul className="mt-5 space-y-2 text-gray-600">
                  <li>• Redundant copies of your data</li>
                  <li>• Automatic failover</li>
                  <li>• Optional reads from secondaries</li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-emerald-400/20 shadow-xl">
                <ReplicaSetDiagram />
              </div>
            </div>

            {/* Sharding */}
            <div className="mt-20 grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 overflow-hidden rounded-3xl border border-emerald-400/20 shadow-xl md:order-1">
                <ShardingDiagram />
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-[#00212f]">
                  Sharding
                </h3>
                <p className="mt-4 leading-8 text-gray-600">
                  When one server can no longer hold your data or handle your
                  traffic, sharding distributes data across multiple shards
                  using a shard key. A query router sends each request to the
                  shards that hold the relevant data.
                </p>
                <ul className="mt-5 space-y-2 text-gray-600">
                  <li>• Horizontal scaling for large datasets</li>
                  <li>• Workload spread across servers</li>
                  <li>• Shard key chosen around your query patterns</li>
                </ul>
              </div>
            </div>

            {/* Indexing */}
            <div className="mt-20 rounded-3xl bg-emerald-50 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#00212f]">
                Indexing
              </h3>
              <p className="mt-4 max-w-3xl leading-8 text-gray-600">
                Build indexes around common application queries and access
                patterns. A well-chosen index can turn a full collection scan
                into a fast lookup, while unnecessary indexes slow down writes
                and use memory. We review both.
              </p>
            </div>

          </div>
        </section>


        {/* ================= MIGRATION ================= */}
        <section className="bg-[#00212f] px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-6xl">

            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Migration
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Moving to MongoDB without losing data
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                We analyze the source database, design the new document
                structure, transform the data and validate the result before
                anything goes live.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-emerald-400/30 shadow-2xl">
              <MigrationDiagram />
            </div>

          </div>
        </section>


        {/* ================= PROCESS ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                How a MongoDB project runs
              </h2>
            </div>

            <ol className="mt-14 space-y-0">
              {process.map((step, i) => (
                <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < process.length - 1 && (
                    <span className="absolute left-6 top-12 h-full w-px bg-emerald-200" />
                  )}

                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-bold text-[#00212f]">
                    {i + 1}
                  </span>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#00212f]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

          </div>
        </section>


        {/* ================= SECURITY ================= */}
        <section className="bg-gray-50 px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Security
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Production databases need protection
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                A database holds your most valuable asset. We configure
                MongoDB with layered security so access is limited, data is
                encrypted and recovery is possible.
              </p>
            </div>

            <ul className="grid gap-4">
              {security.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </section>


        {/* ================= FAQ ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                FAQ
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#00212f] md:text-5xl">
                Questions we hear often
              </h2>
            </div>

            <div className="mt-12 space-y-4">

              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#00212f]">
                    {faq.q}
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {faq.a}
                  </p>
                </details>
              ))}

            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden bg-[#00212f] px-6 py-24 text-center text-white md:px-16">

          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative">
            <p className="font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Let's Build
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
              Let's design a database that scales with your product
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              Tell us about your application, data requirements and growth
              goals. We'll help you plan the right MongoDB architecture.
            </p>

            <h2
              className="mt-8 inline-flex rounded-full bg-emerald-400 px-9 py-4 font-bold text-[#00212f] transition hover:bg-emerald-300"
            >
              Contact our team
            </h2>
          </div>

        </section>

      </main>
    </>
  );
}

// ===================== PHP =====================


/* ============================================================
   INLINE SVG ILLUSTRATIONS (no image files needed)
   ============================================================ */

const C = {
  bg: "#232a5c",
  card: "#2f3877",
  line: "#a5b4fc",
  accent: "#c7d2fe",
  text: "#e0e7ff",
  muted: "#a5b4fc",
};

function Arrow({ x1, y1, x2, y2 }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const s = 7;
  const p1 = [x2 - s * Math.cos(a - 0.5), y2 - s * Math.sin(a - 0.5)];
  const p2 = [x2 - s * Math.cos(a + 0.5), y2 - s * Math.sin(a + 0.5)];
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.line} strokeWidth="2" />
      <polygon points={`${x2},${y2} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`} fill={C.line} />
    </g>
  );
}

function Box({ x, y, w, h, title, sub, hi }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill={hi ? "#e0e7ff" : C.card} stroke={C.line} strokeOpacity={hi ? 0 : 0.6} />
      <text x={x + w / 2} y={y + h / 2 - (sub ? 3 : -5)} textAnchor="middle" fill={hi ? "#1e1b4b" : C.text} fontSize="14" fontWeight="700">{title}</text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fill={hi ? "#3730a3" : C.muted} fontSize="11">{sub}</text>
      )}
    </g>
  );
}

function RequestFlowDiagram() {
  return (
    <svg viewBox="0 0 800 230" className="h-full w-full" role="img" aria-label="How a PHP page request flows from browser to server, PHP and database and back">
      <rect width="800" height="230" fill={C.bg} />
      <Box x={20} y={70} w={130} h={64} title="Browser" sub="user opens page" />
      <Box x={200} y={70} w={130} h={64} title="Web Server" sub="Nginx / Apache" />
      <Box x={380} y={70} w={130} h={64} title="PHP" sub="runs your code" hi />
      <Box x={560} y={70} w={130} h={64} title="Database" sub="MySQL" />
      <Arrow x1={150} y1={92} x2={198} y2={92} />
      <Arrow x1={330} y1={92} x2={378} y2={92} />
      <Arrow x1={510} y1={92} x2={558} y2={92} />
      <line x1="445" y1="134" x2="445" y2="176" stroke={C.line} strokeWidth="2" strokeDasharray="6 5" />
      <line x1="85" y1="176" x2="445" y2="176" stroke={C.line} strokeWidth="2" strokeDasharray="6 5" />
      <Arrow x1={85} y1={176} x2={85} y2={138} />
      <text x="265" y="198" textAnchor="middle" fill={C.muted} fontSize="12">PHP builds the HTML page and sends it back</text>
      <text x="400" y="36" textAnchor="middle" fill={C.text} fontSize="13" fontWeight="600">PHP runs on the server, so users only receive finished HTML</text>
    </svg>
  );
}

function MvcDiagram() {
  return (
    <svg viewBox="0 0 760 320" className="h-full w-full" role="img" aria-label="Laravel MVC flow: route, controller, model, database and view">
      <rect width="760" height="320" fill={C.bg} />
      <Box x={20} y={120} w={120} h={60} title="Request" sub="GET /products" />
      <Box x={190} y={120} w={120} h={60} title="Route" sub="routes/web.php" />
      <Box x={360} y={120} w={130} h={60} title="Controller" sub="app logic" hi />
      <Box x={560} y={30} w={150} h={60} title="Model" sub="Eloquent ORM" />
      <Box x={560} y={210} w={150} h={60} title="View" sub="Blade template" />
      <Arrow x1={140} y1={150} x2={188} y2={150} />
      <Arrow x1={310} y1={150} x2={358} y2={150} />
      <Arrow x1={470} y1={122} x2={558} y2={72} />
      <Arrow x1={470} y1={178} x2={558} y2={228} />
      <rect x="590" y="118" width="90" height="44" rx="10" fill={C.card} stroke={C.line} strokeOpacity="0.6" />
      <text x="635" y="145" textAnchor="middle" fill={C.text} fontSize="13" fontWeight="600">MySQL</text>
      <Arrow x1={635} y1={90} x2={635} y2={116} />
      <text x="380" y="296" textAnchor="middle" fill={C.muted} fontSize="12">Models talk to the database, views turn data into HTML, controllers connect the two</text>
    </svg>
  );
}

function StackDiagram() {
  const layers = [
    ["Frontend", "Blade  •  React  •  Vue  •  Tailwind", "#e0e7ff", "#1e1b4b"],
    ["Framework", "Laravel  •  CodeIgniter  •  WordPress", "#a5b4fc", "#1e1b4b"],
    ["Language", "PHP 8.x  •  Composer packages", "#818cf8", "#ffffff"],
    ["Web Server", "Nginx  •  Apache", "#6366f1", "#ffffff"],
    ["Data", "MySQL  •  Redis  •  Queues", "#4f46e5", "#ffffff"],
    ["Hosting", "Linux VPS  •  Cloud  •  Shared hosting", "#3730a3", "#ffffff"],
  ];
  return (
    <svg viewBox="0 0 520 380" className="h-full w-full" role="img" aria-label="Typical PHP application stack from frontend to hosting">
      <rect width="520" height="380" fill={C.bg} />
      {layers.map(([t, s, fill, txt], i) => (
        <g key={t}>
          <rect x="30" y={24 + i * 56} width="460" height="46" rx="10" fill={fill} />
          <text x="50" y={44 + i * 56} fill={txt} fontSize="14" fontWeight="700">{t}</text>
          <text x="50" y={61 + i * 56} fill={txt} fontSize="11" opacity="0.85">{s}</text>
        </g>
      ))}
    </svg>
  );
}

function UpgradeDiagram() {
  const steps = [
    ["Audit", "find outdated code"],
    ["Refactor", "fix deprecations"],
    ["Test", "check every feature"],
    ["Deploy", "go live safely"],
  ];
  return (
    <svg viewBox="0 0 820 190" className="h-full w-full" role="img" aria-label="PHP upgrade path from an old version to PHP 8">
      <rect width="820" height="190" fill={C.bg} />
      <rect x="16" y="60" width="110" height="70" rx="12" fill="#7f1d1d" stroke="#fca5a5" strokeOpacity="0.7" />
      <text x="71" y="90" textAnchor="middle" fill="#fee2e2" fontSize="14" fontWeight="700">Old PHP</text>
      <text x="71" y="110" textAnchor="middle" fill="#fecaca" fontSize="11">5.x / 7.x</text>
      {steps.map(([t, s], i) => {
        const x = 170 + i * 132;
        return (
          <g key={t}>
            <Arrow x1={x - 40} y1={95} x2={x - 2} y2={95} />
            <Box x={x} y={60} w={112} h={70} title={t} sub={s} />
          </g>
        );
      })}
      <Arrow x1={698} y1={95} x2={716} y2={95} />
      <rect x="718" y="60" width="90" height="70" rx="12" fill="#e0e7ff" />
      <text x="763" y="90" textAnchor="middle" fill="#1e1b4b" fontSize="14" fontWeight="700">PHP 8</text>
      <text x="763" y="110" textAnchor="middle" fill="#3730a3" fontSize="11">supported</text>
      <text x="410" y="165" textAnchor="middle" fill={C.muted} fontSize="12">Step-by-step upgrade so your site keeps running</text>
    </svg>
  );
}

/* Service illustrations */
function ServiceArt({ type }) {
  const stroke = { stroke: "#e0e7ff", strokeWidth: 3, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  const soft = { fill: "#ffffff", fillOpacity: 0.18 };
  const art = {
    app: (
      <>
        <rect x="90" y="40" width="220" height="140" rx="12" {...stroke} />
        <line x1="90" y1="66" x2="310" y2="66" {...stroke} />
        <rect x="102" y="78" width="50" height="90" rx="6" {...soft} />
        <rect x="164" y="78" width="134" height="26" rx="6" {...soft} />
        <rect x="164" y="114" width="60" height="54" rx="6" {...soft} />
        <rect x="236" y="114" width="62" height="54" rx="6" {...soft} />
      </>
    ),
    shop: (
      <>
        <path d="M110 70 H140 L165 140 H265 L285 90 H150" {...stroke} />
        <circle cx="180" cy="162" r="9" {...stroke} />
        <circle cx="255" cy="162" r="9" {...stroke} />
        <rect x="170" y="98" width="30" height="30" rx="4" {...soft} />
        <rect x="210" y="98" width="30" height="30" rx="4" {...soft} />
      </>
    ),
    cms: (
      <>
        <rect x="110" y="36" width="180" height="148" rx="12" {...stroke} />
        <rect x="126" y="52" width="148" height="30" rx="6" {...soft} />
        <line x1="126" y1="104" x2="274" y2="104" {...stroke} />
        <line x1="126" y1="124" x2="250" y2="124" {...stroke} />
        <line x1="126" y1="144" x2="230" y2="144" {...stroke} />
      </>
    ),
    upgrade: (
      <>
        <path d="M200 170 V60" {...stroke} />
        <path d="M160 100 L200 56 L240 100" {...stroke} />
        <rect x="100" y="150" width="70" height="30" rx="8" {...soft} />
        <rect x="230" y="150" width="70" height="30" rx="8" {...soft} />
        <text x="135" y="171" textAnchor="middle" fill="#e0e7ff" fontSize="14" fontWeight="700">7.x</text>
        <text x="265" y="171" textAnchor="middle" fill="#e0e7ff" fontSize="14" fontWeight="700">8.x</text>
      </>
    ),
    api: (
      <>
        <text x="130" y="128" textAnchor="middle" fill="#e0e7ff" fontSize="70" fontWeight="700">{"{"}</text>
        <text x="270" y="128" textAnchor="middle" fill="#e0e7ff" fontSize="70" fontWeight="700">{"}"}</text>
        <circle cx="180" cy="100" r="9" {...soft} />
        <circle cx="220" cy="100" r="9" {...soft} />
        <line x1="189" y1="100" x2="211" y2="100" {...stroke} />
      </>
    ),
    pay: (
      <>
        <rect x="100" y="60" width="200" height="120" rx="14" {...stroke} />
        <rect x="100" y="86" width="200" height="26" fill="#ffffff" fillOpacity="0.25" />
        <rect x="120" y="138" width="60" height="14" rx="4" {...soft} />
        <circle cx="266" cy="146" r="10" {...soft} />
      </>
    ),
    admin: (
      <>
        <rect x="90" y="40" width="220" height="140" rx="12" {...stroke} />
        <rect x="112" y="120" width="26" height="40" rx="4" {...soft} />
        <rect x="150" y="96" width="26" height="64" rx="4" {...soft} />
        <rect x="188" y="76" width="26" height="84" rx="4" {...soft} />
        <rect x="226" y="108" width="26" height="52" rx="4" {...soft} />
        <circle cx="284" cy="64" r="6" fill="#e0e7ff" />
      </>
    ),
    plug: (
      <>
        <rect x="90" y="80" width="80" height="60" rx="10" {...stroke} />
        <rect x="230" y="80" width="80" height="60" rx="10" {...stroke} />
        <line x1="170" y1="100" x2="230" y2="100" {...stroke} />
        <line x1="170" y1="120" x2="230" y2="120" {...stroke} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 400 224" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
      </defs>
      <rect width="400" height="224" fill={`url(#g-${type})`} />
      {art[type]}
    </svg>
  );
}

function PhpPage() {
  const stack = ["PHP 8", "Laravel", "CodeIgniter", "WordPress", "MySQL", "Composer", "Redis", "REST API"];

  const benefits = [
    { title: "Low Cost", text: "PHP is open source and runs on affordable hosting." },
    { title: "Proven & Stable", text: "It powers a large share of the web, including WordPress." },
    { title: "Easy to Hire For", text: "A large developer community makes long-term support simple." },
    { title: "Framework Support", text: "Laravel and CodeIgniter speed up secure development." },
    { title: "Fast with PHP 8", text: "Modern PHP versions are much faster than older releases and include a JIT compiler." },
    { title: "Runs Almost Anywhere", text: "From shared hosting to cloud servers, PHP is supported by nearly every hosting provider." },
  ];

  const services = [
    { art: "app", title: "Custom PHP Web Applications", text: "Business systems built exactly around your workflow, such as CRMs, booking tools and inventory software.", tags: ["Laravel", "MySQL", "REST API"] },
    { art: "shop", title: "E-commerce Development", text: "Online stores with product management, payment gateways and order tracking.", tags: ["WooCommerce", "Payments", "Admin panel"] },
    { art: "cms", title: "CMS & WordPress Development", text: "Easy-to-manage websites with custom themes and plugins.", tags: ["WordPress", "Custom plugins", "SEO"] },
    { art: "upgrade", title: "Maintenance & Upgrades", text: "Move old PHP code to modern versions and keep it secure and fast.", tags: ["PHP 8", "Security", "Support"] },
    { art: "api", title: "API Development", text: "Secure REST APIs that power your mobile apps, React or Vue frontends and partner integrations, with token authentication and clear documentation.", tags: ["REST", "JWT / Sanctum", "JSON"] },
    { art: "pay", title: "Payment Gateway Integration", text: "Accept online payments with popular gateways, handle refunds and confirmations, and keep card data off your own servers.", tags: ["Razorpay", "Stripe", "PayPal"] },
    { art: "admin", title: "Admin Dashboards & Reports", text: "Easy control panels where your team can manage users, content and orders, with charts and exportable reports.", tags: ["Roles & permissions", "Charts", "Export"] },
    { art: "plug", title: "Third-Party Integrations", text: "Connect your PHP application with CRMs, email services, SMS providers, accounting tools and shipping platforms.", tags: ["Webhooks", "Email / SMS", "CRM"] },
  ];

  const stats = [
    { n: "PHP 8", l: "Modern versions" },
    { n: "Laravel", l: "Primary framework" },
    { n: "MySQL", l: "Main database" },
    { n: "24/7", l: "Support option" },
  ];

  const laravel = [
    { title: "Eloquent ORM", text: "Work with database tables as simple PHP objects instead of writing raw SQL for everything." },
    { title: "Blade Templates", text: "Clean, reusable page templates with automatic output escaping." },
    { title: "Artisan CLI", text: "Command-line tools that generate code and run common tasks." },
    { title: "Authentication", text: "Login, registration, password reset and API tokens built on proven starter kits." },
    { title: "Migrations", text: "Version-controlled database changes that every developer and server can apply the same way." },
    { title: "Queues & Jobs", text: "Send emails and process heavy tasks in the background so pages stay fast." },
  ];

  const phpFeatures = [
    ["JIT compiler", "PHP 8.0", "Can speed up CPU-heavy code"],
    ["Named arguments", "PHP 8.0", "Clearer function calls"],
    ["Match expression", "PHP 8.0", "A safer, shorter alternative to switch"],
    ["Attributes", "PHP 8.0", "Native metadata for classes and methods"],
    ["Enums", "PHP 8.1", "Fixed sets of values with type safety"],
    ["Readonly properties", "PHP 8.1", "Values that cannot change after creation"],
  ];

  const useCases = [
    { title: "Business Management Systems", text: "CRM, ERP, HR, billing and inventory tools tailored to how your company works." },
    { title: "Online Stores", text: "Catalogues, carts, coupons, payments and order tracking." },
    { title: "Booking & Reservation Portals", text: "Appointments, tickets, hotel or event bookings with calendars and reminders." },
    { title: "Learning Platforms", text: "Courses, student accounts, quizzes, progress tracking and certificates." },
    { title: "Listing & Directory Sites", text: "Jobs, real estate or business directories with search and filters." },
    { title: "Customer Portals", text: "Secure areas where clients view invoices, tickets and documents." },
  ];

  const security = [
    ["SQL injection", "Prepared statements and Eloquent query binding keep user input separate from SQL."],
    ["Cross-site scripting (XSS)", "Output is escaped by default in Blade templates."],
    ["CSRF attacks", "Form tokens confirm that requests come from your own site."],
    ["Password safety", "Passwords are hashed with bcrypt or Argon2, never stored in plain text."],
    ["Input validation", "Every form and API request is validated on the server."],
    ["Updates & HTTPS", "Supported PHP versions, patched dependencies and encrypted connections."],
  ];

  const process = [
    { title: "Requirements", text: "We listen to your goals, users and must-have features, then write them down clearly." },
    { title: "Planning & Design", text: "We plan the database, pages and user flows before coding starts." },
    { title: "Development", text: "We build in short stages so you can see and test progress regularly." },
    { title: "Testing", text: "We test features, forms, payments and security before launch." },
    { title: "Launch & Support", text: "We deploy to your server and stay available for updates and fixes." },
  ];

  const faqs = [
    { q: "Is PHP still relevant?", a: "Yes. PHP 8 is fast and modern, and Laravel makes building secure applications quick." },
    { q: "Can you fix or upgrade my existing PHP site?", a: "Yes. We review your code, fix issues and move it to a supported PHP version." },
    { q: "Laravel or plain PHP: which is better?", a: "For most business applications Laravel is the better choice because it provides structure, security features and tools out of the box. Plain PHP can suit very small scripts or legacy maintenance." },
    { q: "Should I choose WordPress or a custom PHP application?", a: "WordPress works well for content-driven websites, blogs and standard online stores. A custom Laravel application is better when you need special workflows, user roles, complex logic or integrations." },
    { q: "Is PHP secure?", a: "PHP can be very secure when built with a modern framework, validated input, prepared database queries and regular updates. Most problems come from outdated versions or unsafe code, which we avoid." },
    { q: "Can PHP handle high traffic?", a: "Yes. With caching, queues, a well-designed database and the right server setup, PHP applications can serve large numbers of users." },
    { q: "Do you provide hosting and deployment help?", a: "Yes. We can set up your application on shared hosting, a VPS or cloud servers, including SSL, backups and monitoring." },
    { q: "Will I own the source code?", a: "Yes. You receive the full source code and documentation for your project." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-800">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#4f5b93] to-[#2a3163] px-6 py-24 text-white md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <p className="font-semibold text-indigo-200">Web Design & Development</p>
              <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">PHP Development</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-indigo-100">
                Reliable, secure and affordable web applications built with PHP and Laravel, from business tools to full online stores.
              </p>
              <h2 className="mt-9 inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-indigo-800 transition hover:bg-indigo-50">
                Request a quote
              </h2>
            </div>

            <div className="rounded-2xl bg-[#1a1f45] p-2 shadow-2xl">
              <div className="rounded-xl bg-[#232a5c] p-6">
                <pre className="overflow-x-auto text-sm leading-7 text-indigo-100">
{`<?php
Route::get('/products', function () {
    $items = Product::where('active', 1)
        ->orderBy('name')
        ->get();

    return view('products', compact('items'));
});`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STRIP */}
        <section className="border-b border-gray-200 px-6 py-6 md:px-16">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-9 gap-y-3">
            {stack.map((t) => (
              <span key={t} className="text-sm font-semibold text-gray-500 md:text-base">{t}</span>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 py-12 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="rounded-xl bg-indigo-50 p-6 text-center">
                <p className="text-2xl font-bold text-indigo-800">{s.n}</p>
                <p className="mt-1 text-sm text-gray-600">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT IS PHP + REQUEST FLOW */}
        <section className="px-6 py-16 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">What PHP does for your website</h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                PHP is a server-side programming language. When someone opens a page, your server runs the PHP code, reads or saves information in the database, and sends back a finished page.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                That is how logins, shopping carts, dashboards, forms and search results work. Because the logic stays on the server, your business rules and data are protected.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
              <RequestFlowDiagram />
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">Why businesses choose PHP</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <article key={b.title} className="rounded-b-xl border-t-4 border-indigo-600 bg-white p-7 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-indigo-50 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl space-y-16">
            <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">Our PHP services</h2>
            {services.map((s, i) => (
              <div key={s.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="h-56 overflow-hidden rounded-3xl shadow-lg">
                  <ServiceArt type={s.art} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-950">{s.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{s.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white px-4 py-1 text-sm font-medium text-indigo-700 ring-1 ring-indigo-200">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LARAVEL */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">Built on Laravel</h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Laravel is the most popular PHP framework. It organizes code into clear layers, which makes applications easier to build, test and maintain as they grow.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
              <MvcDiagram />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {laravel.map((f) => (
                <article key={f.title} className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-6">
                  <h3 className="text-lg font-bold text-indigo-950">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{f.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#1a1f45] p-2 shadow-2xl">
              <div className="rounded-xl bg-[#232a5c] p-6">
                <p className="mb-3 text-xs text-indigo-300">app/Http/Controllers/OrderController.php</p>
                <pre className="overflow-x-auto text-sm leading-7 text-indigo-100">
{`public function store(Request $request)
{
    $data = $request->validate([
        'product_id' => 'required|exists:products,id',
        'quantity'   => 'required|integer|min:1',
    ]);

    $order = $request->user()->orders()->create($data);

    return response()->json($order, 201);
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* STACK DIAGRAM */}
        <section className="bg-indigo-50 px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">A complete, proven stack</h2>
              <p className="mt-5 leading-8 text-gray-600">
                A PHP application is made of a few simple layers. Each one is mature, widely supported and easy to replace or scale when your business grows.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Modern frontends with Blade, React or Vue</li>
                <li>• Caching and queues with Redis</li>
                <li>• Hosting on shared, VPS or cloud servers</li>
                <li>• Dependencies managed with Composer</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <StackDiagram />
            </div>
          </div>
        </section>

        {/* PHP 8 FEATURES */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">Modern PHP is not the PHP you remember</h2>
              <p className="mt-5 leading-8 text-gray-600">
                PHP 8 added features that make code faster, safer and easier to read. We write new projects using these modern practices.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-indigo-100 shadow-sm">
              <table className="w-full min-w-[520px] text-left">
                <thead className="bg-indigo-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-sm font-semibold">Added in</th>
                    <th className="px-6 py-4 text-sm font-semibold">Why it helps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-100">
                  {phpFeatures.map(([f, v, w]) => (
                    <tr key={f}>
                      <td className="px-6 py-4 font-bold text-indigo-900">{f}</td>
                      <td className="px-6 py-4 text-gray-500">{v}</td>
                      <td className="px-6 py-4 text-gray-600">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-indigo-50 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">What we build with PHP</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((u) => (
                <article key={u.title} className="rounded-xl bg-white p-7 shadow-md">
                  <h3 className="text-lg font-bold text-indigo-950">{u.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{u.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* UPGRADE */}
        <section className="bg-gradient-to-br from-[#4f5b93] to-[#2a3163] px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold md:text-4xl">Still running an old PHP version?</h2>
              <p className="mt-5 leading-8 text-indigo-100">
                Older PHP versions no longer receive security fixes, and they are slower than PHP 8. We upgrade your code in stages, fix deprecated functions and test everything so your site keeps working.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl shadow-2xl">
              <UpgradeDiagram />
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-indigo-950 md:text-4xl">Security built in from the start</h2>
              <p className="mt-5 leading-8 text-gray-600">
                Most attacks on websites use a small set of well-known weaknesses. We design against them from the first line of code.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {security.map(([t, d]) => (
                <article key={t} className="rounded-xl border border-gray-200 border-l-4 border-l-indigo-600 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-indigo-950">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-indigo-50 px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-indigo-950 md:text-4xl">How we work</h2>
            <ol className="mt-12">
              {process.map((p, i) => (
                <li key={p.title} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < process.length - 1 && <span className="absolute left-6 top-12 h-full w-px bg-indigo-200" />}
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-700 font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-indigo-950">{p.title}</h3>
                    <p className="mt-2 leading-7 text-gray-600">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="mb-8 text-3xl font-bold text-indigo-950 md:text-4xl">FAQs</h2>
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl bg-indigo-50 p-6">
                <summary className="cursor-pointer text-lg font-semibold text-indigo-950">{f.q}</summary>
                <p className="mt-4 leading-7 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-800 px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Have a PHP project in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Tell us what you want to build and we will suggest the right approach, timeline and budget.
          </p>
          <h2 className="mt-8 inline-flex rounded-lg bg-white px-9 py-4 font-bold text-indigo-800 hover:bg-indigo-50">
            Contact our team
          </h2>
        </section>

      </main>
    </>
  );
}


// ===================== ROUTER =====================
export const webDevSlugs = [
  "angular-development",
  "react-js-development",
  "node-js-development",
  "mongodb-development",
  "php-development",
];

export default function WebDevPage({ slug }) {
  if (slug === "angular-development") return <AngularPage />;
  if (slug === "react-js-development") return <ReactPage />;
  if (slug === "node-js-development") return <NodePage />;
  if (slug === "mongodb-development") return <MongoDbPage />;
  if (slug === "php-development") return <PhpPage />;
  return null;
}