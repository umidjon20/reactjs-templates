import { useState,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Routess from './routes/Routes'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
 
  return (
    <div className=''>
   {/* <h1 className='container mx-auto text-3xl text-red-800'>Hello World</h1> */}
   <Navbar/>
    <Routess />
   <Footer />
   
    </div>
  )
}

export default App
