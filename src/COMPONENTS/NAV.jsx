import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PiListDashesBold, PiListDashes } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";



const Navbar = ({theme}) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-baby-pink dark:bg-black dark:border dark:border-black w-full flex items-center justify-center transition duration-500 py-3 sticky top-0 z-30">
        <div className="flex items-center justify-between gap-4 w-11/12 lg:px-5 ">
          <a href="/" className="logo w-32 lg:w-36">
            <img
              src="https://realestatereacttailwind.netlify.app/assets/logo-CMrIGaUI.png"
              alt="Company Logo"
              className="h-full w-full object-cover"
            />
          </a>
          <nav className="flex items-center">
            <ul className="lg:flex gap-8 hidden justify-center items-center w-full text-black dark:text-white text-base font-semibold uppercase">
              <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>
              <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                <NavLink to="/about" className="">
                  About
                </NavLink>
              </li>
              <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                <NavLink to="/about" className="">
                  Properties
                </NavLink>
              </li>
              <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                <NavLink to="/about" className="">
                  Services
                </NavLink>
              </li>
              <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                <NavLink to="/about" className="">
                  Testimonials
                </NavLink>
              </li>
              <li className="py-2 px-3 hover:bg-red-500 rounded-xl">
                <NavLink to="/about" className="">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className=""
              >
                {isOpen ? (
                  <IoClose color={theme? "white": "black"} size={27} />
                ) : (
                  <PiListDashesBold color={theme? "white": "black"} size={27} />
                )}
              </button>
            </div>
          </nav>
          <div className="flex justify-center items-center text-sm lg:text-base gap-2 lg:gap-8">
                <div className="flex lg:gap-2">
                    <FaPhoneAlt color="red" size={23}/>
                    <p className="dark:text-white">888-908-9102</p>
                </div>
                <FaUserCircle color="red" size={24}/>
            </div>
          {isOpen && (
            <div
              style={{ zIndex: "-1" }}
              className="fixed top-20 inset-x-0 mt-3 py-7 px-10 bg-dark-blue text-white lg:hidden"
            >
              <ul className="flex flex-col items-center justify-center gap-5 text-base font-semibold uppercase">
              <li className="py-2 px-3">
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">
                  About
                </NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">
                  Properties
                </NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">
                  Services
                </NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">
                  Testimonials
                </NavLink>
              </li>
              <li className="py-2 px-3">
                <NavLink to="/about" className="">
                  Contact
                </NavLink>
              </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
