import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import TopoBackground from './components/TopoBackground'
import Home from './pages/Home'
import Software from './pages/Software'
import FineArt from './pages/FineArt'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <TopoBackground />
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<Software />} />
            <Route path="/art" element={<FineArt />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
