import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll behavior
    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'glass py-4 shadow-lg shadow-indigo-500/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => handleClick(e, '#home')}
                    className="text-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform"
                >
                    <Code2 className="text-indigo-500" size={28} />
                    <span className="gradient-text">Akshay.dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {links.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`relative text-base font-medium transition-all duration-300 group ${isActive
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {/* Animated underline */}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${isActive
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Menu Panel */}
                            <motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 bottom-0 w-[280px] bg-slate-900/98 backdrop-blur-xl border-l border-slate-800 md:hidden shadow-2xl"
                            >
                                {/* Close button */}
                                <div className="flex justify-end p-6">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Menu Links */}
                                <div className="flex flex-col px-6 py-4 space-y-2">
                                    {links.map((link, index) => {
                                        const isActive = activeSection === link.href.substring(1);
                                        return (
                                            <motion.a
                                                key={link.name}
                                                href={link.href}
                                                onClick={(e) => handleClick(e, link.href)}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-all ${isActive
                                                        ? 'text-white bg-indigo-500/20 border-l-4 border-indigo-500'
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {link.name}
                                            </motion.a>
                                        );
                                    })}
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-800">
                                    <p className="text-sm text-gray-500 text-center">
                                        © 2025 Akshay.dev
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
