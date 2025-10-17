import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shopping from './Shopping.jsx'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Categories from './Categories.jsx'
import About from './About.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/Categories" element={<Categories />} />
         <Route path="/About" element={<About />} />
      </Routes>
       <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
