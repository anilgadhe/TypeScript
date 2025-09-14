
function sum(a:any,b:any){

    return a+b;
}

function Calculate<T>(a:T ,b:T):T
{

   return sum(a,b);

}

console.log(Calculate<number>(10,60));
