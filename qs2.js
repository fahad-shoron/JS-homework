let distance = 7;
let totalFare = 0;

if (distance <= 2) {
  totalFare = discount * 50;
} else if (discount <= 3) {
  totalFare = 2 * 50 + (distance - 2) * 40;
} else {
  totalFare = 2 * 50 + 3 * 50 + (distance - 5) * 30;
}

console.log("Distance", distance, "km");
console.log("total fare", totalFare, "Tk");
