import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CreateReservationResponseRest } from 'src/app/shared/models/create-reservation-response-rest';
import { GetRestaurantResponseRest } from 'src/app/shared/models/get-restaurant-response-rest';
import { RestaurantResponseRest } from 'src/app/shared/models/restaurant-response-rest';
import { CreateReservationRequestRest } from '../../shared/models/create-reservation-request-rest';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public bookingForm: FormGroup;

  public booking = new CreateReservationRequestRest();

  private idRestaurant: number = 0;

  public restaurant: RestaurantResponseRest = new RestaurantResponseRest(0, '', '', '', [], '');

  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
    private route: ActivatedRoute
  ) {
    this.bookingForm = this.formBuilder.group({
      date: [new Date(), Validators.required],
      turn: ['', Validators.required],
      customers: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    this.getRestaurant();
    console.log(this.idRestaurant);
    this.bookingForm.reset();
  }

  setBooking(){
    this.booking.restaurantId = this.idRestaurant;
    this.booking.date = this.bookingForm.value.date;
    this.booking.turnId = this.bookingForm.value.turn;
    this.booking.person = this.bookingForm.value.customers;
  }

  sendBooking() {
    this.setBooking();
    this.service.createReservation(this.booking).subscribe((result: any) => {
      console.log(result);
    });
  }

  getRestaurant() {
    this.service.getRestaurant(this.idRestaurant)
    .subscribe((result: GetRestaurantResponseRest) => {
      console.log(result.data);
      this.restaurant = result.data;
    });
  }

}
