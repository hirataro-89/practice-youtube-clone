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
import { currentUserAtom } from './modules/auth/current-user.state'
import { useEffect, useState } from 'react'
import { authRepository } from './modules/auth/auth.repository'
import { useSetAtom } from 'jotai'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const setCurrentUser = useSetAtom(currentUserAtom);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const user = await authRepository.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if(isLoading) {
    return <div>Loading...</div>;
  }

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
