import React from "react";

export default function SelectTypeOfRequest({ register }) {
  return (
    <select {...register("TipoDeSolicitud", { required: true })}>
      <option value="Tipo de solicitud">Tipo de solicitud</option>
      <option value="Cotización">Cotización</option>
      <option value="Académico">Académico</option>
      <option value="Servicio al cliente">Servicio al cliente</option>
      <option value="Cobranzas">Cobranzas</option>
    </select>
  );
}
