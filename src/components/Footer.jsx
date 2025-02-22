import styles from "../style";
import  logo  from "../assets/logo-astel-white.png";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#172432] text-white ${styles.paddingX}`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-20">
        <div className="flex items-center">
        <img src={logo} alt="astel logo" className="md:w-[300px] w-[150px] object-contain" />
        </div>
        <p className={`${styles.paragraph} text-[14px] xl:text-[14px] mt-4 max-w-[312px] text-white`}>
        Astel strives to design and deliver the right solution to your company.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink,index) => (
          <div key={index} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>
            <h3 className="mt-4">Jl. Pintu Air Raya No. 2F Jakarta 10710, Indonesia (+62213867575 )</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
        Copyright Ⓒ 2024 Astel Solution. All Rights Reserved.
      </p>

{/*       <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div className="wrap-image" key={index}>
            <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;
