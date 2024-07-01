import styles from "../style";
import arrowUp from "../assets/arrow.svg";
import { useEffect } from "react";
import parse from 'html-react-parser'
import {  motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import { aboutPage } from "../redux/action/awardsAction";

const About = () => {
  const dispatch = useDispatch();
  const { getPageAbout, getPageAboutLoading } = useSelector(
    (state) => state.AwardsReducer
  );
   const variants = {
    initial :{
      opacity :0
    },
    animate : {
      y : 0,
      opacity : 1,
      transition :{
        duration : 1,
        straggerChildren :0.1 
      }
    }
  }
   useEffect(()=>{
    dispatch(aboutPage());
   },[dispatch])
  return (
    <section
      id="about"
      className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
    >
      <motion.div className="flex-1 flex flex-col w-[100%]" variants={variants} initial = "initial" whileInView="animate"  >
        <motion.h2 className={styles.heading2}  variants={variants} > Our Journey</motion.h2>
        <motion.div className="w-[150px] line"  variants={variants} ></motion.div>
        <motion.p className={`${styles.paragraph} sub-title`}  variants={variants} >
          pioneer and innovator in the information technology business 
        </motion.p>
        <motion.div className="flex md:flex-row flex-col  gap-[2.5rem]  md:gap-[4.5rem] mt-[1.5rem]"  variants={variants} >  
          <div className="2xl:w-[530px] lg:w-[430px] lg:h-[430px] xl:w-[460px] xl:h-[480px] xs:w-[209px] s:w-[209px]  2xl:h-[560px] ">
          {getPageAbout._embedded ?  <img
                src={getPageAbout._embedded['wp:featuredmedia']['0'].source_url}
                alt="arrow-up"
                className="w-[100%] h-[100%] object-cover"
              /> :"" }
          </div>
          <div
            className={`${styles.paragraph} konten text-start sm:text-justify sm:w-[50%] w-[100%]`}
          >
            <h2 className="2xl:text-[38px] xl:text-[30px] lg:text-[24px]  2xl:font-medium font-semibold	 text-[30px] md:mb-5 mb-4 leading-8 xl:leading-10  font-judul text-left">
             {getPageAbout.title ? getPageAbout.title.rendered :''}
            </h2>
            <p className="leading-[28px] xl:leading-[32px] 2xl:leading-[38px]">
             {getPageAbout.content ? parse( getPageAbout.content.rendered):''}
            </p>
            
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
