
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 dark:drop-shadow-lg dark:text-white  text-gray-500">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            {personalInfo.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            With a strong background in logic and algorithms, I transitioned into the world of ERP systems to solve real business problems. I love dissecting complex workflows and rebuilding them into streamlined, automated processes using Odoo and Python.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-bg-secondary/50 rounded-lg border-l-4 border-primary">
                                <h3 className="font-bold text-gray-800 dark:text-white text-xl">1+</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-bg-secondary/50 rounded-lg border-l-4 border-secondary">
                                <h3 className="font-bold text-gray-800 dark:text-white text-xl">+2</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-full aspect-square max-w-sm mx-auto">
                            {/* Decorative Card Stack */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-2xl rotate-6 blur-lg"></div>
                            <div className="absolute inset-0 bg-bg-secondary border border-glass-border rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl">
                                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6 text-3xl font-bold text-white">
                                    HM
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Algorithm & Business</h3>
                                <p className="text-gray-600 dark:text-gray-200">Bridging the gap between code and company needs.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
