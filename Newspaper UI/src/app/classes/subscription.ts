export class Subscription {
    newspaperId!:number;
    subscribetype!:string;
    cost!:number;
    emailId!:string;
    vendorId!:number;

    constructor(newspaperId:number,subscribetype:string,cost:number,emailId:string,vendorId:number)
    {
this.newspaperId=newspaperId;
this.subscribetype=subscribetype;
this.cost=cost;
this.emailId=emailId;
this.vendorId=vendorId;
    }

}
