import React, { Component } from "react";
import { Projects } from "./Projects";
import './global.css'
import logo from '../public/logo.png'
import github from '../public/github-mark.png'
import linkedin from '../public/InBug-Black.png'
import resume from '../public/RCP_resume.pdf'
import { Skills } from "./Skills";


export class App extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <body className="app">
                <Header/>
                <Hero />
                <About/>
                <Projects/>
                <Skills/>
                <footer className="footer">
      © 2025 Ramon Costa-Patel. All rights reserved.
    </footer>
            </body>
        )
    }
}

class Header extends Component<{}, {}> {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <a href="#hero" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
                </nav>
            </header>
        );
    }
}


class Hero extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <section className="hero" id="hero">
                <div className="hero-container">
                    <img
                        src={logo}
                        alt="Your profile"
                        className="pfp"
                    />
                    <h1 className="hero-title">Ramon Costa-Patel</h1>
                    <p className="hero-subtitle">Computer Engineer</p>
                    <a href="mailto:ramoncostapatel@gmail.com" className="contact-button">Contact Me</a>
                    <div className="hero-links">
                        <a href="https://github.com/ramon-rcp" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="github-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ramon-roshan-costa-patel-ab88b323b/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="linkedin-icon"/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

class About extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <section className="about" id="about">
            <div className="container">
                <h2 className="about-title">About Me</h2>
                <p>Hi! I’m Ramon Costa-Patel, a Computer Engineering student at the University of Washington with a passion for building impactful software and exploring the edges of tech. Whether I’m deploying Linux labs across campus or designing full-stack apps with React or Flutter, I’m always looking for ways to connect technology with real human experiences.</p>
                <p>Outside of engineering, I’m a huge fan of soccer (Visca el Barça!), love playing basketball, and can get lost in a great video game for hours (such as Elden Ring). I’m especially drawn to the intersection of creativity and logic, whether it’s crafting an intuitive user interface or debugging low-level hardware code.</p>
            </div>
        </section>
        );
    }
}