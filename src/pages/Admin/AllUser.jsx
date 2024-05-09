import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import backend from "../../backend";
import { FaFileAlt } from "react-icons/fa";

const AllUser = () => {
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userFather, setUserFather] = useState("");
  const [userDob, setUserDob] = useState("");
  const [userAdhar, setUserAdhar] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userState, setUserState] = useState("");
  const [userNominee, setUserNominee] = useState("");
  const [userNomineeRelation, setUserNomineeRelation] = useState("");
  const [bankIfsc, setBankIfsc] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [bankHolderName, setBankHolderName] = useState("");
  const [bankAccountType, setBankAccountType] = useState("");
  const [bankPan, setBankPan] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const [userInput, setUserInput] = useState("")


  const handleModalOpen = (item )=>{
    setUserName(item?.userName);
      setUserMobile(item?.userMobile);
      setUserEmail(item?.userEmail);
      setUserPassword(item?.userPassword);
      setUserFather(item?.userFather);
      setUserDob(item?.userDob);
      setUserAdhar(item?.userAdhar);
      setUserGender(item?.userGender);
      setUserCountry(item?.userCountry);
      setUserState(item?.userState);
      setUserNominee(item?.userNominee);
      setUserNomineeRelation(item?.userNomineeRelation);
      setBankIfsc(item?.bankIfsc);
      setBankName(item?.bankName);
      setBankBranch(item?.bankBranch);
      setBankAccountNo(item?.bankAccountNo);
      setBankHolderName(item?.bankHolderName);
      setBankAccountType(item?.bankAccountType);
      setBankPan(item?.bankPan);
      setModalOpen(true)

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${backend}/user/update/`,
        {
          userName: userName,
          userMobile: userMobile,
          userPassword,
          userEmail: userEmail,
          userCountry: userCountry,
          userState: userState,
          userFather: userFather,
          userDob: userDob,
          userAdhar: userAdhar,
          userGender: userGender,
          userNominee: userNominee,
          userNomineeRelation: userNomineeRelation,
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
        alert("Profile Updated")

      }
    } catch (error) {
      alert("Error Occured")
      console.error("Error fetching data:", error);
    }
  };

  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/user/list`);
      console.log(response.data);
      setCurrentUser(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  , []);


  const handleInput = (e)=>{
    e.preventDefault()
    if(userInput==="") fetching()
    setCurrentUser(currentUser.filter((item)=>item.userId === userInput))
  }


  useEffect(() => {
    
    fetching()
    
  }, []);

  return (
    <>

{
  modalOpen ? 

    <div className=" min-h-screen p-8" style={{ width: "100%" }}>
    <span className=" rounded-xl p-4 font-bold bg-blue-300 cursor-pointer" onClick={()=>setModalOpen(false)}>
     { '<'}
    </span>
      <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <FiUser className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">User Profile</h1>
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
                
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold">
                Password
              </label>
              <input
                type="email"
                id="email"
                value={userPassword}
                
                onChange={(e) => setUserPassword(e.target.value)}
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
                onChange={(e) => setUserAdhar(e.target.value)}
                id="aadhar"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-semibold">
                Gender*
              </label>
              <select
                id="gender"
                value={userGender}
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
                value={userNomineeRelation}
                onChange={(e) => setUserNomineeRelation(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
            </div>
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
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
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
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
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
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
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
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
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
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
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
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                
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
:
    <div style={{ marginTop: "45px", marginLeft: "65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FaFileAlt className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">All User</h1>
                </div>
                <div className=" mb-3">
                  <input type="text" placeholder="Enter user ID" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
                  <button className=" p-2 bg-green-400 rounded-xl ml-2" onClick={handleInput}>Submit</button>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>SL.</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Name</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>User Id</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Email</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentUser?.map((item , index)=>(
                                    <tr>
                                <td className="border px-4 py-2">{index+1}</td>
                                 <td className="border px-4 py-2"> {item?.userName}</td>
                                <td className="border px-4 py-2"> {item?.userId}</td>
                               
                                <td className="border px-4 py-2">{item.userEmail}</td>
                                
                                 <td className="border px-4 py-2 "> 
                                 <button className=" p-2 bg-blue-400 rounded-xl" onClick={()=>handleModalOpen(item)}>Edit / View</button>
                                 <button className=" p-2 bg-red-400 rounded-xl ml-2">Delete</button>
                                  </td>

                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

}
    </>

    
  );
};

export default AllUser;
