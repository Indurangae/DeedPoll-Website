import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Section 1 - Hero */}
      <section className="terms-hero">
        <h1>
        Transforming your name effortlessly</h1>
      </section>

      {/* Section 2 - Bullet Points in a Card */}
      <section className="terms-section">
        <h2>User Obligations</h2>
        <div className="terms-card">
          <ul>
            <li><b>Provide Accurate Information:</b> Users must ensure that all personal and legal information provided to deed poll is complete and correct. Any inaccuracies could affect the processing of your deed poll application.</li>
            <li><b>Meet Age Requirements:</b> For processing a deed poll, you must adhere to the age restrictions set for different types of applications, ensuring compliance with legal guidelines.</li>
            <li><b>Consent to Process:</b> By using our services, users agree to our processing policies, ensuring that all actions taken with your information comply with data protection regulations.</li>
            <li><b>Respect Confidentiality Agreements:</b> Users are obliged to respect and adhere to any confidentiality clauses to safeguard personal and sensitive information.</li>
            <li><b>Abide By Legal Terms:</b> It is mandatory for users to understand and agree to the legal terms and conditions associated with the deed poll process when utilizing our services.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 - Detailed Explanation */}
      <section className="terms-details">
        <h2>Deed Poll Payment Policies</h2>
        <p>At Deed Poll Department, we aim for clarity and understanding regarding our payment procedures regarding our services:</p>
        <ul>
          <li>Accepted Payment Methods: We accept payments through major credit cards(Visa,Mastercard,American Express and GooglePay)</li>
          <li>Payment Schedule: Full payment is required before we commence any deed poll services.</li>
          <li>Refund Policy: Refunds are only available for services that have not yet started. Once we begin processing your application, no refunds will be issued</li>
          <li>Currency: All pricing and fees listed are in GBP (£). Currency conversion rates may apply for international transactions.</li>
          <li>Additional Charges: Any alterations made after initial submission may lead to extra fees. Please verify all details before making payment.</li>
          <li>Privacy Assurance: All payment information is handled and stored securely in compliance with our Privacy Policy.</li>
        </ul>
        <h3>Limitation of Liability</h3>
        <p>Deed Poll Department, herein referred to as "the Company," does not guarantee the legal effect or recognition of any Deed Poll produced using its services. The Company disclaims any liability for any inaccuracies, omissions, or misinterpretations of its services.
        <br/>
        <br/>
        In no event shall the Company, its officers, directors, employees be liable for any direct, indirect, incidental, special, or consequential damages (including but not limited to loss of data, revenue, or profits), arising out of or in connection with the use or inability to use the services provided by the Company.
        <br/>
        <br/>
        The Company shall not be held responsible for errors, delays, or interruptions in service caused by strikes, war, acts of God, or other causes beyond its control. The user acknowledges that the Company provides informational resources, and that legal or specialist advice should be sought for specific circumstances.
        <br/>
        <br/>
        This Limitation of Liability applies to all claims and causes of action, regardless of whether based on warranty, contract, tort, or any other legal theory. The user agrees that the maximum liability of the Company arising from any services provided is the amount paid by the user for said services.
        <br/>
        <br/>
        By accessing or using the Company’s services, the user agrees to this Limitation of Liability in its entirety. If any provision of this section is deemed unenforceable, all remaining provisions shall remain in full force and effect.</p>
      </section>
            {/* Section 5 - Closing Statement */}
            <section className="terms-footer">
        <h2>Privacy Policy</h2>
        <p>At deed poll department, we value your privacy and are dedicated to safeguarding your personal information. This privacy policy elucidates our practices, the types of data we gather, and the ways in which it is utilized and shared.
        <br/>
        <br/>
        We strive for complete transparency in our data handling practices. For an in-depth understanding, please refer to our thorough Privacy Policy page at the bottom.
        <br/>
        <br/>
        By accessing our services, you agree to the collection and use of your information as described in this policy. We recommend reviewing this policy periodically to remain updated on our safety measures.</p>
      </section>

      {/* Section 4 - Percentage Cards */}
      <section className="terms-stats">
        <div className="stat-card">
          <h2>85%</h2>
          <p>of clients appreciate our streamlined name change process.</p>
        </div>
        <div className="stat-card">
          <h2>72%</h2>
          <p>of our users find the information on our site helpful.</p>
        </div>
        <div className="stat-card">
          <h2>90%</h2>
          <p>of individuals are confident in completing their deed poll online.</p>
        </div>
        <div className="stat-card">
          <h2>78%</h2>
          <p>of clients are satisfied with their new name and processes.</p>
        </div>
      </section>

      {/* Section 5 - Closing Statement */}
      <section className="terms-footer">
        <h2>Modification of Terms</h2>
        <p>Deed Poll  Department reserves the right to amend the terms of service at any point. Notifications regarding changes will be sent to our clients via email and will be updated on our website promptly. It is crucial for you to examine these modifications closely, as ongoing use of our services signifies your acceptance of these revisions. We are dedicated to delivering a seamless and transparent service, with your satisfaction as our top priority.</p>
      </section>
    </div>
  );
};

export default Terms;
