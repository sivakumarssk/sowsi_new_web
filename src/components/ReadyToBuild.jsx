"use client";

export default function ReadyToBuild() {
  return (
    <section className="ready-section">
      <div className="ready-container">
        {/* Left Image */}
        <div className="ready-image-wrapper">
          <img
            src="/assets/images/your-image.png"
            alt="Ready to build your app"
            className="ready-image"
          />
        </div>

        {/* Right Content */}
        <div className="ready-content">
          <h2>Ready to Build Your App?</h2>

          <p>
            Partner with us to transform your vision into innovative, scalable,
            and reliable digital solutions.
          </p>

          <button className="ready-button">
            <span>Get Started</span>
            <span className="ready-arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}