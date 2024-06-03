import axios from "axios";
import React, { useEffect, useState } from "react";
import backend from "../backend";
const CustomerList = ({role}) => {
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.post(`${backend}/user/customerlist/`, {
        userId: userId,
      });
      setUserList(response.data?.customerList); // Set fetched users to state

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if(role!=='admin')setUserList(
      JSON.parse(localStorage.getItem("userInfo"))?.user?.customerList
    );
  }, []);

  return (
    <>
      <div className=" w-2/3 mx-auto mt-2">
        {(role==='admin')? (<div>
        <input type="text" placeholder="Enter Customer Id" value={userId} onChange={(e)=>setUserId(e.target.value)} className=" border border-black rounded-md" />
        <button className=" bg-blue-300 p-2 rounded-md ml-5" onClick={fetchUsers}> Submit</button>
        </div>) : null}
        <div className=" w-full mt-5">
          <table className=" border-collapse w-full ">
            <thead>
              <th>Sl No.</th>
              <th>Customer Id</th>
              <th>Amount</th>
            </thead>
            <tbody>
              {userList?.map((item, index) => (
                <tr key={item?.userId}>
                  <td>{index + 1}</td>
                  <td>{item?.userId}</td>
                  <td>{item?.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
