import styles from "./style";
import './index.css';

import Testi from "./components/Testi";
import FeedbackCard from "./components/FeedbackCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Billing from "./components/Billing";
import CTA from "./components/CTA";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SwiperHero from "./components/Swipper";

const App = () => {
  const [breakSection,setBreak] =useState([]);
  useEffect(() => {
    let url =
      "https://astelsolution.000webhostapp.com/wp-json/wp/v2/posts?categories=5";
    axios.get(url).then((res) => {
      setBreak(res.data[0]);
    });
  }, []);
  console.log('ini',breakSection);
  return (
    <div className=" w-full overflow-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth} navbar absolute z-10`}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={` swipperHero ${styles.boxWidth}`}>
          {/* <Hero /> */}
          <SwiperHero />
        </div>
      </div>

      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <About />
          <Billing />
          <CTA paragrap= {breakSection.title ? breakSection.title.rendered :''} />
          <Business />
          <CardDeal />
          <CTA paragrap={breakSection.title ? breakSection.title.rendered :''} />
          <Testi />
          <FeedbackCard />
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
