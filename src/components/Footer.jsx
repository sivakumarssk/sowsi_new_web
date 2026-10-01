"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

// Brand icons as small inline SVGs (lucide-react removed these logo icons
// in newer versions, so we render them ourselves instead of importing them).
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1c.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.3z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
    <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 20.4H3.5V9H7v11.4z" />
  </svg>
);

const products = [
  { name: "Invoice & Inventory Suite", badge: "New" },
  { name: "Sowsi Meet", badge: "Coming soon" },
];

const services = [
  "Web Development",
  "Mobile Development",
  "IoT Solutions",
  "Software Services",
  "AI Development",
  "Consulting & Strategy",
];

const company = [
  "About Us",
  "Our Team",
  "Careers",
  "Portfolio",
  "Testimonials",
  "Contact",
  "Privacy Policy",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#EEF1FB] pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Company info */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold text-gray-900">
            Sowsi<span className="text-blue-600">Technologies</span>
          </h3>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Innovative technology solutions for businesses of all sizes. We
            help transform ideas into reality.
          </p>
          <div className="flex gap-3 text-xs text-gray-500 mt-2">
            <a href="#" className="hover:text-blue-600">Facebook</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">Github</a>
          </div>

          <h4 className="text-sm font-bold text-gray-900 mt-6 mb-3">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gray-500" />
              +91 9959998989
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gray-500" />
              sowsitechnologies@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} className="text-gray-500" />
              +91 9959998989
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Products</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {products.map((p) => (
              <li key={p.name}>
                <div className="flex items-center gap-2">
                  <span>{p.name}</span>
                  <span className="text-[10px] font-medium bg-sky-100 text-sky-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {p.badge}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {services.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {company.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-3">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Subscribe to our newsletter for the latest updates &amp; insights
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-[#FCEAE3] rounded-md overflow-hidden mb-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-gray-700 placeholder-gray-500 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 m-1 rounded"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-2">
            <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-800 text-white">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-800 text-white">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-800 text-white">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="Google Plus" className="w-9 h-9 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-800 text-white text-xs font-semibold">
              G+
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-200 mt-10 pt-5">
        <p className="text-center text-xs text-gray-500">
          @ 2026 Sowsi Technologies. All rights reserved
        </p>
      </div>
    </footer>
  );
}