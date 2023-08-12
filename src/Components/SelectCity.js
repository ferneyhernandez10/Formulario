import React from "react";

export default function SelectCity({ register, errors }) {
  const cityValidation = errors.Ciudad?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );
  return (
    <>
      <select {...register("Ciudad", { required: true })}>
        <option value="Ciudad">Ciudad</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellin">Medellin</option>
        <option value="Bucaramanga">Bucaramanga</option>
        <option value="Otra Ciudad">Otra Ciudad</option>
        <option value="Otro País">Otro País</option>
      </select>
      {cityValidation}
    </>
  );
}
