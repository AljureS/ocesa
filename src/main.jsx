import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'
import { inject } from '@vercel/analytics';

inject();

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
