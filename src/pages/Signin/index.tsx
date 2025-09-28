import { Link, Navigate } from 'react-router-dom';
import '../Signup/auth.css';
import { useState } from 'react';
import { authRepository } from '../../modules/auth/auth.repository';
import { currentUserAtom } from '../../modules/auth/current-user.state';
import { useAtom } from 'jotai';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  const handleChange = (field: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (field) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  };

  const signin = async () => {
    if (!email || !password) {
      return;
    }
    const { user, token } = await authRepository.signIn(email, password);
    localStorage.setItem('token', token);
    setCurrentUser(user);
  }

  if(currentUser != null) {
    // ログインしていたらホームにリダイレクト
    return <Navigate to="/" />;
  }

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-title">Sign in</h1>
        <p className="signup-subtitle">メールアドレスでログインしてください</p>

        <div>
          <div className="form-group">
            <input type="email" placeholder="Email" required value={email} onChange={handleChange('email')} />
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" required value={password} onChange={handleChange('password')} />
          </div>
          <button type="submit" className="continue-button" onClick={signin} disabled={!email || !password}>
            Continue
          </button>
        </div>
        <p className="signin-link">
          ユーザー登録は<Link to="/signup">こちら</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
