import React from "react";
import { FaRocket } from "react-icons/fa";

const MemberList = () =>{
    return (
        <>
         <div className=" min-h-screen p-8" style={{width:"100%"}}>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <FaRocket className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">List Of Members</h1>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
            <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600"
          name="memberOption"
          value="memberCode"
        />
        <span className="ml-2">Member Code</span>
      </label>
            </div>
            <div className="mb-4">
            <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600"
          name="memberOption"
          value="memberCode"
        />
        <span className="ml-2">Member Name</span>
      </label>
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">Member Code/Name</label>
              <input type="text" id="mobile" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Joining Date</label>
              <input type="date" id="email" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 mt-5" required />
              <input type="date" id="email" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 mt-5" required />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Submit</button>
        </form>
      </div>
      <div style={{marginTop:"45px"}}>
      <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
      <table className="table-auto w-75% justify-">
        <thead>
          <tr>
            <th className="px-4 py-2" style={{color:"white", backgroundColor:"black"}}>SL.</th>
            <th className="px-4 py-2" style={{color:"white", backgroundColor:"black"}}>Member Code</th>
            <th className="px-4 py-2" style={{color:"white", backgroundColor:"black"}}>Name</th>
            <th className="px-4 py-2" style={{color:"white", backgroundColor:"black"}}>Joining Date</th>
            <th className="px-4 py-2" style={{color:"white", backgroundColor:"black"}}>Activation Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1.</td>
            <td className="border px-4 py-2">SDFX832154</td>
            <td className="border px-4 py-2">TOFIZUDDIN MALLICK</td>
            <td className="border px-4 py-2">15-11-2022</td>
            <td className="border px-4 py-2">15-11-2022</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    
        </>
    )
}

export default MemberList;