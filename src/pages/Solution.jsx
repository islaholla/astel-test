import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { aboutPage } from "../redux/action/awardsAction";
import Navbar from "../components/Navbar";
import Business from "../components/Business";

const SolutionPage = () => {
  const dispatch = useDispatch();
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
       <br />
       <br />
       <Business/>
      </motion.div>
    </section>
  );
};

export default SolutionPage;
