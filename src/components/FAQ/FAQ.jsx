import React from "react";
import "./FAQ.css";
import Faq from "../assets/faq.jpg"
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";

const FAQ = () => {
  return (
    <div className="faq-page">
      {/* Section 1 */}
      <section className="faq-section-one">
        <h2>​Deed Poll: Transform Your Name with Confidence</h2>
        <p>“Exceptional Service: My journey with Deed Poll was seamless. Their team's expertise provided clarity at every turn, making the process feel effortless and empowering." - LIAM
          <br/>
          <br/>“Life-Changing Experience: The professionalism I encountered was outstanding. Every query was addressed, leading me to a transformation I thought was impossible." - CHRIS
          <br/>
          <br/>“Seamless Transition: I cannot express enough how satisfied I am with the service. They guided me step-by-step, and I felt reassured throughout the process.” - MATTHEW
        </p>
        <a href="/contact" className="blue-button1">Get in Touch.</a>
      </section>

      {/* Section 2 */}
      <section className="faq-section-two">
        <div className="left">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>1. How can I initiate a deed poll process with Deed Poll?
            ​Start your deed poll process easily by visiting our Home page to fill out an application form. Our team will assist you throughout the entire process.</li>
            <li>2. What services do you provide?
            ​ Deed Poll specializes in a range of documents, including deed poll applications, name change support and advisory services tailored for a smooth process.</li>
            <li>3. Are there legal requirements for changing my name?
            ​The Deed Poll document provided by us formulates in to a legally binding document,the first instance you present it to a legal organisation to change your name such as UK Passport Office or DVLA.</li>
            <li>4. What are the steps involved in the name change process?
            ​ Upon engaging our services, we will guide you through the preparation and submission of necessary documents, ensuring compliance and addressing your queries.</li>
            <li>5. What should I do if I face any issues with my application?
            ​If issues arise, our dedicated support team is available to assist you. Please reach out via our Contact Us page for prompt assistance.</li>
            <li>6. Can I amend my name change in the future?
            ​ If you wish to make subsequent changes to your name, our team is here to help process your documents and meet all requirements. There will be additional fees.</li>
          </ul>
          <a href="/contact" className="blue-button1">Contact Us for More Information</a>
        </div>
        <div className="right">
        <img src={Faq} alt="faq" />
        </div>
      </section>

      {/* Section 3 */}
      <section className="faq-section-three">
        <h2>Explore Our Services</h2>
        <div className="cards">
          <div className="card">
          <img src={icon1} alt="icon" />
            <p>Change of Name Services</p>
          </div>
          <div className="card">
          <img src={icon2} alt="icon" />
            <p>Consultation Services</p>
          </div>
          <div className="card">
          <img src={icon3} alt="icon" />
            <p>Streamlined Processes</p>
          </div>
          <div className="card">
          <img src={icon4} alt="icon" />
            <p>
            Dedicated Customer Service</p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="faq-section-four">
        <h2>What Our Clients Say About Deed Poll!</h2>
        <div className="review-box">
          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p>"Deed Poll Department made changing my name an easy and stress-free process! Their professionalism and support throughout the journey were exceptional."</p>
        </div>
      </section>

        {/* Section 5 */}
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

export default FAQ;
