import { TurnResponseRest } from "./turn-response-rest";

export class RestaurantResponseRest {

    id: number = 0;
    name: String ='';
    address: String ='';;
    image: String ='';;
    turns: TurnResponseRest[] = []
    description: String ='';

    constructor(id: number, name: String, address: String, image: String, turns: TurnResponseRest[], description: String) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.image = image;
        this.turns = turns;
        this.description = description;
    }

}