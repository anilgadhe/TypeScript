
interface Iproduct
{
    Name:string;
    Price:number;
}

function FetchData <T>(data:T):T
{
    return data;
}


console.log(FetchData(FetchData<number>(20)));
console.log(FetchData(FetchData<string>("A")));
console.log(FetchData(FetchData<string[]>(["A","B","C","D"])));
console.log(FetchData(FetchData<Iproduct>({Name:"Anil",Price:2000})));
console.log(FetchData(FetchData<Iproduct[]>([{Name:"Anil",Price:2000},{Name:"Ganesh",Price:3000}])));



