export class CreateReservationRequestRest{

    constructor(){
        this.restaurantId = 0;
        this.date = new Date();
        this.turnId = 0;
        this.person = 0;
        this.price = 0;
        this.email = '';
        this.name = '';
    }

    restaurantId: number;
    date: any;
    turnId: number;
    person: number;
    price: number;
    email: string;
    name: string;

}