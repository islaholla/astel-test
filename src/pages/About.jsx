import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { aboutPage } from "../redux/action/awardsAction";
import styles from "../style";
import About from "../components/About";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const dispatch = useDispatch();
  const { getPageAbout } = useSelector((state) => state.AwardsReducer);
  const [visiMisi, setVisiMisi] = useState({
    visi: "Become a leading company in providing best and innovative ICT solutions",
    misi: "Delivering excellent business services value through innovative Information and Communication Technology (ICT) solutions. To enable our customers' business with best practice technologies and quality human resources through our innovative ICT solutions."
  });

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        straggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    dispatch(aboutPage());
  }, [dispatch]);

  

  return (
    <section
      
    >
      <motion.div
        className="flex-1 flex flex-col w-full"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
       <Navbar/>
        <About/>
        <motion.div className="flex md:flex-row flex-col gap-8 mt-8" variants={variants}>
          <div className="visi card bg-white shadow-md rounded-lg p-6 flex-1">
            <h3 className="font-bold text-xl mb-4">Our Vision</h3>
            <p>{visiMisi.visi}</p>
          </div>
          <div className="misi card bg-white shadow-md rounded-lg p-6 flex-1">
            <h3 className="font-bold text-xl mb-4">Our Mission</h3>
            <p>{visiMisi.misi}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
