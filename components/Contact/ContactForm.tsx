import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import IconButton from "./IconButton";
import { showError, showSuccess } from "../../utils/notificationsFunctions";
// import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const handleSubmit = (event) => {
    console.log(name + " " + email);
    event.preventDefault();
    const validatedForm = validateForm();
    if (validatedForm) {
      const variables = {
        from_email: email,
        from_name: name,
        message: message,
      };
      emailjs
        .send(
          "service_h71mex8",
          "template_bz87pmk",
          variables,
          "user_vSPVPiTGQL2Mi0PApx4ia"
        )
        .then((res) => {
          console.log("Email successfully sent!");
          showSuccess("Email successfully sent!");
          event.target.reset();
        })
        .catch((err) => {
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          );
          showError("Email could not be sent!")
        });
    }
  };

  const validateForm = () => {
    if (name == "" || email == "" || subject == "" || message == "") {
      showError("Please fill all the fields");
      console.log("NOT VALID");
      return false;
    }
    return true;
  };  

  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col space-y-4 w-4/5" onSubmit={handleSubmit}>
        <div className="flex justify-between space-x-4">
          <motion.div
            animate={{ x: [-100, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="basis-1/2"
          >
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="bg-primary border border-secondary text-secondary placeholder-gray-400 focus:ring-teal-500 w-full p-2
                          dark:bg-primary-dark dark:text-secondary-dark"
            ></input>
          </motion.div>
          <motion.div
            animate={{ x: [100, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="basis-1/2"
          >
            <input
              type="text"
              placeholder="Mail"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary border border-secondary  text-secondary placeholder-gray-400 focus:ring-teal-500 w-full p-2
                        dark:bg-primary-dark dark:text-secondary-dark"
            ></input>
          </motion.div>
        </div>

        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            className="bg-primary border border-secondary text-secondary placeholder-gray-400 focus:ring-teal-500 w-full p-2
                      dark:bg-primary-dark dark:text-secondary-dark"
          ></input>
        </motion.div>

        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <textarea
            placeholder="Message"
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            className="bg-primary border border-secondary text-secondary placeholder-gray-400 focus:ring-teal-500 
                        resize-none w-full p-2 dark:bg-primary-dark dark:text-secondary-dark"
          ></textarea>
        </motion.div>

        <IconButton
          type="submit"
          text="Send"
          svgPath="/svg/send.svg"
          click={() => {}}
        />
      </form>
    </div>
  );
}
