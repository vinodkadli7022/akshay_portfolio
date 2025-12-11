import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="bg-slate-900/50">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-8">Educational Journey</h3>
                        <div className="space-y-10">
                            {profileData.education.map((edu, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                            <GraduationCap size={22} />
                                        </div>
                                        {index !== profileData.education.length - 1 && (
                                            <div className="w-0.5 h-full bg-slate-800 my-3 group-hover:bg-slate-700 transition-colors"></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-white mb-2">{edu.institution}</h4>
                                        <p className="text-indigo-400 mb-1">{edu.degree}</p>
                                        <p className="text-slate-500 text-sm">{edu.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Award className="text-indigo-400" size={24} /> My Approach
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                I believe in writing clean, modular code and creating intuitive user experiences.
                                My academic background in Computer Science combined with hands-on project experience
                                enables me to bridge the gap between theory and practical application.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-2xl relative overflow-hidden"
                    >
                        {/* Decorative circles */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

                        <h3 className="text-2xl font-bold mb-8">Details</h3>
                        <ul className="space-y-6">
                            <li className="flex justify-between border-b border-slate-700 pb-4">
                                <span className="text-slate-400 text-base">Name:</span>
                                <span className="text-white text-right font-medium">Akshay G B</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-700 pb-4">
                                <span className="text-slate-400 text-base">Phone:</span>
                                <span className="text-white text-right font-medium">{profileData.contact.phone}</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-700 pb-4">
                                <span className="text-slate-400 text-base">Email:</span>
                                <span className="text-white text-right font-medium">{profileData.contact.email}</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-700 pb-4">
                                <span className="text-slate-400 text-base">Languages:</span>
                                <span className="text-white text-right font-medium">{profileData.languages.join(", ")}</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
