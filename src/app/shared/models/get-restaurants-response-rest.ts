import { RestaurantResponseRest } from "./restaurant-response-rest";

export class GetRestaurantsResponseRest{

    constructor(restaurants: RestaurantResponseRest[], code:String, message:String, status:String){
        this.data = restaurants;
        this.code = code;
        this.message = message;
        this.status = status;
    }

    code: String;
    message: String;
    status: String;
    data: RestaurantResponseRest[]

}