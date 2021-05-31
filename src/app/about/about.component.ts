import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../services/RestaurantService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  

  constructor(private restaurantService: RestaurantService) { 
      
  }

  ngOnInit(): void {
    
  }

 
  firstR() {
    
  }

}
