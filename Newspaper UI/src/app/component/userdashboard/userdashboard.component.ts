import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NewspaperId } from 'src/app/classes/newspaper-id';
import { Userhome } from 'src/app/classes/userhome';
import { FetchalluserService } from 'src/app/services/fetchalluser.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';
import { AddnewspaperPopupComponent } from '../addnewspaper-popup/addnewspaper-popup.component';
import { SubscribepopupComponent } from '../subscribepopup/subscribepopup.component';
import { UpdateNewspaperpopupComponent } from '../update-newspaperpopup/update-newspaperpopup.component';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  
  userhomelist!:Userhome[];
  constructor( public dialogRef: MatDialog, private fetchalluser: FetchalluserService,private cookieService:CookieService,private router:Router) { }
  columnsToDisplay = ['newspaperName', 'vendor_name', 'agency_name', 'contact_no','action'];
  

  ngOnInit(): void {
    this.getuserhome()
  }
  getuserhome()
  {
    this.fetchalluser.getuserhome().subscribe({
      next:(data)=>{
      this.userhomelist=[];
      data.forEach((d)=>
      {
        // console.log("data",d)
        this.userhomelist.push(
          new Userhome(d.newspaperId,d.newspaperName,d.name,d.agencyName,d.contactNo)
        );
        // console.log('length:::::::',this.userhomelist.length);
      });

    },
    error:(error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Something went wrong',
        showConfirmButton: false,
        timer: 5000,
      });

    }});
  }
  changeuser(d:string)
  {
    if(d=='subscriptions')
    {
      this.router.navigate(['mysubscriptions']).then(() => {
        window.location.reload();
      }); 
    }
    // console.log("helllo");
  }
  
  subscribenewspaper(id:number){
    // console.log("Subscribe Newspaper",id);
    var modelRef = this.dialogRef.open(SubscribepopupComponent);
     modelRef.componentInstance.id = id;
    // this.vendorService.updateNewspaper(data).subscribe((result) => {});
    
  }
  logout(){
    this.cookieService.deleteAll();
    this.router.navigate(['login']).then(()=>
    {
      
    window.location.reload();

    })
  }
  

}
