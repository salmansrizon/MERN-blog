import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Project from './pages/project'
import dashboard from './pages/dashboard'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/project' element={<Project />} />
        <Route path='/dashboard' element={<dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
