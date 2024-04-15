import styles from "../style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { awardsList } from "../redux/action/awardsAction";

const CardDeal = () => {
  const dispatch = useDispatch();
  const { getListAwards, getListAwardsLoading } = useSelector(
    (state) => state.AwardsReducer
  );

  useEffect(() => {
    console.log("komponen didmount");
    dispatch(awardsList());
  }, [dispatch]);

  return (
    <section
      id="awards"
      className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col  ${styles.paddingX}`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}> Our Awards</h2>
        <div className="w-[290px] line"></div>
        <p className={`${styles.paragraph} sub-title`}>
          Our quality of service has been accredited by the awards and
          achievements that we attained over the years.
        </p>
        <div className="flex md:grid-cols-4 grid grid-cols-1 gap-[3.5rem] mt-[1.5rem] mx-auto lg:w-[90%] w-[80%] 2xl:w-[80%]">
          {getListAwards
            ? getListAwards?.map((item, key) => {
                return (
                  <div className="card bg-white pt-6 " id={key}>
                    <div className="image">
                      <img
                        src={item._embedded["wp:featuredmedia"]["0"].source_url}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })
            : getListAwardsLoading
            ? "loading"
            : "Data Tidak Tersedia"}
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
