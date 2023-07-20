import React from "react";

const Contact = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.3170222084723!2d-77.05795133077777!3d38.87098805946893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6df29ed2c27%3A0xaf83d0f8c013532f!2sPentaqon!5e0!3m2!1saz!2saz!4v1689002854317!5m2!1saz!2saz"
        width="600"
        height="450"
        title="map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <span>MyHouse.com</span>
        <span>Pentagon, Washington, Virginia, United States America</span>
        <div className="app">
          <img src="images/facebook.svg" alt="icon" />
          <img src="images/instagram.svg" alt="icon" />
          <img src="images/twitter.svg" alt="icon" />
          <img src="images/youtube.svg" alt="icon" />
        </div>
        <span>Email: MyHouse.com</span>
      </div>
      <div>
        <span>Contact Us</span>
        <div>
          <label htmlFor="q">First Name</label>
          <input type="text" id="q" />
        </div>
        <div>
          <label htmlFor="w">Email Address</label>
          <input type="email" id="w" />
        </div>
        <div>
          <label htmlFor="e">Phone Number</label>
          <input type="number" id="e" />
        </div>
        <div>
          <label htmlFor="r">Message</label>
          <textarea id="r" cols="40" rows="8"></textarea>
        </div>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
