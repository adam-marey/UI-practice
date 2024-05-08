
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import Navbar from './components/Navbar/Navbar'
import Learn from './components/Learn/Learn'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/blog" element={<Blog/>} />
      <Route path="/learn" element={<Learn/>} />
    </Routes>
    </>
  )
}

export default App
