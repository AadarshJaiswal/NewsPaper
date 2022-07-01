import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { User } from 'src/app/classes/user';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { VendorStoreData } from 'src/app/classes/vendor-store-data';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Errors } from 'src/app/classes/Errors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js'; 
@Component({
  selector: 'app-add-vender-popup',
  templateUrl: './add-vender-popup.component.html',
  styleUrls: ['./add-vender-popup.component.css'],
})
export class AddVenderPopupComponent implements OnInit {
  user:User=new User();
  vendorform!:FormGroup
  public showPassword: boolean = false;
  

  constructor(
    private vendorService: VendorService,
    public dialogRef: MatDialog,
    private formBuilder:FormBuilder
  ) {}
  ngOnInit(): void {
    this.vendorform=this.formBuilder.group({
      vendorName:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]],
      password:['',[Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]],
      contactNo:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      agencyName:['',Validators.required]
    })
  }

  error: Errors = new Errors();
  refresh()
  {
    this.ngOnInit;
  }
  
  closeRegistrationForm() {
    this.dialogRef.closeAll();
    this.refresh();
  }
  addVendor() {
    //  validations
    // console.log(this.vendorform.value.email)
    this.vendorform.value.password=CryptoJS.AES.encrypt( this.vendorform.value.password,  "this is newspaper project password key").toString();
    
    
      // this.user.email=this.email;
      // this.user.contact=this.contactNo;
      // this.user.password=this.password;
      let vendorStoreData = new VendorStoreData(
        this.vendorform.value.vendorName,
        this.vendorform.value.agencyName,
        this.vendorform.value.email,
        this.vendorform.value.password,
        this.vendorform.value.contactNo
      );

      this.vendorService.storeVendor(vendorStoreData);

      // Swal.fire({
      //   title: 'Registration Succes',
      //   icon: 'success',
      //   confirmButtonText: 'OK',
      // });
      // this.dialogRef.closeAll();
    
  }
  public togglePasswordVisibility():void {
    this.showPassword = !this.showPassword;
  }
 
  
}
