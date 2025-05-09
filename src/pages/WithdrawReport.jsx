import React, { useCallback, useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import axios from "axios";
import backend from "../backend";

const WithdrawReport = ({ role }) => {
  const [userList, setUserList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [userCode, setUserCode] = useState("");
  const fetching = useCallback(async () => {
    try {
      const response = await axios.post(`${backend}/withdraw/all`, {
        // userEmail: JSON.parse(localStorage.getItem("userInfo"))?.user?.userEmail,
      });
      console.log(response.data);

      if (role === "adminReq")
        setUserList(
          response.data.filter((item) => item.withdrawStatus === "pending")
        );
      else if (role === "adminAll") {
        if (userCode !== "") {
          console.log("====================================");
          console.log("yes", { userCode: userCode });
          console.log("====================================");
          setUserList(
            response.data.filter(
              (item) =>
                item.withdrawStatus === "Accepted" && item.userId === userCode
            )
          );
        } else {
          console.log("====================================");
          console.log("null");
          console.log("====================================");
          setUserList(
            response.data.filter((item) => item.withdrawStatus === "Accepted")
          );
        }
      } else
        setUserList(
          response.data.filter(
            (item) =>
              item.userEmail ===
              JSON.parse(localStorage.getItem("userInfo"))?.user?.userEmail
          )
        );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [userCode]);

  const handleAccept = async (id) => {
    try {
      const response = await axios.put(`${backend}/withdraw/accept/`, {
        withdrawId: id,
      });
      console.log(response.data);
      if (response.status === 201) {
        // window.location.reload();
        setToggle(!toggle);
        alert("Withdraw accepted");
      }
    } catch (error) {
      alert("Error Occured");
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
setToggle(!toggle)  }

  useEffect(() => {
    fetching();
  }, [toggle]);

  return (
    <>
      <div
        style={{ marginTop: "45px", marginLeft: "65px" }}
        className="directmember"
      >
        {role === "adminAll" ? (
          <div className=" mb-7 flex">
            <form  onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter code"
                value={userCode}
                onChange={(e) => {
                  console.log(e.target.value, userCode);
                  setUserCode(e.target.value);
                }}
              />
              <button type="submit" className=" p-2 bg-green-400 rounded-xl ml-2">
              Submit
            </button>
            </form>
            
          </div>
        ) : null}

        <div className="flex items-center mb-4">
          <FaFileAlt className="text-2xl mr-2" />
          <h1 className="text-xl font-bold">Withdraw Report</h1>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
          <table className="table-auto w-75% ">
            <thead>
              <tr>
                <th
                  className="px-4 py-2"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  SL.
                </th>
                <th
                  className="px-4 py-2"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  User Id
                </th>
                <th
                  className="px-4 py-2"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Amount
                </th>
                <th
                  className="px-4 py-2"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Bank Details
                </th>
                <th
                  className="px-4 py-2"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Request on
                </th>
                {role === "adminReq" ? (
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Action
                  </th>
                ) : (
                  <th
                    className="px-4 py-2"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Status
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {userList?.map((item, index) => (
                <tr key={item?.userId }>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{item?.userId}</td>
                  <td className="border px-4 py-2"> {item?.withdrawAmount}</td>
                  <td className="border px-4 py-2">
                    Bank : {item?.bankName}
                    <br />
                    Branch : {item.bankBranch} <br />
                    A/c Name : {item.bankHolderName} <br />
                    A/c No. : {item?.bankAccountNo}
                    <br />
                    Type : {item.bankAccountType} <br />
                    IFSC : {item.bankIfsc}
                    <br />
                    PAN No. : {item.bankPan}{" "}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(item.createdAt).toISOString().split("T")[0]}
                  </td>

                  {role !== "adminReq" ? (
                    <td className="border px-4 py-2">
                      {" "}
                      {item.withdrawStatus}{" "}
                    </td>
                  ) : (
                    <td className="border px-4 py-2">
                      {" "}
                      <button
                        className=" p-2 bg-blue-400 rounded-xl"
                        onClick={() => handleAccept(item._id)}
                      >
                        Accept
                      </button>{" "}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WithdrawReport;
