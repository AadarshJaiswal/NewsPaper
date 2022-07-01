export class Newspaper {
  newspaperId!:number
  newspaperName!:string
  yearlyPrice!:number
  monthlyPrice!:number
  weeklyPrice!:number
  vendorId!:string
  constructor(newspaperName:string,yPrice:number,mPrice:number,wPrice:number,vendorId:string)
  {
      this.newspaperName=newspaperName,
      this.yearlyPrice=yPrice,
      this.monthlyPrice=mPrice,
      this.weeklyPrice=wPrice,
      this.vendorId=vendorId
  }
  Newspaper()
  {}
 
}
