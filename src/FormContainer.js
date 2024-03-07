// FormContainer.js
import React from "react";
import FormBuilder from "./FormBuilder"; // Update the path based on your file structure
import FormDataForm from "./FormDataForm";

const FormContainer = () => {
  const formData1 = [
    {
      type: "header",
      subtype: "h1",
      label: "Form 1"
    },
    // Additional form elements for Form 1
  ];
  const staticFormData = [
    {
      "type": "header",
      "subtype": "h1",
      "label": "Form 1"
    },
    {
      "type": "file",
      "label": "File Upload",
      "className": "form-control",
      "name": "file-1708521776845",
      "subtype": "file"
    },
    {
      "type": "hidden",
      "name": "hidden-1708521777580"
    },
    {
      "type": "radio-group",
      "label": "Radio Group",
      "name": "radio-group-1708521778013",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "checkbox-group",
      "label": "Checkbox Group",
      "name": "checkbox-group-1708521779229",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1",
          "selected": true
        }
      ]
    },
    {
      "type": "checkbox-group",
      "label": "Checkbox Group",
      "name": "checkbox-group-1708521779436",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1",
          "selected": true
        }
      ]
    },
    {
      "type": "text",
      "label": "Text Field",
      "className": "form-control",
      "name": "text-1708521780715",
      "subtype": "text"
    },
    {
      "type": "text",
      "label": "Text Field",
      "className": "form-control",
      "name": "text-1708521780926",
      "subtype": "text"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521782072",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521782471",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521782762",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521783015",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521783429",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521783837",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521784222",
      "subtype": "textarea"
    },
    {
      "type": "textarea",
      "label": "Text Area",
      "className": "form-control",
      "name": "textarea-1708521784617",
      "subtype": "textarea"
    },
    {
      "type": "radio-group",
      "label": "Radio Group",
      "name": "radio-group-1708521786647",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "select",
      "label": "Select",
      "className": "form-control",
      "name": "select-1708521787854",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1",
          "selected": true
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "select",
      "label": "Select",
      "className": "form-control",
      "name": "select-1708521788247",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1",
          "selected": true
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "select",
      "label": "Select",
      "className": "form-control",
      "name": "select-1708521788657",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1",
          "selected": true
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    }
  ]


  return (
    <div>
      <FormBuilder formData={formData1} />
 
      {/* <FormBuilder formData={formData2} /> */}
      {/* Add more instances of FormBuilder with different formData as needed */}
    </div>
  );
};

export default FormContainer;
