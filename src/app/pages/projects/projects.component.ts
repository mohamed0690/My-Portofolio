import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      src: "",
      name: "Forex CRM & Client Portal",
      codeUrl: "",
      demoUrl: "",
      techUsed: ["Angular", "Fintech API", "MT4/MT5 Integration", "RxJS"],
      description: "Developed CRM and client portal solutions for forex brokers with MT4/MT5 integration. Implemented secure client onboarding, account management, and trading data synchronization."
    },
    {
      src: "",
      name: "Cyrafa Pay \u2013 Crypto Payment Gateway",
      codeUrl: "",
      demoUrl: "",
      techUsed: ["Blockchain", "Node.js", "Express", "Secure Payments"],
      description: "Built and maintained a crypto payment gateway enabling merchants to accept digital currencies. Implemented deposit, withdrawal, and transaction tracking across multiple blockchain networks."
    },
    {
      src: "",
      name: "Walitca \u2013 Cryptocurrency Exchange Platform",
      codeUrl: "",
      demoUrl: "",
      techUsed: ["React", "Blockchain", "Staking", "Multi-chain Support"],
      description: "A full-featured crypto trading and exchange platform similar to Binance. Implemented blockchain features for deposits, withdrawals, and staking across various chains."
    },
    {
      src: "",
      name: "Engaz CRM System",
      codeUrl: "",
      demoUrl: "",
      techUsed: ["Angular 17", "PrimeNG", "Bootstrap 5", "Sass"],
      description: "A high-traffic CRM platform. Engineered a modern, responsive interface with multilingual support powered by ngx-translate. Delivered reusable UI components, advanced form handling, dynamic data tables, and role-based access controls."
    },
    {
      src: "",
      name: "Navi \u2013 Real Estate Platform",
      codeUrl: "",
      demoUrl: "",
      techUsed: ["Angular", "PrimeNG", "Bootstrap"],
      description: "A real estate management platform designed to streamline property listings, client interactions, and sales operations. Built responsive UIs focusing on property management dashboards, lead tracking, and a client portal."
    },
    {
      src: "",
      name: "Engaz HR System",
      codeUrl: "",
      demoUrl: "",
      techUsed: ["Angular 17", "PrimeNG", "Bootstrap 5", "Sass"],
      description: "A comprehensive HR management system designed to handle employee data, attendance, payroll, contracts, and performance tracking. Features include interactive data tables, dynamic forms, and a shift management module."
    },
    {
      src: "assets/projects-images/E-Commerce Fresh Cart.webp",
      name: "E-Commerce Fresh Cart",
      codeUrl: "https://github.com/mohamed0690/E-commerce-Angular-Website",
      demoUrl: "https://e-commerce-angular-website.vercel.app/",
      techUsed: ["Angular", "bootstrap", "FontAwesome"]
    },
    {
      src: "assets/projects-images/noxe-react-movies.webp",
      name: "Noxe Movies",
      codeUrl: "https://github.com/mohamed0690/noxe-react-movies",
      demoUrl: "https://mohamed0690.github.io/noxe-react-movies/",
      techUsed: ["ReactJs", "Tailwind CSS", "React Icons"]
    },
    {
      src: "assets/projects-images/eatYum.png",
      name: "Yum Eats React",
      codeUrl: "https://github.com/mohamed0690/Eat-Yum",
      demoUrl: "https://mohamed0690.github.io/Eat-Yum/",
      techUsed: ["ReactJs", "bootstrap", "React Icons"]
    },
    {
      src: "assets/projects-images/book.png",
      name: "E-Commerce Books",
      codeUrl: "https://github.com/mohamed0690/ecommerce-books-api",
      demoUrl: "https://mohamed0690.github.io/ecommerce-books-api/",
      techUsed: ["HTML", "CSS", "JavaScript"]
    },
    {
      src: "assets/projects-images/weather.png",
      name: "Weather IO",
      codeUrl: "https://github.com/mohamed0690/weatherio",
      demoUrl: "https://weatherio-one.vercel.app/",
      techUsed: ["HTML", "CSS", "JavaScript"]
    },
    {
      src: "assets/projects-images/yummy.png",
      name: "Yummy Website",
      codeUrl: "https://github.com/mohamed0690/food-api",
      demoUrl: "https://64f4cbe1d2209b3939574b8c--eloquent-sherbet-daded3.netlify.app/",
      techUsed: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    },


  ]
}
