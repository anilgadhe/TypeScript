
interface category {
    CategoryName: string,
}

interface vendor {
    VendorName: string,
}


interface product extends category, vendor {

    name: string,

    readonly Price: number;

    Stock: boolean;

    Rating?: number;

    Qty: number;

    Total(): number;

    Print?(): void;

}


let Device: product=
{

    name: "VIVO",

     Price: 12000,

    Stock: true,

    Rating : 8,

    Qty: 1,

     CategoryName:"Android",

     VendorName:"China",

    Total:function(){
        return this.Price * this.Qty
    },

    Print:function(){
      console.log(`Vendor :${this.VendorName} \n Name :${this.name} \n Price ${this.Price}`); 
    } 

}


Device.Print();

console.log(`Total : ${Device.Total()}`);

