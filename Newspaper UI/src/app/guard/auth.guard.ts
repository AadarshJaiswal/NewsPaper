import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthguardServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
   | boolean | UrlTree {
     if(this.auth.isAdminLoggedIn())
     return true;
    // window.alert("No permission Admin ")
    else {if(this.auth.isVendorLoggedIn())
    return true;
    // window.alert("No permission Vendor")
    if(this.auth.isUserLoggedIn())
    return true;
    
    window.alert("No permission user")
    return false;
    }
    
  }
  
}
