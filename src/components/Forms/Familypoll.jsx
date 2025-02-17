import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Familypoll.css";

const Familypoll = () => {
  const [total, setTotal] = useState(50.99);

  const calculateTotal = () => {
    let newTotal = 50.99;
    const price1 = parseInt(document.getElementById("price1")?.value) || 0;
    newTotal += price1 * 3;

    const poll1 = document.querySelector('input[name="poll1"]:checked')?.value;
    if (poll1 === "yes") newTotal += 3.5;

    const poll2 = document.querySelector('input[name="poll2"]:checked')?.value;
    if (poll2 === "option2") newTotal += 4.99;
    if (poll2 === "option3") newTotal += 3.99;
    if (poll2 === "option4") newTotal += 7.99;

    const poll3 = document.querySelector('input[name="poll3"]:checked')?.value;
    if (poll3 === "op1") newTotal += 10.0;
    if (poll3 === "op2") newTotal += 20.0;
    if (poll3 === "op3") newTotal += 30.0;
    if (poll3 === "op4") newTotal += 40.0;

    setTotal(newTotal.toFixed(2));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    
    emailjs.sendForm(
      "service_qlimulo", 
      "template_3neirj6", 
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
      {/* Hero Section */}
      <section className="section-11">
        <div className="section-1-content1">
          <h1>Deed Poll</h1>
          <p>
          Transform your identity with our deed poll services, designed to meet your personal needs and simplify your transition.
          </p>
        </div>
      </section>

      {/* Information Section */}
      <section className="section-2">
        <h1>Family Deed Poll</h1>
        <p>
          Eligibility requirements:
          <br />
          ​To change your family’s surname (SPECIAL OFFER* - for one parent and two children or one parent and two children), please fill out and submit the secure application form below. The application MUST include a child.Child must always be below 16 years old.Children can only adopt the new family surname. If you want to change a child's forename you shoud submit a separate child deed poll.The application must be completed by a mother or father who has parental responsibility for the child whose surname is being changed. Can include up to 4 children surname changes (each child at £10.00).R
          <br />
          <br />
          ​Need Help? For assistance, you may contact our Deed Poll team via our Helpline. Please refer to the bottom of the page for our contact details.
          <br />
          <br />
          ​Before completing this form, you may want to review our terms and conditions, by clicking on the link which is at the bottom of this page. All fields marked with an asterisk (*) are necessary. Please review the application for any mistakes,as we will not accept incorrect information.
        </p>
      </section>

      {/* Application Form */}
      <div className="sec2">
        <h3 className="form-title">Family Deed Poll Application</h3>
        <div className="form-container">
          <form onSubmit={sendEmail} onInput={calculateTotal}>
          <label for="parentstatus">1. What is your parent status?</label>
                    <select id="parentstatus" name="parentstatus" required>
                        <option name="select" value="select">Select your parent status</option>
                        <option name="Mother" value="Mother">Mother</option>
                        <option name="Father" value="Father">Father</option>
                    </select>

                    <label for="parentstatus1">1a. What is your parent status?  (Optional)</label>
                    <select id="parentstatus1" name="parentstatus1">
                        <option name="select" value="select">please select if there is a second parent</option>
                        <option name="Mother" value="Mother">Mother</option>
                        <option name="Father" value="Father">Father</option>
                    </select>

                    <label for="currentTitle">2. Current Title </label>
                    <input type="text" name="currentTitle" placeholder="Current Title" required/>

                    <label for="currentTitle1">2a. Current Title (If second parent is also submitting for a name change)</label>
                    <input type="text" name="currentTitle1" placeholder="Current Title" />
                    
                    <label for="currentForename">3. Current Forename </label>
                    <input type="text" name="currentForename" placeholder="Current forename" required/>

                    <label for="currentForename1">3a. Current Forename (if second parent is available)</label>
                    <input type="text" name="currentForename1" placeholder="Current forename" />
                    
                    <label for="currentSurname">4. Current Surname </label>
                    <input type="text" name="currentSurname" placeholder="Current surname" required/>

                    <label for="currentSurname1">4a. Current Surname(if second parent is available)</label>
                    <input type="text" name="currentSurname1" placeholder="Current surname"/>
                    
                    <label for="newTitle">5. New Title (if you wish to change else include same title)  </label>
                    <input type="text" name="newTitle" placeholder="New title" required/>
                    
                    <label for="newForename">6. New Forename (if you wish to change else include same forename)  </label>
                    <input type="text" name="newForename" placeholder="New forename" required/>
                    
                    <label for="newSurname">7. New Surname  (the new surname for all family members)</label>
                    <input type="text" name="newSurname" placeholder="New surname" required/>

                    <label for="email">8. Email Address  (Mother/Father) </label>
                    <input type="email" name="email" placeholder="Email Address" required/>

                    <div class="radiob">
                        <label for="surnamechanging">8. Number of Children's Surname Changing </label><br></br>
                        <input type="radio" name="poll3" value="op1"/> 1 child  - £10.00 <br></br>
                        <input type="radio" name="poll3" value="op2"/> 2 children  - £20.00<br></br>
                        <input type="radio" name="poll3" value="op3"/> 3 children  - £30.00<br></br>
                        <input type="radio" name="poll3" value="op4"/> 4 children  - £40.00<br></br>
                    </div>
                    
                    <label for="currentForenamech1">9.First child current forename  </label>
                    <input type="text" name="currentForenamech1" placeholder="Current forename" required/>

                    <label for="newsurnamech1">10.First child new surname  </label>
                    <input type="text" name="newsurnamech1" placeholder="New surname" required/>

                    <label for="currentForenamech2">11.Second child current forename  </label>
                    <input type="text" name="currentForenamech2" placeholder="Current forename"/>

                    <label for="newsurnamech2">12.Second child new surname  </label>
                    <input type="text" name="newsurnamech2" placeholder="New surname"/>

                    <label for="currentForenamech3">13.Third child current forename  </label>
                    <input type="text" name="currentForenamech3" placeholder="Current forename"/>

                    <label for="newsurnamech3">14.Third child new surname  </label>
                    <input type="text" name="newsurnamech3" placeholder="New surname"/>

                    <label for="currentForenamech4">15.Fourth child current forename  </label>
                    <input type="text" name="currentForenamech4" placeholder="Current forename"/>

                    <label for="newsurnamech4">16.Fourth child new surname  </label>
                    <input type="text" name="newsurnamech4" placeholder="New surname"/>

                    <label for="price1">17.Additional Copies(Highly recommended to order additonal copies since agencies require them.If more copies are required after submission,will have to reapply.Each additional copy £3) </label>
                    <input type="number" id="price1" name="price1"placeholder="Enter number of additional copies needed" required/>

                    <div class="radiob">
                        <label for="deliveryoption">18.Delivery Type </label><br></br>
                        <input type="radio" name="poll2" value="option1"/> Normal delivery (4-5 days) - Free<br></br>
                        <input type="radio" name="poll2" value="option2"/> 1st class delivery (1-2 days) - £4.99<br></br>
                        <input type="radio" name="poll2" value="option3"/> 2nd class delivery (2-3 days) - £3.99<br></br>
                        <input type="radio" name="poll2" value="option4"/> Recorded delivery (£7.99)<br></br>

                        <label for="deed">19.Deed Poll Departent cache service(We offer to store your information for future use,through this service you can order additonal copies if needed,without reapplying) </label><br></br>
                        <input type="radio" name="poll1" value="yes"/> Yes (+£3.50)<br></br>
                        <input type="radio" name="poll1" value="no" /> No
                    </div>

                    <label for="homeAddress">20. Home Address (include the address the post should be delivered to) </label>
                    <input type="text" name="homeAddress" placeholder="Your Full Address" required/>

 
                    <div className="total-price">
                        <label>Total Price:</label>
                        <div className="total-price1">£{total}</div>
                    </div>
                    
                    <button type="submit">SUBMIT INFORMATION TO PROCEED FOR PAYMENT</button>
                    
                    <p>"An invoice will be sent to your email for payment.Application will only be processed after payment"</p>
                    
          </form>
        </div>
      </div>
    </div>
  );
};

export default Familypoll;
