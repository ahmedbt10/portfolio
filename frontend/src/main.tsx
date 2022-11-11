import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { About } from "./pages/about/About"
import ContactMe from "./pages/contact-me/ContactMe"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
