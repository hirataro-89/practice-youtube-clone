import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Layout from './Layout'
import Home from './pages/Home'
import CreateVideo from './pages/CreateVideo'
import MyVideos from './pages/MyVideos'
import EditProfile from './pages/EditProfile'
import VideoDetail from './pages/VideoDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create-video" element={<CreateVideo />} />
          <Route path="/my-videos" element={<MyVideos />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
