import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V4H3z" />
          </svg>
        </button>
        <div className="logo">
          <img
            src="/src/assets/logo.png"
            alt="YouTube Logo"
            className="youtube-logo"
          />
        </div>
      </div>
      <div className="header-center">
        <div className="search-container">
          <input type="text" placeholder="検索" className="search-input" />
          <button className="search-button">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="header-right">
        <NavLink to="/create-video" className="create-button">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <span>作成</span>
        </NavLink>
        <div className="profile-container">
          <button className="profile-button">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="Profile"
            />
          </button>
          <div className="profile-tooltip">
            <div className="profile-tooltip-header">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="Profile"
                className="profile-tooltip-avatar"
              />
              <div className="profile-tooltip-info">
                <div className="profile-tooltip-name">テストユーザー</div>
              </div>
              <button className="close-tooltip-button">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </div>
            <div className="profile-tooltip-divider"></div>
            <div className="profile-tooltip-menu">
              <div className="profile-tooltip-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5z" />
                </svg>
                <span>ログアウト</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
