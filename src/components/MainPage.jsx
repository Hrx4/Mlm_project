import React, { useState, useRef, useEffect } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";
import KYCUpload from "../pages/KycUpload";
import MyBank from "../pages/MyBank";
import MyPassword from "../pages/MyPassword";
import MyProfile from "../pages/MyProfile";
import MainDashboard from "../pages/Dashboard";
import Navbar from "./Navbar";
import './MainPage.css';
import AddMember from "../pages/AddMember";
import MemberList from "../pages/MemberList";
import DirectMember from "../pages/DirectMember";
import LevelView from "../pages/LevelView";
import AddEquity from "../pages/AddEquity";
import ViewEquity from "../pages/ViewEquity";
import INRDeposit from "../pages/INRDepost";
import DepositReport from "../pages/DepositReport";
import WithdrawRequest from "../pages/WithdrawRequest";
import WithdrawReport from "../pages/WithdrawReport";
import SelfIncome from "../pages/SelfIncome";
import LevelIncome from "../pages/LevelIncome";
import DirectIncome from "../pages/DirectIncome";
import DematIncome from "../pages/DematIncome";

// import SnavBar from './SnavBar';

const MainPage = () => {
  const ref = useRef(null);
  const [noteView, setNoteView] = useState("Dashboard");
  const [slideOpen, setSlideOpen] = useState(false);
  const [Dashboard, setDashboard] = useState([
    {
      id: 1,
      name: "▶ Dashboard",
      isOpen: false,
      subItems: ["Dashboard",],
    },
  ]);
  const [MyAccount, setMyAccount] = useState([
    {
      id: 1,
      name: "▶ My Account",
      isOpen: false,
      subItems: ["My Profile", "My Bank", "My Password", "KYC Upload"],
    },
  ]);

  const [member, setMember] = useState([
    {
      id: 1,
      name: "▶ Member",
      isOpen: false,
      subItems: ["Add Member","Member List","Direct Member","Level View"],
    },
  ]);

  const [equityUpload, setEquityUpload] = useState([
    {
      id: 1,
      name: "▶ Membership Fee",
      isOpen: false,
      subItems: ["Add Fee","View Fee"],
    },
  ]);

  const [deposit, setDeposit] = useState([
    {
      id: 1,
      name: "▶ Deposit",
      isOpen: false,
      subItems: ["INR Deposit","Deposit Report"],
    },
  ]);

  const [withdraw, setWithdraw] = useState([
    {
      id: 1,
      name: "▶ Withdraw" ,
      isOpen: false,
      subItems: ["Withdraw request" , "Withdraw report"],
    },
  ]);

  const [income, setIncome] = useState([
    {
      id: 1,
      name: "▶ Income" ,
      isOpen: false,
      subItems: ["Self income", "Level Income", "Direct income", "Demat income"],
    },
  ]);


  

  const toggleDashboard = (itemId) => {
    setDashboard((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleMyAccount = (itemId) => {
    setMyAccount((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleMember = (itemId) => {
    setMember((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleEquity = (itemId) => {
    setEquityUpload((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleDeposit = (itemId) => {
    setDeposit((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleWithdraw = (itemId) => {
    setWithdraw((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleIncome = (itemId) => {
    setIncome((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };



 
  const handleDashboard = async () => {
    setNoteView("Dashboard");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
};
const handleMyProfile = async () => {
    setNoteView("MyProfile");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
};
const handleMyPassword = async () => {
    setNoteView("MyPassword");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
};
const handleMyBank = async () => {
    setNoteView("MyBank");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
};
const handleKYCUpload = async () => {
    setNoteView("KYCUpload");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
};

const handleAddMember = async () => {
  setNoteView("addMember");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};
const handleMemberList = async () => {
  setNoteView("memberList");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};
const handleDirectMember = async () => {
  setNoteView("directMember");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};
const handleLevelView = async () => {
  setNoteView("levelView");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleAddEuity = async () => {
  setNoteView("addEquity");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleViewEquity = async () => {
  setNoteView("viewEquity");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleINRDeposit = async () => {
  setNoteView("INRDeposit");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleDepositReport = async () => {
  setNoteView("DepositReport");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleWithdrawRequest = async () => {
  setNoteView("withdrawRequest");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleWithdrawReport = async () => {
  setNoteView("withdrawReport");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleSelfIncome = async () => {
  setNoteView("selfIncome");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleLevelIncome = async () => {
  setNoteView("levelIncome");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleDirectIncome = async () => {
  setNoteView("directIncome");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};

const handleDematIncome = async () => {
  setNoteView("dematIncome");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};


  const btnclicked = () => {
    if (!slideOpen) {
      ref.current.classList.remove("slider__close");
      ref.current.classList.add("slider__open");
      setSlideOpen(true);
    } else {
      ref.current.classList.add("slider__close");
      ref.current.classList.remove("slider__open");
      setSlideOpen(false);
    }
  };

  useEffect(() => {
    handleDashboard();
  }, []);

  return (
    <>
    <Navbar/>
      <div
        className="super-container"
        style={{
          display: "flex",
          backgroundColor: "white",
          color: "black",
          height: "100vh",
        }}
      >
        <button
          className="hide__btn"
          style={{ position: "absolute", marginTop: 5 }}
          onClick={btnclicked}
        >
          {!slideOpen ? (
            <DoubleArrowIcon fontSize="small" />
          ) : (
            <ClearIcon fontSize="small" />
          )}
        </button>
        <div
          ref={ref}
          id="super-choose"
          className="super-choose"
          style={{ display: "flex", overflowY: "scroll" }}
        >
           <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {Dashboard.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleDashboard(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li onClick={handleDashboard} style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} >Dashboard</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {MyAccount.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleMyAccount(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li onClick={handleMyProfile} style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} >My Profile</li>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleMyBank}>
                        My Bank
                      </li>
                      <li onClick={handleMyPassword} style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} >My Password</li>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleKYCUpload}>
                        KYC Upload
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {equityUpload.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleEquity(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleAddEuity}>
                        Add Fee
                      </li>
                     
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {member.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleMember(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li onClick={handleAddMember} style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} >Add Member</li>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleMemberList}>
                      Member List
                      </li>
                      <li onClick={handleDirectMember} style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} >Direct Member</li>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleLevelView}>
                      Level View
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {deposit.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleDeposit(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleINRDeposit}>
                        INR Deposit
                      </li>
                      
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {income.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleIncome(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleDematIncome}>
                        Demat Income
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {withdraw.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleWithdraw(items.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {items.name}
                  </span>
                  {items.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleWithdrawRequest}>
                      Withdraw Request
                      </li>
                      <li style={{ marginTop: 10, listStyleType:"disc", marginLeft:"20px" }} onClick={handleWithdrawReport}>
                      Withdraw Report
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        <div
          style={{
            height: "98%",
            width: "100%",
            display: "flex",
            marginBottom: 20,
            overflowY: "scroll",
          }}
          className="mainpage"
        >
          {noteView === "Dashboard" ? (
            <MainDashboard/>
          ) : null}
          {noteView === "MyProfile" ? (
            <MyProfile
            />
          ) : null}
          {noteView === "MyBank" ? (
            <MyBank />
          ) : null}
          {noteView === "MyPassword" ? <MyPassword /> : null}
          {noteView === "KYCUpload" ? <KYCUpload /> : null}
          {noteView === "addMember" ? (
            <AddMember
            />
          ) : null}
          {noteView === "memberList" ? (
            <MemberList />
          ) : null}
          {noteView === "directMember" ? <DirectMember /> : null}
          {noteView === "levelView" ? <LevelView /> : null}
          {noteView === "addEquity" ? <AddEquity /> : null}
          {noteView === "viewEquity" ? <ViewEquity /> : null}
          {noteView === "INRDeposit" ? <INRDeposit /> : null}
          {noteView === "DepositReport" ? <DepositReport /> : null}
          {noteView === "withdrawRequest" ? <WithdrawRequest /> : null}
          {noteView === "withdrawReport" ? <WithdrawReport /> : null}
          {noteView === "selfIncome" ? <SelfIncome /> : null}
          {noteView === "levelIncome" ? <LevelIncome /> : null}
          {noteView === "directIncome" ? <DirectIncome /> : null}
          {noteView === "dematIncome" ? <DematIncome /> : null}
        </div>
      </div>
    </>
  );
};

export default MainPage;
