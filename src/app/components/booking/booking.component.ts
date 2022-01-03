import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public bookingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.bookingForm = this.formBuilder.group({
      date: [new Date(), Validators.required],
      turn: ['', Validators.required],
      customers: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.bookingForm.reset();
  }



  sendBooking() {
    console.log("Sending booking " + JSON.stringify(this.bookingForm.get('date')!.value));
  }

}
