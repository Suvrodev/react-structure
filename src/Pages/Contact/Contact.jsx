import React, { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import emailjs from "@emailjs/browser";
import titleAndGoUp from "../../JSFile/titleAndGoUp";

const Contact = () => {
  titleAndGoUp("Contact");
  const { successfullyToast } = useContext(AuthContext);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d4pyq16", "template_aovt5cz", form.current, {
        publicKey: "_kzTXrFfQk2uFNUe9",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result);
          if (result.text == "OK") {
            successfullyToast("Your mail send successfully");
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-white text-center my-10">
        Send Email
      </h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            id=""
            className="w-full bg-transparent border p-5"
            placeholder="Name"
          />

          <input
            type="text"
            name="user_email"
            id=""
            className="w-full bg-transparent border p-5 mt-10"
            placeholder="Email"
          />
          {/* <label>Message</label>
          <textarea name="message" /> */}
          <textarea
            type=""
            name="message"
            id=""
            className="w-full bg-transparent border p-5 h-60 mt-10"
            placeholder="Message"
          />
          <input
            type="submit"
            value="Send"
            className="btn text-white w-[250px] mt-10 bg-orange-500 hover:bg-orange-500 border-0"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
