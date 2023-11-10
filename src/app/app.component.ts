import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fader, /* slider */ /* transformer */ /* stepper*/]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    console.log('Are we routing?')
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
