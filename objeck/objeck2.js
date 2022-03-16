
// Contructor
// function Mahasiswa(nama, nrp, email, jurusan){
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// var mhs2 = new Mahasiswa('Erik', '21212121', 'erik@gmail.com', 'SI');

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(this.energi)
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(this.energi)
//     }
        
    
// }

// let mika = new Mahasiswa('Mika', 10)

// Prototype

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
	this.energi += porsi;
	return ` selamat makan ${this.nama}`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `selamat bermain ${this.nama}`
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `selamat tidur ${this.nama}`
}

let soda = new Mahasiswa('Soda', 10);





























