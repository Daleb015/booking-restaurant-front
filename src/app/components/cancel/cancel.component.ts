import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  public codeReservation: String = "Soy prueba";

  constructor(private service: AppService) {

  }
  

  ngOnInit(): void {
  }

  sendCancel(){
    this.service.cancelReservation(this.codeReservation).subscribe((data:any) => {
      console.log(data);
    });
    console.log("Sending cancel " + this.codeReservation);
  }

}
