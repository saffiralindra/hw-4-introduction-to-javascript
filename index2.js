let arr = [6, 10, 4, 6, 9];
let sum = 0;

for (let a = 0; a < arr.length; a++) {
   sum = sum + arr[a];
}
if (sum > 30) {
   console.log(sum);
   console.log("It's Big");
} else {
   console.log(sum);
}
