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
          
        </div>
      </div>
    </>
  );
};

export default MainPage;
