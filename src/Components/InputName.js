import React from "react";

export default function InputName({ register, errors }) {
  const nameValidation = errors.Nombre?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );
  return (
    <>
      <input
        type="text"
        {...register("Nombre", { required: true })}
        placeholder="Nombre"
      />
      {nameValidation}
    </>
  );
}
