import BarcodeScanner from '../components/BarcodeScanner';
// import Search from "../components/search";
import {useState, useEffect}  from "react";
import FormComponent from "../components/FormComponent";

export default function Scanner() {
    const [detectedBarcode, setDetectedBarcode] = useState('');
    const handleBarcodeDetected = (barcode) => {
        setDetectedBarcode(barcode);
      };
    console.log("hi, I'm scanner");

  return (
    <main id="scannerPage">
      <h1>Scan the barcode:</h1>
      <BarcodeScanner onBarcodeDetected={handleBarcodeDetected} />
      <FormComponent   detectedBarcode={detectedBarcode} />
    </main>
  );
}


