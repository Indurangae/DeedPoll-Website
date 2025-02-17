import "./Home.css";
import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
import article3 from "../assets/article3.jpg";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="section-12" >
        <div className="section-1-content">
          <h1>Transform Your<br /> Identity With Us</h1>
          <p>
            Experience expert deed poll services tailored to your needs. Seeking a name
            change for personal reasons or new beginnings? Our dedicated team ensures a
            seamless and hassle-free process with precisely crafted legal documents.
          </p>
          <br></br>
          <br></br>
          <a href="/applynow" className="btn">APPLY NOW</a>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-25">
      <div className="scroll-container">
        <div className="article">
          <img src={article1} alt="Article 1" />
          <h2>Embrace Your New Identity</h2>
          <p>
            Embrace your new identity with our expert deed poll services, designed for<br />
            those ready to make a significant change in their lives. Our dedicated team<br />
            ensures that every detail aligns with your vision.
          </p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>

        <div className="article">
          <img src={article2} alt="Article 2" />
          <h2>Seamless Name Change Journey</h2>
          <p>
          Our comprehensive suite of services guides you through each stage of your<br />
          name change journey. From thorough document preparation to personalized<br />
          consultations, we empower you to navigate the legal process with confidence.
          </p>
        </div>

        <div className="article">
          <img src={article3} alt="Article 3" />
          <h2>Your Identity Transformation Awaits</h2>
          <p>
          Don’t hesitate to take this pivotal step towards redefining your identity. Our<br />
          committed team is ready to turn your aspirations into reality, ensuring an<br />
          effortless and rewarding experience throughout your transformation.
          </p>
        </div>
      </div>
    </section>


      {/* Section 3 */}
      <section className="section-3">
        <h1>Name Changes</h1>
        <br/>
        <br/>
        <br/>
        <div className="scroll-container3">
          {[
            { title: "Adult Deed Poll", para:"​Applicants aged 18 and above are  eligible to apply." ,price: "£24.99" },
            { title: "Child Deed Poll", para:"​When changing the name of a child under 18 years of age, the applicant must acquire parental consent for the child." ,price: "£24.99" },
            { title: "Family Deed Poll", para:"​SPECIAL OFFER* - (For one parent and two children or two parents and one child.)" ,price: "£49.99 ​*Every additional child £10.00" },
          ].map((item, index) => (
            <div className="article31" key={index}>
              <h2>{item.title}</h2>
              <br/>
              <p>{item.para}</p>
              <br/>
              <br/>
              <p>{item.price}</p>
              <br/>
              <br/>
              <a href="/applynow" className="btn">APPLY NOW</a>
            </div>
          ))}
        </div>
      </section>
      <br/>
      <br/>
      <br/>     
      {/* Section 4 */}
      <section className="section-4">
        <div className="content">
          <h1>Revitalize Your Identity with Deed Poll Services</h1>
          <p>Embrace your new identity effortlessly. Our dedicated team specializes in providing precise deed poll services tailored to your specific requirements, ensuring that changing your name is a stress-free experience. We handle the legal intricacies for you, allowing you to focus on your transformation.</p>
          <ul className="location-list">
            {["Personal Consultations", "Legal Document Preparation", "Expert Guidance", "Client Support", "Stress-Free Process", "Confidentiality Assured"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section-5">
        <h4>TESTIMONIALS</h4>
        <h1>What Our Clients Think</h1>
        <div className="team-container">
          <div className="team-card1">
            <img src={member1} alt="Team Member 1" className="member-image" />
            <div className="rating">
              {Array(5).fill("★").map((star, i) => (
                <span key={i} className="star">{star}</span>
              ))}
            </div>
            <h3 className="name">Sarah Johnson</h3>
            <p className="occupation">Marketing Specialist</p>
            <p className="bio">The professionalism shown by the team was outstanding. My name change process was handled smoothly and efficiently..</p>
          </div>

          <div className="team-card1">
            <img src={member2} alt="Team Member 2" className="member-image" />
            <div className="rating">
              {Array(5).fill("★").map((star, i) => (
                <span key={i} className="star">{star}</span>
              ))}
            </div>
            <h3 className="name">Daniel Carter</h3>
            <p className="occupation">Business Analyst</p>
            <p className="bio">I'm grateful for the attentive service. They guided me through every stage with clarity and care. Highly recommend!</p>
          </div>

          <div className="team-card1">
            <img src={member3} alt="Team Member 3" className="member-image" />
            <div className="rating">
              {Array(5).fill("★").map((star, i) => (
                <span key={i} className="star">{star}</span>
              ))}
            </div>
            <h3 className="name">Oliver Brown</h3>
            <p className="occupation">Content Writer</p>
            <p className="bio">I had such an effortless experience. The team was very supportive and took care of everything, making the transition smooth.</p>
          </div>

          <div className="team-card1">
            <img src={member4} alt="Team Member 4" className="member-image" />
            <div className="rating">
              {Array(5).fill("★").map((star, i) => (
                <span key={i} className="star">{star}</span>
              ))}
            </div>
            <h3 className="name">Thomas Tuchel</h3>
            <p className="occupation">Software Engineer</p>
            <p className="bio">Excellent service from start to finish!. The team was incredibly help. I received my Deed Poll quickly and couldn't be happier!</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;
