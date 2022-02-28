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

var penumpang = ['mika',undefined,'doddy'];

var tambahPenumpang = function(namaPenumpang, penumpang){
    if( penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++) {
            // jika ada kursi yang kosong
            if(penumpang[i] == undefined) {
                // tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            } 
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            else if(i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang); 
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}