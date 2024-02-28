import React, {useState} from "react";
import { FaFileAlt } from "react-icons/fa";
import { Modal, Paper, Typography, Button } from '@mui/material';
import { Padding } from "@mui/icons-material";

const INRDeposit = () =>{
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [showFundRequest, setShowFundRequest] = useState(false);

  const handleNewRequestClick = () => {
    setShowFundRequest(true);
  };

  const handleViewFundRequestClick = () => {
    setShowFundRequest(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto my-5">
      {showFundRequest ? (
        <div style={{ marginTop: "45px", marginLeft:"65px" }} className="directmember">
            <div className="flex items-center mb-4">
                    <FaFileAlt className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">INR Deposit</h1>
                </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleViewFundRequestClick}
          >
            View Fund Requests
          </button>
          <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">Amount (INR)*</label>
              <input type="text" id="name" className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 " required style={{width:"75%", height:"45px"}}/>
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">Payment Mode *</label>
              <input type="text"id="mobile" className=" rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required style={{width:"75%", height:"45px"}}/>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Submit</button>
        </form>
        </div>
      ) : (
        <div>
            <div style={{ marginTop: "45px", marginLeft:"65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FaFileAlt className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">INR Deposit</h1>
                </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleNewRequestClick}
          >
            New Request
          </button>
          {/* Table for displaying requests goes here */}
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>SL.</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Amount</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Date</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Payment Details</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">1.</td>
                                <td className="border px-4 py-2">129.870130</td>
                                <td className="border px-4 py-2">30-10-2022</td>
                                <td className="border px-4 py-2"><Button onClick={handleOpen}>View Details</Button></td>
                                <td className="border px-4 py-2">Accepted on 30-10-2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <Modal open={open} onClose={handleClose}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <Typography variant="h6" gutterBottom>
            Transaction Details
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-r-1 pr-4">
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Transaction Id
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Name
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Which Bank
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                IFSC
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Email Id
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Mobile
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Date
              </Typography>
            </div>
            <div className="pl-4">
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                1234567890
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Pamela
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                ICICI Bank
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                ICICI123467
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                Null
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                1234567890
              </Typography>
              <Typography variant="subtitle1" gutterBottom className="border-b-1 px-2 py-1">
                30-10-2022
              </Typography>
            </div>
          </div>
          
            <Typography >
              Screenshot
            </Typography>
        
          <Button onClick={handleClose} className="mt-4" style={{marginTop:"8px"}} variant="contained" color="primary">Close</Button>
        </div>
      </div>
    </Modal>
            </div>
        </div>
      )}
    </div>
  );
    
}

export default INRDeposit;