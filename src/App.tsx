import React, { Component } from "react";
import { Projects } from "./Projects";
import './global.css'
import logo from '../public/headshot.png'
import github from '../public/github-mark.png'
import linkedin from '../public/InBug-Black.png'
import resume from '../public/Ramon_Costa_Resume.pdf'
import headshot from '../public/headshot.png'
import { Skills } from "./Skills";
import { Courses } from "./Courses";


export class App extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="min-h-screen">
                <Header/>
                <Hero />
                <Projects/>
                <Skills/>
                <Resume/>
                <Courses/>
                <footer className="footer">
      © 2025 Ramon Costa-Patel. All rights reserved.
    </footer>
            </div>
        )
    }
}

class Header extends Component<{}, {}> {
    render() {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 bg-[#3182ce] rounded-lg flex items-center justify-center text-white font-bold">
                      R
                    </span>
                    <span className="font-bold text-xl tracking-tight text-[#2d3748]">
                      RC
                    </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-10">
                    <a href="#hero" className="text-sm font-medium hover:text-[#3182ce] transition-colors">
                      Home
                    </a>
                    <a href="#projects" className="text-sm font-medium hover:text-[#3182ce] transition-colors">
                      Projects
                    </a>
                    <a href="#skills" className="text-sm font-medium hover:text-[#3182ce] transition-colors">
                      Skills
                    </a>
                    <a href="#resume" className="text-sm font-medium hover:text-[#3182ce] transition-colors">
                      Resume
                    </a>
                    <a href="#courses" className="text-sm font-medium hover:text-[#3182ce] transition-colors">
                      Courses
                    </a>
                    <a href="#contact" className="text-sm font-medium hover:text-[#3182ce] transition-colors">
                      Contact
                    </a>
                    </div>
                </div>
            </nav>
        );
    }
}


class Hero extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <section id="hero" className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                    <img src={headshot} alt="Ramon Costa" className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-xl object-cover bg-white"/>
                    </div>
                </div>

                <div className="w-full lg:w-3/5 text-center lg:text-left">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#3182ce] text-sm font-semibold tracking-wide mb-6 uppercase">
                    Open to New Opportunities
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-[#2d3748]">
                    Hi, I'm <span className="text-[#3182ce]">Ramon Costa</span>
                    </h1>
                    <p className="text-xl text-[#718096] mb-10 max-w-2xl leading-relaxed">
                    (dis is so long lol) Hi! I’m Ramon Costa-Patel, a recent Computer Engineering graduate at the University of Washington with a passion for building impactful software and exploring the edges of tech. Whether I’m deploying Linux labs across campus or designing full-stack apps with React or Flutter, I’m always looking for ways to connect technology with real human experiences.
                    Outside of engineering, I’m a huge fan of soccer (Visca el Barça!), love playing basketball, and can get lost in a great video game for hours (such as Elden Ring). I’m especially drawn to the intersection of creativity and logic, whether it’s crafting an intuitive user interface or debugging low-level hardware code.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <a href="#projects" className="bg-[#3182ce] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#2b6cb0] transition-custom shadow-lg shadow-blue-500/20">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-md font-semibold text-lg border-2 border-gray-200 hover:border-[#3182ce] hover:text-[#3182ce] transition-custom">
                        Let's Connect
                    </a>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

class Resume extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <section id="resume" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#2d3748]">My Resume</h2>
                <p className="text-[#718096] max-w-2xl mx-auto text-lg mb-10">
                    For a detailed overview of my professional experience and education, please view my full resume below.
                </p>
                <div className="flex flex-col items-center">
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-[#3182ce] text-white rounded-md font-bold text-lg hover:bg-[#2b6cb0] transition-custom shadow-lg shadow-blue-500/10">
                    <iconify-icon icon="lucide:external-link" className="mr-2"></iconify-icon>
                    View Resume
                    </a>
                    <p className="mt-4 text-xs text-[#718096] font-medium">
                    Last updated: June 2026
                    </p>
                </div>
                </div>
            </section>
        )
    }
}