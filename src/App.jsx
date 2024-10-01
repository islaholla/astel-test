import styles from "./style";
import './index.css';
import Testi from "./components/Testi";
import FeedbackCard from "./components/FeedbackCard";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import About from "./components/About";
import CTA from "./components/CTA";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Form from "./components/Form";
import SwiperHero from "./components/Swipper";
import { useDispatch, useSelector } from "react-redux";
import { pageBreak } from "./redux/action/awardsAction";
import Customers from "./components/Customer";
import GlimpseOfAst from "./components/GlimpseOfAst";

const App = () => {
  const dispatch = useDispatch();
  const {getPageBreak } = useSelector(
    (state) => state.AwardsReducer
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Check localStorage for the first load indicator
      const isFirstLoad = localStorage.getItem('isFirstLoad');
  
      if (isFirstLoad === null) {
          // First time loading the app, show preloading
          setIsLoading(true);
          // Set isFirstLoad to false in localStorage
          localStorage.setItem('isFirstLoad', 'false');
      } else {
          // Not the first time loading, no need to show preloading immediately
          setIsLoading(false);
  
          // Set a timeout to hide loading after 5 seconds
          const timer = setTimeout(() => {
              setIsLoading(false);
          }, 5000); // 5000 milliseconds = 5 seconds
  
          return () => clearTimeout(timer); // Clear timeout if component unmounts or on dependency change
      }
  }, []);
  

  useEffect(() => {
    dispatch(pageBreak());
  }, [dispatch]);
  
  return (
    <div className="index">
      <div className=" w-full overflow-hidden relative z-0">
      <Navbar color="text-white"/>
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
          <br />
          <GlimpseOfAst/>
          <CTA paragrap= {getPageBreak[0] ? getPageBreak[0].title.rendered :''} />
          <Business />
          <Billing />
          <CTA paragrap= {getPageBreak[1] ? getPageBreak[1].title.rendered :''} />
          <CardDeal />
          <Testi />
          <Customers/>
          <FeedbackCard />
          <Form />
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
