import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private cookieService:CookieService) { }
  
// gettoken(){  
//   return !!localStorage.getItem("SeesionUser");  }
// }
isAdminLogged=false;
isVendorLogged=false;
isUserLogged=false;
isAdminLoggedIn(): boolean {
  if(this.cookieService.get('usertype')==='Admin')
  this.isAdminLogged=true;

  return this.isAdminLogged;
}
isVendorLoggedIn(): boolean {
  if(this.cookieService.get('usertype')==='Vendor')
  this.isVendorLogged=true;

  return this.isVendorLogged;
  
}
isUserLoggedIn(): boolean {
  if(this.cookieService.get('usertype')==='User')
  this.isUserLogged=true;
  
  return this.isUserLogged;
}

}