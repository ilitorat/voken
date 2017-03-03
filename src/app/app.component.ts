import { Component } from '@angular/core';

import { LoginComponent } from './login.component';

@Component({
  selector: 'my-app',
  template: `
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css"/>
  <h1>V O K E N</h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'World'; }
