// product section ;
let product = 5500;
let discount = 0;

if (product >= 5000) {
  discount = (product * 10) / 100;
} else if (product >= 3000) {
  discount = (product * 5) / 100;
} else {
  discount = 0;
}
let newamount = product - discount;
let vat = (newamount * 5) / 100;
let finalbill = newamount + vat;

console.log("Product", product, "Tk");
console.log("Discount", discount, "Tk");
console.log("New Amount", newamount, "Tk");
console.log("vat", vat, "Tk");
console.log("Final Blill", finalbill, "Tk");
