import { Injectable, OnInit } from '@angular/core';
import { VendorData } from 'src/app/classes/vendor-data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VendorStoreData } from 'src/app/classes/vendor-store-data';
import { Router } from '@angular/router';
import { Newspaper } from '../classes/newspaper';
import { NewspaperId } from '../classes/newspaper-id';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class VendorService implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}
  ngOnInit(): void {}
  
  getMySubscriber(emailid:string):Observable<any[]> {
    // console.log('in getMYSubscriptions in vendor  service');
    var url = 'http://localhost:8080/getMySubscriberList/'+emailid;
    // console.log(url);
    return this.httpClient.request<any[]>('GET', url, {
      responseType: 'json',
    });
  }

  updateNewspaper(newspaper: NewspaperId) {
    // console.log('Inside vendor Service', newspaper);
    var url = 'http://localhost:8080/updateNewspaper';
    const headers = { 'content-type': 'application/json' };
    // const body = JSON.stringify(new);
    this.httpClient
      .put(url, newspaper, { headers: headers, responseType: 'text' })
      .subscribe({
        next: (data) => {
          // console.log('update successful' + data);
          Swal.fire('Saved!', '', 'success').then((result) => {
            this.router.navigate(['vendor']).then(() => {
              window.location.reload();
            });
          });
        },
        error: (error) => {
          Swal.fire(
            'Error occured please try after some time',
            '',
            'error'
          ).then((rslt) => {
            this.router.navigate(['vendor']).then(() => {
              window.location.reload();
            });
          });
        },
      });
  }
  
  getSubscription():Observable<any[]> {
    // console.log('in getAllSubscriptions in vendor  service');
    var url = 'http://localhost:8080/allsubscription';
    return this.httpClient.request<any[]>('GET', url, {
      responseType: 'json',
    });
  }

  getVendors(): Observable<VendorData[]> {
    // console.log('in getvendors in vendor  service');
    var url = 'http://localhost:8080/getVendorList';
    return this.httpClient.request<VendorData[]>('GET', url, {
      responseType: 'json',
    });
  }
  getNewspapersbyId(id: string): Observable<Newspaper[]> {
    // console.log('in getNewspapers in vendor  service');
    var url = 'http://localhost:8080/getNewspapers/' + id;
    // console.log(url);
    return this.httpClient.request<Newspaper[]>('GET', url, {
      responseType: 'json',
    });
  }

  getNewspapers(): Observable<Newspaper[]> {
    // console.log('in getNewspapers in vendor  service');
    var url = 'http://localhost:8080/getNewspapers';
    return this.httpClient.request<Newspaper[]>('GET', url, {
      responseType: 'json',
    });
  }
  deleteNewspaper(id: number) {
    var url = 'http://localhost:8080/deleteNewspaper/' + id;
    // console.log('in delete Newspaper', id);
    this.httpClient.delete<Boolean>(url).subscribe({
      next: (rslt) => {
        // console.log(rslt);
        Swal.fire('Newspaper is Deleted', '', 'success').then((result) => {
          this.router.navigate(['vendor']).then(() => {
            window.location.reload();
          });
        });
        // this.router.navigate(['vendor']).then(() => {
        //   window.location.reload();
        // });
      },
      error: (error) => {
        Swal.fire('Error occured please try after some time', '', 'error').then(
          (rslt) => {
            this.router.navigate(['vendor']).then(() => {
              window.location.reload();
            });
          }
        );
      },
    });
  }

  storeVendor(data: VendorStoreData) {
    // console.log('in storevendor data', data);
    var url = 'http://localhost:8080/addvendor';
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    // console.log(data);

    // we must subscribe method which return observable
    var response = this.httpClient
      .post(url, body, { headers: headers })
      .subscribe({
        next:(data)=>{
        // console.log("this is data ",data)
        if(data!=null){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Vendor Added Successfully',
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{
          this.router.navigate(['/admindashboard']).then(() => {
            window.location.reload();
          });
        });
      }
      else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Email Id Already Exists',
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{
          // this.router.navigate(['/admindashboard']).then(() => {
            window.location.reload();
          // });

        });

      }

        
      },
      error:(error)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error occure please try after some time',
          showConfirmButton: false,
          timer: 2000,
        }).then(()=>{
          // this.router.navigate(['/admindashboard']).then(() => {
            window.location.reload();
          // });

        });

      }});

    // console.log(response);
  }

  updateVendor(data: VendorData) {
    // console.log(data);
    // console.log('this is data');
    var url = 'http://localhost:8080/updateVendor';
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(data);
    this.httpClient
      .put(url, body, { headers: headers, responseType: 'text' })
      .subscribe({
        next: (data) => {
          // console.log('update successful' + data);
        },
        error: (error) => {
          // console.error('There is an error!', error);
        },
      });
  }

  deleteVendor(email: string) {
    var url = 'http://localhost:8080/deleteVendor/' + email;

    var json = JSON.stringify(url);

    // console.log('in delete vendor');
    this.httpClient.delete<String>(url).subscribe({
      next:(data) => {
        // console.log(data);
        Swal.fire(
          'Deleted!',
          'Vendor has been deleted.',
          'success'
        ).then(()=>{
          this.router.navigate(['/admindashboard']).then(() => {
            window.location.reload();
        })
      
      });
    },
    error:(error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Something went wrong',
        showConfirmButton: false,
        timer: 1000,
      });

    }});
  }
  storeNewspaper(newspaper: Newspaper) {
    var url = 'http://localhost:8080/vendor';
    const headers = { 'content-type': 'application/json' };
    // const body = JSON.stringify(data);
    // console.log('inside vendor Service', newspaper);
    this.httpClient
      .post(url, newspaper, { headers: headers, responseType: 'text' })
      .subscribe({
        next: (data) => {
          // console.log('Save Successfull' + data);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Newspaper Added Successfully',
            showConfirmButton: false,
            timer: 3000,
          });
          window.location.reload();
        },
        error: (error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error occure please try after some time',
            showConfirmButton: false,
            timer: 1000,
          });
          window.location.reload();
        },
      });
  }
}
