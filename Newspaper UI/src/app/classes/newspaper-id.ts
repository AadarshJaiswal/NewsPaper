export class NewspaperId {
    newspaperId!:number
    newspaperName!:string
    yearlyPrice!:number
    monthlyPrice!:number
    weeklyPrice!:number
    constructor(newspaperId:number,newspaperName:string,yPrice:number,mPrice:number,wPrice:number)
    {
        this.newspaperId=newspaperId
        this.newspaperName=newspaperName
        this.yearlyPrice=yPrice
        this.monthlyPrice=mPrice
        this.weeklyPrice=wPrice
    }
   
}
