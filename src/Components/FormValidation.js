import React from "react";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import SelectCity from "./SelectCity";
import SelectLanguageOfInterest from "./SelectLanguageOfInterest";
import SelectTypeOfRequest from "./SelectTypeOfRequest";
import { InputComments } from "./InputComments";

export const FormValidation = ({ register, errors }) => {
  return (
    <>
      <div>
        <InputName register={register} errors={errors} />

        <InputPhone register={register} errors={errors} />
      </div>
      <div>
        <InputEmail register={register} errors={errors} />
      </div>
      <div>
        <SelectCity register={register} errors={errors} />
      </div>
      <div>
        <SelectLanguageOfInterest register={register} errors={errors} />
      </div>
      <div>
        <SelectTypeOfRequest register={register} errors={errors} />
      </div>
      <div>
        <InputComments register={register} errors={errors} />
      </div>
    </>
  );
};
