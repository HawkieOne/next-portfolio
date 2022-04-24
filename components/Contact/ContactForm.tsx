import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import IconButton from "./IconButton";
import { showError, showSuccess } from "../../utils/notificationsFunctions";
import { useForm } from "react-hook-form";
import Error from "../shared/Error";
import axios from "axios";
import Rating from "./Rating";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const registerOptions = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    subject: { required: "Subject is required" },
    message: { required: "Message is required" },
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    const nrOfHearts = '♥'.repeat(rating);
    const variables = {
      from_email: email,
      from_name: name,
      message: message,
      rating: nrOfHearts,
    };

    // https://hakanlindahl.com/server/
    //https://hakanlindahl.com/serverContact/
    axios({
      method: "post",
      url: "http://localhost:9000/serverContact/",
      data: variables,
    })
      .then((res) => {
        showSuccess("Mail was successfully sent!");
      })
      .catch((err) => {
        console.error(
          "Oh well, the mail could not be sent. Here some thoughts on the error that occured:",
          err
        );
        showError("Email could not be sent!");
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col space-y-4 w-4/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between space-x-4">
          <motion.div
            animate={{ x: [-100, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="basis-1/2"
          >
            <input
              type="text"
              placeholder="Name"
              {...register("name", registerOptions.name)}
              onChange={(e) => setName(e.target.value)}
              className="bg-primary border border-secondary text-secondary placeholder-gray-400 focus:ring-teal-500 w-full p-2
                          dark:bg-primary-dark dark:text-secondary-dark"
            ></input>
            <Error errors={errors?.name} />
          </motion.div>

          <motion.div
            animate={{ x: [100, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="basis-1/2"
          >
            <input
              type="text"
              {...register("email", registerOptions.email)}
              placeholder="Mail"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary border border-secondary  text-secondary placeholder-gray-400 focus:ring-teal-500 w-full p-2
                        dark:bg-primary-dark dark:text-secondary-dark"
            ></input>
            {errors.email?.type === "required" ? (
              <Error errors={errors?.email} />
            ) : null}
            {errors.email?.type === "pattern" ? (
              <Error errors={errors?.email} />
            ) : null}
          </motion.div>
        </div>
        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <input
            type="text"
            {...register("subject", registerOptions.subject)}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            className="bg-primary border border-secondary text-secondary placeholder-gray-400 focus:ring-teal-500 w-full p-2
                      dark:bg-primary-dark dark:text-secondary-dark"
          ></input>
          <Error errors={errors?.subject} />
        </motion.div>
        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <textarea
            placeholder="Message"
            rows={4}
            {...register("message", registerOptions.message)}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            className="block bg-primary border border-secondary text-secondary placeholder-gray-400 focus:ring-teal-500 
                        resize-none w-full p-2 dark:bg-primary-dark dark:text-secondary-dark"
          ></textarea>
          <Error errors={errors?.message} />
        </motion.div>

        <Rating setRating={setRating}/>

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
