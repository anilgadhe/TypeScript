var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        var _this = this;
        Object.keys(this.ConnectionString).map(function (key) {
            console.log("".concat(key, ":").concat(_this.ConnectionString[key]));
        });
    };
    return Database;
}());
var Mysql = new Database();
Mysql.ConnectionString = { host: "anil", user: "root", password: "123" };
Mysql.Connect();
var mongoDB = new Database();
mongoDB.ConnectionString = { url: "http://localhost:0.0.1.27017" };
mongoDB.Connect();
