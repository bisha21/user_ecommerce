import { Link, NavLink } from 'react-router-dom';
import navMenu from '../constants/navMenu';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import logo from '../images/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/auth/authSlice';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(!isOpen);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const isAuthenticated = Boolean(user);

  const toggleMobileMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const logOut = () => {
    dispatch(logoutUser());
  };

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0';

  return (
    <nav className="w-full shadow-2xl bg-white sticky px-2 md:px-8 border-green-400 z-50">
      <div className="flex justify-between items-center py-2 md:py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Shopify Logo" className="h-8 rounded-full" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Shopify
          </span>
        </Link>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col items-center gap-4 w-48 bg-white font-bold shadow-2xl px-4 absolute right-0 top-14 z-50 md:flex-row md:gap-6 md:static md:shadow-none md:inline-flex ${
            isOpen ? 'block' : 'hidden'
          }
        `}
        >
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

        {/* Logout and Mobile Menu Button */}
        <div className="flex space-x-3 relative">
          {isAuthenticated && (
            <button
              type="button"
              className="flex justify-around gap-2 items-center text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={logOut}
            >
              Logout <CiLogout />
            </button>
          )}

          <button
            className="flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 md:hidden"
            aria-label="Toggle Mobile Menu"
            onClick={toggleMobileMenu}
          >
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}