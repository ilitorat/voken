import { Component } from '@angular/core';

import { LoginComponent } from './login.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>V O K E N</h1>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'World'; }
