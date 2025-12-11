import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data';

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {profileData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-slate-800/80 transition-colors"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform group-hover:text-indigo-300 shadow-lg shadow-indigo-500/20">
                                <skill.icon size={26} />
                            </div>
                            <h3 className="font-semibold text-lg text-white mb-3">{skill.name}</h3>
                            <div className="w-full bg-slate-700 h-2 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-indigo-500 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-10 text-slate-400">Soft Skills</h3>
                    <div className="flex flex-wrap justify-center gap-5">
                        {profileData.softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="px-8 py-4 glass rounded-full flex items-center gap-3 hover:border-indigo-500 transition-colors text-base"
                            >
                                <skill.icon size={20} className="text-purple-400" />
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
