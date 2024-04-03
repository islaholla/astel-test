import styles, { layout } from "../style";

const Form = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';


  return (
    <section
      id="kontak"
    >
      <h2 className={`${styles.heading2} text-center`}>
        Find Us
      </h2>
      <div className="w-[150px] line mx-auto"></div>
      <div       className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col gap-[2rem] ${styles.paddingX}`}
>
      <div className={` wrap-iframe ${layout.sectionImg}`}>
        <iframe className="w-[100%] h-[100%]" src={map}></iframe>
      </div>
      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[660px] mt-5`}>
        PT ASTEL SISTEM TEKNOLOGI <br />
        Jl. Pintu Air Raya No. 2F Jakarta 10710, Indonesia <br />
        +62213867575

        </p>
        <div className="w-full max-w-lg"></div>
      </div>
      </div>
    </section>
  );
};

export default Form;
