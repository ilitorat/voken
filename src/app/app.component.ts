import { Component } from '@angular/core';

import { LoginComponent } from './login.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <a routerLink="/login">Login</a>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'World'; }
