import React from "react";

export default function InputEmail({ register, errors }) {
  const emailValidation = errors.CorreoElectrónico?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );

  const validEmail = errors.CorreoElectrónico?.type === "pattern" && (
    <p>Por favor, introduce una dirección de correo electrónico válida.</p>
  );
  return (
    <>
      <input
        type="text"
        {...register("CorreoElectrónico", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
        placeholder="Correo Electrónico"
      />
      {emailValidation}
      {validEmail}
    </>
  );
}
