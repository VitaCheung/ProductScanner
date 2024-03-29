import React from 'react';
import Quagga from 'quagga';
// import Search from "./search";
import {useState, useEffect}  from "react";

const BarcodeScanner = ({ onBarcodeDetected }) => {
    const [detectedBarcode, setDetectedBarcode] = useState('');
    const handleBarcodeDetection = (result) => {
        // Handle the detected barcode and send it to Search
        const barcode = result.codeResult.code;
        setDetectedBarcode(barcode);
        onBarcodeDetected(barcode);
        
        console.log('Detected barcode: '+barcode);
    };

    
    useEffect(() => {
        Quagga.init({
            inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#barcode-scanner'),
            },
            decoder: {
            readers: ['upc_reader'], // Enable only the UPC reader
            },
        }, (err) => {
            if (err) {
            console.error('Failed to initialize barcode scanner:', err);
            return;
            }
            Quagga.start();
    
            // Specify the function to handle barcode detection
            Quagga.onDetected(handleBarcodeDetection);
            
        });
        
        // Clean up the Quagga instance when the component is unmounted
        return () => {
            Quagga.stop();
        };


    }, []);


    
    
    return (
        <main id="Scan-main">
        {/* the 'barcode-scanner' */}
        <div id="barcode-scanner">
            <div className="sweeping-line"></div>
        </div>
        
        </main>
    );
    };

export default BarcodeScanner;
  
  