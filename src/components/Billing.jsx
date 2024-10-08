import styles from "../style";
import { motion } from "framer-motion";
import { useEffect } from "react";
import parse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import { listPartnerPage, partnerPage } from "../redux/action/awardsAction";

const Billing = ({ subtitle }) => {
  const dispatch = useDispatch();
  const { getPagePartnerList, getPagePartner } = useSelector(
    (state) => state.AwardsReducer
  );
  const extractHref = (htmlContent) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent;
    const anchorElement = tempElement.querySelector('a');
    return anchorElement ? anchorElement.getAttribute('href') : '#';
  };

  useEffect(() => {
    dispatch(partnerPage());
    dispatch(listPartnerPage());
  }, [dispatch]);

  const variants = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 }
    }
  };

  return (
    <section
      id="partner"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingX}`}
    >
      <motion.div variants={variants} initial="initial" whileInView="animate">
        <div className="text-center">
          <h2 className={styles.heading2}>
            {subtitle || (getPagePartner && getPagePartner.title.rendered)}
          </h2>
          <div className="w-[150px] mx-auto line"></div>
          <p className={`${styles.paragraph} sub-title`}>
            {subtitle ? subtitle.subtitle : (getPagePartner && getPagePartner.content ? parse(getPagePartner.content.rendered) : '')}
          </p>
          <div className={`${styles.paragraph} konten`}>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {getPagePartnerList.length > 0 ? (
                getPagePartnerList.map((item, key) => (
                  <div key={key} className="flex justify-center">
                    {
                      <a href={extractHref(item.content.rendered)} target="_blank" rel="noopener noreferrer">
                        <img // Use <img> instead of <image>
                          src={item._embedded['wp:featuredmedia'][0]?.source_url}
                          alt="Image"
                          className="w-full h-auto object-contain"
                        />
                      </a>
                    }
                  </div>
                ))
              ) : (
                <p>No partners available.</p> // Optional: Handle empty state
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
