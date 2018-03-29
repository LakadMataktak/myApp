import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


  
  let GLOBAL_PROTOCOL = "http://www.";
  let GLOBAL_HOST = "mobile.beedelivery.com.mm/";
  let GLOBAL_BASE = "";
  let GLOBAL_API_VERSION = "/api_v_1.0.0/";

  let API_REQUEST_URL = GLOBAL_PROTOCOL + GLOBAL_HOST + GLOBAL_BASE + GLOBAL_API_VERSION;

@Injectable()
export class AuthProvider {


  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

    postData(getData, page)
 {
   return new Promise((resolve, reject) => {
      
     
       this.http.get(API_REQUEST_URL + page + "?" + getData).subscribe(res => {
           resolve(res);
       }, (err) => {
           reject(err);
       });
   });
 }

 isset_login(){
    return new Promise((resolve) => {
       
        if(localStorage.getItem("userData") === null) 
        {
            resolve("FALSE");
        } else {
           let userData = localStorage.userData;
          resolve(userData.user_id);
        }
    });
  }





}
