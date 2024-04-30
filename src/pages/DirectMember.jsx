import React, { useCallback, useEffect, useState } from "react";
import { FiUser } from 'react-icons/fi';
import backend from "../backend";
import axios from "axios";


const DirectMember = () => {
    const [userInfo, setUserInfo] = useState([])

    const fetching = useCallback(async () => {
        try {
          const response = await axios.post(`${backend}/user/alldetail`, {
            userList: JSON.parse(localStorage.getItem("userInfo"))?.user?.childUsers,
          });
          console.log(response.data);
          setUserInfo(response.data);
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      , []);
    
    
      useEffect(() => {
        fetching()
      }, [])

    return (
        <>

            <div style={{ marginTop: "45px", marginLeft:"65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FiUser className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">List Of Direct Members</h1>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>SL.</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Member Code</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Name</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Mobile</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Email</th>

                                {/* <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Joining Date</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Package</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Business</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {
                            userInfo?.map((item , index)=>(
                                <tr>
                                <td className="border px-4 py-2">{index+1}</td>
                                <td className="border px-4 py-2">{item.userId}</td>
                                <td className="border px-4 py-2">{item.userName}</td>
                                <td className="border px-4 py-2">{item.userMobile}</td>
                                <td className="border px-4 py-2">{item.userEmail}</td>
                                {/* <td className="border px-4 py-2">15-11-2022</td>
                                <td className="border px-4 py-2">3456</td>
                                <td className="border px-4 py-2">0.00</td> */}

                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DirectMember;