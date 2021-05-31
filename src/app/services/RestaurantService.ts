import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()
export class RestaurantService {
    restaurants : any[] = [];

    constructor(private http: HttpClient) {
        this.findAllRestaurantFromApi();
    }
    findAllRestaurantFromApi() {
        this.restaurants = [
            {
              name: 'Mcdo',
              description: 'description mcdo',
              dateCreation: new Date()
            },
            {
              name: 'Tacos de lyon',
              description: 'description lyon',
              dateCreation: new Date()
            },
            {
              name: 'burger king',
              description: 'description king',
              dateCreation: new Date()
            },
        ]
    }
    getRestaurant() {
        return this.restaurants;
    }
}