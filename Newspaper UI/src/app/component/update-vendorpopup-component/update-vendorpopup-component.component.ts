import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VendorData } from 'src/app/classes/vendor-data';
import {VendorService} from 'src/app/services/vendor.service'
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-update-vendorpopup-component',
  templateUrl: './update-vendorpopup-component.component.html',
  styleUrls: ['./update-vendorpopup-component.component.css']
})
export class UpdateVendorpopupComponentComponent implements OnInit {
  // name!:string;
  //  agencyName!:string;
  //  contact!:number;
   email!:string;
   updatevendorform!:FormGroup
   @Input() vendorData!: VendorData; 

  constructor(public dialogRef:MatDialog, private vendorService: VendorService,private formBuilder:FormBuilder,private router:Router ) { }

  ngOnInit(): void {
    // console.log("This is popup .ts",this.vendorData)
    this.email=this.vendorData.email
    this.updatevendorform=this.formBuilder.group({
    name:[this.vendorData.name,Validators.required],
    agencyName:[this.vendorData.agencyName,Validators.required],
    contact:[this.vendorData.contact,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    
    //   name:['',Validators.required],
    //   agencyName:['',Validators.required],
    //   contact:['',Validators.required]
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




  updateVendor(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let vt=new VendorData(this.updatevendorform.value.contact,this.email,this.updatevendorform.value.agencyName,this.updatevendorform.value.name);
    
        this.vendorService.updateVendor(vt);
        Swal.fire('Saved!', '', 'success').then((result)=>
        {
          this.closeRegistrationForm();
            window.location.reload();
          
        })
      } else if (result.isDenied) {
        
        Swal.fire('Changes are not saved', '', 'info').then((result)=>
        {
          this.closeRegistrationForm();
        })
      }
    })
   }



}
