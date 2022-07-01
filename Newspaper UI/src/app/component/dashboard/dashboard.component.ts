import { Component, OnInit } from '@angular/core';
import { VendorData } from 'src/app/classes/vendor-data';
import { VendorService } from 'src/app/services/vendor.service';
import { AddVenderPopupComponent } from 'src/app/component/add-vender-popup/add-vender-popup.component';
import {UserlistComponent} from 'src/app/component/userlist/userlist.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { VendorStoreData } from 'src/app/classes/vendor-store-data';
import { UpdateVendorpopupComponentComponent } from 'src/app/component/update-vendorpopup-component/update-vendorpopup-component.component';
import { User } from 'src/app/classes/user';
import { useAnimation } from '@angular/animations';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user!: User;
  myvendorlist!: VendorData[];

  columnsToDisplay = ['Name', 'agencyName', 'contactNo', 'email', 'action'];
  name: any;

  constructor(
    public dialogRef: MatDialog,
    private vendorService: VendorService,
    private router:Router,
    private cookieService:CookieService
  ) {}

  ngOnInit(): void {
    this.getVendors();
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
    }
     
  

  getVendors() {
    // setting fetched vendorlist into myvendorlist
    this.vendorService.getVendors().subscribe({
      next:(data) => {
      this.myvendorlist = [];
      data.forEach((d) => {
        // console.log('d:', d);
        this.convertjsontoVendorData(d);
      });
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

  convertjsontoVendorData(vd: VendorData) {
    // console.log('in converjsontovendordata');
    // console.log(vd);
    //   this.user.email=vd.user_email;
    //  this.user.contact=vd.contactNo;
    //  console.log(vd)

    this.myvendorlist.push(
      new VendorData(vd.contact, vd.email, vd.agencyName, vd.name)
    );
    // console.log('length :::::' + this.myvendorlist.length);
  }
  // demo()
  // {
  //   let l=this.myvendorlist.length;
  //   for(let i=0;i<l;i++)
  //   {
  //     console.log(this.myvendorlist[i]);
  //   }
  // }
  refresh() {
    this.ngOnInit();
  }

  openRegistrationForm() {
    this.dialogRef.open(AddVenderPopupComponent);
  }

  closeRegistrationForm() {
    this.dialogRef.closeAll();
    this.refresh();
  }

  deleteVendor(data: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vendorService.deleteVendor(data);
        
      }
    })
  }

  updateVendor(vendorobject: VendorData) {
    //calling  popup component
    // console.log(vendorobject);
    var modelRef = this.dialogRef.open(UpdateVendorpopupComponentComponent);
    modelRef.componentInstance.vendorData = vendorobject;

    //        this.vendorService.updateVendor();
  }
}
