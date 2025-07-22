import { Component } from "react";
import React from "react";
import "./global.css";

export class Courses extends Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return <section id="courses">
            <h2>Courses</h2>
            <div className="courses-grid">
                {this.renderSkills()}
            </div>
        </section>
    }

    renderSkills = (): React.ReactElement[] => {
        return courseList.map((course) => (
            <div key={course.name} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.name}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
        ));
    }
}

const courseList: {title: string, name: string, link: string}[] = [
   {
    title: "CSE 331",
    name: "Software Design and Implementation",
    link: "https://courses.cs.washington.edu/courses/cse331/"
   },
   {
    title: "CSE 344",
    name: "Into to Data Management",
    link: "https://courses.cs.washington.edu/courses/cse344/"
   },
   {
    title: "CSE 369",
    name: "Intro to Digital Design",
    link: "https://courses.cs.washington.edu/courses/cse369/"
   },
   {
    title: "CSE 332",
    name: "Data Structures and Parallelism",
    link: "https://courses.cs.washington.edu/courses/cse332/"
   },
   {
    title: "CSE 403",
    name: "Software Engineering",
    link: "https://courses.cs.washington.edu/courses/cse403/"
   },
   {
    title: "CSE 421",
    name: "Intro to Algorithms",
    link: "https://courses.cs.washington.edu/courses/cse421/"
   },
   {
    title: "CSE 351",
    name: "The Hardware/Software Interface",
    link: "https://courses.cs.washington.edu/courses/cse351/"
   },
   {
    title: "MATH 300",
    name: "Mathematical reasoning",
    link: "https://math.washington.edu/math300"
   },
   {
    title: "EE 205",
    name: "Introduction to Signal Conditioning",
    link: "https://www.ece.uw.edu/abet/?id=4310"
   },
]