import React from "react";

export default function InputPhone({ register, errors }) {
  const phoneValidation = errors.Teléfono?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );
  return (
    <>
      <input
        type="text"
        {...register("Teléfono", { required: true })}
        placeholder="Teléfono"
      />
      {phoneValidation}
    </>
  );
}
