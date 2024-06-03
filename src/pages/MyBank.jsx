import React, { useCallback, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import backend from "../backend";

const MyBank = () => {
  const [bankIfsc, setBankIfsc] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [rebankAccountNo, setReBankAccountNo] = useState("");
  const [bankHolderName, setBankHolderName] = useState("");
  const [bankAccountType, setBankAccountType] = useState("");
  const [bankPan, setBankPan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (bankAccountNo !== rebankAccountNo) return alert("Account no should be same");
    try {
      const response = await axios.put(
        `${backend}/user/bank/${
          JSON.parse(localStorage.getItem("userInfo"))?.user?.userId
        }`,
        {
          bankIfsc,
          bankName,
          bankBranch,
          bankAccountNo,
          bankHolderName,
          bankAccountType,
          bankPan,
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        // window.location.reload();
        alert("Bank Updated");
      }
    } catch (error) {
      alert("Error Occured");
      console.error("Error fetching data:", error);
    }
  };

  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/user/detail`, {
        userEmail: JSON.parse(localStorage.getItem("userInfo"))?.user
          ?.userEmail,
      });
      console.log(response.data);
      setBankIfsc(response.data[0]?.bankIfsc);
      setBankName(response.data[0]?.bankName);
      setBankBranch(response.data[0]?.bankBranch);
      setBankAccountNo(response.data[0]?.bankAccountNo);
      setBankHolderName(response.data[0]?.bankHolderName);
      setBankAccountType(response.data[0]?.bankAccountType);
      setBankPan(response.data[0]?.bankPan);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className=" min-h-screen p-8" style={{ width: "100%" }}>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <FiUser className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">My Bank</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                IFSC*
              </label>
              <input
                value={bankIfsc}
                onChange={(e) => {
                  setBankIfsc(e.target.value);
                }}
                type="text"
                id="name"
                disabled={bankIfsc}

                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">
                Bank Name*
              </label>
              <input
                value={bankName}
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
                type="text"
                id="mobile"
                disabled={bankName}

                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">
                Branch*
              </label>
              <input
                value={bankBranch}
                onChange={(e) => {
                  setBankBranch(e.target.value);
                  console.log(e.target.value);
                }}
                type="email"
                id="email"
                disabled={bankBranch}

                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fatherName" className="block font-semibold">
                A/C Number*
              </label>
              <input
                value={bankAccountNo}
                onChange={(e) => {
                  setBankAccountNo(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                id="fatherName"
                disabled={bankAccountNo}

                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-semibold">
                Re A/C Number*
              </label>
              <input
                value={rebankAccountNo}
                onChange={(e) => {
                  setReBankAccountNo(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                id="dob"

                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="aadhar" className="block font-semibold">
                A/C Holder Name*
              </label>
              <input
                value={bankHolderName}
                onChange={(e) => {
                  setBankHolderName(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                id="aadhar"
                disabled={bankHolderName}

                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-semibold">
                A/C Type*
              </label>
              <input
                value={bankAccountType}
                onChange={(e) => {
                  setBankAccountType(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                id="aadhar"
                disabled={bankAccountType}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block font-semibold">
                PAN / NID Number*
              </label>
              <input
                value={bankPan}
                onChange={(e) => {
                  setBankPan(e.target.value);
                  console.log(e.target.value);
                }}
                type="text"
                id="country"
                disabled
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
  );
};

export default MyBank;
