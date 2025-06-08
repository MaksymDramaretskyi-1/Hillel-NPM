const num = +prompt("Enter a number:");
let current = 1;
let canBePowerOf3 = false;

while (current <= num) {
  if (current === num) {
    canBePowerOf3 = true;
    break;
  }
  current *= 3;
}

if (canBePowerOf3) {
  document.write(`${num} can be obtained as 3 raised to some power.`);
} else {
  document.write(`${num} cannot be obtained as 3 raised to any power.`);
}
