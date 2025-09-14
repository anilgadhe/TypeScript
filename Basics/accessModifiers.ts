
class Product
{
    public Name:string='';
    private price:number=0;
    protected stock:boolean= false;

        Print(){

          this.Name;

          this.price;

          this.stock;
     }
}

class Derived extends Product 
{

    Print(){
         let obj = new Derived();
         console.log(obj.stock);

         console.log(`using this : ${this.stock}`);   
         
    }
}


let p = new Derived();

p.Print();