function tampilkanAngka(n){
    if(n === 0) {
        return; //base case untuk meberhentikan rekursif
    }
    console.log(n);
    return tampilkanAngka(n - 1);
}
tampilkanAngka(10);

// menghitung faktorial (n!)

function faktorial(n){
    if(n === 0) return 1;
    return n * faktorial(n - 1);
}

var angka = parseInt(prompt('masukkan angka!'));
console.log(faktorial(angka));

// menampilkan bilangan ganjil pada rekursif
function angka(n){
    if(n === 11){
        return;
    }
    console.log(n)
    return angka(n + 1);
}
angka(1);

var s = 'hello wordl';
var a = 'nama saya';




