import React from "react";
import ConnectorSvg from "./connectorSvg";

const ContactFormMain = () => {
  return (
    <div
      id="contact-section"
      className="contact-form-main-div section-border-radius section-gap"
    >
      <form action="#" className="flex-column contact-form">
        <div className="contact-form-connector-svg-heading-div flex-column">
          <h1 className="contact-form-heading input-button-font-size">
            Let <span className="contact-form-apostrophe-span">'</span>s get{" "}
            <span className="contact-form-connected-span">connected</span>
          </h1>
          <ConnectorSvg />
        </div>
        <div className="contact-form-name-email-div flex-row ">
          <input
            className="contact-form-input  input-button-font-size"
            placeholder="Name"
            name="name"
            id="name"
            type="text"
          />
          <input
            name="email"
            id="email"
            className="contact-form-input  input-button-font-size"
            placeholder="Email"
            type="email"
          />
        </div>
        <input
          name="message"
          id="message"
          className="contact-form-message-input  input-button-font-size"
          placeholder="Message"
          type="textarea"
        />
        <button className="contact-form-submit-button input-button-font-size">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactFormMain;
