import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";

const MemberList = () => {

  const [memberCode, setMemberCode] = useState("")
  const [showMember, setShowMember] = useState([])

  const handleMember =(e)=>{
    e.preventDefault()

    const memberList = JSON.parse(localStorage.getItem("userInfo"))?.user?.business;

    const member = memberList.find((item)=> {return item.businessId === memberCode})

    if(member) setShowMember([member])
    else{
  alert('Wrong Member Code')}

  }

  return (
    <>
      <div className=" min-h-screen p-8" style={{ width: "100%" }}>
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-4">
            <FaRocket className="text-2xl mr-2" />
            <h1 className="text-xl font-bold">List Of Members</h1>
          </div>
          <form onSubmit={handleMember}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="mb-4">
                <label htmlFor="mobile" className="block font-semibold">
                  Member Code
                </label>
                <input
                  type="text"
                  id="mobile"
                  value={memberCode}
                  onChange={(e)=>setMemberCode(e.target.value)}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
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
        <div style={{ marginTop: "45px" }}>
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
            <table className="table-auto w-75% justify-">
              <thead>
                <tr>
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    SL.
                  </th>
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Member Code
                  </th>
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Name
                  </th>
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Business
                  </th>
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  showMember?.map((item , index)=>(
                    <tr key={item.businessId}>
                  <td className="border px-4 py-2">{index+1}</td>
                  <td className="border px-4 py-2">{item.businessId}</td>
                  <td className="border px-4 py-2">{item.businessName}</td>
                  <td className="border px-4 py-2">{item.businessMoney}</td>
                  <td className="border px-4 py-2">{item.businessLevel}</td>
                </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberList;
