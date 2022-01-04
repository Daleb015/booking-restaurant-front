import { RestaurantResponseRest } from "./restaurant-response-rest";

export class GetRestaurantResponseRest{

    constructor(restaurant: RestaurantResponseRest, code:String, message:String, status:String){
        this.data = restaurant;
        this.code = code;
        this.message = message;
        this.status = status;
    }

    private code: String;
    private message: String;
    private status: String;
    private data: RestaurantResponseRest;

    get Code(): String {
        return this.code;
    }

    set Code(value: String) { 
        this.code = value;
    }

    get Message(): String {
        return this.message;
    }

    set Message(value: String) {
        this.message = value;
    }

    get Status(): String {
        return this.status;
    }

    set Status(value: String) {
        this.status = value;
    }

    get Data(): RestaurantResponseRest {
        return this.data;
    }

    set Data(value: RestaurantResponseRest) {
        this.data = value;
    }
}