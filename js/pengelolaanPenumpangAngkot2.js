/* 
tambahPenumpang()
    - 2 parameter
        - namaPenumpang()
        - arrayPenumpang()
Rules:
    - jika angkot kosong, penumpang naik dikursi pertama
    - penumpang berikutnya duduk di kursi selanjutnya secara berurutan
    - jika kursi kosong(karena penumpang turun),  penumpang yang naik berikutnya duduk dikursikosong terlebih dahulu
    - asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
    - nama penumpang yang naik tidak boleh sama, menghindari kebingungan ketika penumpang turun
*/

var penumpang = [];

var tambahPenumpang = function(nama, penumpang){
    if(penumpang.length == 0){
        penumpang.push(nama);
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = nama;
                return penumpang;
            } else if(penumpang[i] == nama) {
                console.log(nama + ' sudah ada');
                return penumpang;
            } else if(i == penumpang.length -1){
                penumpang.push(nama);
                return penumpang;
            }
        }
    }
}

/* hapusPenumpang() 
    paraemeter
        nama
        array
    rules{
        1. jika angkot kosong tampilkan pesan angkotkosong
        2. jika ada penumpang yang namanya sesuai, hapus penumpang 
            pada aaray dengan nilai undifined
        3. jika tidak ada penumpang yang namanya sesuai tampilkan pesan kesalhan
    }
*/

var hapusPenumpang = function(nama, penumpang){
    if(penumpang.length == 0){
        console.log('angkot masih kosong');
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == nama) {
                penumpang[i] = undefined;
                return penumpang;
            } else if(i == penumpang.length - 1){
                console.log('penumpang tidak ada');
                return penumpang;
            }
        }
    }
}