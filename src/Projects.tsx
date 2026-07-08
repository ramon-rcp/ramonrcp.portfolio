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
            <section id="projects" className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2d3748]">Featured Projects</h2>
                        <p className="text-[#718096] max-w-2xl mx-auto text-lg">A selection of my recent projects.</p>
                    </div>
                    {this.renderProjectList()}
                </div>
          </section>
        );
    }

    renderProjectList = (): React.ReactElement => {
        const projList: React.ReactElement[] = projectsData.map((project, index) => {
            return (
                <div key={index} className="project-card bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
                    <div className="p-8 flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-[#2d3748]">{project.title}</h3>
                        <p className="text-[#718096] mb-6 line-clamp-none leading-relaxed">{project.description}</p>
                        {this.renderSkillsList(project.skills || [])}
                        <a href={project.link} className="inline-flex items-center text-[#3182ce] font-bold hover:underline">
                            {project.linkText}
                            <iconify-icon icon="lucide:external-link" className="ml-2 text-sm"></iconify-icon>
                        </a>
                    </div>
                </div>
            );
        })
        return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projList}
        </div>
    }

    renderSkillsList = (skills: string[]): React.ReactElement => {
        return (
            <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                    <span key={index} className="px-2.5 py-1 bg-gray-50 text-xs font-medium text-gray-600 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        );
    }
}


const projectsData = [
    {
        title: "Tic Tac Toe",
        description: "This is a simple Tic Tac Toe game built with React and TypeScript. The game allows a player and an ai to take turns marking the squares in a 3x3 grid with 'X' and 'O'. The first player to align three of their marks horizontally, vertically, or diagonally wins the game",
        link: "https://github.com/ramon-rcp/tictactoe",
        linkText: "Github Repository",
        skills: ["React", "Typescript", "CSS", "Python", "FastAPI", "AI"]
    },
    {
        title: "Hearth & Horde Lockdown",
        description: "Hearth & Horde Lockdown is an AR/VR wave-defense survival game where players can change their space in their very own home base. With fast paced combat and base building management, the game helps players learn how to arrange, defend, and upgrade spaces to survive. Developed for CSE 481 coursework.",
        link: "https://youtu.be/Tbk7C_Mrjfs?si=NIL5qhd23fv9KjXI",
        linkText: "Gameplay",
        skills: ["Unity", "C#", "Meta Oculus", "VR", "AR"]
    },
    {
        title: "DUET",
        description: "DUET is a Flutter-based app that connects users through shared music interests, offering Spotify-based matching, concert recommendations, and real-time chat via Firebase. It fosters connections through shared experiences. Developed for CSE 403 coursework.",
        link: "https://github.com/ramon-rcp/DUET",
        linkText: "Github Repository",
        skills: ["Flutter", "Dart", "Firebase"]
    },
    {
        title: "FlightApp",
        description: "FlightApp is a Java application that provides a search, booking, and management system for flights. The flight information is stored and managed in an SQL database. Developed for CSE 344 coursework.",
        link: "https://github.com/ramon-rcp/FlightApp",
        linkText: "Github Repository",
        skills: ["Java", "SQL"]
    },
    {
        title: "WeddingApp",
        description: "This is a client-server web app for managing wedding RSVPs, featuring guest list management, detailed guest info, and persistent data storage. Developed for CSE 331 coursework.",
        link: "https://github.com/ramon-rcp/WeddingRsvp/tree/main",
        linkText: "Github Repository",
        skills: ["React", "Typescript"]
    },
    {
        title: "Frogger",
        description: "Simplified version of the classic Frogger game using SystemVerilog and an FPGA development board. The goal is to help a frog safely cross a busy road filled with cars — perfect for training wildlife! Developed for CSE 369 coursework.",
        link: "https://github.com/ramon-rcp/Frogger",
        linkText: "Github Repository",
        skills: ["SystemVerilog", "FPGA"]
    },
    {
        title: "Viking Axe",
        description: "Weathered viking-style axe with engraved design on the blade, leather grip, wooden handle, and an engraved rune on the handle. Made with Maya and Substance Painter.",
        link: "https://sketchfab.com/3d-models/viking-axe-56c388492b71441f844ef3a3e2ca5642",
        linkText: "Sketchfab Model",
        skills: ["Blender", "Maya", "Substance Painter"]
    },
]