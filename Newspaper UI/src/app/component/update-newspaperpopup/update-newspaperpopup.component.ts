import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { NewspaperId } from 'src/app/classes/newspaper-id';
import { VendorService } from 'src/app/services/vendor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-newspaperpopup',
  templateUrl: './update-newspaperpopup.component.html',
  styleUrls: ['./update-newspaperpopup.component.css']
})
export class UpdateNewspaperpopupComponent implements OnInit {
  @Input() newspaper!: NewspaperId; 
  constructor(private dialogRef:MatDialog,private vendorService:VendorService,private formBuilder:FormBuilder) { }

id!:number
updateNewspaperform!:FormGroup
  ngOnInit(): void {
  // console.log(this.newspaper);
    // console.log("This is popup .ts",this.newspaper)
    this.id=this.newspaper.newspaperId
    this.updateNewspaperform=this.formBuilder.group({
    name:[this.newspaper.newspaperName,Validators.required],
    yPrice:[this.newspaper.yearlyPrice,Validators.required],
    mPrice:[this.newspaper.monthlyPrice,Validators.required],
    wPrice:[this.newspaper.weeklyPrice,Validators.required],
    })
  }
  refresh()
  {
    this.ngOnInit
  }
  closeRegistrationForm() {
    this.dialogRef.closeAll();
    this.refresh();
  }
  updateNewspaper(){
    // console.log("inside update");
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let np=new NewspaperId(this.id,this.updateNewspaperform.value.name,this.updateNewspaperform.value.yPrice,this.updateNewspaperform.value.mPrice,this.updateNewspaperform.value.wPrice);
        this.vendorService.updateNewspaper(np);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info').then((rslt)=>
        {
          this.closeRegistrationForm();
        })
      }
    })



    // newspaperId:number,newspaperName:string,yPrice:number,mPrice:number,wPrice:number)
   
   
  }

}
