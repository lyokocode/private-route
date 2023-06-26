import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, BlogPage, HomePage, LoginPage } from './pages'
import { Navbar } from "./components"
import PrivateRoutes from '../utils/PrivateRoute'

function App() {

  return (
    <div className=' w-full h-screen '>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<BlogPage />} path="/blogs" exact />
          </Route>
          <Route element={<LoginPage />} path="/login" />
          <Route element={<AboutPage />} path="/about" exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App
