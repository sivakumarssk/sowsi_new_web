"use client";

import { useEffect, useState } from "react";

const CodeIcon = (props) => (
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
{...props}

>


<rect x="3" y="4" width="18" height="14" rx="3" />

<path
  d="M9 8.5 6.5 11 9 13.5M15 8.5 17.5 11 15 13.5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>

<path d="M8 18v2" strokeLinecap="round" />


  </svg>
);

const PhoneIcon = (props) => (
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
{...props}

>
<rect x="7" y="2.5" width="10" height="19" rx="2.5" />

<path d="M10.75 18.5h2.5" strokeLinecap="round" />


  </svg>
);

const ChipIcon = (props) => (
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
{...props}

>


<rect x="5" y="5" width="14" height="14" rx="3" />

<rect x="9.5" y="9.5" width="5" height="5" rx="1.2" />

<path
  d="M9 2.5v2.5M15 2.5v2.5M9 19v2.5M15 19v2.5M2.5 9H5M2.5 15H5M19 9h2.5M19 15h2.5"
  strokeLinecap="round"
/>


  </svg>
);

const services = [
{
id: "web",
label: "Web Development",
Icon: CodeIcon,
images: [
"/assets/images/web-1.png",
"/assets/images/web-2.png",
"/assets/images/web-3.png",
"/assets/images/web-5.png",
"/assets/images/web-4.png",
],
},
{
id: "mobile",
label: "Mobile app Development",
Icon: PhoneIcon,
images: [
"/assets/images/mobile-1.png",
"/assets/images/mobile-2.png",
"/assets/images/mobile-3.png",
"/assets/images/mobile-5.png",
"/assets/images/mobile-4.png",
],
},
{
id: "ai",
label: "Ai & Automation",
Icon: ChipIcon,
images: [
"/assets/images/ai-1.png",
"/assets/images/ai-2.png",
"/assets/images/ai-3.png",
"/assets/images/ai-5.png",
"/assets/images/ai-4.png",
],
},
];

const layout = [
{
left: "17.5%",
top: "0%",
width: "25%",
height: "29%",
z: 10,
from: "top",
},
{
left: "3.5%",
top: "23%",
width: "28%",
height: "30%",
z: 20,
from: "bottom",
},
{
left: "0%",
top: "51%",
width: "28%",
height: "30%",
z: 10,
from: "top",
},
{
left: "42%",
top: "33.5%",
width: "58%",
height: "37%",
z: 30,
from: "bottom",
},
{
left: "17.5%",
top: "68%",
width: "25%",
height: "30%",
z: 40,
from: "top",
},
];

const RING = [0, 1, 2, 4];
const PINNED_SLOT = 3;
const STEP_MS = 2500;

export default function Services() {
const [active, setActive] = useState("mobile");
const [step, setStep] = useState(0);

const current = services.find((s) => s.id === active);

useEffect(() => {
setStep(0);


const reduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduced) return;

const id = setInterval(() => {
  setStep((s) => s + 1);
}, STEP_MS);

return () => clearInterval(id);


}, [active]);

const slotFor = (i) => {
if (i === PINNED_SLOT) return PINNED_SLOT;


const start = RING.indexOf(i);

return RING[
  (start - (step % RING.length) + RING.length) % RING.length
];


};

return ( <section className="services"> <div className="services__inner"> <div className="services__intro"> <h2 className="services__title">Our Services</h2>


      <p className="services__lead">
        We provide end-to-end technology services to help businesses
        <br />
        thrive in the digital era.
      </p>

      <ul className="services__list">
        {services.map(({ id, label, Icon }) => {
          const isActive = id === active;

          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => setActive(id)}
                aria-pressed={isActive}
                className={`services__pill${
                  isActive ? " is-active" : ""
                }`}
              >
                <span>{label}</span>
                <Icon className="services__icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="services__media">
      <div className="services__grid">
        {current.images.map((src, i) => (
          <img
            key={current.id + i}
            src={src}
            alt=""
            className="services__grid-img"
          />
        ))}
      </div>

      <div className="services__collage">
        {current.images.map((src, i) => {
          const slot = slotFor(i);
          const pos = layout[slot];

          return (
            <img
              key={current.id + i}
              src={src}
              alt=""
              style={{
                left: pos.left,
                top: pos.top,
                width: pos.width,
                height: pos.height,
                zIndex: pos.z,
                animationDelay: `${i * 70}ms`,
              }}
              className={`services__card swap-from-${pos.from}`}
            />
          );
        })}
      </div>
    </div>
  </div>
</section>


);
}
