import React, {useCallback, useEffect, useRef, useState} from "react";
import { FaFileAlt } from "react-icons/fa";
import { Modal, Paper, Typography, Button } from '@mui/material';
import axios from "axios";
import backend from "../backend";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const INRDeposit = () =>{
    const [open, setOpen] = useState(false);
    const [depositeList, setDepositeList] = useState([]);
    const [depositeFee, setDepositeFee] = useState(0);
    const [depositePhoto, setDepositePhoto] = useState("");
    const [depositeMode, setDepositeMode] = useState("");
    const [depositeId, setDepositeId] = useState("");

    const [loading, setLoading] = useState(false);
    const ref = useRef()
  
    const uploadFiles = async (e) => {
      const { files } = e.target;
      console.log(e);
      setLoading(true);
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "solardealership");
      data.append("cloud_name", "dkm3nxmk5");
      await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (
            files[0].type === "image/jpeg" ||
            files[0].type === "image/jpg" ||
            files[0].type === "image/png"
          )
            setDepositePhoto(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
  
    const handleUpload = async(e)=>{
      e.preventDefault()
      try {
        const response = await axios.post(`${backend}/deposite/` , {
          depositeAmount : parseInt(depositeFee),
    depositePhoto : depositePhoto,
    depositeMode : depositeMode,
    depositeId : depositeId,  
    userEmail :JSON.parse(localStorage.getItem("userInfo")).user.userEmail,
    introducerCode : JSON.parse(localStorage.getItem("userInfo")).user.introducerCode,
    userId :JSON.parse(localStorage.getItem("userInfo")).user.userId,
    customer : JSON.parse(localStorage.getItem("userInfo")).user.customer
        });
        setDepositeFee(0)
        setDepositeMode("")
        setDepositeId("")
  ref.current.value=""
  setDepositePhoto("")
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      } catch (error) {
       if(error.response.status ===400) alert(error.response.data.message)
        else alert("Error occured")
        console.error('Error fetching data:', error);
      }
    }
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

  const fetchUsers = useCallback(
    async () => {
      try {
        const response = await axios.post(`${backend}/deposite/user/${JSON.parse(localStorage.getItem("userInfo")).user.userEmail}`);
        setDepositeList(response.data); // Set fetched users to state
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    []
  )

  useEffect(() => {
    fetchUsers()
  }, [])
  


  return (

    <>
    {loading ? (

      <div className="loader" style={{ color: "black" }}>
    Please Wait Your File is Uploading......
    <CircularProgress />
  </div>
) : null}
<ToastContainer />
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
          <form onSubmit={handleUpload}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="fee" className="block font-semibold">Amount (INR)*</label>
              <input type="number" value={depositeFee}
              onChange={(e)=>setDepositeFee(e.target.value)}
               id="fee" className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 " required style={{width:"75%", height:"45px"}}/>
            </div>
            <div className="mb-4">
              <label htmlFor="mode" className="block font-semibold">Payment Mode *</label>
              <input type="text"id="mode"
              value={depositeMode}
              onChange={(e)=>setDepositeMode(e.target.value)}
               className=" rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required style={{width:"75%", height:"45px"}}/>
            </div>

          <div className="mb-4">
              <label htmlFor="mode" className="block font-semibold">Deposite Id *</label>
              <input type="text"id="mode"
              value={depositeId}
              onChange={(e)=>setDepositeId(e.target.value)}
               className=" rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required style={{width:"75%", height:"45px"}}/>
            </div>

            <div className="mb-4">
              <label htmlFor="photo" className="block font-semibold">Payment Photo *</label>
              <input type="file" accept="image/*"
                  id="photo"
                  ref={ref}
                  onChange={uploadFiles}
               className=" rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500" required style={{width:"75%", height:"45px"}}/>
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
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Deposite Id</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Date</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Payment Details</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          depositeList?.map((item , index)=>(
                            <tr key={item._id}>
                                <td className="border px-4 py-2">{index+1}</td>
                                <td className="border px-4 py-2"> {item?.depositeAmount} </td>
                                <td className="border px-4 py-2"> {item?.depositeId} </td>
                                <td className="border px-4 py-2"> {item?.depositeDate} </td>
                                <td className="border px-4 py-2"><Button onClick={handleOpen}>View Details</Button></td>
                                <td className="border px-4 py-2"> {item?.depositeStatus} </td>
                            </tr>
                          ))
                        }
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
    </>
  );
    
}

export default INRDeposit;