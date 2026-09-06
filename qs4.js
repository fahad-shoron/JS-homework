// electricity bill section ;
let units = 300;
let electricityBill = 0;

if (units <= 100) {
  electricityBill = units * 5;
} else if (units <= 200) {
  electricityBill = (100 * 5) + ((units - 100) * 7);
} else {
  electricityBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Units Used", units);
console.log("Total Electricity Bill", electricityBill, "Tk");

