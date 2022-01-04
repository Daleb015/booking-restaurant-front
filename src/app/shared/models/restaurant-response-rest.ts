import { TurnResponseRest } from "./turn-response-rest";

export class RestaurantResponseRest {

    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.image = ' o';
        this.turns = [];
        this.description = '';
    }

    id: number;
    name: String;
    address: String;
    image: String;
    turns: TurnResponseRest[]
    description: String;

}