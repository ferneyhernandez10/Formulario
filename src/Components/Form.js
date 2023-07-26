import { Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import SelectCity from "./SelectCity";
import SelectLanguageOfInterest from "./SelectLanguageOfInterest";
import SelectTypeOfRequest from "./SelectTypeOfRequest";
import { InputComments } from "./InputComments";

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
    // <Card sx={{ ml: 119, width: "auto", height: "auto" }}>
    //   <CardContent>
    <>
      <h1>¡Queremos acompañarte!</h1>
      <h3>Déjanos tus datos</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputName register={register} />
          {nameValidation}
        </div>
        <div>
          <InputPhone register={register} />
          {phoneValidation}
        </div>
        <div>
          <InputEmail register={register} />
          {emailValidation}
          {validEmail}
        </div>
        <div>
          <SelectCity register={register} />
          {cityValidation}
        </div>
        <div>
          <SelectLanguageOfInterest register={register} />
          {languageOfInterestValidation}
        </div>
        <div>
          <SelectTypeOfRequest register={register} />
          {typeOfRequestValidation}
        </div>
        <div>
          <InputComments register={register} />
          {feedbackValidation}
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
    //   </CardContent>
    // </Card>
  );
};

export default Form;
