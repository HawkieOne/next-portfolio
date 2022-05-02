import React from "react";
import _ from 'lodash';
import { motion } from "framer-motion";
import Error from "../shared/Error";

export default function FormTextArea({ form, typeObj, type, value, onChange, initPos, error, rows, maxLength}) {
  return (
    <motion.div
      animate={{ x: [initPos, 0] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <label htmlFor={type} className="hidden" >{_.capitalize(type)}</label>
      <textarea
        placeholder={_.capitalize(type)}
        rows={rows}
        {...form("message", typeObj)}
        value={value}
        name={type}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        className={`bg-primary border border-secondary text-secondary placeholder-gray-400
                        resize-none w-full p-2 dark:bg-primary-dark dark:text-secondary-dark focus:ring-1 outline-0
                        ${
                          error
                            ? "focus:ring-red-500"
                            : "focus:ring-accent-dark"
                        }`}
      ></textarea>
      <Error errors={error} />
    </motion.div>
  );
}
