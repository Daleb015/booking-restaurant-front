export class CreateReservationRequestRest{

    constructor(){
        this.restaurantId = 0;
        this.date = new Date();
        this.turnId = 0;
        this.person = 0;
    }

    restaurantId: number;
    date: any;
    turnId: number;
    person: number;

}