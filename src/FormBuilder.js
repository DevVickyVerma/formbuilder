import React, { Component, createRef } from "react";
import $ from "jquery";
import FormDataForm from "./FormDataForm";
import MakeDynamicform from "./MakeDynamicform";

// Make jQuery accessible globally
window.jQuery = $;
window.$ = $;

// Import necessary jQuery plugins
require("jquery-ui-sortable");
require("formBuilder");

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null,
      error: null,
    };
    this.fb = createRef();
  }

  componentDidMount() {
    const { formData } = this.props;

    try {
      // Set controlOrder options
      const options = {
        controlOrder: [
          "select",
          "checkbox-group",
          "radio-group",
          "number",
          "date",
          "file",
          "header",
          "paragraph",
          "autocomplete",
          "starRating",

          // Add other controls as needed
        ],
      };

      // Initialize formBuilder with formData and options
      $(this.fb.current).formBuilder({
        formData,
        onSave: this.handleFormSave,
        ...options,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError = (error) => {
    console.error("An error occurred:", error);
    this.setState({ error: "An error occurred. Please check the console." });
  };

  handleFormSave = (formStructure) => {
    console.log("Form Structure:", formStructure);
  };

  getFormData = () => {
    if (typeof $ === "function") {
      // Get form data
      const formData = $(this.fb.current).formBuilder("getData");

      // Check the type of formData
      if (Array.isArray(formData)) {
        // If formData is an array, log and set it in the state
        console.log("Form Data Array:", formData);
        this.setState({ formData });
        return formData;
      } else if (typeof formData === "object") {
        // If formData is an object, log and handle accordingly
        console.log(
          "Form Data is an object. You may need to extract values or handle differently:",
          formData
        );

        // Example: Convert object values to an array
        const formDataArray = Object.values(formData);

        // Set the form data in the state
        this.setState({ formData: formDataArray });

        return formDataArray;
      } else {
        console.error("Invalid formData type:", formData);
        return null;
      }
    } else {
      console.error(
        "jQuery is not defined. Make sure it is loaded before FormBuilder."
      );
      return null;
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="p-3">
        <div className="card">
          <div className="card-body">
            <div id="fb-editor" ref={this.fb} />
            <button className="btn btn-primary mt-4" onClick={this.getFormData}>Get Form Data</button>

          </div>


        </div>

        {error ? (
          <div>
            <p>{error}</p>
          </div>
        ) : (
          this.state.formData && <MakeDynamicform formDataList={this.state.formData} />
        )}

      </div>
    );
  }
}

export default FormBuilder;
