import React from "react";
import { FieldError } from "react-hook-form";

interface ErrorProps {
  errors: FieldError;
}

export default function Error({ errors }: ErrorProps) {
  return (
    <div className="text-error dark:text-error-dark text-xs h-4">
      {errors ? errors.message : " "}
    </div>
  );
}
