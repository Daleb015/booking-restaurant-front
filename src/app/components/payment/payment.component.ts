import { Component, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentIntent } from 'src/app/shared/models/payment-intent';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentModel } from 'src/app/shared/models/payment-model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  stripeTest!: FormGroup;

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  paymentModel!: PaymentModel;

  paymentIntentConfirm!: string;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.paymentModel = this.paymentService.getPaymentModel();
  }

  cancel() {
    console.log('cancel')
  }

  confirm() {
    console.log('confirm')
  }

  createToken(): void {
    const name = this.stripeTest.get('name')!.value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {

          const paymentIntent: PaymentIntent = {
            description: this.paymentModel.name + ' : ' + this.paymentModel.locator,
            price: 0
          }

          this.executeIntent(paymentIntent);
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  executeIntent(payment: PaymentIntent){
    this.paymentService.buy(payment).subscribe((result: any) => {
      this.paymentIntentConfirm = result.id;
    });
  }

}
