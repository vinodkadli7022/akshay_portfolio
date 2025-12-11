import React from 'react';
import { profileData } from '../data';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-slate-900 pt-20 pb-10">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <h3 className="text-3xl font-bold text-white mb-8">Let's Talk</h3>
                        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-5 text-slate-300 hover:text-indigo-400 transition-colors group">
                                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Email Me</p>
                                    <p className="font-medium text-base">{profileData.contact.email}</p>
                                </div>
                            </a>

                            <a href={`tel:${profileData.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-5 text-slate-300 hover:text-indigo-400 transition-colors group">
                                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Call Me</p>
                                    <p className="font-medium text-base">{profileData.contact.phone}</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-5 mt-10 pt-10 border-t border-slate-800">
                            <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors">
                                <Linkedin size={22} />
                            </a>
                            <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-white hover:text-black transition-colors">
                                <Github size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="glass p-10 rounded-2xl space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-400">Your Name</label>
                            <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white" placeholder="John Doe" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-400">Email Address</label>
                            <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-400">Message</label>
                            <textarea rows="5" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
                        </div>
                        <button className="w-full btn btn-primary justify-center text-base">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

                {/* Enhanced Footer */}
                <div className="mt-24 pt-12 border-t border-slate-800">
                    <div className="text-center space-y-6">

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                        </div>

                        {/* Copyright */}
                        <p className="text-lg font-medium">
                            <span className="text-slate-400">© {new Date().getFullYear()} </span>

                            <a
                                href="https://vinodkumarportfolio.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-text font-bold hover:underline"
                            >
                                kadli_vinod
                            </a>

                            <span className="text-slate-400">. All rights reserved.</span>
                        </p>

                        <p className="text-slate-500 text-sm">
                            Crafted with <span className="text-red-400">♥</span> and <span className="text-indigo-400">code</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
