import React from "react";

export const InputComments = ({ register, errors }) => {
  const feedbackValidation = errors.Comentarios?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );
  return (
    <>
      <input
        type="text"
        {...register("Comentarios", { required: true })}
        placeholder="Comentarios"
      />
      {feedbackValidation}
    </>
  );
};
