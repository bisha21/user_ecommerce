import { Link, NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import logo from "../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";

export default function Navbar() {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true); // By default, menu is hidden
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let isAuthenticated = user ? true : false;

  const toggleMobileMenu = () => {
    setIsMobileMenuHidden((prevState) => !prevState);
  };

  const logOut = () => {
    dispatch(logoutUser());
  };

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <div className="bg-white px-8 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 sticky">
      <div className="flex items-center justify-between md:justify-between p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8 rounded-full" alt="Flowbite Logo" />
          <span className="  self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Shopify
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button
            type="button"
            className="flex justify-around gap-2 items-center text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            onClick={logOut}
          >
            <p className={isAuthenticated ? "" : "hidden"}>
              Logout <CiLogout />
            </p>
          </button>
          <button
            className=" flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuHidden ? (
              <FaBars />
            ) : (
              <div className="absolute right-[-55vw] w-8 font-bold text-2xl">
                <IoClose />
              </div>
            )}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuHidden ? "hidden" : ""
            }`}
        >
          <ul className="flex flex-col md:flex-row absolute md:relative right-0 w-48 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold">
            {navMenu
              .filter((menu) => menu.auth === isAuthenticated)
              .map((menu) => (
                <li key={menu.route}>
                  <NavLink to={menu.route} className={navLinkStyles}>
                    {menu.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
