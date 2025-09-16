
import Hero from "./components/hero"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
//import Robo from "./components/robo"
import { Route, Routes } from "react-router-dom"



import "./nav.css"
function App() {

  return (
<>
    <div>
<Routes>
  <Route path="/home" element= {<Home/> }></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/experience" element={<Experience/>} ></Route>
  <Route path="/projects" element={<Projects/>} ></Route>
</Routes>
    </div>
    <div>

      <Navbar/>
      <Hero/>
    {/* <RouterProvider router={router}/> */}

    </div>
    
  </>
  )

  
  
  {/* <Navbar></Navbar>
<Hero/> */} 

}

export default App
