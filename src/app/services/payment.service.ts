import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { PaymentConfirm } from '../shared/models/payment-confirm';
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
    console.log('lo que se envia a la api '+JSON.stringify(payment));
    return this.http.post(API + 'intent', payment);
  }

  cancel(paymentIntentConfirm: string) {
    return this.http.get(API + 'cancel/' + paymentIntentConfirm);
  }

  confirm(paymentConfirm: PaymentConfirm) {
    return this.http.post(API + 'confirm', paymentConfirm);
  }


}



