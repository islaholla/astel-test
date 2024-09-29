import styles from "../style";
// Import Swiper styles
import { motion } from "framer-motion"

import "swiper/css";
import "swiper/css/navigation";

const FeedbackCard = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        straggerChildren: 0.1
      }
    }
  }
  return (
    <section
      id="endSection"
      className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
    >
        <motion.h1 variants={variants} initial="initial" whileInView="animate"
          className={`${styles.paragraph} konten bg-[] w-[100%] absolute`}
        >
          <span className="pb-4 color-[#000]">Explore  ASTEL  <br /></span>
          can transform your business with our comprehensive range of technology and telecommunication solutions
        </motion.h1>
    </section>
  );

}


export default FeedbackCard;
