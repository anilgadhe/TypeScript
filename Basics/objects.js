var Product = {
    id: 2,
    name: "Iphone",
    price: 608000,
    qty: 2,
    Total: function () {
        return this.price * this.qty;
    },
    Print: function () {
        console.log("i am print");
    }
};
console.log(Product.Total());

