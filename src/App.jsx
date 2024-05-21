import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar/Navbar'

function App() {

  return (
    <div>
      <div className='relative container mx-auto'>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  )
}

export default App
