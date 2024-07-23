import styles from "../style";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import {  motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import { bisnissPage } from "../redux/action/awardsAction";
import Modal from "./modal/Modal";


const Business = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [konten, setKonten] = useState([]);
  const variants = {
    initial :{
      y : 100,
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
  const dispatch = useDispatch();
  const { getPageBisnis } = useSelector(
    (state) => state.AwardsReducer
  );
 
  useEffect(() => {
    dispatch(bisnissPage());
  }, [dispatch]);
  return (
    <section
      id="product"
      className={`${styles.flexCenter} sm:flex-row flex-col sm:px-16 px-6 `}
    >
        <motion.div className="flex-1 flex flex-col"  variants={variants} initial = "initial" whileInView="animate">
        <motion.h2 className={`${styles.heading2} text-center`} variants={variants}>
          Our Solutions 
        </motion.h2>
        <div className="w-[150px] line mx-auto"></div>
        <p className={`${styles.paragraph} sub-title text-center`}>
          Check out our special offer and discounts
        </p>
        <div className="flex md:grid-cols-4 grid grid-cols-2 gap-[2.5rem] mt-[1.5rem] mx-auto xl:w-[88%] w-[100%]">
          {getPageBisnis ? getPageBisnis?.map((item, index) => {
            return (
              <div className="card bg-white pt-6 " key={index}>
                <div className="image">
                  <img
                    src={item._embedded["wp:featuredmedia"]["0"].source_url}
                    alt=""
                  />
                </div>
                <div className="p-6 grid px-5">
                  <h3 className="text-[21px] lg:text-[16px] font-bold text-[#767E86]">
                    {item.title.rendered}
                  </h3>
                  {/* parse(item.content.rendered) */}
                  <p className="text-[13px] font-p mt-2">
                    {item.content.rendered.length  > 100 ? parse(item.content.rendered.substring(0, 100)) : parse(item.content.rendered) }
                  </p>
                  <button onClick={ () => { 
                    setIsOpen(true)
                    setKonten([item.title.rendered,parse(item.content.rendered)])
                    }} className="bg-[#FF7654] rounded-lg w-[30%] text-center py-[4px] text-[14px] text-white mt-2 justify-self-end">
                    Details
                  </button>

                </div>
              </div>
            );
          }) : ''}
        </div>
        {isOpen && <Modal konten={konten[1]} title={konten[0]} setIsOpen={setIsOpen}  />}
      </motion.div>
    </section>
  );
};

export default Business;
