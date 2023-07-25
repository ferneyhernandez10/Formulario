import { Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const nameValidation = errors.Nombre?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );

  const phoneValidation = errors.Teléfono?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );

  const emailValidation = errors.CorreoElectrónico?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );

  const validEmail = errors.CorreoElectrónico?.type === "pattern" && (
    <p>Por favor, introduce una dirección de correo electrónico válida.</p>
  );

  const cityValidation = errors.Ciudad?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );

  const languageOfInterestValidation = errors.IdiomaDeInterés?.type ===
    "required" && <p>Este campo es obligatorio.</p>;

  const typeOfRequestValidation = errors.TipoDeSolicitud?.type ===
    "required" && <p>Este campo es obligatorio.</p>;

  const feedbackValidation = errors.Comentarios?.type === "required" && (
    <p>Este campo es obligatorio.</p>
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card sx={{ ml: 119, width: "auto", height: "auto" }}>
      <CardContent>
        <h1>¡Queremos acompañarte!</h1>
        <h3>Déjanos tus datos</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register("Nombre", { required: true })}
              placeholder="Nombre"
            />
            {nameValidation}
          </div>
          <div>
            <input
              type="text"
              {...register("Teléfono", { required: true })}
              placeholder="Teléfono"
            />
            {phoneValidation}
          </div>
          <div>
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
          </div>
          <div>
            <select {...register("Ciudad", { required: true })}>
              <option value="Ciudad">Ciudad</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellin">Medellin</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Otra Ciudad">Otra Ciudad</option>
              <option value="Otro País">Otro País</option>
            </select>
            {cityValidation}
          </div>
          <div>
            <select {...register("IdiomaDeInterés", { required: true })}>
              <option value="Idioma de interés">Idioma de interés</option>
              <option value="Inglés">Inglés</option>
              <option value="Francés">Francés</option>
              <option value="Otros Idiomas">Otros Idiomas</option>
            </select>
            {languageOfInterestValidation}
          </div>
          <div>
            <select {...register("TipoDeSolicitud", { required: true })}>
              <option value="Tipo de solicitud">Tipo de solicitud</option>
              <option value="Cotización">Cotización</option>
              <option value="Académico">Académico</option>
              <option value="Servicio al cliente">Servicio al cliente</option>
              <option value="Cobranzas">Cobranzas</option>
            </select>
            {typeOfRequestValidation}
          </div>
          <div>
            <input
              type="text"
              {...register("Comentarios", { required: true })}
              placeholder="Comentarios"
            />
            {feedbackValidation}
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
