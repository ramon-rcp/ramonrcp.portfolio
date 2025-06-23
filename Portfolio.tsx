import React, { Component } from 'react';
import "./Portfolio.css"

export class Portfolio extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="left">Left</div>
                <div className="middle">Middle</div>
                <div className="right"> renderCoursework() </div>
            </div>
        );
    }

    renderCoursework = (): React.ReactElement => {
        return <div>
            <h3>Coursework at UW</h3>
            <ul>
                <li><a href="http://courses.cs.washington.edu/courses/cse421/">CSE 421: Introduction to Algorithms</a></li>
            </ul>
        </div>
    }
}