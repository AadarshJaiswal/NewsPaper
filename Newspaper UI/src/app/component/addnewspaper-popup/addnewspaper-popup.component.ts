import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Newspaper } from 'src/app/classes/newspaper';
import { VendorService } from 'src/app/services/vendor.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-addnewspaper-popup',
  templateUrl: './addnewspaper-popup.component.html',
  styleUrls: ['./addnewspaper-popup.component.css'],
})
export class AddnewspaperPopupComponent implements OnInit {
  error: Error = new Error();
  // myvendorlist!: VendorData[];
  
  newspaperform!:FormGroup;
  constructor( public dialogRef: MatDialog,private vendorService:VendorService,private cookieService:CookieService,private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.newspaperform=this.formBuilder.group({
      newspapername:['',Validators.required],
      yprice:['',Validators.required],
      mprice:['',Validators.required],
      wprice:['',Validators.required]
    })

  }
  refresh()
  {
    this.ngOnInit;
  }
  
  closeRegistrationForm() {
    this.dialogRef.closeAll();
    this.refresh();
  }
  addNewspaper() {
    // console.log(new Newspaper(this.newspapername,this.yprice,this.mprice,this.wprice))
    this.vendorService.storeNewspaper(
      new Newspaper(this.newspaperform.value.newspapername,
        this.newspaperform.value.yprice,this.newspaperform.value.mprice,
        this.newspaperform.value.wprice,this.cookieService.get('vendorId')));
  }
}
