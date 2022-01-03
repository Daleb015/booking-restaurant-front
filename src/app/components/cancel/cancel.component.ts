import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  public codeReservation: String = "Soy prueba";

  constructor() {

  }
  

  ngOnInit(): void {
  }

  sendCancel(){
    console.log("Sending cancel " + this.codeReservation);
  }

}
