import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import MainDashboard from '../Dashboard';
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";
import AdminDashboard from '../../components/AdminDashboard';

const AdminMainPage = () => {

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

  const toggleDashboard = (itemId) => {
    setDashboard((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
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
            <AdminDashboard/>
          ) : null}
         
         
        </div>
      </div>
    </>
  )
}

export default AdminMainPage