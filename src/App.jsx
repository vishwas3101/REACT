import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'
import Navbar from './Components/navigation/Navbar'
import Fullscreennav from './Components/navigation/Fullscreennav'


const App = () => {

  return (
    <div className='text-white overflow-x-hidden' >
      <Navbar/>
      <Fullscreennav/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Agence' element={<Agence  />}/>
      </Routes>

    </div>
  )
}

export default App