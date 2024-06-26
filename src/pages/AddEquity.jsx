import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaKey } from "react-icons/fa";
import axios from 'axios'
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import backend from "../backend"

const AddEquity = () => {
  const [membershipFee, setMembershipFee] = useState(0);
  const [membershipPhoto, setMembershipPhoto] = useState("");
  const [userInfo, setUserInfo] = useState({})
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
          setMembershipPhoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleUpload = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(`${backend}/membership/` , {
        membershipFee : membershipFee,
        membershipPhoto : membershipPhoto,
        membershipId : JSON.parse(localStorage.getItem("userInfo")).user.userEmail
      });
      setMembershipFee(0)
ref.current.value=""
setMembershipPhoto("")
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/user/detail`, {
        userEmail: JSON.parse(localStorage.getItem("userInfo"))?.user?.userEmail,
      });
      console.log(response.data);
      setUserInfo(response.data[0]);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  , []);


  useEffect(() => {
    fetching()
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

      <div className=" min-h-screen p-8" style={{ width: "100%" }}>
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-4">
            <FaKey className="text-2xl mr-2" />
            <h1 className="text-xl font-bold">Add Fee</h1>
          </div>
          {
            (userInfo?.membershipStatus === "Null") ? 
            (
              <form onSubmit={handleUpload}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">
                  Fee*
                </label>
                <input
                  type="number"
                  id="name"
                  value={membershipFee}
                  onChange={(e)=>setMembershipFee(e.target.value)}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block font-semibold">
                  Screenshot*
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="photo"
                  ref={ref}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  onChange={uploadFiles}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </form>
            ):
            (
              <table>
              <thead>
                <th>MembershipFee</th>
                <th>MembershipPhoto</th>
                <th>MembershipStatus</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{userInfo?.membershipFee}</td>
                    <td><img src={userInfo?.membershipPhoto} alt="" className=" h-60" /></td>
                    <td>{userInfo?.membershipStatus}</td>

                  </tr>
                </tbody>
                
              </table>
            )
          }
        </div>
      </div>
    </>
  );
};

export default AddEquity;
