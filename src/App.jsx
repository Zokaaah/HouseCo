import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';




//Components
import NavBar from './Components/NavBar'
import Home from './Components/Home'

//Styles
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>

  <Home/>
   
    </>
  )
}

export default App
