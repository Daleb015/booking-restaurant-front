import { RestaurantResponseRest } from "./restaurant-response-rest";

export class GetRestaurantResponseRest{

    constructor(restaurant: RestaurantResponseRest, code:String, message:String, status:String){

        this.data = restaurant;
        this.code = code;
        this.message = message;
        this.status = status;
    }

     code: String;
     message: String;
     status: String;
     data: RestaurantResponseRest;

}