import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscriptions } from 'src/app/classes/subscriptions';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
 
  allsubscriptionslist !: Subscriptions[];
  
  columnsToDisplay = ['u_email', 's_type','n_name' ,'a_name', 'v_email'];
  name: any;
  constructor(private router:Router,private cookieService:CookieService,private vendorservice:VendorService) { }

  ngOnInit(): void {
    this.getSubscription();
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
      this.router.navigate(['alluser']).then(() => {
        window.location.reload();
      });    
    }
    else if(data=='newspaper')
    {
      this.router.navigate(['allnewspaper']).then(() => {
        window.location.reload();
      });   
    }
    else if(data=='subscriptions')
    {
      this.router.navigate(['subscriptions']).then(() => {
        window.location.reload();
      }); 
    }
    else if(data=='vendor')
    {
      this.router.navigate(['admindashboard']).then(() => {
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
    
  getSubscription() {
    // setting fetched vendorlist into myvendorlist
    this.vendorservice.getSubscription().subscribe({
      next:(data) => {
      // this.myvendorlist = [];
      
      this.allsubscriptionslist=[];
      data.forEach((d) => {
        // console.log('d:', d);
        if(d.newspaperName!=null){
        this.allsubscriptionslist.push(
          new Subscriptions(d.uEmailId,d.subType,d.newspaperName,d.agencyName,d.vEmailId)
        );
        }
      }
      
      );
      // console.log(this.allsubscriptionslist.length)
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
