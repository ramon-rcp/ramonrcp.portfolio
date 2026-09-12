import { Component } from "react";
import React from "react";
import "./global.css";

export class Courses extends Component<{}, {showAll: boolean}> {
    constructor(props: {}) {
        super(props)
        this.state = {
            showAll: false
        };
    }

    render() {
        return <section id="courses" className="bg-white py-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2d3748]">Courses</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {this.renderCourses()}
                </div>
                <div className="flex justify-center mt-12">
                    <button id="view-more-courses-btn" onClick={this.toggleShowAll} className="flex items-center space-x-2 text-[#3182ce] font-bold hover:translate-y-1 transition-transform">
                        <span>{this.state.showAll ? "View Less Courses" : "View More Courses"}</span>
                        <iconify-icon icon={this.state.showAll ? "lucide:arrow-up" : "lucide:arrow-right"}></iconify-icon>
                    </button>
                </div>
            </div>
        </section>
    }

    toggleShowAll = (): void => {
        this.setState({ showAll: !this.state.showAll });
    }

    renderCourses = (): React.ReactElement[] => {
        return courseList.map((course, idx) => (
            <div className={(idx >= 3 && !this.state.showAll) ?
                "p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-custom group hidden-course hidden" :
                "p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-custom group"}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 text-[#3182ce] rounded-lg flex items-center justify-center text-xl">
                  <iconify-icon icon={`lucide:${iconsList[idx % iconsList.length]}`}></iconify-icon>
                </div>
                <span className="text-xs font-semibold text-[#718096] bg-gray-50 px-3 py-1 rounded-full">{course.quarter}</span>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-1 group-hover:text-[#3182ce] transition-colors">{course.name}</h3>
              <p className="text-[#718096] text-sm mb-4">{course.title}</p>
              <a href={course.link} className="flex items-center text-[#3182ce] text-xs font-bold hover:underline">
                LEARN MORE
                <iconify-icon icon="lucide:arrow-right" className="ml-1.5"></iconify-icon>
              </a>
            </div>
        ));
    }
}

const iconsList : string[] = [
    "award", "box", "component", "cloud", "layers", "terminal", "wrench", "cpu", "code", "book", "server", "git-branch", "git-commit", "git-merge", "git-pull-request"
]

const courseList: {title: string, name: string, link: string, quarter: string}[] = [
   {
    title: "CSE 446",
    name: "Machine Learning",
    link: "https://courses.cs.washington.edu/courses/cse446/",
    quarter: "Spring 2026"
   },
   {
    title: "CSE 421",
    name: "Intro to Algorithms",
    link: "https://courses.cs.washington.edu/courses/cse421/",
    quarter: "Winter 2025"
   },
   {
    title: "CSE 331",
    name: "Software Design and Implementation",
    link: "https://courses.cs.washington.edu/courses/cse331/",
    quarter: "Spring 2024"
   },
   {
    title: "CSE 344",
    name: "Into to Data Management",
    link: "https://courses.cs.washington.edu/courses/cse344/",
    quarter: "Winter 2024"
   },
   {
    title: "CSE 369",
    name: "Intro to Digital Design",
    link: "https://courses.cs.washington.edu/courses/cse369/",
    quarter: "Spring 2024"

   },
   {
    title: "CSE 332",
    name: "Data Structures and Parallelism",
    link: "https://courses.cs.washington.edu/courses/cse332/",
    quarter: "Fall 2024"
   },
   {
    title: "CSE 403",
    name: "Software Engineering",
    link: "https://courses.cs.washington.edu/courses/cse403/",
    quarter: "Winter 2025"
   },
   {
    title: "CSE 351",
    name: "The Hardware/Software Interface",
    link: "https://courses.cs.washington.edu/courses/cse351/",
    quarter: "Fall 2023"
   },
   {
    title: "MATH 300",
    name: "Mathematical reasoning",
    link: "https://math.washington.edu/math300",
    quarter: "Spring 300"
   },
   {
    title: "EE 205",
    name: "Introduction to Signal Conditioning",
    link: "https://www.ece.uw.edu/abet/?id=4310",
    quarter: "Winter 2024"
   },
   {
    title: "CSE 484",
    name: "Computer Security",
    link: "https://courses.cs.washington.edu/courses/cse484/",
    quarter: "Fall 2025"
   },
   {
    title: "CSE 371",
    name: "Design of Digital Circuits and Systems",
    link: "https://courses.cs.washington.edu/courses/cse371/",
    quarter: "Fall 2025"
   },
   {
    title: "CSE 478",
    name: "Autonomous Robotics",
    link: "https://courses.cs.washington.edu/courses/cse478/",
    quarter: "Spring 2026"
   },
   {
    title: "CSE 444",
    name: "Database Systems Internals",
    link: "https://courses.cs.washington.edu/courses/cse444/",
    quarter: "Winter 2026"
   },
   {
    title: "CSE 481",
    name: "Capstone Software Designs",
    link: "https://courses.cs.washington.edu/courses/cse481v/26wi/",
    quarter: "Spring 2026"
   },
]