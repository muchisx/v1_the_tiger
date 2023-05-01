/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
    host: true,
  },
});
