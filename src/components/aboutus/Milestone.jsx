import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import indonesiaGeo from './indonesia.json'; // Pastikan path-nya benar
import Intro from './Intro';

const Milestone = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);

    useEffect(() => {
        console.log(indonesiaGeo);
    }, []);

    return (
        <>
            <Intro />
            <div className="flex flex-col lg:flex-row items-start p-10 pb-0 bg-gray-50">

                {/* Map Section */}
                <div className="w-full lg:w-3/4 map-container">
                    <ComposableMap
                        projectionConfig={{
                            scale: 800,
                            center: [126, -5],
                        }}
                    >
                        <Geographies geography={indonesiaGeo}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => setSelectedRegion(geo.properties)}
                                        style={{
                                            default: {
                                                fill: "#D6D6DA",
                                                stroke: "#FFFFFF", // Batas
                                                strokeWidth: 0.5,
                                            },
                                            hover: {
                                                fill: "#F53",
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.5,
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.5,
                                            },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>
                    </ComposableMap>
                </div>

                {/* Sidebar Section */}
                <div className="lg:w-1/4 p-5">
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
