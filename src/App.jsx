import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Resume from "./Components/Resume"
import ServicePage from "./Pages/ServicePage"
import { Routes, Route,BrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout"

function App() {


  return (
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />} />
    <Route index element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    

    
     
   </Routes>
   </BrowserRouter>

   
 
  )
}

export default App
