
import Navbar from "../components/Navbar";
import Banner from "../components/aboutus/Banner";
import GlimpseOfAst from "../components/GlimpseOfAst"
import Milestone from "../components/aboutus/Milestone";

const AboutPage = () => {
    // Count words in rawContent

    return (
        <div  className="about">
            <Navbar />
            <Banner />
            <Milestone />
            <div className="py-[4rem]">
                <GlimpseOfAst />
            </div>

            {/* <div className="partner pt-[2rem]">
                <section
                    id="about"
                    className={`${styles.flexCenter} mt-16 sm:flex-row flex-col ${styles.paddingX}`}
                >
                    <motion.div className="flex-1 flex flex-col w-[100%]">
                        <motion.h2 className={styles.heading2}>About Us ya</motion.h2>
                        <motion.div className="w-[150px] line"></motion.div>
                        <motion.p className={`${styles.paragraph} sub-title`}>
                            From Tradition to Technology: Delivering Cutting-Edge Solutions for Over 40 Years
                        </motion.p>
                        <motion.div className="flex md:flex-row flex-col gap-[2.5rem] md:gap-[4.5rem] mt-[1.5rem]">
                            <div className="2xl:w-[530px] lg:w-[430px] lg:h-[430px] xl:w-[460px] xl:h-[480px] xs:w-[209px] s:w-[209px] 2xl:h-[560px]">
                                {getPageAbout._embedded && (
                                    <lottie-player
                                        src="https://lottie.host/08bee924-0f06-4bd0-9592-5ea824aa02d6/ShQaIivvu0.json" background="#fff"
                                        speed="1"
                                        style={{ width: '500px', height: '500px' }} // Ukuran diperbesar
                                        loop
                                        autoplay
                                        direction="1"
                                        mode="normal"
                                    ></lottie-player>
                                )}
                            </div>
                            <div className={`${styles.paragraph} konten text-start sm:text-justify sm:w-[50%] w-[100%]`}>
                                <h2 className="2xl:text-[38px] xl:text-[30px] lg:text-[24px] 2xl:font-medium font-semibold text-[30px] md:mb-5 mb-4 leading-8 xl:leading-10 font-judul text-left">
                                    {getPageAbout.title ? getPageAbout.title.rendered : ''}
                                </h2>
                                <p className="leading-[28px] xl:leading-[32px] 2xl:leading-[38px]">
                                    {parse(displayedContent)}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </div> */}
        </div>

    );
};

export default AboutPage;
