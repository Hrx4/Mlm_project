import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import backend from '../../backend';
import axios from 'axios'
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async(e) => {
    e.preventDefault();
    // Handle sign-in logic here
    const formData = {
      email,
      password
    };

    try {
        const response = await axios.post(`${backend}/login` ,
        formData 
    );
        console.log(response.data);
        navigate('/')
        localStorage.setItem('userInfo' , JSON.stringify(response.data))
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    console.log(formData); // Placeholder for API call or other actions
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Or UserID
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md font-medium hover:bg-blue-600"
        >
          Sign In
        </button>
        <div className=' text-black w-full flex justify-center items-center mt-4 cursor-pointer' onClick={()=>navigate('/signup')}>
            Don't Have an account ? 
        </div>
      </form>
    </div>
  );
};

export default SignIn;
