import Link from "next/link";
import Navbar from "@/components/Navbar";



// ===================== ANDROID =====================

function AndroidHero() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="w-full"
      role="img"
      aria-label="Android app screens"
    >
      <circle
        cx="260"
        cy="210"
        r="195"
        fill="#3ddc84"
        fillOpacity="0.16"
      />

      {/* Back phone */}
      <rect
        x="290"
        y="70"
        width="180"
        height="330"
        rx="28"
        fill="#073042"
      />

      <rect
        x="299"
        y="81"
        width="162"
        height="308"
        rx="20"
        fill="#f4fbf7"
      />

      <rect
        x="311"
        y="98"
        width="80"
        height="12"
        rx="6"
        fill="#073042"
      />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="311"
            y={126 + i * 72}
            width="138"
            height="60"
            rx="14"
            fill="#ffffff"
            stroke="#c7eedb"
          />

          <circle
            cx="335"
            cy={156 + i * 72}
            r="14"
            fill={i === 1 ? "#3ddc84" : "#c7eedb"}
          />

          <rect
            x="358"
            y={144 + i * 72}
            width="70"
            height="8"
            rx="4"
            fill="#073042"
          />

          <rect
            x="358"
            y={160 + i * 72}
            width="50"
            height="6"
            rx="3"
            fill="#9ca3af"
          />
        </g>
      ))}

      {/* Front phone */}
      <rect
        x="50"
        y="30"
        width="200"
        height="370"
        rx="30"
        fill="#073042"
      />

      <rect
        x="60"
        y="42"
        width="180"
        height="346"
        rx="22"
        fill="#ffffff"
      />

      <rect
        x="60"
        y="42"
        width="180"
        height="56"
        rx="22"
        fill="#3ddc84"
      />

      <rect
        x="60"
        y="70"
        width="180"
        height="28"
        fill="#3ddc84"
      />

      <text
        x="78"
        y="78"
        fontSize="15"
        fontWeight="700"
        fill="#073042"
      >
        My Orders
      </text>

      <rect
        x="76"
        y="116"
        width="148"
        height="70"
        rx="16"
        fill="#eafaf1"
      />

      <text
        x="90"
        y="146"
        fontSize="24"
        fontWeight="800"
        fill="#073042"
      >
        128
      </text>

      <text
        x="90"
        y="168"
        fontSize="11"
        fill="#4b5563"
      >
        Orders today
      </text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="76"
            y={200 + i * 50}
            width="148"
            height="40"
            rx="12"
            fill="#f3f4f6"
          />

          <circle
            cx="94"
            cy={220 + i * 50}
            r="9"
            fill="#3ddc84"
          />

          <rect
            x="112"
            y={214 + i * 50}
            width="70"
            height="7"
            rx="3.5"
            fill="#073042"
          />

          <rect
            x="112"
            y={226 + i * 50}
            width="44"
            height="5"
            rx="2.5"
            fill="#9ca3af"
          />
        </g>
      ))}

      <circle
        cx="206"
        cy="356"
        r="22"
        fill="#3ddc84"
      />

      <path
        d="M206 346 v20 M196 356 h20"
        stroke="#073042"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <rect
        x="118"
        y="376"
        width="64"
        height="4"
        rx="2"
        fill="#073042"
        fillOpacity="0.4"
      />
    </svg>
  );
}

/* =========================================================
   ANDROID ARCHITECTURE SVG
========================================================= */

function AndroidArchitecture() {
  const box = (x, y, w, label, sub, dark) => (
    <g key={label}>
      <rect
        x={x}
        y={y}
        width={w}
        height="56"
        rx="14"
        fill={dark ? "#073042" : "#ffffff"}
        stroke="#3ddc84"
        strokeWidth="2"
      />

      <text
        x={x + w / 2}
        y={y + 26}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={dark ? "#ffffff" : "#073042"}
      >
        {label}
      </text>

      <text
        x={x + w / 2}
        y={y + 44}
        textAnchor="middle"
        fontSize="10"
        fill={dark ? "#86efac" : "#6b7280"}
      >
        {sub}
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 560 320"
      className="w-full"
      role="img"
      aria-label="Android app architecture"
    >
      <defs>
        <marker
          id="android-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path
            d="M0 0 L10 5 L0 10 z"
            fill="#16a34a"
          />
        </marker>
      </defs>

      {box(20, 30, 140, "UI", "Jetpack Compose", true)}

      {box(210, 30, 140, "ViewModel", "screen state")}

      {box(400, 30, 140, "Repository", "single source of data")}

      <line
        x1="160"
        y1="58"
        x2="208"
        y2="58"
        stroke="#16a34a"
        strokeWidth="2"
        markerEnd="url(#android-arrow)"
      />

      <line
        x1="350"
        y1="58"
        x2="398"
        y2="58"
        stroke="#16a34a"
        strokeWidth="2"
        markerEnd="url(#android-arrow)"
      />

      <line
        x1="470"
        y1="86"
        x2="385"
        y2="196"
        stroke="#16a34a"
        strokeWidth="2"
        markerEnd="url(#android-arrow)"
      />

      <line
        x1="470"
        y1="86"
        x2="495"
        y2="196"
        stroke="#16a34a"
        strokeWidth="2"
        markerEnd="url(#android-arrow)"
      />

      {box(330, 200, 110, "Room", "local database")}

      {box(450, 200, 100, "Retrofit", "network API")}

      <rect
        x="20"
        y="130"
        width="300"
        height="120"
        rx="16"
        fill="#eafaf1"
      />

      <text
        x="40"
        y="160"
        fontSize="13"
        fontWeight="700"
        fill="#073042"
      >
        Why this structure?
      </text>

      <text
        x="40"
        y="184"
        fontSize="12"
        fill="#4b5563"
      >
        The screen only shows state.
      </text>

      <text
        x="40"
        y="204"
        fontSize="12"
        fill="#4b5563"
      >
        The repository decides whether data
      </text>

      <text
        x="40"
        y="222"
        fontSize="12"
        fill="#4b5563"
      >
        comes from the phone or the server.
      </text>

      <text
        x="280"
        y="296"
        textAnchor="middle"
        fontSize="12"
        fill="#6b7280"
      >
        Each layer can be tested and changed on its own.
      </text>
    </svg>
  );
}

/* =========================================================
   ANDROID SCREENS SVG
========================================================= */

function AndroidScreens() {
  return (
    <svg
      viewBox="0 0 560 260"
      className="w-full"
      role="img"
      aria-label="Android app on phone, foldable, tablet and watch"
    >
      {/* Phone */}
      <rect
        x="30"
        y="50"
        width="70"
        height="130"
        rx="12"
        fill="#073042"
      />

      <rect
        x="36"
        y="58"
        width="58"
        height="114"
        rx="8"
        fill="#ffffff"
      />

      <rect
        x="42"
        y="66"
        width="46"
        height="8"
        rx="4"
        fill="#3ddc84"
      />

      <rect
        x="42"
        y="84"
        width="46"
        height="22"
        rx="5"
        fill="#eafaf1"
      />

      <rect
        x="42"
        y="112"
        width="46"
        height="22"
        rx="5"
        fill="#eafaf1"
      />

      <text
        x="65"
        y="210"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#073042"
      >
        Phone
      </text>

      {/* Foldable */}
      <rect
        x="140"
        y="60"
        width="120"
        height="110"
        rx="12"
        fill="#073042"
      />

      <rect
        x="146"
        y="66"
        width="53"
        height="98"
        rx="6"
        fill="#ffffff"
      />

      <rect
        x="201"
        y="66"
        width="53"
        height="98"
        rx="6"
        fill="#ffffff"
      />

      <rect
        x="152"
        y="74"
        width="41"
        height="8"
        rx="4"
        fill="#3ddc84"
      />

      <rect
        x="207"
        y="74"
        width="41"
        height="60"
        rx="6"
        fill="#eafaf1"
      />

      <rect
        x="152"
        y="90"
        width="41"
        height="26"
        rx="5"
        fill="#eafaf1"
      />

      <text
        x="200"
        y="210"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#073042"
      >
        Foldable
      </text>

      {/* Tablet */}
      <rect
        x="290"
        y="50"
        width="150"
        height="120"
        rx="14"
        fill="#073042"
      />

      <rect
        x="298"
        y="58"
        width="134"
        height="104"
        rx="8"
        fill="#ffffff"
      />

      <rect
        x="304"
        y="64"
        width="34"
        height="92"
        rx="5"
        fill="#eafaf1"
      />

      <rect
        x="344"
        y="64"
        width="82"
        height="16"
        rx="5"
        fill="#3ddc84"
      />

      <rect
        x="344"
        y="88"
        width="38"
        height="30"
        rx="5"
        fill="#eafaf1"
      />

      <rect
        x="388"
        y="88"
        width="38"
        height="30"
        rx="5"
        fill="#eafaf1"
      />

      <text
        x="365"
        y="210"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#073042"
      >
        Tablet
      </text>

      {/* Watch */}
      <rect
        x="480"
        y="56"
        width="30"
        height="22"
        rx="6"
        fill="#073042"
      />

      <circle
        cx="495"
        cy="112"
        r="38"
        fill="#073042"
      />

      <circle
        cx="495"
        cy="112"
        r="30"
        fill="#ffffff"
      />

      <circle
        cx="495"
        cy="112"
        r="20"
        fill="none"
        stroke="#3ddc84"
        strokeWidth="6"
      />

      <rect
        x="480"
        y="148"
        width="30"
        height="22"
        rx="6"
        fill="#073042"
      />

      <text
        x="495"
        y="210"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#073042"
      >
        Watch
      </text>

      <text
        x="280"
        y="246"
        textAnchor="middle"
        fontSize="12"
        fill="#6b7280"
      >
        Layouts adapt to every screen size and shape.
      </text>
    </svg>
  );
}

/* =========================================================
   ANDROID PAGE
========================================================= */

function AndroidPage() {
  const stats = [
    {
      n: "2008",
      l: "Android first released",
    },
    {
      n: "Kotlin",
      l: "Google preferred language for Android",
    },
    {
      n: "Compose",
      l: "Modern toolkit for building screens",
    },
    {
      n: "Google Play",
      l: "Global app distribution",
    },
  ];

  const why = [
    {
      title: "Wide Reach",
      text: "Android runs on phones, tablets, foldables, TVs, cars and watches from many manufacturers.",
    },
    {
      title: "Kotlin First",
      text: "Kotlin is concise and safe, which means fewer crashes and faster development.",
    },
    {
      title: "Modern UI with Compose",
      text: "Build screens with less code and smooth animations using Jetpack Compose.",
    },
    {
      title: "Flexible Distribution",
      text: "Publish on Google Play or distribute privately to your own staff and customers.",
    },
    {
      title: "Deep Device Access",
      text: "Use the camera, sensors, NFC, Bluetooth, background services and home screen widgets.",
    },
    {
      title: "Google Services",
      text: "Firebase, Maps, Google Pay and ML Kit plug in easily.",
    },
  ];

  const code = [
    {
      title: "Screens with Jetpack Compose",
      text: "Instead of long layout files, screens are written as small functions. When data changes, the screen updates automatically.",
      file: "ProductList.kt",
      code: `@Composable
fun ProductList(products: List<Product>) {
    LazyColumn {
        items(products) { product ->
            ProductRow(
                name = product.name,
                price = product.price
            )
        }
    }
}`,
    },
    {
      title: "State that survives rotation",
      text: "A ViewModel holds the data for a screen. It keeps working when the phone rotates and keeps network code out of the user interface.",
      file: "OrdersViewModel.kt",
      code: `class OrdersViewModel(
    private val repo: OrderRepository
) : ViewModel() {

    private val _orders =
        MutableStateFlow<List<Order>>(emptyList())

    val orders: StateFlow<List<Order>> = _orders

    init {
        viewModelScope.launch {
            _orders.value = repo.getOrders()
        }
    }
}`,
    },
    {
      title: "Talk to your server with Retrofit",
      text: "Your app reads and saves data through a clean API interface. Login tokens, errors and offline caching are handled in one place.",
      file: "ApiService.kt",
      code: `interface ApiService {

    @GET("orders")
    suspend fun getOrders(): List<Order>

    @POST("orders")
    suspend fun createOrder(
        @Body order: NewOrder
    ): Order
}`,
    },
  ];

  const tools = [
    {
      name: "Android Studio",
      text: "Official IDE with emulator and profiler.",
    },
    {
      name: "Jetpack Compose",
      text: "Declarative UI toolkit.",
    },
    {
      name: "Kotlin Coroutines",
      text: "Smooth background work without freezing the UI.",
    },
    {
      name: "Retrofit",
      text: "Type-safe network requests.",
    },
    {
      name: "Room",
      text: "Local database for offline use.",
    },
    {
      name: "Hilt",
      text: "Dependency injection for clean, testable code.",
    },
    {
      name: "Firebase",
      text: "Push notifications, analytics and crash reports.",
    },
    {
      name: "Play Console",
      text: "Testing tracks, staged rollouts and release management.",
    },
  ];

  const services = [
    {
      title: "Custom Android App Development",
      text: "Apps designed around your workflow and your customers.",
    },
    {
      title: "Enterprise & Field Apps",
      text: "Tools for staff with barcode scanning, forms, GPS and offline mode.",
    },
    {
      title: "E-commerce & Payment Apps",
      text: "Catalogues, carts, UPI and card payments, and order tracking.",
    },
    {
      title: "Tablet & Foldable Apps",
      text: "Layouts that make full use of larger and flexible screens.",
    },
    {
      title: "API & Backend Integration",
      text: "Connect to your existing servers, CRMs and third-party services.",
    },
    {
      title: "App Modernisation",
      text: "Move Java code to Kotlin and old XML screens to Jetpack Compose.",
    },
    {
      title: "Play Store Publishing",
      text: "Store listing, app signing, testing tracks and staged rollouts.",
    },
    {
      title: "Testing, Support & Updates",
      text: "Testing on real devices, bug fixes and updates for new Android versions.",
    },
  ];

  const steps = [
    {
      title: "Discover",
      text: "We study your users, goals and existing systems.",
    },
    {
      title: "Design",
      text: "We create Material Design screens and clickable prototypes.",
    },
    {
      title: "Build",
      text: "We develop in short sprints with regular demos.",
    },
    {
      title: "Test",
      text: "We test on many real devices and Android versions.",
    },
    {
      title: "Publish & Support",
      text: "We release on Google Play and keep improving.",
    },
  ];

  const industries = [
    {
      title: "Retail & E-commerce",
      text: "Shopping apps, loyalty programs and order tracking.",
    },
    {
      title: "Healthcare",
      text: "Appointment booking, reports and reminders.",
    },
    {
      title: "Logistics & Field Service",
      text: "Driver apps, live location and proof of delivery.",
    },
    {
      title: "Banking & Fintech",
      text: "Secure payments, wallets and account management.",
    },
    {
      title: "Education",
      text: "Learning apps, live classes and progress tracking.",
    },
    {
      title: "On-Demand Services",
      text: "Booking, matching and real-time status updates.",
    },
  ];

  const compare = [
    [
      "Speed and smoothness",
      "Full native performance",
      "Near native, depends on framework",
    ],
    [
      "New Android features",
      "Available immediately",
      "Depends on plugin support",
    ],
    [
      "Device access",
      "Complete",
      "Through plugins",
    ],
    [
      "Reach",
      "Android only",
      "Android and iOS",
    ],
    [
      "Best for",
      "Feature-rich, performance-critical apps",
      "Simpler apps needed on both platforms quickly",
    ],
  ];

  const faqs = [
    {
      q: "How long does an Android app take to build?",
      a: "A focused app usually takes 2 to 3 months. Larger apps with many features take longer. You receive a clear timeline after discovery.",
    },
    {
      q: "Do you publish the app on Google Play?",
      a: "Yes. We prepare the store listing, sign the app, run test releases and publish it on your developer account.",
    },
    {
      q: "Will the app work on all Android phones?",
      a: "We support a wide range of Android versions and screen sizes, and we test on real devices before release.",
    },
    {
      q: "Can you convert my old Java app to Kotlin?",
      a: "Yes. We modernise apps step by step so they keep working while the code improves.",
    },
    {
      q: "Should I build native Android or a cross-platform app?",
      a: "Native Android is best for performance and deep device features. Cross-platform can save time if you need iOS too. We help you choose.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We offer maintenance plans for bug fixes, security updates and support for new Android versions.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#f4fbf7] text-slate-800">

        {/* =================================================
            HERO + IMAGE 1
        ================================================= */}

        <section className="px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="inline-block rounded-full bg-[#3ddc84] px-5 py-2 text-sm font-bold text-[#073042]">
                Mobile Application Development
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#073042] md:text-6xl">
                Android Apps Development
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Fast, reliable Android apps built with Kotlin and Jetpack
                Compose, from customer apps to field tools that your team
                uses every day.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <h2
                
                  className="rounded-full bg-[#3ddc84] px-8 py-4 font-bold text-[#073042] transition hover:bg-[#2fc474]"
                >
                  Start your app
                </h2>

                <h2
                 
                  className="rounded-full border-2 border-[#073042] px-8 py-4 font-bold text-[#073042] transition hover:bg-[#073042] hover:text-white"
                >
                  See how we build
                </h2>
              </div>
            </div>

            {/* IMAGE 1 */}
            <div className="flex min-h-[420px] items-center justify-center rounded-3xl bg-white p-6 shadow-lg ring-1 ring-emerald-100">
              <img
                src="/assets/images/android-hero.png"
                alt="Android application development"
                className="h-[400px] w-full object-contain"
              />
            </div>

          </div>
        </section>

        {/* =================================================
            STATS
        ================================================= */}

        <section className="bg-[#073042] px-6 py-10 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.n}
                className="border-l-4 border-[#3ddc84] pl-5"
              >
                <p className="text-3xl font-extrabold text-white">
                  {s.n}
                </p>

                <p className="mt-1 text-sm text-emerald-100">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            WHY ANDROID + IMAGE 2
        ================================================= */}

        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 md:grid-cols-2">

              <div>
                <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
                  Why build for Android
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Build reliable Android applications that reach customers
                  across phones, tablets, foldables, watches and other
                  connected devices.
                </p>
              </div>

              {/* IMAGE 2 */}
              <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-lg ring-1 ring-emerald-100">
                <img
                  src="/assets/images/android-development.png"
                  alt="Android app development"
                  className="h-80 w-full object-contain"
                />
              </div>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {why.map((w) => (
                <article
                  key={w.title}
                  className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-emerald-100 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3ddc84] font-bold text-[#073042]">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#073042]">
                    {w.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {w.text}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            CODE / HOW APPS ARE BUILT
        ================================================= */}

        <section
          id="how"
          className="bg-white px-6 py-24 md:px-16"
        >
          <div className="mx-auto max-w-7xl">

            <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
              How Android apps are built
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              We use modern Android development practices to create
              maintainable applications with clean code and scalable
              architecture.
            </p>

            <div className="mt-16 space-y-24">

              {code.map((c, i) => (
                <div
                  key={c.title}
                  className={`grid items-center gap-10 md:grid-cols-2 ${
                    i % 2
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  <div>

                    <h3 className="text-2xl font-bold text-[#073042]">
                      {c.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {c.text}
                    </p>

                  </div>

                  <div className="overflow-hidden rounded-2xl bg-[#073042] shadow-xl">

                    <p className="border-b border-white/10 px-5 py-3 text-xs text-emerald-200">
                      {c.file}
                    </p>

                    <pre className="overflow-x-auto p-6 text-sm leading-7 text-emerald-100">
                      {c.code}
                    </pre>

                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =================================================
            ARCHITECTURE
            Existing SVG data kept
        ================================================= */}

        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg ring-1 ring-emerald-100">
              <AndroidArchitecture />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
                A clean structure that lasts
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We follow Google recommended architecture. Screens, logic
                and data are kept in separate layers, so your app stays
                easy to test and easy to grow.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="rounded-2xl bg-white px-5 py-3 ring-1 ring-emerald-100">
                  Offline support with a local database
                </li>

                <li className="rounded-2xl bg-white px-5 py-3 ring-1 ring-emerald-100">
                  Automatic tests for business logic
                </li>

                <li className="rounded-2xl bg-white px-5 py-3 ring-1 ring-emerald-100">
                  Modular code for larger teams
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* =================================================
            TOOLS + IMAGE 3
        ================================================= */}

        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 md:grid-cols-2">

              <div>
                <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
                  Tools and libraries we use
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                  We use modern Android tools and libraries to build
                  reliable, scalable and maintainable applications.
                </p>
              </div>

              {/* IMAGE 3 */}
              <div className="overflow-hidden rounded-3xl bg-[#f4fbf7] p-5 shadow-lg ring-1 ring-emerald-100">
                <img
                  src="/assets/images/android-tools.png"
                  alt="Android development tools"
                  className="h-80 w-full object-contain"
                />
              </div>

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-[#f4fbf7] p-6 ring-1 ring-emerald-100 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="font-bold text-[#0a7a43]">
                    {t.name}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            SERVICES + IMAGE 4
        ================================================= */}

        <section className="bg-[#073042] px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-6xl">

            {/* IMAGE 4 */}
            <div className="mb-14 overflow-hidden rounded-3xl bg-white p-5 shadow-lg">
              <img
                src="/assets/images/android-services.png"
                alt="Android application development services"
                className="h-80 w-full object-contain"
              />
            </div>

            <h2 className="text-3xl font-bold md:text-4xl">
              Our Android services
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-emerald-50/80">
              From custom applications to enterprise tools, we provide
              complete Android development services from idea to launch.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
                >
                  <h3 className="text-xl font-bold text-[#3ddc84]">
                    {s.title}
                  </h3>

                  <p className="mt-2 leading-7 text-emerald-50/80">
                    {s.text}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            SCREENS
            Existing SVG data kept
        ================================================= */}

        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
                One app, many screens
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Android devices come in every size. We design adaptive
                layouts, so your app looks right on small phones,
                foldables, tablets and watches.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="rounded-2xl bg-white px-5 py-3 ring-1 ring-emerald-100">
                  Responsive layouts for all screen sizes
                </li>

                <li className="rounded-2xl bg-white px-5 py-3 ring-1 ring-emerald-100">
                  Dark mode and accessibility built in
                </li>

                <li className="rounded-2xl bg-white px-5 py-3 ring-1 ring-emerald-100">
                  Tested on real devices from many brands
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-lg ring-1 ring-emerald-100">
              <AndroidScreens />
            </div>

          </div>
        </section>

        {/* =================================================
            PROCESS + IMAGE 5
        ================================================= */}

        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 md:grid-cols-2">

              <div>
                <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
                  How we work
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  From discovery to launch, we follow a structured
                  development process to build reliable Android
                  applications.
                </p>
              </div>

              {/* IMAGE 5 */}
              <div className="overflow-hidden rounded-3xl bg-[#f4fbf7] p-5 shadow-lg ring-1 ring-emerald-100">
                <img
                  src="/assets/images/android-testing.png"
                  alt="Android application testing"
                  className="h-72 w-full object-contain"
                />
              </div>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-5">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-3xl bg-[#f4fbf7] p-7 ring-1 ring-emerald-100 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3ddc84] font-bold text-[#073042]">
                    {i + 1}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-[#073042]">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            INDUSTRIES
        ================================================= */}

        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
              Industries we build for
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Android applications designed for different business
              requirements and customer experiences.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((d) => (
                <article
                  key={d.title}
                  className="rounded-3xl border-t-8 border-[#3ddc84] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#073042]">
                    {d.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {d.text}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            COMPARISON
        ================================================= */}

        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">

            <h2 className="text-3xl font-bold text-[#073042] md:text-4xl">
              Native Android vs cross-platform
            </h2>

            <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-emerald-100">

              <table className="w-full min-w-[560px] border-collapse text-left">

                <thead>
                  <tr className="bg-[#073042] text-white">
                    <th className="p-4"></th>

                    <th className="p-4 text-[#3ddc84]">
                      Native Android
                    </th>

                    <th className="p-4">
                      Cross-platform
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {compare.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-emerald-100"
                    >
                      <td className="p-4 font-semibold text-[#073042]">
                        {row[0]}
                      </td>

                      <td className="p-4">
                        {row[1]}
                      </td>

                      <td className="p-4 text-slate-600">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        </section>

        {/* =================================================
            FAQ
        ================================================= */}

        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">

            <h2 className="mb-8 text-3xl font-bold text-[#073042] md:text-4xl">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="rounded-2xl bg-white p-6 ring-1 ring-emerald-100 open:ring-2 open:ring-[#3ddc84]"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-[#073042]">
                    {f.q}
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="bg-[#3ddc84] px-6 py-20 text-center text-[#073042]">

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to build your Android app?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg">
            Tell us about your idea and we will suggest the right
            features, timeline and team.
          </p>

          <h2
           
            className="mt-8 inline-flex rounded-full bg-[#073042] px-9 py-4 font-bold text-white transition hover:bg-[#0b4a63]"
          >
            Contact our team
          </h2>

        </section>

      </main>
    </>
  );
}



// ===================== iOS =====================

function IosHero() {
  return (
    <svg viewBox="0 0 320 520" className="mx-auto w-full max-w-[300px]" role="img" aria-label="iPhone app screen">
      <rect x="20" y="10" width="280" height="500" rx="46" fill="#1d1d1f" />
      <rect x="30" y="20" width="260" height="480" rx="38" fill="#f5f5f7" />
      <rect x="125" y="32" width="70" height="20" rx="10" fill="#1d1d1f" />
      <text x="50" y="100" fontSize="32" fontWeight="800" fill="#1d1d1f">Today</text>
      <text x="50" y="122" fontSize="13" fill="#6e6e73">Your activity summary</text>
      {/* hero card */}
      <rect x="46" y="140" width="228" height="120" rx="24" fill="#0071e3" />
      <text x="64" y="172" fontSize="13" fill="#dbeafe">Daily goal</text>
      <text x="64" y="212" fontSize="38" fontWeight="800" fill="#ffffff">82%</text>
      <circle cx="226" cy="204" r="30" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="9" />
      <circle cx="226" cy="204" r="30" fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" strokeDasharray="155 189" transform="rotate(-90 226 204)" />
      {/* small cards */}
      <rect x="46" y="276" width="108" height="86" rx="20" fill="#ffffff" />
      <text x="62" y="306" fontSize="12" fill="#6e6e73">Steps</text>
      <text x="62" y="338" fontSize="24" fontWeight="700" fill="#1d1d1f">8,420</text>
      <rect x="166" y="276" width="108" height="86" rx="20" fill="#ffffff" />
      <text x="182" y="306" fontSize="12" fill="#6e6e73">Sleep</text>
      <text x="182" y="338" fontSize="24" fontWeight="700" fill="#1d1d1f">7h 20m</text>
      {/* list */}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="46" y={378 + i * 44} width="228" height="36" rx="12" fill="#ffffff" />
          <circle cx="66" cy={396 + i * 44} r="9" fill={i ? "#34c759" : "#ff9f0a"} />
          <rect x="84" y={391 + i * 44} width="100" height="7" rx="3.5" fill="#1d1d1f" />
          <rect x="84" y={402 + i * 44} width="60" height="5" rx="2.5" fill="#c7c7cc" />
        </g>
      ))}
      {/* tab bar */}
      <rect x="30" y="454" width="260" height="46" fill="#ffffff" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={68 + i * 62} cy="475" r="9" fill={i === 0 ? "#0071e3" : "#c7c7cc"} />
      ))}
    </svg>
  );
}

function IosArchitecture() {
  const box = (x, y, w, label, sub, dark) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height="56" rx="16" fill={dark ? "#1d1d1f" : "#ffffff"} stroke="#0071e3" strokeWidth="2" />
      <text x={x + w / 2} y={y + 26} textAnchor="middle" fontSize="13" fontWeight="700" fill={dark ? "#ffffff" : "#1d1d1f"}>{label}</text>
      <text x={x + w / 2} y={y + 44} textAnchor="middle" fontSize="10" fill={dark ? "#93c5fd" : "#6e6e73"}>{sub}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 560 320" className="w-full" role="img" aria-label="iOS app architecture">
      <defs>
        <marker id="ia" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#0071e3" />
        </marker>
      </defs>
      {box(20, 30, 140, "SwiftUI View", "what the user sees", true)}
      {box(210, 30, 140, "ViewModel", "screen state")}
      {box(400, 30, 140, "Service", "business rules")}
      <line x1="160" y1="58" x2="208" y2="58" stroke="#0071e3" strokeWidth="2" markerEnd="url(#ia)" />
      <line x1="350" y1="58" x2="398" y2="58" stroke="#0071e3" strokeWidth="2" markerEnd="url(#ia)" />
      <line x1="470" y1="86" x2="385" y2="196" stroke="#0071e3" strokeWidth="2" markerEnd="url(#ia)" />
      <line x1="470" y1="86" x2="495" y2="196" stroke="#0071e3" strokeWidth="2" markerEnd="url(#ia)" />
      {box(325, 200, 120, "SwiftData", "local storage")}
      {box(455, 200, 95, "URLSession", "network")}
      <rect x="20" y="130" width="280" height="120" rx="20" fill="#ffffff" />
      <text x="40" y="160" fontSize="13" fontWeight="700" fill="#1d1d1f">Why this structure?</text>
      <text x="40" y="184" fontSize="12" fill="#6e6e73">Views stay simple and only display data.</text>
      <text x="40" y="204" fontSize="12" fill="#6e6e73">Services hold the rules and talk to the</text>
      <text x="40" y="222" fontSize="12" fill="#6e6e73">server, so they are easy to test.</text>
      <text x="280" y="296" textAnchor="middle" fontSize="12" fill="#6e6e73">Clean layers keep your app easy to update for years.</text>
    </svg>
  );
}

function IosReleaseFlow() {
  const steps = [
    ["Develop", "Xcode"],
    ["Test", "TestFlight"],
    ["Review", "App Review"],
    ["Release", "App Store"],
  ];
  return (
    <svg viewBox="0 0 780 170" className="w-full" role="img" aria-label="App release flow from development to the App Store">
      <defs>
        <marker id="ib" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#0071e3" />
        </marker>
      </defs>
      {steps.map(([t, s], i) => {
        const x = 20 + i * 190;
        return (
          <g key={t}>
            <rect x={x} y="40" width="150" height="86" rx="22" fill={i === 3 ? "#0071e3" : "#ffffff"} stroke="#0071e3" strokeWidth="2" />
            <text x={x + 75} y="80" textAnchor="middle" fontSize="16" fontWeight="700" fill={i === 3 ? "#ffffff" : "#1d1d1f"}>{t}</text>
            <text x={x + 75} y="104" textAnchor="middle" fontSize="12" fill={i === 3 ? "#dbeafe" : "#6e6e73"}>{s}</text>
            {i < 3 && <line x1={x + 152} y1="83" x2={x + 188} y2="83" stroke="#0071e3" strokeWidth="2" markerEnd="url(#ib)" />}
          </g>
        );
      })}
      <text x="390" y="156" textAnchor="middle" fontSize="12" fill="#6e6e73">We handle certificates, builds, screenshots and submission for you.</text>
    </svg>
  );
}

function IosPage() {
  const stats = [
    { n: "2007", l: "iPhone launched" },
    { n: "Swift", l: "Apple modern language for apps" },
    { n: "SwiftUI", l: "Declarative UI framework" },
    { n: "App Store", l: "Trusted global distribution" },
  ];

  const why = [
    { title: "Premium Users", text: "iPhone users are known for engaging with apps and paying for quality products and services." },
    { title: "Polished Experience", text: "Smooth animations, consistent design and strong accessibility come naturally to native iOS." },
    { title: "Privacy and Security", text: "Face ID, Keychain and Apple privacy tools help protect your customers data." },
    { title: "Apple Ecosystem", text: "Extend one app to iPad, Apple Watch, Apple TV, widgets and Siri shortcuts." },
    { title: "Consistent Devices", text: "A limited range of devices and fast OS updates make testing and support simpler." },
    { title: "Powerful Frameworks", text: "Core ML, ARKit, HealthKit, StoreKit and Apple Pay are built into the platform." },
  ];

  const code = [
    {
      title: "Screens with SwiftUI",
      text: "SwiftUI describes what a screen should look like. When data changes, the screen updates itself with smooth animation.",
      file: "ProductList.swift",
      code: `struct ProductList: View {
    @State private var products: [Product] = []

    var body: some View {
        List(products) { product in
            HStack {
                Text(product.name)
                Spacer()
                Text(product.price)
            }
        }
        .task { products = await loadProducts() }
    }
}`,
    },
    {
      title: "Modern networking with async/await",
      text: "Loading data from your server is written in clear, step-by-step code. The app stays responsive while it waits.",
      file: "ProductService.swift",
      code: `func loadProducts() async throws -> [Product] {
    let url = URL(string: "https://api.example.com/products")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode([Product].self, from: data)
}`,
    },
    {
      title: "Sign in with Face ID",
      text: "Native iOS lets users unlock sensitive screens with Face ID or Touch ID in a few lines of code.",
      file: "BiometricAuth.swift",
      code: `import LocalAuthentication

func unlock() {
    let context = LAContext()
    context.evaluatePolicy(
        .deviceOwnerAuthenticationWithBiometrics,
        localizedReason: "Unlock your account"
    ) { success, error in
        if success { showAccount() }
    }
}`,
    },
  ];

  const tools = [
    { name: "Xcode", text: "Apple official IDE with simulator and profiler." },
    { name: "SwiftUI", text: "Modern UI framework for every Apple device." },
    { name: "Swift Concurrency", text: "async/await for responsive apps." },
    { name: "SwiftData", text: "Local storage for offline use." },
    { name: "Combine", text: "Reactive updates for changing data." },
    { name: "StoreKit", text: "In-app purchases and subscriptions." },
    { name: "TestFlight", text: "Beta testing with real users before launch." },
    { name: "Push Notifications", text: "Reliable alerts through Apple services." },
  ];

  const services = [
    { title: "Custom iPhone App Development", text: "Apps designed around your users and business goals." },
    { title: "iPad Apps", text: "Layouts that use larger screens, split view and Apple Pencil." },
    { title: "Subscription & Payment Apps", text: "In-app purchases, subscriptions and Apple Pay." },
    { title: "Health & Fitness Apps", text: "HealthKit, workouts and Apple Watch companion apps." },
    { title: "API & Backend Integration", text: "Connect to your servers, CRMs and third-party services." },
    { title: "App Modernisation", text: "Move Objective-C code to Swift and UIKit screens to SwiftUI." },
    { title: "App Store Publishing", text: "Certificates, screenshots, review guidelines and submission." },
    { title: "Testing, Support & Updates", text: "Updates for every new iOS release, plus bug fixes." },
  ];

  const steps = [
    { title: "Discover", text: "We study your users, goals and competitors." },
    { title: "Design", text: "We follow Apple Human Interface Guidelines for a natural feel." },
    { title: "Build", text: "We develop in Swift with regular demos on TestFlight." },
    { title: "Test", text: "We test on real iPhones and iPads across iOS versions." },
    { title: "Launch & Support", text: "We submit to the App Store and keep improving." },
  ];

  const industries = [
    { title: "Fintech & Banking", text: "Secure wallets, payments and account tools." },
    { title: "Healthcare & Wellness", text: "Patient apps, fitness tracking and reminders." },
    { title: "Retail & E-commerce", text: "Shopping, loyalty and Apple Pay checkout." },
    { title: "Media & Entertainment", text: "Streaming, podcasts and content apps." },
    { title: "Education", text: "Interactive lessons and progress tracking." },
    { title: "Travel & Hospitality", text: "Bookings, boarding passes and offline guides." },
  ];

  const compare = [
    ["Device features", "Full access (Face ID, camera, sensors)", "Limited"],
    ["Offline use", "Complete offline support", "Limited"],
    ["Push notifications", "Fully supported", "Limited"],
    ["App Store presence", "Yes", "No"],
    ["Speed and animation", "Smooth and native", "Depends on the browser"],
  ];

  const faqs = [
    { q: "How long does an iOS app take to build?", a: "A focused app usually takes 2 to 3 months. Larger apps take longer. You get a clear timeline after discovery." },
    { q: "Do I need an Apple Developer account?", a: "Yes, to publish on the App Store. We can help you set it up and publish under your own account." },
    { q: "Will Apple approve my app?", a: "We build to Apple guidelines and prepare your submission carefully. If Apple requests changes, we handle them quickly." },
    { q: "Can you build the iPad and Apple Watch versions too?", a: "Yes. SwiftUI lets us share much of the code across iPhone, iPad and Apple Watch." },
    { q: "Should I build for iOS first or Android first?", a: "It depends on your audience and market. We look at your users and help you decide, or build both." },
    { q: "Do you provide support after launch?", a: "Yes. We offer maintenance for bug fixes, security updates and new iOS versions." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#f5f5f7] text-[#1d1d1f]">

        {/* HERO */}
        <section className="bg-white px-6 pb-20 pt-24 md:px-16 md:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#0071e3]">Mobile Application Development</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              iOS Apps Development
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73] md:text-xl">
              Beautiful, fast and secure iPhone and iPad apps built with Swift and SwiftUI, ready for the App Store.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <p  className="rounded-full bg-[#0071e3] px-8 py-4 font-semibold text-white transition hover:bg-[#0058b0]">
                Start your app
              </p>
              <p className="rounded-full px-8 py-4 font-semibold text-[#0071e3] transition hover:bg-[#f0f7ff]">
                See how we build
              </p>
            </div>
          </div>
          <div className="mt-14">
            <IosHero />
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 py-16 md:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="rounded-3xl bg-white p-7 text-center">
                <p className="text-3xl font-extrabold text-[#0071e3]">{s.n}</p>
                <p className="mt-2 text-sm text-[#6e6e73]">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">Why build for iOS</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {why.map((w) => (
                <article key={w.title} className="rounded-3xl bg-white p-8">
                  <h3 className="text-xl font-bold">{w.title}</h3>
                  <p className="mt-3 leading-7 text-[#6e6e73]">{w.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CODE */}
        <section id="how" className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl space-y-20">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">How iOS apps are built</h2>
            {code.map((c, i) => (
              <div key={c.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-[#6e6e73]">{c.text}</p>
                </div>
                <div className="overflow-hidden rounded-3xl bg-[#1d1d1f] shadow-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs text-[#a1a1a6]">{c.file}</span>
                  </div>
                  <pre className="overflow-x-auto p-6 text-sm leading-7 text-[#e5e5ea]">{c.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-4">
              <IosArchitecture />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Built to last</h2>
              <p className="mt-5 text-lg leading-8 text-[#6e6e73]">
                We separate what users see from the rules and data behind it. That makes your app faster to update and simple to test.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="rounded-2xl bg-white px-5 py-3">Offline access with local storage</li>
                <li className="rounded-2xl bg-white px-5 py-3">Automated tests for key features</li>
                <li className="rounded-2xl bg-white px-5 py-3">Shared code across iPhone, iPad and Apple Watch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Tools and frameworks we use</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((t) => (
                <div key={t.name} className="rounded-3xl bg-[#f5f5f7] p-6">
                  <p className="font-bold text-[#0071e3]">{t.name}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#1d1d1f] px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Our iOS services</h2>
            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {services.map((s) => (
                <div key={s.title} className="grid gap-3 py-7 md:grid-cols-[1fr_1.2fr]">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="leading-7 text-[#a1a1a6]">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELEASE FLOW */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">From code to the App Store</h2>
              <p className="mt-5 text-lg leading-8 text-[#6e6e73]">
                Publishing on iOS has several steps. We manage each one, so your launch goes smoothly.
              </p>
            </div>
            <div className="mt-12 rounded-3xl bg-white p-6">
              <IosReleaseFlow />
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">How we work</h2>
            <ol className="mt-12 space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-lg font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-1 leading-7 text-[#6e6e73]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Industries we build for</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((d) => (
                <article key={d.title} className="rounded-3xl bg-white p-8">
                  <h3 className="text-xl font-bold">{d.title}</h3>
                  <p className="mt-2 leading-7 text-[#6e6e73]">{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Native iOS app vs mobile website</h2>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-[#d2d2d7]">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#f5f5f7]">
                    <th className="p-4"> </th>
                    <th className="p-4 text-[#0071e3]">Native iOS app</th>
                    <th className="p-4 text-[#6e6e73]">Mobile website</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row) => (
                    <tr key={row[0]} className="border-t border-[#d2d2d7]">
                      <td className="p-4 font-semibold">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4 text-[#6e6e73]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight md:text-5xl">Frequently asked questions</h2>
            {faqs.map((f) => (
              <details key={f.q} className="rounded-3xl bg-white p-6">
                <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
                <p className="mt-4 leading-7 text-[#6e6e73]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0071e3] px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Ready to build your iOS app?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Tell us about your idea and we will suggest the right features, timeline and team.
          </p>
          <h2 className="mt-8 inline-flex rounded-full bg-white px-9 py-4 font-semibold text-[#0071e3] transition hover:bg-blue-50">
            Contact our team
          </h2>
        </section>

      </main>
    </>
  );
}


// ===================== IONIC =====================

function IonicHero() {
  return (
    <svg viewBox="0 0 520 380" className="w-full" role="img" aria-label="One Ionic app on laptop and phone">
      <circle cx="260" cy="190" r="175" fill="#3880ff" fillOpacity="0.1" />
      {/* laptop */}
      <rect x="30" y="60" width="330" height="205" rx="14" fill="#0f1b3d" />
      <rect x="40" y="70" width="310" height="185" rx="8" fill="#ffffff" />
      <rect x="40" y="70" width="310" height="26" rx="8" fill="#3880ff" />
      <rect x="40" y="86" width="310" height="10" fill="#3880ff" />
      <text x="56" y="88" fontSize="12" fontWeight="700" fill="#ffffff">My App</text>
      <rect x="56" y="112" width="90" height="12" rx="6" fill="#0f1b3d" />
      <rect x="56" y="132" width="200" height="7" rx="3.5" fill="#cbd5e1" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={56 + i * 96} y="158" width="86" height="80" rx="12" fill={i === 1 ? "#3880ff" : "#eef4ff"} />
          <circle cx={78 + i * 96} cy="182" r="9" fill={i === 1 ? "#ffffff" : "#3880ff"} />
          <rect x={68 + i * 96} y="206" width="52" height="7" rx="3.5" fill={i === 1 ? "#ffffff" : "#0f1b3d"} />
          <rect x={68 + i * 96} y="218" width="34" height="5" rx="2.5" fill={i === 1 ? "#bfdbfe" : "#94a3b8"} />
        </g>
      ))}
      <rect x="10" y="265" width="370" height="14" rx="7" fill="#0f1b3d" />
      {/* phone */}
      <rect x="395" y="90" width="110" height="240" rx="22" fill="#0f1b3d" />
      <rect x="402" y="100" width="96" height="220" rx="16" fill="#ffffff" />
      <rect x="402" y="100" width="96" height="30" rx="16" fill="#3880ff" />
      <rect x="402" y="116" width="96" height="14" fill="#3880ff" />
      <rect x="412" y="142" width="76" height="10" rx="5" fill="#0f1b3d" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="412" y={164 + i * 46} width="76" height="38" rx="10" fill={i === 1 ? "#3880ff" : "#eef4ff"} />
      ))}
      <path d="M362 190 L390 190" stroke="#3880ff" strokeWidth="3" strokeDasharray="5 4" />
      <rect x="150" y="310" width="220" height="34" rx="17" fill="#3880ff" />
      <text x="260" y="332" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">One codebase</text>
    </svg>
  );
}

function IonicArchitecture() {
  const box = (x, y, w, h, label, sub, style) => (
    <g key={label + x}>
      <rect x={x} y={y} width={w} height={h} rx="14" fill={style === "dark" ? "#0f1b3d" : style === "blue" ? "#3880ff" : "#ffffff"} stroke="#3880ff" strokeWidth="2" />
      <text x={x + w / 2} y={y + h / 2 - (sub ? 2 : -5)} textAnchor="middle" fontSize="13" fontWeight="700" fill={style ? "#ffffff" : "#0f1b3d"}>{label}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fontSize="10" fill={style ? "#bfdbfe" : "#64748b"}>{sub}</text>}
    </g>
  );
  return (
    <svg viewBox="0 0 560 340" className="w-full" role="img" aria-label="Ionic app architecture with Capacitor">
      <defs>
        <marker id="oa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#3880ff" />
        </marker>
      </defs>
      {box(60, 16, 440, 56, "Your app", "Angular, React or Vue  +  Ionic UI components", "dark")}
      <line x1="280" y1="72" x2="280" y2="108" stroke="#3880ff" strokeWidth="2" markerEnd="url(#oa)" />
      {box(140, 110, 280, 50, "Capacitor", "connects web code to the device", "blue")}
      <line x1="280" y1="160" x2="280" y2="190" stroke="#3880ff" strokeWidth="2" markerEnd="url(#oa)" />
      {box(20, 192, 120, 46, "Camera")}
      {box(150, 192, 120, 46, "GPS")}
      {box(280, 192, 120, 46, "Push")}
      {box(410, 192, 130, 46, "Storage")}
      <line x1="280" y1="238" x2="280" y2="262" stroke="#3880ff" strokeWidth="2" markerEnd="url(#oa)" />
      {box(60, 264, 130, 46, "iOS")}
      {box(215, 264, 130, 46, "Android")}
      {box(370, 264, 130, 46, "Web / PWA")}
    </svg>
  );
}

function IonicBuildFlow() {
  const steps = [
    ["Write", "web code"],
    ["Build", "ionic build"],
    ["Sync", "cap sync"],
    ["Open", "Xcode / Android Studio"],
    ["Publish", "App Store / Google Play"],
  ];
  return (
    <svg viewBox="0 0 840 150" className="w-full" role="img" aria-label="Ionic build and publish flow">
      <defs>
        <marker id="ob" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#3880ff" />
        </marker>
      </defs>
      {steps.map(([t, s], i) => {
        const x = 12 + i * 166;
        return (
          <g key={t}>
            <rect x={x} y="34" width="138" height="76" rx="16" fill={i === 4 ? "#3880ff" : "#ffffff"} stroke="#3880ff" strokeWidth="2" />
            <text x={x + 69} y="68" textAnchor="middle" fontSize="15" fontWeight="700" fill={i === 4 ? "#ffffff" : "#0f1b3d"}>{t}</text>
            <text x={x + 69} y="90" textAnchor="middle" fontSize="10" fill={i === 4 ? "#dbeafe" : "#64748b"}>{s}</text>
            {i < 4 && <line x1={x + 140} y1="72" x2={x + 164} y2="72" stroke="#3880ff" strokeWidth="2" markerEnd="url(#ob)" />}
          </g>
        );
      })}
      <text x="420" y="138" textAnchor="middle" fontSize="12" fill="#64748b">The same source code becomes an iOS app, an Android app and a website.</text>
    </svg>
  );
}

function IonicPage() {
  const stats = [
    { n: "2013", l: "Ionic Framework created" },
    { n: "1 codebase", l: "iOS, Android and web" },
    { n: "Capacitor", l: "Native runtime for device features" },
    { n: "Open source", l: "Large developer community" },
  ];

  const why = [
    { title: "One Codebase", text: "Build once and release on iOS, Android and the web instead of paying for separate apps." },
    { title: "Faster Time to Market", text: "Reuse your team web skills and launch your first version sooner." },
    { title: "Lower Cost", text: "One team and one set of code means simpler planning, fewer bugs and less maintenance." },
    { title: "Native Look and Feel", text: "Ionic components adapt to iOS and Android design, so the app feels at home on each phone." },
    { title: "Device Features", text: "Use the camera, GPS, push notifications and files through Capacitor plugins." },
    { title: "Your Choice of Framework", text: "Works with Angular, React or Vue, so you can keep the technology your team knows." },
  ];

  const code = [
    {
      title: "Screens with Ionic components",
      text: "Ionic gives you ready-made mobile components such as headers, lists and buttons. They look right on both iPhone and Android.",
      file: "OrdersPage.tsx",
      code: `<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Orders</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonList>
      {orders.map(o => (
        <IonItem key={o.id}>{o.name}</IonItem>
      ))}
    </IonList>
  </IonContent>
</IonPage>`,
    },
    {
      title: "Use the camera with Capacitor",
      text: "Capacitor connects your web code to the phone. One function call opens the native camera on both iOS and Android.",
      file: "camera.ts",
      code: `import { Camera, CameraResultType } from "@capacitor/camera";

async function takePhoto() {
  const photo = await Camera.getPhoto({
    quality: 80,
    resultType: CameraResultType.Uri,
  });
  return photo.webPath;
}`,
    },
    {
      title: "Build and open the native project",
      text: "When your app is ready, a few commands package it and open it in Xcode or Android Studio for testing and publishing.",
      file: "terminal",
      code: `ionic build
npx cap sync

npx cap open ios
npx cap open android`,
    },
  ];

  const tools = [
    { name: "Ionic Framework", text: "Mobile UI components." },
    { name: "Capacitor", text: "Native runtime and plugins." },
    { name: "Angular / React / Vue", text: "Your choice of web framework." },
    { name: "TypeScript", text: "Safer, easier-to-maintain code." },
    { name: "Capacitor Plugins", text: "Camera, GPS, push, files and more." },
    { name: "Firebase", text: "Push notifications, analytics and login." },
    { name: "Xcode & Android Studio", text: "Final builds and store publishing." },
    { name: "PWA support", text: "Also deploy as an installable web app." },
  ];

  const services = [
    { title: "Cross-Platform App Development", text: "One app for iOS, Android and the web from a single codebase." },
    { title: "MVP and Startup Apps", text: "Launch a working first version quickly and improve it with user feedback." },
    { title: "Business and Internal Apps", text: "Forms, approvals, field data and dashboards for your team." },
    { title: "Progressive Web Apps", text: "Installable web apps that work offline and load fast." },
    { title: "Native Feature Integration", text: "Camera, GPS, biometrics, push notifications and Bluetooth." },
    { title: "Migration to Capacitor", text: "Move older Cordova or Ionic apps to modern Ionic and Capacitor." },
    { title: "API & Backend Integration", text: "Connect to your servers, CRMs and payment gateways." },
    { title: "Publishing, Support & Updates", text: "App Store and Google Play release, plus ongoing maintenance." },
  ];

  const steps = [
    { title: "Discover", text: "We define goals, users and must-have features." },
    { title: "Design", text: "We create mobile screens that feel right on both platforms." },
    { title: "Build", text: "We develop the shared app in short sprints." },
    { title: "Test", text: "We test on real iPhones, Android phones and browsers." },
    { title: "Publish & Support", text: "We release to the stores and keep improving." },
  ];

  const industries = [
    { title: "Startups & MVPs", text: "Validate your idea on both platforms without doubling the cost." },
    { title: "Field Service", text: "Inspection forms, photos, GPS and offline data capture." },
    { title: "Healthcare", text: "Booking, reminders and secure patient information." },
    { title: "Education", text: "Learning apps and student portals on any device." },
    { title: "Retail", text: "Catalogues, loyalty and order tracking." },
    { title: "Events & Membership", text: "Tickets, schedules, check-in and notifications." },
  ];

  const compare = [
    ["Codebase", "One shared codebase", "Separate app per platform"],
    ["Team needed", "Web developers", "Swift and Kotlin specialists"],
    ["Time to market", "Faster", "Slower"],
    ["Device features", "Through Capacitor plugins", "Direct access"],
    ["Best for", "Business apps, MVPs and content apps", "3D games and very demanding graphics"],
  ];

  const faqs = [
    { q: "What is Ionic?", a: "Ionic is an open-source framework for building mobile apps with web technologies. With Capacitor, the same code runs as an iOS app, an Android app and a website." },
    { q: "Is an Ionic app as good as a native app?", a: "For most business, content and e-commerce apps, yes. For heavy 3D games or very advanced graphics, fully native development is the better choice." },
    { q: "Can an Ionic app use the camera and GPS?", a: "Yes. Capacitor plugins give access to the camera, location, push notifications, files, biometrics and more." },
    { q: "Can you move my existing website into an app?", a: "Often yes. If your site is built with Angular, React or Vue, much of the code can be reused." },
    { q: "Will my app be published on the App Store and Google Play?", a: "Yes. We prepare store listings, builds and submissions for both stores." },
    { q: "Do you offer support after launch?", a: "Yes. We offer maintenance for updates, bug fixes and new OS versions." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-800">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#eef4ff] via-white to-[#e6efff] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-[#3880ff] px-5 py-2 text-sm font-semibold text-white">
                Mobile Application Development
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#0f1b3d] md:text-6xl">
                Ionic Apps Development
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                One codebase for iOS, Android and the web. We build cross-platform apps with Ionic and Capacitor that save time and budget without losing quality.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <h2  className="rounded-xl bg-[#3880ff] px-8 py-4 font-semibold text-white transition hover:bg-[#2b6be0]">
                  Start your app
                </h2>
                <h2 className="rounded-xl border-2 border-[#3880ff] px-8 py-4 font-semibold text-[#3880ff] transition hover:bg-[#3880ff] hover:text-white">
                  See how we build
                </h2>
              </div>
            </div>
            <IonicHero />
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#0f1b3d] px-6 py-10 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="border-l-4 border-[#3880ff] pl-5">
                <p className="text-3xl font-extrabold text-white">{s.n}</p>
                <p className="mt-1 text-sm text-blue-200">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">Why choose Ionic</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {why.map((w) => (
                <article key={w.title} className="rounded-2xl border border-blue-100 bg-[#f7faff] p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3880ff] font-bold text-white">✓</div>
                  <h3 className="mt-5 text-xl font-bold text-[#0f1b3d]">{w.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{w.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CODE */}
        <section id="how" className="bg-[#f7faff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl space-y-20">
            <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">How Ionic apps are built</h2>
            {code.map((c, i) => (
              <div key={c.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f1b3d]">{c.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{c.text}</p>
                </div>
                <div className="overflow-hidden rounded-2xl bg-[#0f1b3d] shadow-xl">
                  <p className="border-b border-white/10 px-5 py-3 text-xs text-blue-200">{c.file}</p>
                  <pre className="overflow-x-auto p-6 text-sm leading-7 text-blue-50">{c.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-[#f7faff] p-4">
              <IonicArchitecture />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">How one app runs everywhere</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Your app is written with web technologies. Capacitor is the bridge that lets it use the phone camera, location and notifications, exactly like a native app.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="rounded-xl border-l-4 border-[#3880ff] bg-[#f7faff] px-5 py-3">Shared business logic across platforms</li>
                <li className="rounded-xl border-l-4 border-[#3880ff] bg-[#f7faff] px-5 py-3">Native plugins where the phone needs them</li>
                <li className="rounded-xl border-l-4 border-[#3880ff] bg-[#f7faff] px-5 py-3">A website version from the same code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="bg-[#f7faff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">Tools and technologies we use</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((t) => (
                <div key={t.name} className="rounded-2xl border border-blue-100 bg-white p-6">
                  <p className="font-bold text-[#3880ff]">{t.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#0f1b3d] px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">Our Ionic services</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <h3 className="text-xl font-bold text-[#7fb0ff]">{s.title}</h3>
                  <p className="mt-2 leading-7 text-blue-100/80">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BUILD FLOW */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">From code to the stores</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Building and publishing follows a simple flow. We take care of every step, including signing and store submission.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-blue-100 bg-[#f7faff] p-6">
              <IonicBuildFlow />
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#f7faff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">Our process</h2>
            <ol className="mt-12 border-l-4 border-[#3880ff]">
              {steps.map((s, i) => (
                <li key={s.title} className="relative pb-10 pl-10 last:pb-0">
                  <span className="absolute -left-[18px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#3880ff] text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="text-xl font-bold text-[#0f1b3d]">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">Who uses Ionic apps</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((d) => (
                <article key={d.title} className="rounded-2xl border-t-8 border-[#3880ff] bg-[#f7faff] p-7">
                  <h3 className="text-xl font-bold text-[#0f1b3d]">{d.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bg-[#f7faff] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#0f1b3d] md:text-4xl">Ionic vs fully native apps</h2>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-blue-100 bg-white">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#3880ff] text-white">
                    <th className="p-4"> </th>
                    <th className="p-4">Ionic</th>
                    <th className="p-4">Two native apps</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row) => (
                    <tr key={row[0]} className="border-t border-blue-100">
                      <td className="p-4 font-semibold text-[#0f1b3d]">{row[0]}</td>
                      <td className="p-4">{row[1]}</td>
                      <td className="p-4 text-slate-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="mb-8 text-3xl font-bold text-[#0f1b3d] md:text-4xl">Frequently asked questions</h2>
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-blue-100 bg-[#f7faff] p-6 open:border-[#3880ff]">
                <summary className="cursor-pointer text-lg font-semibold text-[#0f1b3d]">{f.q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3880ff] px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">Want one app for every platform?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Tell us your idea and we will suggest the fastest, most cost-effective way to launch.
          </p>
          <h2 className="mt-8 inline-flex rounded-xl bg-white px-9 py-4 font-bold text-[#3880ff] transition hover:bg-blue-50">
            Contact our team
          </h2>
        </section>

      </main>
    </>
  );
}


// ===================== WEARABLE =====================

function WearableHero() {
  const ring = (r, sw, color, dash, total) => (
    <g key={r}>
      <circle cx="380" cy="210" r={r} fill="none" stroke={color} strokeOpacity="0.2" strokeWidth={sw} />
      <circle cx="380" cy="210" r={r} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeDasharray={`${dash} ${total}`} transform="rotate(-90 380 210)" />
    </g>
  );
  return (
    <svg viewBox="0 0 520 420" className="w-full" role="img" aria-label="Round and square smartwatches showing health data">
      <circle cx="260" cy="210" r="190" fill="#ff6b57" fillOpacity="0.08" />
      {/* round watch */}
      <rect x="120" y="30" width="60" height="80" rx="14" fill="#1f2937" />
      <rect x="120" y="310" width="60" height="80" rx="14" fill="#1f2937" />
      <circle cx="150" cy="210" r="98" fill="#0b0f14" stroke="#374151" strokeWidth="6" />
      <circle cx="150" cy="210" r="78" fill="none" stroke="#1f2937" strokeWidth="10" />
      <circle cx="150" cy="210" r="78" fill="none" stroke="#ff6b57" strokeWidth="10" strokeLinecap="round" strokeDasharray="330 490" transform="rotate(-90 150 210)" />
      <text x="150" y="222" textAnchor="middle" fontSize="46" fontWeight="800" fill="#ffffff">72</text>
      <text x="150" y="246" textAnchor="middle" fontSize="13" fill="#ff8a7a">BPM</text>
      <path d="M126 186 c-6 -8 4 -16 10 -8 c6 -8 16 0 10 8 l-10 10 z" fill="#ff6b57" />
      {/* square watch */}
      <rect x="335" y="60" width="90" height="70" rx="14" fill="#1f2937" />
      <rect x="335" y="290" width="90" height="70" rx="14" fill="#1f2937" />
      <rect x="295" y="110" width="170" height="200" rx="44" fill="#0b0f14" stroke="#374151" strokeWidth="6" />
      {ring(56, 11, "#ff6b57", 250, 352)}
      {ring(42, 11, "#a3e635", 170, 264)}
      {ring(28, 11, "#5eead4", 100, 176)}
      <text x="380" y="288" textAnchor="middle" fontSize="12" fill="#9ca3af">Activity</text>
      <text x="260" y="408" textAnchor="middle" fontSize="12" fill="#9ca3af">Wear OS  and  watchOS</text>
    </svg>
  );
}

function WearableArchitecture() {
  const box = (x, y, w, label, sub, hot) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height="74" rx="16" fill={hot ? "#ff6b57" : "#111827"} stroke={hot ? "#ff6b57" : "#374151"} strokeWidth="2" />
      <text x={x + w / 2} y={y + 33} textAnchor="middle" fontSize="14" fontWeight="700" fill={hot ? "#0b0f14" : "#ffffff"}>{label}</text>
      <text x={x + w / 2} y={y + 54} textAnchor="middle" fontSize="10" fill={hot ? "#3b0f08" : "#9ca3af"}>{sub}</text>
    </g>
  );
  const arrow = (x1, x2, label) => (
    <g key={label}>
      <line x1={x1} y1="98" x2={x2} y2="98" stroke="#5eead4" strokeWidth="2" markerEnd="url(#wa)" />
      <text x={(x1 + x2) / 2} y="86" textAnchor="middle" fontSize="10" fill="#5eead4">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 780 230" className="w-full" role="img" aria-label="Wearable app data flow from sensors to the cloud">
      <defs>
        <marker id="wa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#5eead4" />
        </marker>
      </defs>
      {box(10, 60, 150, "Sensors", "heart rate, motion, GPS")}
      {arrow(162, 218, "reads")}
      {box(220, 60, 150, "Watch app", "glanceable screens", true)}
      {arrow(372, 428, "syncs")}
      {box(430, 60, 150, "Phone app", "history and settings")}
      {arrow(582, 638, "uploads")}
      {box(640, 60, 130, "Cloud API", "storage and alerts")}
      <text x="390" y="190" textAnchor="middle" fontSize="12" fill="#9ca3af">Small, fast interactions on the wrist. Heavy work on the phone and in the cloud.</text>
    </svg>
  );
}

function WearableScreens() {
  const watch = (cx, title, children) => (
    <g key={title}>
      <rect x={cx - 24} y="20" width="48" height="26" rx="8" fill="#1f2937" />
      <rect x={cx - 24} y="192" width="48" height="26" rx="8" fill="#1f2937" />
      <circle cx={cx} cy="119" r="72" fill="#0b0f14" stroke="#374151" strokeWidth="5" />
      {children}
      <text x={cx} y="238" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">{title}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 560 260" className="w-full" role="img" aria-label="Watch face, tile and app screens">
      {watch(100, "Watch face", (
        <>
          <text x="100" y="128" textAnchor="middle" fontSize="34" fontWeight="800" fill="#ffffff">10:24</text>
          <circle cx="66" cy="84" r="12" fill="none" stroke="#ff6b57" strokeWidth="4" />
          <circle cx="134" cy="84" r="12" fill="none" stroke="#a3e635" strokeWidth="4" />
          <circle cx="100" cy="166" r="12" fill="none" stroke="#5eead4" strokeWidth="4" />
        </>
      ))}
      {watch(280, "Tile", (
        <>
          <text x="280" y="96" textAnchor="middle" fontSize="12" fill="#9ca3af">Next workout</text>
          <text x="280" y="126" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ffffff">Run 5 km</text>
          <rect x="242" y="140" width="76" height="24" rx="12" fill="#ff6b57" />
          <text x="280" y="157" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0b0f14">Start</text>
        </>
      ))}
      {watch(460, "App", (
        <>
          <text x="460" y="100" textAnchor="middle" fontSize="12" fill="#9ca3af">Heart rate</text>
          <text x="460" y="144" textAnchor="middle" fontSize="42" fontWeight="800" fill="#ff6b57">72</text>
          <path d="M416 164 h20 l6 -12 l10 22 l8 -16 h40" stroke="#5eead4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ))}
    </svg>
  );
}

// function WearablePage() {
//   const stats = [
//     { n: "Wear OS", l: "Google smartwatch platform" },
//     { n: "watchOS", l: "Apple Watch platform" },
//     { n: "Always on", l: "Sensors that track health and movement" },
//     { n: "Glanceable", l: "Designed for seconds, not minutes" },
//   ];

//   const why = [
//     { title: "Always With the User", text: "A watch is worn all day, so your app can reach people at the exact moment they need it." },
//     { title: "Health and Fitness Data", text: "Heart rate, steps, sleep and workouts open the door to powerful health products." },
//     { title: "Fast Interactions", text: "Users glance, tap and get on with their day. Short, focused screens win." },
//     { title: "Real-Time Alerts", text: "Notifications on the wrist are seen quickly, which is ideal for reminders and urgent updates." },
//     { title: "Hands-Free Use", text: "Voice, taps and quick actions work when a phone is out of reach, for example while exercising." },
//     { title: "Stronger Engagement", text: "A watch app extends your phone app and keeps your brand in front of users." },
//   ];

//   const code = [
//     {
//       title: "Watch screens with Compose for Wear OS",
//       text: "Screens are built for round and square displays, with small text, big touch targets and a curved time display.",
//       file: "WorkoutScreen.kt",
//       code: `@Composable
// fun WorkoutScreen(bpm: Int) {
//     Scaffold(timeText = { TimeText() }) {
//         Column(
//             modifier = Modifier.fillMaxSize(),
//             verticalArrangement = Arrangement.Center,
//             horizontalAlignment = Alignment.CenterHorizontally
//         ) {
//             Text("$bpm", style = MaterialTheme.typography.title1)
//             Text("BPM")
//         }
//     }
// }`,
//     },
//     {
//       title: "Apple Watch screens with SwiftUI",
//       text: "The same ideas apply on Apple Watch. SwiftUI makes it simple to show live workout data and share code with the iPhone app.",
//       file: "WorkoutView.swift",
//       code: `struct WorkoutView: View {
//     @StateObject var workout = WorkoutManager()

//     var body: some View {
//         VStack {
//             Text("\\(Int(workout.heartRate))")
//                 .font(.largeTitle)
//                 .foregroundColor(.red)
//             Text("BPM")
//         }
//     }
// }`,
//     },
//     {
//       title: "Sync data with the phone",
//       text: "The watch sends readings to the phone app, which stores history and uploads it to your server. This keeps the watch fast and saves battery.",
//       file: "SendHeartRate.kt",
//       code: `val request = PutDataMapRequest.create("/heart_rate").apply {
//     dataMap.putInt("bpm", bpm)
// }.asPutDataRequest().setUrgent()

// Wearable.getDataClient(context).putDataItem(request)`,
//     },
//   ];

//   const tools = [
//     { name: "Wear OS", text: "Apps for Pixel Watch, Galaxy Watch and more." },
//     { name: "watchOS", text: "Apps for Apple Watch." },
//     { name: "Compose for Wear OS", text: "Modern UI for round and square screens." },
//     { name: "SwiftUI", text: "Shared UI code across Apple devices." },
//     { name: "Health Services & HealthKit", text: "Heart rate, workouts and activity data." },
//     { name: "Tiles & Complications", text: "Quick info right on the watch face." },
//     { name: "Bluetooth LE", text: "Connect with sensors and other devices." },
//     { name: "Firebase", text: "Cloud sync, alerts and analytics." },
//   ];

//   const services = [
//     { title: "Smartwatch App Development", text: "Standalone or companion apps for Wear OS and Apple Watch." },
//     { title: "Fitness & Health Tracking", text: "Workouts, heart rate, sleep and activity goals." },
//     { title: "Watch Faces, Tiles & Complications", text: "Useful information visible in one glance." },
//     { title: "Companion Phone Apps", text: "History, charts and settings on the phone that pair with the watch." },
//     { title: "Notifications & Quick Actions", text: "Reply, confirm or dismiss straight from the wrist." },
//     { title: "Device & Sensor Integration", text: "Bluetooth bands, medical sensors and smart accessories." },
//     { title: "Battery and Performance Tuning", text: "Efficient code so your app does not drain the watch." },
//     { title: "Testing, Publishing & Support", text: "Testing on real watches, store release and updates." },
//   ];

//   const steps = [
//     { title: "Discover", text: "We decide which moments matter on the wrist." },
//     { title: "Design", text: "We design tiny screens with clear, glanceable content." },
//     { title: "Build", text: "We build the watch app and its phone companion." },
//     { title: "Test on Watches", text: "We test battery, sensors and connection on real devices." },
//     { title: "Publish & Support", text: "We release on the stores and keep improving." },
//   ];

//   const industries = [
//     { title: "Fitness & Sports", text: "Workout tracking, coaching and challenges." },
//     { title: "Healthcare", text: "Patient monitoring, medication reminders and alerts." },
//     { title: "Wellness", text: "Sleep, stress and mindfulness tools." },
//     { title: "Field Teams", text: "Task alerts, check-ins and safety buttons." },
//     { title: "Travel & Transport", text: "Tickets, navigation and departure alerts." },
//     { title: "Smart Home & Payments", text: "Quick controls and tap-to-pay." },
//   ];

//   const compare = [
//     ["Made by", "Google (with Samsung)", "Apple"],
//     ["Language", "Kotlin", "Swift"],
//     ["UI toolkit", "Compose for Wear OS", "SwiftUI"],
//     ["Pairs with", "Android phones (limited iPhone support)", "iPhone"],
//     ["Health data", "Health Services and Health Connect", "HealthKit"],
//     ["Store", "Google Play", "App Store"],
//   ];

//   const faqs = [
//     { q: "What is the difference between a standalone and a companion watch app?", a: "A standalone app works on the watch without the phone. A companion app depends on the phone for data or heavy work. We recommend the right approach for your product." },
//     { q: "Can you build for both Apple Watch and Wear OS?", a: "Yes. We build separate native apps for each platform and design them to feel consistent." },
//     { q: "Will the app drain the watch battery?", a: "We design for battery life by limiting background work, batching sensor readings and syncing efficiently." },
//     { q: "Can the app read heart rate and health data?", a: "Yes, with the user permission. We use HealthKit on Apple Watch and Health Services on Wear OS, and we handle privacy carefully." },
//     { q: "Do I need a phone app as well?", a: "Most watch apps work best with a phone app for history, settings and account management. We can build both." },
//     { q: "Do you provide support after launch?", a: "Yes. We offer maintenance for OS updates, bug fixes and new watch models." },
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="bg-[#0b0f14] text-gray-200">

//         {/* HERO */}
//         <section className="relative overflow-hidden px-6 py-24 md:px-16 md:py-32">
//           <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#ff6b57]/15 blur-3xl" />
//           <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
//             <div>
//               <span className="rounded-full border border-[#5eead4]/40 px-5 py-2 text-sm font-semibold text-[#5eead4]">
//                 Mobile Application Development
//               </span>
//               <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
//                 Wearable Apps Development
//               </h1>
//               <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
//                 Smart, battery-friendly apps for Apple Watch and Wear OS. We turn health, fitness and quick-action ideas into experiences that live on the wrist.
//               </p>
//               <div className="mt-9 flex flex-wrap gap-4">
//                 <Link href="/contact" className="rounded-full bg-[#ff6b57] px-8 py-4 font-bold text-[#0b0f14] transition hover:bg-[#ff8a7a]">
//                   Start your wearable app
//                 </Link>
//                 <a href="#how" className="rounded-full border border-gray-600 px-8 py-4 font-bold text-white transition hover:border-[#5eead4] hover:text-[#5eead4]">
//                   See how we build
//                 </a>
//               </div>
//             </div>
//             <WearableHero />
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="px-6 pb-20 md:px-16">
//           <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
//             {stats.map((s) => (
//               <div key={s.n} className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
//                 <p className="text-2xl font-extrabold text-[#ff6b57] md:text-3xl">{s.n}</p>
//                 <p className="mt-2 text-sm text-gray-400">{s.l}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* WHY */}
//         <section className="px-6 pb-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">Why build for the wrist</h2>
//             <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//               {why.map((w) => (
//                 <article key={w.title} className="rounded-3xl border border-gray-800 bg-gradient-to-br from-[#141c2b] to-[#0b0f14] p-8">
//                   <h3 className="text-xl font-bold text-[#5eead4]">{w.title}</h3>
//                   <p className="mt-3 leading-7 text-gray-400">{w.text}</p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CODE */}
//         <section id="how" className="bg-[#0f1520] px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl space-y-20">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">How wearable apps are built</h2>
//             {code.map((c, i) => (
//               <div key={c.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#ff8a7a]">{c.title}</h3>
//                   <p className="mt-4 text-lg leading-8 text-gray-400">{c.text}</p>
//                 </div>
//                 <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0f14] shadow-2xl">
//                   <p className="border-b border-gray-800 px-5 py-3 text-xs text-gray-500">{c.file}</p>
//                   <pre className="overflow-x-auto p-6 text-sm leading-7 text-gray-300">{c.code}</pre>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ARCHITECTURE */}
//         <section className="px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <div className="max-w-3xl">
//               <h2 className="text-3xl font-bold text-white md:text-4xl">Light on the wrist, powerful behind it</h2>
//               <p className="mt-5 text-lg leading-8 text-gray-400">
//                 A smartwatch has a small screen and a small battery. We keep the watch app simple and fast, and move storage and heavy processing to the phone and the cloud.
//               </p>
//             </div>
//             <div className="mt-10 rounded-3xl border border-gray-800 bg-[#111827] p-6">
//               <WearableArchitecture />
//             </div>
//             <ul className="mt-8 grid gap-4 md:grid-cols-3">
//               <li className="rounded-2xl border border-gray-800 bg-[#111827] px-5 py-4">Efficient sensor reading to save battery</li>
//               <li className="rounded-2xl border border-gray-800 bg-[#111827] px-5 py-4">Works offline and syncs when connected</li>
//               <li className="rounded-2xl border border-gray-800 bg-[#111827] px-5 py-4">Health data handled with user permission</li>
//             </ul>
//           </div>
//         </section>

//         {/* SCREENS */}
//         <section className="bg-[#0f1520] px-6 py-24 md:px-16">
//           <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
//             <div>
//               <h2 className="text-3xl font-bold text-white md:text-4xl">Designed to be understood in a glance</h2>
//               <p className="mt-5 text-lg leading-8 text-gray-400">
//                 Watch users give you a few seconds. We design three touchpoints: the watch face for instant information, the tile for quick actions and the app for deeper use.
//               </p>
//               <ul className="mt-6 space-y-3">
//                 <li className="rounded-2xl border border-gray-800 bg-[#111827] px-5 py-3">Complications on the watch face</li>
//                 <li className="rounded-2xl border border-gray-800 bg-[#111827] px-5 py-3">Tiles for one-tap actions</li>
//                 <li className="rounded-2xl border border-gray-800 bg-[#111827] px-5 py-3">Large text and simple navigation</li>
//               </ul>
//             </div>
//             <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6">
//               <WearableScreens />
//             </div>
//           </div>
//         </section>

//         {/* TOOLS */}
//         <section className="px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">Platforms and tools we use</h2>
//             <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//               {tools.map((t) => (
//                 <div key={t.name} className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
//                   <p className="font-bold text-[#5eead4]">{t.name}</p>
//                   <p className="mt-2 text-sm leading-6 text-gray-400">{t.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="bg-[#0f1520] px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-5xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">Our wearable services</h2>
//             <div className="mt-12 divide-y divide-gray-800 border-y border-gray-800">
//               {services.map((s) => (
//                 <div key={s.title} className="grid gap-3 py-7 md:grid-cols-[1fr_1.2fr]">
//                   <h3 className="text-xl font-bold text-white">{s.title}</h3>
//                   <p className="leading-7 text-gray-400">{s.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* PROCESS */}
//         <section className="px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">How we work</h2>
//             <div className="mt-10 grid gap-5 md:grid-cols-5">
//               {steps.map((s, i) => (
//                 <div key={s.title} className="rounded-3xl border border-gray-800 p-7">
//                   <span className="text-4xl font-extrabold text-[#ff6b57]/70">{i + 1}</span>
//                   <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
//                   <p className="mt-2 text-sm leading-6 text-gray-400">{s.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* INDUSTRIES */}
//         <section className="bg-[#0f1520] px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">Where wearable apps make a difference</h2>
//             <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//               {industries.map((d) => (
//                 <article key={d.title} className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
//                   <h3 className="text-xl font-bold text-[#ff8a7a]">{d.title}</h3>
//                   <p className="mt-3 leading-7 text-gray-400">{d.text}</p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* COMPARISON */}
//         <section className="px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-5xl">
//             <h2 className="text-3xl font-bold text-white md:text-4xl">Wear OS vs watchOS</h2>
//             <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-800">
//               <table className="w-full min-w-[560px] border-collapse text-left">
//                 <thead>
//                   <tr className="bg-[#141c2b]">
//                     <th className="p-4"> </th>
//                     <th className="p-4 text-[#5eead4]">Wear OS</th>
//                     <th className="p-4 text-[#ff8a7a]">watchOS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {compare.map((row) => (
//                     <tr key={row[0]} className="border-t border-gray-800">
//                       <td className="p-4 font-semibold text-white">{row[0]}</td>
//                       <td className="p-4">{row[1]}</td>
//                       <td className="p-4">{row[2]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="bg-[#0f1520] px-6 py-24 md:px-16">
//           <div className="mx-auto max-w-4xl space-y-4">
//             <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Common questions</h2>
//             {faqs.map((f) => (
//               <details key={f.q} className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
//                 <summary className="cursor-pointer text-lg font-semibold text-white">{f.q}</summary>
//                 <p className="mt-4 leading-7 text-gray-400">{f.a}</p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-6 py-24 text-center md:px-16">
//           <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to build for the wrist?</h2>
//           <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
//             Tell us your idea and we will suggest the right platform, features and timeline.
//           </p>
//           <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#ff6b57] px-9 py-4 font-bold text-[#0b0f14] transition hover:bg-[#ff8a7a]">
//             Contact our team
//           </Link>
//         </section>

//       </main>
//     </>
//   );
// }


function WearablePage() {
  const stats = [
    { n: "Wear OS", l: "Google smartwatch platform" },
    { n: "watchOS", l: "Apple Watch platform" },
    { n: "Always on", l: "Sensors that track health and movement" },
    { n: "Glanceable", l: "Designed for seconds, not minutes" },
  ];

  const why = [
    {
      title: "Always With the User",
      text: "A watch is worn all day, so your app can reach people at the exact moment they need it.",
    },
    {
      title: "Health and Fitness Data",
      text: "Heart rate, steps, sleep and workouts open the door to powerful health products.",
    },
    {
      title: "Fast Interactions",
      text: "Users glance, tap and get on with their day. Short, focused screens win.",
    },
    {
      title: "Real-Time Alerts",
      text: "Notifications on the wrist are seen quickly, which is ideal for reminders and urgent updates.",
    },
    {
      title: "Hands-Free Use",
      text: "Voice, taps and quick actions work when a phone is out of reach, for example while exercising.",
    },
    {
      title: "Stronger Engagement",
      text: "A watch app extends your phone app and keeps your brand in front of users.",
    },
  ];

  const code = [
    {
      title: "Watch screens with Compose for Wear OS",
      text: "Screens are built for round and square displays, with small text, big touch targets and a curved time display.",
      file: "WorkoutScreen.kt",
      code: `@Composable
fun WorkoutScreen(bpm: Int) {
    Scaffold(timeText = { TimeText() }) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text("$bpm")
            Text("BPM")
        }
    }
}`,
    },
    {
      title: "Apple Watch screens with SwiftUI",
      text: "The same ideas apply on Apple Watch. SwiftUI makes it simple to show live workout data and share code with the iPhone app.",
      file: "WorkoutView.swift",
      code: `struct WorkoutView: View {
    @StateObject var workout = WorkoutManager()

    var body: some View {
        VStack {
            Text("\\(Int(workout.heartRate))")
                .font(.largeTitle)
                .foregroundColor(.red)

            Text("BPM")
        }
    }
}`,
    },
    {
      title: "Sync data with the phone",
      text: "The watch sends readings to the phone app, which stores history and uploads it to your server. This keeps the watch fast and saves battery.",
      file: "SendHeartRate.kt",
      code: `val request =
    PutDataMapRequest.create("/heart_rate").apply {
        dataMap.putInt("bpm", bpm)
    }
    .asPutDataRequest()
    .setUrgent()

Wearable.getDataClient(context)
    .putDataItem(request)`,
    },
  ];

  const tools = [
    {
      name: "Wear OS",
      text: "Apps for Pixel Watch, Galaxy Watch and more.",
    },
    {
      name: "watchOS",
      text: "Apps for Apple Watch.",
    },
    {
      name: "Compose for Wear OS",
      text: "Modern UI for round and square screens.",
    },
    {
      name: "SwiftUI",
      text: "Shared UI code across Apple devices.",
    },
    {
      name: "Health Services & HealthKit",
      text: "Heart rate, workouts and activity data.",
    },
    {
      name: "Tiles & Complications",
      text: "Quick info right on the watch face.",
    },
    {
      name: "Bluetooth LE",
      text: "Connect with sensors and other devices.",
    },
    {
      name: "Firebase",
      text: "Cloud sync, alerts and analytics.",
    },
  ];

  const services = [
    {
      title: "Smartwatch App Development",
      text: "Standalone or companion apps for Wear OS and Apple Watch.",
    },
    {
      title: "Fitness & Health Tracking",
      text: "Workouts, heart rate, sleep and activity goals.",
    },
    {
      title: "Watch Faces, Tiles & Complications",
      text: "Useful information visible in one glance.",
    },
    {
      title: "Companion Phone Apps",
      text: "History, charts and settings on the phone that pair with the watch.",
    },
    {
      title: "Notifications & Quick Actions",
      text: "Reply, confirm or dismiss straight from the wrist.",
    },
    {
      title: "Device & Sensor Integration",
      text: "Bluetooth bands, medical sensors and smart accessories.",
    },
    {
      title: "Battery and Performance Tuning",
      text: "Efficient code so your app does not drain the watch.",
    },
    {
      title: "Testing, Publishing & Support",
      text: "Testing on real watches, store release and updates.",
    },
  ];

  const steps = [
    {
      title: "Discover",
      text: "We decide which moments matter on the wrist.",
    },
    {
      title: "Design",
      text: "We design tiny screens with clear, glanceable content.",
    },
    {
      title: "Build",
      text: "We build the watch app and its phone companion.",
    },
    {
      title: "Test on Watches",
      text: "We test battery, sensors and connection on real devices.",
    },
    {
      title: "Publish & Support",
      text: "We release on the stores and keep improving.",
    },
  ];

  const industries = [
    {
      title: "Fitness & Sports",
      text: "Workout tracking, coaching and challenges.",
    },
    {
      title: "Healthcare",
      text: "Patient monitoring, medication reminders and alerts.",
    },
    {
      title: "Wellness",
      text: "Sleep, stress and mindfulness tools.",
    },
    {
      title: "Field Teams",
      text: "Task alerts, check-ins and safety buttons.",
    },
    {
      title: "Travel & Transport",
      text: "Tickets, navigation and departure alerts.",
    },
    {
      title: "Smart Home & Payments",
      text: "Quick controls and tap-to-pay.",
    },
  ];

  const compare = [
    ["Made by", "Google (with Samsung)", "Apple"],
    ["Language", "Kotlin", "Swift"],
    ["UI toolkit", "Compose for Wear OS", "SwiftUI"],
    [
      "Pairs with",
      "Android phones (limited iPhone support)",
      "iPhone",
    ],
    [
      "Health data",
      "Health Services and Health Connect",
      "HealthKit",
    ],
    ["Store", "Google Play", "App Store"],
  ];

  const faqs = [
    {
      q: "What is the difference between a standalone and a companion watch app?",
      a: "A standalone app works on the watch without the phone. A companion app depends on the phone for data or heavy work. We recommend the right approach for your product.",
    },
    {
      q: "Can you build for both Apple Watch and Wear OS?",
      a: "Yes. We build separate native apps for each platform and design them to feel consistent.",
    },
    {
      q: "Will the app drain the watch battery?",
      a: "We design for battery life by limiting background work, batching sensor readings and syncing efficiently.",
    },
    {
      q: "Can the app read heart rate and health data?",
      a: "Yes, with the user permission. We use HealthKit on Apple Watch and Health Services on Wear OS, and we handle privacy carefully.",
    },
    {
      q: "Do I need a phone app as well?",
      a: "Most watch apps work best with a phone app for history, settings and account management. We can build both.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We offer maintenance for OS updates, bug fixes and new watch models.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#172033]">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#faf7ff] via-white to-[#f5efff] px-6 py-20 md:px-16 md:py-28">

          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#a774ff]/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#e8d8ff]/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="inline-flex rounded-full border border-[#a774ff]/30 bg-white px-5 py-2 text-sm font-semibold text-[#8b5cf6] shadow-sm">
                Mobile Application Development
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#172033] md:text-6xl">
                Wearable Apps
                <span className="block text-[#8b5cf6]">
                  Development
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Smart, battery-friendly apps for Apple Watch and Wear OS.
                We turn health, fitness and quick-action ideas into
                experiences that live on the wrist.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <h2
                
                  className="rounded-full bg-[#8b5cf6] px-8 py-4 font-bold text-white shadow-lg shadow-[#8b5cf6]/20 transition hover:bg-[#7c3aed]"
                >
                  Start your wearable app
                </h2>

                <h2
                  
                  className="rounded-full border border-gray-300 bg-white px-8 py-4 font-bold text-[#172033] transition hover:border-[#8b5cf6] hover:text-[#8b5cf6]"
                >
                  See how we build
                </h2>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#eadfff] bg-white/80 p-6 shadow-xl shadow-[#8b5cf6]/10 backdrop-blur">
              <WearableHero />
            </div>

          </div>
        </section>


        {/* ================= STATS ================= */}
        <section className="px-6 py-16 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((s) => (
              <div
                key={s.n}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-2xl font-extrabold text-[#8b5cf6] md:text-3xl">
                  {s.n}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {s.l}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* ================= WHY ================= */}
        <section className="bg-[#faf9fc] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                Why wearable apps
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Build experiences users can access instantly
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Wearable applications create new opportunities for
                engagement by bringing important information directly
                to the user's wrist.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {why.map((w) => (
                <article
                  key={w.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#cdb5ff] hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1eaff] text-lg font-bold text-[#8b5cf6]">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#172033]">
                    {w.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {w.text}
                  </p>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* ================= HOW BUILT ================= */}
        <section
          id="how"
          className="bg-[#171329] px-6 py-24 text-white md:px-16"
        >
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-[#b58cff]">
                Development
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                How wearable apps are built
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                We combine lightweight wearable interfaces with
                powerful phone and cloud functionality.
              </p>
            </div>

            <div className="mt-16 space-y-20">

              {code.map((c, i) => (
                <div
                  key={c.title}
                  className={`grid items-center gap-10 md:grid-cols-2 ${
                    i % 2
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  <div>
                    <span className="text-sm font-semibold text-[#b58cff]">
                      0{i + 1}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {c.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-gray-300">
                      {c.text}
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0b1a] shadow-2xl">

                    <p className="border-b border-white/10 px-5 py-3 text-xs text-gray-400">
                      {c.file}
                    </p>

                    <pre className="overflow-x-auto p-6 text-sm leading-7 text-gray-300">
                      {c.code}
                    </pre>

                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= ARCHITECTURE ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                Architecture
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Light on the wrist, powerful behind it
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                A smartwatch has a small screen and a small battery.
                We keep the watch app simple and fast, and move storage
                and heavy processing to the phone and the cloud.
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-gray-200 bg-[#faf9fc] p-6 shadow-sm md:p-10">
              <WearableArchitecture />
            </div>

            <ul className="mt-8 grid gap-5 md:grid-cols-3">

              <li className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                <span className="font-semibold text-[#172033]">
                  Efficient sensor reading
                </span>

                <p className="mt-2 text-sm text-gray-500">
                  Designed to reduce unnecessary battery usage.
                </p>
              </li>

              <li className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                <span className="font-semibold text-[#172033]">
                  Offline support
                </span>

                <p className="mt-2 text-sm text-gray-500">
                  Works offline and syncs when connected.
                </p>
              </li>

              <li className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
                <span className="font-semibold text-[#172033]">
                  Permission based data
                </span>

                <p className="mt-2 text-sm text-gray-500">
                  Health data is handled with user permission.
                </p>
              </li>

            </ul>

          </div>
        </section>


        {/* ================= SCREENS ================= */}
        <section className="bg-[#faf9fc] px-6 py-24 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                User Experience
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Designed to be understood in a glance
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Watch users give you a few seconds. We design three
                touchpoints: the watch face for instant information,
                the tile for quick actions and the app for deeper use.
              </p>

              <ul className="mt-7 space-y-4">

                <li className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                  Complications on the watch face
                </li>

                <li className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                  Tiles for one-tap actions
                </li>

                <li className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                  Large text and simple navigation
                </li>

              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <WearableScreens />
            </div>

          </div>
        </section>


        {/* ================= TOOLS ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                Technology
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Platforms and tools we use
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {tools.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#cdb5ff] hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1eaff] font-bold text-[#8b5cf6]">
                    +
                  </div>

                  <p className="mt-5 font-bold text-[#172033]">
                    {t.name}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {t.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= SERVICES ================= */}
        <section className="bg-[#faf9fc] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                What we offer
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Our wearable services
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">

              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-[#8b5cf6]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#172033]">
                    {s.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {s.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= PROCESS ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                Our Process
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                How we work
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-5">

              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <span className="text-4xl font-extrabold text-[#8b5cf6]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-[#172033]">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {s.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= INDUSTRIES ================= */}
        <section className="bg-[#faf9fc] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                Industries
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Where wearable apps make a difference
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {industries.map((d) => (
                <article
                  key={d.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#cdb5ff] hover:shadow-lg"
                >
                  <div className="h-1 w-12 rounded-full bg-[#8b5cf6]" />

                  <h3 className="mt-6 text-xl font-bold text-[#172033]">
                    {d.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {d.text}
                  </p>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* ================= COMPARISON ================= */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                Platforms
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Wear OS vs watchOS
              </h2>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[600px] border-collapse text-left">

                  <thead>
                    <tr className="bg-[#f5f1ff]">
                      <th className="p-5 text-gray-500">
                        Feature
                      </th>

                      <th className="p-5 font-bold text-[#8b5cf6]">
                        Wear OS
                      </th>

                      <th className="p-5 font-bold text-[#172033]">
                        watchOS
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {compare.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-t border-gray-100"
                      >
                        <td className="p-5 font-semibold text-[#172033]">
                          {row[0]}
                        </td>

                        <td className="p-5 text-gray-600">
                          {row[1]}
                        </td>

                        <td className="p-5 text-gray-600">
                          {row[2]}
                        </td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>
            </div>

          </div>
        </section>


        {/* ================= FAQ ================= */}
        <section className="bg-[#faf9fc] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-4xl">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#8b5cf6]">
                FAQ
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#172033] md:text-4xl">
                Common questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">

              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#172033]">
                    {f.q}
                  </summary>

                  <p className="mt-4 leading-7 text-gray-600">
                    {f.a}
                  </p>
                </details>
              ))}

            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 py-24 md:px-16">

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] px-8 py-16 text-center shadow-2xl shadow-[#8b5cf6]/20 md:px-16">

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Ready to build for the wrist?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">
              Tell us your idea and we will suggest the right platform,
              features and timeline.
            </p>

            <h2
             
              className="mt-8 inline-flex rounded-full bg-white px-9 py-4 font-bold text-[#7c3aed] transition hover:bg-gray-100"
            >
              Contact our team
            </h2>

          </div>

        </section>

      </main>
    </>
  );
}




// ===================== ROUTER =====================
export const mobileDevSlugs = [
  "android-apps-development",
  "ios-apps-development",
  "ionic-apps-development",
  "wearable-apps-development",
];

export default function MobileDevPage({ slug }) {
  if (slug === "android-apps-development") return <AndroidPage />;
  if (slug === "ios-apps-development") return <IosPage />;
  if (slug === "ionic-apps-development") return <IonicPage />;
  if (slug === "wearable-apps-development") return <WearablePage />;
  return null;
}
