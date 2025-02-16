import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from  './Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <h1>My Name: Anil Gehlot N</h1>
            <p>Contact: anilgehlot.edu2k4@gmail.com</p>
        </div>
    </>
  )
}

export default App;
