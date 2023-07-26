import React from "react";

export default function InputName({ register }) {
  return (
    <input
      type="text"
      {...register("Nombre", { required: true })}
      placeholder="Nombre"
    />
  );
}
