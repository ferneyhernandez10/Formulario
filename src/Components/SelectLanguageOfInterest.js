import React from "react";

export default function SelectLanguageOfInterest({ register }) {
  return (
    <select {...register("IdiomaDeInterés", { required: true })}>
      <option value="Idioma de interés">Idioma de interés</option>
      <option value="Inglés">Inglés</option>
      <option value="Francés">Francés</option>
      <option value="Otros Idiomas">Otros Idiomas</option>
    </select>
  );
}
