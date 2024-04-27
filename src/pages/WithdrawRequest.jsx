import React, { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";


const WithdrawRequest = () =>{

  const [userInfo, setuserInfo] = useState({});
  const [show, setShow] = useState(true)

  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem("userInfo"))?.user);
    const date = new Date();
    if(date.getDate()===5 || date.getDate()===17) setShow(false)
    
  }, []);

    return (
        <>
        {/* <div className="bg-gray-300 min-h-screen flex justify-center items-center w-full"> */}
        <div className=" min-h-screen p-8" style={{width:"100%"}}>
      {/* <div className="bg-white p-8 rounded-lg shadow-lg"> */}
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
      <div className="flex items-center mb-4">
          <h1 className="text-xl font-bold">₹ Withdraw Request</h1>
        </div>
        <div className="flex">
          <div className="flex-1 bg-green-300 hover:bg-green-700 p-4 rounded-lg mr-2">
            <p>Total BALANCE: {userInfo?.totalIncome} </p>
          </div>
          
        </div>
        <div className="bg-sky-200 p-4 mt-4 rounded-lg">
          <p>NOTE: For total balance withdraw the minimum amount is ₹500 </p>
        </div>
        <div className="bg-yellow-200 p-4 mt-4 rounded-lg">
          <p>Each 5 , 17 day of every month will open.</p>
        </div>

        <div className=" w-full flex justify-between">
          <input type="Number" placeholder="Enter Amount" className="p-4 mt-4 rounded-lg" disabled={show} />
          <button className="bg-sky-200 p-4 mt-4 rounded-lg" disabled={show} >
            Submit
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default WithdrawRequest;