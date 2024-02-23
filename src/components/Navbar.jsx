import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" h-20 bg-white flex px-5 justify-between items-center">
        <div className=" text-4xl font-bold">LOGO</div>
        <div
          className="flex items-center gap-3 cursor-pointer p-4"
          onClick={() => setOpen(!open)}
        >
          <FaCircleUser color="gray" size={40} />
          SDFX562748
        </div>
      </div>
      {open ? (
        <div className="w-48 bg-blue-200 absolute right-0 mr-8">
          <div className="p-4 cursor-pointer hover:bg-sky-700">
            Edit Profile
          </div>
          <div className="p-4 cursor-pointer hover:bg-sky-700">
            Change Password
          </div>
          <div className=" h-px bg-black"></div>
          <div className="flex items-center p-4 cursor-pointer hover:bg-sky-700">
            <MdLogout />
            Log Out
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
