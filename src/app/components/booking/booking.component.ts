import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { GetRestaurantResponseRest } from 'src/app/shared/models/get-restaurant-response-rest';
import { RestaurantResponseRest } from 'src/app/shared/models/restaurant-response-rest';
import { BookingFormComponent } from './booking-form/booking-form.component';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  private idRestaurant: number = 0;

  public restaurant: RestaurantResponseRest = new RestaurantResponseRest(0, '', '', '', [], '',0);

  @ViewChild(BookingFormComponent) bookingForm!: BookingFormComponent;

  constructor(
    private service: AppService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    this.getRestaurant();
  }

  getRestaurant() {
    this.service.getRestaurant(this.idRestaurant)
      .subscribe((result: GetRestaurantResponseRest) => {
        console.log(result.data);
        this.bookingForm.restaurant = result.data;
        this.restaurant = result.data;
      });
  }

}
