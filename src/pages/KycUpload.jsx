import React, { useCallback, useEffect, useRef, useState } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import axios from "axios";
import backend from "../backend";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
const KYCUpload = () => {
  const [kycPan, setKycPan] = useState("");
  const [kycAdharFront, setKycAdharFront] = useState("");
  const [kycAdharBack, setKycAdharBack] = useState("");
  const [kycBank, setKycBank] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${backend}/user/kyc/${
          JSON.parse(localStorage.getItem("userInfo"))?.user?.userId
        }`,
        {
          kycPan,
          kycAdharFront,
          kycAdharBack,
          kycBank,
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        // window.location.reload();
        alert("kyc Updated");
        
      ref.current.value = "";
      ref1.current.value = "";
      ref2.current.value = "";
      ref3.current.value = "";
      }
    } catch (error) {
      alert("Error Occured");
      console.error("Error fetching data:", error);
    }
  };

  const uploadFiles = async (e) => {
    const { files, id } = e.target;
    console.log(id);
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
          if (id === "pan") setKycPan(data.url);
        if (id === "adharf") setKycAdharFront(data.url);
        if (id === "adharb") setKycAdharBack(data.url);
        if (id === "bank") setKycBank(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/user/detail`, {
        userEmail: JSON.parse(localStorage.getItem("userInfo"))?.user
          ?.userEmail,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetching();
  }, []);

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
            <GrDocumentUpload className="text-2xl mr-2" />
            <h1 className="text-xl font-bold">KYC Upload</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">
                  PAN Photo*
                </label>
                <input
                  ref={ref}
                  type="file"
                  accept="image/*"
                  onChange={uploadFiles}
                  id="pan"
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block font-semibold">
                  Aadhar Front Photo*
                </label>
                <input
                  ref={ref1}
                  type="file"
                  accept="image/*"
                  onChange={uploadFiles}
                  on
                  id="adharf"
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
                />
              
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold">
                  Aadhar Back Photo*
                </label>
                <input
                  ref={ref2}
                  type="file"
                  accept="image/*"
                  onChange={uploadFiles}
                  id="adharb"
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold">
                  Bank Photo*
                </label>
                <input
                  ref={ref3}
                  type="file"
                  accept="image/*"
                  onChange={uploadFiles}
                  id="bank"
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
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
        </div>
      </div>
    </>
  );
};

export default KYCUpload;
