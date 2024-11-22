import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [showUsername, setShowUsername] = useState(false); // State to manage username visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating a login process
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
      setIsLoginFormVisible(false); // Hide the form on successful login
      console.log('User  logged in');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setUsername('');
    setPassword('');
    console.log('User  logged out');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button 
            onClick={() => setIsLoginFormVisible(!isLoginFormVisible)} // Toggle form visibility
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          {isLoginFormVisible && ( // Show the login form if visible
            <form onSubmit={handleLogin} className="mt-4">
              <h2>Login</h2>
              <div>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-400 p-1 text-black"
                  />
                </label>
              </div>
              <div>
                <label>
                  Username:
                  <div className="relative">
                    <input
                      type={showUsername ? 'text' : 'password'}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="border border-gray-400 p-1 text-black"
                    />
                    <span 
                      onClick={() => setShowUsername(!showUsername)} 
                      className="absolute right-2 top-2 cursor-pointer"
                    >
                      {showUsername ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border border-gray-400 p-1 text-black"
                    />
                    <span 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute right-2 top-2 cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </label>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;