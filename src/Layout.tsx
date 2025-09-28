import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { currentUserAtom } from './modules/auth/current-user.state';
import { useAtomValue } from 'jotai';

const Layout = () => {
  const currentUser = useAtomValue(currentUserAtom);
  if(currentUser == null) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="youtube-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
