// import React from 'react';
import BarcodeScanner from '../components/BarcodeScanner';
import Search from "../components/search";
import {useState, useEffect}  from "react";
import FormComponent from "../components/FormComponent";
import About from "../routes/About";

export default function Scanner() {
    const [detectedBarcode, setDetectedBarcode] = useState('');
    const handleBarcodeDetected = (barcode) => {
        setDetectedBarcode(barcode);
      };

    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    // const searchQuery = useState(query);

    // console.log(searchQuery);
    console.log("hi, I'm scanner");


  return (
    <main id="scannerPage">
      <h2>Scan the barcode:</h2>
      <BarcodeScanner onBarcodeDetected={handleBarcodeDetected} />
      <FormComponent   detectedBarcode={detectedBarcode} />
      {/* Other components */}
    </main>
  );
}


