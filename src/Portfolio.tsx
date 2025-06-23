import React, { Component } from 'react';
import "./global.css"
import { Home } from './Home';

export class Portfolio extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="left">Left</div>
                <div className="middle"><Home/></div>
                <div className="right"> {this.renderCoursework()} </div>
            </div>
        );
    }

    renderCoursework = (): React.ReactElement => {
        return <div>
            <h2>Coursework</h2>
            <strong><ul>
                <li><a href="https://courses.cs.washington.edu/courses/cse421/">CSE 421: Introduction to Algorithms</a></li>
                <li><a href="https://courses.cs.washington.edu/courses/cse473/">CSE 473: Artificial Intelligence</a></li>
                <li><a href="https://courses.cs.washington.edu/courses/cse403/">CSE 403: Software Engineering</a></li>
                <li><a href="https://courses.cs.washington.edu/courses/cse332/">CSE 332: Data Structures and Parallelism</a></li>
                <li><a href="https://courses.cs.washington.edu/courses/cse344/">CSE 344: Introduction to Data Management</a></li>
                <li><a href="https://math.washington.edu/math300">Math 300: Mathematical Reasoning</a></li>
            </ul></strong>
        </div>
    }
}