import styles, { layout } from "../style";
import parse from "html-react-parser";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Business = () => {
  const [listSolution, setlistSolution] = useState([]);

  const logResult = useCallback(() => {
    let urlParter =
      "https://astelsolution.000webhostapp.com/wp-json/wp/v2/posts?categories=6&&.embed";
    axios.get(urlParter).then((res) => {
      setlistSolution(res.data);
      console.log("the list", listSolution);
    });
  }, [setlistSolution]);

  useEffect(() => {
    logResult();
  }, [logResult]);

  console.log(listSolution);
  return (
    <section
      id="product"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col sm:px-16 px-6  ${styles.paddingX}`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-center`}>
          Our Business & Solutions
        </h2>
        <div className="w-[150px] line mx-auto"></div>
        <p className={`${styles.paragraph} sub-title text-center`}>
          Check out our special offer and discounts
        </p>
        <div className="flex md:grid-cols-3 grid grid-cols-1 gap-[2.5rem] mt-[1.5rem] mx-auto xl:w-[88%] w-[100%]">
          {listSolution?.map((item, key) => {
            return (
              <div className="card bg-white pt-6 " id={key}>
                <div className="image">
                  <img
                    src={item._embedded["wp:featuredmedia"]["0"].source_url}
                    alt=""
                  />
                </div>
                <div className="p-6 grid px-8">
                  <h3 className="text-[21px] lg:text-[18px] font-bold text-[#767E86]">
                    {item.title.rendered}
                  </h3>
                  <p className="text-[14px] font-p">
                    {parse(item.content.rendered)}
                  </p>
                  <button className="bg-[#FF7654] rounded-lg w-[30%] text-center py-[4px] text-[14px] text-white mt-2 justify-self-end">
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Business;
