import { useState } from "react";

import  close from "../assets/close.svg";
import logo from "../assets/Logo Astel.png";
import menu from '../assets/menu.svg'
import { navLinks } from "../constants";
import styles from "../style";
import { Link } from "react-router-dom";

const Navbar = (custom) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <div  className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth} navbar absolute z-10`}>
      <div className={`${styles.boxWidth} `}>
      <nav className="w-full flex py-6 justify-between items-center	"  >
      <Link to="/" className="text-white">
          <img src={logo} alt="astel" class="md:w-[170px] w-[120px]" />
        </Link>
  
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            id={`nav-${nav.id}`}
            className={`cursor-pointer lg:text-[16px] xl:text-[14px]  ${custom.color ? custom.color : 'text-[#000]'} ${
              active === nav.title ? "text-[#000]" : "text-[#000]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
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
    </nav>
      </div>
    </div>
  );
};

export default Navbar;
