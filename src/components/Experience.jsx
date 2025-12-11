import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="max-w-4xl mx-auto">
                    {profileData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-2xl border-l-4 border-indigo-500 relative"
                        >
                            <div className="absolute -left-3 top-10 w-6 h-6 bg-slate-900 border-4 border-indigo-500 rounded-full hidden md:block"></div>

                            <div className="flex flex-col md:flex-row justify-between mb-6 items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
                                        <Briefcase className="text-indigo-400" size={24} />
                                        {exp.company}
                                    </h3>
                                    <p className="text-indigo-400 font-medium text-lg">{exp.role}</p>
                                </div>
                                <span className="px-5 py-2 bg-slate-800 rounded-full text-sm text-slate-300">
                                    {exp.duration}
                                </span>
                            </div>

                            <ul className="space-y-3 mt-6">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-slate-400 flex gap-3 text-base leading-relaxed">
                                        <span className="text-indigo-500 mt-1.5 text-lg">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
