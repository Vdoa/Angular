import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICar } from './car';

@Injectable()
export class CarService {
    private _carUrl = 'api/cars/cars.json';

    constructor(private _http: Http) { }

    getCars(): Observable<ICar[]> {
        return this._http.get(this._carUrl)
            .map((response: Response) => <ICar[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCar(id: number): Observable<ICar> {
        return this.getCars()
            .map((cars: ICar[]) => cars.find(p => p.carId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
