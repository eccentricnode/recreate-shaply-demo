import { Component } from '@angular/core';

@Component({
  selector: 'recreate-shapely-demo-clients-carousel',
  templateUrl: './clients-carousel.component.html',
  styleUrls: ['./clients-carousel.component.scss']
})
export class ClientsCarouselComponent {
   clientsImages = [
    {image: '/assets/recreate_shaply_demo_assests/asset19.webp'},
    {image: '/assets/recreate_shaply_demo_assests/asset20.webp'},
    {image: '/assets/recreate_shaply_demo_assests/asset21.webp'},
    {image: '/assets/recreate_shaply_demo_assests/asset23.webp'},
   ];
}
