import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
 url="http://localhost:8080/signup";
  constructor(private http:HttpClient,private router:Router ) { }

  postData(user:User){
    // console.log(user)
    const headers = { 'content-type': 'application/json' };
    var response = this.http
      .post(this.url, user, { headers: headers })
      .subscribe(
        {
          next: (result) => { 
            if(result==true){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Register Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['login'])
          }else
          {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Email Id Already Exists',
              showConfirmButton: false,
              timer: 5000
            })
            // window.location.reload();
          }
          },
          error: (error) => {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Error occure please try after some time',
              showConfirmButton: false,
              timer: 1000,
            });
            // window.location.reload();
          }
      });
  }
}
