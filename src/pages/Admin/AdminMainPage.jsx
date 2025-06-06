import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import MainDashboard from "../Dashboard";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";
import AdminDashboard from "../../components/AdminDashboard";
import DepositeList from "../../components/DepositeList";
import LevelView from "../LevelView";
import AllUser from "./AllUser";
import WithdrawRequest from "../WithdrawRequest";
import WithdrawReport from "../WithdrawReport";
import TradingReport from "../TradingReport";
import Refund from "../Refund";
import RefundList from "../RefundList";
import CustomerList from "../CustomerList";
import { useLocation, useNavigate } from "react-router-dom";

const AdminMainPage = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate()
  const [noteView, setNoteView] = useState("MyProfile");
  const [slideOpen, setSlideOpen] = useState(false);
  const [Dashboard, setDashboard] = useState([
    {
      id: 1,
      name: "▶ Membership",
      isOpen: false,
      // subItems: ["Dashboard"],
    },
  ]);
  const [MyAccount, setMyAccount] = useState([
    {
      id: 1,
      name: "▶ User",
      isOpen: false,
      // subItems: ["U", "My Bank", "My Password", "KYC Upload"],
    },
  ]);

  const [member, setMember] = useState([
    {
      id: 1,
      name: "▶ Member",
      isOpen: false,
      // subItems: ["Add Member", "Member List", "Direct Member", "Level View"],
    },
  ]);

  const [equityUpload, setEquityUpload] = useState([
    {
      id: 1,
      name: "▶ Level View",
      isOpen: false,
      // subItems: ["Add Fee", "View Fee"],
    },
  ]);

  const [deposit, setDeposit] = useState([
    {
      id: 1,
      name: "▶ Deposit",
      isOpen: false,
      // subItems: ["INR Deposit", "Deposit Report"],
    },
  ]);

  const [withdraw, setWithdraw] = useState([
    {
      id: 1,
      name: "▶ Withdraw",
      isOpen: false,
      // subItems: ["Withdraw request", "Withdraw report"],
    },
  ]);
  const [trading, setTrading] = useState([
    {
      id: 1,
      name: "▶ Trading",
      isOpen: false,
      subItems: ["Trading request", "Trading report"],
    },
  ]);

  const [customerList, setCustomerList] = useState([
    {
      id: 1,
      name: "▶ Customer",
      isOpen: false,
      subItems: ["Customer List"],
    },
  ]);

  const [income, setIncome] = useState([
    {
      id: 1,
      name: "▶ Income",
      isOpen: false,
      // subItems: [
      //   "Self income",
      //   "Level Income",
      //   "Direct income",
      //   "Demat income",
      // ],
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
  const toggleTrading = (itemId) => {
    setTrading((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleCustomer = (itemId) => {
    setCustomerList((prevItems) =>
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

  const handleCustomerList = async () => {
    setNoteView("customerlist");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };

  const handleMembershipReq = async () => {
    setNoteView("MembershipReq");
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

  const handleRefund = async () => {
    setNoteView("refund");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };
  const handleRefundList = async () => {
    setNoteView("refundlist");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };

  const handleTradingRequest = async () => {
    setNoteView("tradingRequest");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  };

  const handleTradingReport = async () => {
    setNoteView("tradingReport");
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
    if(!JSON.parse(localStorage.getItem("admin"))) navigate("/login")
    handleMyProfile();
  }, []);

  return (
    <>
      <Navbar />
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
                      <li
                        onClick={handleMyProfile}
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                      >
                        All User
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
                      <li
                        onClick={handleMembershipReq}
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                      >
                        Membership Request
                      </li>
                      <li
                        onClick={handleMemberList}
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                      >
                        Membership List
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
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleLevelView}
                      >
                        Level View
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* <div
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
                      <li
                        onClick={handleAddMember}
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                      >
                        Add Member
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleMemberList}
                      >
                        Member List
                      </li>
                      <li
                        onClick={handleDirectMember}
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                      >
                        Direct Member
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleLevelView}
                      >
                        Level View
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div> */}
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
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleINRDeposit}
                      >
                        INR Deposit
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleDepositReport}
                      >
                        All Deposite
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* <div
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
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleDematIncome}
                      >
                        Demat Income
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div> */}

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
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleWithdrawRequest}
                      >
                        Withdraw Request
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleWithdrawReport}
                      >
                        Withdraw Report
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

           {/* <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {customerList.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleCustomer(items.id)}
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
                      
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleCustomerList}
                      >
                        Customer List
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>  */}

          {/* <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 15 }}
            className="note__btn"
          >
            <ul>
              {trading.map((items) => (
                <li key={items.id}>
                  <span
                    onClick={() => toggleTrading(items.id)}
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
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleTradingRequest}
                      >
                        Trading Request
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleTradingReport}
                      >
                        Trading Report
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleRefund}
                      >
                        Refund
                      </li>
                      <li
                        style={{
                          marginTop: 10,
                          listStyleType: "disc",
                          marginLeft: "20px",
                        }}
                        onClick={handleRefundList}
                      >
                        Refund List
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div> */}
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
          {noteView === "MembershipReq" ? <AdminDashboard /> : null}
          {noteView === "memberList" ? <AdminDashboard role={"all"} /> : null}
          {noteView === "INRDeposit" ? <DepositeList /> : null}
          {noteView === "levelView" ? <LevelView check={"admin"} /> : null}
          {noteView === "MyProfile" ? <AllUser /> : null}
          {noteView === "withdrawRequest" ? (
            <WithdrawReport role={"adminReq"} />
          ) : null}
          {noteView === "withdrawReport" ? (
            <WithdrawReport role={"adminAll"} />
          ) : null}
          {noteView === "DepositReport" ? <DepositeList role={"all"} /> : null}
          {noteView === "tradingRequest" ? (
            <TradingReport role={"adminReq"} />
          ) : null}
          {noteView === "tradingReport" ? (
            <TradingReport role={"adminAll"} />
          ) : null}
          {noteView === "refund" ? <Refund role={"all"} /> : null}
          {noteView === "refundlist" ? <RefundList role={"all"} /> : null}
          {noteView === "customerlist" ? <CustomerList role={'admin'} /> : null}


          {/* {noteView === "MyProfile" ? <MyProfile /> : null}
          {noteView === "MyPassword" ? <MyPassword /> : null}
          {noteView === "KYCUpload" ? <KYCUpload /> : null}
          {noteView === "addMember" ? <AddMember /> : null}
          {noteView === "memberList" ? <MemberList /> : null}
          {noteView === "directMember" ? <DirectMember /> : null}
          {noteView === "addEquity" ? <AddEquity /> : null}
          {noteView === "viewEquity" ? <ViewEquity /> : null}
          {noteView === "DepositReport" ? <DepositReport /> : null}
          {noteView === "selfIncome" ? <SelfIncome /> : null}
          {noteView === "levelIncome" ? <LevelIncome /> : null}
          {noteView === "directIncome" ? <DirectIncome /> : null}
          {noteView === "dematIncome" ? <DematIncome /> : null} */}
        </div>
      </div>
    </>
  );
};

export default AdminMainPage;
