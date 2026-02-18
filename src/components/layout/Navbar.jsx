
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const navItem = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 }
};
const navContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={shouldReduceMotion ? undefined : { y: -20, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md py-4 border-b border-glass-border' : 'bg-transparent py-6'}`}
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    HM<span className="text-primary">.</span>
                </a>

                {/* Desktop Menu */}
                <motion.div
                    variants={navContainer}
                    initial={shouldReduceMotion ? undefined : 'hidden'}
                    animate={shouldReduceMotion ? undefined : 'visible'}
                    className="hidden md:flex items-center space-x-8"
                >
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            variants={navItem}
                            whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            className="group text-gray-600 dark:text-gray-300 transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                            <span className="block h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 mt-1 origin-left" aria-hidden />
                        </motion.a>
                    ))} 

                    <motion.a
                        href="#contact"
                        className="btn-talk focus-visible:outline-none"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.04, boxShadow: '0 8px 30px rgba(0,204,255,0.14)' }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        aria-label="Let's talk"
                    >
                        <span>Let&apos;s Talk</span>
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={shouldReduceMotion ? {} : { x: 6 }}
                        >
                            <ArrowRight size={16} />
                        </motion.span>
                    </motion.a>

                    <ThemeToggle />
                </motion.div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-gray-500 dark:text-gray-300 hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-glass-border overflow-hidden"
                    >
                        <motion.div
                            className="flex flex-col p-6 space-y-6"
                            initial={shouldReduceMotion ? undefined : 'hidden'}
                            animate={shouldReduceMotion ? undefined : 'visible'}
                            variants={navContainer}
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    variants={navItem}
                                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                                    className="group text-xl text-gray-600 dark:text-gray-300 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <span className="block h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 mt-1 origin-left" aria-hidden />
                                </motion.a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-glass-border">
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary"><Github size={20} /></a>
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary"><Linkedin size={20} /></a>
                                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary"><Mail size={20} /></a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
