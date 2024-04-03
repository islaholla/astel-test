import styles from "../style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import image2 from "../assets/avatar.png";

import "swiper/css";
import "swiper/css/navigation";
import ratting from '../assets/Rating.png'

const FeedbackCard = () => (
  <section
    id="review"
    className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
  >
    <div
      className={`${styles.paragraph} konten bg-[] w-[100%] absolute sm:pl-[180px]  pl-[60px]`}
    >
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={3}
    
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="card">
            <div className="profile w-[100px] rounded-full my-[1rem] ">
              <img
                className="w-[100%] object-cover	 rounded-full "
                src={image2}
                alt=""
              />
            </div>
            <div className="review">
              <p className="font-p text-[16px]   leading-5">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-
                builder of human happiness.
              </p>
              <img src={ratting} alt="arrow-up" className="my-2 w-[133px] object-contain" />
              <p className="font-judul text-[21px] text-[#767E86]  ">John Doe</p>
              <p className="font-p text-[14px]  text-[#767E86]  leading-5">Accountant</p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="profile w-[100px] rounded-full my-[1rem] ">
              <img
                className="w-[100%] object-cover	 rounded-full "
                src={image2}
                alt=""
              />
            </div>
            <div className="review">
              <p className="font-p text-[16px]   leading-5">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-
                builder of human happiness.
              </p>
              <img src={ratting} alt="arrow-up" className="my-2 w-[133px] object-contain" />
              <p className="font-judul text-[21px] text-[#767E86]  ">John Doe</p>
              <p className="font-p text-[14px]  text-[#767E86]  leading-5">Accountant</p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="profile w-[100px] rounded-full my-[1rem] ">
              <img
                className="w-[100%] object-cover	 rounded-full "
                src={image2}
                alt=""
              />
            </div>
            <div className="review">
              <p className="font-p text-[16px]   leading-5">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-
                builder of human happiness.
              </p>
              <img src={ratting} alt="arrow-up" className="my-2 w-[133px] object-contain" />
              <p className="font-judul text-[21px] text-[#767E86]  ">John Doe</p>
              <p className="font-p text-[14px]  text-[#767E86]  leading-5">Accountant</p>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="profile w-[100px] rounded-full my-[1rem] ">
              <img
                className="w-[100%] object-cover	 rounded-full "
                src={image2}
                alt=""
              />
            </div>
            <div className="review">
              <p className="font-p text-[16px]   leading-5">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system and expound the actual
                teachings of the great explorer of the truth, the master-
                builder of human happiness.
              </p>
              <img src={ratting} alt="arrow-up" className="my-2 w-[133px] object-contain" />
              <p className="font-judul text-[21px] text-[#767E86]  ">John Doe</p>
              <p className="font-p text-[14px]  text-[#767E86]  leading-5">Accountant</p>
            </div>
          </div>{" "}
        </SwiperSlide>
    
       
      </Swiper>
    </div>
  </section>
);

export default FeedbackCard;
