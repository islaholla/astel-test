import styles from "../style";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { bisnissPage } from "../redux/action/awardsAction";
import Modal from "./modal/Modal";

const Business = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [konten, setKonten] = useState([]);
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const dispatch = useDispatch();
  const { getPageBisnis } = useSelector((state) => state.AwardsReducer);

  useEffect(() => {
    dispatch(bisnissPage());
  }, [dispatch]);

  return (
    <section id="product" className={`${styles.flexCenter} flex flex-col sm:flex-row sm:px-16 px-6 my-8`}>
      <motion.div className="flex-1 flex flex-col" variants={variants} initial="initial" whileInView="animate">
        <motion.h2 className={`${styles.heading2} text-center`} variants={variants}>
          Our Solutions
        </motion.h2>
        <div className="w-[150px] line mx-auto" />
        <p className={`${styles.paragraph} sub-title text-center`}>
          We specialize in advanced IT solutions, system integration and digital transformation.
          Our solutions include:
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mt-6 mx-auto xl:w-[88%] w-full">
          {getPageBisnis ? getPageBisnis.map((item, index) => (
            <div className="card bg-white p-6 flex flex-col" key={index}>
              <div className="image">
                <img
                  src={item._embedded["wp:featuredmedia"]["0"].source_url}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-5">
                <h3 className="text-lg lg:text-base font-bold text-[#767E86]">
                  {item.title.rendered}
                </h3>
                <div className="text-sm h-[90px] overflow-hidden text-solution bg-warning font-p mt-2">
                  {item.content.rendered.length > 100 ? parse(item.content.rendered.substring(0, 100) + '...') : parse(item.content.rendered)}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setKonten([item.title.rendered, parse(item.content.rendered), item._embedded["wp:featuredmedia"]["0"].source_url]);
                  }}
                  className="bg-[#FF7654] rounded-lg w-md-1/3 w-1/8 text-center py-2 text-sm text-white mt-2"
                >
                  Details
                </button>
              </div>
            </div>
          )) : ''}
        </div>
        {isOpen && <Modal konten={konten[1]} title={konten[0]} image={konten[2]} setIsOpen={setIsOpen} />}
      </motion.div>
    </section>
  );
};

export default Business;
