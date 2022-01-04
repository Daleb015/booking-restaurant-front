import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CreateReservationRequestRest } from '../shared/models/create-reservation-request-rest';
import { GetRestaurantResponseRest } from '../shared/models/get-restaurant-response-rest';
import { GetRestaurantsResponseRest } from '../shared/models/get-restaurants-response-rest';
import { RestaurantResponseRest } from '../shared/models/restaurant-response-rest';

const API = "http://localhost:8080/api/booking-restaurant/v1";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getRestaurant(idRestaurant: number) {
    return this.http.get<GetRestaurantResponseRest>(API+'/restaurant/'+idRestaurant);
  }

  cancelReservation(codeReservation: String) {
    return this.http.delete(API+'/reservation', {params:{locator: ''+codeReservation}});
  }

  createReservation(booking: CreateReservationRequestRest) {
    return this.http.post(API+'/reservation', booking);
  }

  getAllRestaurants() {
    return this.http.get<GetRestaurantsResponseRest>(API+'/restaurants');
  }

  constructor(private http: HttpClient) { }
}
