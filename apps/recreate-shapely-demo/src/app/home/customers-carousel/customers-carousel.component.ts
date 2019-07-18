import { Component } from '@angular/core';

@Component({
  selector: 'recreate-shapely-demo-customers-carousel',
  templateUrl: './customers-carousel.component.html',
  styleUrls: ['./customers-carousel.component.scss']
})
export class CustomersCarouselComponent {
  testimonialItems = [
    {
      "testimonial": 'Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.',
      "imagePath": '/assets/recreate_shaply_demo_assests/asset17.webp',
      "authorName": 'Aigars Silkalns',
    },
    {
      "testimonial": 'Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.',
      "imagePath": '/assets/recreate_shaply_demo_assests/asset16.webp',
      "authorName": 'John Doe'
    }
  ];
}
