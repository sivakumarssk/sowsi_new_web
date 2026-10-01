
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile Development",
  "IoT Solutions",
  "AI Development",
  "Software Services",
  "Consulting & Strategy",
  "Other",
];

export default function ContactPage() {
  return (
    <section className="relative w-full bg-[radial-gradient(ellipse_at_center,#FFDBF1D9_0%,#FFDBF1D9_25%,white_70%)]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-12">
        {/* Breadcrumb and Heading */}
        <div className="mb-16 -ml-16 w-full md:-ml-24 md:mb-28">
          <nav className="flex items-center gap-2 text-lg">
            <Link
              href="/"
              className="font-medium text-gray-900 hover:text-purple-700"
            >
              Home
            </Link>

            <span className="text-gray-400">»</span>

            <span className="font-semibold text-purple-700">
              Contact Us
            </span>
          </nav>

          <h1 className="mt-15 text-4xl font-bold text-gray-900 md:text-5xl">
            Contact Us
          </h1>

          <p className="mt-4 max-w-6xl text-2xl font-medium text-[#3614D0]">
            Let&apos;s discuss your project. Reach out to us today to learn how
            we can help bring <br />
            your vision to life.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-white p-8 shadow-xl shadow-purple-100/60 ring-1 ring-black/5 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <div className="mt-8 space-y-6">
  {/* First Name and Last Name */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <Field label="First Name">
      <input
        type="text"
        className="input"
        placeholder="Enter your first name"
        readOnly
      />
    </Field>

    <Field label="Last Name">
      <input
        type="text"
        className="input"
        placeholder="Enter your last name"
        readOnly
      />
    </Field>
  </div>

  {/* Phone */}
  <Field label="Phone">
    <input
      type="tel"
      className="input"
      placeholder="Enter your phone number"
      readOnly
    />
  </Field>

  {/* Email */}
  <Field label="Email">
    <input
      type="email"
      className="input"
      placeholder="Enter your email address"
      readOnly
    />
  </Field>

  {/* Company */}
  <Field label="Company">
    <input
      type="text"
      className="input"
      placeholder="Enter your company name"
      readOnly
    />
  </Field>

  {/* Service */}
  <Field label="Service Interested In">
    <div className="relative">
      <select className="input appearance-none pr-10" defaultValue="" disabled>
        <option value="">Select...</option>
      </select>

      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  </Field>

  {/* Message */}
  <Field label="Message">
    <textarea
      className="input resize-none"
      rows={5}
      placeholder="Write your message here..."
      readOnly
    />
  </Field>

  {/* Static Button */}
  <button
    type="button"
    className="w-full rounded-xl bg-[#5B21B6] py-4 text-lg font-semibold text-white"
  >
    Send Message
  </button>
</div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-base font-medium text-gray-800">
        {label}
      </label>

      {children}
    </div>
  );
}