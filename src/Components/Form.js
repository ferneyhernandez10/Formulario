import { Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormValidation } from "./FormValidation";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>¡Queremos acompañarte!</h1>
      <h3>Déjanos tus datos</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormValidation register={register} errors={errors} />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
