
import Hero from "./components/hero"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import PageNotFound from "./components/PageNotFound"
import RoboWidget from "./components/Robowidget"
//import Robo from "./components/robo"
import { Route, Routes } from "react-router-dom"
import "./styles/robo.css";




import "./nav.css"
function App() {

  return (
<>
     <Navbar/> 
    < RoboWidget/>

   <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      {/* All your routes and components here */}
    
      
<Routes>
  <Route path="*" element={<PageNotFound/>}></Route>
  <Route path="/home" element= {<Home/> }></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/experience" element={<Experience/>} ></Route>
  <Route path="/projects" element={<Projects/>} ></Route>
</Routes>
    </div>

    <div>
    
 

    </div>
    
  </>
  )

  
  
  {/* <Navbar></Navbar>
<Hero/> */} 

}

export default App
