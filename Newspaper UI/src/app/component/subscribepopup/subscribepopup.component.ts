import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { NewspaperId } from 'src/app/classes/newspaper-id';
import { Subscription } from 'src/app/classes/subscription';
import { FetchalluserService } from 'src/app/services/fetchalluser.service';

@Component({
  selector: 'app-subscribepopup',
  templateUrl: './subscribepopup.component.html',
  styleUrls: ['./subscribepopup.component.css']
})
export class SubscribepopupComponent implements OnInit {
  @Input() id!: number; 
  
  selected='mon'
  newspapername!: string;
  yprice!: number;
  mprice!: number;
  wprice!: number;
  vendorId!:number;
  emailId!:string;
  subscribetype!: string;
  cost!:number;
  constructor( public dialogRef: MatDialog,private fetchalluser: FetchalluserService,private cookieService:CookieService) {}
newspaper!:NewspaperId[];
  ngOnInit(): void {
    // console.log("this is popup ",this.id);
    this.fetchalluser.getNewspapersbyIdSubscribe(this.id).subscribe((result)=>{
this.vendorId=result.vendor.vendorId;
this.emailId=this.cookieService.get('username'); 
this.newspapername=result.newspaperName;
this.yprice=result.yearlyPrice;
this.mprice=result.monthlyPrice;
this.wprice=result.weeklyPrice;
    });
   }
  refresh()
  {
    this.ngOnInit;
  }
  
  closeRegistrationForm() {
    this.dialogRef.closeAll();
    this.refresh();
  }
  Subscribe() {
    // console.log("inside subsribe pop us subscribe button clicked in popup",this.id,this.newspapername,this.emailId);
    // console.log(this.newspapername,this.selected.valueOf());
    if(this.newspapername,this.selected.valueOf()==='yr')
    {
      this.subscribetype='Yearly';
      this.cost=this.yprice
    }
    else if(this.newspapername,this.selected.valueOf()==='qua')
    {
      this.subscribetype='Quaterly';
      this.cost=this.wprice
    }
    else if(this.newspapername,this.selected.valueOf()==='mon')
    {
      
        this.subscribetype='Monthly';
        this.cost=this.mprice
      
    }
    // console.log(this.subscribetype)
    // console.log(this.cost);
    // console.log(new Subscription(this.id,this.subscribetype,this.cost,this.emailId,this.vendorId));
    this.fetchalluser.storeSubscription(new Subscription(this.id,this.subscribetype,this.cost,this.emailId,this.vendorId));
     }

}
