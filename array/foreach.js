var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e){
//     console.log(e)
// });

var mhs = ['mika','rudi','seto'];

// e => elemen array, i => index array
mhs.forEach(function(e, i){
    console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
})