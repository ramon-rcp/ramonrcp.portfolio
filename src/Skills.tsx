import { Component } from "react";
import React from "react";
import "./global.css";

export class Skills extends Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return <section id="skills">
            <h2>Skills</h2>
            <div className="skills-tags">
                {this.renderSkills()}
            </div>
        </section>
    }

    renderSkills = (): React.ReactElement[] => {
        return skillsList.map((skill, index) => {
            return <span key={index}>{skill}</span>;
        });
    }
}

const skillsList: string[] = [
    "React",
    "Typescript",
    "Dart",
    "CSS",
    "Firebase",
    "Cloud Firestore",
    "Scrum",
    "Github",
    "C#",
    "Unity",
    "Java",
    "Bash",
    "Active Directory",
    "Data Structures",
    "SQL",
    "Dynamic Programming",
    "Object Oriented Programming",
    "Jamf Pro",
    "Arduino",
]