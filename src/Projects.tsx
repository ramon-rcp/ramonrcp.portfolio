import React, { Component } from 'react';
import "./global.css"

export class Projects extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            show: "about"
        };
    }

    render() {
        return (
            <section className="projects" id="projects">
            <div className="container">
              <h2 className="projects-title">Projects</h2>
              <div className="projects-grid">
                {this.renderProjectList()}
              </div>
            </div>
          </section>
        );
    }

    renderProjectList = (): React.ReactElement => {
        const projList: React.ReactElement[] = projectsData.map((project, index) => {
            return (
                <div className="project-card" key={index}>
                    <h3 className='project-title'>{project.title}</h3>
                    <p className='project-description'>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='link'>View Project</a>
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
        link: "https://github.com/ramon-rcp/WeddingRsvp/tree/main",
        linkText: "View Github"
    },
    {
        title: "DUET",
        description: "DUET is a Flutter-based app that connects users through shared music interests, offering Spotify-based matching, concert recommendations, and real-time chat via Firebase. It fosters connections through shared experiences.",
        link: "https://github.com/ramon-rcp/DUET",
        linkText: "View Github"
    },
    {
        title: "FlightApp",
        description: "FlightApp is a Java application that provides a search, booking, and management system for flights. The flight information is stored and managed in an SQL database. Developed for CSE 344 coursework.",
        link: "https://github.com/ramon-rcp/FlightApp",
        linkText: "View Github"
    },
    {
        title: "Frogger",
        description: "Simplified version of the classic Frogger game using SystemVerilog and an FPGA development board. The goal is to help a frog safely cross a busy road filled with cars — perfect for training wildlife! Developed for CSE 369 coursework.",
        link: "https://github.com/ramon-rcp/Frogger",
        linkText: "View Github"
    },
    {
        title: "Tic Tac Toe",
        description: "This is a simple Tic Tac Toe game built with React and TypeScript. The game allows a player and an ai to take turns marking the squares in a 3x3 grid with 'X' and 'O'. The first player to align three of their marks horizontally, vertically, or diagonally wins the game",
        link: "https://github.com/ramon-rcp/tictactoe"
    },
    {
        title: "Viking Axe",
        description: "Weathered viking-style axe with engraved design on the blade, leather grip, wooden handle, and an engraved rune on the handle. Made with Maya and Substance Painter.",
        link: "https://sketchfab.com/3d-models/viking-axe-56c388492b71441f844ef3a3e2ca5642",
        linkText: "View Sketchfab"
    },
]