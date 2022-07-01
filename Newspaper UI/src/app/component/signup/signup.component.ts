import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { User } from '../../classes/user';
import { Errors } from '../../classes/Errors';

import {HttpClientModule} from '@angular/common/http'; 
import { catchError } from 'rxjs';
import * as CryptoJS from 'crypto-js'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupGroup!:FormGroup
  user:User=new User();
  error:Errors=new Errors();
  public showPassword: boolean = false;
  constructor(private signup:SignupService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupGroup=this.formBuilder.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      email:['',[Validators.required,Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]],
      password:['',[Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]],
      contact:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })

  }
  postData(){
  //  console.log(this.signupGroup.value)
   this.user.type='User'
   this.user.contact=this.signupGroup.value.contact
   this.user.email=this.signupGroup.value.email
   this.user.name=this.signupGroup.value.name
   this.user.password=CryptoJS.AES.encrypt( this.signupGroup.value.password, "this is newspaper project password key").toString();
   this.signup.postData(this.user)
}
public togglePasswordVisibility():void {
  this.showPassword = !this.showPassword;
}


}
