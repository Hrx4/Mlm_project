import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import backend from "../backend";
const MyProfile = () => {
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userFather, setUserFather] = useState("");
  const [userDob, setUserDob] = useState("");
  const [userAdhar, setUserAdhar] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userState, setUserState] = useState("");
  const [userNominee, setUserNominee] = useState("");
  const [userNomineeRelation, setUserNomineeRelation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${backend}/user/profile/${
          JSON.parse(localStorage.getItem("userInfo"))?.user?.userId
        }`,
        {
          userName: userName,
          userMobile: userMobile,
          userEmail: userEmail,
          userCountry: userCountry,
          userState: userState,
          userFather: userFather,
          userDob: userDob,
          userAdhar: userAdhar,
          userGender: userGender,
          userNominee: userNominee,
          userNomineeRelation: userNomineeRelation,
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        // window.location.reload();
        alert("Profile Updated")

      }
    } catch (error) {
      alert("Error Occured")
      console.error("Error fetching data:", error);
    }
  };

  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/user/detail`, {
        userEmail: JSON.parse(localStorage.getItem("userInfo"))?.user?.userEmail,
      });
      console.log(response.data);
      setUserName(response.data[0]?.userName);
      setUserMobile(response.data[0]?.userMobile);
      setUserEmail(response.data[0]?.userEmail);
      setUserFather(response.data[0]?.userFather);
      setUserDob(response.data[0]?.userDob);
      setUserAdhar(response.data[0]?.userAdhar);
      setUserGender(response.data[0]?.userGender);
      setUserCountry(response.data[0]?.userCountry);
      setUserState(response.data[0]?.userState);
      setUserNominee(response.data[0]?.userNominee);
      setUserNomineeRelation(response.data[0]?.userNomineeRelation);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  , []);

  useEffect(() => {
    
    fetching()
    
  }, []);

  return (
    <div className=" min-h-screen p-8" style={{ width: "100%" }}>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <FiUser className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">My Profile</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Name*
              </label>
              <input
                type="text"
                id="name"
                disabled
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  console.log(e.target.value);
                }}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold">
                Mobile*
              </label>
              <input
                type="number"
                id="mobile"
                disabled={userMobile}
                value={userMobile}
                onChange={(e) => setUserMobile(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">
                Email ID*
              </label>
              <input
                type="email"
                id="email"
                value={userEmail}
                disabled
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fatherName" className="block font-semibold">
                Father/Guardian Name*
              </label>
              <input
                type="text"
                id="fatherName"
                value={userFather}
                disabled={userFather}

                onChange={(e) => setUserFather(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-semibold">
                Date of Birth*
              </label>
              <input
                type="date"
                id="dob"
                disabled
                value={userDob}
                onChange={(e) => setUserDob(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="aadhar" className="block font-semibold">
                Aadhar*
              </label>
              <input
                type="text"
                value={userAdhar}
                disabled
                onChange={(e) => setUserAdhar(e.target.value)}
                id="aadhar"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-semibold" >
                Gender*
              </label>
              <select
                id="gender"
                value={userGender}
                disabled={userGender}
                onChange={(e) => setUserGender(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block font-semibold">
                Country*
              </label>
              <input
                type="text"
                id="country"
                disabled
                value={userCountry}
                onChange={(e) => setUserCountry(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block font-semibold">
                State*
              </label>
              <input
                type="text"
                id="state"
                disabled
                value={userState}
                onChange={(e) => setUserState(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nomineeName" className="block font-semibold">
                Nominee Name*
              </label>
              <input
                type="text"
                id="nomineeName"
                value={userNominee}
                disabled={userNominee}

                onChange={(e) => setUserNominee(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nomineeRelation" className="block font-semibold">
                Nominee Relation*
              </label>
              <input
                type="text"
                id="nomineeRelation"
                disabled={userNomineeRelation}

                value={userNomineeRelation}
                onChange={(e) => setUserNomineeRelation(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
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

export default MyProfile;
