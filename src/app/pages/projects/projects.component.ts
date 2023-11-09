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
