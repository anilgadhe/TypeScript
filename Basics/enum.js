var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ok"] = 0] = "ok";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Unotherized"] = 405] = "Unotherized";
})(StatusCode || (StatusCode = {}));
console.log("".concat(StatusCode.NotFound, "\n ").concat(StatusCode[404], " \n ").concat(StatusCode.Unotherized));
