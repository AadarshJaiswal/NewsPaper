export class User {
    name!:String
    email!:String
    contact!:number
    password!:String
    type!:String
    User(email:string,contact:number,password:string,name:string,type:string)
    {
        this.email=email,
        this.contact=contact,
        this.password=password,
        this.name=name,
        this.type=type
    }
   
}
