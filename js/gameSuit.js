
var tanya = true;

while(tanya){
    // menangkap pilihan plyaer
    var p = prompt('Pilih: gajah, semut, orang');

    // menaangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    console.log(comp);

    // menentukan tules
    var hasil = '';

    if(p == comp) {
        hasil = 'SERI';
    } else if(p == 'gajah'){
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if(p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if(p == 'semut'){
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }

    alert('Kamu memilih : ' + p + ' dan komputer : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
}
alert('terimakasih sudah bermain');
