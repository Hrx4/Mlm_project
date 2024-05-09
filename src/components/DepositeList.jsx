import React, { useCallback, useEffect, useRef, useState } from "react";
import backend from "../backend";
import axios from 'axios'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const DepositeList = ({role}) => {

    const [userList, setUserList] = useState([])
    const [first, setFirst] = useState(false)
    const [userInputs, setUserInputs] = useState({});
    const [open, setOpen] = useState(false)
    const [photo, setPhoto] = useState("")

    const fetchUsers = useCallback(
      async () => {
        try {
          const response = await axios.get(`${backend}/deposite/`);
          if(role==="all")
          setUserList( response.data.filter((item)=>item.depositeStatus==="Accept") ); // Set fetched users to state
          else 
          setUserList( response.data.data.filter((item)=>item.depositeStatus!=="Accept") ); // Set fetched users to state

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

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    
    
    const handleSubmit = async (item)=>{
        try {
            const response = await axios.post(`${backend}/deposite/accept/` , {
                depositeAmount : parseInt(item?.depositeAmount),
    userEmail : item?.userEmail,
    introducerCode : item?.introducerCode,
    userId : item?.userId,
    acceptId : item?._id
            });
            setFirst(!first)
            check.current=true

          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }


    const handleInputChange = (userEmail, value) => {
      setUserInputs(prevInputs => ({
        ...prevInputs,
        [userEmail]: value
      }));
    };

  return (
    <>
      <div className=" w-full">
      <table className=" border-collapse w-full ">
        <thead>
          <th>Sl No.</th>          
          <th>Id</th>
          <th>Amount</th>
          <th>Deposite Mode</th>
          <th>Email</th>
          <th>Date</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            userList?.map((item , index)=>(
                <tr key={item?.userEmail}>
            <td>{index+1}</td>
            <td>{item?.userId}</td>
            <td>{item?.depositeAmount}</td>
            <td>{item?.depositeMode}</td>
            <td>{item?.userEmail}</td>
            <td>{item?.depositeDate}</td>
            {
              (role!=="all")?
              (
                <td className=" flex gap-3">
              <button className=" bg-green-500 p-2 rounded-lg  font-bold" disabled={item?.depositePhoto?false : true} onClick={()=>handleSubmit(item)} >Accept</button>
              {/* <button className=" bg-red-500 p-2 rounded-lg font-bold text-white">decline</button> */}
              <button className=" bg-blue-500 p-2 rounded-lg font-bold text-white" disabled={item?.depositePhoto?false : true} onClick={()=>{setOpen(true) , setPhoto(item?.depositePhoto)}
              }>View</button>

            </td>
              )
              :
              (
                <td>
                  Accepted
                </td>
              )
            }
          </tr>
            ))
          }
          
        </tbody>
      </table>
      </div>

      <Modal
      open={open}
      onClose={()=>setOpen(false)}
      aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
          <div className=" w-1/2 h-1/2">
          <img src={photo} alt="pic" />
          </div>
        </Box>
      </Modal>

    </>
  );
};

export default DepositeList;
