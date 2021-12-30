import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { GetRestaurantsResponseRest } from 'src/app/shared/models/get-restaurants-response-rest';
import { RestaurantResponseRest } from 'src/app/shared/models/restaurant-response-rest';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  public restaurants: RestaurantResponseRest[];

  constructor( private service: AppService) {
    this.restaurants = [];
  }

  ngOnInit(): void {
    this.service.getAllRestaurantsMock().subscribe((result: GetRestaurantsResponseRest) => {
      this.restaurants = result.data;
    });
  }

}
