import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '../shared/models/payment-intent';
import { PaymentModel } from '../shared/models/payment-model';

const API = "http://localhost:8080/api/booking-restaurant/v1/payment/";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentModel!: PaymentModel;

  constructor(private http: HttpClient) { }

  setPaymentModel(paymentModel: PaymentModel) {
    this.paymentModel = paymentModel;
  }

  getPaymentModel(): PaymentModel {
    return this.paymentModel;
  }
  
  buy(payment: PaymentIntent) {
    return this.http.post(API + 'intent', payment);
  }

}



