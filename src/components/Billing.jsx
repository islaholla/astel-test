import styles, { layout } from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import {  motion } from "framer-motion"

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from "react";
import parse from 'html-react-parser'
import { useDispatch, useSelector } from "react-redux";
import {  listPartnerPage, partnerPage } from "../redux/action/awardsAction";
const Billing = () => {
  const dispatch = useDispatch();
  const { getPagePartnerList, getPagePartner } = useSelector(
    (state) => state.AwardsReducer
  );

  const variants = {
    initial :{
      x : -50,
      opacity :0
    },
    animate : {
      x : 0,
      opacity : 1,
      transition :{
        duration : 1,
        straggerChildren :0.1 
      }
    }
  }

  useEffect(()=>{
   dispatch(partnerPage());
   dispatch(listPartnerPage());
  },[dispatch])

  return (
    <section
      id="partner"
      className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
    >
      <motion.div className="flex-1 flex flex-col relative" variants={variants} initial = "initial" whileInView="animate">
        <div className="relative gap-[4.5rem] mt-[1.5rem] h-[100%] partner-wrap">
        <h2 className={styles.heading2}>{getPagePartner ? getPagePartner.title.rendered : ''} </h2>
        <div className="w-[150px] line"></div>
          <div className="w-[100%] sm:w-[34%]">
            <p className={`${styles.paragraph} sub-title`}>
              {getPagePartner.content ? parse( getPagePartner.content.rendered):''}
            </p>
          </div>
          <div
            className={`${styles.paragraph} konten  w-[100%] sm:w-[80%] absolute `}
          >
           <Swiper
              spaceBetween={50}
              loop={true}
              slidesPerView={4}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              { getPagePartnerList ?  getPagePartnerList?.map((item,key)=>{
                  return(
                      <SwiperSlide> <img  className="w-[100%] object-cover " src={item._embedded['wp:featuredmedia']['0'].source_url}  alt="" />
                    </SwiperSlide>
                  )
              }): ''}
            </Swiper>
           
          </div>
        </div>
      </motion.div>
    </section>
  )
};

export default Billing;
