
import Hero from "./components/hero"
import './App.css'
import Navbar from "./components/Navbar"
// import Home from "./components/Home"
// import About from "./components/About"
// import Experience from "./components/Experience"
// import Projects from "./components/Projects"
//import Robo from "./components/robo"

// import { createBrowserRouter, RouterProvider } from "react-router-dom"

// const router = createBrowserRouter([
//   {
    
// path:"/",
// element:
// <div>
//   <Navbar/>
// <Home/>
// </div>

// },

//   {
//   path:"about",
//   element:<About/>,
// },
// {
//   path:"experience",
//   element:<Experience/>,
// },
// {
// path:"projects",
// element:<Projects/>
// },
// ]);
  







import "./nav.css"
function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
    {/* <RouterProvider router={router}/> */}

    </div>
  )

  
  
  {/* <Navbar></Navbar>
<Hero/> */} 

  
}

export default App
