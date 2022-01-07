import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  public codeReservation: String;

  public state: String;

  constructor(private service: AppService) {
    this.codeReservation = "";
    this.state = "Tú reserva aún no ha sido cancelada";
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
