import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  
  constructor( public http : HttpClient) { }

  baseURL = "http://localhost/sia-sk-management/sk-management-backend/";

  //FOR PUSHING DATA FROM FRONTEND TO BACKEND
  sendApiRequest(method: any , data: any) {
    return <any>(
       this.http.post(this.baseURL + method, btoa(JSON.stringify(data)))
      
    );

    // this.http.post(this.baseURL + method, btoa(JSON.stringify(data)))
  }


}
