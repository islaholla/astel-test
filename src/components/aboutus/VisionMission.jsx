import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Visi dan Misi</h2>
      <div className="flex flex-col md:flex-row justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg p-6 m-3 rounded-lg text-center w-80"
        >
          <h3 className="text-2xl font-semibold">Visi</h3>
          <p>Menciptakan solusi IT yang inovatif dan efisien.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg p-6 m-3 rounded-lg text-center w-80"
        >
          <h3 className="text-2xl font-semibold">Misi</h3>
          <p>Memberikan layanan terbaik kepada pelanggan dan berinovasi secara berkelanjutan.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
