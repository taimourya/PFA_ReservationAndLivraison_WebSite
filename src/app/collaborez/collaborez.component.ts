import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/RestaurantService';

@Component({
  selector: 'app-collaborez',
  templateUrl: './collaborez.component.html',
  styleUrls: ['./collaborez.component.css']
})
export class CollaborezComponent implements OnInit {


    restaurants: any[] = [];

    constructor(private restaurantService: RestaurantService) { }

    ngOnInit(): void {
      this.restaurants = this.restaurantService.getRestaurant();
      
    }

}
