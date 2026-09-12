import React, { Component } from 'react';
import "./global.css"

type Project = {
    title: string;
    description: string;
    link: string;
    linkText: string;
    skills: string[];
    featured?: boolean;
};

type ProjectsState = {
    selectedSkill: string | null;
};

export class Projects extends Component<{}, ProjectsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedSkill: null
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
                    {this.renderFilterBar()}
                    {this.state.selectedSkill === null && this.renderFeaturedProject()}
                    {this.renderProjectList()}
                </div>
          </section>
        );
    }

    getAllSkills = (): string[] => {
        const counts = new Map<string, number>();
        projectsData.forEach((project) => (project.skills || []).forEach((skill) => counts.set(skill, (counts.get(skill) || 0) + 1)));
        return Array.from(counts.entries())
            .filter((entry) => entry[1] >= 2)
            .map((entry) => entry[0])
            .sort();
    }

    renderFilterBar = (): React.ReactElement => {
        const pillClass = (active: boolean) =>
            `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${active ? "bg-[#3182ce] text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`;
        return (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                <button className={pillClass(this.state.selectedSkill === null)} onClick={() => this.setState({ selectedSkill: null })}>
                    All
                </button>
                {this.getAllSkills().map((skill) => (
                    <button key={skill} className={pillClass(this.state.selectedSkill === skill)} onClick={() => this.setState({ selectedSkill: skill })}>
                        {skill}
                    </button>
                ))}
            </div>
        );
    }

    renderProjectCard = (project: Project, index: number, featured?: boolean): React.ReactElement => {
        return (
            <div key={index} className={`project-card bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col ${featured ? "border-[#3182ce]/30 shadow-md" : ""}`}>
                <div className="p-8 flex-grow">
                    {featured && (
                        <span className="inline-block mb-3 px-2.5 py-1 bg-[#3182ce]/10 text-[#3182ce] text-xs font-bold uppercase tracking-wide rounded">
                            Featured
                        </span>
                    )}
                    <h3 className={`font-bold mb-3 text-[#2d3748] ${featured ? "text-2xl" : "text-xl"}`}>{project.title}</h3>
                    <p className="text-[#718096] mb-6 line-clamp-none leading-relaxed">{project.description}</p>
                    {this.renderSkillsList(project.skills || [])}
                    <a href={project.link} className="inline-flex items-center text-[#3182ce] font-bold hover:underline">
                        {project.linkText}
                        <iconify-icon icon="lucide:external-link" className="ml-2 text-sm"></iconify-icon>
                    </a>
                </div>
            </div>
        );
    }

    renderFeaturedProject = (): React.ReactElement | null => {
        const featuredIndex = projectsData.findIndex((project) => project.featured);
        if (featuredIndex === -1) {
            return null;
        }
        return (
            <div className="mb-8">
                {this.renderProjectCard(projectsData[featuredIndex], featuredIndex, true)}
            </div>
        );
    }

    renderProjectList = (): React.ReactElement => {
        const selectedSkill = this.state.selectedSkill;
        const visibleProjects = projectsData
            .map((project, index) => ({ project, index }))
            .filter((entry) => (selectedSkill === null ? !entry.project.featured : (entry.project.skills || []).includes(selectedSkill)));

        return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((entry) => this.renderProjectCard(entry.project, entry.index))}
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


const projectsData: Project[] = [
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
        title: "Desert Mouse",
        description: "This is a simple Tic Tac Toe game built with React and TypeScript. The game allows a player and an ai to take turns marking the squares in a 3x3 grid with 'X' and 'O'. The first player to align three of their marks horizontally, vertically, or diagonally wins the game",
        link: "https://github.com/ramon-rcp/tictactoe",
        linkText: "View Game",
        skills: ["Unity", "C#", "Claude Code"]
    },
    {
        title: "DUET",
        description: "DUET is a Flutter-based app that connects users through shared music interests, offering Spotify-based matching, concert recommendations, and real-time chat via Firebase. It fosters connections through shared experiences. Developed for CSE 403 coursework.",
        link: "https://github.com/ramon-rcp/DUET",
        linkText: "Github Repository",
        skills: ["Flutter", "Dart", "Firebase"],
        featured: true
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
]