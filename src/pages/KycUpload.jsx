import React from "react";
import { GrDocumentUpload } from "react-icons/gr";

const KYCUpload = () =>{
    return(
        <>
             <div className=" min-h-screen p-8" style={{width:"100%"}}>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <GrDocumentUpload className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">KYC Upload</h1>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">PAN Photo*</label>
              <input type="file" accept=".pdf" id="name" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Upload</button>
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">Aadhar Front Photo*</label>
              <input type="file" accept=".pdf" id="mobile" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Upload</button>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Aadhar Back Photo*</label>
              <input type="file" accept=".pdf" id="email" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Upload</button>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">Bank Photo*</label>
              <input type="file" accept=".pdf" id="email" className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Upload</button>
            </div>
            
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Submit</button>
        </form>
      </div>
    </div>
         </>
    )
}

export default KYCUpload;