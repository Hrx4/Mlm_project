import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import backend from "../backend";
import  axios from "axios";

const AddMember = () => {
  const [introducerCode, setIntroducerCode] = useState("");
  const [introducerName, setIntroducerName] = useState("");
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userState, setUserState] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(`${backend}/user` , {
        introducerCode : introducerCode,
  introducerName : introducerName,
  userName : userName,
  userMobile : userMobile,
  userEmail : userEmail,
  userCountry : userCountry,
  userState : userState,
  userPassword : userPassword,
      });
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
   

  return (
    <div className=" min-h-screen p-8" style={{ width: "100%" }}>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <FaRocket className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">Add New Member</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Introducer Code
              </label>
              <input
                type="text"
                id="name"
                value={introducerCode}
                onChange={(e)=>setIntroducerCode(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">
                Introducer Name
              </label>
              <input
                type="text"
                id="mobile"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                value={introducerName}
                onChange={(e)=>setIntroducerName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">
                Name*
              </label>
              <input
                type="name"
                id="name"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fatherName" className="block font-semibold">
                Mobile No.*
              </label>
              <input
                type="text"
                id="fatherName"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
                value={userMobile}
                onChange={(e)=>setUserMobile(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-semibold">
                Email ID.*
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
                value={userEmail}
                onChange={(e)=>setUserEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold">
                Password*
              </label>
              <input
                type="text"
                id="password"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
                value={userPassword}
                onChange={(e)=>setUserPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-semibold">
                Country*
              </label>
              <input
                type="text"
                id="country"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
                value={userCountry}
                onChange={(e)=>setUserCountry(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block font-semibold">
                State*
              </label>
              <input
                type="text"
                id="state"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
                value={userState}
                onChange={(e)=>setUserState(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
