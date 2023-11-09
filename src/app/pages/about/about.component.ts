import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    timeline: {
        time: string,
        name: string,
        title: string,
        details: string
    }[] = [


            {
                time: "Jul 2023 - Oct 2023",
                name: "Information Technology Institute (ITI)",
                title: "Full Stack using MEARN Track",
                details: `<div>Skills:</div>
      <div><span class='fw-semibold'>HTML/CSS</span>: Proficiency in creating semantic HTML markup. Advanced CSS skills, including CSS Grid, Flexbox, and CSS pre-processors like Sass.</div>
      <div><span class='fw-semibold'>JavaScript</span>: Strong understanding of core JavaScript concepts. Familiarity with modern JavaScript features (ES6+).</div>
      <div><span class='fw-semibold'>Frontend Frameworks</span>: Experience with popular frontend frameworks like Angular, React. Understanding of component-based architecture.</div>
      <div><span class='fw-semibold'>Responsive Design and CSS Frameworks</span>: Knowledge of responsive design principles. Experience with CSS frameworks like Bootstrap.</div>
      <div><span class='fw-semibold'>Version Control</span>: Proficiency in using Git for version control, including branching and merging.</div>
      <div><span class='fw-semibold'>Debugging Tools</span>: Familiarity with browser developer tools for debugging and profiling frontend code.</div>
      <div><span class='fw-semibold'>Collaboration and Communication</span>: Ability to collaborate effectively within a team environment. Strong communication skills, both written and verbal.</div>
      <div><span class='fw-semibold'>Problem Solving</span>: Analytical and problem-solving skills to identify and fix frontend issues efficiently.</div>
      <div><span class='fw-semibold'>UI/UX Design Awareness</span>: Basic understanding of UI/UX design principles for effective collaboration with designers.</div>
      <div><span class='fw-semibold'>Continuous Learning</span>: Willingness to learn and adapt to new frontend technologies and best practices.</div>`
            },
            {
                time: "May 2023 - Oct 2023",
                name: "Route Academy",
                title: "5-Month Front-End Development Diploma",
                details: `<div>Skills:</div>
      <div><span class='fw-semibold'>HTML/CSS</span>: Proficiency in creating semantic HTML markup. Advanced CSS skills, including CSS Grid, Flexbox, and CSS pre-processors like Sass.</div>
      <div><span class='fw-semibold'>JavaScript</span>: Strong understanding of core JavaScript concepts. Familiarity with modern JavaScript features (ES6+).</div>
      <div><span class='fw-semibold'>Frontend Framework Angular</span>: Building robust and modular single-page applications, Utilizing Angular components, directives, and services for a seamless user interface.</div>
      <div><span class='fw-semibold'>Responsive Design and CSS Frameworks</span>: Knowledge of responsive design principles. Experience with CSS frameworks like Bootstrap.</div>
      <div>
      <span class='fw-semibold'>Version Control/Git</span>: Proficient in using Git for version control, ensuring collaborative and efficient development workflows. Experience with branching strategies, pull requests, and resolving merge conflicts to maintain a clean and organized codebase.
    </div>
    <div>
      <span class='fw-semibold'>Build Tools and Task Runners</span>: Familiar with build tools such as Webpack and task runners like Gulp, optimizing build processes to enhance performance and automate repetitive tasks. Implements continuous integration practices for seamless project deployment.
    </div>
    <div>
      <span class='fw-semibold'>Web Performance Optimization</span>: Actively engages in optimizing web pages for speed and performance. Implements techniques such as lazy loading, minification, and compression to ensure fast load times and an optimal user experience.
    </div>
      `
            },

            {
                time: "Sep 2017 - Jul 2021",
                name: "Faculty Of Computers and Information Science • Ain-Shams University",
                title: "Bachelor's degree, Computer Science",
                details: "<div>Grade: Good</div>"
            },
        ]
}
