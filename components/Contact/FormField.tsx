import React from "react";
import { motion } from "framer-motion";
import Error from "../shared/Error";
import _ from "lodash";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../interfaces";

interface FormFieldProps {
  form: UseFormRegister<FormInputs>;
  typeObj: { required: string };
  type: "name" | "email" | "subject";
  value: string;
  onChange: (value: string) => void;
  initPos: number;
  error: FieldError;
}

export default function FormField({
  form,
  typeObj,
  type,
  value,
  onChange,
  initPos,
  error,
}: FormFieldProps) {
  return (
    <motion.div
      animate={{ x: [initPos, 0] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="basis-1/2"
    >
      <label htmlFor={type} className="hidden">
        {_.capitalize(type)}
      </label>
      <input
        type="text"
        placeholder={_.capitalize(type)}
        {...form(type, typeObj)}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name={type}
        className={`bg-primary border border-secondary text-secondary placeholder-gray-400 w-full p-2
                          dark:bg-primary-dark dark:text-secondary-dark focus:ring-1 outline-0
                          ${
                            error
                              ? "focus:ring-red-500"
                              : "focus:ring-accent-dark"
                          }
                          `}
      ></input>
      <Error errors={error} />
    </motion.div>
  );
}
