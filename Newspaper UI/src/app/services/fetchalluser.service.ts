import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userhome } from '../classes/userhome';
import { Newspaper } from '../classes/newspaper';
import { Subscription } from '../classes/subscription';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FetchalluserService {
  private baseUrl="http://localhost:8080/allusers";
  constructor(private httpClient : HttpClient) { }

  fetchAll()
  {
    return this.httpClient.get(this.baseUrl);   
  }
  getuserhome()
  {
    // console.log('in getuserhome data in fetchalluser  service');
    var url = 'http://localhost:8080/userhomedata';
    return this.httpClient.request<Userhome[]>('GET', url, {
      responseType: 'json',
    });
    
  }
  getNewspapersbyIdSubscribe(id:number)
  {
    // console.log(id);
    // console.log('in getNewspapersbyIdSubscribe data in fetchalluser  service');
    var url = 'http://localhost:8080/subscribe/'+id;
    return this.httpClient.request<any>('GET', url, {
      responseType: 'json',
    });
  }
  getMySubscription(email:string):Observable<any[]> {
    // console.log('in getMYSubscriptions in vendor  service');
    var url = 'http://localhost:8080/mysubscription/'+email;
    // console.log(url);
    return this.httpClient.request<any[]>('GET', url, {
      responseType: 'json',
    });
  }
  storeSubscription(subscribe:Subscription)
  {
    // console.log("inside subscription method")
    var url = 'http://localhost:8080/subscribeNewspaper';
    const headers = { 'content-type': 'application/json' };
    this.httpClient
      .post(url, subscribe, { headers: headers, responseType: 'text' })
      .subscribe({
        next: (data) => {
          // console.log('Subscribe Successfull' + data);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Subscription Added Successfully',
            showConfirmButton: false,
            timer: 3000,
          }).then((data)=>{
            window.location.reload();
          })
        },
        error: (error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 3000,
          });
        },
      });
    
  }

}
