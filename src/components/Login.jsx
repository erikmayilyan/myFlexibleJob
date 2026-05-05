import React, { useState } from 'react';
import users from "../assets/users.json";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const user = users.users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Wrong Credentials!");
      return;
    };

    const sessionUser = {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email
    };

    localStorage.setItem("authUser", JSON.stringify(sessionUser));
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (isLogin) {
      handleLogin(email.trim(), password);
      return;
    }

    if (!role) {
      setError("Please choose Student or Business role.");
      return;
    }

    setError("Sign up is not connected yet. Use default demo accounts to log in.");
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h1>{isLogin ? 'LOG IN' : 'SIGN UP'}</h1>
        <form className='login-info' onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              className='login-input'
              placeholder="Full Name / Business Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          )}
          <input 
            type="email" 
            className='login-input'
            placeholder="Email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required 
          />
          <input 
            type="password" 
            className='login-input'
            placeholder="Password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required 
          />
          {!isLogin && <input type="date" className='login-input' required />}
          {!isLogin && (
            <div className="role-select">
              <p>I AM A:</p>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={(e) => setRole(e.target.value)}
                />
                Student
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="business"
                  checked={role === 'business'}
                  onChange={(e) => setRole(e.target.value)}
                />
                Business
              </label>
            </div>
          )}
          <button type="submit" className="submit-btn">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        {error && <p className="auth-error">{error}</p>}
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => {
            setIsLogin(!isLogin);
            setError('');
          }}>
            {isLogin ? " Sign Up" : " Log In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;