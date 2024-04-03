import styles from "../style";
import Button from "./Button";

const CTA = (teks) => (
  <section className={`${styles.flexCenter} ${styles.padding} sm:flex-row flex-col bg-[#FF7757] text-white text-[32px] box-shadow mt-[8rem]` }>
    <div className="flex-1 flex flex-col">
      <p className={`break mt-5 text-center font-judul` }>
        {teks.paragrap}
      </p>
       <div className={`  sm:mt-8 mt-10`}>
      
    </div>
    </div>

   
  </section>
);

export default CTA;
