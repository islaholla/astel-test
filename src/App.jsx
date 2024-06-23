import styles from "./style";
import './index.css';
import Testi from "./components/Testi";
import FeedbackCard from "./components/FeedbackCard";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Billing from "./components/Billing";
import CTA from "./components/CTA";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SwiperHero from "./components/Swipper";
import PreLoader from "./components/loading/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import { pageBreak } from "./redux/action/awardsAction";
const App = () => {
  const dispatch = useDispatch();
  const {getPageBreak } = useSelector(
    (state) => state.AwardsReducer
  );
  useEffect(() => {
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
      </div>
    </div>
  );
};

export default App;
