import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/authguard-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VendorguardGuard implements CanActivate {
  constructor(private auth:AuthguardServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isVendorLoggedIn())
      return true;
      else{Swal.fire({
        title: '<strong><i>You have to no right to access this page</i></strong>',
        icon: 'info',
        html:'',
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Ok!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
       
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['login'])
        } 
      })
      return false;
      }
  }
  
}
