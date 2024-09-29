import styles from "../style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { custPage } from "../redux/action/awardsAction";
import {  motion } from "framer-motion"

const Testi = () => {
  const dispatch = useDispatch();
  const { getPageCust } = useSelector(
    (state) => state.AwardsReducer
  );
  const textVatian = {
    initial :{
      opacity :0
    },
    animate : {
      opacity : 1,
      transition :{
        duration : 2,
        straggerChildren :0.1 
      }
    }
  }
  useEffect(() => {
    // paggil
    dispatch(custPage());
  }, [dispatch]);

    return (
      <section
    id="testi"
    className={`${styles.flexCenter}  sm:flex-row flex-col mt-6 ${styles.paddingX}` }
  >
    <motion.div className="flex-1 flex flex-col" variants={textVatian} initial = "initial" whileInView="animate">
      <h2 className={styles.heading2}> Our Customers</h2>
      <div className="w-[290px] line"></div>
      <p className={`${styles.paragraph} sub-title`}>
      {getPageCust[0] ? getPageCust[0].title.rendered : 'loading'}
      </p>
    
    </motion.div>
       </section>
  );
};

export default Testi;
