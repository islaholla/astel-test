import styles, { layout } from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser'
const Billing = () => {
  const [partner,setpartner] =useState([]);
  const [lisrPartner,setlisrPartner] =useState([]);

  useEffect(()=>{
   let url = '  https://astelsolution.000webhostapp.com/wp-json/wp/v2/pages?slug=our-partner'
   axios.get(url).then((res)=>{
    setpartner(res.data[0])
   })
   let urlParter = 'https://astelsolution.000webhostapp.com/wp-json/wp/v2/posts?categories=4&&.embed'
   axios.get(urlParter).then((res)=>{
    setlisrPartner(res.data)
   })
  },[])

  return (
    <section
      id="partner"
      className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
    >
      <div className="flex-1 flex flex-col relative">

        <div className="relative gap-[4.5rem] mt-[1.5rem] h-[40vh] sm:h-[100%] ">
        <h2 className={styles.heading2}>  {partner.title ? partner.title.rendered :''}</h2>
        <div className="w-[150px] line"></div>
          <div className="w-[100%] sm:w-[34%]">
            <p className={`${styles.paragraph} sub-title`}>
              {partner.content ? parse( partner.content.rendered):''}
            </p>
          </div>
          <div
            className={`${styles.paragraph} konten  w-[100%] sm:w-[80%] absolute `}
          >
           <Swiper
              spaceBetween={50}
              loop={true}
              lazy={true}
              slidesPerView={4}
              autoplay={{
                delay:1500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              {lisrPartner?.map((item,key)=>{
                  return(
                    <SwiperSlide> <img id={key} className="w-[100%] object-cover " src={item._embedded['wp:featuredmedia']['0'].source_url}  alt="" />
                    </SwiperSlide>
                  )
              })}
            </Swiper>
           
          </div>
        </div>
      </div>
    </section>
  )
};

export default Billing;
