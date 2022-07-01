import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { Errors } from 'src/app/classes/Errors';
import { LoginuserserviceService } from 'src/app/services/loginuserservice.service';
import { User } from '../../classes/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  error: Errors = new Errors();
  plainText!: string;
  conversionEncryptOutput!: string;
  public showPassword: boolean = false;
  constructor(
    private loginuserservice: LoginuserserviceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          ),
        ],
      ],
    });
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  reset() {
    this.login.reset();
  }
  userLogin() {
    this.login.value.password = CryptoJS.AES.encrypt(
      this.login.value.password,
      'newspaper login key'
    ).toString();
    this.loginuserservice.userLogin(this.login.value).subscribe(
      (response) => {
        //  alert("login suucess Successfull"+response);
        //  console.log("This is response",response);

        // console.log('this is type ', this.cookieService.get('usertype'));
        if (this.cookieService.get('usertype') === 'Admin')
          this.router.navigate(['admindashboard']);
        else if (this.cookieService.get('usertype') === 'User') {
          // alert("not user")
          this.router.navigate(['userhome']);
        } else if (this.cookieService.get('usertype') === 'Vendor') {
          this.router.navigate(['vendor']);
        } else {
          Swal.fire('Invalid User', '', 'info').then((result) => {
            this.router.navigate(['login']).then(() => this.reset());
          });
        }
      },
      (error) => {
        // console.log(error.error)
        if (error.error == 'Incorrect') {
          Swal.fire('Invalid Credintails', '', 'info').then((result) => {
            this.router.navigate(['login'])
          });
        } else {
          Swal.fire('Error occure please try after some time', '', 'error')
          .then(
            (result) => {
              this.router.navigate(['login']).then(() => this.reset());
            }
          )
        }
      }
    );
  }
}
