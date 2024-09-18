import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../style";

const ExpertiseCard = ({ title, description, detail, image, isActive, onClick }) => (
  <motion.div
    className={`bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${isActive ? 'w-full h-auto p-6' : 'w-80 h-auto mb-4 p-4'}`}
    onClick={onClick}
    initial={{ scale: 0.95 }}
    animate={{ scale: isActive ? 1.05 : 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.15 }}
  >
    <img src={image} alt={title} className={`w-full h-48 object-cover mb-4 ${isActive ? '' : 'rounded-lg'}`} />
    <h3 className={`text-${isActive ? '3xl' : '2xl'} font-bold`}>{title}</h3>
    <div className={`text-gray-700 ${isActive ? 'mt-2' : 'truncate'}`}>
      {isActive ? detail : description}
    </div>
  </motion.div>
);

const GlimpseOfAst = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const cards = [
    {
      title: 'Unmatched Expertise',
      description: 'What Sets Our Expertise Apart: Deep Industry Knowledge.',
      detail: (
        <div>
          <p>What Sets Our Expertise Apart:</p>
          <ul className="list-disc ml-6">
            <li><strong>Deep Industry Knowledge:</strong> Our team is composed of seasoned professionals with extensive experience in digital transformation, software development, and tech consulting. This wealth of knowledge allows us to navigate complex challenges and offer insightful solutions tailored to our clients' unique needs.</li>
            <li><strong>Innovative Approach:</strong> Our expertise enables us to integrate cutting-edge solutions and deliver innovative results that keep our clients competitive and future-ready.</li>
            <li><strong>Proven Success:</strong> We have successfully executed 400+ projects across various sectors.</li>
            <li><strong>Continuous Improvement:</strong> We are dedicated to advance training and development to ensure that our skills and knowledge remain at the forefront of the industry.</li>
          </ul>
          <p>By leveraging our deep expertise, PT Astel Sistem Teknologi transforms challenges into opportunities and drives excellence in every project we undertake. Partner with us to experience the advantage of working with a team that truly understands and excels in delivering top-tier solutions.</p>
        </div>
      ),
       image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Strategic Partnerships',
      description: 'We maintain strong relationships with key technology players...',
      detail: 'We maintain strong relationships with key technology players while actively seeking collaboration with digital disruptors. This unique blend of partnerships allows us to offer a wide spectrum of solutions, leveraging the latest innovations and maintaining our status as a trusted technology advisor.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Experienced Sales Team',
      description: 'What Makes Our Sales Team Exceptional: Industry Expertise.',
      detail: (
        <div>
          <p>What Makes Our Sales Team Exceptional:</p>
          <ul className="list-disc ml-6">
            <li><strong>Industry Expertise:</strong> Our sales team is composed of seasoned professionals with extensive experience in technology solutions and IT services. They possess a deep understanding of market trends, customer requirements, and competitive dynamics, allowing them to provide valuable insights and tailored recommendations.</li>
            <li><strong>Client-Centric Approach:</strong> Our sales team is committed to understanding each client's unique challenges and goals, ensuring solutions that meet their needs.</li>
            <li><strong>Proven Success:</strong> With a track record of 50+ successful deals and satisfied clients, their expertise in managing complex sales processes and negotiations ensures a smooth and effective experience for our clients.</li>
            <li><strong>Strategic Guidance:</strong> They provide strategic guidance and support throughout the decision-making process, helping clients make informed choices and achieve their business goals.</li>
            <li><strong>Commitment to Excellence:</strong> We are committed to continuous improvement. Our sales team regularly undergoes training to stay updated with industry advancements and best practices.</li>
          </ul>
          <p>By choosing PT Astel System Teknologi, you benefit from a sales team that not only understands your needs but is also equipped to deliver exceptional service and results. Our experienced sales professionals are here to guide you through every step of the process and ensure your success.</p>
        </div>
      ),
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const handleCardClick = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-[4rem]">
      <h2 className={styles.heading2}>Glimpse of AST</h2>
      <div className="w-[150px] line mb-6"></div>

      <div className="flex flex-col-reverse items-center">
        {activeCardIndex === null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <ExpertiseCard
                key={index}
                {...card}
                isActive={false}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="w-full mb-4">
              <ExpertiseCard
                {...cards[activeCardIndex]}
                isActive={true}
                onClick={() => handleCardClick(activeCardIndex)}
              />
            </div>
            <div className="flex gap-4 mb-4">
              {cards.map((card, index) => (
                activeCardIndex !== index && (
                  <div
                    key={index}
                    className="cursor-pointer hover:text-[#ff7757] hover:underline"
                    onClick={() => handleCardClick(index)}
                  >
                    <h3 className="text-2xl">{card.title}</h3>
                  </div>
                )
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GlimpseOfAst;
