import React from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import indonesiaGeo from './indonesia-topojson-city-regency.json'; // Pastikan path-nya benar
import Intro from './Intro';

const Milestone = () => {
    return (
       <>
       <Intro/>
         <div className="flex flex-col lg:flex-row items-start p-10 pt-[4rem] pb-5 bg-gray-50  ">
          
            {/* Map Section */}
            <div className="w-[90%]">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 100 }} // Sesuaikan nilai ini
                >
                    <Geographies geography={indonesiaGeo}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: { fill: "#D6D6DA" },
                                        hover: { fill: "#F53" },
                                        pressed: { fill: "#E42" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ComposableMap>
            </div>
              {/* Sidebar Section */}
              <div className="lg:w-1/4 p-5 ">
                <motion.h1
                    className="text-3xl font-bold text-gray-800 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    When we come together, we are unstoppable
                </motion.h1>

                {/* Statistics Section */}
                <div className="flex flex-col space-y-6 mb-16">
                    {[
                        { label: '80%', sub: 'Repeat clients' },
                        { label: '90+', sub: 'Clients' },
                        { label: '900+', sub: 'Projects' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-indigo-600">{item.label}</h2>
                            <p className="text-gray-600">{item.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
       </>
    );
};

export default Milestone;
