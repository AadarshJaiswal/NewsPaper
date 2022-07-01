import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Newspaper } from 'src/app/classes/newspaper';
import { NewspaperId } from 'src/app/classes/newspaper-id';
import { VendorData } from 'src/app/classes/vendor-data';
import { VendorService } from 'src/app/services/vendor.service';
import { AddnewspaperPopupComponent } from '../addnewspaper-popup/addnewspaper-popup.component';
import { UpdateNewspaperpopupComponent } from '../update-newspaperpopup/update-newspaperpopup.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit {
  newsPaperlist!: NewspaperId[];
  constructor( public dialogRef: MatDialog, private vendorService: VendorService,private cookieService:CookieService,private router:Router) { }
  columnsToDisplay = ['newspaperName', 'Yearly_Price','Weekly_Price', 'Monthly_Price','action'];
  

  ngOnInit(): void {
    this.getNewspapers(this.cookieService.get('vendorId'))
  }

  changeuser(data:string){
    if(data=='vendor'){
      this.router.navigate(['vendor']).then(() => {
        window.location.reload();
      });    
    }
   
    else if(data=='subscription')
    {
      this.router.navigate(['subscribers']).then(() => {
        window.location.reload();
      }); 
    }
  
    }


  getNewspapers(id:string) {
    // setting fetched vendorlist into myvendorlist
    this.vendorService.getNewspapersbyId(id).subscribe((data) => {
      this.newsPaperlist = [];
      data.forEach((d) => {
        // console.log('d:', d);
        this.newsPaperlist.push(
          // newspaperName:string,yprice:number,mPrice:number,wPrice:number
          new NewspaperId(d.newspaperId,d.newspaperName,d.yearlyPrice, d.monthlyPrice, d.weeklyPrice)
        );
        // console.log('length :::::' + this.newsPaperlist.length);
      });
    });

    // console.log('print');
    // this.myvendorlist.forEach((f)=>{console.log("fff"); console.log(f);});
  }
  addNewspaper()
  {
    this.dialogRef.open(AddnewspaperPopupComponent);
    // console.log("Add Newspaper");
  }
  deleteNewspaper(data:number)
  {
    
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
  this.vendorService.deleteNewspaper(data);
        Swal.fire(
          'Deleted!',
          'Newspaper has been deleted.',
          'success'
        )
      }
    })
  }
  updateNewspaper(data:NewspaperId){
    // console.log("Update Newspaper",data);
    var modelRef = this.dialogRef.open(UpdateNewspaperpopupComponent);
    modelRef.componentInstance.newspaper = data;
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
