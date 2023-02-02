import { Component } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  expanded=true
  toggleExpanded(expanded:boolean){
    this.expanded=expanded
  }
}
