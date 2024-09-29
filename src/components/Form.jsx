import styles, { layout } from "../style";

const Form = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.44909009407!2d106.83109!3d-6.167629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cff4a684a5%3A0xb4b82d6a12353cf9!2sGraha%20Astel!5e0!3m2!1sen!2sus!4v1713705230850!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <section id="kontak">
      <h2 className={`${styles.heading2} text-center`}>Find Us</h2>
      <div className="w-[150px] line mx-auto"></div>
      <div
        className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col gap-[2rem] ${styles.paddingX}`}
      >
        <div className={` wrap-iframe ${layout.sectionImg}`}>
          <iframe className="w-[100%] h-[100%]" src={map} title="Contact Astel" > </iframe>
        </div>
        <div className={layout.sectionInfo}>
          <h1 className={styles.heading3}>Graha ASTEL</h1>
          <p className={`${styles.paragraph} max-w-[660px] mt-5`}>
            PT ASTEL SISTEM TEKNOLOGI <br />
            Jl. Pintu Air Raya No. 2F Jakarta 10710, Indonesia <br />
            +62-21-386-7575 / +62-21-380-4182 <br />astel@unias.com
          </p>
          <div className="w-full max-w-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Form;
