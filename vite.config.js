import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  // Rest of your configuration
});





// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// const Dotenv = require('dotenv-webpack');
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })






