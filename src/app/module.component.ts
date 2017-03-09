import { Component, Input } from '@angular/core';

import { Basic } from './basic';

@Component({
    moduleId: module.id,
    selector: 'my-module',
    templateUrl: './module.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class ModuleComponent  {
	@Input() inputField: Basic;
}
