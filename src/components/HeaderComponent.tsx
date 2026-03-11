import phone from "../images/phone.svg";
import whatsapp from "../images/whatsapp.svg";
import langFlag from "../images/langFlag.png";
import logo from "../images/e-ramo-logo-high-res 3.svg";
import arrowDown from "../images/downArrow.svg";
import arrowdown from "../images/arrow_down.svg";
import { FaList } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

function HeaderComponent() {
  return (
    <header className="w-full shadow-md">
      <div className="bg-linear-to-r from-[#594D1C] to-[#BEA036] text-white text-sm mt-2">
        <div className=" mx-auto flex flex-wrap items-center justify-between max-md:justify-center gap-3 py-3 px-10">
          <div className="flex items-center gap-2">
            <img src={phone} alt="phone" className="w-4 h-4" />
            <img src={whatsapp} alt="whatsapp" className="w-4 h-4" />
            <span className="border-l border-white/40 h-4 mx-2" />
            <span className="uppercase tracking-wide">
              CALL US : +2 - 01011559674 | CONTACT US
            </span>
          </div>

          <div className="flex items-center rounded-sm overflow-hidden w-72">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-3 py-1 text-gray-700 outline-none text-sm bg-white"
            />
            <button className="bg-[#757007] px-3 py-1 flex items-center justify-center rounded">
              <IoSearchOutline className=" text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto grid grid-cols-[1fr_auto_1fr]  items-center py-1 px-10 max-sm:px-5">
          <button className=" cursor-pointer hidden max-xl:block">
            {" "}
            <FaList size={25} />{" "}
          </button>
          <nav className="flex items-center flex-wrap text-xl font-semibold gap-4 max-xl:hidden">
            <a
              href="#home"
              className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent"
            >
              Home
            </a>
            <a href="#about_section" className="hover:text-[#9c7b26]">
              About
              <img src={arrowdown} alt=" arrow down" className=" inline ml-2" />
            </a>
            <a href="#" className="hover:text-[#9c7b26]">
              Services
              <img src={arrowdown} alt=" arrow down" className=" inline ml-2" />
            </a>
            <a href="#" className="hover:text-[#9c7b26]">
              Projects
            </a>
            <a href="#" className="hover:text-[#9c7b26]">
              Clients
            </a>
            <a href="#" className="hover:text-[#9c7b26]">
              Blog
            </a>
            <a href="#" className="hover:text-[#9c7b26]">
              Jobs
            </a>
          </nav>

          <div className="text-center">
            <img src={logo} alt="logo" className=" w-30" />
          </div>

          <div className="flex items-center gap-4 text-gray-800 justify-self-end">
            <div className="flex items-center gap-2">
              <span className=" font-[cairo]! font-semibold ">عربىة</span>
              <img
                src={langFlag}
                alt="language flag"
                className="w-5 h-3 object-cover"
              />
              <img
                src={arrowDown}
                alt="arrow down"
                className=" cursor-pointer"
              />
            </div>
            <span className="text-gray-300 max-sm:hidden">|</span>
            <div className="flex items-center gap-2 max-sm:hidden">
              <LuUser className="text-lg "/>
              <div className=" flex items-center gap-2 max-md:hidden">
                <button className="hover:text-[#9c7b26] ">Login</button>
                <span>|</span>
                <button className="hover:text-[#9c7b26]">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
