import {  PipeTransform, Pipe } from 'angular2/core';
import { ICar } from './car';

@Pipe({
    name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

    transform(value: ICar[], args: string[]): ICar[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((car: ICar) =>
            car.brand.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
