import React from "react";

export default function InputEmail({ register }) {
  return (
    <input
      type="text"
      {...register("CorreoElectrónico", {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      })}
      placeholder="Correo Electrónico"
    />
  );
}
