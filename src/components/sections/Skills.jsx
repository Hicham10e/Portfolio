
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-bg-secondary/30 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 dark:drop-shadow-lg dark:text-white  text-gray-500">
                        Technical <span className="text-gray-500 dark:text-gray-600">Skills</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Tools and technologies I use to build scalable, high-performance ERP solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <skill.icon className="text-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-gray-800 dark:text-white">{skill.name}</h3>
                            <p className="text-sm font-semibold text-gray-500 mb-3">{skill.level}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
