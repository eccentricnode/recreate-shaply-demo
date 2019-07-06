import { Component } from '@angular/core';
import { SvgService } from '@recreate-shapely-demo/core-data'

@Component({
  selector: 'recreate-shapely-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shapely Demo';

  constructor( private implementSvgService: SvgService ) { 
    this.implementSvgService.all_Icons();
  }  
}
