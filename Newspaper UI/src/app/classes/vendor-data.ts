export class VendorData {
    vendor_id!: number;
    name!: string; 
    agencyName!: string; 
    contact!: number;
    email!:string;
   constructor(contact:number,email:string,agency_name:string,name:string){
       this.agencyName=agency_name;
       this.contact=contact;
       this.email=email;
       this.name=name;

       }
}
