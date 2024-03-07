import React from "react";

const FormDataForm = ({ formData }) => {
  if (!Array.isArray(formData)) {
    console.error("formData is not an array or is undefined/null.");
    return null;
  }
  return (
    <div className="form-box">
      {formData.map((formElement, index) => (
        <div key={index} className="row mb-3">
          <div className="col-6">{renderFormElement(formElement)}</div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render each form element based on its type
const renderFormElement = (formElement) => {
  const { type, label, name, className, values } = formElement;

  switch (type) {
    case "header":
      return <div>
        <h1 key={name}>{label}</h1>
        <hr></hr>
      </div>
     ;
    case "select":
      return (
        <div key={name} className="row mb-3">
          <div className="col-sm-6"></div>
          <label className=" col-form-label">{label}</label>
          <div className="">
            <select name={name} className={`form-select ${className}`}>
              {values.map((option, optionIndex) => (
                <option
                  key={optionIndex}
                  value={option.value}
                  selected={option.selected}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    case "checkbox-group":
    case "radio-group":
      return (
        <div key={name} className="row mb-3">
          <div className="col-sm-10">
            <label className=" col-form-label">{label}</label>
            <div className="">
              {values.map((option, optionIndex) => (
                <div key={optionIndex} className="form-check">
                  <input
                    type={type === "checkbox-group" ? "checkbox" : "radio"}
                    name={`${name}-${optionIndex}`}
                    className="form-check-input"
                    defaultChecked={option.selected}
                  />
                  <label className="form-check-label">{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "file":
    case "number":
      return (
        <div key={name} className="row mb-3">
          <label className="col-sm-2 col-form-label">{label}</label>
          <div className="col-sm-10">
            {type === "file" ? (
              <input
                type="file"
                name={name}
                className={`form-control ${className}`}
              />
            ) : (
              <input
                type="number"
                name={name}
                className={`form-control ${className}`}
              />
            )}
          </div>
        </div>
      );
    // Handle other form element types as needed
    default:
      return null; // Ignore unknown form element types
  }
};

export default FormDataForm;
