export class Mysubscriptions {
    newspaperName!:string
    subscriptionType!:string
    agencyName!:string
    cost!:number
    constructor(name:string,subscriptionType:string,cost:number,agencyName:string)
    {
        this.agencyName=agencyName
        this.cost=cost
        this.newspaperName=name
        this.subscriptionType=subscriptionType
    }

}
