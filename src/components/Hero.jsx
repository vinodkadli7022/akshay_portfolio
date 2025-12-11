import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 relative overflow-hidden">

            {/* Background Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-gray-400 font-medium tracking-widest uppercase mb-4 block text-sm">
                        Welcome to my world
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="gradient-text">Akshay G B </span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
                        {profileData.role}
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed">
                        I craft high-performance, beautiful mobile and web applications.
                        Specializing in Flutter and cross-platform development.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a href="#projects" className="btn btn-primary group px-10 py-4 text-lg">
                            View Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn btn-outline px-10 py-4 text-lg">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
