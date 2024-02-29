import React from "react";
import { FaDollarSign } from "react-icons/fa";


const WithdrawRequest = () =>{
    return (
        <>
        {/* <div className="bg-gray-300 min-h-screen flex justify-center items-center w-full"> */}
        <div className=" min-h-screen p-8" style={{width:"100%"}}>
      {/* <div className="bg-white p-8 rounded-lg shadow-lg"> */}
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
      <div className="flex items-center mb-4">
          <FaDollarSign className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">Withdraw Request</h1>
        </div>
        <div className="flex">
          <div className="flex-1 bg-green-300 hover:bg-green-700 p-4 rounded-lg mr-2">
            <p>WORK BALANCE: 1.18567</p>
          </div>
          <div className="flex-1 bg-green-300 hover:bg-green-700 p-4 rounded-lg ml-2">
            <p>PROFIT SHARE BALANCE: 2.9777756</p>
          </div>
        </div>
        <div className="bg-sky-200 p-4 mt-4 rounded-lg">
          <p>NOTE: For Profit Share withdraw the minimum amount is 10 NEWINS.</p>
        </div>
        <div className="bg-yellow-200 p-4 mt-4 rounded-lg">
          <p>Each 6, 7, 8 day of every month will open.</p>
        </div>
      </div>
    </div>
        </>
    )
}

export default WithdrawRequest;