import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Box, CircularProgress, Modal } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import backend from "../backend";
const RefundList = ({ role }) => {
  const [userList, setUserList] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState("");
  const [check, setCheck] = useState(true)

  const uploadFiles = async (e) => {
    const { files, id } = e.target;
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
          // if (id === "pan") setKycPan(data.url);
          setUserInputs((prevInputs) => ({
            ...prevInputs,
            [id]: data.url,
          }));
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${backend}/refund/`);
      if (role === "all") setUserList(response.data);
      // Set fetched users to state
      else
        setUserList(
          response.data.filter((item) => item.tradingId === JSON.parse(localStorage.getItem("userInfo"))?.user?.tradingId)
        ); // Set fetched users to state

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);
  const handleSubmit = async (rowId) => {
    // e.preventDefault();

    try {
      const response = await axios.put(`${backend}/refund/accept`, {
        rowId,
        refundPic: userInputs[rowId],
      });
      console.log(response.data);
      if (response.status === 200) {
        // window.location.reload();
        setUserInputs((prevInputs) => ({
          ...prevInputs,
          [rowId]: "",
        }));
        alert("Refund Updated");
setCheck(!check)      }
    } catch (error) {
      alert("Error Occured");
      console.error("Error fetching data:", error.message);
    }
  };

  const handleAdminSubmit = async (rowId , tradingId , tradingAmount) => {
    // e.preventDefault();

    try {
      const response = await axios.put(`${backend}/refund/adminaccept`, {
        rowId , tradingId , tradingAmount 
      });
      console.log(response.data);
      if (response.status === 200) {
        // window.location.reload();
        setUserInputs((prevInputs) => ({
          ...prevInputs,
          [rowId]: "",
        }));
        alert("Refund Updated");
setCheck(!check)      }
    } catch (error) {
      alert("Error Occured");
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    // Call the fetchUsers function
    fetchUsers();
  }, [fetchUsers , check]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />
      <div className=" w-full">
        <table className=" border-collapse w-dvw-[98%] overflow-x-scroll ">
          <thead>
            <th>Sl No.</th>
            <th>Id</th>
            <th>Main Amount</th>
            <th>Trading Percentage</th>
            <th>Refund Amount</th>
            <th>Refund Month</th>
            <th>Photo</th>
            <th>Action</th>
          </thead>
          <tbody>
            {userList?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.tradingId}</td>
                <td>{item?.tradingAmount}</td>
                <td>{item?.tradingPer}</td>
                <td>{item?.refundAmount}</td>
                <td>{item?.refundMonth}</td>
                {role !== "all" ? (
                  item.refundStatus === "Pending" ? (
                    <td>
                      <input
                        type="file"
                        id={item?._id}
                        onChange={uploadFiles}
                      />
                    </td>
                  ) : (
                    <button
                      className=" bg-blue-500 p-2 rounded-lg font-bold text-white"
                      disabled={item?.refundPic ? false : true}
                      onClick={() => {
                        setOpen(true), setPhoto(item?.refundPic);
                      }}
                    >
                      View
                    </button>
                  )
                ) : item.refundStatus === "Pending" ? (
                  <td></td>
                ) : (
                  <td><button
                    className=" bg-blue-500 p-2 rounded-lg font-bold text-white"
                    disabled={item?.refundPic ? false : true}
                    onClick={() => {
                      setOpen(true), setPhoto(item?.refundPic);
                    }}
                  >
                    View
                  </button></td>
                )}
                {role !== "all" ? (
                  item.refundStatus === "Pending" ? (
                    <td className=" flex gap-3">
                      <button
                        className=" bg-green-500 p-2 rounded-lg  font-bold"
                        onClick={() => handleSubmit(item._id)}
                      >
                        Accept
                      </button>
                    </td>
                  ) : (
                    <>
                      <td>{item?.refundStatus}</td>
                    </>
                  )
                ) : item.refundStatus === "Refunded" ? (
                  <td className=" flex gap-3">
                    <button
                      className=" bg-green-900 p-2 rounded-lg  font-bold"
                      onClick={() => handleAdminSubmit(item._id , item.tradingId , item.tradingAmount)}
                    >
                      Accept
                    </button>
                  </td>
                ) : (
                  <td>{item?.refundStatus}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
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

export default RefundList;
