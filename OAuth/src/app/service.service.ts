import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public UserLogin(data) {
    console.log("service Data", data)
    // return this.http.post("http://localhost:3000/app", data);
}
}
