import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { ICar } from './car';
import { CarService } from './car.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/cars/car-detail.component.html',
    directives: [StarComponent]
})
export class CarDetailComponent implements OnInit {
    pageTitle: string = 'Car Detail';
    car: ICar;
    errorMessage: string;

    constructor(private _carService: CarService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.car) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getCar(id);
        }
    }

    getCar(id: number) {
        this._carService.getCar(id)
            .subscribe(
            car => this.car = car,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['cars']);
    }

}
