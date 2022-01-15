import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { PaymentService } from 'src/app/services/payment.service';
import { InfoDialogComponent } from 'src/app/shared/dialogs/info-dialog/info-dialog.component';
import { CreateReservationRequestRest } from 'src/app/shared/models/create-reservation-request-rest';
import { RestaurantResponseRest } from 'src/app/shared/models/restaurant-response-rest';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  public booking = new CreateReservationRequestRest();

  @Input() restaurant: RestaurantResponseRest = new RestaurantResponseRest(0, '', '', '', [], '', 0);

  public bookingForm: FormGroup;

  constructor(
    private service: AppService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private paymentService: PaymentService
  ) {
    this.bookingForm = this.formBuilder.group({
      date: [new Date(), Validators.required],
      turn: ['', Validators.required],
      customers: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.bookingForm.reset();
  }

  sendBooking() {
    this.setBooking();
    this.service.createReservation(this.booking).subscribe((result: any) => {
      const title = 'Tu codigo de reserva es: ' + result.data;
      const info = 'Por favor guarda tu código de reserva para presentarlo al restaurante';
      this.openDialog(info, title);
    });
  }

  payBooking() {
    this.setBooking();
    this.service.createReservation(this.booking).subscribe((result: any) => {
      this.paymentService.setPaymentModel({...this.booking, locator:result.data});
     this.router.navigate(['/payment']);
    });
  }

  setBooking() {
    this.booking.restaurantId = this.restaurant.id;
    this.booking.date = this.bookingForm.value.date;
    this.booking.turnId = this.bookingForm.value.turn;
    this.booking.person = this.bookingForm.value.customers;
    this.booking.price = this.restaurant.price;
    this.booking.email = this.bookingForm.value.email;
    this.booking.name = this.bookingForm.value.name;
  }

  openDialog(info: String, title: String): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '250px',
      data: { info: info, title: title }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
