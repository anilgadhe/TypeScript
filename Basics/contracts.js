var Device = {
    name: "VIVO",
    Price: 12000,
    Stock: true,
    Rating: 8,
    Qty: 1,
    CategoryName: "Android",
    VendorName: "China",
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        console.log("Vendor :".concat(this.VendorName, " \n Name :").concat(this.name, " \n Price ").concat(this.Price));
    }
};
Device.Print();
console.log("Total : ".concat(Device.Total()));
