import React from 'react';
import { FiUser } from 'react-icons/fi';

const MyProfile = () => {
  return (
    <div className=" min-h-screen p-8" style={{width:"100%"}}>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <FiUser className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">My Profile</h1>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">Name*</label>
              <input type="text" id="name" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">Mobile*</label>
              <input type="text" id="mobile" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Email ID*</label>
              <input type="email" id="email" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="fatherName" className="block font-semibold">Father/Guardian Name*</label>
              <input type="text" id="fatherName" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-semibold">Date of Birth*</label>
              <input type="date" id="dob" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="aadhar" className="block font-semibold">Aadhar*</label>
              <input type="text" id="aadhar" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-semibold">Gender*</label>
              <select id="gender" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block font-semibold">Country*</label>
              <input type="text" id="country" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block font-semibold">State*</label>
              <input type="text" id="state" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="nomineeName" className="block font-semibold">Nominee Name*</label>
              <input type="text" id="nomineeName" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="nomineeRelation" className="block font-semibold">Nominee Relation*</label>
              <input type="text" id="nomineeRelation" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
