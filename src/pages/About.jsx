import styles from "../style";
import { useEffect } from "react";
import parse from 'html-react-parser';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { aboutPage } from "../redux/action/awardsAction";
import Navbar from "../components/Navbar";

const AboutPage = () => {
    const dispatch = useDispatch();
    const { getPageAbout } = useSelector((state) => state.AwardsReducer);

    useEffect(() => {
        dispatch(aboutPage());
    }, [dispatch]);

    const rawContent = getPageAbout.content ? getPageAbout.content.rendered : '';
    const content = parse(rawContent);

    // Count words in rawContent
    const wordsArray = typeof rawContent === 'string' ? rawContent.trim().split(/\s+/) : [];
    const wordCount = wordsArray.length;

    // Display only the first 50 words if the content is long
    const isLongContent = wordCount > 50;
    const displayedContent = isLongContent ? wordsArray.slice(0, 50).join(' ') + '...' : rawContent;

    return (
        <>
            <Navbar />
            <section
                id="about"
                className={`${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col ${styles.paddingX}`}
            >
                <motion.div className="flex-1 flex flex-col w-[100%]">
                    <motion.h2 className={styles.heading2}>About Us</motion.h2>
                    <motion.div className="w-[150px] line"></motion.div>
                    <motion.p className={`${styles.paragraph} sub-title`}>
                        From Tradition to Technology: Delivering Cutting-Edge Solutions for Over 40 Years
                    </motion.p>
                    <motion.div className="flex md:flex-row flex-col gap-[2.5rem] md:gap-[4.5rem] mt-[1.5rem]">
                        <div className="2xl:w-[530px] lg:w-[430px] lg:h-[430px] xl:w-[460px] xl:h-[480px] xs:w-[209px] s:w-[209px] 2xl:h-[560px]">
                            {getPageAbout._embedded && (
                                <img
                                    src={getPageAbout._embedded['wp:featuredmedia'][0].source_url}
                                    alt="About Image"
                                    className="w-[100%] h-[100%] object-cover"
                                />
                            )}
                        </div>
                        <div className={`${styles.paragraph} konten text-start sm:text-justify sm:w-[50%] w-[100%]`}>
                            <h2 className="2xl:text-[38px] xl:text-[30px] lg:text-[24px] 2xl:font-medium font-semibold text-[30px] md:mb-5 mb-4 leading-8 xl:leading-10 font-judul text-left">
                                {getPageAbout.title ? getPageAbout.title.rendered : ''}
                            </h2>
                            <p className="leading-[28px] xl:leading-[32px] 2xl:leading-[38px]">
                                {content}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

        </>

    );
};

export default AboutPage;
