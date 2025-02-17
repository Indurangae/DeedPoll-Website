import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contact-page">
      {/* Section 1 */}
      <section className="contact-section-one">
        <h2>
        Transform<br/> Your<br/> Identity</h2>
        <p>At deed poll, we specialize in guiding you through the process of changing your name with elegance and simplicity, ensuring a smooth transition into your new identity.</p>
        <a href="/applynow" className="blue-button5">APPLY NOW</a>
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

      {/* Section 2 */}
      <section className="contact-section-two">
        <h2>Our Service Hours</h2>
        <div className="working-hours">
          <div className="row">
            <span>Monday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="row">
            <span>Tuesday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="row">
            <span>Wednesday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="row">
            <span>Thursday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="row">
            <span>Friday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="row">
            <span>Saturday</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="row">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
        <p>**All forms submitted after service hours will be processed the next day.Bank holidays are also considered as weekends.</p>
      </section>
    </div>
  );
};

export default Contactus;
