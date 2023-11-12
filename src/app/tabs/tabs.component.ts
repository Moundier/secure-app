import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from '../route-animations';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  animations: [ fader ]
})
export class TabsComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
