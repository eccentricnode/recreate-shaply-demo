import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recreate-shapely-demo-projects-showcase',
  templateUrl: './projects-showcase.component.html',
  styleUrls: ['./projects-showcase.component.scss']
})
export class ProjectsShowcaseComponent implements OnInit {
  images = [
    {image: 'assets/recreate_shaply_demo_assests/asset6.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset7.webp'},
    {image: 'assets/recreate_shaply_demo_assests/asset8.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset9.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset10.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset11.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset12.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset13.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset15.jpeg'},
    {image: 'assets/recreate_shaply_demo_assests/asset14.jpeg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
