import React, { useCallback, useEffect, useRef, useState } from "react";
import backend from "../backend";
import axios from 'axios'
const AdminDashboard = () => {

    const [userList, setUserList] = useState([])
    const [userInput, setUserInput] = useState("")
    const [first, setFirst] = useState(false)
    const [userInputs, setUserInputs] = useState({});

    const fetchUsers = useCallback(
      async () => {
        try {
          const response = await axios.get(`${backend}/userlist`);
          setUserList(response.data); // Set fetched users to state
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      []
    )

    const check = useRef(true)

    useEffect(() => {        
      
          // Call the fetchUsers function
          if(check.current){
          fetchUsers()
        check.current=false
        }
          
    }, [first , fetchUsers])
    
    const handleSubmit = async (email , introducerCode)=>{
        try {
            const response = await axios.post(`${backend}/userlist` , {
                userId : userInputs[email] , userEmail : email , introducerCode : introducerCode
            });
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            setFirst(!first)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }


    const handleInputChange = (userEmail, value) => {
      setUserInputs(prevInputs => ({
        ...prevInputs,
        [userEmail]: value
      }));
      console.log('====================================');
      console.log(userInputs);
      console.log('====================================');
    };

  return (
    <>
      <div className=" w-full">
      <table className=" border-collapse w-full ">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Introducer Code</th>
          <th>id</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            userList?.map((item , index)=>(
                <tr key={item?.userEmail}>
            <td>{item?.userName}</td>
            <td>{item?.userEmail}</td>
            <td>{item?.introducerCode ? item?.introducerCode : "No Code"}</td>
            <td>
              <input key={item?.userEmail} type="text" 
              value={userInputs[item?.userEmail] || ''}
              onChange={(e) => handleInputChange(item?.userEmail, e.target.value)}/>
            </td>
            <td className=" flex gap-3">
              <button className=" bg-green-500 p-2 rounded-lg  font-bold" onClick={()=>handleSubmit(item?.userEmail , item?.introducerCode)} >Accept</button>
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
