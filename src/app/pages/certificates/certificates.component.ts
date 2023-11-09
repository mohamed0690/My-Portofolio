import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

  certificates = [
    {
      src: "assets/certificates-images/route.jpg",
      credential: "https://drive.google.com/file/d/1J6ul6IcqllRSvH-ul2lT7PjKW_3BB1J6/view?usp=sharing",
    },
    {
      src: "assets/certificates-images/mongoDB.png",
      credential: "https://learn.mongodb.com/c/fuO7mtaoR9a8JnEAzaZCyA",
    },
    {
      src: "assets/certificates-images/nodeJs.png",
      credential: "https://drive.google.com/file/d/1nqLWWKYAgDspA7fxhZYBGK3dze1CPn-4/view?usp=sharing",
    },
    {
      src: "assets/certificates-images/react.png",
      credential: "https://www.udemy.com/certificate/UC-2acea8a3-9e03-4d55-9808-5590704ed681/",
    },

    {
      src: "assets/certificates-images/1.jpeg",
      credential: "https://www.linkedin.com/learning/certificates/b6e1d1cf30d2471e91e1cc32f9b492380923878c7d1ff71de2f67b3cf39622f7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BzwjB7FDvTD%2BArSZbtWYCpg%3D%3D",
    },
    {
      src: "assets/certificates-images/4.jpeg",
      credential: "https://www.linkedin.com/learning/certificates/ba16c252307de51745663239c57797b1094b59993d8b97ebf0d9268edaa793c0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BJUuK0P5RTSOvU7%2Bv4xmM9A%3D%3D",
    },
    {
      src: "assets/certificates-images/2.jpeg",
      credential: "https://www.linkedin.com/learning/certificates/21849cbb7aef266fcf1bfe2f8e31f4c8a8465fc917024a0a208ae80464410288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BzwjB7FDvTD%2BArSZbtWYCpg%3D%3D",
    },
    {
      src: "assets/certificates-images/3.jpeg",
      credential: "https://www.linkedin.com/learning/certificates/ba16c252307de51745663239c57797b1094b59993d8b97ebf0d9268edaa793c0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BzwjB7FDvTD%2BArSZbtWYCpg%3D%3D",
    },
    {
      src: "assets/certificates-images/network.png",
      credential: "https://drive.google.com/file/d/1lknsS9VemTrBN-w7m9exVPGAdA4QOpZr/view?usp=sharing",
    },



  ]
}
