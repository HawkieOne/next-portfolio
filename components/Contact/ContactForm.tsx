import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import IconButton from "./IconButton";
import { showError, showSuccess } from "../../utils/notificationsFunctions";
import { useForm } from "react-hook-form";
import Error from "../shared/Error";
import axios from "axios";
import Rating from "./Rating";
import FormField from "./FormField";
import FormTextArea from "./FormTextArea";
import { FormInputs } from "../../interfaces";
import LoadingOverlay from "react-loading-overlay-ts";
import { BeatLoader } from "react-spinners";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "all",
  });

  const setLoadingOverlay = useCallback(() => {
    setIsLoading((value) => !value);
  }, []);

  //  ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i - regex pattern for mail validation
  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    subject: { required: "Subject is required" },
    message: { required: "Message is required" },
  };

  const onSubmit = (event) => {
    console.log(isLoading)
    const isEmpty = isFormEmpty();
    console.log(isEmpty)
    if (isEmpty) {
      showError("Mail can not contain field with only spaces");
      return;
    } 
    if (!isLoading) {
      // event.preventDefault();
      setLoadingOverlay();
      const nrOfHearts = "♥".repeat(rating);
      const variables = {
        from_email: email,
        from_name: name,
        subject: subject,
        message: message,
        rating: nrOfHearts,
      };

      resetForm();

      // * https://hakanlindahl.com/server/
      // * https://hakanlindahl.com/serverContact/
      // * "http://localhost:9000/serverContact/
      axios({
        method: "post",
        url: "https://hakanlindahl.com/serverContact/",
        data: variables,
      })
        .then((res) => {
          showSuccess("Mail was successfully sent!");
          setLoadingOverlay();
        })
        .catch((err) => {
          console.error(
            "Oh well, the mail could not be sent. Here some thoughts on the error that occured:",
            err
          );
          showError("Email could not be sent!");
          setLoadingOverlay();
        });
    }
  };

  const isFormEmpty = () => {
    if (checkIfOnlyWhitespace(name) || 
        checkIfOnlyWhitespace(email) || 
        checkIfOnlyWhitespace(subject) || 
        checkIfOnlyWhitespace(message)) {
          return true;
    }
    return false;
  }

  const checkIfOnlyWhitespace = (str) => {
    return !str.replace(/\s/g, '').length;
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setRating(null);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col space-y-4 w-4/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between space-x-4">
          <FormField
            form={register}
            typeObj={registerOptions.name}
            type="name"
            value={name}
            onChange={setName}
            initPos={-100}
            error={errors?.name}
          />
          <FormField
            form={register}
            typeObj={registerOptions.email}
            type="email"
            value={email}
            onChange={setEmail}
            initPos={100}
            error={errors?.email}
          />
        </div>

        <FormField
          form={register}
          typeObj={registerOptions.subject}
          type="subject"
          value={subject}
          onChange={setSubject}
          initPos={-100}
          error={errors?.subject}
        />

        <FormTextArea
          form={register}
          typeObj={registerOptions.message}
          type="message"
          value={message}
          onChange={setMessage}
          initPos={-100}
          error={errors?.message}
          rows={5}
          maxLength={600}
        />

        <Rating setRating={setRating} />

        <div className="self-center lg:self-end">
          <LoadingOverlay active={isLoading} spinner={<BeatLoader color="#3FC1C9" size={5}/>}>
            <IconButton
              type="submit"
              text="Send"
              svgPath="/svg/send.svg"
              click={() => {}}
            />
          </LoadingOverlay>
        </div>
      </form>
    </div>
  );
}
