import React, {useEffect, useState} from "react";
import { FiUser } from 'react-icons/fi';
import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const LevelView = () =>{
    const [open, setOpen] = useState(false);
    const [business, setBusiness] = useState([])
    const businessLevelComp = []

  const handleOpen = (id) => {
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    let business = JSON.parse(localStorage.getItem("userInfo"))?.user?.business
    const businessList = business.filter((item)=>{
      return item.businessLevel===id
    })
    setBusiness(businessList)

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let businessLength =JSON.parse(localStorage.getItem("userInfo"))?.user?.childUsers.length;
  if(businessLength>4) businessLength=4
  for (let i = 1; i <= businessLength*5 ; i++) {
    let amount = 0;
    let member =0;
    let business = JSON.parse(localStorage.getItem("userInfo"))?.user?.business;
    business.map((item , index)=>{
      if(item?.businessLevel === i){
        amount+=parseFloat(item?.businessMoney);
        member++;}
    })

businessLevelComp.push(
<tr key={i}>
<td className="border px-4 py-2">Level-{i} </td>
<td className="border px-4 py-2">{member}</td>
<td className="border px-4 py-2">{member}</td>
<td className="border px-4 py-2">0</td>
<td className="border px-4 py-2">{amount}</td>
<td className="border px-4 py-2"><button type="submit" onClick={()=>handleOpen(i)} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">View</button></td>

</tr>
)
    
  }


  

    return (
        <>
        <div style={{ marginTop: "45px", marginLeft:"65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FiUser className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">Level View</h1>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Level</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Total Member</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Active Member</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Inactive Member</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Business</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              businessLevelComp
                            }
                        </tbody>
                    </table>
                </div>
                <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md">
        <h2 id="modal-modal-title" className="text-lg font-semibold mb-4">Level 1</h2>
        <TableContainer component={Paper} className="mb-8">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sl. No.</TableCell>
                <TableCell>Member Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Joining Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Business</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                business.map((item , index)=>(
                  <TableRow key={index}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{item.businessId}</TableCell>
                <TableCell>{item.businessName}</TableCell>
                <TableCell>15-11-2022</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>{item.businessMoney}</TableCell>
              </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={handleClose} className="mt-4">Close</Button>
      </div>
    </Modal>
            </div>
        </>
    )
}

export default LevelView;