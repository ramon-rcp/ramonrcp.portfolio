import { Component } from "react";
import React from "react";
import "./global.css";

export class Skills extends Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2d3748]">Technical Expertise</h2>
            <p className="text-[#718096] max-w-2xl mx-auto text-lg">A comprehensive look at the tools and technologies I use to bring ideas to life.</p>
            </div>
                {this.renderSkillSections()}
            </div>
        </section>
    }

    renderSkillSections = (): React.ReactElement => {
        const list =  skillsList.map((skillSec, index) => {
            return  <div className="p-8 bg-white rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 text-[#3182ce] rounded-xl flex items-center justify-center mb-4 text-2xl">
                            <iconify-icon icon="lucide:code-2"></iconify-icon>
                        </div>
                        <h4 className="font-bold mb-2">{skillSec.category}</h4>
                        <p className="text-sm text-[#718096]">{skillSec.skills.join(", ")}</p>
                    </div>
        });
        return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">{list}</div>;
    }
}

const skillsList: { category: string; skills: string[] }[] = [
    {
        category: "Languages",
        skills: ["Java", "C#", "Python", "JavaScript", "TypeScript", "Dart", "SQL", "Bash"]
    },
    {
        category: "Frontend",
        skills: ["React", "Typescript", "Dart", "CSS"]
    },
    {
        category: "Backend and ML",
        skills: ["FastAPI", "TensorFlow", "PyTorch", "Pandas", "OOP", "Numpy", "Dynamic Programming", "Next.js"]
    },
    {
        category: "Data and Cloud",
        skills: ["SQL", "Active Directory", "Jamf Pro", "MySQL", "SQLite", "Firebase", "Cloud Firestore", "Vercel"]
    },
    {
        category: "Systems and Tools",
        skills: ["Git", "Scrum", "Github", "Arduino", "Unity", "Meta Oculus", "VR", "AR", "Jira", "Figma", "SystemVerilog", "FPGA"]
    }
]