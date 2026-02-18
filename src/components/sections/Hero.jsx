import React, { useEffect, useState } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const container = { visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

const useTypewriter = (words = [], speed = 80, pause = 2000) => {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!words.length) return;
        const current = words[index % words.length];
        let timeout;

        if (!deleting) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length + 1));
                if (displayed.length + 1 === current.length) {
                    setTimeout(() => setDeleting(true), pause);
                }
            }, speed);
        } else {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length - 1));
                if (displayed.length - 1 === 0) {
                    setDeleting(false);
                    setIndex((i) => i + 1);
                }
            }, speed / 2);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, index, pause, speed, words]);

    return displayed;
};

const Hero = () => {
    const shouldReduceMotion = useReducedMotion();

    const roles = personalInfo.role ? personalInfo.role.split('|').map((r) => r.trim()) : [personalInfo.role];
    const typed = useTypewriter(roles, 80, 1800);

    // Layout: Info column + Image column (no slider needed)
    const [chevronClicked, setChevronClicked] = useState(false);

    const handleChevronClick = (e) => {
        e.preventDefault();
        // Smooth scroll to about
        const target = document.getElementById('about');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Briefly highlight the section (longer duration)
            target.classList.add('ring-4', 'ring-primary/30', 'transition-all');
            setTimeout(() => {
                target.classList.remove('ring-4', 'ring-primary/30', 'transition-all');
            }, 2000);
        }

        // Play a quick chevron animation
        setChevronClicked(true);
        setTimeout(() => setChevronClicked(false), 700);
    };

    const floatTransition = shouldReduceMotion
        ? { duration: 0 }
        : { duration: 20, repeat: Infinity, ease: 'linear' };

    const sectionTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.8 };

    return (
        <Motion.section initial="hidden" animate="visible" variants={container} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Abstract Floating Shapes Background */}
            <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
                <Motion.div
                    animate={shouldReduceMotion ? undefined : { rotate: 360, y: [0, -20, 0] }}
                    transition={floatTransition}
                    className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
                    aria-hidden
                />
                <Motion.div
                    animate={shouldReduceMotion ? undefined : { rotate: -360, x: [0, 30, 0] }}
                    transition={floatTransition}
                    className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl"
                    aria-hidden
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Hero columns: Info + Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Info Column */}
                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={sectionTransition}
                        className="text-center md:text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-glass border border-glass-border text-primary text-sm font-medium tracking-wide mb-6">
                            Welcome to the future of ERP
                        </span>

                        <Motion.h1 variants={item} className="text-3xl md:text-5xl lg:text-7xl font-heading font-semibold mb-6 tracking-tight dark:drop-shadow-lg text-gray-500 dark:text-gray-100">
                            Hi, I'm <span className="text-gradient drop-shadow-lg">{personalInfo.name}</span>
                        </Motion.h1>

                        <Motion.p variants={item} className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-light mb-8 max-w-3xl" aria-live="polite">
                            {typed}
                            <span className="ml-1 inline-block w-1 h-6 align-middle bg-gray-500 dark:bg-gray-200 animate-pulse" aria-hidden />
                        </Motion.p>

                        <Motion.p variants={item} className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                            {personalInfo.subtitle}
                        </Motion.p>

                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                            <Motion.a
                                href="#projects"
                                className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(0,204,255,0.4)] transition-all flex items-center"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            >
                                View Projects <ArrowRight size={18} className="ml-2" />
                            </Motion.a>
                            <Motion.a
                                href="#contact"
                                className="px-8 py-3 bg-glass border border-glass-border text-gray-800 dark:text-white font-semibold rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            >
                                Contact Me
                            </Motion.a>
                        </div>
                    </Motion.div>

                    {/* Image Column */}
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={sectionTransition}
                        className="flex flex-col items-center justify-center"
                    >
                        <img src={personalInfo.avatar} alt={`${personalInfo.name} avatar`} className="w-80 md:w-96 lg:w-[28rem] rounded-xl shadow-2xl" />
                        {/* <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-xs text-center md:text-left">{personalInfo.description}</p> */}
                    </Motion.div>
                </div>

            </div>

            {/* Scroll Down Indicator (links to #about) */}
            <Motion.a
                href="#about"
                aria-label="Scroll to About"
                onClick={handleChevronClick}
                animate={chevronClicked ? { y: [0, -14, 0], rotate: [0, -8, 0], scale: [1, 1.06, 1] } : (shouldReduceMotion ? undefined : { y: [0, 10, 0] })}
                transition={chevronClicked ? { duration: 0.7, ease: 'easeOut' } : (shouldReduceMotion ? { duration: 0 } : { duration: 2, repeat: Infinity })}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 cursor-pointer"
            >
                <ChevronDown size={32} />
            </Motion.a> 
        </Motion.section>
    );
};

export default Hero;
