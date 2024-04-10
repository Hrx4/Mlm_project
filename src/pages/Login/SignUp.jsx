import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import backend from '../../backend';
const SignUp = () => {
  const [introducerCode, setIntroducerCode] = useState("");
  const [introducerName, setIntroducerName] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async(e) => {
    e.preventDefault();
    // You can handle the form submission here
    // For example, send the form data to an API endpoint

    try {
        const response = await axios.post(`${backend}/user/` , {
          introducerCode : introducerCode,
    introducerName : introducerName,
    userName : name,
    userMobile : mobileNo,
    userEmail : email,
    userCountry : country,
    userState : state,
    userPassword : password,
        });
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        navigate('/signin')
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label htmlFor="introducerCode" className="block text-sm font-medium text-gray-600">
            Introducer Code
          </label>
          <input
            type="text"
            id="introducerCode"
            className="mt-1 p-2 w-full border rounded-md"
            value={introducerCode}
            onChange={(e) => setIntroducerCode(e.target.value)}
            
          />
        </div>

        <div className="mb-4">
          <label htmlFor="introducerName" className="block text-sm font-medium text-gray-600">
            Introducer Name
          </label>
          <input
            type="text"
            id="introducerName"
            className="mt-1 p-2 w-full border rounded-md"
            value={introducerName}
            onChange={(e) => setIntroducerName(e.target.value)}
            
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-600">
            Mobile No*
          </label>
          <input
            type="number"
            id="mobileNo"
            className="mt-1 p-2 w-full border rounded-md"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password*
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

        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-600">
            State*
          </label>
          <input
            type="text"
            id="state"
            className="mt-1 p-2 w-full border rounded-md"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-600">
            Country*
          </label>
          <input
            type="text"
            id="country"
            className="mt-1 p-2 w-full border rounded-md"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        {/* Add similar input fields for other form fields with respective useState and onChange handlers */}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md font-medium hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
