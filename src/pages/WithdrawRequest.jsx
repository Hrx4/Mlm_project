import React, { useCallback, useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import axios from "axios";
import backend from "../backend";

const WithdrawRequest = () =>{

  const [userInfo, setuserInfo] = useState({});
  const [show, setShow] = useState(true)
  const [amount, setAmount] = useState(0)

  const handleCreate = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(`${backend}/withdraw/`, {
        userId : JSON.parse(localStorage.getItem("userInfo"))?.user?.userId,
        amount : amount 
      });
      console.log(response.data);
      setAmount(0)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/user/detail`, {
        userId: JSON.parse(localStorage.getItem("userInfo"))?.user?.userId,
      });
      console.log(response.data);
      setuserInfo(response.data[0]);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  , []);


  useEffect(() => {
    fetching()    
    const date = new Date();
    if(date.getDate()===9 || date.getDate()===17) setShow(false)
    
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
          <input type="Number" placeholder="Enter Amount"  className="p-4 mt-4 rounded-lg border" value={amount} onChange={(e)=>setAmount(e.target.value)} disabled={show} />
          <button className="bg-sky-200 p-4 mt-4 rounded-lg" disabled={show} onClick={handleCreate}>
            Submit
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default WithdrawRequest;