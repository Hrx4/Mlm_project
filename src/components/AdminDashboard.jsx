import React, { useEffect, useState } from "react";
import backend from "../backend";
import axios from 'axios'
const AdminDashboard = () => {

    const [userList, setUserList] = useState([])
    const [userInput, setUserInput] = useState("")
    const [first, setFirst] = useState(false)

    useEffect(() => {
      
        const fetchUsers = async () => {
            try {
              const response = await axios.get(`${backend}/userlist`);
              setUserList(response.data); // Set fetched users to state
              console.log(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          // Call the fetchUsers function
          fetchUsers();
         
    }, [first])
    
    const handleSubmit = async (id)=>{
        try {
            const response = await axios.post(`${backend}/userlist` , {
                userId : id , userCodeId : userInput
            });
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            setFirst(!first)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

  return (
    <>
      <div className=" w-full">
      <table className=" border-collapse w-full ">
        <thead>
          <th>Name</th>
          <th>id</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            userList?.map((item , index)=>(
                <tr key={item?.userId}>
            <td>{item?.userName}</td>
            <td>
              <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
            </td>
            <td className=" flex gap-3">
              <button className=" bg-green-500 p-2 rounded-lg  font-bold" onClick={()=>handleSubmit(item?.userId)} >Accept</button>
              <button className=" bg-red-500 p-2 rounded-lg font-bold text-white">decline</button>
            </td>
          </tr>
            ))
          }
          
        </tbody>
      </table>
      </div>
    </>
  );
};

export default AdminDashboard;
