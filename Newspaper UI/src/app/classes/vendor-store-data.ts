import { concatMap } from "rxjs";
import { User } from "./user";

export class VendorStoreData {
    name!: string; 
    agencyName!: string;
    email!:String
    contact!:number
    password!:String
   

   constructor( name :string,agencyName:string,email :string,password:string,contact :number){
    this.agencyName=agencyName
     this.name=name
     this.email=email
     this.contact=contact
     this.password=password
    }
}
