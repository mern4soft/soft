import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  "./Login.css";


const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login authentication logic here
    // For demonstration, we'll simply navigate to a dashboard after login
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ash-400">
       <div class="text-container">
        <h2 class="h1">CQUBE</h2>
      </div>
      <div className="bg-white p-8 rounded drop-shadow-2xl w-1/3" >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
