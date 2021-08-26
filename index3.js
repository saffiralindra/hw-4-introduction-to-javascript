let arr = [1, 7, 4, 6, 3];
let min = arr[0];
let max = arr[0];
let cek = arr[0];

function checkArray() {
   for (let c = 1; c < arr.length; c++) {
      if (arr[c] == cek + 1 || arr[c] == cek - 1) {
         console.log("Angka Berurutan");
         cek = "Angka Berurutan";
         break;
      } else {
         cek = arr[c];
      }
   }
}

checkArray();

if (cek == "Angka Berurutan") {
   console.log("Tidak cek angka");
} else {
   for (let a = 1; a < arr.length; a++) {
      if (min < arr[a]) {
         continue;
      } else {
         min = arr[a];
      }
   }

   for (let b = 1; b < arr.length; b++) {
      if (max < arr[b]) {
         max = arr[b];
      } else {
         continue;
      }
   }
   console.log("Nilai Minimum : " + min);
   console.log("Nilai Maksimum : " + max);
}
