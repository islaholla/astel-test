import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../style';

const Intro = () => {
    // Variabel animasi
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className={`flex flex-col lg:flex-row bg-white rounded-lg px-10 py-[4rem] shadow-lg gap-3`}>
            {/* Left Section: Text Content */}
            <motion.div
                className="lg:w-1/2 pr-5"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
            >
                <h2 className={`${styles.heading2} text-center`}>Our Journey</h2>
                <div className="w-[150px] line mx-auto"></div>
                <p className={`${styles.paragraph} sub-title text-center`}>
                    From Tradition to Technology: Delivering Cutting-Edge Solutions for Over 40 Years
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Legacy</h3>
                <p className="text-gray-600 mb-2 text-justify">
                    Founded in 1980 as PT Alvarid Mas, our company has a long-standing tradition of excellence and innovation. Over the decades, we have established ourselves as a trusted provider in various sectors including education, financial services, biohealth and biology, logistics and manufacturing, telecommunications, transportation, and public needs service. Our commitment to quality and customer satisfaction has been the cornerstone of our success.
                </p>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Transformation</h3>
                <p className="text-gray-600 text-justify">
                    In 2019, we underwent a significant transformation and rebranded as PT Astel Sistem Teknologi. This change reflects our dedication to evolving with the ever-changing landscape of technology and our focus on delivering cutting-edge solutions to meet modern needs. Our greatest strength lies in our unmatched expertise. With over 40 years of experience, we have developed a deep and comprehensive understanding of advanced IT solutions, systems integration, and technology innovation.
                </p>
            </motion.div>

            {/* Right Section: Image and Highlights */}
            <motion.div
                className="lg:w-1/2 flex flex-col items-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }} // Delay untuk animasi kedua
            >
                <lottie-player
                    src="https://lottie.host/85bae934-1c08-45d3-af0c-b96bc890ea74/CepICbHyCm.json"
                    background="#fff"
                    speed="1"
                    style={{ width: '100%', height: 'auto', maxWidth: '550px' }}
                    loop
                    autoplay
                    direction="1"
                    mode="normal"
                ></lottie-player>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-[-1rem] w-full">
                    {[
                        { title: 'Tradition and Innovation', description: 'Combining reliable practices with new ideas ' },
                        { title: 'Technological Transformation', description: 'Using modern technology to meet today’s needs' },
                        { title: 'Deep IT Expertise', description: 'Bringing strong IT skills to create innovative tech solutions' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-4 rounded-lg text-center shadow"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }} // Delay bertahap untuk setiap item
                        >
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Intro;
