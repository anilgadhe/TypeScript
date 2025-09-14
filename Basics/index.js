var product = {
    id: 1,
    name: "Tv",
    Qty: 4,
    Price: 5000
};
product.name = "Samsung tv";
product.Price = 3453434;
if (product.Price) {
    console.log("product ".concat(product.id, " \n name : ").concat(product.name, " \n Qty : ").concat(product.Qty, " \n Price: ").concat(product.Price));
}
else {
    console.log("product ".concat(product.id, " \n name : ").concat(product.name));
}
