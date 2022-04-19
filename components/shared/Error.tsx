import React from "react";

export default function Error({ errors }) {
  return (
    <div className="text-error dark:text-error-dark text-xs h-4">
      {errors ? errors.message : " "}
    </div>
  );
}
