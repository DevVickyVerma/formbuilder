import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery-ui-sortable';
import 'formBuilder/dist/form-render.min.css';
import 'formBuilder/dist/form-builder.min.css';
import 'formBuilder/dist/form-builder.min.js';
const FormBuilderComponent = () => {
    const formBuilderRef = useRef(null);
  
    useEffect(() => {
      // Initialize formBuilder
      $(formBuilderRef.current).formBuilder();
  
      return () => {
        // Cleanup on component unmount
        $(formBuilderRef.current).formBuilder('destroy');
      };
    }, []); // Empty dependency array ensures the effect runs once on mount
  
    return (
      <div>
        <div ref={formBuilderRef}></div>
      </div>
    );
  };
  
  export default FormBuilderComponent;
  