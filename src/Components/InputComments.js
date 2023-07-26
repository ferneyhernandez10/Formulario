import React from "react";

export const InputComments = ({ register }) => {
  return (
    <input
      type="text"
      {...register("Comentarios", { required: true })}
      placeholder="Comentarios"
    />
  );
};
