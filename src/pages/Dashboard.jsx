import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { MdPerson, MdPeople, MdAttachMoney } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

const MainDashboard = () => {
  const [userInfo, setuserInfo] = useState({});
  const [totalTeam, setTotalTeam] = useState(0);


  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem("userInfo"))?.user);
    setTotalTeam(JSON.parse(localStorage.getItem("userInfo"))?.totalTeam);

  }, []);

  return (
    <div className="dashboardpage">
      <div style={{ marginBottom: "50px" }}>
        <IconContext.Provider value={{ className: "text-4xl" }}>
          <div className="flex flex-wrap justify-center items-center h-screen">
            <Card
              icon={<MdPerson />}
              title={userInfo?.userName}
              subtitle={`ID : ${userInfo?.userId}`}
            />
            <Card icon={<RiTeamLine />} title="My Direct" subtitle={userInfo?.childUsers?.length} />
            <Card icon={<MdPeople />} title="My Team" subtitle={totalTeam}/>
            <Card
              icon={<MdAttachMoney />}
              title="Level Income"
              subtitle={`₹${userInfo?.levelIncome}`}
            />
            <Card
              icon={<MdAttachMoney />}
              title="Self Income"
              subtitle={`₹${userInfo?.selfIncome}`}
            />
            <Card
              icon={<MdAttachMoney />}
              title="Demat Income"
              subtitle="₹0"
            />
            <Card
              icon={<MdAttachMoney />}
              title="Total Income"
              subtitle={`₹${userInfo?.levelIncome + userInfo?.selfIncome}`}
            />
            <Card
              icon={<MdAttachMoney />}
              title="Status"
              subtitle={userInfo?.userStatus}
            />
          </div>
        </IconContext.Provider>
      </div>
      <div
        className="mt-30 h-25 bg-gradient-to-r from-gray-400 to-gray-100 referrallink"
        style={{ height: "100px" }}
      >
        <p
          className=" px-15 "
          style={{ paddingTop: "25px", fontSize: "25px", paddingLeft: "15px" }}
        >
          REFERRAL LINK
        </p>
      </div>
      <div>
        <div
          className="w-full bg-gradient-to-r from-teal-400 to-emerald-400 linksimgs"
          style={{ height: "250px", boxSizing: "border-box" }}
        >
          <p
            style={{
              fontSize: "25px",
              paddingTop: "25px",
              paddingLeft: "25px",
            }}
          >
            https://Newins.com{" "}
          </p>
          <div className="flex flex-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              style={{ height: "40px", width: "40px", margin: "20px" }}
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              style={{ height: "40px", width: "40px", margin: "20px" }}
            ></img>
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/45/76/sms-icon-simple-vector-18114576.webp"
              style={{ height: "40px", width: "40px", margin: "20px" }}
            ></img>
            <img
              src="https://logowik.com/content/uploads/images/gmail-new-icon5198.jpg"
              style={{ height: "40px", width: "40px", margin: "20px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs w-full relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="flex items-start mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default MainDashboard;
