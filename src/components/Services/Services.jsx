import React from "react";
import "./Services.css";
import feature1 from "../assets/feature1.jpg";
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import member5 from "../assets/member5.jpg";
import member6 from "../assets/member6.jpg";
import member7 from "../assets/member7.jpg";


const Services = () => {
  return (
    <div className="services-page">
      {/* Section 1 */}
      <section className="services-hero">
        <h1>
        Transform <br/>Your <br/>Identity</h1>
        <p>At Deed Poll Department, we specialize in aesthetics-driven design, ensuring your online presence reflects your individuality and sophistication.</p>
      </section>

    
    <section class="section-32">
        <h1>Our deed poll services are tailored to meet your specific needs and requirements.</h1>
    
        <div class="scroll-container3">
            <div class="article3">
                <h2>Adult Deed Poll</h2>
              
                <p>Work with our experts online to easily and quickly complete your name change through a deed poll application.</p>
                <br/>
                <br/>
                <br/>
                <h4>Just ​£24.99</h4>
                <br/>
                <a href="/childpoll" class="btn">Start your application now</a>
            </div>
            <div class="article3">
                <h2>Child Deed Poll</h2>
           
                <p>Effortlessly change your name with our online deed poll service, guided by experts for a swift and seamless process.</p>
                <br/>
                <br/>
                <br/>
                <h4>Just ​£24.99</h4>
                <br/>
                <a href="/childpoll" class="btn">Start your application now</a>
            </div>
            <div class="article3">
                <h2>Family Deed Poll</h2>
              
                <p>Get personalized assistance from an expert to navigate through your deed poll requirements.</p> 
                <p>Special Offer (*for 1 parent and two children or two parents and one child)</p>
                <h4>£49.99</h4>
                <p>plus £10.00 for each additional child</p>
             
                <a href="/familypoll" class="btn">Start your application now</a>
            </div>
        </div>        
    </section>

     {/* Section 4 */}
     <section className="services-features">
        <h2>Deed Poll Solutions for Your Every Legal Need</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src={icon1} alt="Icon 1" className="feature-icon" />
            <h3>Elegant Document Design</h3>
            <p>Craft aesthetically pleasing deed poll documents optimized for personal use.</p>
          </div>
          <div className="feature-card">
            <img src={icon2} alt="Icon 2" className="feature-icon" />
            <h3>Tailored Local Services</h3>
            <p>We help position your deed poll services prominently for local clientele.</p>
          </div>
          <div className="feature-card">
            <img src={icon3} alt="Icon 3" className="feature-icon" />
            <h3>Flexible Payment Options</h3>
            <p>Seamless integration with various payment platforms for easy transactions.</p>
          </div>
          <div className="feature-card">
            <img src={icon4} alt="Icon 4" className="feature-icon" />
            <h3>Convenient Online Assisting</h3>
            <p>Connect with clients by allowing them to schedule consultations directly through your website.</p>
          </div>
        </div>
      </section>
   
    
    
    
    <section class="section-5">
        <h4>TESTIMONIALS</h4>
        <h1>What Our Clients Think</h1>
            <div class="team-container">
                <div class="team-card">
                    <img src={member5} alt={`member`} class="member-image"/>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <h3 class="name">AMARA REGGAE</h3>
                    <p class="occupation">Interior Designer</p>
                    <p class="bio">Working with deed poll was a transformative experience. Their attention to detail and design sensibility turned my vision into a reality!</p>
                </div>
                
                <div class="team-card">
                <img src={member6} alt={`member`} class="member-image"/>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <h3 class="name">William White</h3>
                    <p class="occupation">Marketing Specialist</p>
                    <p class="bio">My experience with deed poll has been exceptional. The team's commitment to customer satisfaction made my name change so efficient!</p>
                </div>
                
                <div class="team-card">
                <img src={member7} alt={`member`} class="member-image"/>
                    <div class="rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <h3 class="name">Emma Stone</h3>
                    <p class="occupation">Fashion Consultant</p>
                    <p class="bio">Deed Poll went above and beyond my expectations. Their seamless combination of style and practicality truly distinguishes them as leaders in their field!</p>
                </div>
                
            </div>
           
    </section>

    <section class="section-7">
        <h1>How Deed Poll Works</h1>
        <div class="steps-container">
            <div class="row">
                <div class="step">
                    <span class="step-number">1</span>
                    <h3>Personal Consultation</h3>
                    <p>Start with a personalized consultation to evaluate your needs and goals.</p>
                </div>
                <div class="arrow">→</div>
                <div class="step">
                    <span class="step-number">2</span>
                    <h3>Document Creation</h3>
                    <p>Our expert team will generate all necessary documents for your name change.</p>
                </div>
                <div class="arrow">→</div>
                <div class="step">
                    <span class="step-number">3</span>
                    <h3>Review Process</h3>
                    <p>Carefully review all documents for accuracy before approving for submission.</p>
                </div>
            </div>
    
            <div class="row second-row">
                <div class="step">
                    <span class="step-number">4</span>
                    <h3>Official Submission</h3>
                    <p>We take care of the official document submission for processing on your behalf.</p>
                </div>
                <div class="arrow">→</div>
                <div class="step">
                    <span class="step-number">5</span>
                    <h3>Name Change Confirmation</h3>
                    <p>Receive confirmation of your successful name change and its legal implications.</p>
                </div>
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

export default Services;