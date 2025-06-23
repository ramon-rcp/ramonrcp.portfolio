import React, { Component } from 'react';
import "./global.css"
import "./Home.css"
import "./Contact.css"
import { Projects } from './Projects';

type HomeState = {
    show: "about" | "projects" | "contact";
}

export class Home extends Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            show: "about"
        };
    }

    render() {
        let display: React.ReactElement = this.renderAbout();
        switch (this.state.show) {
            case "about":
                display = this.renderAbout();
                break;
            case "projects":
                display = <Projects/>;
                break;
            case "contact":
                display = this.renderContact();
                break;
            default:
                display = this.renderAbout();
        }
        return (
            <div className="home">
                <header className="home-header">
                    <h1>Ramon Costa-Patel</h1>
                    <p className="tagline">Computer Engineer | Problem Solver</p>
                    <nav>
                    <a href="#about" onClick={this.openAbout}>About</a>
                    <a href="#projects" onClick={this.openProjects}>Projects</a>
                    <a href="#contact" onClick={this.openContact}>Contact</a>
                    </nav>
                </header>
                {display}
            </div>
        );
    }

    renderAbout = (): React.ReactElement => {
        return <section className="hero">
            <h2>Welcome to My Portfolio</h2>
            <p>I am a Computer Engineer student at the Paul G. Allen School of Computing.</p>
            <a href="#projects" className="cta-button" onClick={this.openProjects}>View My Work</a>
        </section>
    }

    renderContact = (): React.ReactElement => {
        return <section className="contact">
            <h2>Contacts and Platforms</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/ramon-roshan-costa-patel-ab88b323b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/ramon-rcp" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://sketchfab.com/rmasteryogurtr" target="_blank" rel="noopener noreferrer">Sketchfab</a></li>
                <li><a href="https://play.unity.com/en/user/d68164be-ec02-43d0-a1f7-191e935b1e39" target="_blank" rel="noopener noreferrer">Unity</a></li>
                <li><a href="mailto:ramoncostapatel@gmail.com">Email Me: ramoncostapatel@gmail.com</a></li>
            </ul>
        </section>;
    }

    openProjects = (): void => {
        this.setState({ show: "projects" });
    }

    openContact = (): void => {
        this.setState({ show: "contact" });
    }

    openAbout = (): void => {
        this.setState({ show: "about" });
    }
}