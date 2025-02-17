import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Childpoll.css";

const Childpoll = () => {
  const [total, setTotal] = useState(24.99);

  const calculateTotal = (event) => {
    let newTotal = 24.99;
    const price1 = parseFloat(document.getElementById("price1").value) || 0;
    newTotal += price1 * 3;

    const poll1 = document.querySelector('input[name="poll1"]:checked')?.value;
    if (poll1 === "yes") newTotal += 3.5;

    const poll2 = document.querySelector('input[name="poll2"]:checked')?.value;
    if (poll2 === "option2") newTotal += 4.99;
    if (poll2 === "option3") newTotal += 3.99;
    if (poll2 === "option4") newTotal += 7.99;

    setTotal(newTotal.toFixed(2));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    
    emailjs.sendForm(
      "service_qlimulo", 
      "template_94vw8yg", 
      event.target, 
      "OwNZuc3gkwfhaDOFX"
    )
    .then(() => {
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
  };
  

  return (
    <div>
      <section className="section-1">
        <div className="section-1-content">
          <h1>
            Transform <br />
            Your <br />
            Identity
          </h1>
          <p>
            At Deed Poll, we specialize in helping you change
            your name effortlessly and stylishly, ensuring your
            new identity reflects who you truly are.
          </p>
        </div>
      </section>

      <section className="section-222">
        <h1>Eligibility requirements</h1>
        <p>
          To legally change your name, please complete this secure Deed Poll
          application form. Before proceeding, we advise you to review our terms
          and conditions. You can find this information by clicking <a href="/terms">here</a>.
          <br />
          <br />
          Eligibility Criteria: For Child Deed Poll, applicants must be below 18 years for
          submission. Parent verification documents are needed. (ID/Passport/Driving license).
          <br />
          For Adult Deed Poll, applicants must be 18 years or above for submission.
          <br />
          <br />
          Need Help? For assistance, you may contact a Deed Poll Officer via our Helpline.
          Please refer to the bottom of this page for our contact details.
          <br />
          <br />
          Important Information: Fields marked with an asterisk (*) are mandatory and
          must be completed before submission.
        </p>
        </section>
        <section className="form-sec">
        <h3 className="form-title12">Deed Poll Application</h3>
        <div className="form-container12">
          <form onSubmit={sendEmail} onInput={calculateTotal}>
            <label htmlFor="currentTitle">Current Title </label>
            <input type="text" name="currentTitle" placeholder="e.g., Mr, Mrs, Miss" required />

            <label htmlFor="currentForename">Current Forename </label>
            <input type="text" name="currentForename" placeholder="Enter your current forename" required />

            <label htmlFor="currentMiddleName">Current Middle Name (optional)</label>
            <input type="text" name="currentMiddleName" placeholder="Enter your current middle name" />

            <label htmlFor="currentSurname">Current Surname </label>
            <input type="text" name="currentSurname" placeholder="Enter your current surname" required />

            <label htmlFor="newTitle">New Title (if you wish to change else include same title)  </label>
            <input type="text" name="newTitle" placeholder="Enter new title" required />

            <label htmlFor="newForename">New Forename (if you wish to change else include same forename) </label>
            <input type="text" name="newForename" placeholder="Enter new forename" required />

            <label htmlFor="newMiddleName">New Middle Name (optional)</label>
            <input type="text" name="newMiddleName" placeholder="Enter new middle name" />

            <label htmlFor="newSurname">New Surname (if you wish to change else include same surname)</label>
            <input type="text" name="newSurname" placeholder="Enter new surname" required />

            <label htmlFor="age">Age (if age is 16 or below, parent identification document is required.For adult deeds also submit identification document)</label>
            <input type="number" name="age" placeholder="Enter your age" required />

            <label htmlFor="identification">Identification document (Valid ID/Passport/Driving license) </label>
            <input type="file" id="identification" required />

            <label htmlFor="email">Email Address (for child deeds enter relevant parent's email) </label>
            <input type="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="price1">Additional Copies(Highly recommended to order additonal copies since agencies require them.If more copies are required after submission,will have to reapply.Each additional copy £3) </label>
            <input type="number" id="price1" name="price1" placeholder="Enter number of additional copies" required />

            <label htmlFor="homeAddress">Home Address (Enter the address the deed poll should be delivered, postal code required)</label>
            <input type="text" name="homeAddress" placeholder="Enter your address" required />

            <div className="radiob">
              <label htmlFor="deliveryoption">Deed Poll Department cache service (We offer to store your information for future use, through this you can order additional copies of your deed poll without applying again.) </label>
              <br />
              <input type="radio" name="poll1" value="yes" /> Yes (+£3.50)
              <br />
              <input type="radio" name="poll1" value="no" /> No
              <br />
              <br />

              <label htmlFor="deliveryoption">Delivery option </label>
              <br />
              <input type="radio" name="poll2" value="option1" /> Normal delivery (4-5 days) - Free
              <br />
              <input type="radio" name="poll2" value="option2" /> 1st class delivery (1-2 days) - £4.99
              <br />
              <input type="radio" name="poll2" value="option3" /> 2nd class delivery (2-3 days) - £3.99
              <br />
              <input type="radio" name="poll2" value="option4" /> Recorded delivery (£7.99)
              <br />
            </div>

            <div className="total-price">
              <label>Total Price:</label>
              <div className="total-price1">£{total}</div>
            </div>

            <button type="submit">SUBMIT INFORMATION TO PROCEED FOR PAYMENT</button>
            <p>"An invoice will be sent to your email for payment. Application will only be processed after payment."</p>
          </form>
        </div>
        </section>
    </div>
  );
};

export default Childpoll;
