import { useState } from "react";

import  close from "../assets/close.svg";
import logo from "../assets/logo.png";
import menu from '../assets/menu.svg'
import { navLinks } from "../constants";
import {  motion } from "framer-motion"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const variants = {
    initial :{
      opacity :0
    },
    animate : {
      y : 0,
      opacity : 1,
      transition :{
        duration : 1,
        delay : 3.5,
        straggerChildren :0.1 
      }
    }
  }
  return (
    <motion.nav className="w-full flex py-6 justify-between items-center	"  variants={variants} initial = "initial" animate="animate"  >
      <a
        className="text-white"
        target="_blank"
        href="https://www.ibm.com/id-id"
      >
        <img src={logo} alt="hoobank" class="md:w-[170px] w-[120px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            id={`nav-${nav.id}`}
            className={`cursor-pointer text-[16px] text-white  ${
              active === nav.title ? "text-white" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] navbar ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
