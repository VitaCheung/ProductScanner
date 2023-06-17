import React, { useEffect } from 'react';
import Search from "./search";

const FormComponent = ({ detectedBarcode }) => {
    function submitform(){
        document.forms["SearchForm"].submit();
    }

    useEffect(() => {
      if (detectedBarcode) {
        //Auto submit the search form once getting the detected barcode
        submitform();
      }
    }, [detectedBarcode]);
  
    return (
      <div id="searchbox">
        <Search searchQuery={detectedBarcode}  />
      </div>
    );
  };
  
  export default FormComponent;