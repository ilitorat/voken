import { Component } from '@angular/core';

import { Basic } from './basic';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent  {
	// create service class to get things like current, top3 vote, and previous
	test: Basic = {
		id: 1,
		name: 'Testing!',
		header: 'Header!',
		body: 'BODY!'
	};
}
