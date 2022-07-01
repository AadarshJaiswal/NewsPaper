import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import { FetchalluserService } from 'src/app/services/fetchalluser.service';
import { DeleteuserserviceService } from 'src/app/services/deleteuserservice.service';
import { VendorData } from 'src/app/classes/vendor-data';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: any;
  myvendorlist!: VendorData[];

  columnsToDisplay = ['Name', 'email','contactNo', 'action'];
  name: any;
  // user:string

  constructor(
    private router: Router,
    private alluser: FetchalluserService,
    private deleteuser: DeleteuserserviceService,
    private cookieService:CookieService
  ) {
    alluser.fetchAll().subscribe({
      next:(result) =>{ (this.users = result)
      // console.log(result)
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

  ngOnInit(): void {}
  demo(){
    // console.log(this.users);
  }

  deleteUser(email: string) {
   
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
        
    this.deleteuser.deleteuser(email).subscribe((result) => {
      
      Swal.fire(
        'Deleted!',
        'User has been deleted.',
        'success'
      ).then((result)=>
      {
        this.router.navigate(['/alluser']).then(() => {
          window.location.reload();
        });
      })
    });
        
      }
    })


  }
  changeuser(data:string){
    if(data=='vendor'){
    this.router.navigate(['admindashboard']).then(() => {
      window.location.reload();
    });    
  }
  else if(data=='newspaper')
  {
    this.router.navigate(['allnewspaper']).then(() => {
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
  logout()
  {
    
    this.cookieService.deleteAll();
    this.router.navigate(['login']).then(()=>
    {
      
    window.location.reload();

    })

  }

}
