export class CreareReservationRequestRest{

    constructor(restaurantId:number, date: any, turnId: number, person:number){
        this.restaurantId = restaurantId;
        this.date = date;
        this.turnId = turnId;
        this.person = person;
    }

    restaurantId: number;
    date: any;
    turnId: number;
    person: number;

}