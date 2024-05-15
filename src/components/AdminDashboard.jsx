import React, { useCallback, useEffect, useRef, useState } from "react";
import backend from "../backend";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const AdminDashboard = ({ role }) => {
  const [userList, setUserList] = useState([]);
  const [first, setFirst] = useState(false);
  const [userInputs, setUserInputs] = useState({});
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${backend}/userlist`);
      if (role === "all")
        setUserList(
          response.data
        ); // Set fetched users to state
      else
        setUserList(
          response.data.filter((item) => item.membershipStatus !== "Accepted")
        ); // Set fetched users to state
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const check = useRef(true);

  useEffect(() => {
    // Call the fetchUsers function
    if (check.current) {
      fetchUsers();
      check.current = false;
    }
  }, [first, fetchUsers]);

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

  const handleSubmit = async (email, introducerCode, fee) => {
    try {
      const response = await axios.post(`${backend}/userlist`, {
        userId: userInputs[email],
        userEmail: email,
        introducerCode: introducerCode,
        membershipFee: parseInt(fee),
      });
      setFirst(!first);
      check.current = true;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (userEmail, value) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [userEmail]: value,
    }));
  };

  return (
    <>
      <div className=" w-full">
        <table className=" border-collapse w-full ">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Introducer Code</th>
            <th>Membership Fee</th>
            <th>id</th>
          </thead>
          <tbody>
            {userList?.map((item, index) => (
              <tr key={item?.userEmail}>
                <td>{item?.userName}</td>
                <td>{item?.userEmail}</td>
                <td>
                  {item?.introducerCode ? item?.introducerCode : "No Code"}
                </td>
                <td>{item?.membershipFee}</td>
                
                {
                  role!=="all" ? (
                    <>
                    <td>
                  <input
                    key={item?.userEmail}
                    type="text"
                    value={userInputs[item?.userEmail] || ""}
                    onChange={(e) =>
                      handleInputChange(item?.userEmail, e.target.value)
                    }
                  />
                </td>
                    <td className=" flex gap-3">
                  <button
                    className=" bg-green-500 p-2 rounded-lg  font-bold"
                    disabled={item?.membershipPhoto ? false : true}
                    onClick={() =>
                      handleSubmit(
                        item?.userEmail,
                        item?.introducerCode,
                        item?.membershipFee
                      )
                    }
                  >
                    Accept
                  </button>
                  <button className=" bg-red-500 p-2 rounded-lg font-bold text-white">
                    decline
                  </button>
                  <button
                    className=" bg-blue-500 p-2 rounded-lg font-bold text-white"
                    disabled={item?.membershipPhoto ? false : true}
                    onClick={() => {
                      setOpen(true), setPhoto(item?.membershipPhoto);
                    }}
                  >
                    View
                  </button>
                </td>
                    </>
                  ) :(
                    <>
                    <td>
                      {item.userId}
                    </td>
                    
                    </>
                  )
                }
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

export default AdminDashboard;
