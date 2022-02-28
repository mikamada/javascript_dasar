// menambah isi array
// var arr1 = [];
// arr1[0] = 'kucing';

// menghapus isi array
// var arr2 = ['panda','sapi'];

// menampilkan isi array
// var hewan = ['kucing','monyet','ayam','sapi',[4,5,6]];

// for(var i = 0; i < hewan.length; i++){
//     console.log(hewan[i]);
// }


// method pada array
// 1. join => menggabungkan seluruh isi array dan mengubah menjadi string
// var arr3 = ['kucing','anjing','tikus',1,true];
// console.log(arr3.join(' '));

/* 2. push => menambahkan elemen array pada index terakhir
      pop  => menghilangkan elemen array pada index terahir */
// arr3.push('kadal','kijang');
// console.log(arr3);

// arr3.pop();
// console.log(arr3);

// 3. unshift & shift => menambah atau menghilangkan elemen array pada index pertama
// arr3.unshift('gajah');
// console.log(arr3);

// arr3.shift();
// console.log(arr3);

// 4. splice => untuk menyisipkan elemen array
// splice(indexMullai, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// jika tidak ada yg dihapus isikan 0
// var arr3 = ['kucing','anjing','ular']; 
// tambahkan elemen baru setlah elemen anjing
// arr3.splice(2, 0, 'kuda', 'sapi');

// hapus 2 elemen mulai dari index 1 dan tambahkan 2 elemen baru
// arr3.splice(1, 2, 'kuda', 'sapi');
// console.log(arr3.join(' '));

// 5. slice => menyisipkan array dan menjadikannya array baru
// slice(indexMulai, indexAkhir);
// var arr1 = ['nova','ardi','rudi','daru'];
// sisipkan elemen 'ardi' dan 'rudi' menjadi array baru
// slice menghasilkan array baru jadi harus ditampung
// var arr2 = arr1.slice(1,3);
// console.log(arr2.join(' - '));

// 6. sort() => mengurutkan dari yg terkecil - besar (string/int)
// var angka = [1,2,3,10,4,6,8,20];
// var abjad = ['a','b','d','c','e'];
// // abjad.sort();
// // console.log(abjad);
// angka.sort(function(a,b){
//       return a-b;
// });
// console.log(angka);

// 7. filter => mengembalikan array
// var x = [1,2,3,10,6,5,8,9];
// var y = x.filter(function(e){
//       return e > 5;
// });
// console.log(y);

// 8. find => hanya mengembalikan 1 nilai
var x = [1,2,3,10,6,5,8,9];
var y = x.find(function(e){
      return e == 5;
});

console.log(y);



