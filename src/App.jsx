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
import wa from './assets/whatsapp (2).png'
import PreLoader from "./components/loading/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import { pageBreak } from "./redux/action/awardsAction";
const App = () => {
  const [breakSection,setBreak] =useState([]);
  const dispatch = useDispatch();
  const {getPageBreak } = useSelector(
    (state) => state.AwardsReducer
  );

  useEffect(() => {
    let url =
      "https://astelsolution.000webhostapp.com/wp-json/wp/v2/posts?categories=5";
    axios.get(url).then((res) => {
      setBreak(res.data[0]);
    });
    dispatch(pageBreak());
  }, [dispatch]);
  return (
    <div className="index">
      <div className="loading">
        <PreLoader/>
      </div>
      <div className=" w-full overflow-hidden relative z-0">
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
          <CTA paragrap= {getPageBreak[0] ? getPageBreak[0].title.rendered :''} />
          <Business />
          <CardDeal />
          <CTA paragrap= {getPageBreak[1] ? getPageBreak[1].title.rendered :''} />
          <Testi />
          <FeedbackCard />
          <Form />
          <Footer />
        </div>
      </div>

      {/* kontak */}
      <div className="whatsapp">
        <img src={wa} alt="" />
      </div>
      </div>
    </div>
  );
};

export default App;
