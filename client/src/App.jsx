import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Project from './pages/project'
import dashboard from './pages/dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/project' element={<Project />} />
        <Route path='/dashboard' element={<dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
