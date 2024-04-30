import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import backend from "../backend";

const MyPassword = () => {
  const [userPassword, setUserPassword] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newReUserPassword, setnewReUserPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUserPassword !== newReUserPassword)
      return alert("Match the new passwords");
    try {
      const response = await axios.put(
        `${backend}/user/password/${
          JSON.parse(localStorage.getItem("userInfo"))?.user?.userId
        }`,
        {
          userPassword,
          newUserPassword,
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        // window.location.reload();
        alert("Bank Updated");
        setUserPassword("")
        setNewUserPassword("")
        setnewReUserPassword("")
      }
    } catch (error) {
      alert("Error Occured");
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <div className=" min-h-screen p-8" style={{ width: "100%" }}>
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <div className="flex items-center mb-4">
            <RiLockPasswordLine className="text-2xl mr-2" />
            <h1 className="text-xl font-bold">My Password</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">
                  Current Password*
                </label>
                <input
                  
                  id="name"
                  value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block font-semibold">
                  New Password*
                </label>
                <input
                  
                  id="mobile"
                  value={newUserPassword}
                onChange={(e) => {
                  setNewUserPassword(e.target.value);
                }}
                  className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold">
                  Confirm Password*
                </label>
                <input
                  
                  id="email"
                  value={newReUserPassword}
                onChange={(e) => {
                  setnewReUserPassword(e.target.value);
                }}
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

export default MyPassword;
