import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Basic } from './basic';
import { Beer } from './beer';
import { BeerService } from './beer.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
    providers: [BeerService]
})
export class DashboardComponent implements OnInit {
	// create service class to get things like current, top3 vote, and previous

	ngOnInit(): void {
		this.getBeerOnTap();
		this.getTopBeers();
	}


	test: Basic = {
		id: 1,
		name: 'Testing!',
		header: 'Header!',
		body: 'BODY!'
	};

	beer: Beer;
	beers: Beer[];

	constructor(private beerService: BeerService) { }

	getBeerOnTap(): void {
		this.beer = this.beerService.getBeerOnTap();
	}

	getTopBeers(): void {
		this.beers = this.beerService.getTopThreeBeers();
	}

}
