import styles from "../style";
import image from "../assets/lintas.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { custPage } from "../redux/action/awardsAction";
import parse from 'html-react-parser'

const Testi = () => {
  const dispatch = useDispatch();
  const { getPageCust, getPageCustLoading } = useSelector(
    (state) => state.AwardsReducer
  );

  useEffect(() => {
    // paggil
    console.log("komponen didmount",getPageCust);
    dispatch(custPage());
  }, [dispatch]);

    return (
      <section
    id="testi"
    className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}> Customer Experiences</h2>
      <div className="w-[290px] line"></div>
      <p className={`${styles.paragraph} sub-title`}>
      {getPageCust[0] ? getPageCust[0].title.rendered : 'loading'}
      </p>
      <div className="flex md:grid-cols-2 grid grid-cols-1 mt-[1.5rem] mx-auto w-[100%]">
        <div className=" pt-6 ">
          <div className="image w-[300px] sm:w-[440px]" >
            <img src={getPageCust ? getPageCust[0]._embedded['wp:featuredmedia']['0'].source_url : ''} alt="" />   </div>
        </div>
        <div className="  pt-6 flex items-center">
          <p className={`${styles.paragraph}`}>
          {getPageCust[0] ? parse(getPageCust[0].content.rendered) : 'loading'}
          </p>
        </div>
      </div>
    </div>
       </section>
  );
};

export default Testi;
