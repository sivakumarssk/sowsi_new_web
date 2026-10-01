"use client";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Fashion Forward",
    image: "/assets/images/client-1.png",
    review:
      "Sowsi Technologies delivered an exceptional e-commerce platform that has significantly improved our online sales and customer experience. Their team was professional, responsive, and truly understood our business needs.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO, IndusTech Solutions",
    image: "/assets/images/client-2.png",
    review:
      "The IoT solution developed by Sowsi has transformed our manufacturing process, reducing downtime by 35% and improving efficiency across all operations. Their technical expertise and innovation were impressive.",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "Product Manager, HealthTech",
    image: "/assets/images/client-3.png",
    review:
      "Sowsi Technologies helped us develop a cutting-edge mobile app that has received overwhelmingly positive feedback from our users. Their attention to detail and commitment to quality was evident throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__heading">
          <h2>What Our Clients Say</h2>

          <p>
            We take pride in our work and the positive feedback we receive from
            our valued clients.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-card__stars">
                ★ ★ ★ ★ ★
              </div>

              <p className="testimonial-card__review">
                {testimonial.review}
              </p>

              <div className="testimonial-card__author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                />

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}