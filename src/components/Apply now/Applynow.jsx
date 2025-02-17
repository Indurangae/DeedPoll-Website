import React from "react";
import "./Applynow.css";

const Applynow = () => {
  return (
    <div className="apply-page">
      {/* Section 1 */}
      <section className="apply-section-one">
        <h2>Deed Poll</h2>
        <p>Experience the elegance of changing your name with our comprehensive deed poll solutions designed for your needs.</p>
      </section>

      {/* Section 2 */}
      <section className="apply-section-two">
        <h2>Discover the Ideal Deed Poll for You</h2>
        <p>At deed poll, we offer a meticulously designed questionnaire to gather crucial insights about your identity change needs. Each question hones in on your unique requirements, ensuring our services align perfectly with your expectations.
        <br/>
        <br/>
        Enjoy a smooth experience as our user-friendly questionnaire tailors itself based on your answers, providing customized guidance for your deed poll journey. Allow us to assist you every step of the way as you confidently embrace your new identity.</p>
        <div className="button-group">
        <a href="/childpoll" className="blue-button">Child Deed Poll</a>
        <a href="/childpoll" className="blue-button">Adult Deed Poll</a>
        <a href="/familypoll" className="blue-button">Family Deed Poll</a>
        </div>
      </section>

      {/* Section 3 */}
      <section className="apply-section-three">
        <h2>How Deed Poll Works</h2>
        <div className="process-steps">
          <div className="card">
            <div className="circle">1</div>
            <h3>Start Your Application</h3>
            <p>Begin the process by filling out our simple online application form.</p>
          </div>
          <div className="card">
            <div className="circle">2</div>
            <h3>Review Your Details</h3>
            <p>Ensure all your information is correct and make any necessary changes.</p>
          </div>
          <div className="card">
            <div className="circle">3</div>
            <h3>Complete Your Deed Poll</h3>
            <p>Receive your official deed poll document securely and efficiently.</p>
          </div>
          <div className="card">
            <div className="circle">4</div>
            <h3>Use and Update Your Name</h3>
            <p>Utilize your new name across all legal organisations with peace of mind.</p>
          </div>
        </div>
      </section>
      <section class="section-8">
        <p class="subheading">Get in Touch</p>
        <h1>We’re Here to Assist You</h1>
        
        <div class="contact-info">
            <p><span class="icon">📍</span> <strong>Our Location:</strong> E1 6BD, Commercial Street, London</p>
            <p><span class="icon">📧</span> <strong>Email Us:</strong> support@ukdeedpolldepartment.org.uk</p>
            <p><span class="icon">📞</span> <strong>Give Us a Call:</strong> +44 07999988177</p>
        </div>
    </section>
    </div>
  );
};

export default Applynow;
