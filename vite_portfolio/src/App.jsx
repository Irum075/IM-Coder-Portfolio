
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';

 import './App.css'
import Navbar from "./Components/Navbar";
import HomePage from './Components/Pages/HomePage'
import AboutPage from './Components/Pages/AboutPage'
import ContactPage from './Components/Pages/ContactPage'
import ProjectPage from './Components/Pages/ProjectPage'

function App() {
 return(
  <>
  <BrowserRouter>
  <Navbar/>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>

  </>
 )
}

export default App
