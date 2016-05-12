import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ICar } from './car';
import { CarFilterPipe } from './car-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { CarService } from './car.service';

@Component({
    templateUrl: 'app/cars/car-list.component.html',
    styleUrls: ['app/carss/car-list.component.css'],
    pipes: [CarFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class CarListComponent implements OnInit {
    pageTitle: string = 'Car List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    cars: ICar[];


    constructor(private _carService: CarService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this._carService.getCars()
                     .subscribe(
                       cars => this.cars = cars,
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Car List: ' + message;
    }
}
