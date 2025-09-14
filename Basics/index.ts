
let product:{id:number,name:string,Qty:number,readonly Price?:number}={

 id:1,
 name:"Tv",
 Qty:4,
 Price:5000 
}

product.name="Samsung tv"

// product.Price = 3453434;  is it readonly

if(product.Price){
    console.log(`product ${product.id} \n name : ${product.name} \n Qty : ${product.Qty} \n Price: ${product.Price}`);
    
}else{
   console.log(`product ${product.id} \n name : ${product.name}`); 
}