import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, BlogPage, HomePage, LoginPage } from './pages'
import { Navbar } from "./components"

function App() {


  return (
    <div className=' w-full h-screen '>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<BlogPage />} path="/blogs" />
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
