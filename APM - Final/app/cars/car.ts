/* Defines the product entity */
export interface ICar {
    carId: number;
    brand: string;
    manufacturer: string;
    color: string;
    seatNumber: number;
    engineVolume: number;
    transmission: string;
    rented: number;
    ownerUser: number;
    ownerShop: number;
    priceBuyCar: number;
    priceRentCar: number;
    imageUrl: string;
}

