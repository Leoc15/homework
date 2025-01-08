function message(msg) {
    return msg;
}
var hi = "hello world!!";
console.log(message(hi));
var newPhone = {
    brand: "google",
    model: "pixel 9 pro xl",
    price: 1200.00
};
console.log(newPhone);
var candy = /** @class */ (function () {
    function candy(name, flavor) {
        this.name = name;
        this.flavor = flavor;
    }
    return candy;
}());
var newCandy = new candy("tri bala", "strawberry");
console.log(newCandy);
