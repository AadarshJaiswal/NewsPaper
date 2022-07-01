import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserserviceService {

  private baseurl="http://localhost:8080/deleteuser";
  constructor(private httpClient: HttpClient) { }
  deleteuser(email:string)
  {
    this.baseurl=this.baseurl+"/"+email;
    // console.log(this.baseurl);
    return this.httpClient.delete(this.baseurl);
  }
}
