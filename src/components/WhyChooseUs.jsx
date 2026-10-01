"use client";

import { useState } from "react";

const reasons = [
{
id: "client",
photo: "/assets/images/why-client-focused.png",
title: "Client-Focused Solutions",
text: "We tailor every solution to match your unique business goals, ensuring your website, app, or digital campaign drives real impact for your customers and audience.",
},
{
id: "quality",
photo: "/assets/images/why-quality-services.png",
title: "Quality Services You Can Rely On",
text: "From website design and development to digital marketing and mobile apps, our full-stack services are backed by skilled professionals and a commitment to excellence.",
},
{
id: "partners",
photo: "/assets/images/why-long-term-partners.png",
title: "Long-Term Partnerships",
text: "We don't just complete projects — we build long-lasting relationships by acting as an extension of your team, supporting your business long after launch.",
},
];

export default function WhyChooseUs() {
const [activeId, setActiveId] = useState(null);

const toggleCard = (id) => {
setActiveId((current) => (current === id ? null : id));
};

return ( <section className="why" id="why-choose-us"> <div className="why__inner"> <h2 className="why__title">Why Choose Us</h2>


    <p className="why__lead">
      We ship experience-led products that grow with your business.
      <br />
      From early discovery to scale-up, our multidisciplinary team blends
      design, engineering, and strategy to help you launch faster and
      outpace the market.
    </p>

    <div className="why__grid">
      {reasons.map((reason) => {
        const isActive = activeId === reason.id;

        return (
          <button
            type="button"
            key={reason.id}
            className={`why__card${isActive ? " is-active" : ""}`}
            onClick={() => toggleCard(reason.id)}
            aria-expanded={isActive}
          >
            <img
              src={reason.photo}
              alt={reason.title}
              className="why__card-img"
            />

            <span className="why__card-overlay">
              <span className="why__card-title">
                <span className="why__card-check" aria-hidden="true">
                  ✓
                </span>
                {reason.title}
              </span>

              <span className="why__card-preview">
                {reason.text}
              </span>

              <span className="why__card-text">
                {reason.text}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  </div>
</section>


);
}
