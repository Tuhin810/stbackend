import { useState } from "react";
import ThreeLines from "../../../shared/icons/threeLines/ThreeLines";
import SideBar from "../sidebar/SideBar";
import CrossIcon from "../../../shared/icons/crossIcon/CrossIcon";
import { logo } from "../../../../assets/images";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-gray-50 fixed w-full z-50 top-0 shadow-md">
        <div className="bg-white flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center ">
          <button className="flex justify-between  items-center space-x-3">
            <img src={logo} className="h-10"/>
          </button>
          <div aria-label="toggler" className="flex justify-center items-center">
            <button id="open" onClick={() => setShow(!show)} aria-label="open" className={`${show ? "" : "hidden"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}>
              <CrossIcon />
            </button>
            <button id="close" onClick={() => setShow(!show)} aria-label="close" className={`${show ? "hidden" : ""} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}>
              <ThreeLines />
            </button>
          </div>
        </div>
      </div>
      <SideBar show={show} logout={()=>{console.log("clicked");
      }} />
    </>
  );
}
export default Navbar;
