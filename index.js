const str = "The quick brown fox jumps over the lazy dog";
const vocal = ["a", "i", "u", "e", "o"];
const bintang = "*";
let hasil = "";
let b = 0;
//var str;

function awal() {
   console.log("Input kata : ") + str;
   if (str != "") {
      cekKata(str);
   } else {
      console.log("Tidak ada yang diinput");
   }
}

function cekKata() {
   for (a = 0; a < str.length; a++) {
      for (b = 0; b < vocal.length; b++) {
         if (str[a] == vocal[b]) {
            hasil = hasil + bintang;
            break;
         }
      }
      if (str[a] == vocal[b]) {
         continue;
      } else {
         hasil = hasil + str[a];
      }
   }
   console.log(hasil);
}

awal();
