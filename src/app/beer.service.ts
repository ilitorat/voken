import { Injectable } from '@angular/core';

import { Beer } from './beer';
import { BEERS } from './mock-beer';

@Injectable()
export class BeerService {
	getBeerOnTap(): Beer {
		return BEERS[0]
	}

	getTopThreeBeers(): Beer[] {
		return BEERS.slice(0,3);
	}
}