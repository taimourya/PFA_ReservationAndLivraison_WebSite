import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable()
export class ContactService {


    constructor(private http: HttpClient) {

    }

    sendMessage(email: String, sujet: String, message: String, )
    {
        console.log("email : " + email);
        console.log("sujet : " + sujet);
        console.log("message : " + message);
    }

}