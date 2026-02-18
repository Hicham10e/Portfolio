
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';

const Projects = () => {
    const shouldReduceMotion = useReducedMotion();

    const headerTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.6 };

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={headerTransition}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 dark:drop-shadow-lg dark:text-white  text-gray-500">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        A selection of my work in ERP customization, API integration, and full-stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                            whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                            className="glass-card flex flex-col h-full group overflow-hidden transition-shadow duration-200 hover:shadow-lg"
                        >
                            <div className="p-8 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider border border-primary/30 px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                    <div className="flex space-x-3">
                                        <a href={project.github} className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"><Github size={20} /></a>
                                        {/* <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a> */}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-3 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-500 dark:text-gray-500 bg-bg-secondary px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
