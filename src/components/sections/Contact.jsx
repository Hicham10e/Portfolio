import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import emailjs from '@emailjs/browser';

// Email form component using EmailJS (client-side)
const EmailForm = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS env vars missing');
            setStatus('error');
            return;
        }

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setStatus('success');
            formRef.current.reset();
        } catch (err) {
            console.error('Email send error:', err);
            setStatus('error');
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Name</label>
                <input name="name" type="text" className="w-full bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Email</label>
                <input name="email" type="email" className="w-full bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2">
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>

            {status === 'success' && <p className="text-sm text-green-600">Message sent — I'll get back to you soon ✅</p>}
            {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Try again or email me directly.</p>}
        </form>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 dark:drop-shadow-lg dark:text-white  text-gray-500">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            Interested in optimizing your business processes with Odoo? Have a project in mind? Let's discuss how we can build something great together.
                        </p>

                        <div className="space-y-4">
                            <a href={personalInfo.social.email} className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200">mamadoheffaf@gmail.com</p>
                                </div>
                            </a>

                            <a href={personalInfo.social.linkedin} className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">LinkedIn</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200">Connect Professionally</p>
                                </div>
                            </a>

                            <a href={personalInfo.social.github} className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-gray-800 dark:text-white">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">GitHub</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200">Check my Code</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <EmailForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
