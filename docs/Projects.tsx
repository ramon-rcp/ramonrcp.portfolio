import React, { Component } from 'react';
import "./global.css"
import "./Projects.css";

export class Projects extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            show: "about"
        };
    }

    render() {
        return (
            <div className="projects">
                <header className="projects-header">
                    <h1>Projects</h1>
                    <p className="tagline">A showcase of my work</p>
                </header>
                {this.renderProjectList()}
            </div>
        );
    }

    renderProjectList = (): React.ReactElement => {
        const projList: React.ReactElement[] = projectsData.map((project, index) => {
            return (
                <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            );
        })
        return <div className='projects-grid'>
            {projList}
        </div>
    }
}


const projectsData = [
    {
        title: "WeddingApp",
        description: "This is a client-server web app for managing wedding RSVPs, featuring guest list management, detailed guest info, and persistent data storage. Developed for CSE 331 coursework.",
        link: "https://github.com/ramon-rcp/WeddingRsvp/tree/main"
    },
    {
        title: "DUET",
        description: "DUET is a Flutter-based app that connects users through shared music interests, offering Spotify-based matching, concert recommendations, and real-time chat via Firebase. It fosters connections through shared experiences.",
        link: "https://github.com/ramon-rcp/DUET"
    },
    {
        title: "FlightApp",
        description: "FlightApp is a Java application that provides a search, booking, and management system for flights. The flight information is stored and managed in an SQL database. Developed for CSE 344 coursework.",
        link: "https://github.com/ramon-rcp/FlightApp"
    },
    {
        title: "Viking Axe",
        description: "Weathered viking-style axe with engraved design on the blade, leather grip, wooden handle, and an engraved rune on the handle. Made with Maya and Substance Painter.",
        link: "https://sketchfab.com/3d-models/viking-axe-56c388492b71441f844ef3a3e2ca5642"
    }
]