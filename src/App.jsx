import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Resume from "./Components/Resume"
import ServicePage from "./Pages/ServicePage"
import { Routes, Route,BrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout"
import Task from "./Pages/Task"
import "remixicon/fonts/remixicon.css";
import About from "./Pages/About"
import ContactPage from "./Pages/ContactPage"

function App() {


  return (
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />} />
    <Route index element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/home" element={<Home />} />
    <Route path="/projects" element={<Task />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<ContactPage />} />

    

    
     
   </Routes>
   </BrowserRouter>

   
 
  )
}

export default App
