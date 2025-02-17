import React from "react";
import "./HowItWorks.css";
import client1 from "../assets/client1.jpg";
import card12 from "../assets/card12.jpg";
import card13 from "../assets/card13.jpg";
import card14 from "../assets/card14.jpg";


const HowItWorks = () => {
  return (
    <div className="how-it-works">
      {/* Section 1 */}
      <section className="section-one">
        <h2>Empowering New Beginnings</h2>
        <p>Experience a seamless transition as we support your name change journey with precision and empathy.</p>
      </section>

      {/* Section 2 */}
      <section className="section-two">
        <div className="left">
          <h2>What is a Deed Poll ?</h2>
        </div>
        <div className="right">
          <p>A <b>deed poll</b> is a legal document used to officially change a person's name. It serves as proof of the name change and allows updates to official records like passports and bank accounts. </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section-three">
        <h2>Experience the Excellence of our Services</h2>
        <p>At Deed Poll Department, we specialize in tailor-made services that facilitate your journey to a new identity. Our dedicated team ensures that your name change process is smooth and respects your personal requirements and dreams.<br/>
        <br/>With our expert assistance, confidently step into your new identity, assured that every aspect is meticulously managed. We offer a wide range of services, from the preparation of deed poll documents to personalized consultations.</p>
      </section>

      {/* Section 4 */}
      <section className="section-four">
        <h2>How to Obtain Your Deed Poll</h2>
        <div className="cards">
          <div className="card">
            <h3>Step 1: Submission Process</h3>
            <p>Submit your well-prepared documents for processing. We assure you that everything is organized for a smooth  experience.</p>
          </div>
          <div className="card">
            <h3>Step 2: Document Preparation</h3>
            <p>Our dedicated team will craft meticulous deed poll documents that cater specifically to your situation, ensuring every detail is correct and compliant with regulations.</p>
          </div>
          <div className="card">
            <h3>Step 3: Final Approval</h3>
            <p>Once your application is approved, you will receive your official deed poll, empowering you to embrace your new identity with assurance and pride.</p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section-five">
        <h2>What Our Clients Are Saying</h2>
        <div className="large-card">
        <img src={client1} alt="client 1" />
          <div className="content">
            <h3>Exceptional Service</h3>
            <p>"The Deed Poll team made my name change an effortless experience. Their guidance was invaluable throughout the process!"
            <br/><br/><b>- Emily Johnson</b></p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="section-six">
        <h2>Tailored Deed Poll Solutions with Trusted Expertise</h2>
        <div className="cards">
          <div className="card">
          <img src={card12} alt="Article 1" />
            <h3>Client Support</h3>
            <p>Our dedicated support team is always available to assist you with any questions throughout the process.</p>
          </div>
          <div className="card">
          <img src={card13} alt="Article 1" />
            <h3>Swift Processing</h3>
            <p>Experience a quick and efficient processing of your requests, ensuring timely completion of your legal needs.</p>
          </div>
          <div className="card">
          <img src={card14} alt="Article 1" />
            <h3>Comprehensive Guides</h3>
            <p>Access our detailed guides and resources covering everything you need to know about the deed poll process.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
