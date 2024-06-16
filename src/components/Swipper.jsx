import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import arrowUp from "../assets/arrow-white.svg";
import {   motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const SwiperHero = ({ slide }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_u7p333a', 'template_87qzy6n',form.current,{
        publicKey: 'mPsQ83Cw6-bBVZYSt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
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
    <div className="bg-[#000]">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          start  : 3,
          autoplay: true,
          speed:800,
          direction: "ttb",
          height: "80vh",
          interval: 2600,
          type: "loop",
        }}
      >
        <SplideSlide>
          <div className="hero-1 " >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
                Start your Forgettable Digital journey with us
              </motion.h1>
              <p>The best digital for your bisniss begins now</p>
            </motion.div>
            <form ref={form} onSubmit={sendEmail} className="contact-hero bg-white w-[80%]   2xl:w-[70%] h-[353px] xl:h-[123px]  sm:h-[103px] mt-[6rem] text-[#000] grid grid-cols-1 sm:grid-cols-5 sm:rounded-r-[20px] md:pl-[6rem] pl-[0] items-center rounded-r-[40px] ">
              <div  className="input">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="phone">Phone</label>
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
                <label htmlFor="name">Company</label>
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
            </form>

          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="hero-1" >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
               Together We Develop The Future
              </motion.h1>
              <p>pioneer and innovator in the Information Technology business</p>
            </motion.div>
            
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="hero-1 " >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
              Astel offers decades of experience 
              </motion.h1>
              <p>help your organization to stay on top of the market trends and strengthening </p>
            </motion.div>

          </div>
        </SplideSlide>
        <SplideSlide>
        <div className="hero-1  " >
            <motion.div className="teks" variants={textVatian} initial = "initial" animate="animate">
              <motion.h1 className="font-judul" variants={textVatian} > 
              Technology and Telecommunication solutions
                            </motion.h1>
              <p>We provide a complete range of technology and telecommunication solutions</p>
            </motion.div>
          
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default SwiperHero;
