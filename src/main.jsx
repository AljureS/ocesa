import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { inject } from '@vercel/analytics'

inject()
gsap.registerPlugin(ScrollTrigger)

// Referencias al DOM
const loader = document.getElementById('loader')
const rootElement = document.getElementById('root')

// Ocultar loader y mostrar app
function startApp() {
  if (loader) loader.style.display = 'none'
  if (rootElement) rootElement.style.display = 'block'

  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

// Simula una carga (puedes quitar el setTimeout y llamar `startApp()` directamente si no necesitas esperar)
setTimeout(startApp, 2000)
// startApp() // Descomentar si no necesitas el loader