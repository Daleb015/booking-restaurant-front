import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CreateReservationRequestRest } from '../shared/models/create-reservation-request-rest';
import { GetRestaurantsResponseRest } from '../shared/models/get-restaurants-response-rest';
import { RestaurantResponseRest } from '../shared/models/restaurant-response-rest';

const API = "http://localhost:8080/api/booking-restaurant/v1";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cancelReservation(codeReservation: String) {
    return this.http.delete(API+'/reservation', {params:{locator: ''+codeReservation}});
  }

  createReservation(booking: CreateReservationRequestRest) {
    return this.http.post(API+'/reservation', booking);
  }

  getAllRestaurantsMock() {
    
    let restauranResponseRest1: RestaurantResponseRest = new RestaurantResponseRest(1, "Restaurant 1", "Address 1", "data:image/jpeg;base64,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", [], "Description 1");

    let restaurantResponseRest2: RestaurantResponseRest = new RestaurantResponseRest(2, "Restaurant 2", "Address 2", "data:image/jpeg;base64,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", [], "Description 2");

    let restaurants: RestaurantResponseRest[] = [];

    restaurants.push(restauranResponseRest1,restaurantResponseRest2);

    return of(new GetRestaurantsResponseRest(restaurants, "200", "OK", "success"));

  }

  getAllRestaurants() {
    return this.http.get<GetRestaurantsResponseRest>(API+'/restaurants');
  }

  constructor(private http: HttpClient) { }
}
