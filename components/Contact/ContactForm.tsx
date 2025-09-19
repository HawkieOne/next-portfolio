import React, { useCallback, useEffect, useState } from "react";
import IconButton from "./IconButton";
import { showError, showSuccess, showInfo, removeNotifications } from "../../utils/notificationsFunctions";
import { useForm } from "react-hook-form";
import Rating from "./Rating";
import FormField from "./FormField";
import FormTextArea from "./FormTextArea";
import { FormInputs } from "../../interfaces";
import { useForm as useFormspree } from '@formspree/react';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);
  const [state, handleFormSpreeSubmit, reset] = useFormspree("xdklqeky");


  if (state.submitting) {
    removeNotifications();
    showInfo("Sending email");
  }
  if (state.succeeded) {
    removeNotifications();
    showSuccess("Mail was successfully sent!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setRating(null);
    reset()
  }
  if (state.errors != null) {
    removeNotifications();
    showError("Email could not be sent due to server errors!");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "all",
  });

  //  ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i - regex pattern for mail validation
  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    subject: { required: "Subject is required" },
    message: { required: "Message is required" },
  };

  const onSubmit = (event) => {
    const isEmpty = isFormEmpty();
    if (isEmpty) {
      showError("Mail can not contain field with only spaces");
      return;
    }
    handleFormSpreeSubmit(event)
  };

  const isFormEmpty = () => {
    if (
      checkIfOnlyWhitespace(name) ||
      checkIfOnlyWhitespace(email) ||
      checkIfOnlyWhitespace(subject) ||
      checkIfOnlyWhitespace(message)
    ) {
      return true;
    }
    return false;
  };

  const checkIfOnlyWhitespace = (str) => {
    return !str.replace(/\s/g, "").length;
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col space-y-4 xl:space-y-4 w-4/5"
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
          rows={4}
          maxLength={600}
        />

        <Rating setRating={setRating} />

        <div className="self-center lg:self-end">
          <IconButton
            type="submit"
            text="Send"
            svgPath="/svg/send.svg"
            click={() => { }}
          />
        </div>
      </form>
    </div>
  );
}
