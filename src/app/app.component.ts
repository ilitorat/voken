import { Component } from '@angular/core';

import { LoginComponent } from './login.component';

@Component({
  selector: 'my-app',
  template: `
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css"/>
  <div style="background-image: url('./app/images/beach-394503_1920.jpg');top: 0px;left: 0px;position: absolute;width: 100%;height:100%">
	  <h1 style="font-weight: 400;text-align: center;">V O K E N</h1>
	  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent  { name = 'World'; }
