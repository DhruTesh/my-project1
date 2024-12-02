import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(false); // State for registration form
  const [showPassword, setShowPassword] = useState(false);
  const [showUsername, setShowUsername] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
      setIsLoginFormVisible(false);
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

  const handleRegistration = (e) => {
    e.preventDefault();
    // Here you would typically send the registration data to your backend
    console.log('User  registered:', { email, username, password });
    setIsRegistrationFormVisible(false); // Hide the form after registration
    setEmail('');
    setUsername('');
    setPassword('');
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
            onClick={() => setIsLoginFormVisible(!isLoginFormVisible)} 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
          >
            Login
          </button>
          <button 
            onClick={() => setIsRegistrationFormVisible(!isRegistrationFormVisible)} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Register
          </button>

          {isLoginFormVisible && (
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
              <button type="submit" className="bg-blue-500 hover:bg-blue- 600 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </form>
          )}

          {isRegistrationFormVisible && (
            <form onSubmit={handleRegistration} className="mt-4">
              <h2>Register</h2>
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
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;