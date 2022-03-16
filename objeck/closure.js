// closure => function yang menjalankan function di dalamnya yang mengakses parent nya

function init(){
let nama = 'Sawada';
function tampilkanNama(){
        console.log(nama);
    }
    tampilkanNama()
}

init()