
import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-bg-secondary/20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 dark:drop-shadow-lg dark:text-white  text-gray-500">
                        Professional <span className="text-secondary">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border -translate-x-1/2 hidden md:block" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timestamp for desktop - opposite side */}
                            <div className="hidden md:block w-5/12 text-right">
                                <span className={`text-sm font-bold text-gray-500 block mb-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                    {exp.period}
                                </span>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-bg border border-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                                <Briefcase size={14} className="text-primary" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-5/12">
                                <div className="glass-card p-6 hover:border-secondary/50 transition-colors">
                                    <span className="md:hidden text-xs font-bold text-gray-500 mb-2 block">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-primary text-sm font-medium mb-3">{exp.company}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
