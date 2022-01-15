import { Injectable } from '@angular/core';
import { PaymentModel } from '../shared/models/payment-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentModel!: PaymentModel;

  constructor() { }

  setPaymentModel(paymentModel: PaymentModel) {
    this.paymentModel = paymentModel;
  }

  getPaymentModel(): PaymentModel {
    return this.paymentModel;
  }

}



