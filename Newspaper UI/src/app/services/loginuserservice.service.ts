import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserserviceService {
  private url="http://localhost:8080/loginuser";
  // url="http://localhost:8080/signup";
  constructor(private httpClient : HttpClient,private router:Router) { }

  // userLogin(user: User):Observable<object>{
  //    console.log("this is loginUser",user);

  //    return this.httpClient.request<User[]>('GET', this.url, {
  //     responseType: 'json',
  //   });

  // }
  // userLogin(user:User){
    userLogin(user:User) {
      // console.log("this is loginUser",user);
      const headers = { 'content-type': 'application/json' };
      let res=this.httpClient.post(this.url,user,{headers:headers,withCredentials: true});
      // console.log("ThiS IS RES ",res)
         return res;
     
    }

  
  


}
