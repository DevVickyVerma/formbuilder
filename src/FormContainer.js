// FormContainer.js
import React from "react";
import FormBuilder from "./FormBuilder"; 

const FormContainer = () => {
  const formData1 = [
    {
      type: "header",
      subtype: "h1",
      label: "Form 1"
    },
    // Additional form elements for Form 1
  ];



  return (
    <div>
      <FormBuilder formData={formData1} />
    </div>
  );
};

export default FormContainer;
