import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
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
      techUsed: ["ReactJs", "bootstrap", "json-server"]
    },
    {
      src: "assets/projects-images/eatYum.png",
      name: "Yum Eats React",
      codeUrl: "https://github.com/mohamed0690/Eat-Yum",
      demoUrl: "https://mohamed0690.github.io/Eat-Yum/",
      techUsed: ["ReactJs", "bootstrap", "json-server"]
    },



  ]
}
