import styles from "../style";
// Import Swiper styles
import { motion } from "framer-motion"

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from "react";
import parse from 'html-react-parser'
import { useDispatch, useSelector } from "react-redux";
import { listPartnerPage, partnerPage } from "../redux/action/awardsAction";
const Billing = () => {
  const dispatch = useDispatch();
  const { getPagePartnerList, getPagePartner } = useSelector(
    (state) => state.AwardsReducer
  );

  const variants = {
    initial: {
      x: -50,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        straggerChildren: 0.1
      }
    }
  }

  useEffect(() => {
    dispatch(partnerPage());
    dispatch(listPartnerPage());
  }, [dispatch])

  return (
    <section
      id="partner"
      className={`${styles.flexCenter} ${styles.marginY}  ${styles.paddingX}`}
    >
      <motion.div className="" variants={variants} initial="initial" whileInView="animate">
        <div className="text-center">
          <h2 className={styles.heading2}>{getPagePartner ? getPagePartner.title.rendered : ''} </h2>
          <div className="w-[150px] mx-auto line"></div>
          <div className="">
            <p className={`${styles.paragraph} sub-title`}>
              {getPagePartner.content ? parse(getPagePartner.content.rendered) : ''}
            </p>
          </div>
          <div
            className={`${styles.paragraph} konten  `}
          >
            <div class="flex flex-wrap  items-baseline">
              {getPagePartnerList ? getPagePartnerList?.map((item, key) => {
                return (
                  <div class=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 flex flex-col  "><a  target="_blank" href={item.content ? item.content.rendered : '#'}> <img src={item._embedded['wp:featuredmedia']['0'].source_url} alt="Gambar 5"/></a></div>
                )
              }) : ''}

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
};

export default Billing;
