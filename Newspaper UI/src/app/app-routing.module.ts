import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import {UserlistComponent} from './component/userlist/userlist.component'
import { VendorhomeComponent } from './component/vendorhome/vendorhome.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { AdminguardGuard } from './guard/adminguard.guard';
import { UserguardGuard } from './guard/userguard.guard';
import { VendorguardGuard } from './guard/vendorguard.guard';
import { NewspaperlistComponent } from './component/newspaperlist/newspaperlist.component';
import { SubscriptionsComponent } from './component/subscriptions/subscriptions.component';
import { MysubscriptionsComponent } from './component/mysubscriptions/mysubscriptions.component';
import { MysubscriberlistComponent } from './component/mysubscriberlist/mysubscriberlist.component';
const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    pathMatch:"full"
  }, 
  {
    path:"userhome",
    component:UserdashboardComponent,
    canActivate:[UserguardGuard]
  },
  {
    path:"alluser",
    component:UserlistComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"allnewspaper",
    component:NewspaperlistComponent,
    canActivate:[AdminguardGuard]

  },
  {
    path:"vendor",
    component:VendorhomeComponent,
    canActivate:[VendorguardGuard]
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"signup",
    component:SignupComponent,
  },
  {
    path:"admindashboard",
    component:DashboardComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"subscriptions",
    component:SubscriptionsComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"mysubscriptions",
    component:MysubscriptionsComponent,
    canActivate:[UserguardGuard]
  },
  {
    path:"subscribers",
    component:MysubscriberlistComponent,
    canActivate:[VendorguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
