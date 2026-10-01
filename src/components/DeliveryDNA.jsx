"use client";

const steps = [
  {
    number: 1,
    title: "Discover & Align",
    description:
      "Stakeholder workshops, user interviews, and product framing clarify the challenge and define success.",
  },
  {
    number: 2,
    title: "Design & Prototype",
    description:
      "Interactive prototypes and design sprints validate assumptions before we write a single line of code.",
  },
  {
    number: 3,
    title: "Build & Optimize",
    description:
      "Incremental releases with automated testing ensure a stable, scalable product foundation.",
  },
  {
    number: 4,
    title: "Launch & Evolve",
    description:
      "Continuous feedback loops, observability dashboards, and data-led improvements sustain growth.",
  },
];

export default function DeliveryDNA() {
  return (
    <section className="delivery-dna">
      <div className="delivery-dna__inner">
        <header>
          <h2 className="delivery-dna__eyebrow">Delivery DNA</h2>
          <p className="delivery-dna__heading">
            Built for clarity, speed, and continuous value
          </p>
        </header>

        <div className="delivery-dna__grid">
          <div className="delivery-dna__cards">
            {steps.map((step, i) => (
              <article
                key={step.number}
                className="delivery-dna__card"
                style={{ top: `${96 + i * 16}px`, zIndex: i + 1 }}
              >
                <div className="delivery-dna__card-row">
                  <div>
                    <h3 className="delivery-dna__card-title">{step.title}</h3>
                    <p className="delivery-dna__card-desc">
                      {step.description}
                    </p>
                  </div>
                  <span className="delivery-dna__badge">{step.number}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="delivery-dna__image-col">
            <div className="delivery-dna__image-wrap">
              <img
                src="/assets/images/delivery-dna.png"
                alt="Team reviewing product analytics and code on screen"
                className="delivery-dna__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}