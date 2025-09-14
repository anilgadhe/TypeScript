
enum StatusCode
{
    ok,
    NotFound = 404,
    Unotherized,
    authenticate = "yes it is",
   //validate   its must initialized
}


console.log(`${StatusCode.NotFound}\n ${StatusCode[404]} \n ${StatusCode.Unotherized} \n ${StatusCode.authenticate}`);
