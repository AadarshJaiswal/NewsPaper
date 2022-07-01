import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Mysubscriptions } from 'src/app/classes/mysubscriptions';
import { Subscriptions } from 'src/app/classes/subscriptions';
import { FetchalluserService } from 'src/app/services/fetchalluser.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mysubscriptions',
  templateUrl: './mysubscriptions.component.html',
  styleUrls: ['./mysubscriptions.component.css']
})
export class MysubscriptionsComponent implements OnInit {

 
  mysubscriptionslist !: Mysubscriptions[];
  
  columnsToDisplay=['n_name','s_type','cost','a_name']
  name: any;
  constructor(private router:Router,private cookieService:CookieService,private userService:FetchalluserService) { }

  ngOnInit(): void {
    this.getMySubscription();
  }
  logout()
  {
    this.cookieService.deleteAll();
    this.router.navigate(['login']).then(()=>
    {
      
    window.location.reload();

    })

  }
  changeuser(data:string){
    if(data=='user'){
      this.router.navigate(['userhome']).then(() => {
        window.location.reload();
      });    
    }
   
    else if(data=='subscriptions')
    {
      this.router.navigate(['myubscriptions']).then(() => {
        window.location.reload();
      }); 
    }
  
    }
    // convertjsontoVendorData(d: any)
    // {
    //   console.log('d:', d);
    //     console.log(d.subscribetype);
    //     console.log(d.user.email);
    //     console.log(d.vendor.user.email);
    //     console.log(d.vendor.agencyName)
    //     this.allsubscriptionslist=[];
    //     this.allsubscriptionslist.push(
    //       new Subscriptions(d.user.email,d.subscribetype,d.user.email,d.vendor.agencyName,d.vendor.user.email)
    //     );
      

    // }
    
    getMySubscription() {
    // setting fetched vendorlist into myvendorlist
    this.userService.getMySubscription(this.cookieService.get('username')).subscribe({
      next:(data) => {
        if(data!=null)
        {
      // this.myvendorlist = [];
      this.mysubscriptionslist=[];
      data.forEach((d) => {
        // console.log('d:', d);
        if(d.newspaperName!=null){
        // name:string,subType:string,cost:number,agencyName:string)
        this.mysubscriptionslist.push(
          new Mysubscriptions(d.newspaperName,d.subscriptionType,d.cost,d.agencyName)
        );
        }
      }
      
      );
      // console.log(this.mysubscriptionslist.length)
    }
    else
    {
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'No Data Found',
        showConfirmButton: false,
        timer: 5000,
      })

    }
    },
  error:(error)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 5000,
    })

  }});

    // console.log('print');
    // this.myvendorlist.forEach((f)=>{console.log("fff"); console.log(f);});
  }


}
