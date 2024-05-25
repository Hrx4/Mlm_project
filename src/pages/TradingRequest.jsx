import { CircularProgress } from "@mui/material";
import React, { useRef, useState } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { ToastContainer } from "react-toastify";
import backend from "../backend";
import axios from "axios";

const TradingRequest = () => {
  const [paymentPhoto, setPaymentPhoto] = useState("");
  const [tradingId, setTradingId] = useState("");
  const [amount, setAmount] = useState(0);

  const [loading, setLoading] = useState(false);

  const ref3 = useRef();

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
          setPaymentPhoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };


  const handleCreate = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(`${backend}/trading/`, {
        userId : JSON.parse(localStorage.getItem("userInfo"))?.user?.userId,
        tradingAmount :amount , tradingPhoto : paymentPhoto, tradingId : tradingId
      });
      console.log(response.data);
      setAmount(0)
      ref3.current.value = "";
      setTradingId('')
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



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
            <h1 className="text-xl font-bold">Trading Request</h1>
          </div>
          <form
            onSubmit={handleCreate}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">
                  Trading ID*
                </label>
                <input
                  type="text"
                  id="tradingid"
                  required
                  value={tradingId}
                  onChange={(e) => {
                    setTradingId(e.target.value);
                    console.log(e.target.value);
                  }}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">
                  Amount*
                </label>
                <input
                  type="number"
                  id="amount"
                  required
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    console.log(e.target.value);
                  }}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold">
                  Payment Photo*
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

export default TradingRequest;
