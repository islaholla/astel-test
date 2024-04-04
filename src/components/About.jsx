import styles from "../style";
import arrowUp from "../assets/arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser'

const About = () => {
   const [about,setAbout] =useState([]);

   useEffect(()=>{
    let url = 'https://astelsolution.000webhostapp.com/wp-json/wp/v2/pages?slug=about&&.embed'
    axios.get(url).then((res)=>{
      setAbout(res.data[0])
    })
   },[])
  return (
    <section
      id="about"
      className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
    >
      <div className="flex-1 flex flex-col w-[100%]">
        <h2 className={styles.heading2}> Our Journey</h2>
        <div className="w-[150px] line"></div>
        <p className={`${styles.paragraph} sub-title`}>
          pioneer and innovator in the information technology business
        </p>
        <div className="flex md:flex-row flex-col  gap-[2.5rem]  md:gap-[4.5rem] mt-[1.5rem]">  
          <div className="md:w-[530px] xs:w-[209px] s:w-[209px] md:h-[560px] ">
          {about._embedded ?  <img
                src={about._embedded['wp:featuredmedia']['0'].source_url}
                alt="arrow-up"
                className="w-[100%] h-[100%] object-cover"
              /> :"" }
          </div>
          <div
            className={`${styles.paragraph} konten text-start sm:text-justify sm:w-[50%] w-[100%]`}
          >
            <h2 className="md:text-[38px] text-[30px] md:mb-5 mb-4 leading-8 md:leading-10  font-judul text-left">
             {about.title ? about.title.rendered :''}
            </h2>
            <p className="leading-[32px] md:leading-[38px] ">
             {about.content ? parse( about.content.rendered):''}
            </p>
            <a target="_blank" className="flex items-center gap-[12px]">
              <button className="` text-[#FF7757] `"> Read More</button>
              <img
                src={arrowUp}
                alt="arrow-up"
                className="w-[23px] h-[23px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
