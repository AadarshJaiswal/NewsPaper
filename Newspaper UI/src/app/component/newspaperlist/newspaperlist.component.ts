import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Userhome } from 'src/app/classes/userhome';
import { FetchalluserService } from 'src/app/services/fetchalluser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newspaperlist',
  templateUrl: './newspaperlist.component.html',
  styleUrls: ['./newspaperlist.component.css']
})
export class NewspaperlistComponent implements OnInit {

  userhomelist!:Userhome[];
  constructor( public dialogRef: MatDialog, private fetchalluser: FetchalluserService,private cookieService:CookieService,private router:Router) { }
  columnsToDisplay = ['newspaperName', 'vendor_name', 'agency_name', 'contact_no'];
  

  ngOnInit(): void {
    this.getuserhome()
  }
  changeuser(data:string){
    if(data=='vendor'){
    this.router.navigate(['admindashboard']).then(() => {
      window.location.reload();
    });    
  }
  else if(data=='user')
  {
    this.router.navigate(['alluser']).then(() => {
      window.location.reload();
    });   
  }
  else if(data=='subscription')
  {
    this.router.navigate(['subscriptions']).then(() => {
      window.location.reload();
    });   
  }
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
      })
    }
  });
  }
  logout(){
    this.cookieService.deleteAll();
    this.router.navigate(['login']).then(()=>
    {
      
    window.location.reload();

    })
  }

}
