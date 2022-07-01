export class Userhome {
    newspaperName!:string
    name!:string
    agencyName!:string
    contactNo!:number
    newspaperId!:number
    constructor(newspaperId:number,newspaperName:string,vendorName:string,agencyName:string,contactNo:number)
    {
        this.newspaperId=newspaperId,
        this.newspaperName=newspaperName,
        this.name=vendorName,
        this.agencyName=agencyName,
        this.contactNo=contactNo
    }

}
