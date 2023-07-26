import React from "react";

export default function InputPhone({ register }) {
  return (
    <input
      type="text"
      {...register("Teléfono", { required: true })}
      placeholder="Teléfono"
    />
  );
}
