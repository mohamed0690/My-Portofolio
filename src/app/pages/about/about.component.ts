import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    experienceTimeline: {
        time: string,
        name: string,
        title: string,
        details: string
    }[] = [
        {
            time: "Aug 2025 - Present",
            name: "Finitic",
            title: "Software Engineer",
            details: `<div>Main Duties:</div>
      <div>Contributed to building and maintaining secure, scalable fintech platforms serving brokers, merchants, and crypto traders. Worked across web and blockchain layers to deliver reliable financial solutions with real-time processing and multi-chain support.</div>
      <div><span class='fw-semibold'>Forex CRM & Client Portal</span>: Developed CRM and client portal solutions for forex brokers with MT4/MT5 integration. Implemented secure client onboarding, account management, and trading data synchronization.</div>
      <div><span class='fw-semibold'>Cyrafa Pay – Crypto Payment Gateway</span>: Built and maintained a crypto payment gateway enabling merchants to accept digital currencies. Implemented deposit, withdrawal, and transaction tracking across multiple blockchain networks. Focused on security, accuracy, and seamless merchant integration.</div>
      <div><span class='fw-semibold'>Walitca – Cryptocurrency Exchange Platform</span>: Contributed to developing a full-featured crypto trading and exchange platform similar to Binance. Implemented blockchain features for deposits, withdrawals, and staking across various chains. Ensured secure transaction flows and smooth user experience for traders.</div>`
        },
        {
            time: "Sep 2023 - Aug 2025",
            name: "Engaz AI",
            title: "Frontend Developer",
            details: `<div>Main Duties:</div>
      <div>Contributed to building dynamic user interfaces for large-scale web applications using Angular, PrimeNG, Sass, and Bootstrap \u2014 delivering production-ready solutions that enhanced usability, performance, and overall user satisfaction.</div>
      <div><span class='fw-semibold'>Engaz CRM System</span>: Managed thousands of leads and multi-channel client interactions monthly. Redesigned lead and deal management interfaces with AI-driven recommendations to boost conversion rates. Enhanced real-time tracking (phone, email, SMS, WhatsApp) to improve communication and retention.</div>
      <div><span class='fw-semibold'>Navi \u2013 Real Estate Platform</span>: Designed advanced property search, filtering, and comparison features for faster discovery. Delivered responsive, mobile-friendly layouts for consistent experience across devices. Improved user flow to increase accessibility and engagement.</div>
      <div><span class='fw-semibold'>Engaz HR System</span>: Built for medium-to-large enterprises to manage thousands of employees. Developed HR modules for records, recruitment, performance, and attendance tracking. Enhanced data visualization and filtering to reduce processing time and improve decision-making.</div>`
        },
        {
            time: "Jan 2022 - Present",
            name: "Freelancer",
            title: "Full Stack Developer",
            details: `<div>Main Duties:</div>
      <div>Worked as a freelancer on various platforms and completed many projects. This experience taught me how to manage my time and effectively deliver work early.</div>
      <div><span class='fw-semibold'>Fire System</span>: Developed the backend for a fire system with an emphasis on real-time communication and email notifications. <span class='fw-semibold'>(Technologies: React.js, Bootstrap, Node.js, Express, MongoDB, Socket.io, Nodemailer)</span></div>
      <div><span class='fw-semibold'>Strong Care</span>: Built both the frontend and backend for a comprehensive client management and communication system, integrating technologies to deliver a seamless solution. <span class='fw-semibold'>(Technologies: React.js, Bootstrap, Sass, Node.js, Express, MongoDB, Nodemailer)</span></div>`
        }
    ];

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
