import React from "react";
import "./Privacy.css";
import securityIcon from "../assets/icon2.jpg";
import dataStorageIcon from "../assets/icon3.jpg";
import regulationsIcon from "../assets/icon4.jpg";

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Section 1 - Hero */}
      <section className="privacy-hero">
        <div className="content">
          <h1>
          Transform<br/> Your<br/> Identity</h1>
          <p>At deed poll, we specialize in elegant solutions for changing your name, ensuring a seamless experience that reflects your personal style and needs.</p>
        </div>
      </section>

      {/* Section 2 - Policy Overview */}
      <section className="privacy-section">
        <h2>Welcome to Deed Poll</h2>
        <p>At Deed Poll Department, we are committed to providing personalized services that facilitate identity transformations. Our skilled team is here to support you throughout the process, ensuring accuracy and an effortless experience. Whether you are looking to change your name or start anew, we are dedicated to making your journey seamless and customized.</p>
      </section>

      {/* Section 3 - Detailed Explanation */}
      <section className="privacy-detailed">
        <div className="content">
          <h2>Information Collection</h2>
          <h3>Personal Information</h3>
          <p>At Deed poll Department, we collect the following essential details to finalize your application:
          <br/>
            Full Name (current and new name)<br/>
            Date of Birth<br/>
            Contact Details (e.g., email address, phone number, physical address)</p>
              <br/>
              <h3>Contact Information</h3>
          <p>We collect your email, phone number and address at deed poll to communicate with you and send important updates about your application. Collected details may include:
              <br/>
            Contact Details (e.g., email address, physical address)</p>
            <br/>
              <h3>Payment Information</h3>
          <p>To handle your application fee, deed poll securely collects your payment details using cutting-edge encryption for your safety. Payment details collected may include:
          <br/>
              Credit/Debit card details (e.g., card number, expiry date, CVV).<br/>
              Billing Address <br/>
              Payment Method (e.g. Credit/Debit card)</p>
        </div>
      </section>

      {/* Section 4 - Bullet Points */}
      <section className="privacy-bullets">
        <h2>Use of Information</h2>
        <p>At deed poll department, your privacy is our top priority. The information you share with us is handled with the utmost integrity. Here’s how we utilize your data:</p>
        <ul>
          <li>To process your deed poll application with precision and care.</li>
          <li>To keep you informed about crucial updates and details regarding your request.</li>
          <li>To enhance our offerings based on user experiences and suggestions.</li>
          <li>To meet our regulatory commitments.</li>
          <li>To create a customized experience that aligns with your preferences.</li>
          <li>To respond to any questions or concerns you may have throughout the process.</li>
        </ul>
      </section>

      {/* Section 5 - Key Privacy Features */}
      <section className="privacy-features">
        <h2>Data Protection</h2>
        <div className="cards">
          <div className="card">
            <img src={securityIcon} alt="Security" />
            <h3>Robust Security Measures</h3>
            <p>At Deed Poll Department, our top-of-the-line security systems protect your sensitive information with the latest encryption technology, ensuring your data is always secure.</p>
          </div>
          <div className="card">
            <img src={dataStorageIcon} alt="Data Storage" />
            <h3>Secure Data Storage</h3>
            <p>We utilize secure storage solutions to protect your data from unauthorized access, ensuring privacy and integrity throughout the entire process.</p>
          </div>
          <div className="card">
            <img src={regulationsIcon} alt="Regulations" />
            <h3>Compliance with Regulations</h3>
            <p>We strictly adhere to legal guidelines and requirements for data protection, providing our clients with utmost assurance regarding their information safety.</p>
          </div>
        </div>
      </section>

      {/* Section 6 - Additional Details */}
      <section className="privacy-extra">
        <h2>Third Party Sharing</h2>

        <h3>Our Commitment to Privacy</h3>
        <p>At deed poll department, maintaining the privacy and security of our clients' personal information is our top priority. We implement the highest standards for data management and third-party sharing, safeguarding our clients' trust.</p>

        <h3>Information Sharing</h3>
        <p>Your data may be shared with reliable third-party partners solely when essential to facilitate your services, like preparing Deed Poll documents. We ensure our partners adhere to the same rigorous privacy standards we uphold.</p>

        <h3>Your Control</h3>
        <p>You have the right to know what personal data is shared and with whom. At any time, you may request a detailed overview of your information and its usage in our services. We empower you to make well-informed choices about your privacy.</p>
      </section>

      {/* Section 7 - Guidelines */}
      <section className="privacy-guidelines">
        <h2 className="blue-heading">Your Rights with Deed Poll</h2>
        <ul>
          <li>Right to Access: You have the right to request access to your information at any time.</li>
          <li>Right to Erasure: You have the right to request the deletion of your information under certain conditions.</li>
          <li>Right to Restrict Processing: You can request that we limit the processing of your information in specific situations.</li>
          <li>Right to Data Portability: You have the right to request your information in a structured, commonly used, and machine-readable format.</li>
          <li>Right to Object: You can object to the processing of your information based on grounds relating to your individual situation.</li>
        </ul>
      </section>

      {/* Section 8 - Final Notes */}
      <section className="privacy-final">
        <h2>Cookies Policy</h2>
        <p>At deed poll, we prioritize your privacy and experience. Our website utilizes cookies to enrich your journey with us. These cookies are small data files stored on your device that enable us to enhance the services we offer.
                <br/>
                <br/>
            You have the option to manage cookie settings directly through your browser. For the best experience while using our services, we recommend enabling all cookies. For more information on the types of cookies we use and how to control them, please feel free to contact us.</p>
      </section>

      {/* Section 9 - Warning Statement */}
      <section className="privacy-warning">
        <h2>Changes to Our Deed Poll Policy</h2>
        <p>Our Deed Poll Department policies may be updated from time to time to reflect changes in our practices or due to operational, legal or regulatory requirements. We recommend you review this policy regularly for any updates. Should we make significant changes, we will inform you using the contact details you have provided or by displaying a prominent notice on our website.</p>
        <p className="warning">
        Note: Please ensure that your contact details are always up-to-date to receive timely notifications regarding updates to our policy.</p>
      </section>
    </div>
  );
};

export default Privacy;
