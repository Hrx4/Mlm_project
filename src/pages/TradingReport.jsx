import React, { useCallback, useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import axios from "axios";
import backend from "../backend";

const TradingReport = ({role}) => {


    const [userList, setUserList] = useState([])
    const [toggle, setToggle] = useState(false)
    const fetching = useCallback(async () => {
        try {
          const response = await axios.get(`${backend}/trading/`, {
            // userEmail: JSON.parse(localStorage.getItem("userInfo"))?.user?.userEmail,
          });
          console.log(response.data);
          if(role==="adminReq") setUserList(response.data.filter((item)=>item.tradingStatus==="Pending"))
            else if(role==="adminAll") setUserList(response.data.filter((item)=>item.tradingStatus==="Accepted"))
          else setUserList(response.data.filter((item)=>item.userId===JSON.parse(localStorage.getItem("userInfo"))?.user?.userId))
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      , []);

      const handleAccept = async(id , tradid , tradAmount)=>{
    try {
      const response = await axios.put(
        `${backend}/trading/accept/`,
        {
            rowId : id,
            tradId : tradid,
            tradAmount : tradAmount
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        // window.location.reload();
        setToggle(!toggle)
        alert("Trading accepted")

      }
    } catch (error) {
      alert("Error Occured")
      console.error("Error fetching data:", error);
    }
      }

      useEffect(() => {
        fetching()    
        
      }, [toggle]);


    return (
        <>
            <div style={{ marginTop: "45px", marginLeft: "65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FaFileAlt className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">Trading Report</h1>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% ">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>SL.</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Trading Id</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Amount</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Request on</th>

                                {/* <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Status</th> */}
                                {
                                    role==='adminReq' ? (
                                        <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Action</th>
                                    ):
                                    (
                                        <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Status</th>
                                    )
                                }
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList?.map((item , index)=>(
                                    <tr>
                                <td className="border px-4 py-2">{index+1}</td>
                                <td className="border px-4 py-2"> {item?.tradingId}</td>
                                <td className="border px-4 py-2">{item?.tradingAmount} </td>
                                <td className="border px-4 py-2">{new Date(item.createdAt).toISOString().split('T')[0]}</td>
                                {
                                    role!=='adminReq' ? (
                                        <td className="border px-4 py-2"> {item.tradingStatus} </td>
                                    ):
                                    (
                                        <td className="border px-4 py-2"> <button className=" p-2 bg-blue-400 rounded-xl" onClick={()=>handleAccept(item._id , item.tradingId ,item?.tradingAmount )} >Accept</button> </td>
                                    )
                                }

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

export default TradingReport;