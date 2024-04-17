import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { useState } from "react";
import arrowUp from "../assets/arrow-white.svg";
import {  delay, motion } from "framer-motion"

const SwiperHero = ({ slide }) => {
  const [active, setActive] = useState(false);
  const handleFlip = () => {
    setActive(!active);
  };
  const textVatian = {
    initial :{
      x :50,
      opacity :0
    },
    animate : {
      x : 0,
      opacity : 1,
      transition :{
        duration : 1,
        delay : 3.5,
        straggerChildren :0.1 
      }
    }
  }
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          direction: "ttb",
          height: "80vh",
          interval: 2600,
          type: "loop",
        }}
      >
        <SplideSlide>
          <div className="hero-1" >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
                Start your unforgettable Digital journey with us
              </motion.h1>
              <p>The best digital for your bisniss begins now</p>
            </motion.div>
            <div className="contact-hero bg-white w-[80%]   2xl:w-[70%] h-[353px] xl:h-[123px]  sm:h-[103px] mt-[6rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px] ">
              <div  className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Email</label>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Phone</label>
                <div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Company</label>
                <div>
                  <input
                    type="text"
                    name="campany"
                    id="campany"
                    placeholder="Enter your campany ..."
                  />
                </div>
              </div>
              <div className="bg-[#FF7757] text-white h-[100%] rounded-r-[20px] flex items-center gap-[2rem] px-[1.2rem]">
                <button className="rounded-r-[20px] font-judul text-[21px] 2xl:text-[28px] lg:text-[21px]  text-start w-[60%] leading-8">
                  Connect Us
                </button>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="hero-1 bg-[#000]" >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
                Start your unforgettable Digital journey with us
              </motion.h1>
              <p>The best digital for your bisniss begins now</p>
            </motion.div>
            <div className="contact-hero bg-white w-[80%]   2xl:w-[70%] h-[353px] xl:h-[123px]  sm:h-[103px] mt-[6rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px] ">
              <div  className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Email</label>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Phone</label>
                <div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Company</label>
                <div>
                  <input
                    type="text"
                    name="campany"
                    id="campany"
                    placeholder="Enter your campany ..."
                  />
                </div>
              </div>
              <div className="bg-[#FF7757] text-white h-[100%] rounded-r-[20px] flex items-center gap-[2rem] px-[1.2rem]">
                <button className="rounded-r-[20px] font-judul text-[21px] 2xl:text-[28px] lg:text-[21px]  text-start w-[60%] leading-8">
                  Connect Us
                </button>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="hero-1 bg-[#000]" >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
                Start your unforgettable Digital journey with us
              </motion.h1>
              <p>The best digital for your bisniss begins now</p>
            </motion.div>
            <div className="contact-hero bg-white w-[80%]   2xl:w-[70%] h-[353px] xl:h-[123px]  sm:h-[103px] mt-[6rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px] ">
              <div  className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Email</label>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Phone</label>
                <div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Company</label>
                <div>
                  <input
                    type="text"
                    name="campany"
                    id="campany"
                    placeholder="Enter your campany ..."
                  />
                </div>
              </div>
              <div className="bg-[#FF7757] text-white h-[100%] rounded-r-[20px] flex items-center gap-[2rem] px-[1.2rem]">
                <button className="rounded-r-[20px] font-judul text-[21px] 2xl:text-[28px] lg:text-[21px]  text-start w-[60%] leading-8">
                  Connect Us
                </button>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="hero-1 bg-[#000]" >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
                Start your unforgettable Digital journey with us
              </motion.h1>
              <p>The best digital for your bisniss begins now</p>
            </motion.div>
            <div className="contact-hero bg-white w-[80%]   2xl:w-[70%] h-[353px] xl:h-[123px]  sm:h-[103px] mt-[6rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px] ">
              <div  className="input">
                <label for="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Email</label>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Phone</label>
                <div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone ..."
                  />
                </div>
              </div>
              <div className="input">
                <label for="name">Company</label>
                <div>
                  <input
                    type="text"
                    name="campany"
                    id="campany"
                    placeholder="Enter your campany ..."
                  />
                </div>
              </div>
              <div className="bg-[#FF7757] text-white h-[100%] rounded-r-[20px] flex items-center gap-[2rem] px-[1.2rem]">
                <button className="rounded-r-[20px] font-judul text-[21px] 2xl:text-[28px] lg:text-[21px]  text-start w-[60%] leading-8">
                  Connect Us
                </button>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default SwiperHero;
