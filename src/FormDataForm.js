import React from "react";

const FormDataForm = ({ formData }) => {
  if (!Array.isArray(formData)) {
    console.error("formData is not an array or is undefined/null.");
    return null;
  }
  return (
    <div className="form-box">
      {formData.map((formElement, index) => (
        console.log("formElement", formElement)
      ))}
      {formData.map((formElement, index) => (
        // console.log("formElement",formElement)
        <div key={index} className="row mb-3">
          <div className="col-6">{renderFormElement(formElement)}</div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render each form element based on its type
const renderFormElement = (formElement) => {
  const { type, label, name, className, values, value } = formElement;
  console.log("fpooooo", formElement)
  switch (type) {
    case "header":
      return <div>
        <h1 key={name}>{label}</h1>
        <hr></hr>
      </div>
        ;
    case "select":
      return (

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{label}</h5>
            <p className="card-text">
              {values.map((option, optionIndex) => {
                if (option.selected) {
                  return (option.value)
                }
              })}
            </p>
          </div>
        </div>
      );
    case "checkbox-group":
    case "radio-group":
      return (
        // <div key={name} className="row mb-3">
        //   <div className="col-sm-10">
        //     <label className=" col-form-label">{label}</label>
        //     <div className="">
        //       {values.map((option, optionIndex) => (
        //         <div key={optionIndex} className="form-check">
        //           <input
        //             type={type === "checkbox-group" ? "checkbox" : "radio"}
        //             name={`${name}-${optionIndex}`}
        //             className="form-check-input"
        //             defaultChecked={option.selected}
        //           />
        //           <label className="form-check-label">{option.label}</label>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{label}</h5>
            <p className="card-text">
              {values.map((option, optionIndex) => {
                if (option.selected) {
                  return (option.value)
                }
              })}
            </p>
          </div>
        </div>
      );
    case "file":
    case "number":
      return (
        // <div key={name} className="row mb-3">
        //   <label className="col-sm-2 col-form-label">{label}</label>
        //   <div className="col-sm-10">
        //     {type === "file" ? (
        //       <input
        //         type="file"
        //         name={name}
        //         className={`form-control ${className}`}
        //       />
        //     ) : (
        //         type="number"
        //         name={name}
        //         className={`form-control ${className}`}
        //       />
        //     )}
        //   </div>
        // </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{label}</h5>
            <p className="card-text">
              {type === "file" ? (
                <img src={value} />
              ) : (
                value
              )
              }
            </p>
          </div>
        </div>
      );
    case "text":
      return (
        // <div className="card">
        //   <div key={name} className="row mb-3">
        //     <label className="col-sm-2 col-form-label">{label}</label>
        //     <div className="col-sm-10">
        //       <input
        //         type="text"
        //         name={name}
        //         className={`form-control ${className}`}
        //         value={value}
        //       />
        //     </div>
        //   </div>
        // </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{label}</h5>
            <p className="card-text">{value}</p>
          </div>
        </div>
      );
    case "date":
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{label}</h5>
            <p className="card-text">{value}</p>
          </div>
        </div>
      )
    // Handle other form element types as needed
    default:
      return null; // Ignore unknown form element types
  }
};

export default FormDataForm;
