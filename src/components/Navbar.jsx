import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [userInfo, setuserInfo] = useState({});

  const navigate = useNavigate()


  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  return (
    <div className="bg-white sticky top-0 z-50  ">
      {/* desktop  */}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
        >
          <div className="">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <div className=" text-4xl font-bold">NEWINS</div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="flex lg:ml-6"></div>
                <div className="ml-4 flow-root lg:ml-6">
                  <div
                    className="flex items-center gap-3 cursor-pointer p-4"
                    onClick={() => setOpen(!open)}
                  >
                    <FaCircleUser color="gray" size={40} />
                    {userInfo?.userCodeId}
                  </div>
                  {open ? (
                    <div className="w-48 bg-blue-200 absolute right-0 mr-8">
                      <div className="flex items-center p-4 cursor-pointer hover:bg-sky-700" onClick={()=>navigate(-1)} >
                        <MdLogout />
                        Log Out
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
