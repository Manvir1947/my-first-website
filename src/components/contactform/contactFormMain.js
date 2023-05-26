import React, { useState } from "react";
import ConnectorSvg from "./connectorSvg";
import { useRef } from "react";
import ErrorSucessPopUp from "./errorSucessPopUp";
import emailjs from "@emailjs/browser";
import ErrorSuccessWrapperPage from "./errorSuccessWrapperPage";
import DataSuccessPopUp from "./DataSuccessPopUp";

const ContactFormMain = () => {
  const [isErrorOrSucess, setErrorOrSucess] = useState({
    success: false,
    Error: false,
  });

  const setSuccess = (bool) => {
    setErrorOrSucess((prev) => ({
      ...prev,
      success: bool,
    }));
  };

  const setFaliure = (bool) => {
    setErrorOrSucess((prev) => ({
      ...prev,
      Error: bool,
    }));
  };
  const form = useRef();
  const emptyDataObject = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(emptyDataObject);

  const ErrorSuccessPageCreator = (svg, message, bool, setBool) => {
    return (
      <ErrorSuccessWrapperPage isTrue={{ bool, setBool }}>
        <ErrorSucessPopUp svg={svg} message={message} />
      </ErrorSuccessWrapperPage>
    );
  };
  const handleFormData = (event) => {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  console.log("FormData", formData);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8x4zcmj",
        "template_ok1dhki",
        form.current,
        "aUc9tbORPZJZslFeh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormData(emptyDataObject);
        },
        (error) => {
          console.log(error.text);
          setFaliure(true);
        }
      );
  };

  return (
    <div
      id="contact-section"
      onSubmit={sendEmail}
      className="contact-form-main-div section-border-radius section-gap"
    >
      {isErrorOrSucess.Error &&
        ErrorSuccessPageCreator(
          DataSuccessPopUp.faliure.svg,
          DataSuccessPopUp.faliure.message,
          isErrorOrSucess.Error,
          setFaliure
        )}
      {isErrorOrSucess.success &&
        ErrorSuccessPageCreator(
          DataSuccessPopUp.success.svg,
          DataSuccessPopUp.success.message,
          isErrorOrSucess.success,
          setSuccess
        )}

      <form action="#" ref={form} className="flex-column contact-form">
        <div className="contact-form-connector-svg-heading-div flex-column">
          <h1 className="contact-form-heading input-button-font-size">
            Let <span className="contact-form-apostrophe-span">'</span>s get{" "}
            <span className="contact-form-connected-span">connected</span>
          </h1>
          <ConnectorSvg />
        </div>
        <div className="contact-form-name-email-div flex-row ">
          <input
            onChange={(event) => {
              handleFormData(event);
            }}
            required
            className="contact-form-input  input-button-font-size"
            placeholder="Name"
            name="name"
            id="name"
            type="text"
            value={formData.name}
          />
          <input
            onChange={(event) => {
              handleFormData(event);
            }}
            required
            name="email"
            id="email"
            className="contact-form-input  input-button-font-size"
            placeholder="Email"
            type="email"
            value={formData.email}
          />
        </div>
        <input
          onChange={(event) => {
            handleFormData(event);
          }}
          required
          name="message"
          id="message"
          className="contact-form-message-input  input-button-font-size"
          placeholder="Message"
          type="textarea"
          value={formData.message}
        />
        <button className="contact-form-submit-button input-button-font-size">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactFormMain;
