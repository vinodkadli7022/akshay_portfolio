import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="bg-slate-900/50">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {profileData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                        <project.icon size={28} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                            <Github size={22} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-slate-400 mb-6 min-h-[60px] text-base leading-relaxed">{project.description}</p>

                                <p className="text-slate-300 text-base mb-6 bg-slate-800/50 p-5 rounded-lg leading-relaxed">
                                    {project.details}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-800 text-sm font-medium text-indigo-300 rounded-full border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
