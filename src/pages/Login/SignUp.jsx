import React, { useEffect, useState } from 'react';
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
  const [userAdhar, setUserAdhar] = useState("");
  const [userDob, setUserDob] = useState("");
  const [bankPan, setBankPan] = useState("");
  const [userId, setUserId] = useState("");
  const [userNo, setUserNo] = useState(0);

  const navigate = useNavigate();

  const handleSignUp = async(e) => {
    e.preventDefault();

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
    userAdhar,
    userDob,
    bankPan,
    userId 
        });
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        navigate('/signin')
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    
  };

  const formatDate = (dateString)=> {
    // Split the input date string by '-'
    const parts = dateString.split('-');

    // Reorder and concatenate the parts to form the desired output
    const formattedDate = parts[0] + parts[1] + parts[2];

    return formattedDate;
}

const handleUserId = (e)=>{
  e.preventDefault();
  setUserDob(e.target.value)
  setUserId(('new'+formatDate(e.target.value) + userNo).toString())
}

const handleSignIn = async(e) => {
  
  try {
      const response = await axios.get(`${backend}/user/` 
  );
      console.log(response.data);
      setUserNo(response.data.length)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

};

useEffect(() => {
  handleSignIn()
}, [])


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
          <label htmlFor="userId" className="block text-sm font-medium text-gray-600">
            User Id*
          </label>
          <input
            type="text"
            id="userId"
            className="mt-1 p-2 w-full border rounded-md"
            value={userId}
            disabled
            // onChange={(e) => setMobileNo(e.target.value)}
            required
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
          <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
            Dob*
          </label>
          <input
            type="date"
            id="dob"
            className="mt-1 p-2 w-full border rounded-md"
            value={userDob}
            onChange={(e) => handleUserId(e)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userAdhar" className="block text-sm font-medium text-gray-600">
            Aadhar no*
          </label>
          <input
            type="text"
            id="userAdhar"
            className="mt-1 p-2 w-full border rounded-md"
            value={userAdhar}
            onChange={(e) => setUserAdhar(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bankPan" className="block text-sm font-medium text-gray-600">
            Pan No*
          </label>
          <input
            type="text"
            id="bankPan"
            className="mt-1 p-2 w-full border rounded-md"
            value={bankPan}
            onChange={(e) => setBankPan(e.target.value)}
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
        <div className=' text-black w-full flex justify-center items-center mt-4 cursor-pointer' onClick={()=>navigate('/signin')}>
            Already Registered ? Go For Sign In 
        </div>
      </form>

    </div>
  );
};

export default SignUp;
